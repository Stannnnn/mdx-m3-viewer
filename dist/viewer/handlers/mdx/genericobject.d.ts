import { vec3, quat } from 'gl-matrix';
import MdlxGenericObject from '../../../parsers/mdlx/genericobject';
import AnimatedObject from './animatedobject';
import MdxModel from './model';
/**
 * An MDX generic object.
 */
export default class GenericObject extends AnimatedObject {
    index: number;
    name: string;
    objectId: number;
    parentId: number;
    pivot: vec3;
    dontInheritTranslation: number;
    dontInheritRotation: number;
    dontInheritScaling: number;
    billboarded: number;
    billboardedX: number;
    billboardedY: number;
    billboardedZ: number;
    cameraAnchored: number;
    emitterUsesMdlOrUnshaded: number;
    emitterUsesTgaOrSortPrimitivesFarZ: number;
    lineEmitter: number;
    unfogged: number;
    modelSpace: number;
    xYQuad: number;
    anyBillboarding: boolean;
    constructor(model: MdxModel, object: MdlxGenericObject, index: number);
    /**
     * Give a consistent visibility getter for all generic objects.
     *
     * Many of the generic objects have animated visibilities, and will override this.
     */
    getVisibility(out: Float32Array, sequence: number, frame: number, counter: number): number;
    getTranslation(out: vec3, sequence: number, frame: number, counter: number): number;
    getRotation(out: quat, sequence: number, frame: number, counter: number): number;
    getScale(out: vec3, sequence: number, frame: number, counter: number): number;
}
