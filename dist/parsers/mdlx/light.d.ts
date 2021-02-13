import BinaryStream from '../../common/binarystream';
import TokenStream from './tokenstream';
import GenericObject from './genericobject';
/**
 * A light.
 */
export default class Light extends GenericObject {
    type: number;
    attenuation: Float32Array;
    color: Float32Array;
    intensity: number;
    ambientColor: Float32Array;
    ambientIntensity: number;
    constructor();
    readMdx(stream: BinaryStream): void;
    writeMdx(stream: BinaryStream): void;
    readMdl(stream: TokenStream): void;
    writeMdl(stream: TokenStream): void;
    getByteLength(): number;
}
