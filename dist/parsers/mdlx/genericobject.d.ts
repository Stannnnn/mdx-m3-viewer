import BinaryStream from '../../common/binarystream';
import TokenStream from './tokenstream';
import AnimatedObject from './animatedobject';
/**
 * A generic object.
 *
 * The parent class for all objects that exist in the world, and may contain spatial animations.
 * This includes bones, particle emitters, and many other things.
 */
export default abstract class GenericObject extends AnimatedObject {
    name: string;
    objectId: number;
    parentId: number;
    flags: number;
    constructor(flags?: number);
    readMdx(stream: BinaryStream): void;
    writeMdx(stream: BinaryStream): void;
    writeNonGenericAnimationChunks(stream: BinaryStream): void;
    readGenericBlock(stream: TokenStream): Generator<string, void, unknown>;
    writeGenericHeader(stream: TokenStream): void;
    writeGenericAnimations(stream: TokenStream): void;
    /**
     * Allows to easily iterate either the GenericObject animations or the parent object animations.
     */
    eachAnimation(wantGeneric: boolean): Generator<import("./animations").Animation, void, unknown>;
    /**
     * Gets the byte length of the GenericObject part of whatever this object this.
     *
     * This is needed because only the KGTR, KGRT, and KGSC animations actually belong to it.
     */
    getGenericByteLength(): number;
    getByteLength(): number;
}
