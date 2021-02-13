"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DdsImage = exports.FOURCC_ATI2 = exports.FOURCC_DXT5 = exports.FOURCC_DXT3 = exports.FOURCC_DXT1 = exports.DDS_MAGIC = void 0;
const typecast_1 = require("../../common/typecast");
const dxt_1 = require("../../common/dxt");
exports.DDS_MAGIC = 0x20534444;
const DDSD_MIPMAPCOUNT = 0x20000;
const DDPF_FOURCC = 0x4;
exports.FOURCC_DXT1 = 0x31545844;
exports.FOURCC_DXT3 = 0x33545844;
exports.FOURCC_DXT5 = 0x35545844;
exports.FOURCC_ATI2 = 0x32495441;
/**
 * A DDS image.
 */
class DdsImage {
    constructor() {
        this.width = 0;
        this.height = 0;
        this.format = 0;
        this.mipmapWidths = [];
        this.mipmapHeights = [];
        this.mipmapDatas = [];
    }
    load(buffer) {
        let bytes = typecast_1.bytesOf(buffer);
        let header = new Int32Array(bytes.buffer, 0, 31);
        if (header[0] !== exports.DDS_MAGIC) {
            throw new Error('Wrong magic number');
        }
        if (!(header[20] & DDPF_FOURCC)) {
            throw new Error('Not FourCC');
        }
        let fourCC = header[21];
        if (fourCC !== exports.FOURCC_DXT1 && fourCC !== exports.FOURCC_DXT3 && fourCC !== exports.FOURCC_DXT5 && fourCC !== exports.FOURCC_ATI2) {
            throw new Error(`Unsupported FourCC: ${typecast_1.base256ToString(fourCC)}`);
        }
        this.format = fourCC;
        let mipmaps = 1;
        if (header[2] & DDSD_MIPMAPCOUNT) {
            mipmaps = Math.max(1, header[7]);
        }
        let width = header[4];
        let height = header[3];
        let blockSize = 16;
        // DXT3, DXT5, and RGTC, all have 16 bytes per block.
        if (fourCC === exports.FOURCC_DXT1) {
            blockSize = 8;
        }
        this.width = width;
        this.height = height;
        let offset = header[1] + 4;
        for (let i = 0; i < mipmaps; i++) {
            let size = Math.max(4, width) / 4 * Math.max(4, height) / 4 * blockSize;
            this.mipmapWidths[i] = width;
            this.mipmapHeights[i] = height;
            this.mipmapDatas[i] = bytes.subarray(offset, offset + size);
            offset += size;
            width = Math.max(width / 2, 1);
            height = Math.max(height / 2, 1);
        }
    }
    mipmaps() {
        return this.mipmapDatas.length;
    }
    getMipmap(level, raw = false) {
        let width = this.mipmapWidths[level];
        let height = this.mipmapHeights[level];
        let data = this.mipmapDatas[level];
        let mipmap;
        if (raw) {
            mipmap = data;
        }
        else if (this.format === exports.FOURCC_DXT1) {
            mipmap = dxt_1.decodeDxt1(data, width, height);
        }
        else if (this.format === exports.FOURCC_DXT3) {
            mipmap = dxt_1.decodeDxt3(data, width, height);
        }
        else if (this.format === exports.FOURCC_DXT5) {
            mipmap = dxt_1.decodeDxt5(data, width, height);
        }
        else {
            mipmap = dxt_1.decodeRgtc(data, width, height);
        }
        return { width, height, data: mipmap };
    }
}
exports.DdsImage = DdsImage;
