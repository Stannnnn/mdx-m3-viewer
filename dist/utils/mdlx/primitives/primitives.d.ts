/**
 * Creates a rectangle geometry object.
 */
export declare function createRectangle(w: number, d: number): {
    vertices: Float32Array;
    uvs: Float32Array;
    faces: Uint16Array;
    edges: Uint16Array;
    boundingRadius: number;
};
/**
 * Creates a unit rectangle geometry object.
 */
export declare function createUnitRectangle(): {
    vertices: Float32Array;
    uvs: Float32Array;
    faces: Uint16Array;
    edges: Uint16Array;
    boundingRadius: number;
};
/**
 * Creates a cube geometry object.
 */
export declare function createCube(w: number, d: number, h: number): {
    vertices: Float32Array;
    uvs: Float32Array;
    faces: Uint16Array;
    edges: Uint16Array;
    boundingRadius: number;
};
/**
 * Creates a unit cube geometry object.
 */
export declare function createUnitCube(): {
    vertices: Float32Array;
    uvs: Float32Array;
    faces: Uint16Array;
    edges: Uint16Array;
    boundingRadius: number;
};
/**
 * Creates a sphere geometry object.
 */
export declare function createSphere(radius: number, stacks: number, slices: number): {
    vertices: Float32Array;
    uvs: Float32Array;
    faces: Uint16Array;
    edges: Uint16Array;
    boundingRadius: number;
};
/**
 * Creates a unit sphere geometry object.
 */
export declare function createUnitSphere(stacks: number, slices: number): {
    vertices: Float32Array;
    uvs: Float32Array;
    faces: Uint16Array;
    edges: Uint16Array;
    boundingRadius: number;
};
/**
 * Creates a cylinder geometry object.
 */
export declare function createCylinder(radius: number, height: number, slices: number): {
    vertices: Float32Array;
    uvs: Float32Array;
    faces: Uint16Array;
    edges: Uint16Array;
    boundingRadius: number;
};
/**
 * Creates a unit cylinder geometry object.
 */
export declare function createUnitCylinder(slices: number): {
    vertices: Float32Array;
    uvs: Float32Array;
    faces: Uint16Array;
    edges: Uint16Array;
    boundingRadius: number;
};
/**
 * Create a furstum geometry.
 */
export declare function createFrustum(fieldOfView: number, aspectRatio: number, nearClipPlane: number, farClipPlane: number): {
    vertices: Float32Array;
    uvs: Float32Array;
    faces: Uint16Array;
    edges: Uint16Array;
    boundingRadius: number;
};
