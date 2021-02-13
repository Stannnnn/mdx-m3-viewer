"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A geoset.
 */
class Geoset {
    constructor(model, index, positionOffset, normalOffset, uvOffset, skinOffset, faceOffset, vertices, elements, faceType) {
        this.geosetAnimation = null;
        this.model = model;
        this.index = index;
        this.positionOffset = positionOffset;
        this.normalOffset = normalOffset;
        this.uvOffset = uvOffset;
        this.skinOffset = skinOffset;
        this.faceOffset = faceOffset;
        this.vertices = vertices;
        this.elements = elements;
        this.faceType = faceType;
        for (let geosetAnimation of model.geosetAnimations) {
            if (geosetAnimation.geosetId === index) {
                this.geosetAnimation = geosetAnimation;
            }
        }
    }
    bindShared(gl, attribs, coordId) {
        gl.vertexAttribPointer(attribs.a_position, 3, gl.FLOAT, false, 0, this.positionOffset);
        gl.vertexAttribPointer(attribs.a_normal, 3, gl.FLOAT, false, 0, this.normalOffset);
        gl.vertexAttribPointer(attribs.a_uv, 2, gl.FLOAT, false, 0, this.uvOffset + coordId * this.vertices * 8);
    }
    bind(shader, coordId) {
        let model = this.model;
        let gl = model.viewer.gl;
        let attribs = shader.attribs;
        let skinDataType = model.skinDataType;
        let bytesPerSkinElement = model.bytesPerSkinElement;
        this.bindShared(gl, attribs, coordId);
        gl.vertexAttribPointer(attribs.a_bones, 4, skinDataType, false, 5 * bytesPerSkinElement, this.skinOffset);
        gl.vertexAttribPointer(attribs.a_boneNumber, 1, skinDataType, false, 5 * bytesPerSkinElement, this.skinOffset + 4 * bytesPerSkinElement);
    }
    bindExtended(shader, coordId) {
        let model = this.model;
        let gl = model.viewer.gl;
        let attribs = shader.attribs;
        let skinDataType = model.skinDataType;
        let bytesPerSkinElement = model.bytesPerSkinElement;
        this.bindShared(gl, attribs, coordId);
        gl.vertexAttribPointer(attribs.a_bones, 4, skinDataType, false, 9 * bytesPerSkinElement, this.skinOffset);
        gl.vertexAttribPointer(attribs.a_extendedBones, 4, skinDataType, false, 9 * bytesPerSkinElement, this.skinOffset + 4 * bytesPerSkinElement);
        gl.vertexAttribPointer(attribs.a_boneNumber, 4, skinDataType, false, 9 * bytesPerSkinElement, this.skinOffset + 8 * bytesPerSkinElement);
    }
    bindHd(shader, coordId) {
        let gl = this.model.viewer.gl;
        let attribs = shader.attribs;
        this.bindShared(gl, attribs, coordId);
        gl.vertexAttribPointer(attribs.a_bones, 4, gl.UNSIGNED_BYTE, false, 8, this.skinOffset);
        gl.vertexAttribPointer(attribs.a_weights, 4, gl.UNSIGNED_BYTE, true, 8, this.skinOffset + 4);
    }
    render() {
        let gl = this.model.viewer.gl;
        gl.drawElements(this.faceType, this.elements, gl.UNSIGNED_SHORT, this.faceOffset);
    }
}
exports.default = Geoset;
