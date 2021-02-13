import BinaryStream from '../../common/binarystream';
import TokenStream from './tokenstream';
import GenericObject from './genericobject';
/**
 * A collision shape.
 */
export default class CollisionShape extends GenericObject {
    type: number;
    vertices: Float32Array[];
    boundsRadius: number;
    constructor();
    readMdx(stream: BinaryStream): void;
    writeMdx(stream: BinaryStream): void;
    readMdl(stream: TokenStream): void;
    writeMdl(stream: TokenStream): void;
    getByteLength(): number;
}
