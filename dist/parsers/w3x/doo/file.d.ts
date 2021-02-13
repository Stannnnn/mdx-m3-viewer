import Doodad from './doodad';
import TerrainDoodad from './terraindoodad';
/**
 * war3map.doo - the doodad and destructible file.
 */
export default class War3MapDoo {
    version: number;
    u1: Uint8Array;
    doodads: Doodad[];
    u2: Uint8Array;
    terrainDoodads: TerrainDoodad[];
    load(buffer: ArrayBuffer | Uint8Array, isReforged: boolean): false | undefined;
    save(isReforged: boolean): Uint8Array;
    getByteLength(isReforged: boolean): number;
}
