"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tokenstream_1 = require("../../parsers/mdlx/tokenstream");
const utils_1 = require("./sanitytest/utils");
function mdlObjects(stream, model, objects, out) {
    if (objects.length) {
        for (let [index, object] of objects.entries()) {
            object.writeMdl(stream, model.version);
            out.push({ name: utils_1.getObjectName(object, index), source: stream.buffer });
            stream.clear();
        }
    }
}
function mdlObjectsBlock(stream, model, objects, out) {
    if (objects.length) {
        let name = utils_1.getObjectTypeName(objects[0]) + 's';
        let nodes = [];
        mdlObjects(stream, model, objects, nodes);
        model.saveStaticObjectsBlock(stream, name, objects);
        out.push({ name, source: stream.buffer, nodes });
        stream.clear();
    }
}
function mdlStructure(model) {
    let stream = new tokenstream_1.default();
    let out = [];
    model.saveVersionBlock(stream);
    out.push({ name: 'Version', source: stream.buffer });
    stream.clear();
    model.saveModelBlock(stream);
    out.push({ name: 'Model', source: stream.buffer });
    stream.clear();
    mdlObjectsBlock(stream, model, model.sequences, out);
    if (model.globalSequences.length) {
        model.saveGlobalSequenceBlock(stream);
        out.push({ name: 'GlobalSequences', source: stream.buffer });
        stream.clear();
    }
    mdlObjectsBlock(stream, model, model.textures, out);
    if (model.materials.length) {
        let nodes = [];
        for (let [index, material] of model.materials.entries()) {
            let layerNodes = [];
            mdlObjects(stream, model, material.layers, layerNodes);
            material.writeMdl(stream, model.version);
            nodes.push({ name: `Material ${index + 1}`, source: stream.buffer, nodes: layerNodes });
            stream.clear();
        }
        model.saveStaticObjectsBlock(stream, 'Materials', model.materials);
        out.push({ name: 'Materials', source: stream.buffer, nodes });
        stream.clear();
    }
    mdlObjectsBlock(stream, model, model.textureAnimations, out);
    mdlObjects(stream, model, model.geosets, out);
    mdlObjects(stream, model, model.geosetAnimations, out);
    mdlObjects(stream, model, model.bones, out);
    mdlObjects(stream, model, model.lights, out);
    mdlObjects(stream, model, model.helpers, out);
    mdlObjects(stream, model, model.attachments, out);
    if (model.pivotPoints.length) {
        model.savePivotPointBlock(stream);
        out.push({ name: 'PivotPoints', source: stream.buffer });
        stream.clear();
    }
    mdlObjects(stream, model, model.particleEmitters, out);
    mdlObjects(stream, model, model.particleEmitters2, out);
    mdlObjects(stream, model, model.particleEmittersPopcorn, out);
    mdlObjects(stream, model, model.ribbonEmitters, out);
    mdlObjects(stream, model, model.cameras, out);
    mdlObjects(stream, model, model.collisionShapes, out);
    mdlObjects(stream, model, model.faceEffects, out);
    if (model.bindPose.length) {
        model.saveBindPoseBlock(stream);
        out.push({ name: 'BindPose', source: stream.buffer });
        stream.clear();
    }
    return { nodes: out };
}
exports.default = mdlStructure;
