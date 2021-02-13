"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const searches_1 = require("../../common/searches");
/**
 * Detects if the given object is a TGA source.
 */
function isTga(object) {
    if (object instanceof ArrayBuffer) {
        let buffer = new Uint8Array(object);
        if (searches_1.isStringInBytes(buffer, 'TRUEVISION-XFILE.\0', buffer.length - 18)) {
            return true;
        }
    }
    return false;
}
exports.default = isTga;
