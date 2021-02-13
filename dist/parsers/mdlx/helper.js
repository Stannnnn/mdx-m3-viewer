"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const genericobject_1 = require("./genericobject");
/**
 * A helper.
 */
class Helper extends genericobject_1.default {
    readMdl(stream) {
        for (let token of super.readGenericBlock(stream)) {
            throw new Error(`Unknown token in Helper: "${token}"`);
        }
    }
    writeMdl(stream) {
        stream.startObjectBlock('Helper', this.name);
        this.writeGenericHeader(stream);
        this.writeGenericAnimations(stream);
        stream.endBlock();
    }
}
exports.default = Helper;
