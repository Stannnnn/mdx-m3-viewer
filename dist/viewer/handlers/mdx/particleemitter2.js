"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const emitter_1 = require("./emitter");
const particle2_1 = require("./particle2");
const emissionRateHeap = new Float32Array(1);
/**
 * An MDX particle emitter type 2.
 */
class ParticleEmitter2 extends emitter_1.default {
    constructor(instance, emitterObject) {
        super(instance, emitterObject);
        this.lastEmissionKey = -1;
        this.node = instance.nodes[emitterObject.index];
    }
    updateEmission(dt) {
        let instance = this.instance;
        if (instance.allowParticleSpawn) {
            let emitterObject = this.emitterObject;
            let keyframe = emitterObject.getEmissionRate(emissionRateHeap, instance.sequence, instance.frame, instance.counter);
            if (emitterObject.squirt) {
                if (keyframe !== this.lastEmissionKey) {
                    this.currentEmission += emissionRateHeap[0];
                }
                this.lastEmissionKey = keyframe;
            }
            else {
                this.currentEmission += emissionRateHeap[0] * dt;
            }
        }
    }
    emit() {
        let emitterObject = this.emitterObject;
        if (emitterObject.head) {
            this.emitObject(0);
        }
        if (emitterObject.tail) {
            this.emitObject(1);
        }
    }
    createObject() {
        return new particle2_1.default(this);
    }
}
exports.default = ParticleEmitter2;
