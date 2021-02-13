"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gl_matrix_1 = require("gl-matrix");
const node_1 = require("../../node");
/**
 * An MDX node.
 */
class MdxNode extends node_1.SkeletalNode {
    convertBasis(rotation) {
        gl_matrix_1.quat.rotateY(rotation, rotation, -Math.PI / 2);
        gl_matrix_1.quat.rotateX(rotation, rotation, -Math.PI / 2);
    }
}
exports.default = MdxNode;
