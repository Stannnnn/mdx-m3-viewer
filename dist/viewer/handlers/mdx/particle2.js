"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gl_matrix_1 = require("gl-matrix");
const gl_matrix_addon_1 = require("../../../common/gl-matrix-addon");
const math_1 = require("../../../common/math");
const emittedobject_1 = require("../../emittedobject");
const rotationHeap = gl_matrix_1.quat.create();
const widthHeap = new Float32Array(1);
const lengthHeap = new Float32Array(1);
const latitudeHeap = new Float32Array(1);
const variationHeap = new Float32Array(1);
const speedHeap = new Float32Array(1);
const gravityHeap = new Float32Array(1);
/**
 * A type 2 particle.
 */
class Particle2 extends emittedobject_1.default {
    constructor() {
        super(...arguments);
        this.tail = 0;
        this.gravity = 0;
        this.location = gl_matrix_1.vec3.create();
        this.velocity = gl_matrix_1.vec3.create();
        this.scale = gl_matrix_1.vec3.create();
    }
    bind(tail) {
        let emitter = this.emitter;
        let instance = emitter.instance;
        let sequence = instance.sequence;
        let frame = instance.frame;
        let counter = instance.counter;
        let emitterObject = emitter.emitterObject;
        emitterObject.getWidth(widthHeap, sequence, frame, counter);
        emitterObject.getLength(lengthHeap, sequence, frame, counter);
        emitterObject.getLatitude(latitudeHeap, sequence, frame, counter);
        emitterObject.getVariation(variationHeap, sequence, frame, counter);
        emitterObject.getSpeed(speedHeap, sequence, frame, counter);
        emitterObject.getGravity(gravityHeap, sequence, frame, counter);
        let node = emitter.node;
        let pivot = node.pivot;
        let scale = node.worldScale;
        let width = widthHeap[0] * 0.5;
        let length = lengthHeap[0] * 0.5;
        let latitude = math_1.degToRad(latitudeHeap[0]);
        let variation = variationHeap[0];
        let speed = speedHeap[0];
        let location = this.location;
        let velocity = this.velocity;
        this.health = emitterObject.lifeSpan;
        this.tail = tail;
        this.gravity = gravityHeap[0] * scale[2];
        gl_matrix_1.vec3.copy(this.scale, scale);
        // Local location
        location[0] = pivot[0] + math_1.randomInRange(-width, width);
        location[1] = pivot[1] + math_1.randomInRange(-length, length);
        location[2] = pivot[2];
        // World location
        if (!emitterObject.modelSpace) {
            gl_matrix_1.vec3.transformMat4(location, location, node.worldMatrix);
        }
        // Local rotation
        gl_matrix_1.quat.identity(rotationHeap);
        gl_matrix_1.quat.rotateZ(rotationHeap, rotationHeap, Math.PI / 2);
        gl_matrix_1.quat.rotateY(rotationHeap, rotationHeap, math_1.randomInRange(-latitude, latitude));
        // If this is not a line emitter, emit in a sphere rather than a circle.
        if (!emitterObject.lineEmitter) {
            gl_matrix_1.quat.rotateX(rotationHeap, rotationHeap, math_1.randomInRange(-latitude, latitude));
        }
        // World rotation
        if (!emitterObject.modelSpace) {
            gl_matrix_1.quat.mul(rotationHeap, node.worldRotation, rotationHeap);
        }
        // Apply the rotation
        gl_matrix_1.vec3.transformQuat(velocity, gl_matrix_addon_1.VEC3_UNIT_Z, rotationHeap);
        // Apply speed
        gl_matrix_1.vec3.scale(velocity, velocity, speed + math_1.randomInRange(-variation, variation));
        // Apply the parent's scale
        if (!emitterObject.modelSpace) {
            gl_matrix_1.vec3.mul(velocity, velocity, scale);
        }
    }
    update(dt) {
        this.health -= dt;
        if (this.health > 0) {
            let location = this.location;
            let velocity = this.velocity;
            velocity[2] -= this.gravity * dt;
            location[0] += velocity[0] * dt;
            location[1] += velocity[1] * dt;
            location[2] += velocity[2] * dt;
        }
    }
}
exports.default = Particle2;
