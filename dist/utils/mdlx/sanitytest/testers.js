"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testBindPose = exports.testFaceEffect = exports.testCamera = exports.testEventObject = exports.testRibbonEmitter = exports.testParticleEmitterPopcorn = exports.testParticleEmitter2 = exports.testParticleEmitter = exports.testPivotPoints = exports.testAttachment = exports.testLight = exports.testBone = exports.testGeosetAnimation = exports.testGeoset = exports.testMaterials = exports.testTextures = exports.testGlobalSequence = exports.testSequences = exports.testHeader = void 0;
const path_1 = require("../../../common/path");
const utils_1 = require("./utils");
const tracks_1 = require("./tracks");
function testHeader(data) {
    let version = data.model.version;
    if (version !== 800 && version !== 900 && version !== 1000) {
        data.addWarning(`Unknown version: ${version}`);
    }
    if (version === 900) {
        data.addError('Version 900 is not supported by Warcrft 3');
    }
    if (data.model.animationFile !== '') {
        data.addWarning(`The animation file should probably be empty, currently set to: "${data.model.animationFile}"`);
    }
}
exports.testHeader = testHeader;
function testSequences(data) {
    let sequences = data.model.sequences;
    if (sequences.length) {
        utils_1.testObjects(data, sequences, testSequence);
        data.assertSevere(data.foundStand, 'Missing "Stand" sequence');
        data.assertSevere(data.foundDeath, 'Missing "Death" sequence');
    }
    else {
        data.addWarning('No sequences');
    }
}
exports.testSequences = testSequences;
function testSequence(data, sequence, index) {
    let name = sequence.name;
    let tokens = name.toLowerCase().trim().split('-')[0].split(/\s+/);
    let token = tokens[0];
    let interval = sequence.interval;
    let length = interval[1] - interval[0];
    let sequences = data.model.sequences;
    for (let i = 0; i < index; i++) {
        let otherSequence = sequences[i];
        let otherInterval = otherSequence.interval;
        if (interval[0] === otherInterval[0]) {
            data.addSevere(`This sequence starts at the same frame as sequence ${i + 1} "${otherSequence.name}"`);
        }
        else if (interval[0] < otherInterval[1]) {
            data.addSevere(`This sequence starts before sequence ${i + 1} "${otherSequence.name}" ends`);
        }
    }
    if (token === 'alternate') {
        token = tokens[1];
    }
    if (token === 'stand') {
        data.foundStand = true;
    }
    if (token === 'death') {
        data.foundDeath = true;
    }
    data.addImplicitReference();
    data.assertWarning(utils_1.sequenceNames.has(token), `"${token}" is not a standard name`);
    data.assertWarning(length !== 0, 'Zero length');
    data.assertWarning(length > -1, `Negative length: ${length}`);
}
function testGlobalSequence(data, sequence) {
    data.assertWarning(sequence !== 0, 'Zero length');
    data.assertWarning(sequence >= 0, `Negative length: ${sequence}`);
}
exports.testGlobalSequence = testGlobalSequence;
function testTextures(data) {
    let textures = data.model.textures;
    if (textures.length) {
        utils_1.testObjects(data, textures, testTexture);
    }
    else {
        data.addWarning('No textures');
    }
}
exports.testTextures = testTextures;
function testTexture(data, texture) {
    let replaceableId = texture.replaceableId;
    let path = texture.path.toLowerCase();
    let ext = path_1.extname(path);
    data.assertError(path === '' || ext === '.blp' || ext === '.tga' || ext === '.tif' || ext === '.dds', `Corrupted path: "${path}"`);
    data.assertError(replaceableId === 0 || utils_1.replaceableIds.has(replaceableId), `Unknown replaceable ID: ${replaceableId}`);
    data.assertWarning(path === '' || replaceableId === 0, `Path "${path}" and replaceable ID ${replaceableId} used together`);
}
function testMaterials(data) {
    let materials = data.model.materials;
    if (materials.length) {
        utils_1.testObjects(data, materials, testMaterial);
    }
    else {
        data.addWarning('No materials');
    }
}
exports.testMaterials = testMaterials;
function testMaterial(data, material) {
    let layers = material.layers;
    let shader = material.shader;
    if (data.model.version > 800) {
        data.assertWarning(shader === '' || shader === 'Shader_SD_FixedFunction' || shader === 'Shader_HD_DefaultUnit', `Unknown shader: "${shader}"`);
    }
    if (layers.length) {
        utils_1.testObjects(data, layers, testLayer);
    }
    else {
        data.addWarning('No layers');
    }
}
function testLayer(data, layer) {
    let textures = data.model.textures;
    let textureAnimations = data.model.textureAnimations;
    for (let textureId of utils_1.getTextureIds(layer)) {
        utils_1.testReference(data, textures, textureId, 'texture');
    }
    let textureAnimationId = layer.textureAnimationId;
    if (textureAnimationId !== -1) {
        utils_1.testReference(data, textureAnimations, textureAnimationId, 'texture animation');
    }
    let filterMode = layer.filterMode;
    data.assertWarning(filterMode >= 0 && filterMode <= 6, `Invalid filter mode: ${layer.filterMode}`);
}
function testGeoset(data, geoset, index) {
    let geosetAnimations = data.model.geosetAnimations;
    let materialId = geoset.materialId;
    data.assertSevere(geoset.vertices.length < 65536, `Too many vertices in one geoset: ${geoset.vertices.length / 3}`);
    utils_1.testGeosetSkinning(data, geoset);
    if (geosetAnimations.length) {
        let references = [];
        for (let j = 0, k = geosetAnimations.length; j < k; j++) {
            if (geosetAnimations[j].geosetId === index) {
                references.push(j + 1);
            }
        }
        data.assertWarning(references.length <= 1, `Referenced by ${references.length} geoset animations: ${references.join(', ')}`);
    }
    utils_1.testReference(data, data.model.materials, materialId, 'material');
    if (geoset.faces.length) {
        data.addImplicitReference();
    }
    else {
        // The game and my code have no issue with geosets containing no faces, but Magos crashes, so add a warning in addition to it being useless.
        data.addWarning('Zero faces');
    }
    // The game and my code have no issue with geosets having any number of sequence extents, but Magos fails to parse, so add a warning.
    // Either way this is only relevant to version 800, because there seem to always be 0 extents in >800 models.
    if (geoset.sequenceExtents.length !== data.model.sequences.length && data.model.version === 800) {
        data.addWarning(`Number of sequence extents (${geoset.sequenceExtents.length}) does not match the number of sequences (${data.model.sequences.length})`);
    }
}
exports.testGeoset = testGeoset;
function testGeosetAnimation(data, geosetAnimation) {
    let geosets = data.model.geosets;
    let geosetId = geosetAnimation.geosetId;
    data.addImplicitReference();
    utils_1.testReference(data, geosets, geosetId, 'geoset');
}
exports.testGeosetAnimation = testGeosetAnimation;
const SUPPOSED_ALPHA_THRESHOLD = 0.1;
function testBone(data, bone) {
    let geosets = data.model.geosets;
    let geosetAnimations = data.model.geosetAnimations;
    let geosetId = bone.geosetId;
    let geosetAnimationId = bone.geosetAnimationId;
    if (geosetId !== -1) {
        utils_1.testReference(data, geosets, geosetId, 'geoset');
    }
    if (geosetAnimationId !== -1 && utils_1.testReference(data, geosetAnimations, geosetAnimationId, 'geoset animation')) {
        let geosetAnimation = geosetAnimations[geosetAnimationId];
        if (geosetId !== -1 && geosetAnimation.alpha < SUPPOSED_ALPHA_THRESHOLD && !utils_1.hasAnimation(geosetAnimation, 'KGAO')) {
            data.addSevere(`Referencing geoset ${geosetId + 1} and geoset animation ${geosetAnimationId + 1} with a 0 alpha, the geoset may be invisible`);
        }
    }
}
exports.testBone = testBone;
function testLight(data, light) {
    let attenuation = light.attenuation;
    data.assertWarning(attenuation[0] >= 80, `Minimum attenuation should probably be bigger than or equal to 80, but is ${attenuation[0]}`);
    data.assertWarning(attenuation[1] <= 200, `Maximum attenuation should probably be smaller than or equal to 200, but is ${attenuation[0]}`);
    data.assertWarning(attenuation[1] - attenuation[0] > 0, `The maximum attenuation should be bigger than the minimum, but isn't`);
}
exports.testLight = testLight;
function testAttachment(data, attachment) {
    // NOTE: I can't figure out what exactly the rules for attachment names even are.
    /*
    let path = attachment.path;
  
    if (path === '') {
        assertWarning(data, testAttachmentName(attachment), `${objectName}: Invalid attachment "${attachment.node.name}"`);
    } else {
        let lowerCase = path.toLowerCase();
  
        assertError(data, lowerCase.endsWith('.mdl') || lowerCase.endsWith('.mdx'), `${objectName}: Invalid path "${path}"`);
    }
    */
}
exports.testAttachment = testAttachment;
function testPivotPoints(data) {
    let pivotPoints = data.model.pivotPoints;
    let objects = data.objects;
    data.assertWarning(pivotPoints.length === objects.length, `Expected ${objects.length} pivot points, got ${pivotPoints.length}`);
}
exports.testPivotPoints = testPivotPoints;
function testParticleEmitter(data, emitter) {
    data.assertError(emitter.path.toLowerCase().endsWith('.mdl'), 'Invalid path');
}
exports.testParticleEmitter = testParticleEmitter;
function testParticleEmitter2(data, emitter) {
    let replaceableId = emitter.replaceableId;
    utils_1.testReference(data, data.model.textures, emitter.textureId, 'texture');
    let filterMode = emitter.filterMode;
    data.assertWarning(filterMode >= 0 && filterMode <= 4, `Invalid filter mode: ${emitter.filterMode}`);
    data.assertError(replaceableId === 0 || utils_1.replaceableIds.has(replaceableId), `Invalid replaceable ID: ${replaceableId}`);
}
exports.testParticleEmitter2 = testParticleEmitter2;
function testParticleEmitterPopcorn(data, emitter) {
    let path = emitter.path;
    if (path.length) {
        data.assertError(path.endsWith('.pkfx'), `Corrupted path: "${path}"`);
    }
}
exports.testParticleEmitterPopcorn = testParticleEmitterPopcorn;
function testRibbonEmitter(data, emitter) {
    utils_1.testReference(data, data.model.materials, emitter.materialId, 'material');
}
exports.testRibbonEmitter = testRibbonEmitter;
function testEventObject(data, eventObject) {
    tracks_1.default(data, eventObject);
}
exports.testEventObject = testEventObject;
function testCamera(data, camera) {
    // I don't know what the rules are as to when cameras are used for portraits.
    // Therefore, for now never report them as not used.
    data.addImplicitReference();
}
exports.testCamera = testCamera;
function testFaceEffect(data, faceEffect) {
    let path = faceEffect.path;
    if (path.length) {
        data.assertError(path.endsWith('.facefx') || path.endsWith('.facefx_ingame'), `Corrupted face effect path: "${path}"`);
    }
}
exports.testFaceEffect = testFaceEffect;
function testBindPose(data) {
    let matrices = data.model.bindPose;
    let objects = data.objects;
    // There's always an extra matrix for some reason.
    // Face effects? but also models with no face effects have it.
    data.assertWarning(matrices.length === objects.length + 1, `Expected ${objects.length + 1} matrices, got ${matrices.length}`);
}
exports.testBindPose = testBindPose;
