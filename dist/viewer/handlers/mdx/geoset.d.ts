/// <reference types="./src/types" />
import Shader from '../../gl/shader';
import MdxModel from './model';
import GeosetAnimation from './geosetanimation';
/**
 * A geoset.
 */
export default class Geoset {
    model: MdxModel;
    index: number;
    positionOffset: number;
    normalOffset: number;
    uvOffset: number;
    skinOffset: number;
    faceOffset: number;
    vertices: number;
    elements: number;
    faceType: number;
    geosetAnimation: GeosetAnimation | null;
    constructor(model: MdxModel, index: number, positionOffset: number, normalOffset: number, uvOffset: number, skinOffset: number, faceOffset: number, vertices: number, elements: number, faceType: number);
    bindShared(gl: WebGLRenderingContext, attribs: NumberObject, coordId: number): void;
    bind(shader: Shader, coordId: number): void;
    bindExtended(shader: Shader, coordId: number): void;
    bindHd(shader: Shader, coordId: number): void;
    render(): void;
}
