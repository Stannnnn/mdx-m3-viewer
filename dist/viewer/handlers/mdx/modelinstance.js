"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gl_matrix_1 = require("gl-matrix");
const modelinstance_1 = require("../../modelinstance");
const node_1 = require("../../node");
const datatexture_1 = require("../../gl/datatexture");
const node_2 = require("./node");
const attachmentinstance_1 = require("./attachmentinstance");
const particleemitter_1 = require("./particleemitter");
const particleemitter2_1 = require("./particleemitter2");
const ribbonemitter_1 = require("./ribbonemitter");
const eventobjectspnemitter_1 = require("./eventobjectspnemitter");
const eventobjectsplemitter_1 = require("./eventobjectsplemitter");
const eventobjectubremitter_1 = require("./eventobjectubremitter");
const eventobjectsndemitter_1 = require("./eventobjectsndemitter");
const geometryemitterfuncs_1 = require("./geometryemitterfuncs");
const visibilityHeap = new Float32Array(1);
const translationHeap = gl_matrix_1.vec3.create();
const rotationHeap = gl_matrix_1.quat.create();
const scaleHeap = gl_matrix_1.vec3.create();
const colorHeap = new Float32Array(3);
const alphaHeap = new Float32Array(1);
const textureIdHeap = new Uint32Array(1);
/**
 * An MDX model instance.
 */
