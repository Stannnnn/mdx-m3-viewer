"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const image_1 = require("../../../parsers/dds/image");
const texture_1 = require("../../texture");
/**
 * A DDS texture handler.
 */
class DdsTexture extends texture_1.default {
    constructor(bufferOrImage, resourceData) {
        super(resourceData);
        let image;
        if (bufferOrImage instanceof image_1.DdsImage) {
            image = bufferOrImage;
        }
        else {
            image = new image_1.DdsImage();
            image.load(bufferOrImage);
        }
        let viewer = this.viewer;
        let gl = viewer.gl;
        let webgl = viewer.webgl;
        let compressedTextures = webgl.extensions.WEBGL_compressed_texture_s3tc;
        let format = image.format;
        let internalFormat = 0;
        if (compressedTextures) {
            if (format === image_1.FOURCC_DXT1) {
                internalFormat = compressedTextures.COMPRESSED_RGB_S3TC_DXT1_EXT;
            }
            else if (format === image_1.FOURCC_DXT3) {
                internalFormat = compressedTextures.COMPRESSED_RGBA_S3TC_DXT3_EXT;
            }
            else if (format === image_1.FOURCC_DXT5) {
                internalFormat = compressedTextures.COMPRESSED_RGBA_S3TC_DXT5_EXT;
            }
        }
        let id = gl.createTexture();
        this.width = image.width;
        this.height = image.height;
        this.webglResource = id;
        gl.bindTexture(gl.TEXTURE_2D, id);
        let mipmaps = image.mipmaps();
        // DXT1 and ATI2 pixels are two bytes.
        // This generally doesn't matter, however, when having 1x2 or 2x1 mipmaps, it does.
        // Therefore set the proper alignment if needed.
        if (format === image_1.FOURCC_DXT1 || format === image_1.FOURCC_ATI2) {
            gl.pixelStorei(gl.UNPACK_ALIGNMENT, 2);
        }
        for (let i = 0; i < mipmaps; i++) {
            // Let the GPU handle the compressed data if it supports it.
            // Otherwise, decode the data on the client.
            let { width, height, data } = image.getMipmap(i, internalFormat !== 0);
            if (internalFormat) {
                gl.compressedTexImage2D(gl.TEXTURE_2D, i, internalFormat, width, height, 0, data);
            }
            else if (format === image_1.FOURCC_DXT1) {
                gl.texImage2D(gl.TEXTURE_2D, i, gl.RGB, width, height, 0, gl.RGB, gl.UNSIGNED_SHORT_5_6_5, data);
            }
            else if (format === image_1.FOURCC_DXT3) {
                gl.texImage2D(gl.TEXTURE_2D, i, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, data);
            }
            else if (format === image_1.FOURCC_DXT5) {
                gl.texImage2D(gl.TEXTURE_2D, i, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, data);
            }
            else {
                gl.texImage2D(gl.TEXTURE_2D, i, gl.LUMINANCE_ALPHA, width, height, 0, gl.LUMINANCE_ALPHA, gl.UNSIGNED_BYTE, data);
            }
        }
        // Restore the alignment to the default, in case it changed.
        gl.pixelStorei(gl.UNPACK_ALIGNMENT, 4);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        if (mipmaps > 1) {
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
        }
        else {
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        }
    }
}
exports.default = DdsTexture;
