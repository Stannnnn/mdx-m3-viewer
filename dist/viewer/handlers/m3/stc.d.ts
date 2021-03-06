import M3ParserStc from '../../../parsers/m3/stc';
import { AnimationReference } from '../../../parsers/m3/animationreference';
import M3ModelInstance from './modelinstance';
import M3SdContainer from './sd';
/**
 * M3 sequence data.
 */
export default class M3Stc {
    name: string;
    runsConcurrent: number;
    priority: number;
    stsIndex: number;
    animRefs: any[];
    sd: M3SdContainer[];
    constructor(stc: M3ParserStc);
    getValueUnsafe(animRef: AnimationReference, instance: M3ModelInstance): any;
}
