"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gl_matrix_1 = require("gl-matrix");
const node_1 = require("../../node");
/**
 * An M3 node.
 */
class M3Node extends node_1.SkeletalNode {
    convertBasis(rotation) {
        let halfPI = Math.PI / 2;
        gl_matrix_1.quat.rotateZ(rotation, rotation, halfPI);
        gl_matrix_1.quat.rotateY(rotation, rotation, -halfPI);
    }
}
exports.default = M3Node;
