import { EventEmitter } from 'events';
import { FetchDataTypeName, FetchDataType } from '../common/fetchdatatype';
import WebGL from './gl/gl';
import Scene from './scene';
import { Resource } from './resource';
import { PathSolver, HandlerResourceData, HandlerResource } from './handlerresource';
import GenericResource from './genericresource';
import ClientBuffer from './gl/clientbuffer';
/**
 * A viewer handler.
 */
export interface Handler {
    load?: (viewer: ModelViewer, ...args: any[]) => void;
    isValidSource: (src: any) => boolean;
    resource: new (src: any, resourceData: HandlerResourceData) => HandlerResource;
}
/**
 * A model viewer.
 */
export default class ModelViewer extends EventEmitter {
    /**
     * The viewer's canvas.
     */
    canvas: HTMLCanvasElement;
    /**
     * The viewer's WebGL context.
     */
    gl: WebGLRenderingContext;
    /**
     * A wrapper around the viewer's WebGL context with utility functions.
     */
    webgl: WebGL;
    /**
     * All of the loaded resources.
     */
    resources: Resource[];
    /**
     * A map from urls to their resources.
     *
     * Only used by fetched resources.
     */
    resourceMap: Map<string, Resource>;
    /**
     * A map from urls to the promises that load them.
     *
     * Only used by fetched resources.
     */
    promiseMap: Map<string, Promise<Resource | undefined>>;
    /**
     * The viewer's handlers, added with `addHandler()`.
     */
    handlers: Set<Handler>;
    /**
     * The viewer's scenes, added with `addScene()`.
     */
    scenes: Scene[];
    /**
     * The number of animation frames advanced on every viewer update.
     */
    frameTime: number;
    /**
     * The current frame.
     */
    frame: number;
    /**
     * The number of visible cells on the current frame.
     */
    visibleCells: number;
    /**
     * The number of visible instances on the current frame.
     */
    visibleInstances: number;
    /**
     * The number of particles being updated on the current frame.
     */
    updatedParticles: number;
    /**
     * A viewer-wide flag.
     *
     * If it is false, not only will audio not run, but in fact audio files won't even be fetched in the first place.
     *
     * If audio is desired, this should be set to true before loading models that use audio.
     *
     * Note that it is preferable to call enableAudio(), which checks for the existence of AudioContext.
     */
    audioEnabled: boolean;
    /**
     * A resizeable buffer that can be used by any part of the library.
     *
     * The data it contains is temporary, and can be overwritten at any time.
     */
    buffer: ClientBuffer;
    /**
     * A cache of arbitrary data, shared between all of the handlers.
     */
    sharedCache: Map<any, any>;
    directLoadId: number;
    constructor(canvas: HTMLCanvasElement, options?: object);
    /**
     * Enable audio if AudioContext is available.
     */
    enableAudio(): boolean;
    /**
     * Add an handler.
     */
    addHandler(handler: Handler, ...args: any[]): boolean;
    /**
     * Add a scene.
     */
    addScene(): Scene;
    /**
     * Remove a scene.
     */
    removeScene(scene: Scene): boolean;
    /**
     * Removes all of the scenes in the viewer.
     */
    clear(): void;
    /**
     * Given a source and an optional path solver, loads a resource and returns a promise to it.
     */
    load(src: any, pathSolver?: PathSolver, solverParams?: any): Promise<Resource | undefined>;
    detectFormat(src: any): Handler | undefined;
    /**
     * Check whether the given string maps to a resource in the cache.
     */
    has(key: string): boolean;
    /**
     * Get a resource from the cache.
     */
    get(key: string): Resource | undefined;
    /**
     * Load something generic.
     *
     * Unlike load(), this does not use handlers or construct any internal objects.
     *
     * `dataType` can be one of: `"image"`, `"string"`, `"arrayBuffer"`, `"bytes"`, `"blob"`.
     *
     * If `callback` isn't given, the resource's `data` is the fetch data, according to `dataType`.
     *
     * If `callback` is given, the resource's `data` is the value returned by it when called with the fetch data.
     *
     * If `callback` returns a promise, the resource's `data` will be whatever the promise resolved to.
     */
    loadGeneric(fetchUrl: string, dataType: FetchDataTypeName, callback?: (data: FetchDataType) => any): Promise<GenericResource | undefined>;
    /**
     * Unload a resource.
     * Note that this only removes the resource from the viewer's cache.
     * If it's being referenced and used e.g. by a scene, it will not be garbage collected.
     */
    unload(resource: Resource): boolean;
    /**
     * Starts loading a new empty resource, and returns it.
     * This empty resource will block the "idle" event (and thus whenAllLoaded) until it's resolved.
     * This is used when a resource might get loaded in the future, but it is not known what it is yet.
     */
    promise(): () => void;
    checkLoadingStatus(): void;
    /**
     * Wait for all of the resources to load.
     *
     * If a callback is given, it will be called, otherwise, a promise is returned.
     */
    whenAllLoaded(callback?: (viewer: ModelViewer) => void): Promise<ModelViewer> | undefined;
    /**
     * Get a blob representing the contents of the viewer's canvas.
     *
     * If a callback is given, it will be called, otherwise, a promise is returned.
     */
    toBlob(callback?: BlobCallback): Promise<Blob | null> | undefined;
    /**
     * Update and render a frame.
     */
    updateAndRender(): void;
    /**
     * Update all of the scenes, which includes updating their cameras, audio context if one exists, and all of the instances they hold.
     */
    update(): void;
    /**
     * Clears the WebGL buffer.
     *
     * Called automatically by updateAndRender().
     *
     * Call this at some point before render() if you need more control.
     */
    startFrame(): void;
    /**
     * Render.
     */
    render(): void;
    /**
     * Clear all of the emitted objects in this viewer.
     */
    clearEmittedObjects(): void;
}
