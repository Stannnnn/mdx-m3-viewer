import { Node } from './node';
import Model from './model';
import Scene from './scene';
import Camera from './camera';
import Texture from './texture';
/**
 * A model instance.
 */
export default abstract class ModelInstance extends Node {
    scene: Scene | null;
    left: number;
    right: number;
    bottom: number;
    top: number;
    plane: number;
    depth: number;
    updateFrame: number;
    cullFrame: number;
    model: Model;
    /**
     * If true, this instance won't be updated.
     */
    paused: boolean;
    /**
     * If false, this instance won't be rendered.
     *
     * When working with Warcraft 3 instances, it is preferable to use hide() and show().
     * These hide and show also internal instances of this instance.
     */
    rendered: boolean;
    textureOverrides: Map<number, Texture>;
    constructor(model: Model);
    /**
     * This instance should be shown.
     */
    show(): void;
    /**
     * This instance should be hidden.
     */
    hide(): void;
    /**
     * Should the instance be shown?
     */
    shown(): boolean;
    /**
     * Should the instance be hidden?
     */
    hidden(): boolean;
    /**
     * Detach this instance from the scene it's in.
     *
     * Equivalent to scene.removeInstance(instance).
     */
    detach(): boolean;
    overrideTexture(index: number, texture?: Texture): void;
    /**
     * Called if the instance is shown and not culled.
     */
    updateAnimations(dt: number): void;
    /**
     * Clears any objects that were emitted by this instance.
     */
    clearEmittedObjects(): void;
    /**
     * Update this model instance.
     *
     * Called automatically by the scene that owns this model instance.
     */
    updateObject(dt: number, scene: Scene): void;
    /**
     * Sets the scene of this instance.
     *
     * This is equivalent to scene.addInstance(instance).
     */
    setScene(scene: Scene): boolean;
    recalculateTransformation(): void;
    renderOpaque(): void;
    renderTranslucent(): void;
    isVisible(camera: Camera): boolean;
}
