import BinaryStream from '../../common/binarystream';
import IndexEntry from './indexentry';
import Reference from './reference';
import BoundingSphere from './boundingsphere';
import BoundingShape from './boundingshape';
/**
 * The model information structure.
 */
export default class ModelHeader {
    version: number;
    modelName: Reference;
    flags: number;
    sequences: Reference;
    stc: Reference;
    stg: Reference;
    unknown0: number;
    unknown1: number;
    unknown2: number;
    unknown3: number;
    sts: Reference;
    bones: Reference;
    numberOfBonesToCheckForSkin: number;
    vertexFlags: number;
    vertices: Reference;
    divisions: Reference;
    boneLookup: Reference;
    boundings: BoundingSphere;
    unknown4To20: Uint32Array;
    attachmentPoints: Reference;
    attachmentPointAddons: Reference;
    ligts: Reference;
    shbxData: Reference;
    cameras: Reference;
    unknown21: Reference;
    materialReferences: Reference;
    materials: Reference[];
    particleEmitters: Reference;
    particleEmitterCopies: Reference;
    ribbonEmitters: Reference;
    projections: Reference;
    forces: Reference;
    warps: Reference;
    unknown22: Reference;
    rigidBodies: Reference;
    unknown23: Reference;
    physicsJoints: Reference;
    clothBehavior: Reference;
    unknown24: Reference;
    ikjtData: Reference;
    unknown25: Reference;
    unknown26: Reference;
    partsOfTurrentBehaviors: Reference;
    turrentBehaviors: Reference;
    absoluteInverseBoneRestPositions: Reference;
    tightHitTest: BoundingShape;
    fuzzyHitTestObjects: Reference;
    attachmentVolumes: Reference;
    attachmentVolumesAddon0: Reference;
    attachmentVolumesAddon1: Reference;
    billboardBehaviors: Reference;
    tmdData: Reference;
    unknown27: number;
    unknown28: Reference;
    constructor();
    load(stream: BinaryStream, version: number, index: IndexEntry[]): void;
}