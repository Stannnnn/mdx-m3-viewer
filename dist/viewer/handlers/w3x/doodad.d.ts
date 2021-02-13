import { MappedDataRow } from '../../../utils/mappeddata';
import DooDoodad from '../../../parsers/w3x/doo/doodad';
import MdxModel from '../mdx/model';
import MdxModelInstance from '../mdx/modelinstance';
import War3MapViewerMap from './map';
/**
 * A doodad.
 */
export default class Doodad {
    instance: MdxModelInstance;
    row: MappedDataRow;
    constructor(map: War3MapViewerMap, model: MdxModel, row: MappedDataRow, doodad: DooDoodad);
}
