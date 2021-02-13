"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.byteLengthUtf8 = exports.encodeUtf8 = exports.decodeUtf8 = void 0;
let decoder = new TextDecoder();
let encoder = new TextEncoder();
/**
 * Decode bytes as a UTF8 string.
 */
function decodeUtf8(buffer) {
    return decoder.decode(buffer);
}
exports.decodeUtf8 = decodeUtf8;
/**
 * Encode a UTF8 string to bytes.
 */
function encodeUtf8(utf8) {
    return encoder.encode(utf8);
}
exports.encodeUtf8 = encodeUtf8;
/**
 * Get the byte length of a UTF8 string.
 *
 * @see https://stackoverflow.com/a/23329386
 */
function byteLengthUtf8(str) {
    // returns the byte length of an utf8 string
    var s = str.length;
    for (var i = str.length - 1; i >= 0; i--) {
        var code = str.charCodeAt(i);
        if (code > 0x7f && code <= 0x7ff)
            s++;
        else if (code > 0x7ff && code <= 0xffff)
            s += 2;
        if (code >= 0xDC00 && code <= 0xDFFF)
            i--; //trail surrogate
    }
    return s;
}
exports.byteLengthUtf8 = byteLengthUtf8;
