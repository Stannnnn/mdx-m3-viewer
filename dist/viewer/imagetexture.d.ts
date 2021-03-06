import Texture from './texture';
import { HandlerResourceData } from './handlerresource';
/**
 * Checks if the given source is a supported image texture source.
 */
export declare function isImageSource(src: any): boolean;
/**
 * Detects whether the given buffer is a supported format, and if so returns the mime.
 * The supported formats are PNG, JPEG, GIF, and WebP.
 */
export declare function detectMime(buffer: Uint8Array): "" | "image/png" | "image/jpeg" | "image/gif" | "image/webp";
/**
 * A texture handler for image sources.
 */
export declare class ImageTexture extends Texture {
    constructor(src: TexImageSource, resourceData: HandlerResourceData);
}
