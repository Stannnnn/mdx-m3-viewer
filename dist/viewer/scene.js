"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gl_matrix_1 = require("gl-matrix");
const camera_1 = require("./camera");
const grid_1 = require("./grid");
const emittedobjectupdater_1 = require("./emittedobjectupdater");
/**
 * A scene.
 *
 * Every scene has its own list of model instances, and its own camera and viewport.
 *
 * In addition, every scene may have its own AudioContext if enableAudio() is called.
 * If audio is enabled, the AudioContext's listener's location will be updated automatically.
 * Note that due to browser policies, this may be done only after user interaction with the web page.
 */
class Scene {
    constructor(viewer) {
        this.camera = new camera_1.default();
        this.grid = new grid_1.default(-100000, -100000, 200000, 200000, 200000, 200000);
        this.visibleCells = 0;
        this.visibleInstances = 0;
        this.updatedParticles = 0;
        this.audioEnabled = false;
        this.audioContext = null;
        this.instances = [];
        this.emittedObjectUpdater = new emittedobjectupdater_1.default();
        /**
         * Similar to WebGL's own `alpha` parameter.
         *
         * If false, the scene will be cleared before rendering, meaning that scenes behind it won't be visible through it.
         *
         * If true, alpha works as usual.
         */
        this.alpha = false;
        /**
         * The scene's background color.
         *
         * Only used if `alpha` is false.
         */
        this.color = gl_matrix_1.vec3.create();
        /**
         * The area on the canvas in which this scene is rendered.
         *
         * Defaults to the entire canvas.
         *
         * The vector defines [x, y, width, height], sizes are in pixels, and everything is related to the bottom left corner of the canvas.
         */
        this.viewport = gl_matrix_1.vec4.create();
        this.viewer = viewer;
        let canvas = viewer.canvas;
        let width = canvas.width;
        let height = canvas.height;
        // Use the whole canvas by default.
        this.viewport[2] = width;
        this.viewport[3] = height;
        // And standard perspective projection.
        this.camera.perspective(Math.PI / 4, width / height, 8, 10000);
    }
    /**
     * Creates an AudioContext if one wasn't created already, and resumes it if needed.
     *
     * The returned promise will resolve to whether it is actually running or not.
     *
     * It may stay in suspended state indefinitly until the user interacts with the page, due to browser policies.
     */
    async enableAudio() {
        if (typeof AudioContext === 'function') {
            if (!this.audioContext) {
                this.audioContext = new AudioContext();
            }
            if (this.audioContext.state !== 'suspended') {
                await this.audioContext.resume();
            }
            this.audioEnabled = this.audioContext.state === 'running';
            return this.audioEnabled;
        }
        return false;
    }
    /**
     * Suspend the audio context.
     */
    disableAudio() {
        if (this.audioContext) {
            this.audioContext.suspend();
        }
        this.audioEnabled = false;
    }
    /**
     * Sets the scene of the given instance.
     *
     * Equivalent to instance.setScene(scene).
     */
    addInstance(instance) {
        if (instance.scene !== this) {
            if (instance.scene) {
                instance.scene.removeInstance(instance);
            }
            instance.scene = this;
            this.grid.moved(instance);
            return true;
        }
        return false;
    }
    /**
     * Remove the given instance from this scene.
     *
     * Equivalent to ModelInstance.detach().
     */
    removeInstance(instance) {
        if (instance.scene === this) {
            this.grid.remove(instance);
            instance.scene = null;
            return true;
        }
        return false;
    }
    /**
     * Clear this scene.
     */
    clear() {
        // First remove references to this scene stored in the instances.
        for (let cell of this.grid.cells) {
            for (let instance of cell.instances) {
                instance.scene = null;
            }
        }
        // Then remove references to the instances.
        this.grid.clear();
    }
    /**
     * Detach this scene from the viewer.
     *
     * Equivalent to viewer.removeScene(scene).
     */
    detach() {
        if (this.viewer) {
            return this.viewer.removeScene(this);
        }
        return false;
    }
    /**
     * Update this scene.
     */
    update(dt) {
        let camera = this.camera;
        // Update the camera.
        camera.update();
        // Update the audio context's position if it exists.
        if (this.audioContext) {
            let listener = this.audioContext.listener;
            let position = camera.location;
            let forward = camera.directionY;
            let up = camera.directionZ;
            listener.positionX.value = -position[0];
            listener.positionY.value = -position[1];
            listener.positionZ.value = -position[2];
            listener.forwardX.value = forward[0];
            listener.forwardY.value = forward[1];
            listener.forwardZ.value = forward[2];
            listener.upX.value = up[0];
            listener.upY.value = up[1];
            listener.upZ.value = up[2];
        }
        let frame = this.viewer.frame;
        let instances = this.instances;
        this.visibleCells = 0;
        this.visibleInstances = 0;
        // Update and collect all of the visible instances.
        for (let cell of this.grid.cells) {
            if (cell.isVisible(camera)) {
                this.visibleCells += 1;
                for (let instance of cell.instances) {
                    if (instance.rendered && instance.cullFrame < frame && instance.isVisible(camera)) {
                        instance.cullFrame = frame;
                        if (instance.updateFrame < frame) {
                            instance.update(dt, this);
                        }
                        instances[this.visibleInstances++] = instance;
                    }
                }
            }
        }
        // Sort the visible instances based on depth.
        instances.length = this.visibleInstances;
        instances.sort((a, b) => b.depth - a.depth);
        this.emittedObjectUpdater.update(dt);
        this.updatedParticles = this.emittedObjectUpdater.alive;
    }
    /**
     * Use the scene's viewport.
     *
     * Should be called before `renderOpaque()` and `renderTranslucent()`.
     *
     * Called automatically by `render()`.
     */
    startFrame() {
        let gl = this.viewer.gl;
        let viewport = this.viewport;
        // Set the viewport.
        gl.viewport(viewport[0], viewport[1], viewport[2], viewport[3]);
        // Allow to render only in the viewport.
        gl.scissor(viewport[0], viewport[1], viewport[2], viewport[3]);
        // If this scene doesn't want alpha, clear it.
        if (!this.alpha) {
            let color = this.color;
            gl.depthMask(true);
            gl.clearColor(color[0], color[1], color[2], 1);
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        }
    }
    /**
     * Render all opaque things in this scene.
     */
    renderOpaque() {
        // Render all of the opaque things of non-batched instances.
        for (let instance of this.instances) {
            instance.renderOpaque();
        }
    }
    /**
     * Renders all translucent things in this scene.
     */
    renderTranslucent() {
        for (let instance of this.instances) {
            instance.renderTranslucent();
        }
    }
    /**
     * Render this scene.
     */
    render() {
        this.startFrame();
        this.renderOpaque();
        this.renderTranslucent();
    }
    /**
     * Clear all of the emitted objects in this scene.
     */
    clearEmittedObjects() {
        for (let object of this.emittedObjectUpdater.objects) {
            object.health = 0;
        }
    }
}
exports.default = Scene;
