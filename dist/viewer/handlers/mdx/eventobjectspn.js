"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const emittedobject_1 = require("../../emittedobject");
/**
 * An MDX spawned model object.
 */
class EventObjectSpn extends emittedobject_1.default {
    constructor(emitter) {
        super(emitter);
        let emitterObject = emitter.emitterObject;
        let internalModel = emitterObject.internalModel;
        this.internalInstance = internalModel.addInstance();
    }
    bind() {
        let emitter = this.emitter;
        let instance = emitter.instance;
        let scene = instance.scene;
        let node = instance.nodes[emitter.emitterObject.index];
        let internalInstance = this.internalInstance;
        internalInstance.setScene(scene);
        internalInstance.setSequence(0);
        // Set the transformation and recalculate.
        // The later is needed for instances that went out of view, which causes their instaces to no longer get updates.
        internalInstance.setTransformation(node.worldLocation, node.worldRotation, node.worldScale);
        internalInstance.recalculateTransformation();
        internalInstance.show();
        this.health = 1;
    }
    update(dt) {
        let instance = this.internalInstance;
        let model = instance.model;
        // Once the sequence finishes, this event object dies
        if (instance.frame >= model.sequences[0].interval[1]) {
            this.health = 0;
            instance.hide();
        }
    }
}
exports.default = EventObjectSpn;
