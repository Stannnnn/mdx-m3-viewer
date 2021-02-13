import BinaryStream from '../../common/binarystream';
import TokenStream from './tokenstream';
import Layer from './layer';
/**
 * A material.
 */
export default class Material {
    priorityPlane: number;
    flags: number;
    /**
     * @since 900
     */
    shader: string;
    layers: Layer[];
    readMdx(stream: BinaryStream, version: number): void;
    writeMdx(stream: BinaryStream, version: number): void;
    readMdl(stream: TokenStream): void;
    writeMdl(stream: TokenStream, version: number): void;
    getByteLength(version: number): number;
}
