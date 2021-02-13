"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gl_matrix_1 = require("gl-matrix");
const gl_matrix_addon_1 = require("../common/gl-matrix-addon");
const vectorHeap = gl_matrix_1.vec3.create();
const vectorHeap2 = gl_matrix_1.vec3.create();
const vectorHeap3 = gl_matrix_1.vec3.create();
const quatHeap = gl_matrix_1.quat.create();
const facingCorrection = gl_matrix_1.quat.setAxisAngle(gl_matrix_1.quat.create(), gl_matrix_addon_1.VEC3_UNIT_X, Math.PI / 2);
/**
 * A camera.
 */
class Camera {
    constructor() {
        this.isPerspective = true;
        this.fov = 0;
        this.aspect = 0;
        this.isOrtho = false;
        this.leftClipPlane = 0;
        this.rightClipPlane = 0;
        this.bottomClipPlane = 0;
        this.topClipPlane = 0;
        this.nearClipPlane = 0;
        this.farClipPlane = 0;
        this.location = gl_matrix_1.vec3.create();
        this.rotation = gl_matrix_1.quat.create();
        this.inverseRotation = gl_matrix_1.quat.create();
        /**
         * World -> View.
         */
        this.viewMatrix = gl_matrix_1.mat4.create();
        /**
         * View -> Clip.
         */
        this.projectionMatrix = gl_matrix_1.mat4.create();
        /**
         * World -> Clip.
         */
        this.viewProjectionMatrix = gl_matrix_1.mat4.create();
        /**
         * View -> World.
         */
        this.inverseViewMatrix = gl_matrix_1.mat4.create();
        /**
         * Clip -> World.
         */
        this.inverseViewProjectionMatrix = gl_matrix_1.mat4.create();
        /**
         * The X axis in camera space.
         */
        this.directionX = gl_matrix_1.vec3.create();
        /**
         * The Y axis in camera space.
         */
        this.directionY = gl_matrix_1.vec3.create();
        /**
         * The Z axis in camera space.
         */
        this.directionZ = gl_matrix_1.vec3.create();
        /**
         * The four corners of a 2x2 rectangle.
         */
        this.vectors = [gl_matrix_1.vec3.fromValues(-1, -1, 0), gl_matrix_1.vec3.fromValues(-1, 1, 0), gl_matrix_1.vec3.fromValues(1, 1, 0), gl_matrix_1.vec3.fromValues(1, -1, 0)];
        /**
         * Same as vectors, however these are all billboarded to the camera.
         */
        this.billboardedVectors = [gl_matrix_1.vec3.create(), gl_matrix_1.vec3.create(), gl_matrix_1.vec3.create(), gl_matrix_1.vec3.create()];
        /**
         * The camera frustum planes in this order: left, right, top, bottom, near, far.
         */
        this.planes = [gl_matrix_1.vec4.create(), gl_matrix_1.vec4.create(), gl_matrix_1.vec4.create(), gl_matrix_1.vec4.create(), gl_matrix_1.vec4.create(), gl_matrix_1.vec4.create()];
        this.dirty = true;
    }
    /**
     * Set the camera to perspective projection mode.
     */
    perspective(fov, aspect, near, far) {
        this.isPerspective = true;
        this.isOrtho = false;
        this.fov = fov;
        this.aspect = aspect;
        this.nearClipPlane = near;
        this.farClipPlane = far;
        this.dirty = true;
    }
    /**
     * Set the camera to orthogonal projection mode.
     */
    ortho(left, right, bottom, top, near, far) {
        this.isPerspective = false;
        this.isOrtho = true;
        this.leftClipPlane = left;
        this.rightClipPlane = right;
        this.bottomClipPlane = bottom;
        this.topClipPlane = top;
        this.nearClipPlane = near;
        this.farClipPlane = far;
        this.dirty = true;
    }
    /**
     * Set the camera location in world coordinates.
     */
    setLocation(location) {
        gl_matrix_1.vec3.copy(this.location, location);
        this.dirty = true;
    }
    /**
     * Move the camera by the given offset in world coordinates.
     */
    move(offset) {
        gl_matrix_1.vec3.add(this.location, this.location, offset);
        this.dirty = true;
    }
    /**
     * Set the camera rotation.
     */
    setRotation(rotation) {
        gl_matrix_1.quat.copy(this.rotation, rotation);
        this.dirty = true;
    }
    /**
     * Rotate the camera by the given rotation.
     */
    rotate(rotation) {
        gl_matrix_1.quat.mul(this.rotation, this.rotation, rotation);
        this.dirty = true;
    }
    /**
     * Look at `to`.
     */
    face(to, worldUp) {
        gl_matrix_1.quat.mul(this.rotation, facingCorrection, gl_matrix_addon_1.quatLookAt(quatHeap, to, this.location, worldUp));
        this.dirty = true;
    }
    /**
     * Move to `from` and look at `to`.
     */
    moveToAndFace(from, to, worldUp) {
        gl_matrix_1.vec3.copy(this.location, from);
        this.face(to, worldUp);
    }
    /**
     * Reset the location and angles.
     */
    reset() {
        gl_matrix_1.vec3.set(this.location, 0, 0, 0);
        gl_matrix_1.quat.identity(this.rotation);
        this.dirty = true;
    }
    /**
     * Recalculate the camera's transformation.
     */
    update() {
        if (this.dirty) {
            let location = this.location;
            let rotation = this.rotation;
            let inverseRotation = this.inverseRotation;
            let viewMatrix = this.viewMatrix;
            let projectionMatrix = this.projectionMatrix;
            let viewProjectionMatrix = this.viewProjectionMatrix;
            let vectors = this.vectors;
            let billboardedVectors = this.billboardedVectors;
            // View -> Clip.
            if (this.isPerspective) {
                gl_matrix_1.mat4.perspective(projectionMatrix, this.fov, this.aspect, this.nearClipPlane, this.farClipPlane);
            }
            else {
                gl_matrix_1.mat4.ortho(projectionMatrix, this.leftClipPlane, this.rightClipPlane, this.bottomClipPlane, this.topClipPlane, this.nearClipPlane, this.farClipPlane);
            }
            // World -> View.
            gl_matrix_1.mat4.fromQuat(viewMatrix, rotation);
            gl_matrix_1.mat4.translate(viewMatrix, viewMatrix, gl_matrix_1.vec3.negate(vectorHeap, location));
            // World -> Clip.
            gl_matrix_1.mat4.mul(viewProjectionMatrix, projectionMatrix, viewMatrix);
            // View -> World.
            gl_matrix_1.mat4.invert(this.inverseViewMatrix, viewMatrix);
            // Clip -> World.
            gl_matrix_1.mat4.invert(this.inverseViewProjectionMatrix, viewProjectionMatrix);
            // Recaculate the camera's frusum planes
            gl_matrix_addon_1.unpackPlanes(this.planes, viewProjectionMatrix);
            gl_matrix_1.quat.conjugate(inverseRotation, rotation);
            // View-space axes.
            gl_matrix_1.vec3.transformQuat(this.directionX, gl_matrix_addon_1.VEC3_UNIT_X, inverseRotation);
            gl_matrix_1.vec3.transformQuat(this.directionY, gl_matrix_addon_1.VEC3_UNIT_Y, inverseRotation);
            gl_matrix_1.vec3.transformQuat(this.directionZ, gl_matrix_addon_1.VEC3_UNIT_Z, inverseRotation);
            // View-space rectangle, aka billboarded.
            for (let i = 0; i < 4; i++) {
                gl_matrix_1.vec3.transformQuat(billboardedVectors[i], vectors[i], inverseRotation);
            }
            this.dirty = false;
        }
    }
    /**
     * Given a vector in camera space, return the vector transformed to world space.
     */
    cameraToWorld(out, v) {
        return gl_matrix_1.vec3.transformMat4(out, v, this.inverseViewMatrix);
    }
    /**
     * Given a vector in world space, return the vector transformed to camera space.
     */
    worldToCamera(out, v) {
        return gl_matrix_1.vec3.transformMat4(out, v, this.viewMatrix);
    }
    /**
     * Given a vector in world space, return the vector transformed to screen space.
     */
    worldToScreen(out, v, viewport) {
        gl_matrix_1.vec3.transformMat4(vectorHeap, v, this.viewProjectionMatrix);
        out[0] = Math.round(((vectorHeap[0] + 1) / 2) * viewport[2]);
        out[1] = Math.round(((vectorHeap[1] + 1) / 2) * viewport[3]);
        return out;
    }
    /**
     * Given a vector in screen space, return a ray from the near plane to the far plane.
     */
    screenToWorldRay(out, v, viewport) {
        let a = vectorHeap;
        let b = vectorHeap2;
        let c = vectorHeap3;
        let x = v[0];
        let y = v[1];
        let inverseViewProjectionMatrix = this.inverseViewProjectionMatrix;
        // Intersection on the near-plane
        gl_matrix_addon_1.unproject(a, gl_matrix_1.vec3.set(c, x, y, 0), inverseViewProjectionMatrix, viewport);
        // Intersection on the far-plane
        gl_matrix_addon_1.unproject(b, gl_matrix_1.vec3.set(c, x, y, 1), inverseViewProjectionMatrix, viewport);
        out.set(a, 0);
        out.set(b, 3);
        return out;
    }
}
exports.default = Camera;
