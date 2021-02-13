import Unit from './unit';
/**
 * war3mapUnits.doo - the units and items file.
 */
export default class War3MapUnitsDoo {
    version: number;
    subversion: number;
    units: Unit[];
    load(buffer: ArrayBuffer | Uint8Array, isReforged: boolean): void;
    save(isReforged: boolean): Uint8Array;
    getByteLength(isReforged: boolean): number;
}
