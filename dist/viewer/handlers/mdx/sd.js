"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTypedSd = exports.QuatSd = exports.VectorSd = exports.ScalarSd = exports.Sd = void 0;
const gl_matrix_1 = require("gl-matrix");
const math_1 = require("../../../common/math");
const animations_1 = require("../../../parsers/mdlx/animations");
/**
 * Animated data for a specific sequence.
 */
class SdSequence {
    constructor(sd, start, end, animation, isGlobal) {
        this.frames = [];
        this.values = [];
        this.inTans = [];
        this.outTans = [];
        this.constant = false;
        this.sd = sd;
        this.start = start;
        this.end = end;
        let interpolationType = sd.interpolationType;
        let frames = animation.frames;
        let values = animation.values;
        let inTans = animation.inTans;
        let outTans = animation.outTans;
        let defval = sd.defval;
        // When using a global sequence, where the first key is outside of the sequence's length, it becomes its constant value.
        // When having one key in the sequence's range, and one key outside of it, results seem to be non-deterministic.
        // Sometimes the second key is used too, sometimes not.
        // It also differs depending where the model is viewed - the WE previewer, the WE itself, or the game.
        // All three show different results, none of them make sense.
        // Therefore, only handle the case where the first key is outside.
        // This fixes problems spread over many models, e.g. HeroMountainKing (compare in WE and in Magos).
        if (isGlobal && frames[0] > end) {
            this.frames[0] = frames[0];
            this.values[0] = values[0];
        }
        // Go over the keyframes, and add all of the ones that are in this sequence (start <= frame <= end).
        for (let i = 0, l = frames.length; i < l; i++) {
            let frame = frames[i];
            if (frame >= start && frame <= end) {
                this.frames.push(frame);
                this.values.push(values[i]);
                if (interpolationType > 1) {
                    this.inTans.push(inTans[i]);
                    this.outTans.push(outTans[i]);
                }
            }
        }
        let tracksCount = this.frames.length;
        if (tracksCount === 0) {
            // If there are no keys, use the default value directly.
            this.constant = true;
            this.frames[0] = start;
            this.values[0] = defval;
        }
        else if (tracksCount === 1) {
            // If there's only one key, use it directly.
            this.constant = true;
        }
        else {
            let firstValue = this.values[0];
            // If all of the values in this sequence are the same, might as well make it constant.
            this.constant = this.values.every((value) => firstValue.every((element, index) => element === value[index]));
            if (!this.constant) {
                // If there is no opening keyframe for this sequence, inject one with the default value.
                if (this.frames[0] !== start) {
                    this.frames.unshift(start);
                    this.values.unshift(defval);
                    if (interpolationType > 1) {
                        this.inTans.unshift(defval);
                        this.outTans.unshift(defval);
                    }
                }
                // If there is no closing keyframe for this sequence, inject one with the default value.
                if (this.frames[this.frames.length - 1] !== end) {
                    this.frames.push(end);
                    this.values.push(this.values[0]);
                    if (interpolationType > 1) {
                        this.inTans.push(this.inTans[0]);
                        this.outTans.push(this.outTans[0]);
                    }
                }
            }
        }
    }
    getValue(out, frame) {
        let frames = this.frames;
        let l = frames.length;
        if (this.constant || frame < this.start) {
            this.sd.copy(out, this.values[0]);
            return -1;
        }
        else if (frame >= this.end) {
            this.sd.copy(out, this.values[l - 1]);
            return l - 1;
        }
        else {
            for (let i = 1; i < l; i++) {
                if (frames[i] > frame) {
                    let start = frames[i - 1];
                    let end = frames[i];
                    let t = math_1.clamp((frame - start) / (end - start), 0, 1);
                    this.sd.interpolate(out, this.values, this.inTans, this.outTans, i - 1, i, t);
                    return i;
                }
            }
            return -1;
        }
    }
}
const forcedInterpMap = {
    KLAV: 0,
    KATV: 0,
    KPEV: 0,
    KP2V: 0,
    KRVS: 0,
};
const floatDefval = new Float32Array(1);
const uintDefval = new Uint32Array(1);
const visibilityDefval = new Float32Array([1]);
const translationDefval = gl_matrix_1.vec3.create();
const rotationDefval = gl_matrix_1.quat.create();
const scaleDefval = gl_matrix_1.vec3.fromValues(1, 1, 1);
const alphaDefval = visibilityDefval;
const colorDefval = translationDefval;
const defVals = {
    // LAYS
    KMTF: floatDefval,
    KMTA: alphaDefval,
    // TXAN
    KTAT: translationDefval,
    KTAR: rotationDefval,
    KTAS: scaleDefval,
    // GEOA
    KGAO: alphaDefval,
    KGAC: colorDefval,
    // LITE
    KLAS: floatDefval,
    KLAE: floatDefval,
    KLAC: colorDefval,
    KLAI: floatDefval,
    KLBI: floatDefval,
    KLBC: colorDefval,
    KLAV: visibilityDefval,
    // ATCH
    KATV: visibilityDefval,
    // PREM
    KPEE: floatDefval,
    KPEG: floatDefval,
    KPLN: floatDefval,
    KPLT: floatDefval,
    KPEL: floatDefval,
    KPES: floatDefval,
    KPEV: visibilityDefval,
    // PRE2
    KP2S: floatDefval,
    KP2R: floatDefval,
    KP2L: floatDefval,
    KP2G: floatDefval,
    KP2E: floatDefval,
    KP2N: floatDefval,
    KP2W: floatDefval,
    KP2V: visibilityDefval,
    // RIBB
    KRHA: floatDefval,
    KRHB: floatDefval,
    KRAL: alphaDefval,
    KRCO: colorDefval,
    KRTX: floatDefval,
    KRVS: visibilityDefval,
    // CAMS
    KCTR: translationDefval,
    KTTR: translationDefval,
    KCRL: uintDefval,
    // NODE
    KGTR: translationDefval,
    KGRT: rotationDefval,
    KGSC: scaleDefval,
};
/**
 * Animated data.
 */
