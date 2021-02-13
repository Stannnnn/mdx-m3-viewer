import ModelViewer from './viewer';
import Scene from './scene';
import Camera from './camera';
import Model from './model';
import ModelInstance from './modelinstance';
import Texture from './texture';
import GenericResource from './genericresource';
declare const _default: {
    ModelViewer: typeof ModelViewer;
    Scene: typeof Scene;
    Camera: typeof Camera;
    Model: typeof Model;
    ModelInstance: typeof ModelInstance;
    Texture: typeof Texture;
    GenericResource: typeof GenericResource;
    handlers: {
        blp: {
            isValidSource(object: any): boolean;
            resource: typeof import("./handlers/blp/texture").default;
        };
        dds: {
            load(viewer: ModelViewer): void;
            isValidSource(object: any): boolean;
            resource: typeof import("./handlers/dds/texture").default;
        };
        m3: {
            load(viewer: ModelViewer): void;
            isValidSource(object: any): boolean;
            resource: typeof import("./handlers/m3/model").default;
        };
        mdx: {
            load(viewer: ModelViewer, pathSolver?: import("./handlerresource").PathSolver | undefined, reforgedTeams?: boolean | undefined): void;
            isValidSource(object: any): boolean;
            resource: typeof import("./handlers/mdx/model").default;
        };
        tga: {
            isValidSource(object: any): boolean;
            resource: typeof import("./handlers/tga/texture").default;
        };
        War3MapViewer: typeof import("./handlers/w3x/viewer").default;
    };
};
export default _default;
