/// <reference types="./src/types" />
import M3ParserSd from '../../../parsers/m3/sd';
/**
 * Sequence data.
 */
declare class M3Sd {
    keys: Int32Array;
    values: TypedArray[] | number[];
    biggestKey: number;
    constructor(sd: M3ParserSd);
}
/**
 * A sequence data container.
 */
export default class M3SdContainer {
    sd: M3Sd[];
    constructor(sd: M3ParserSd[]);
    getValueUnsafe(index: number, animationReference: any, frame: number, runsConcurrent: number): any;
}
export {};
