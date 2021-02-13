"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gl_matrix_1 = require("gl-matrix");
const datatexture_1 = require("../../gl/datatexture");
const modelinstance_1 = require("../../modelinstance");
const skeleton_1 = require("./skeleton");
const standardmaterial_1 = require("./standardmaterial");
const boneHeap = gl_matrix_1.mat4.create();
/**
 * An M3 model instance.
 */
class M3ModelInstance extends modelinstance_1.default {
    constructor(model) {
        super(model);
        this.skeleton = null;
        this.teamColor = 0;
        this.vertexColor = new Float32Array([1, 1, 1, 1]);
        this.sequence = -1;
        this.frame = 0;
        this.sequenceLoopMode = 0;
        this.sequenceEnded = false;
        this.forced = true;
        this.boneTexture = null;
        this.skeleton = new skeleton_1.default(this);
        // This takes care of calling setSequence before the model is loaded.
        // In this case, this.sequence will be set, but nothing else is changed.
        // Now that the model is loaded, set it again to do the real work.
        if (this.sequence !== -1) {
            this.setSequence(this.sequence);
        }
        let boneLookup = model.boneLookup;
        this.boneTexture = new datatexture_1.default(model.viewer.gl, 3, boneLookup.length * 4, 1);
    }
    /**
     * Override the texture of the layer at the given index in the material at the given index.
     *
     * If a texture isn't given, removes the override if there was one.
     */
    setTexture(material, layer, texture) {
        this.overrideTexture(material * standardmaterial_1.STANDARD_MATERIAL_OFFSET + layer, texture);
    }
    updateSkeletonAndBoneTexture(dt) {
        let model = this.model;
        let viewer = model.viewer;
        let buffer = viewer.buffer;
        let boneLookup = model.boneLookup;
        let skeleton = this.skeleton;
        let nodes = skeleton.nodes;
        let bindPose = model.initialReference;
        let count = boneLookup.length;
        let isAnimated = this.sequence !== -1;
        let boneTexture = this.boneTexture;
        skeleton.update(dt);
        // Ensure there is enough memory for all of the instances data.
        buffer.reserve(count * 48);
        let floatView = buffer.floatView;
        let finalMatrix;
        if (isAnimated) {
            finalMatrix = boneHeap;
        }
        else {
            finalMatrix = this.worldMatrix;
        }
        for (let i = 0; i < count; i++) {
            let offset = i * 12;
            if (isAnimated) {
                let bone = boneLookup[i];
                // Every bone has to be multiplied by its bind pose counterpart for rendering.
                finalMatrix = gl_matrix_1.mat4.mul(boneHeap, nodes[bone].worldMatrix, bindPose[bone]);
            }
            floatView[offset + 0] = finalMatrix[0];
            floatView[offset + 1] = finalMatrix[1];
            floatView[offset + 2] = finalMatrix[2];
            floatView[offset + 3] = finalMatrix[4];
            floatView[offset + 4] = finalMatrix[5];
            floatView[offset + 5] = finalMatrix[6];
            floatView[offset + 6] = finalMatrix[8];
            floatView[offset + 7] = finalMatrix[9];
            floatView[offset + 8] = finalMatrix[10];
            floatView[offset + 9] = finalMatrix[12];
            floatView[offset + 10] = finalMatrix[13];
            floatView[offset + 11] = finalMatrix[14];
        }
        boneTexture.bindAndUpdate(floatView, boneTexture.width, 1);
    }
    renderOpaque() {
        let model = this.model;
        let batches = model.batches;
        if (batches.length) {
            let viewer = model.viewer;
            let m3Cache = viewer.sharedCache.get('m3');
            let gl = viewer.gl;
            let vertexSize = model.vertexSize;
            let uvSetCount = model.uvSetCount;
            let shader = m3Cache.standardShaders[uvSetCount - 1];
            let attribs = shader.attribs;
            let uniforms = shader.uniforms;
            let scene = this.scene;
            let camera = scene.camera;
            let textureOverrides = this.textureOverrides;
            let boneTexture = this.boneTexture;
            shader.use();
            gl.uniform1f(uniforms.u_teamColor, this.teamColor);
            gl.uniform4fv(uniforms.u_vertexColor, this.vertexColor);
            gl.uniformMatrix4fv(uniforms.u_VP, false, camera.viewProjectionMatrix);
            gl.uniformMatrix4fv(uniforms.u_MV, false, camera.viewMatrix);
            gl.uniform3fv(uniforms.u_eyePos, camera.location);
            gl.uniform3fv(uniforms.u_lightPos, m3Cache.lightPosition);
            boneTexture.bind(15);
            gl.uniform1i(uniforms.u_boneMap, 15);
            gl.uniform1f(uniforms.u_vectorSize, 1 / boneTexture.width);
            gl.uniform1f(uniforms.u_rowSize, 1);
            gl.bindBuffer(gl.ARRAY_BUFFER, model.arrayBuffer);
            gl.vertexAttribPointer(attribs.a_position, 3, gl.FLOAT, false, vertexSize, 0);
            gl.vertexAttribPointer(attribs.a_weights, 4, gl.UNSIGNED_BYTE, false, vertexSize, 12);
            gl.vertexAttribPointer(attribs.a_bones, 4, gl.UNSIGNED_BYTE, false, vertexSize, 16);
            gl.vertexAttribPointer(attribs.a_normal, 4, gl.UNSIGNED_BYTE, false, vertexSize, 20);
            for (let i = 0; i < uvSetCount; i++) {
                gl.vertexAttribPointer(attribs[`a_uv${i}`], 2, gl.SHORT, false, vertexSize, 24 + i * 4);
            }
            gl.vertexAttribPointer(attribs.a_tangent, 4, gl.UNSIGNED_BYTE, false, vertexSize, 24 + uvSetCount * 4);
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, model.elementBuffer);
            for (let batch of batches) {
                let material = batch.material;
                let region = batch.region;
                material.bind(shader, textureOverrides);
                region.render(shader);
                material.unbind(shader); // This is required to not use by mistake layers from this material that were bound and are not overwritten by the next material
            }
        }
    }
    updateAnimations(dt) {
        let sequenceId = this.sequence;
        if (sequenceId !== -1) {
            let model = this.model;
            let sequence = model.sequences[sequenceId];
            let interval = sequence.interval;
            this.frame += model.viewer.frameTime;
            if (this.frame > interval[1]) {
                if ((this.sequenceLoopMode === 0 && !(sequence.flags & 0x1)) || this.sequenceLoopMode === 2) {
                    this.frame = interval[0];
                }
                else {
                    this.frame = interval[1];
                }
                this.sequenceEnded = true;
            }
            else {
                this.sequenceEnded = false;
            }
        }
        if (this.forced || sequenceId !== -1) {
            this.forced = false;
            this.updateSkeletonAndBoneTexture(dt);
        }
    }
    setTeamColor(id) {
        this.teamColor = id;
        return this;
    }
    setVertexColor(color) {
        this.vertexColor.set(color);
        return this;
    }
    setSequence(id) {
        let model = this.model;
        this.sequence = id;
        this.frame = 0;
        if (id < -1 || id > model.sequences.length - 1) {
            id = -1;
            this.sequence = id;
        }
        // Do a forced update, so non-animated data can be skipped in future updates
        this.forced = true;
        return this;
    }
    setSequenceLoopMode(mode) {
        this.sequenceLoopMode = mode;
        return this;
    }
    getAttachment(id) {
        let model = this.model;
        let attachment = model.attachments[id];
        if (attachment) {
            return this.skeleton.nodes[attachment.bone];
        }
    }
}
exports.default = M3ModelInstance;
