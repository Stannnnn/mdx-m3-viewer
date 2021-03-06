/**
 * Decode bytes as a UTF8 string.
 */
export declare function decodeUtf8(buffer: ArrayBuffer | Uint8Array): string;
/**
 * Encode a UTF8 string to bytes.
 */
export declare function encodeUtf8(utf8: string): Uint8Array;
/**
 * Get the byte length of a UTF8 string.
 *
 * @see https://stackoverflow.com/a/23329386
 */
export declare function byteLengthUtf8(str: string): number;
