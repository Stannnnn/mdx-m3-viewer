"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const tga_js_1 = require("tga-js");
const typecast_1 = require("../../common/typecast");
/**
 * A TGA image.
 */
class TgaImage {
    constructor() {
        this.width = 0;
        this.height = 0;
        this.data = null;
    }
    load(buffer) {
        let bytes = typecast_1.bytesOf(buffer);
        let tga = new tga_js_1.default();
        tga.load(bytes);
        let header = tga.header;
        this.width = header.width;
        this.height = header.height;
        this.data = new ImageData(header.width, header.height);
        tga.getImageData(this.data);
    }
}
exports.default = TgaImage;
