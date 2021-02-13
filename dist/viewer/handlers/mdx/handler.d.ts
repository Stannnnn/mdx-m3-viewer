import ModelViewer from '../../viewer';
import { PathSolver } from '../../handlerresource';
import Model from './model';
declare const _default: {
    load(viewer: ModelViewer, pathSolver?: PathSolver | undefined, reforgedTeams?: boolean | undefined): void;
    isValidSource(object: any): boolean;
    resource: typeof Model;
};
export default _default;
