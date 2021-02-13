import BinaryStream from '../../common/binarystream';
import TokenStream from './tokenstream';
import GenericObject from './genericobject';
/**
 * A particle emitter type 2.
 */
export default class ParticleEmitter2 extends GenericObject {
    speed: number;
    variation: number;
    latitude: number;
    gravity: number;
    lifeSpan: number;
    emissionRate: number;
    width: number;
    length: number;
    filterMode: number;
    rows: number;
    columns: number;
    headOrTail: number;
    tailLength: number;
    timeMiddle: number;
    segmentColors: Float32Array[];
    segmentAlphas: Uint8Array;
    segmentScaling: Float32Array;
    headIntervals: Uint32Array[];
    tailIntervals: Uint32Array[];
    textureId: number;
    squirt: number;
    priorityPlane: number;
    replaceableId: number;
    readMdx(stream: BinaryStream): void;
    writeMdx(stream: BinaryStream): void;
    readMdl(stream: TokenStream): void;
    writeMdl(stream: TokenStream): void;
    getByteLength(): number;
}
