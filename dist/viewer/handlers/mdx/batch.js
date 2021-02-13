"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * An MDX batch.
 */
class Batch {
    constructor(index, geoset, layerOrMaterial, isExtended, isHd) {
        let material;
        let layer;
        if (isHd) {
            material = layerOrMaterial;
            layer = material.layers[0];
        }
        else {
            material = null;
            layer = layerOrMaterial;
        }
        this.index = index;
        this.geoset = geoset;
        this.isExtended = isExtended;
        this.isHd = isHd;
        this.layer = layer;
        this.material = material;
    }
}
exports.default = Batch;
