/// <reference types="./src/types" />
import WebGL from './gl';
/**
 * A wrapper around a WebGL shader program.
 */
export default class Shader {
    webgl: WebGL;
    program: WebGLProgram;
    uniforms: {
        [key: string]: WebGLUniformLocation;
    };
    attribs: NumberObject;
    attribsCount: number;
    constructor(webgl: WebGL, program: WebGLProgram);
    use(): void;
}
