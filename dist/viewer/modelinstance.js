"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gl_matrix_addon_1 = require("../common/gl-matrix-addon");
const node_1 = require("./node");
/**
 * A model instance.
 */
class ModelInstance extends node_1.Node {
    constructor(model) {
        super();
        this.scene = null;
        this.left = -1;
        this.right = -1;
        this.bottom = -1;
        this.top = -1;
        this.plane = -1;
        this.depth = 0;
        this.updateFrame = 0;
        this.cullFrame = 0;
        /**
         * If true, this instance won't be updated.
         */
        this.paused = false;
        /**
         * If false, this instance won't be rendered.
         *
         * When working with Warcraft 3 instances, it is preferable to use hide() and show().
         * These hide and show also internal instances of this instance.
         */
        this.rendered = true;
        this.textureOverrides = new Map();
        this.model = model;
    }
    /**
     * This instance should be shown.
     */
    show() {
        this.rendered = true;
    }
    /**
     * This instance should be hidden.
     */
    hide() {
        this.rendered = false;
    }
    /**
     * Should the instance be shown?
     */
    shown() {
        return this.rendered;
    }
    /**
     * Should the instance be hidden?
     */
    hidden() {
        return !this.rendered;
    }
    /**
     * Detach this instance from the scene it's in.
     *
     * Equivalent to scene.removeInstance(instance).
     */
    detach() {
        if (this.scene) {
            return this.scene.removeInstance(this);
        }
        return false;
    }
    overrideTexture(index, texture) {
        if (texture) {
            this.textureOverrides.set(index, texture);
        }
        else {
            this.textureOverrides.delete(index);
        }
    }
    /**
     * Called if the instance is shown and not culled.
     */
    updateAnimations(dt) {
    }
    /**
     * Clears any objects that were emitted by this instance.
     */
    clearEmittedObjects() {
    }
    /**
     * Update this model instance.
     *
     * Called automatically by the scene that owns this model instance.
     */
    updateObject(dt, scene) {
        if (this.updateFrame < this.model.viewer.frame) {
            if (this.rendered && !this.paused) {
                this.updateAnimations(dt);
            }
            this.updateFrame = this.model.viewer.frame;
        }
    }
    /**
     * Sets the scene of this instance.
     *
     * This is equivalent to scene.addInstance(instance).
     */
    setScene(scene) {
        return scene.addInstance(this);
    }
    recalculateTransformation() {
        super.recalculateTransformation();
        if (this.scene) {
            this.scene.grid.moved(this);
        }
    }
    renderOpaque() {
    }
    renderTranslucent() {
    }
    isVisible(camera) {
        let [x, y, z] = this.worldLocation;
        let [sx, sy, sz] = this.worldScale;
        let bounds = this.model.bounds;
        let planes = camera.planes;
        // Get the biggest scaling dimension.
        if (sy > sx) {
            sx = sy;
        }
        if (sz > sx) {
            sx = sz;
        }
        this.plane = gl_matrix_addon_1.testSphere(planes, x + bounds.x, y + bounds.y, z, bounds.r * sx, this.plane);
        if (this.plane === -1) {
            this.depth = gl_matrix_addon_1.distanceToPlane3(planes[4], x, y, z);
            return true;
        }
        return false;
    }
}
exports.default = ModelInstance;