class Sd {
    constructor(model, animation) {
        this.globalSequence = null;
        this.sequences = [];
        let globalSequences = model.globalSequences;
        let globalSequenceId = animation.globalSequenceId;
        let forcedInterp = forcedInterpMap[animation.name];
        this.model = model;
        this.name = animation.name;
        this.defval = defVals[animation.name];
        // Allow to force an interpolation type.
        // The game seems to do this with visibility tracks, where the type is forced to None.
        // It came up as a bug report by a user who used the wrong interpolation type.
        this.interpolationType = forcedInterp !== undefined ? forcedInterp : animation.interpolationType;
        if (globalSequenceId !== -1 && globalSequences) {
            this.globalSequence = new SdSequence(this, 0, globalSequences[globalSequenceId], animation, true);
        }
        else {
            for (let sequence of model.sequences) {
                let interval = sequence.interval;
                this.sequences.push(new SdSequence(this, interval[0], interval[1], animation, false));
            }
        }
    }
    getValue(out, sequence, frame, counter) {
        if (this.globalSequence) {
            return this.globalSequence.getValue(out, counter % this.globalSequence.end);
        }
        return this.sequences[sequence].getValue(out, frame);
    }
    isVariant(sequence) {
        if (this.globalSequence) {
            return !this.globalSequence.constant;
        }
        else {
            return !this.sequences[sequence].constant;
        }
    }
}
exports.Sd = Sd;
/**
 * A scalar animation.
 */
class ScalarSd extends Sd {
    copy(out, value) {
        out[0] = value[0];
    }
    interpolate(out, values, inTans, outTans, start, end, t) {
        let interpolationType = this.interpolationType;
        let startValue = values[start][0];
        if (interpolationType === 0) {
            out[0] = startValue;
        }
        else if (interpolationType === 1) {
            out[0] = math_1.lerp(startValue, values[end][0], t);
        }
        else if (interpolationType === 2) {
            out[0] = math_1.hermite(startValue, outTans[start][0], inTans[end][0], values[end][0], t);
        }
        else if (interpolationType === 3) {
            out[0] = math_1.bezier(startValue, outTans[start][0], inTans[end][0], values[end][0], t);
        }
    }
}
exports.ScalarSd = ScalarSd;
/**
 * A vector animation.
 */
class VectorSd extends Sd {
    copy(out, value) {
        gl_matrix_1.vec3.copy(out, value);
    }
    interpolate(out, values, inTans, outTans, start, end, t) {
        let interpolationType = this.interpolationType;
        if (interpolationType === 0) {
            gl_matrix_1.vec3.copy(out, values[start]);
        }
        else if (interpolationType === 1) {
            gl_matrix_1.vec3.lerp(out, values[start], values[end], t);
        }
        else if (interpolationType === 2) {
            gl_matrix_1.vec3.hermite(out, values[start], outTans[start], inTans[end], values[end], t);
        }
        else if (interpolationType === 3) {
            gl_matrix_1.vec3.bezier(out, values[start], outTans[start], inTans[end], values[end], t);
        }
    }
}
exports.VectorSd = VectorSd;
/**
 * A quaternion animation.
 */
class QuatSd extends Sd {
    copy(out, value) {
        gl_matrix_1.quat.copy(out, value);
    }
    interpolate(out, values, inTans, outTans, start, end, t) {
        let interpolationType = this.interpolationType;
        if (interpolationType === 0) {
            gl_matrix_1.quat.copy(out, values[start]);
        }
        else if (interpolationType === 1) {
            gl_matrix_1.quat.slerp(out, values[start], values[end], t);
        }
        else if (interpolationType === 2 || interpolationType === 3) {
            gl_matrix_1.quat.sqlerp(out, values[start], outTans[start], inTans[end], values[end], t);
        }
    }
}
exports.QuatSd = QuatSd;
function createTypedSd(model, animation) {
    if (animation instanceof animations_1.UintAnimation || animation instanceof animations_1.FloatAnimation) {
        return new ScalarSd(model, animation);
    }
    else if (animation instanceof animations_1.Vector3Animation) {
        return new VectorSd(model, animation);
    }
    else {
        return new QuatSd(model, animation);
    }
}
exports.createTypedSd = createTypedSd;
