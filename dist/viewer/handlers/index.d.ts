import War3MapViewer from './w3x/viewer';
declare const _default: {
    blp: {
        isValidSource(object: any): boolean;
        resource: typeof import("./blp/texture").default;
    };
    dds: {
        load(viewer: import("../viewer").default): void;
        isValidSource(object: any): boolean;
        resource: typeof import("./dds/texture").default;
    };
    m3: {
        load(viewer: import("../viewer").default): void;
        isValidSource(object: any): boolean;
        resource: typeof import("./m3/model").default;
    };
    mdx: {
        load(viewer: import("../viewer").default, pathSolver?: import("../handlerresource").PathSolver | undefined, reforgedTeams?: boolean | undefined): void;
        isValidSource(object: any): boolean;
        resource: typeof import("./mdx/model").default;
    };
    tga: {
        isValidSource(object: any): boolean;
        resource: typeof import("./tga/texture").default;
    };
    War3MapViewer: typeof War3MapViewer;
};
export default _default;
