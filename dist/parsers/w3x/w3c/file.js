"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const binarystream_1 = require("../../../common/binarystream");
const camera_1 = require("./camera");
/**
 * war3map.w3c - the camera file.
 */
class War3MapW3c {
    constructor() {
        this.version = 0;
        this.cameras = [];
    }
    load(buffer) {
        let stream = new binarystream_1.default(buffer);
        this.version = stream.readInt32();
        for (let i = 0, l = stream.readUint32(); i < l; i++) {
            let camera = new camera_1.default();
            camera.load(stream);
            this.cameras[i] = camera;
        }
    }
    save() {
        let stream = new binarystream_1.default(new ArrayBuffer(this.getByteLength()));
        stream.writeInt32(this.version);
        stream.writeUint32(this.cameras.length);
        for (let camera of this.cameras) {
            camera.save(stream);
        }
        return stream.uint8array;
    }
    getByteLength() {
        let size = 8;
        for (let camera of this.cameras) {
            size += camera.getByteLength();
        }
        return size;
    }
}
exports.default = War3MapW3c;
