"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * An emitter.
 */
class Emitter {
    constructor(instance) {
        this.objects = [];
        this.alive = 0;
        this.currentEmission = 0;
        this.instance = instance;
    }
    /**
     * Update this emitter.
     */
    update(dt) {
        // Emit new objects if needed.
        this.updateEmission(dt);
        let currentEmission = this.currentEmission;
        if (currentEmission >= 1) {
            for (let i = 0; i < currentEmission; i += 1) {
                this.emit();
            }
        }
    }
    /**
     * Clear any emitted objects.
     */
    clear() {
        let objects = this.objects;
        for (let i = 0, l = this.alive; i < l; i++) {
            let object = objects[i];
            object.health = 0;
        }
        this.currentEmission = 0;
    }
    emitObject(emitData) {
        let objects = this.objects;
        // If there are no unused objects, create a new one.
        if (this.alive === objects.length) {
            objects.push(this.createObject());
        }
        // Get the first unused object.
        let object = objects[this.alive];
        object.index = this.alive;
        object.bind(emitData);
        this.alive += 1;
        this.currentEmission -= 1;
        let scene = this.instance.scene;
        scene.emittedObjectUpdater.add(object);
        return object;
    }
    kill(object) {
        let objects = this.objects;
        this.alive -= 1;
        let otherObject = objects[this.alive];
        objects[object.index] = otherObject;
        objects[this.alive] = object;
        otherObject.index = object.index;
        object.index = -1;
    }
}
exports.default = Emitter;
