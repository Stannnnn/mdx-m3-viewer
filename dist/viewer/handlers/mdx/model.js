"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../../../parsers/mdlx/model");
const model_2 = require("../../model");
const textureanimation_1 = require("./textureanimation");
const layer_1 = require("./layer");
const material_1 = require("./material");
const geosetanimation_1 = require("./geosetanimation");
const replaceableids_1 = require("./replaceableids");
const bone_1 = require("./bone");
const light_1 = require("./light");
const helper_1 = require("./helper");
const attachment_1 = require("./attachment");
const particleemitterobject_1 = require("./particleemitterobject");
const particleemitter2object_1 = require("./particleemitter2object");
const ribbonemitterobject_1 = require("./ribbonemitterobject");
const camera_1 = require("./camera");
const eventobjectemitterobject_1 = require("./eventobjectemitterobject");
const collisionshape_1 = require("./collisionshape");
const setupgeosets_1 = require("./setupgeosets");
const setupgroups_1 = require("./setupgroups");
const modelinstance_1 = require("./modelinstance");
const texture_1 = require("./texture");
/**
 * An MDX model.
 */
class MdxModel extends model_2.default {
    constructor(bufferOrParser, resourceData) {
        super(resourceData);
        this.reforged = false;
        this.hd = false;
        this.solverParams = {};
        this.name = '';
        this.sequences = [];
        this.globalSequences = [];
        this.materials = [];
        this.layers = [];
        this.textures = [];
        this.textureAnimations = [];
        this.geosets = [];
        this.geosetAnimations = [];
        this.bones = [];
        this.lights = [];
        this.helpers = [];
        this.attachments = [];
        this.pivotPoints = [];
        this.particleEmitters = [];
        this.particleEmitters2 = [];
        this.ribbonEmitters = [];
        this.cameras = [];
        this.eventObjects = [];
        this.collisionShapes = [];
        this.hasLayerAnims = false;
        this.hasGeosetAnims = false;
        this.batches = [];
        this.genericObjects = [];
        this.sortedGenericObjects = [];
        this.hierarchy = [];
        this.opaqueGroups = [];
        this.translucentGroups = [];
        this.arrayBuffer = null;
        this.elementBuffer = null;
        this.skinDataType = 0;
        this.bytesPerSkinElement = 1;
        let parser;
        if (bufferOrParser instanceof model_1.default) {
            parser = bufferOrParser;
        }
        else {
            parser = new model_1.default();
            try {
                parser.load(bufferOrParser);
            }
            catch (e) {
                // If we get here, the parser failed to load.
                // It still may have loaded enough data to support rendering though!
                // I have encountered a model that is missing data, but still works in-game.
                // So just let the code continue.
                // If the handler manages to load the model, nothing happened.
                // If critical data is missing, it will fail and throw its own exception.
            }
        }
        let viewer = this.viewer;
        let pathSolver = this.pathSolver;
        let solverParams = this.solverParams;
        let reforged = parser.version > 800;
        let texturesExt = reforged ? '.dds' : '.blp';
        this.reforged = reforged;
        this.name = parser.name;
        // Initialize the bounds.
        let extent = parser.extent;
        this.bounds.fromExtents(extent.min, extent.max);
        // Sequences
        for (let sequence of parser.sequences) {
            this.sequences.push(sequence);
        }
        // Global sequences
        for (let globalSequence of parser.globalSequences) {
            this.globalSequences.push(globalSequence);
        }
        // Texture animations
        for (let textureAnimation of parser.textureAnimations) {
            this.textureAnimations.push(new textureanimation_1.default(this, textureAnimation));
        }
        // Materials
        let layerId = 0;
        for (let material of parser.materials) {
            let layers = [];
            for (let layer of material.layers) {
                let vLayer = new layer_1.default(this, layer, layerId++, material.priorityPlane);
                layers.push(vLayer);
                this.layers.push(vLayer);
            }
            this.materials.push(new material_1.default(this, material.shader, layers));
            if (material.shader !== '') {
                this.hd = true;
            }
        }
        if (reforged) {
            solverParams.reforged = true;
        }
        if (this.hd) {
            solverParams.hd = true;
        }
        // Textures.
        let textures = parser.textures;
        for (let i = 0, l = textures.length; i < l; i++) {
            let texture = textures[i];
            let path = texture.path;
            let replaceableId = texture.replaceableId;
            let flags = texture.flags;
            if (replaceableId !== 0) {
                path = `ReplaceableTextures\\${replaceableids_1.default[replaceableId]}${texturesExt}`;
            }
            let mdxTexture = new texture_1.default(replaceableId, !!(flags & 0x1), !!(flags & 0x2));
            viewer.load(path, pathSolver, solverParams)
                .then((texture) => {
                if (texture) {
                    mdxTexture.texture = texture;
                }
            });
            this.textures[i] = mdxTexture;
        }
        // Geoset animations
        for (let geosetAnimation of parser.geosetAnimations) {
            this.geosetAnimations.push(new geosetanimation_1.default(this, geosetAnimation));
        }
        this.pivotPoints = parser.pivotPoints;
        // Tracks the IDs of all generic objects.
        let objectId = 0;
        // Bones
        for (let bone of parser.bones) {
            this.bones.push(new bone_1.default(this, bone, objectId++));
        }
        // Lights
        for (let light of parser.lights) {
            this.lights.push(new light_1.default(this, light, objectId++));
        }
        // Helpers
        for (let helper of parser.helpers) {
            this.helpers.push(new helper_1.default(this, helper, objectId++));
        }
        // Attachments
        for (let attachment of parser.attachments) {
            this.attachments.push(new attachment_1.default(this, attachment, objectId++));
        }
        // Particle emitters
        for (let particleEmitter of parser.particleEmitters) {
            this.particleEmitters.push(new particleemitterobject_1.default(this, particleEmitter, objectId++));
        }
        // Particle emitters 2
        for (let particleEmitter2 of parser.particleEmitters2) {
            this.particleEmitters2.push(new particleemitter2object_1.default(this, particleEmitter2, objectId++));
        }
        // Ribbon emitters
        for (let ribbonEmitter of parser.ribbonEmitters) {
            this.ribbonEmitters.push(new ribbonemitterobject_1.default(this, ribbonEmitter, objectId++));
        }
        // Cameras
        for (let camera of parser.cameras) {
            this.cameras.push(new camera_1.default(this, camera));
        }
        // Event objects
        for (let eventObject of parser.eventObjects) {
            this.eventObjects.push(new eventobjectemitterobject_1.default(this, eventObject, objectId++));
        }
        // Collision shapes
        for (let collisionShape of parser.collisionShapes) {
            this.collisionShapes.push(new collisionshape_1.default(this, collisionShape, objectId++));
        }
        // One array for all generic objects.
        this.genericObjects.push(...this.bones, ...this.lights, ...this.helpers, ...this.attachments, ...this.particleEmitters, ...this.particleEmitters2, ...this.ribbonEmitters, ...this.eventObjects, ...this.collisionShapes);
        // Geosets
        setupgeosets_1.default(this, parser.geosets);
        // Render groups.
        setupgroups_1.default(this);
        // Creates the sorted indices array of the generic objects.
        this.setupHierarchy(-1);
        // Keep a sorted array.
        for (let i = 0, l = this.genericObjects.length; i < l; i++) {
            this.sortedGenericObjects[i] = this.genericObjects[this.hierarchy[i]];
        }
    }
    addInstance() {
        return new modelinstance_1.default(this);
    }
    setupHierarchy(parent) {
        for (let i = 0, l = this.genericObjects.length; i < l; i++) {
            let object = this.genericObjects[i];
            if (object.parentId === parent) {
                this.hierarchy.push(i);
                this.setupHierarchy(object.objectId);
            }
        }
    }
}
exports.default = MdxModel;
