/// <reference types="./src/types" />
import MpqBlock from './block';
/**
 * MPQ crypto.
 */
export default class MpqCrypto {
    cryptTable: Uint32Array;
    constructor();
    hash(name: string, key: number): number;
    decryptBlock(data: TypedArray, key: number): TypedArray;
    encryptBlock(data: ArrayBuffer | TypedArray, key: number): ArrayBuffer | Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array;
    computeFileKey(name: string, block: MpqBlock): number;
}
