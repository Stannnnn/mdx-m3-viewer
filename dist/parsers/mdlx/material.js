"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const layer_1 = require("./layer");
/**
 * A material.
 */
class Material {
    constructor() {
        this.priorityPlane = 0;
        this.flags = 0;
        /**
         * @since 900
         */
        this.shader = '';
        this.layers = [];
    }
    readMdx(stream, version) {
        stream.readUint32(); // Don't care about the size.
        this.priorityPlane = stream.readInt32();
        this.flags = stream.readUint32();
        if (version > 800) {
            this.shader = stream.read(80);
        }
        stream.skip(4); // LAYS
        for (let i = 0, l = stream.readUint32(); i < l; i++) {
            let layer = new layer_1.default();
            layer.readMdx(stream, version);
            this.layers.push(layer);
        }
    }
    writeMdx(stream, version) {
        stream.writeUint32(this.getByteLength(version));
        stream.writeInt32(this.priorityPlane);
        stream.writeUint32(this.flags);
        if (version > 800) {
            stream.skip(80 - stream.write(this.shader));
        }
        stream.writeBinary('LAYS');
        stream.writeUint32(this.layers.length);
        for (let layer of this.layers) {
            layer.writeMdx(stream, version);
        }
    }
    readMdl(stream) {
        for (let token of stream.readBlock()) {
            if (token === 'ConstantColor') {
                this.flags |= 0x1;
            }
            else if (token === 'TwoSided') {
                this.flags |= 0x2;
            }
            else if (token === 'SortPrimsNearZ') {
                this.flags |= 0x8;
            }
            else if (token === 'SortPrimsFarZ') {
                this.flags |= 0x10;
            }
            else if (token === 'FullResolution') {
                this.flags |= 0x20;
            }
            else if (token === 'PriorityPlane') {
                this.priorityPlane = stream.readInt();
            }
            else if (token === 'Shader') {
                this.shader = stream.read();
            }
            else if (token === 'Layer') {
                let layer = new layer_1.default();
                layer.readMdl(stream);
                this.layers.push(layer);
            }
            else {
                throw new Error(`Unknown token in Material: "${token}"`);
            }
        }
    }
    writeMdl(stream, version) {
        stream.startBlock('Material');
        if (this.flags & 0x1) {
            stream.writeFlag('ConstantColor');
        }
        if (version > 800) {
            if (this.flags & 0x2) {
                stream.writeFlag('TwoSided');
            }
        }
        if (this.flags & 0x8) {
            stream.writeFlag('SortPrimsNearZ');
        }
        if (this.flags & 0x10) {
            stream.writeFlag('SortPrimsFarZ');
        }
        if (this.flags & 0x20) {
            stream.writeFlag('FullResolution');
        }
        if (this.priorityPlane !== 0) {
            stream.writeNumberAttrib('PriorityPlane', this.priorityPlane);
        }
        if (version > 800) {
            stream.writeStringAttrib('Shader', this.shader);
        }
        for (let layer of this.layers) {
            layer.writeMdl(stream, version);
        }
        stream.endBlock();
    }
    getByteLength(version) {
        let size = 20;
        if (version > 800) {
            size += 80;
        }
        for (let layer of this.layers) {
            size += layer.getByteLength(version);
        }
        return size;
    }
}
exports.default = Material;
