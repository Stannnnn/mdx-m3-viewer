import { MappedDataRow } from '../../../utils/mappeddata';
import DooUnit from '../../../parsers/w3x/unitsdoo/unit';
import MdxModel from '../mdx/model';
import MdxModelInstance from '../mdx/modelinstance';
import War3MapViewerMap from './map';
/**
 * A unit.
 */
export default class Unit {
    instance: MdxModelInstance;
    /**
     * StartLocation.mdx (and others?) seems to be built-in, and has no row.
     */
    row: MappedDataRow | undefined;
    constructor(map: War3MapViewerMap, model: MdxModel, row: MappedDataRow | undefined, unit: DooUnit);
}
