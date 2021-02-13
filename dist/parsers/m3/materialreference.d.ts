import BinaryStream from '../../common/binarystream';
import IndexEntry from './indexentry';
/**
 * A material reference.
 */
export default class MaterialReference {
    version: number;
    materialType: number;
    materialIndex: number;
    load(stream: BinaryStream, version: number, index: IndexEntry[]): void;
}
