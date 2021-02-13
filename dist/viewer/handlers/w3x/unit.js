"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gl_matrix_1 = require("gl-matrix");
const gl_matrix_addon_1 = require("../../../common/gl-matrix-addon");
const heapZ = gl_matrix_1.vec3.create();
/**
 * A unit.
 */
class Unit {
    constructor(map, model, row, unit) {
        let instance = model.addInstance();
        //let normal = this.groundNormal([], unit.location[0], unit.location[1]);
        instance.move(unit.location);
        instance.rotateLocal(gl_matrix_1.quat.setAxisAngle(gl_matrix_1.quat.create(), gl_matrix_addon_1.VEC3_UNIT_Z, unit.angle));
        instance.scale(unit.scale);
        instance.setTeamColor(unit.player);
        instance.setScene(map.worldScene);
        if (row) {
            heapZ[2] = row.moveHeight;
            instance.move(heapZ);
            instance.setVertexColor([row.red / 255, row.green / 255, row.blue / 255, 1]);
            instance.uniformScale(row.modelScale);
        }
        this.instance = instance;
        this.row = row;
    }
}
exports.default = Unit;
