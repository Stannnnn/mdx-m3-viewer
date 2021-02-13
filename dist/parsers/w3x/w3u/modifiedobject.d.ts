import BinaryStream from '../../../common/binarystream';
import Modification from './modification';
/**
 * A modified object.
 */
export default class ModifiedObject {
    oldId: string;
    newId: string;
    modifications: Modification[];
    load(stream: BinaryStream, useOptionalInts: boolean): void;
    save(stream: BinaryStream, useOptionalInts: boolean): void;
    getByteLength(useOptionalInts: boolean): number;
}
