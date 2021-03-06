"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const binarystream_1 = require("../../../common/binarystream");
const doodad_1 = require("./doodad");
const terraindoodad_1 = require("./terraindoodad");
/**
 * war3map.doo - the doodad and destructible file.
 */
class War3MapDoo {
    constructor() {
        this.version = 0;
        this.u1 = new Uint8Array(4);
        this.doodads = [];
        this.u2 = new Uint8Array(4);
        this.terrainDoodads = [];
    }
    load(buffer, isReforged) {
        let stream = new binarystream_1.default(buffer);
        if (stream.readBinary(4) !== 'W3do') {
            return false;
        }
        this.version = stream.readInt32();
        stream.readUint8Array(this.u1);
        for (let i = 0, l = stream.readInt32(); i < l; i++) {
            let doodad = new doodad_1.default();
            doodad.load(stream, this.version, isReforged);
            this.doodads.push(doodad);
        }
        stream.readUint8Array(this.u2);
        for (let i = 0, l = stream.readInt32(); i < l; i++) {
            let terrainDoodad = new terraindoodad_1.default();
            terrainDoodad.load(stream, this.version);
            this.terrainDoodads.push(terrainDoodad);
        }
    }
    save(isReforged) {
        let stream = new binarystream_1.default(new ArrayBuffer(this.getByteLength(isReforged)));
        stream.writeBinary('W3do');
        stream.writeInt32(this.version);
        stream.writeUint8Array(this.u1);
        stream.writeUint32(this.doodads.length);
        for (let doodad of this.doodads) {
            doodad.save(stream, this.version, isReforged);
        }
        stream.writeUint8Array(this.u2);
        stream.writeUint32(this.terrainDoodads.length);
        for (let terrainDoodad of this.terrainDoodads) {
            terrainDoodad.save(stream, this.version);
        }
        return stream.uint8array;
    }
    getByteLength(isReforged) {
        let size = 24 + this.terrainDoodads.length * 16;
        for (let doodad of this.doodads) {
            size += doodad.getByteLength(this.version, isReforged);
        }
        return size;
    }
}
exports.default = War3MapDoo;
