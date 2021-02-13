import { quat } from 'gl-matrix';
import { SkeletalNode } from '../../node';
/**
 * An MDX node.
 */
export default class MdxNode extends SkeletalNode {
    convertBasis(rotation: quat): void;
}
