"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanNode = exports.testAnimation = exports.testGeosetSkinning = exports.getTextureIds = exports.testReference = exports.testObjects = exports.getObjectName = exports.getObjectTypeName = exports.hasAnimation = exports.animatedTypeNames = exports.replaceableIds = exports.sequenceNames = void 0;
const arrayunique_1 = require("../../../common/arrayunique");
const path_1 = require("../../../common/path");
const animations_1 = require("../../../parsers/mdlx/animations");
const animatedobject_1 = require("../../../parsers/mdlx/animatedobject");
const genericobject_1 = require("../../../parsers/mdlx/genericobject");
const sequence_1 = require("../../../parsers/mdlx/sequence");
const texture_1 = require("../../../parsers/mdlx/texture");
const material_1 = require("../../../parsers/mdlx/material");
const layer_1 = require("../../../parsers/mdlx/layer");
const textureanimation_1 = require("../../../parsers/mdlx/textureanimation");
const geoset_1 = require("../../../parsers/mdlx/geoset");
const geosetanimation_1 = require("../../../parsers/mdlx/geosetanimation");
const bone_1 = require("../../../parsers/mdlx/bone");
const light_1 = require("../../../parsers/mdlx/light");
const helper_1 = require("../../../parsers/mdlx/helper");
const attachment_1 = require("../../../parsers/mdlx/attachment");
const particleemitter_1 = require("../../../parsers/mdlx/particleemitter");
const particleemitter2_1 = require("../../../parsers/mdlx/particleemitter2");
const particleemitterpopcorn_1 = require("../../../parsers/mdlx/particleemitterpopcorn");
const ribbonemitter_1 = require("../../../parsers/mdlx/ribbonemitter");
const eventobject_1 = require("../../../parsers/mdlx/eventobject");
const camera_1 = require("../../../parsers/mdlx/camera");
const collisionshape_1 = require("../../../parsers/mdlx/collisionshape");
const faceeffect_1 = require("../../../parsers/mdlx/faceeffect");
const tracks_1 = require("./tracks");
exports.sequenceNames = new Set([
    'attack',
    'birth',
    'cinematic',
    'death',
    'decay',
    'dissipate',
    'morph',
    'portrait',
    'sleep',
    'spell',
    'stand',
    'walk',
    'ready',
]);
exports.replaceableIds = new Set([
    1,
    2,
    11,
    21,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
]);
exports.animatedTypeNames = new Map([
    // Layer
    ['KMTF', 'Texture ID'],
    ['KMTA', 'Alpha'],
    ['KMTE', 'Emissive Gain'],
    ['KFC3', 'Fresnel Color'],
    ['KFCA', 'Fresnel Opacity'],
    ['KFTC', 'Fresnel Team Color'],
    // TextureAnimation
    ['KTAT', 'Translation'],
    ['KTAR', 'Rotation'],
    ['KTAS', 'Scaling'],
    // GeosetAnimation
    ['KGAO', 'Alpha'],
    ['KGAC', 'Color'],
    // GenericObject
    ['KGTR', 'Translation'],
    ['KGRT', 'Rotation'],
    ['KGSC', 'Scaling'],
    // Light
    ['KLAS', 'Attenuation Start'],
    ['KLAE', 'Attenuation End'],
    ['KLAC', 'Color'],
    ['KLAI', 'Intensity'],
    ['KLBI', 'Ambient Intensity'],
    ['KLBC', 'Ambient Color'],
    ['KLAV', 'Visibility'],
    // Attachment
    ['KATV', 'Visibility'],
    // ParticleEmitter
    ['KPEE', 'Emission Rate'],
    ['KPEG', 'Gravity'],
    ['KPLN', 'Longitude'],
    ['KPLT', 'Latitude'],
    ['KPEL', 'Lifespan'],
    ['KPES', 'Speed'],
    ['KPEV', 'Visibility'],
    // ParticleEmitter2
    ['KP2E', 'Emission Rate'],
    ['KP2G', 'Gravity'],
    ['KP2L', 'Latitude'],
    ['KP2R', 'Variation'],
    ['KP2N', 'Length'],
    ['KP2W', 'Width'],
    ['KP2S', 'Speed'],
    ['KP2V', 'Visibility'],
    // ParticleEmitterCorn
    ['KPPA', 'Alpha'],
    ['KPPC', 'Color'],
    ['KPPE', 'EmissionRate'],
    ['KPPL', 'LifeSpan'],
    ['KPPS', 'Speed'],
    ['KPPV', 'Visibility'],
    // RibbonEmitter
    ['KRHA', 'Height Above'],
    ['KRHB', 'Height Below'],
    ['KRAL', 'Alpha'],
    ['KRCO', 'Color'],
    ['KRTX', 'Texture Slot'],
    ['KRVS', 'Visibility'],
    // Camera
    ['KCTR', 'Translation'],
    ['KTTR', 'Rotation'],
    ['KCRL', 'Target Translation'],
]);
function hasAnimation(object, name) {
    for (let animation of object.animations) {
        if (animation.name === name) {
            return true;
        }
    }
    return false;
}
exports.hasAnimation = hasAnimation;
function getObjectTypeName(object) {
    if (object instanceof sequence_1.default) {
        return 'Sequence';
    }
    else if (typeof object === 'number') {
        return 'GlobalSequence';
    }
    else if (object instanceof texture_1.default) {
        return 'Texture';
    }
    else if (object instanceof material_1.default) {
        return 'Material';
    }
    else if (object instanceof layer_1.default) {
        return 'Layer';
    }
    else if (object instanceof textureanimation_1.default) {
        return 'TextureAnimation';
    }
    else if (object instanceof geoset_1.default) {
        return 'Geoset';
    }
    else if (object instanceof geosetanimation_1.default) {
        return 'GeosetAnimation';
    }
    else if (object instanceof bone_1.default) {
        return 'Bone';
    }
    else if (object instanceof light_1.default) {
        return 'Light';
    }
    else if (object instanceof helper_1.default) {
        return 'Helper';
    }
    else if (object instanceof attachment_1.default) {
        return 'Attachment';
    }
    else if (object instanceof particleemitter_1.default) {
        return 'ParticleEmitter';
    }
    else if (object instanceof particleemitter2_1.default) {
        return 'ParticleEmitter2';
    }
    else if (object instanceof particleemitterpopcorn_1.default) {
        return 'ParticleEmitterPopcorn';
    }
    else if (object instanceof ribbonemitter_1.default) {
        return 'RibbonEmitter';
    }
    else if (object instanceof eventobject_1.default) {
        return 'EventObject';
    }
    else if (object instanceof camera_1.default) {
        return 'Camera';
    }
    else if (object instanceof collisionshape_1.default) {
        return 'CollisionShape';
    }
    else if (object instanceof faceeffect_1.default) {
        return 'FaceEffect';
    }
    else if (object instanceof animations_1.Animation) {
        return exports.animatedTypeNames.get(object.name);
    }
    else {
        console.warn('Unknown object type', object);
        return 'Unknown';
    }
}
exports.getObjectTypeName = getObjectTypeName;
function getObjectName(object, index) {
    let name = getObjectTypeName(object);
    if (!(object instanceof animations_1.Animation)) {
        name += ` ${index + 1}`;
    }
    if (object instanceof sequence_1.default || object instanceof genericobject_1.default || object instanceof camera_1.default) {
        name += ` - "${object.name}"`;
    }
    if (object instanceof texture_1.default || object instanceof faceeffect_1.default) {
        if (object.path.length) {
            name += ` - "${path_1.basename(object.path)}"`;
        }
        if (object instanceof texture_1.default) {
            if (object.replaceableId === 1) {
                name += ' - Team color';
            }
            else if (object.replaceableId === 2) {
                name += ' - Team glow';
            }
            else if (object.replaceableId > 0) {
                name += ` - Replaceable ID ${object.replaceableId}`;
            }
        }
    }
    return name;
}
exports.getObjectName = getObjectName;
function testObjects(data, objects, handler) {
    let l = objects.length;
    if (l) {
        let isAnimated = objects[0] instanceof animatedobject_1.default;
        let isGeneric = objects[0] instanceof genericobject_1.default;
        for (let i = 0; i < l; i++) {
            let object = objects[i];
            data.push(object, i);
            if (handler) {
                handler(data, object, i);
            }
            if (isAnimated) {
                let asAnimated = object;
                testObjects(data, asAnimated.animations, testAnimation);
            }
            if (isGeneric) {
                let asGeneric = object;
                let objectId = asGeneric.objectId;
                let parentId = asGeneric.parentId;
                data.assertError(parentId === -1 || hasGenericObject(data, parentId), `Invalid parent ${parentId}`);
                data.assertError(objectId !== parentId, 'Same object and parent');
            }
            data.pop();
        }
    }
}
exports.testObjects = testObjects;
function testReference(data, objects, index, typeNameIfError) {
    if (index >= 0 && index < objects.length) {
        data.addReference(objects[index]);
        return true;
    }
    else {
        data.addError(`Invalid ${typeNameIfError} ${index}`);
        return false;
    }
}
exports.testReference = testReference;
/**
 * Get all of the texture indices referenced by a layer.
 */
