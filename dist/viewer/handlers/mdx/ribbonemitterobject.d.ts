import RibbonEmitter from '../../../parsers/mdlx/ribbonemitter';
import MdxModel from './model';
import GenericObject from './genericobject';
import Layer from './layer';
/**
 * An MDX ribbon emitter.
 */
export default class RibbonEmitterObject extends GenericObject {
    geometryEmitterType: number;
    layer: Layer;
    heightAbove: number;
    heightBelow: number;
    alpha: number;
    color: Float32Array;
    lifeSpan: number;
    textureSlot: number;
    emissionRate: number;
    gravity: number;
    columns: number;
    rows: number;
    /**
     * Even if the internal texture isn't loaded, it's fine to run emitters based on this emitter object.
     *
     * The ribbons will simply be black.
     */
    ok: boolean;
    constructor(model: MdxModel, emitter: RibbonEmitter, index: number);
    getHeightBelow(out: Float32Array, sequence: number, frame: number, counter: number): number;
    getHeightAbove(out: Float32Array, sequence: number, frame: number, counter: number): number;
    getTextureSlot(out: Uint32Array, sequence: number, frame: number, counter: number): number;
    getColor(out: Float32Array, sequence: number, frame: number, counter: number): number;
    getAlpha(out: Float32Array, sequence: number, frame: number, counter: number): number;
    getVisibility(out: Float32Array, sequence: number, frame: number, counter: number): number;
}
