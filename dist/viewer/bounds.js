"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * An object representing both a sphere and an AABB, which is used for culling of all instances.
 *
 * By default, the size of the bounds is 0, and thus point-culling is done.
 */
class Bounds {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.r = 0;
    }
    fromExtents(min, max) {
        let x = min[0];
        let y = min[1];
        let z = min[2];
        let w = max[0] - x;
        let d = max[1] - y;
        let h = max[2] - z;
        this.x = x + w / 2;
        this.y = y + d / 2;
        this.z = z + h / 2;
        this.r = Math.max(w, d, h) / 2;
    }
}
exports.default = Bounds;
