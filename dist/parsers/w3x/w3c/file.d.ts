import Camera from './camera';
/**
 * war3map.w3c - the camera file.
 */
export default class War3MapW3c {
    version: number;
    cameras: Camera[];
    load(buffer: ArrayBuffer | Uint8Array): void;
    save(): Uint8Array;
    getByteLength(): number;
}
