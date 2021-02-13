/// <reference types="./src/types" />
import { AnimationReference } from '../../../parsers/m3/animationreference';
import Node from './node';
import M3ModelInstance from './modelinstance';
import M3Bone from './bone';
import M3Sts from './sts';
import M3Stc from './stc';
import M3Stg from './stg';
/**
 * M3 skeleton.
 */
export default class M3Skeleton {
    nodes: Node[];
    worldMatrices: Float32Array;
    instance: M3ModelInstance;
    modelNodes: M3Bone[];
    initialReference: Float32Array[];
    sts: M3Sts[];
    stc: M3Stc[];
    stg: M3Stg[];
    boneLookup: any;
    constructor(instance: M3ModelInstance);
    update(dt: number): void;
    getValueUnsafe(animRef: AnimationReference, instance: M3ModelInstance): any;
    getValue(animRef: AnimationReference, instance: M3ModelInstance): any;
    getValue2(out: TypedArray, animRef: AnimationReference, instance: M3ModelInstance): TypedArray;
    getValue3(out: TypedArray, animRef: AnimationReference, instance: M3ModelInstance): TypedArray;
    getValue4(out: TypedArray, animRef: AnimationReference, instance: M3ModelInstance): TypedArray;
}
