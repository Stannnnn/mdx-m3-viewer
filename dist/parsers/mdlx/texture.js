"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A texture.
 */
class Texture {
    constructor() {
        this.replaceableId = 0;
        this.path = '';
        this.flags = 0;
    }
    readMdx(stream) {
        this.replaceableId = stream.readUint32();
        this.path = stream.read(260);
        this.flags = stream.readUint32();
    }
    writeMdx(stream) {
        stream.writeUint32(this.replaceableId);
        stream.skip(260 - stream.write(this.path));
        stream.writeUint32(this.flags);
    }
    readMdl(stream) {
        for (let token of stream.readBlock()) {
            if (token === 'Image') {
                this.path = stream.read();
            }
            else if (token === 'ReplaceableId') {
                this.replaceableId = stream.readInt();
            }
            else if (token === 'WrapWidth') {
                this.flags |= 0x1;
            }
            else if (token === 'WrapHeight') {
                this.flags |= 0x2;
            }
            else {
                throw new Error(`Unknown token in Texture: "${token}"`);
            }
        }
    }
    writeMdl(stream) {
        stream.startBlock('Bitmap');
        if (this.path.length) {
            stream.writeStringAttrib('Image', this.path);
        }
        if (this.replaceableId !== 0) {
            stream.writeNumberAttrib('ReplaceableId', this.replaceableId);
        }
        if (this.flags & 0x1) {
            stream.writeFlag(`WrapWidth`);
        }
        if (this.flags & 0x2) {
            stream.writeFlag(`WrapHeight`);
        }
        stream.endBlock();
    }
}
exports.default = Texture;