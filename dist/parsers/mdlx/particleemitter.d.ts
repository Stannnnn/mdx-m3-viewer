import BinaryStream from '../../common/binarystream';
import TokenStream from './tokenstream';
import GenericObject from './genericobject';
/**
 * A particle emitter.
 */
export default class ParticleEmitter extends GenericObject {
    emissionRate: number;
    gravity: number;
    longitude: number;
    latitude: number;
    path: string;
    lifeSpan: number;
    speed: number;
    constructor();
    readMdx(stream: BinaryStream): void;
    writeMdx(stream: BinaryStream): void;
    readMdl(stream: TokenStream): void;
    writeMdl(stream: TokenStream): void;
    getByteLength(): number;
}
