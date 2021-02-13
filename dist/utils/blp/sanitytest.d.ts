import { BlpImage } from '../../parsers/blp/image';
/**
 * Tests for issues in BLP textures.
 */
export default function sanityTest(texture: BlpImage): {
    warnings: number;
    nodes: {
        type: string;
        message: string;
    }[];
};
