"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const emittedobject_1 = require("../../emittedobject");
/**
 * An MDX spawned sound object.
 */
class EventObjectSnd extends emittedobject_1.default {
    bind() {
        let emitter = this.emitter;
        let instance = emitter.instance;
        let viewer = instance.model.viewer;
        let scene = instance.scene;
        // Is audio enabled both viewer-wide and in this scene?
        if (viewer.enableAudio && scene.audioEnabled) {
            let emitterObject = emitter.emitterObject;
            let node = instance.nodes[emitterObject.index];
            let audioContext = scene.audioContext;
            let decodedBuffers = emitterObject.decodedBuffers;
            let panner = audioContext.createPanner();
            let source = audioContext.createBufferSource();
            let location = node.worldLocation;
            // Panner settings.
            panner.setPosition(location[0], location[1], location[2]);
            panner.maxDistance = emitterObject.distanceCutoff;
            panner.refDistance = emitterObject.minDistance;
            panner.connect(audioContext.destination);
            // Source.
            source.buffer = decodedBuffers[(Math.random() * decodedBuffers.length) | 0];
            source.connect(panner);
            // Make a sound.
            source.start(0);
        }
    }
    update(dt) {
    }
}
exports.default = EventObjectSnd;
