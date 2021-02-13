/// <reference types="./src/types" />
/**
 * A data texture.
 */
export default class DataTexture {
    gl: WebGLRenderingContext;
    texture: WebGLTexture;
    format: number;
    width: number;
    height: number;
    constructor(gl: WebGLRenderingContext, channels?: number, width?: number, height?: number);
    reserve(width: number, height: number): void;
    bindAndUpdate(buffer: TypedArray, width?: number, height?: number): void;
    bind(unit: number): void;
}