function getTextureIds(layer) {
    for (let animation of layer.animations) {
        if (animation.name === 'KMTF') {
            return arrayunique_1.default(animation.values.map((value) => value[0]));
        }
    }
    return [layer.textureId];
}
exports.getTextureIds = getTextureIds;
function testVertexSkinning(data, vertex, bone) {
    let object = data.objects[bone];
    if (object) {
        if (!(object instanceof bone_1.default)) {
            data.addSevere(`Vertex ${vertex}: Attached to "${object.name}" which is not a bone`);
        }
    }
    else {
        data.addError(`Vertex ${vertex}: Attached to object ${bone} which does not exist`);
    }
}
/**
 * Test geoset skinning.
 */
function testGeosetSkinning(data, geoset) {
    if (data.model.version > 800 && geoset.skin.length) {
        data.assertWarning(geoset.vertexGroups.length === 0, 'This geoset has both skin/weights and vertex groups');
        let skin = geoset.skin;
        for (let i = 0, l = skin.length / 8; i < l; i++) {
            let offset = i * 8;
            let bone0 = skin[offset];
            let bone1 = skin[offset + 1];
            let bone2 = skin[offset + 2];
            let bone3 = skin[offset + 3];
            let weight0 = skin[offset + 4];
            let weight1 = skin[offset + 5];
            let weight2 = skin[offset + 6];
            let weight3 = skin[offset + 7];
            if (weight0 > 0) {
                testVertexSkinning(data, i, bone0);
            }
            if (weight1 > 0) {
                testVertexSkinning(data, i, bone1);
            }
            if (weight2 > 0) {
                testVertexSkinning(data, i, bone2);
            }
            if (weight3 > 0) {
                testVertexSkinning(data, i, bone3);
            }
            let weight = weight0 + weight1 + weight2 + weight3;
            if (weight === 0) {
                data.addSevere(`Vertex ${i}: Not attached to anything`);
            }
            else if (weight !== 255) {
                data.addSevere(`Vertex ${i}: The weights are not normalized to 1`);
            }
        }
    }
    else {
        // A model having no bones at all is also valid.
        // I don't know if the skinning information in that case can be anything whatsoever, or if there are rules.
        if (data.model.bones.length) {
            let vertexGroups = geoset.vertexGroups;
            let matrixGroups = geoset.matrixGroups;
            let matrixIndices = geoset.matrixIndices;
            let slices = [];
            for (let i = 0, l = matrixGroups.length, k = 0; i < l; i++) {
                slices.push(matrixIndices.subarray(k, k + matrixGroups[i]));
                k += matrixGroups[i];
            }
            for (let i = 0, l = vertexGroups.length; i < l; i++) {
                let slice = slices[vertexGroups[i]];
                if (slice) {
                    for (let bone of slice) {
                        testVertexSkinning(data, i, bone);
                    }
                }
                else {
                    let vertexGroup = vertexGroups[i];
                    if (vertexGroup === 255) {
                        data.addSevere(`Vertex ${i}: Not attached to anything`);
                    }
                    else {
                        data.addSevere(`Vertex ${i}: Attached to vertex group ${vertexGroup} which does not exist`);
                    }
                }
            }
        }
    }
}
exports.testGeosetSkinning = testGeosetSkinning;
/**
 * Is the given ID a valid generic object?
 */
