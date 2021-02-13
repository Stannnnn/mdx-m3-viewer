import BinaryStream from '../../common/binarystream';
import TokenStream from './tokenstream';
import AnimatedObject from './animatedobject';
/**
 * A layer.
 */
export default class Layer extends AnimatedObject {
    filterMode: number;
    flags: number;
    textureId: number;
    textureAnimationId: number;
    coordId: number;
    alpha: number;
    /**
     * @since 900
     */
    emissiveGain: number;
    /**
     * @since 1000
     */
    fresnelColor: Float32Array;
    /**
     * @since 1000
     */
    fresnelOpacity: number;
    /**
     * @since 1000
     */
    fresnelTeamColor: number;
    readMdx(stream: BinaryStream, version: number): void;
    writeMdx(stream: BinaryStream, version: number): void;
    readMdl(stream: TokenStream): void;
    writeMdl(stream: TokenStream, version: number): void;
    getByteLength(version: number): number;
}
