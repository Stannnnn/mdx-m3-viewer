"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const image_1 = require("../../../parsers/blp/image");
const isformat_1 = require("../../../parsers/blp/isformat");
const texture_1 = require("./texture");
exports.default = {
    isValidSource(object) {
        if (object instanceof image_1.BlpImage) {
            return true;
        }
        return isformat_1.default(object);
    },
    resource: texture_1.default,
};
