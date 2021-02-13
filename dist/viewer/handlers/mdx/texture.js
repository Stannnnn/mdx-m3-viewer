"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * An MDX texture.
 */
class MdxTexture {
    constructor(replaceableId, repeatS, repeatT) {
        this.texture = null;
        this.wrapS = 0x812f; // CLAMP_TO_EDGE
        this.wrapT = 0x812f;
        this.replaceableId = replaceableId;
        if (repeatS) {
            this.wrapS = 0x2901; // REPEAT
        }
        if (repeatT) {
            this.wrapT = 0x2901;
        }
    }
}
exports.default = MdxTexture;
