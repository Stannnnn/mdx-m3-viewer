/// <reference types="./src/types" />
import BinaryStream from '../../common/binarystream';
/**
 * An index entry.
 */
export default class IndexEntry {
    index: IndexEntry[];
    tag: string;
    offset: number;
    version: number;
    entries: any[] | TypedArray | string;
    constructor(reader: BinaryStream, index: IndexEntry[]);
}
