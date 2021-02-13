import BinaryStream from '../../common/binarystream';
import TokenStream from './tokenstream';
/**
 * A texture.
 */
export default class Texture {
    replaceableId: number;
    path: string;
    flags: number;
    readMdx(stream: BinaryStream): void;
    writeMdx(stream: BinaryStream): void;
    readMdl(stream: TokenStream): void;
    writeMdl(stream: TokenStream): void;
}
