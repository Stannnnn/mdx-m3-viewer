"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gl_matrix_1 = require("gl-matrix");
const emittedobject_1 = require("../../emittedobject");
const belowHeap = gl_matrix_1.vec3.create();
const aboveHeap = gl_matrix_1.vec3.create();
const colorHeap = new Float32Array(3);
const alphaHeap = new Float32Array(1);
const slotHeap = new Uint32Array(1);
/**
 * A ribbon.
 */
class Ribbon extends emittedobject_1.default {
    constructor() {
        super(...arguments);
        this.vertices = new Float32Array(6);
        this.color = new Uint8Array(4);
        this.slot = 0;
        this.prev = null;
        this.next = null;
    }
    bind() {
        let emitter = this.emitter;
        let instance = emitter.instance;
        let sequence = instance.sequence;
        let frame = instance.frame;
        let counter = instance.counter;
        let emitterObject = emitter.emitterObject;
        let node = instance.nodes[emitterObject.index];
        let [x, y, z] = node.pivot;
        let worldMatrix = node.worldMatrix;
        let vertices = this.vertices;
        this.health = emitter.emitterObject.lifeSpan;
        emitterObject.getHeightBelow(belowHeap, sequence, frame, counter);
        emitterObject.getHeightAbove(aboveHeap, sequence, frame, counter);
        belowHeap[1] = y - belowHeap[0];
        belowHeap[0] = x;
        belowHeap[2] = z;
        aboveHeap[1] = y + aboveHeap[0];
        aboveHeap[0] = x;
        aboveHeap[2] = z;
        gl_matrix_1.vec3.transformMat4(belowHeap, belowHeap, worldMatrix);
        gl_matrix_1.vec3.transformMat4(aboveHeap, aboveHeap, worldMatrix);
        vertices[0] = aboveHeap[0];
        vertices[1] = aboveHeap[1];
        vertices[2] = aboveHeap[2];
        vertices[3] = belowHeap[0];
        vertices[4] = belowHeap[1];
        vertices[5] = belowHeap[2];
    }
    update(dt) {
        this.health -= dt;
        if (this.health > 0) {
            let emitter = this.emitter;
            let instance = emitter.instance;
            let sequence = instance.sequence;
            let frame = instance.frame;
            let counter = instance.counter;
            let emitterObject = emitter.emitterObject;
            let color = this.color;
            let vertices = this.vertices;
            let gravity = emitterObject.gravity * dt * dt;
            emitterObject.getColor(colorHeap, sequence, frame, counter);
            emitterObject.getAlpha(alphaHeap, sequence, frame, counter);
            emitterObject.getTextureSlot(slotHeap, sequence, frame, counter);
            vertices[1] -= gravity;
            vertices[4] -= gravity;
            color[0] = colorHeap[0] * 255;
            color[1] = colorHeap[1] * 255;
            color[2] = colorHeap[2] * 255;
            color[3] = alphaHeap[0] * 255;
            this.slot = slotHeap[0];
        }
    }
}
exports.default = Ribbon;
