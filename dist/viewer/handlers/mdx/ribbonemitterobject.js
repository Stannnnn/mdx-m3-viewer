"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const genericobject_1 = require("./genericobject");
const geometryemitterfuncs_1 = require("./geometryemitterfuncs");
/**
 * An MDX ribbon emitter.
 */
class RibbonEmitterObject extends genericobject_1.default {
    constructor(model, emitter, index) {
        super(model, emitter, index);
        this.geometryEmitterType = geometryemitterfuncs_1.EMITTER_RIBBON;
        /**
         * Even if the internal texture isn't loaded, it's fine to run emitters based on this emitter object.
         *
         * The ribbons will simply be black.
         */
        this.ok = true;
        this.layer = model.materials[emitter.materialId].layers[0];
        this.heightAbove = emitter.heightAbove;
        this.heightBelow = emitter.heightBelow;
        this.alpha = emitter.alpha;
        this.color = emitter.color;
        this.lifeSpan = emitter.lifeSpan;
        this.textureSlot = emitter.textureSlot;
        this.emissionRate = emitter.emissionRate;
        this.gravity = emitter.gravity;
        this.columns = emitter.columns;
        this.rows = emitter.rows;
    }
    getHeightBelow(out, sequence, frame, counter) {
        return this.getScalarValue(out, 'KRHB', sequence, frame, counter, this.heightBelow);
    }
    getHeightAbove(out, sequence, frame, counter) {
        return this.getScalarValue(out, 'KRHA', sequence, frame, counter, this.heightAbove);
    }
    getTextureSlot(out, sequence, frame, counter) {
        return this.getScalarValue(out, 'KRTX', sequence, frame, counter, 0);
    }
    getColor(out, sequence, frame, counter) {
        return this.getVectorValue(out, 'KRCO', sequence, frame, counter, this.color);
    }
    getAlpha(out, sequence, frame, counter) {
        return this.getScalarValue(out, 'KRAL', sequence, frame, counter, this.alpha);
    }
    getVisibility(out, sequence, frame, counter) {
        return this.getScalarValue(out, 'KRVS', sequence, frame, counter, 1);
    }
}
exports.default = RibbonEmitterObject;
