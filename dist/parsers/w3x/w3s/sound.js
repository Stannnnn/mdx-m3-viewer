"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utf8_1 = require("../../../common/utf8");
/**
 * A sound.
 */
class Sound {
    constructor() {
        this.name = '';
        this.file = '';
        this.eaxEffect = '';
        this.flags = 0;
        this.fadeInRate = 0;
        this.fadeOutRate = 0;
        this.volume = 0;
        this.pitch = 0;
        this.u1 = 0;
        this.u2 = 0;
        this.channel = 0;
        this.minDistance = 0;
        this.maxDistance = 0;
        this.distanceCutoff = 0;
        this.u3 = 0;
        this.u4 = 0;
        this.u5 = 0;
        this.u6 = 0;
        this.u7 = 0;
        this.u8 = 0;
    }
    load(stream) {
        this.name = stream.readNull();
        this.file = stream.readNull();
        this.eaxEffect = stream.readNull();
        this.flags = stream.readUint32();
        this.fadeInRate = stream.readInt32();
        this.fadeOutRate = stream.readInt32();
        this.volume = stream.readInt32();
        this.pitch = stream.readFloat32();
        this.u1 = stream.readFloat32();
        this.u2 = stream.readInt32();
        this.channel = stream.readInt32();
        this.minDistance = stream.readFloat32();
        this.maxDistance = stream.readFloat32();
        this.distanceCutoff = stream.readFloat32();
        this.u3 = stream.readFloat32();
        this.u4 = stream.readFloat32();
        this.u5 = stream.readInt32();
        this.u6 = stream.readFloat32();
        this.u7 = stream.readFloat32();
        this.u8 = stream.readFloat32();
    }
    save(stream) {
        stream.writeNull(this.name);
        stream.writeNull(this.file);
        stream.writeNull(this.eaxEffect);
        stream.writeUint32(this.flags);
        stream.writeUint32(this.fadeInRate);
        stream.writeUint32(this.fadeOutRate);
        stream.writeUint32(this.volume);
        stream.writeFloat32(this.pitch);
        stream.writeFloat32(this.u1);
        stream.writeInt32(this.u2);
        stream.writeInt32(this.channel);
        stream.writeFloat32(this.minDistance);
        stream.writeFloat32(this.maxDistance);
        stream.writeFloat32(this.distanceCutoff);
        stream.writeFloat32(this.u3);
        stream.writeFloat32(this.u4);
        stream.writeInt32(this.u5);
        stream.writeFloat32(this.u6);
        stream.writeFloat32(this.u7);
        stream.writeFloat32(this.u8);
    }
    getByteLength() {
        return 71 + utf8_1.byteLengthUtf8(this.name) + utf8_1.byteLengthUtf8(this.file) + utf8_1.byteLengthUtf8(this.eaxEffect);
    }
}
exports.default = Sound;
