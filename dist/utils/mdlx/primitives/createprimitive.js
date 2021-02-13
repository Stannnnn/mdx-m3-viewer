"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../../../parsers/mdlx/model");
const texture_1 = require("../../../parsers/mdlx/texture");
const material_1 = require("../../../parsers/mdlx/material");
const layer_1 = require("../../../parsers/mdlx/layer");
const geoset_1 = require("../../../parsers/mdlx/geoset");
const geosetanimation_1 = require("../../../parsers/mdlx/geosetanimation");
const bone_1 = require("../../../parsers/mdlx/bone");
function createPrimitive(viewer, primitive, material) {
    let lines;
    let color;
    let texture;
    let pathSolver;
    let layerFlags = 0;
    if (material) {
        lines = material.lines;
        color = material.color;
        texture = material.texture;
        if (material.twoSided) {
            layerFlags |= 0x10;
        }
    }
    let model = new model_1.default();
    // Extent
    let extent = model.extent;
    let r = primitive.boundingRadius;
    extent.min.fill(-r);
    extent.max.fill(r);
    extent.boundsRadius = r;
    // Texture
    let tex = new texture_1.default();
    tex.path = 'PLACEHOLDER';
    model.textures[0] = tex;
    pathSolver = (src) => {
        if (src === model) {
            return model;
        }
        return texture;
    };
    // Material
    let mat = new material_1.default();
    let layer = new layer_1.default();
    layer.textureId = 0;
    layer.flags = layerFlags;
    mat.layers[0] = layer;
    model.materials[0] = mat;
    // Geoset
    let geoset = new geoset_1.default();
    geoset.vertices = primitive.vertices;
    geoset.uvSets[0] = primitive.uvs;
    geoset.matrixGroups = new Uint32Array([1]);
    geoset.matrixIndices = new Uint32Array([0]);
    geoset.vertexGroups = new Uint8Array(primitive.vertices.length / 3);
    let faceTypeGroup = 4;
    let indices = primitive.faces;
    if (lines) {
        faceTypeGroup = 1;
        indices = primitive.edges;
    }
    geoset.faceTypeGroups = new Uint32Array([faceTypeGroup]);
    geoset.faceGroups = new Uint32Array([indices.length]);
    geoset.faces = indices;
    model.geosets[0] = geoset;
    // Color via a geoset animation.
    if (color) {
        let geosetAnimation = new geosetanimation_1.default();
        geosetAnimation.geosetId = 0;
        geosetAnimation.color = color;
        model.geosetAnimations[0] = geosetAnimation;
    }
    // Bone - otherwise can't transform the instance.
    let bone = new bone_1.default();
    bone.objectId = 0;
    model.bones[0] = bone;
    // Load and return the promise.
    return viewer.load(model, pathSolver);
}
exports.default = createPrimitive;
