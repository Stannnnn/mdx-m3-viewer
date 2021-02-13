"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gl_matrix_1 = require("gl-matrix");
const gl_matrix_addon_1 = require("../../../common/gl-matrix-addon");
const animatedobject_1 = require("./animatedobject");
/**
 * An MDX generic object.
 */
class GenericObject extends animatedobject_1.default {
    constructor(model, object, index) {
        super(model, object);
        this.index = index;
        this.name = object.name;
        this.objectId = object.objectId;
        this.parentId = object.parentId;
        this.pivot = model.pivotPoints[object.objectId] || gl_matrix_1.vec3.create();
        let flags = object.flags;
        this.dontInheritTranslation = flags & 0x1;
        this.dontInheritRotation = flags & 0x2;
        this.dontInheritScaling = flags & 0x4;
        this.billboarded = flags & 0x8;
        this.billboardedX = flags & 0x10;
        this.billboardedY = flags & 0x20;
        this.billboardedZ = flags & 0x40;
        this.cameraAnchored = flags & 0x80;
        this.emitterUsesMdlOrUnshaded = flags & 0x8000;
        this.emitterUsesTgaOrSortPrimitivesFarZ = flags & 0x10000;
        this.lineEmitter = flags & 0x20000;
        this.unfogged = flags & 0x40000;
        this.modelSpace = flags & 0x80000;
        this.xYQuad = flags & 0x100000;
        this.anyBillboarding = (this.billboarded || this.billboardedX || this.billboardedY || this.billboardedZ) !== 0;
        if (object.objectId === object.parentId) {
            this.parentId = -1;
        }
        this.addVariants('KGTR', 'translation');
        this.addVariants('KGRT', 'rotation');
        this.addVariants('KGSC', 'scale');
        this.addVariantIntersection(['translation', 'rotation', 'scale'], 'generic');
    }
    /**
     * Give a consistent visibility getter for all generic objects.
     *
     * Many of the generic objects have animated visibilities, and will override this.
     */
    getVisibility(out, sequence, frame, counter) {
        out[0] = 1;
        return -1;
    }
    getTranslation(out, sequence, frame, counter) {
        return this.getVectorValue(out, 'KGTR', sequence, frame, counter, gl_matrix_addon_1.VEC3_ZERO);
    }
    getRotation(out, sequence, frame, counter) {
        return this.getQuatValue(out, 'KGRT', sequence, frame, counter, gl_matrix_addon_1.QUAT_DEFAULT);
    }
    getScale(out, sequence, frame, counter) {
        return this.getVectorValue(out, 'KGSC', sequence, frame, counter, gl_matrix_addon_1.VEC3_ONE);
    }
}
exports.default = GenericObject;