class MdxModelInstance extends modelinstance_1.default {
    constructor(model) {
        super(model);
        this.attachments = [];
        this.particleEmitters = [];
        this.particleEmitters2 = [];
        this.ribbonEmitters = [];
        this.eventObjectEmitters = [];
        this.nodes = [];
        this.sortedNodes = [];
        this.frame = 0;
        // Global sequences
        this.counter = 0;
        this.sequence = -1;
        this.sequenceLoopMode = 0;
        this.sequenceEnded = false;
        this.teamColor = 0;
        this.vertexColor = new Float32Array([1, 1, 1, 1]);
        // Particles do not spawn when the sequence is -1, or when the sequence finished and it's not repeating
        this.allowParticleSpawn = false;
        // If forced is true, everything will update regardless of variancy.
        // Any later non-forced update can then use variancy to skip updating things.
        // It is set to true every time the sequence is set with setSequence().
        this.forced = true;
        this.geosetColors = [];
        this.layerAlphas = [];
        this.layerTextures = [];
        this.uvAnims = [];
        this.worldMatrices = null;
        this.boneTexture = null;
        for (let i = 0, l = model.geosets.length; i < l; i++) {
            this.geosetColors[i] = new Float32Array(4);
        }
        for (let i = 0, l = model.layers.length; i < l; i++) {
            this.layerAlphas[i] = 0;
            this.layerTextures[i] = 0;
            this.uvAnims[i] = new Float32Array(5);
        }
        // Create the needed amount of shared nodes.
        let sharedNodeData = node_1.createSkeletalNodes(model.genericObjects.length, node_2.default);
        let nodes = sharedNodeData.nodes;
        let nodeIndex = 0;
        this.nodes.push(...nodes);
        // A shared typed array for all world matrices of the internal nodes.
        this.worldMatrices = sharedNodeData.worldMatrices;
        // And now initialize all of the nodes and objects
        for (let bone of model.bones) {
            this.initNode(nodes, nodes[nodeIndex++], bone);
        }
        for (let light of model.lights) {
            this.initNode(nodes, nodes[nodeIndex++], light);
        }
        for (let helper of model.helpers) {
            this.initNode(nodes, nodes[nodeIndex++], helper);
        }
        for (let attachment of model.attachments) {
            let attachmentInstance;
            // Attachments may have game models attached to them, such as Undead and Nightelf building animations.
            if (attachment.internalModel) {
                attachmentInstance = new attachmentinstance_1.default(this, attachment);
                this.attachments.push(attachmentInstance);
            }
            this.initNode(nodes, nodes[nodeIndex++], attachment, attachmentInstance);
        }
        for (let emitterObject of model.particleEmitters) {
            let emitter = new particleemitter_1.default(this, emitterObject);
            this.particleEmitters.push(emitter);
            this.initNode(nodes, nodes[nodeIndex++], emitterObject, emitter);
        }
        for (let emitterObject of model.particleEmitters2) {
            let emitter = new particleemitter2_1.default(this, emitterObject);
            this.particleEmitters2.push(emitter);
            this.initNode(nodes, nodes[nodeIndex++], emitterObject, emitter);
        }
        for (let emitterObject of model.ribbonEmitters) {
            let emitter = new ribbonemitter_1.default(this, emitterObject);
            this.ribbonEmitters.push(emitter);
            this.initNode(nodes, nodes[nodeIndex++], emitterObject, emitter);
        }
        for (let emitterObject of model.eventObjects) {
            let type = emitterObject.type;
            let emitter;
            if (type === 'SPN') {
                emitter = new eventobjectspnemitter_1.default(this, emitterObject);
            }
            else if (type === 'SPL') {
                emitter = new eventobjectsplemitter_1.default(this, emitterObject);
            }
            else if (type === 'UBR') {
                emitter = new eventobjectubremitter_1.default(this, emitterObject);
            }
            else {
                emitter = new eventobjectsndemitter_1.default(this, emitterObject);
            }
            this.eventObjectEmitters.push(emitter);
            this.initNode(nodes, nodes[nodeIndex++], emitterObject, emitter);
        }
        for (let collisionShape of model.collisionShapes) {
            this.initNode(nodes, nodes[nodeIndex++], collisionShape);
        }
        // Save a sorted array of all of the nodes, such that every child node comes after its parent.
        // This allows for flat iteration when updating.
        let hierarchy = model.hierarchy;
        for (let i = 0, l = nodes.length; i < l; i++) {
            this.sortedNodes[i] = nodes[hierarchy[i]];
        }
        if (model.bones.length) {
            this.boneTexture = new datatexture_1.default(model.viewer.gl, 4, model.bones.length * 4, 1);
        }
    }
    /**
     * Override the texture at the given index.
     *
     * If a texture isn't given, removes the override if there was one.
     */
    setTexture(index, texture) {
        this.overrideTexture(index, texture);
    }
    /**
     * Override the texture of the particle emitter the given index.
     *
     * If a texture isn't given, removes the override if there was one.
     */
    setParticle2Texture(index, texture) {
        this.overrideTexture(geometryemitterfuncs_1.EMITTER_PARTICLE2_TEXTURE_OFFSET + index, texture);
    }
    /**
     * Override the texture of the event emitter the given index.
     *
     * If a texture isn't given, removes the override if there was one.
     */
    setEventTexture(index, texture) {
        this.overrideTexture(geometryemitterfuncs_1.EMITTER_EVENT_TEXTURE_OFFSET + index, texture);
    }
    /**
     * Clear all of the emitted objects that belong to this instance.
     */
    clearEmittedObjects() {
        for (let emitter of this.particleEmitters) {
            emitter.clear();
        }
        for (let emitter of this.particleEmitters2) {
            emitter.clear();
        }
        for (let emitter of this.ribbonEmitters) {
            emitter.clear();
        }
        for (let emitter of this.eventObjectEmitters) {
            emitter.clear();
        }
    }
    /**
     * Initialize a skeletal node.
     */
    initNode(nodes, node, genericObject, object) {
        gl_matrix_1.vec3.copy(node.pivot, genericObject.pivot);
        if (genericObject.parentId === -1) {
            node.parent = this;
        }
        else {
            node.parent = nodes[genericObject.parentId];
        }
        /// TODO: single-axis billboarding
        if (genericObject.billboarded) {
            node.billboarded = true;
        } // else if (genericObject.billboardedX) {
        //   node.billboardedX = true;
        // } else if (genericObject.billboardedY) {
        //   node.billboardedY = true;
        // } else if (genericObject.billboardedZ) {
        //   node.billboardedZ = true;
        // }
        if (object) {
            node.object = object;
        }
    }
    /**
     * Overriden to hide also attachment models.
     */
    hide() {
        super.hide();
        this.resetAttachments();
    }
    /**
     * Updates all of this instance internal nodes and objects.
     * Nodes that are determined to not be visible will not be updated, nor will any of their children down the hierarchy.
     */
    updateNodes(dt, forced) {
        let sequence = this.sequence;
        let frame = this.frame;
        let counter = this.counter;
        let sortedNodes = this.sortedNodes;
        let model = this.model;
        let sortedGenericObjects = model.sortedGenericObjects;
        let scene = this.scene;
        // Update the nodes
        for (let i = 0, l = sortedNodes.length; i < l; i++) {
            let genericObject = sortedGenericObjects[i];
            let node = sortedNodes[i];
            let parent = node.parent;
            let wasDirty = forced || parent.wasDirty || genericObject.anyBillboarding;
            let variants = genericObject.variants;
            // Local node transformation.
            // Use variants to skip animation data when possible.
            if (forced || variants.generic[sequence]) {
                wasDirty = true;
                // Translation
                if (forced || variants.translation[sequence]) {
                    genericObject.getTranslation(node.localLocation, sequence, frame, counter);
                }
                // Rotation
                if (forced || variants.rotation[sequence]) {
                    genericObject.getRotation(node.localRotation, sequence, frame, counter);
                }
                // Scale
                if (forced || variants.scale[sequence]) {
                    genericObject.getScale(node.localScale, sequence, frame, counter);
                }
            }
            node.wasDirty = wasDirty;
            // If this is a forced update, or this node's local data was updated, or the parent node was updated, do a full world update.
            if (wasDirty) {
                node.recalculateTransformation(scene);
            }
            // If there is an instance object associated with this node (emitter/attachment), and it is visible, update it.
            if (node.object) {
                genericObject.getVisibility(visibilityHeap, sequence, frame, counter);
                // If the attachment/emitter is visible, update it.
                if (visibilityHeap[0] > 0) {
                    node.object.update(dt);
                }
            }
            // Update all of the node's non-skeletal children, which will update their children, and so on.
            node.updateChildren(dt, scene);
        }
    }
    // If a model has no sequences or is running no sequence, it will only update once since it will never be forced to update.
    // This is generally the desired behavior, except when it is moved by the client.
    // Therefore, if an instance is transformed, always do a forced update.
    recalculateTransformation() {
        super.recalculateTransformation();
        this.forced = true;
    }
    /**
     * Update the batch data.
     */
    updateBatches(forced) {
        let sequence = this.sequence;
        let frame = this.frame;
        let counter = this.counter;
        let model = this.model;
        let geosets = model.geosets;
        let layers = model.layers;
        let geosetColors = this.geosetColors;
        let layerAlphas = this.layerAlphas;
        let layerTextures = this.layerTextures;
        let uvAnims = this.uvAnims;
        // Geosets
        for (let i = 0, l = geosets.length; i < l; i++) {
            let geoset = geosets[i];
            let geosetAnimation = geoset.geosetAnimation;
            let geosetColor = geosetColors[i];
            if (geosetAnimation) {
                // Color
                if (forced || geosetAnimation.variants.color[sequence]) {
                    geosetAnimation.getColor(colorHeap, sequence, frame, counter);
                    geosetColor[0] = colorHeap[0];
                    geosetColor[1] = colorHeap[1];
                    geosetColor[2] = colorHeap[2];
                }
                // Alpha
                if (forced || geosetAnimation.variants.alpha[sequence]) {
                    geosetAnimation.getAlpha(alphaHeap, sequence, frame, counter);
                    geosetColor[3] = alphaHeap[0];
                }
            }
            else if (forced) {
                geosetColor[0] = 1;
                geosetColor[1] = 1;
                geosetColor[2] = 1;
                geosetColor[3] = 1;
            }
        }
        // Layers
        for (let i = 0, l = layers.length; i < l; i++) {
            let layer = layers[i];
            let textureAnimation = layer.textureAnimation;
            let uvAnim = uvAnims[i];
            // Alpha
            if (forced || layer.variants.alpha[sequence]) {
                layer.getAlpha(alphaHeap, sequence, frame, counter);
                layerAlphas[i] = alphaHeap[0];
            }
            // Sprite animation
            if (forced || layer.variants.textureId[sequence]) {
                layer.getTextureId(textureIdHeap, sequence, frame, counter);
                layerTextures[i] = textureIdHeap[0];
            }
            if (textureAnimation) {
                // UV translation animation
                if (forced || textureAnimation.variants.translation[sequence]) {
                    textureAnimation.getTranslation(translationHeap, sequence, frame, counter);
                    uvAnim[0] = translationHeap[0];
                    uvAnim[1] = translationHeap[1];
                }
                // UV rotation animation
                if (forced || textureAnimation.variants.rotation[sequence]) {
                    textureAnimation.getRotation(rotationHeap, sequence, frame, counter);
                    uvAnim[2] = rotationHeap[2];
                    uvAnim[3] = rotationHeap[3];
                }
                // UV scale animation
                if (forced || textureAnimation.variants.scale[sequence]) {
                    textureAnimation.getScale(scaleHeap, sequence, frame, counter);
                    uvAnim[4] = scaleHeap[0];
                }
            }
            else if (forced) {
                uvAnim[0] = 0;
                uvAnim[1] = 0;
                uvAnim[2] = 0;
                uvAnim[3] = 1;
                uvAnim[4] = 1;
            }
        }
    }
    updateBoneTexture() {
        if (this.boneTexture) {
            this.boneTexture.bindAndUpdate(this.worldMatrices);
        }
    }
    renderOpaque() {
        let model = this.model;
        for (let group of model.opaqueGroups) {
            group.render(this);
        }
    }
    renderTranslucent() {
        let model = this.model;
        for (let group of model.translucentGroups) {
            group.render(this);
        }
    }
    updateAnimations(dt) {
        let model = this.model;
        let sequenceId = this.sequence;
        if (sequenceId !== -1) {
            let sequence = model.sequences[sequenceId];
            let interval = sequence.interval;
            let frameTime = model.viewer.frameTime;
            this.frame += frameTime;
            this.counter += frameTime;
            this.allowParticleSpawn = true;
            if (this.frame >= interval[1]) {
                if (this.sequenceLoopMode === 2 || (this.sequenceLoopMode === 0 && sequence.flags === 0)) {
                    this.frame = interval[0];
                    this.resetEventEmitters();
                }
                else {
                    this.frame = interval[1];
                    this.counter -= frameTime;
                    this.allowParticleSpawn = false;
                }
                this.sequenceEnded = true;
            }
            else {
                this.sequenceEnded = false;
            }
        }
        let forced = this.forced;
        if (sequenceId !== -1 || forced) {
            // Update the nodes
            this.updateNodes(dt, forced);
            // Update the bone texture.
            this.updateBoneTexture();
            // Update the batches
            this.updateBatches(forced);
        }
        this.forced = false;
    }
    /**
     * Set the team color of this instance.
     */
    setTeamColor(id) {
        this.teamColor = id;
        return this;
    }
    /**
     * Set the vertex color of this instance.
     */
    setVertexColor(color) {
        this.vertexColor.set(color);
        return this;
    }
    /**
     * Set the sequence of this instance.
     */
    setSequence(id) {
        let model = this.model;
        let sequences = model.sequences;
        this.sequence = id;
        if (id < 0 || id > sequences.length - 1) {
            this.sequence = -1;
            this.frame = 0;
            this.allowParticleSpawn = false;
        }
        else {
            this.frame = sequences[id].interval[0];
        }
        this.resetEventEmitters();
        this.resetAttachments();
        this.forced = true;
        return this;
    }
    /**
     * Set the seuqnece loop mode.
     * 0 to never loop, 1 to loop based on the model, and 2 to always loop.
     */
    setSequenceLoopMode(mode) {
        this.sequenceLoopMode = mode;
        return this;
    }
    /**
     * Get an attachment node.
     */
    getAttachment(id) {
        let model = this.model;
        let attachment = model.attachments[id];
        if (attachment) {
            return this.nodes[attachment.index];
        }
    }
    /**
     * Event emitters depend on keyframe index changes to emit, rather than only values.
     * To work, they need to check what the last keyframe was, and only if it's a different one, do something.
     * When changing sequences, these states need to be reset, so they can immediately emit things if needed.
     */
    resetEventEmitters() {
        /// TODO: Update this.
        // for (let eventEmitterView of this.eventObjectEmitters) {
        //   eventEmitterView.reset();
        // }
    }
    resetAttachments() {
        for (let attachment of this.attachments) {
            attachment.internalInstance.hide();
        }
    }
}
exports.default = MdxModelInstance;
