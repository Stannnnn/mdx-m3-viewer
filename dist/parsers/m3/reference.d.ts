import BinaryStream from '../../common/binarystream';
import IndexEntry from './indexentry';
/**
 * A reference.
 */
export default class Reference {
    index: IndexEntry[] | null;
    entries: number;
    id: number;
    flags: number;
    load(stream: BinaryStream, index: IndexEntry[]): void;
    /**
     * Get the entries this index entry references.
     */
    get(): string | any[] | Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array | undefined;
    /**
     * Get the first entry this index entry references.
     */
    first(): any;
}
