"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animationmap_1 = require("./animationmap");
/**
 * The parent class for all objects that have animated data in them.
 */
class AnimatedObject {
    constructor() {
        this.animations = [];
    }
    readAnimations(stream, size) {
        let end = stream.index + size;
        while (stream.index < end) {
            let name = stream.readBinary(4);
            let animation = new animationmap_1.default[name][1]();
            animation.readMdx(stream, name);
            this.animations.push(animation);
        }
    }
    writeAnimations(stream) {
        for (let animation of this.animations) {
            animation.writeMdx(stream);
        }
    }
    /**
     * A wrapper around readBlock() which merges static tokens.
     * E.g.: static Color
     * This makes the condition blocks in the parent objects linear and simple.
     */
    *readAnimatedBlock(stream) {
        for (let token of stream.readBlock()) {
            if (token === 'static') {
                yield `static ${stream.read()}`;
            }
            else {
                yield token;
            }
        }
    }
    readAnimation(stream, name) {
        let animation = new animationmap_1.default[name][1]();
        animation.readMdl(stream, name);
        this.animations.push(animation);
    }
    writeAnimation(stream, name) {
        for (let animation of this.animations) {
            if (animation.name === name) {
                animation.writeMdl(stream, animationmap_1.default[name][0]);
                return true;
            }
        }
        return false;
    }
    /**
     * AnimatedObject itself doesn't care about versions, however objects that inherit it do.
     */
    getByteLength(version) {
        let size = 0;
        for (let animation of this.animations) {
            size += animation.getByteLength();
        }
        return size;
    }
}
exports.default = AnimatedObject;
