import BinaryStream from '../../../common/binarystream';
import ModifiedObject from './modifiedobject';
/**
 * A modification table.
 */
export default class ModificationTable {
    objects: ModifiedObject[];
    load(stream: BinaryStream, useOptionalInts: boolean): void;
    save(stream: BinaryStream, useOptionalInts: boolean): void;
    getByteLength(useOptionalInts: boolean): number;
}
