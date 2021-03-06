"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const searches_1 = require("./searches");
const typecast_1 = require("./typecast");
const utf8_1 = require("./utf8");
// Memory for all of the xxxToUint type casts.
const uint8 = new Uint8Array(8);
/**
 * A binary stream.
 */
class BinaryStream {
    constructor(buffer, byteOffset, byteLength) {
        this.index = 0;
        let bytes = typecast_1.bytesOf(buffer);
        // For browsers not supporting the spec.
        // Once upon a time I reported this issue on the Firefox tracker.
        // Seems like Safari needs an issue report too.
        byteOffset = byteOffset || 0;
        byteLength = byteLength || bytes.length;
        this.buffer = buffer;
        this.uint8array = bytes.subarray(byteOffset, byteOffset + byteLength);
        this.byteLength = byteLength;
        this.remaining = byteLength;
    }
    /**
     * Create a subreader of this reader, at its position, with the given byte length.
     */
    substream(byteLength) {
        return new BinaryStream(this.uint8array.subarray(this.index, this.index + byteLength));
    }
    /**
     * Skip a number of bytes.
     */
    skip(bytes) {
        if (this.remaining < bytes) {
            throw new Error(`ByteStream: skip: premature end - want ${bytes} bytes but have ${this.remaining}`);
        }
        this.index += bytes;
        this.remaining -= bytes;
    }
    /**
     * Set the reader's index.
     */
    seek(index) {
        this.index = index;
        this.remaining = this.byteLength - index;
    }
    /**
     * Read a UTF8 string with the given number of bytes.
     *
     * The entire size will be read, however the string returned is NULL terminated in its memory block.
     *
     * For example, the MDX format has many strings that have a constant maximum size, where any bytes after the string are NULLs.
     * Such strings will be loaded correctly given the maximum size.
     */
    read(bytes) {
        if (this.remaining < bytes) {
            throw new Error(`ByteStream: read: premature end - want ${bytes} bytes but have ${this.remaining}`);
        }
        let uint8array = this.uint8array;
        let start = this.index;
        let end = searches_1.boundIndexOf(uint8array, 0, start, bytes);
        if (end === -1) {
            end = start + bytes;
        }
        this.index += bytes;
        this.remaining -= bytes;
        return utf8_1.decodeUtf8(uint8array.subarray(start, end));
    }
    /**
     * Read a UTF8 NULL terminated string.
     */
    readNull() {
        if (this.remaining < 1) {
            throw new Error(`ByteStream: readNull: premature end - want at least 1 byte but have 0`);
        }
        let uint8array = this.uint8array;
        let start = this.index;
        let end = uint8array.indexOf(0, start);
        if (end === -1) {
            end = uint8array.length - 1;
        }
        let bytes = end - start + 1;
        this.index += bytes;
        this.remaining -= bytes;
        return utf8_1.decodeUtf8(uint8array.subarray(start, end));
    }
    /**
     * Read a binary string with the given number of bytes.
     */
    readBinary(bytes) {
        if (this.remaining < bytes) {
            throw new Error(`ByteStream: readBinary: premature end - want ${bytes} bytes but have ${this.remaining}`);
        }
        let uint8array = this.uint8array;
        let index = this.index;
        let data = '';
        for (let i = 0; i < bytes; i++) {
            data += String.fromCharCode(uint8array[index + i]);
        }
        this.index += bytes;
        this.remaining -= bytes;
        return data;
    }
    /**
     * Read a 8 bit signed integer.
     */
    readInt8() {
        if (this.remaining < 1) {
            throw new Error(`ByteStream: readInt8: premature end - want 1 byte but have ${this.remaining}`);
        }
        let index = this.index;
        let uint8array = this.uint8array;
        let data = typecast_1.uint8ToInt8(uint8array[index]);
        this.index += 1;
        this.remaining -= 1;
        return data;
    }
    /**
     * Read a 16 bit signed integer.
     */
    readInt16() {
        if (this.remaining < 2) {
            throw new Error(`ByteStream: readInt16: premature end - want 2 bytes but have ${this.remaining}`);
        }
        let index = this.index;
        let uint8array = this.uint8array;
        let data = typecast_1.uint8ToInt16(uint8array[index], uint8array[index + 1]);
        this.index += 2;
        this.remaining -= 2;
        return data;
    }
    /**
     * Read a 32 bit signed integer.
     */
    readInt32() {
        if (this.remaining < 4) {
            throw new Error(`ByteStream: readInt32: premature end - want 4 bytes but have ${this.remaining}`);
        }
        let index = this.index;
        let uint8array = this.uint8array;
        let data = typecast_1.uint8ToInt32(uint8array[index], uint8array[index + 1], uint8array[index + 2], uint8array[index + 3]);
        this.index += 4;
        this.remaining -= 4;
        return data;
    }
    /**
     * Read a 8 bit unsigned integer.
     */
    readUint8() {
        if (this.remaining < 1) {
            throw new Error(`ByteStream: readUint8: premature end - want 1 byte but have ${this.remaining}`);
        }
        let data = this.uint8array[this.index];
        this.index += 1;
        this.remaining -= 1;
        return data;
    }
    /**
     * Read a 16 bit unsigned integer.
     */
    readUint16() {
        if (this.remaining < 2) {
            throw new Error(`ByteStream: readUint16: premature end - want 2 bytes but have ${this.remaining}`);
        }
        let index = this.index;
        let uint8array = this.uint8array;
        let data = typecast_1.uint8ToUint16(uint8array[index], uint8array[index + 1]);
        this.index += 2;
        this.remaining -= 2;
        return data;
    }
    /**
     * Read a 32 bit unsigned integer.
     */
    readUint32() {
        if (this.remaining < 4) {
            throw new Error(`ByteStream: readUint32: premature end - want 4 bytes but have ${this.remaining}`);
        }
        let index = this.index;
        let uint8array = this.uint8array;
        let data = typecast_1.uint8ToUint32(uint8array[index], uint8array[index + 1], uint8array[index + 2], uint8array[index + 3]);
        this.index += 4;
        this.remaining -= 4;
        return data;
    }
    /**
     * Read a 32 bit float.
     */
    readFloat32() {
        if (this.remaining < 4) {
            throw new Error(`ByteStream: readFloat32: premature end - want 4 bytes but have ${this.remaining}`);
        }
        let index = this.index;
        let uint8array = this.uint8array;
        let data = typecast_1.uint8ToFloat32(uint8array[index], uint8array[index + 1], uint8array[index + 2], uint8array[index + 3]);
        this.index += 4;
        this.remaining -= 4;
        return data;
    }
    /**
     * Read a 64 bit float.
     */
    readFloat64() {
        if (this.remaining < 8) {
            throw new Error(`ByteStream: readFloat64: premature end - want 8 bytes but have ${this.remaining}`);
        }
        let index = this.index;
        let uint8array = this.uint8array;
        let data = typecast_1.uint8ToFloat64(uint8array[index], uint8array[index + 1], uint8array[index + 2], uint8array[index + 3], uint8array[index + 4], uint8array[index + 5], uint8array[index + 6], uint8array[index + 7]);
        this.index += 8;
        this.remaining -= 8;
        return data;
    }
    /**
     * Read an array of 8 bit signed integers.
     */
    readInt8Array(view) {
        if (!ArrayBuffer.isView(view)) {
            view = new Int8Array(view);
        }
        if (this.remaining < view.byteLength) {
            throw new Error(`ByteStream: readInt8Array: premature end - want ${view.byteLength} bytes but have ${this.remaining}`);
        }
        let index = this.index;
        let uint8array = this.uint8array;
        for (let i = 0, l = view.length; i < l; i++) {
            view[i] = typecast_1.uint8ToInt8(uint8array[index + i]);
        }
        this.index += view.byteLength;
        this.remaining -= view.byteLength;
        return view;
    }
    /**
     * Read an array of 16 bit signed integers.
     */
    readInt16Array(view) {
        if (!ArrayBuffer.isView(view)) {
            view = new Int16Array(view);
        }
        if (this.remaining < view.byteLength) {
            throw new Error(`ByteStream: readInt16Array: premature end - want ${view.byteLength} bytes but have ${this.remaining}`);
        }
        let index = this.index;
        let uint8array = this.uint8array;
        for (let i = 0, l = view.length; i < l; i++) {
            let offset = index + i * 2;
            view[i] = typecast_1.uint8ToInt16(uint8array[offset], uint8array[offset + 1]);
        }
        this.index += view.byteLength;
        this.remaining -= view.byteLength;
        return view;
    }
    /**
     * Read an array of 32 bit signed integers.
     */
    readInt32Array(view) {
        if (!ArrayBuffer.isView(view)) {
            view = new Int32Array(view);
        }
        if (this.remaining < view.byteLength) {
            throw new Error(`ByteStream: readInt32Array: premature end - want ${view.byteLength} bytes but have ${this.remaining}`);
        }
        let index = this.index;
        let uint8array = this.uint8array;
        for (let i = 0, l = view.length; i < l; i++) {
            let offset = index + i * 4;
            view[i] = typecast_1.uint8ToInt32(uint8array[offset], uint8array[offset + 1], uint8array[offset + 2], uint8array[offset + 3]);
        }
        this.index += view.byteLength;
        this.remaining -= view.byteLength;
        return view;
    }
    /**
     * Read an array of 8 bit unsigned integers.
     */
    readUint8Array(view) {
        if (!ArrayBuffer.isView(view)) {
            view = new Uint8Array(view);
        }
        if (this.remaining < view.byteLength) {
            throw new Error(`ByteStream: readUint8Array: premature end - want ${view.byteLength} bytes but have ${this.remaining}`);
        }
        let index = this.index;
        let uint8array = this.uint8array;
        for (let i = 0, l = view.length; i < l; i++) {
            view[i] = uint8array[index + i];
        }
        this.index += view.byteLength;
        this.remaining -= view.byteLength;
        return view;
    }
    /**
     * Read an array of 16 bit unsigned integers.
     */
    readUint16Array(view) {
        if (!ArrayBuffer.isView(view)) {
            view = new Uint16Array(view);
        }
        if (this.remaining < view.byteLength) {
            throw new Error(`ByteStream: readUint16Array: premature end - want ${view.byteLength} bytes but have ${this.remaining}`);
        }
        let index = this.index;
        let uint8array = this.uint8array;
        for (let i = 0, l = view.length; i < l; i++) {
            let offset = index + i * 2;
            view[i] = typecast_1.uint8ToUint16(uint8array[offset], uint8array[offset + 1]);
        }
        this.index += view.byteLength;
        this.remaining -= view.byteLength;
        return view;
    }
    /**
     * Read an array of 32 bit unsigned integers.
     */
    readUint32Array(view) {
        if (!ArrayBuffer.isView(view)) {
            view = new Uint32Array(view);
        }
        if (this.remaining < view.byteLength) {
            throw new Error(`ByteStream: readUint32Array: premature end - want ${view.byteLength} bytes but have ${this.remaining}`);
        }
        let index = this.index;
        let uint8array = this.uint8array;
        for (let i = 0, l = view.length; i < l; i++) {
            let offset = index + i * 4;
            view[i] = typecast_1.uint8ToUint32(uint8array[offset], uint8array[offset + 1], uint8array[offset + 2], uint8array[offset + 3]);
        }
        this.index += view.byteLength;
        this.remaining -= view.byteLength;
        return view;
    }
    /**
     * Read an array of 32 bit floats.
     */
    readFloat32Array(view) {
        if (!ArrayBuffer.isView(view)) {
            view = new Float32Array(view);
        }
        if (this.remaining < view.byteLength) {
            throw new Error(`ByteStream: readFloat32Array: premature end - want ${view.byteLength} bytes but have ${this.remaining}`);
        }
        let index = this.index;
        let uint8array = this.uint8array;
        for (let i = 0, l = view.length; i < l; i++) {
            let offset = index + i * 4;
            view[i] = typecast_1.uint8ToFloat32(uint8array[offset], uint8array[offset + 1], uint8array[offset + 2], uint8array[offset + 3]);
        }
        this.index += view.byteLength;
        this.remaining -= view.byteLength;
        return view;
    }
    /**
     * Read an array of 64 bit floats.
     */
    readFloat64Array(view) {
        if (!ArrayBuffer.isView(view)) {
            view = new Float64Array(view);
        }
        if (this.remaining < view.byteLength) {
            throw new Error(`ByteStream: readFloat64Array: premature end - want ${view.byteLength} bytes but have ${this.remaining}`);
        }
        let index = this.index;
        let uint8array = this.uint8array;
        for (let i = 0, l = view.length; i < l; i++) {
            let offset = index + i * 8;
            view[i] = typecast_1.uint8ToFloat64(uint8array[offset], uint8array[offset + 1], uint8array[offset + 2], uint8array[offset + 3], uint8array[offset + 4], uint8array[offset + 5], uint8array[offset + 6], uint8array[offset + 7]);
        }
        this.index += view.byteLength;
        this.remaining -= view.byteLength;
        return view;
    }
    /**
     * Write a UTF8 string.
     *
     * Returns the number of bytes that were written,
     */
    write(utf8) {
        let bytes = utf8_1.encodeUtf8(utf8);
        this.writeUint8Array(bytes);
        return bytes.length;
    }
    /**
     * Write a UTF8 string as a NULL terminated string.
     *
     * Returns the number of bytes that were written, including the terminating NULL.
     */
    writeNull(utf8) {
        let bytes = this.write(utf8);
        this.index++;
        this.remaining--;
        return bytes + 1;
    }
    /**
     * Write a binary string.
     */
    writeBinary(value) {
        let index = this.index;
        let uint8array = this.uint8array;
        let count = value.length;
        for (let i = 0; i < count; i++) {
            uint8array[index + i] = value.charCodeAt(i);
        }
        this.index += count;
    }
    /**
     * Write a 8 bit signed integer.
     */
    writeInt8(value) {
        this.uint8array[this.index] = typecast_1.int8ToUint8(value);
        this.index += 1;
    }
    /**
     * Write a 16 bit signed integer.
     */
    writeInt16(value) {
        let index = this.index;
        let uint8array = this.uint8array;
        typecast_1.int16ToUint8(uint8, value);
        uint8array[index] = uint8[0];
        uint8array[index + 1] = uint8[1];
        this.index += 2;
    }
    /**
     * Write a 32 bit signed integer.
     */
    writeInt32(value) {
        let index = this.index;
        let uint8array = this.uint8array;
        typecast_1.int32ToUint8(uint8, value);
        uint8array[index] = uint8[0];
        uint8array[index + 1] = uint8[1];
        uint8array[index + 2] = uint8[2];
        uint8array[index + 3] = uint8[3];
        this.index += 4;
    }
    /**
     * Write a 8 bit unsigned integer.
     */
    writeUint8(value) {
        this.uint8array[this.index] = value;
        this.index += 1;
    }
    /**
     * Write a 16 bit unsigned integer.
     */
    writeUint16(value) {
        let index = this.index;
        let uint8array = this.uint8array;
        typecast_1.uint16ToUint8(uint8, value);
        uint8array[index] = uint8[0];
        uint8array[index + 1] = uint8[1];
        this.index += 2;
    }
    /**
     * Write a 32 bit unsigned integer.
     */
    writeUint32(value) {
        let index = this.index;
        let uint8array = this.uint8array;
        typecast_1.uint32ToUint8(uint8, value);
        uint8array[index] = uint8[0];
        uint8array[index + 1] = uint8[1];
        uint8array[index + 2] = uint8[2];
        uint8array[index + 3] = uint8[3];
        this.index += 4;
    }
    /**
     * Write a 32 bit float.
     */
    writeFloat32(value) {
        let index = this.index;
        let uint8array = this.uint8array;
        typecast_1.float32ToUint8(uint8, value);
        uint8array[index] = uint8[0];
        uint8array[index + 1] = uint8[1];
        uint8array[index + 2] = uint8[2];
        uint8array[index + 3] = uint8[3];
        this.index += 4;
    }
    /**
     * Write a 64 bit float.
     */
    writeFloat64(value) {
        let index = this.index;
        let uint8array = this.uint8array;
        typecast_1.float64ToUint8(uint8, value);
        uint8array[index] = uint8[0];
        uint8array[index + 1] = uint8[1];
        uint8array[index + 2] = uint8[2];
        uint8array[index + 3] = uint8[3];
        uint8array[index + 4] = uint8[4];
        uint8array[index + 5] = uint8[5];
        uint8array[index + 6] = uint8[6];
        uint8array[index + 7] = uint8[7];
        this.index += 8;
    }
    /**
     * Write an array of 8 bit signed integers.
     */
    writeInt8Array(view) {
        let index = this.index;
        let uint8array = this.uint8array;
        for (let i = 0, l = view.length; i < l; i++) {
            uint8array[index + i] = typecast_1.int8ToUint8(view[i]);
        }
        this.index += view.byteLength;
    }
    /**
     * Write an array of 16 bit signed integers.
     */
    writeInt16Array(view) {
        let index = this.index;
        let uint8array = this.uint8array;
        for (let i = 0, l = view.length; i < l; i++) {
            let offset = index + i * 2;
            typecast_1.int16ToUint8(uint8, view[i]);
            uint8array[offset] = uint8[0];
            uint8array[offset + 1] = uint8[1];
        }
        this.index += view.byteLength;
    }
    /**
     * Write an array of 32 bit signed integers.
     */
    writeInt32Array(view) {
        let index = this.index;
        let uint8array = this.uint8array;
        for (let i = 0, l = view.length; i < l; i++) {
            let offset = index + i * 4;
            typecast_1.int32ToUint8(uint8, view[i]);
            uint8array[offset] = uint8[0];
            uint8array[offset + 1] = uint8[1];
            uint8array[offset + 2] = uint8[2];
            uint8array[offset + 3] = uint8[3];
        }
        this.index += view.byteLength;
    }
    /**
     * Write an array of 8 bit unsigned integers.
     */
    writeUint8Array(view) {
        let index = this.index;
        let uint8array = this.uint8array;
        for (let i = 0, l = view.length; i < l; i++) {
            uint8array[index + i] = view[i];
        }
        this.index += view.byteLength;
    }
    /**
     * Write an array of 16 bit unsigned integers.
     */
    writeUint16Array(view) {
        let index = this.index;
        let uint8array = this.uint8array;
        for (let i = 0, l = view.length; i < l; i++) {
            let offset = index + i * 2;
            typecast_1.uint16ToUint8(uint8, view[i]);
            uint8array[offset] = uint8[0];
            uint8array[offset + 1] = uint8[1];
        }
        this.index += view.byteLength;
    }
    /**
     * Write an array of 32 bit unsigned integers.
     */
    writeUint32Array(view) {
        let index = this.index;
        let uint8array = this.uint8array;
        for (let i = 0, l = view.length; i < l; i++) {
            let offset = index + i * 4;
            typecast_1.uint32ToUint8(uint8, view[i]);
            uint8array[offset] = uint8[0];
            uint8array[offset + 1] = uint8[1];
            uint8array[offset + 2] = uint8[2];
            uint8array[offset + 3] = uint8[3];
        }
        this.index += view.byteLength;
    }
    /**
     * Write an array of 32 bit floats.
     */
    writeFloat32Array(view) {
        let index = this.index;
        let uint8array = this.uint8array;
        for (let i = 0, l = view.length; i < l; i++) {
            let offset = index + i * 4;
            typecast_1.float32ToUint8(uint8, view[i]);
            uint8array[offset] = uint8[0];
            uint8array[offset + 1] = uint8[1];
            uint8array[offset + 2] = uint8[2];
            uint8array[offset + 3] = uint8[3];
        }
        this.index += view.byteLength;
    }
    /**
     * Write an array of 64 bit floats.
     */
    writeFloat64Array(view) {
        let index = this.index;
        let uint8array = this.uint8array;
        for (let i = 0, l = view.length; i < l; i++) {
            let offset = index + i * 8;
            typecast_1.float64ToUint8(uint8, view[i]);
            uint8array[offset] = uint8[0];
            uint8array[offset + 1] = uint8[1];
            uint8array[offset + 2] = uint8[2];
            uint8array[offset + 3] = uint8[3];
            uint8array[offset + 4] = uint8[4];
            uint8array[offset + 5] = uint8[5];
            uint8array[offset + 6] = uint8[6];
            uint8array[offset + 7] = uint8[7];
        }
        this.index += view.byteLength;
    }
}
exports.default = BinaryStream;
