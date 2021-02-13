"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = require("../../node");
const node_2 = require("./node");
/**
 * M3 skeleton.
 */
class M3Skeleton {
    constructor(instance) {
        let model = instance.model;
        let bones = model.bones;
        let boneLookup = model.boneLookup;
        let sharedNodeData = node_1.createSkeletalNodes(bones.length, node_2.default);
        let nodes = sharedNodeData.nodes;
        this.nodes = nodes;
        this.worldMatrices = sharedNodeData.worldMatrices;
        this.instance = instance;
        this.modelNodes = bones;
        this.initialReference = model.initialReference;
        this.sts = model.sts;
        this.stc = model.stc;
        this.stg = model.stg;
        this.boneLookup = boneLookup;
        // Set the bone parent references
        for (let i = 0, l = bones.length; i < l; i++) {
            let bone = bones[i];
            if (bone.parent === -1) {
                nodes[i].parent = instance;
            }
            else {
                nodes[i].parent = nodes[bone.parent];
            }
            if (bone.billboard1) {
                nodes[i].billboarded = true;
            }
        }
    }
    update(dt) {
        let instance = this.instance;
        let scene = instance.scene;
        let nodes = this.nodes;
        let modelNodes = this.modelNodes;
        for (let i = 0, l = nodes.length; i < l; i++) {
            let node = nodes[i];
            let modelNode = modelNodes[i];
            this.getValue4(node.localRotation, modelNode.rotation, instance);
            this.getValue3(node.localLocation, modelNode.location, instance);
            this.getValue3(node.localScale, modelNode.scale, instance);
            node.recalculateTransformation(scene);
            node.updateChildren(dt, scene);
        }
    }
    getValueUnsafe(animRef, instance) {
        let sequence = instance.sequence;
        if (sequence !== -1) {
            return this.stg[sequence].getValueUnsafe(animRef, instance);
        }
        return animRef.initValue;
    }
    getValue(animRef, instance) {
        return this.getValueUnsafe(animRef, instance);
    }
    getValue2(out, animRef, instance) {
        let unsafeHeap = this.getValueUnsafe(animRef, instance);
        out[0] = unsafeHeap[0];
        out[1] = unsafeHeap[1];
        return out;
    }
    getValue3(out, animRef, instance) {
        let unsafeHeap = this.getValueUnsafe(animRef, instance);
        out[0] = unsafeHeap[0];
        out[1] = unsafeHeap[1];
        out[2] = unsafeHeap[2];
        return out;
    }
    getValue4(out, animRef, instance) {
        let unsafeHeap = this.getValueUnsafe(animRef, instance);
        out[0] = unsafeHeap[0];
        out[1] = unsafeHeap[1];
        out[2] = unsafeHeap[2];
        out[3] = unsafeHeap[3];
        return out;
    }
}
exports.default = M3Skeleton;
