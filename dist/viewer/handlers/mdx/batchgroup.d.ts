import MdxModel from './model';
import MdxModelInstance from './modelinstance';
/**
 * A group of batches that are going to be rendered together.
 */
export default class BatchGroup {
    model: MdxModel;
    isExtended: boolean;
    isHd: boolean;
    objects: number[];
    constructor(model: MdxModel, isExtended: boolean, isHd: boolean);
    render(instance: MdxModelInstance): void;
}
