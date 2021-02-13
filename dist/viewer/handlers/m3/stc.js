"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sd_1 = require("./sd");
/**
 * M3 sequence data.
 */
class M3Stc {
    constructor(stc) {
        const animIds = stc.animIds.get();
        this.name = stc.name.get();
        this.runsConcurrent = stc.runsConcurrent;
        this.priority = stc.priority;
        this.stsIndex = stc.stsIndex;
        let uints = stc.animRefs.get();
        const animRefs = new Uint16Array(uints.buffer);
        this.animRefs = [];
        // Allows direct checks instead of loops
        for (let i = 0, l = animIds.length; i < l; i++) {
            this.animRefs[animIds[i]] = [animRefs[i * 2 + 1], animRefs[i * 2]];
        }
        this.sd = stc.sd.map((sd) => new sd_1.default(sd.get()));
    }
    getValueUnsafe(animRef, instance) {
        const ref = this.animRefs[animRef.animId];
        if (ref) {
            return this.sd[ref[0]].getValueUnsafe(ref[1], animRef, instance.frame, this.runsConcurrent);
        }
        return animRef.initValue;
    }
}
exports.default = M3Stc;
