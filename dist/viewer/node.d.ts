import { vec3, quat, mat4 } from 'gl-matrix';
import Scene from './scene';
/**
 * A node.
 */
export declare class Node {
    pivot: vec3;
    localLocation: vec3;
    localRotation: quat;
    localScale: vec3;
    worldLocation: vec3;
    worldRotation: quat;
    worldScale: vec3;
    inverseWorldLocation: vec3;
    inverseWorldRotation: quat;
    inverseWorldScale: vec3;
    localMatrix: mat4;
    worldMatrix: mat4;
    parent: Node | SkeletalNode | null;
    children: Node[];
    dontInheritTranslation: boolean;
    dontInheritRotation: boolean;
    dontInheritScaling: boolean;
    visible: boolean;
    wasDirty: boolean;
    dirty: boolean;
    constructor();
    /**
     * Sets the node's pivot.
     */
    setPivot(pivot: vec3): this;
    /**
     * Sets the node's local location.
     */
    setLocation(location: vec3): this;
    /**
     * Sets the node's local rotation.
     */
    setRotation(rotation: quat): this;
    /**
     * Sets the node's local scale.
     */
    setScale(varying: vec3): this;
    /**
     * Sets the node's local scale uniformly.
     */
    setUniformScale(uniform: number): this;
    /**
     * Sets the node's local location, rotation, and scale.
     */
    setTransformation(location: vec3, rotation: quat, scale: vec3): this;
    /**
     * Resets the node's local location, pivot, rotation, and scale, to the default values.
     */
    resetTransformation(): this;
    /**
     * Moves the node's pivot.
     */
    movePivot(offset: vec3): this;
    /**
     * Moves the node's local location.
     */
    move(offset: vec3): this;
    /**
     * Rotates the node's local rotation in world space.
     */
    rotate(rotation: quat): this;
    /**
     * Rotates the node's local rotation in local space.
     */
    rotateLocal(rotation: quat): this;
    /**
     * Scales the node.
     */
    scale(scale: vec3): this;
    /**
     * Scales the node uniformly.
     */
    uniformScale(scale: number): this;
    face(to: vec3, worldUp: vec3): void;
    /**
     * Sets the node's parent.
     */
    setParent(parent?: Node | SkeletalNode): this;
    /**
     * Recalculate this node's transformation data.
     */
    recalculateTransformation(): void;
    /**
     * Update this node, and continue down the node hierarchy.
     *
     * Also updates the object part of this node, if there is any (e.g. model instances).
     */
    update(dt: number, scene: Scene): void;
    /**
     * Update the object part of this node.
     *
     * Used by model instances.
     */
    updateObject(dt: number, scene: Scene): void;
    /**
     * Update this node's children and continue the update hierarchy.
     */
    updateChildren(dt: number, scene: Scene): void;
}
/**
 * A skeletal node used for skeletons.
 *
 * Expected to be created with createSharedNodes() below.
 */
export declare class SkeletalNode {
    pivot: vec3;
    localLocation: vec3;
    localRotation: quat;
    localScale: vec3;
    worldLocation: vec3;
    worldRotation: quat;
    worldScale: vec3;
    inverseWorldLocation: vec3;
    inverseWorldRotation: quat;
    inverseWorldScale: vec3;
    localMatrix: mat4;
    worldMatrix: mat4;
    dontInheritTranslation: boolean;
    dontInheritRotation: boolean;
    dontInheritScaling: boolean;
    parent: SkeletalNode | Node | null;
    children: Node[];
    wasDirty: boolean;
    /**
     * The object associated with this node, if there is any.
     */
    object: any;
    dirty: boolean;
    billboarded: boolean;
    billboardedX: boolean;
    billboardedY: boolean;
    billboardedZ: boolean;
    /**
     *
     */
    constructor(shared: Float32Array[]);
    /**
     * Recalculate this skeletal node.
     */
    recalculateTransformation(scene: Scene): void;
    /**
     * Update this skeletal node's children.
     *
     * Note that this does not update other skeletal nodes!
     */
    updateChildren(dt: number, scene: Scene): void;
    /**
     * Allows inherited node classes to run extra transformations when billboarding.
     *
     * This is needed because the different model formats are in different vector spaces.
     */
    convertBasis(rotation: quat): void;
}
/**
 * Creates an array of skeletal nodes with shared memory.
 *
 * The returned object contains the node array itself, the backing buffer, and all of the different shared arrays.
 */
export declare function createSkeletalNodes(count: number, Node?: typeof SkeletalNode): {
    data: Float32Array;
    nodes: SkeletalNode[];
    pivots: Float32Array;
    localLocations: Float32Array;
    localRotations: Float32Array;
    localScales: Float32Array;
    worldLocations: Float32Array;
    worldRotations: Float32Array;
    worldScales: Float32Array;
    inverseWorldLocations: Float32Array;
    invereseWorldRotations: Float32Array;
    inverseWorldScales: Float32Array;
    localMatrices: Float32Array;
    worldMatrices: Float32Array;
};