function hasGenericObject(data, id) {
    for (let object of data.objects) {
        if (object.objectId === id) {
            return true;
        }
    }
    return false;
}
function testAnimation(data, animation) {
    let name = animation.name;
    let interpolationType = animation.interpolationType;
    // Particle emitter 2 variation animations are not implemented in Magos for the MDX format.
    data.assertWarning(name !== 'KP2R', 'Using a variation animation.');
    // Particle emitter 2 gravity animations are not implemented in Magos for the MDX format.
    data.assertWarning(name !== 'KP2G', 'Using a gravity animation.');
    // The game seems to force visiblity (and others?) interpolation types to none.
    data.assertWarning(exports.animatedTypeNames.get(name) !== 'Visibility' || interpolationType === 0, 'Interpolation type not set to None');
    tracks_1.default(data, animation);
}
exports.testAnimation = testAnimation;
function cleanNode(node) {
    let nodes = node.nodes;
    for (let i = nodes.length - 1; i >= 0; i--) {
        let child = nodes[i];
        if (child.type === 'node') {
            if (child.errors || child.severe || child.warnings || child.unused || (child.uses !== undefined && !child.uses)) {
                cleanNode(child);
            }
            else {
                nodes.splice(i, 1);
            }
        }
    }
}
exports.cleanNode = cleanNode;
/*
let attachmentNames = new Set([
    'chest',
    'feet',
    'foot',
    'hand',
    'head',
    'origin',
    'overhead',
    'sprite',
    'weapon',
]);

let attachmentQualifiers = new Set([
    'alternate',
    'left',
    'mount',
    'right',
    'rear',
    'smart',
    'first',
    'second',
    'third',
    'fourth',
    'fifth',
    'sixth',
    'small',
    'medium',
    'large',
    'gold',
    'rallypoint',
    'eattree',
]);

function testAttachmentName(attachment) {
    let tokens = attachment.node.name.toLowerCase().trim().split(/\s+/),
        valid = true;

    if (tokens.length > 1) {
        let names = attachmentNames,
            firstToken = tokens[0],
            lastToken = tokens[tokens.length - 1];

        if (!names.has(tokens[0]) || lastToken !== 'ref') {
            valid = false;
        }

        if (tokens.length > 2) {
            let qualifiers = attachmentQualifiers;

            for (let i = 1, l = tokens.length - 1; i < l; i++) {
                if (!qualifiers.has(tokens[i])) {
                    valid = false;
                }
            }
        }
    } else {
        valid = false;
    }

    return valid;
}
*/
