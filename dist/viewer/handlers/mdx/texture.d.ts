import Texture from '../../texture';
/**
 * An MDX texture.
 */
export default class MdxTexture {
    texture: Texture | null;
    replaceableId: number;
    wrapS: number;
    wrapT: number;
    constructor(replaceableId: number, repeatS: boolean, repeatT: boolean);
}
