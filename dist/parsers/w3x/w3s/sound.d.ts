import BinaryStream from '../../../common/binarystream';
/**
 * A sound.
 */
export default class Sound {
    name: string;
    file: string;
    eaxEffect: string;
    flags: number;
    fadeInRate: number;
    fadeOutRate: number;
    volume: number;
    pitch: number;
    u1: number;
    u2: number;
    channel: number;
    minDistance: number;
    maxDistance: number;
    distanceCutoff: number;
    u3: number;
    u4: number;
    u5: number;
    u6: number;
    u7: number;
    u8: number;
    load(stream: BinaryStream): void;
    save(stream: BinaryStream): void;
    getByteLength(): number;
}
