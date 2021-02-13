"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gl_matrix_1 = require("gl-matrix");
const emittedobject_1 = require("../../emittedobject");
const vertexHeap = gl_matrix_1.vec3.create();
/**
 * An MDX splat or ubersplat object.
 */
class EventObjectSplUbr extends emittedobject_1.default {
    constructor() {
        super(...arguments);
        this.vertices = new Float32Array(12);
    }
    bind() {
        let emitter = this.emitter;
        let instance = emitter.instance;
        let emitterObject = emitter.emitterObject;
        let vertices = this.vertices;
        let scale = emitterObject.scale;
        let node = instance.nodes[emitterObject.index];
        let worldMatrix = node.worldMatrix;
        this.health = emitterObject.lifeSpan;
        vertexHeap[0] = scale;
        vertexHeap[1] = scale;
        gl_matrix_1.vec3.transformMat4(vertices.subarray(0, 2), vertexHeap, worldMatrix);
        vertexHeap[0] = -scale;
        vertexHeap[1] = scale;
        gl_matrix_1.vec3.transformMat4(vertices.subarray(3, 5), vertexHeap, worldMatrix);
        vertexHeap[0] = -scale;
        vertexHeap[1] = -scale;
        gl_matrix_1.vec3.transformMat4(vertices.subarray(6, 8), vertexHeap, worldMatrix);
        vertexHeap[0] = scale;
        vertexHeap[1] = -scale;
        gl_matrix_1.vec3.transformMat4(vertices.subarray(9, 11), vertexHeap, worldMatrix);
    }
    update(dt) {
        this.health -= dt;
    }
}
exports.default = EventObjectSplUbr;
