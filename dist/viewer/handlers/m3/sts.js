"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * M3 animation data validator.
 */
class M3Sts {
    constructor(sts) {
        this.animIds = {};
        let animIds = sts.animIds.get();
        // Allows direct checks instead of loops
        for (let i = 0, l = animIds.length; i < l; i++) {
            this.animIds[animIds[i]] = i;
        }
    }
    hasData(animRef) {
        return !!this.animIds[animRef.animId];
    }
}
exports.default = M3Sts;
