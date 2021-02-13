"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const emitter_1 = require("./emitter");
const ribbon_1 = require("./ribbon");
/**
 * A ribbon emitter.
 */
class RibbonEmitter extends emitter_1.default {
    constructor() {
        super(...arguments);
        this.first = null;
        this.last = null;
    }
    updateEmission(dt) {
        let instance = this.instance;
        if (instance.allowParticleSpawn) {
            let emitterObject = this.emitterObject;
            // It doesn't make sense to emit more than 1 ribbon at the same time.
            this.currentEmission = Math.min(this.currentEmission + emitterObject.emissionRate * dt, 1);
        }
    }
    emit() {
        let ribbon = this.emitObject();
        let last = this.last;
        if (last) {
            last.next = ribbon;
            ribbon.prev = last;
        }
        else {
            this.first = ribbon;
        }
        this.last = ribbon;
    }
    kill(object) {
        super.kill(object);
        let prev = object.prev;
        let next = object.next;
        if (object === this.first) {
            this.first = next;
        }
        if (object === this.last) {
            this.first = null;
            this.last = null;
        }
        if (prev) {
            prev.next = next;
        }
        if (next) {
            next.prev = prev;
        }
        object.prev = null;
        object.next = null;
    }
    createObject() {
        return new ribbon_1.default(this);
    }
}
exports.default = RibbonEmitter;
