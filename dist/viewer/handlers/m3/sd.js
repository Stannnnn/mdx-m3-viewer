"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gl_matrix_1 = require("gl-matrix");
const math_1 = require("../../../common/math");
const vectorHeap = gl_matrix_1.vec3.create();
const quatHeap = gl_matrix_1.quat.create();
/**
 * Sequence data.
 */
class M3Sd {
    constructor(sd) {
        this.keys = sd.keys.get();
        this.values = sd.values.get();
        this.biggestKey = sd.biggestKey;
    }
}
/**
 * A sequence data container.
 */
class M3SdContainer {
    constructor(sd) {
        this.sd = sd.map((sd) => new M3Sd(sd));
    }
    getValueUnsafe(index, animationReference, frame, runsConcurrent) {
        let sd = this.sd[index];
        if (runsConcurrent) {
            frame = frame % sd.biggestKey;
        }
        let keys = sd.keys;
        let values = sd.values;
        // getInterval
        let a = keys.length;
        let b = 0;
        while (b !== keys.length && frame > keys[b]) {
            a = b;
            b++;
        }
        let length = keys.length;
        if (a === length) {
            if (b === length) {
                return animationReference.initValue;
            }
            else {
                return values[b];
            }
        }
        if (b === length || a >= b) {
            return values[a];
        }
        let t = math_1.clamp((frame - keys[a]) / (keys[b] - keys[a]), 0, 1);
        let va = values[a];
        let vb = values[b];
        let interpolationType = animationReference.interpolationType;
        let fakeVa = va; /// UGLY!!!
        if (fakeVa.length === 4) {
            if (interpolationType === 0) {
                return gl_matrix_1.quat.copy(quatHeap, va);
            }
            else {
                return gl_matrix_1.quat.slerp(quatHeap, va, vb, t);
            }
        }
        else if (fakeVa.length === 3) {
            if (interpolationType === 0) {
                return gl_matrix_1.vec3.copy(vectorHeap, va);
            }
            else {
                return gl_matrix_1.vec3.lerp(vectorHeap, va, vb, t);
            }
        }
        else {
            if (interpolationType === 0) {
                return va;
            }
            else {
                return math_1.lerp(va, vb, t);
            }
        }
    }
}
exports.default = M3SdContainer;
