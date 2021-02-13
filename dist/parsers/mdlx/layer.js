"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animatedobject_1 = require("./animatedobject");
const filterModeToMdx = {
    None: 0,
    Transparent: 1,
    Blend: 2,
    Additive: 3,
    AddAlpha: 4,
    Modulate: 5,
    Modulate2x: 6,
};
const filterModeToMdl = {
    0: 'None',
    1: 'Transparent',
    2: 'Blend',
    3: 'Additive',
    4: 'AddAlpha',
    5: 'Modulate',
    6: 'Modulate2x',
};
/**
 * A layer.
 */
class Layer extends animatedobject_1.default {
    constructor() {
        super(...arguments);
        this.filterMode = 0;
        this.flags = 0;
        this.textureId = -1;
        this.textureAnimationId = -1;
        this.coordId = 0;
        this.alpha = 1;
        /**
         * @since 900
         */
        this.emissiveGain = 1;
        /**
         * @since 1000
         */
        this.fresnelColor = new Float32Array([1, 1, 1]);
        /**
         * @since 1000
         */
        this.fresnelOpacity = 0;
        /**
         * @since 1000
         */
        this.fresnelTeamColor = 0;
    }
    readMdx(stream, version) {
        const start = stream.index;
        const size = stream.readUint32();
        this.filterMode = stream.readUint32();
        this.flags = stream.readUint32();
        this.textureId = stream.readInt32();
        this.textureAnimationId = stream.readInt32();
        this.coordId = stream.readUint32();
        this.alpha = stream.readFloat32();
        // Note that even though these fields were introduced in versions 900 and 1000 separately, the game does not offer backwards compatibility.
        if (version > 800) {
            this.emissiveGain = stream.readFloat32();
            stream.readFloat32Array(this.fresnelColor);
            this.fresnelOpacity = stream.readFloat32();
            this.fresnelTeamColor = stream.readFloat32();
        }
        this.readAnimations(stream, size - (stream.index - start));
    }
    writeMdx(stream, version) {
        stream.writeUint32(this.getByteLength(version));
        stream.writeUint32(this.filterMode);
        stream.writeUint32(this.flags);
        stream.writeInt32(this.textureId);
        stream.writeInt32(this.textureAnimationId);
        stream.writeUint32(this.coordId);
        stream.writeFloat32(this.alpha);
        // See note above in readMdx.
        if (version > 800) {
            stream.writeFloat32(this.emissiveGain);
            stream.writeFloat32Array(this.fresnelColor);
            stream.writeFloat32(this.fresnelOpacity);
            stream.writeFloat32(this.fresnelTeamColor);
        }
        this.writeAnimations(stream);
    }
    readMdl(stream) {
        for (let token of super.readAnimatedBlock(stream)) {
            if (token === 'FilterMode') {
                this.filterMode = filterModeToMdx[stream.read()];
            }
            else if (token === 'Unshaded') {
                this.flags |= 0x1;
            }
            else if (token === 'SphereEnvMap') {
                this.flags |= 0x2;
            }
            else if (token === 'TwoSided') {
                this.flags |= 0x10;
            }
            else if (token === 'Unfogged') {
                this.flags |= 0x20;
            }
            else if (token === 'NoDepthTest') {
                this.flags |= 0x40;
            }
            else if (token === 'NoDepthSet') {
                this.flags |= 0x80;
            }
            else if (token === 'Unlit') {
                this.flags |= 0x100;
            }
            else if (token === 'static TextureID') {
                this.textureId = stream.readInt();
            }
            else if (token === 'TextureID') {
                this.readAnimation(stream, 'KMTF');
            }
            else if (token === 'TVertexAnimId') {
                this.textureAnimationId = stream.readInt();
            }
            else if (token === 'CoordId') {
                this.coordId = stream.readInt();
            }
            else if (token === 'static Alpha') {
                this.alpha = stream.readFloat();
            }
            else if (token === 'Alpha') {
                this.readAnimation(stream, 'KMTA');
            }
            else if (token === 'static EmissiveGain') {
                this.emissiveGain = stream.readFloat();
            }
            else if (token === 'EmissiveGain') {
                this.readAnimation(stream, 'KMTE');
            }
            else if (token === 'static FresnelColor') {
                stream.readVector(this.fresnelColor);
            }
            else if (token === 'FresnelColor') {
                this.readAnimation(stream, 'KFC3');
            }
            else if (token === 'static FresnelOpacity') {
                this.fresnelOpacity = stream.readFloat();
            }
            else if (token === 'FresnelOpacity') {
                this.readAnimation(stream, 'KFCA');
            }
            else if (token === 'static FresnelTeamColor') {
                this.fresnelTeamColor = stream.readFloat();
            }
            else if (token === 'FresnelTeamColor') {
                this.readAnimation(stream, 'KFTC');
            }
            else {
                throw new Error(`Unknown token in Layer: "${token}"`);
            }
        }
    }
    writeMdl(stream, version) {
        stream.startBlock('Layer');
        stream.writeFlagAttrib('FilterMode', filterModeToMdl[this.filterMode]);
        if (this.flags & 0x1) {
            stream.writeFlag('Unshaded');
        }
        if (this.flags & 0x2) {
            stream.writeFlag('SphereEnvMap');
        }
        if (this.flags & 0x10) {
            stream.writeFlag('TwoSided');
        }
        if (this.flags & 0x20) {
            stream.writeFlag('Unfogged');
        }
        if (this.flags & 0x40) {
            stream.writeFlag('NoDepthTest');
        }
        if (this.flags & 0x80) {
            stream.writeFlag('NoDepthSet');
        }
        if (version > 800) {
            if (this.flags & 0x100) {
                stream.writeFlag('Unlit');
            }
        }
        if (!this.writeAnimation(stream, 'KMTF')) {
            stream.writeNumberAttrib('static TextureID', this.textureId);
        }
        if (this.textureAnimationId !== -1) {
            stream.writeNumberAttrib('TVertexAnimId', this.textureAnimationId);
        }
        if (this.coordId !== 0) {
            stream.writeNumberAttrib('CoordId', this.coordId);
        }
        if (!this.writeAnimation(stream, 'KMTA') && this.alpha !== 1) {
            stream.writeNumberAttrib('static Alpha', this.alpha);
        }
        if (version > 800) {
            if (!this.writeAnimation(stream, 'KMTE') && this.emissiveGain !== 1) {
                stream.writeNumberAttrib('static EmissiveGain', this.emissiveGain);
            }
            if (!this.writeAnimation(stream, 'KFC3') && (this.fresnelColor[0] !== 1 || this.fresnelColor[1] !== 1 || this.fresnelColor[2] !== 1)) {
                stream.writeVectorAttrib('static FresnelColor', this.fresnelColor);
            }
            if (!this.writeAnimation(stream, 'KFCA') && this.fresnelOpacity !== 0) {
                stream.writeNumberAttrib('static FresnelOpacity', this.fresnelOpacity);
            }
            if (!this.writeAnimation(stream, 'KFTC') && this.fresnelTeamColor !== 0) {
                stream.writeNumberAttrib('static FresnelTeamColor', this.fresnelTeamColor);
            }
        }
        stream.endBlock();
    }
    getByteLength(version) {
        let size = 28 + super.getByteLength();
        // See note above in readMdx.
        if (version > 800) {
            size += 24;
        }
        return size;
    }
}
exports.default = Layer;
