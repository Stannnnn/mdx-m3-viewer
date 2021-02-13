"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const viewer_1 = require("./viewer");
const scene_1 = require("./scene");
const camera_1 = require("./camera");
const model_1 = require("./model");
const modelinstance_1 = require("./modelinstance");
const texture_1 = require("./texture");
const genericresource_1 = require("./genericresource");
const handlers_1 = require("./handlers");
exports.default = {
    ModelViewer: viewer_1.default,
    Scene: scene_1.default,
    Camera: camera_1.default,
    Model: model_1.default,
    ModelInstance: modelinstance_1.default,
    Texture: texture_1.default,
    GenericResource: genericresource_1.default,
    handlers: handlers_1.default,
};
