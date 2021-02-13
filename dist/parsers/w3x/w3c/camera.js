"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utf8_1 = require("../../../common/utf8");
/**
 * A camera.
 */
class Camera {
    constructor() {
        this.targetLocation = new Float32Array(3);
        this.rotation = 0;
        this.angleOfAttack = 0;
        this.distance = 0;
        this.roll = 0;
        this.fieldOfView = 0;
        this.farClippingPlane = 0;
        this.nearClippingPlane = 0;
        this.cinematicName = '';
    }
    load(stream) {
        stream.readFloat32Array(this.targetLocation);
        this.rotation = stream.readFloat32(); // in degrees
        this.angleOfAttack = stream.readFloat32(); // in degrees
        this.distance = stream.readFloat32();
        this.roll = stream.readFloat32();
        this.fieldOfView = stream.readFloat32(); // in degrees
        this.farClippingPlane = stream.readFloat32();
        this.nearClippingPlane = stream.readFloat32(); // probably near clipping plane
        this.cinematicName = stream.readNull();
    }
    save(stream) {
        stream.writeFloat32Array(this.targetLocation);
        stream.writeFloat32(this.rotation);
        stream.writeFloat32(this.angleOfAttack);
        stream.writeFloat32(this.distance);
        stream.writeFloat32(this.roll);
        stream.writeFloat32(this.fieldOfView);
        stream.writeFloat32(this.farClippingPlane);
        stream.writeFloat32(this.nearClippingPlane);
        stream.writeNull(this.cinematicName);
    }
    getByteLength() {
        return 41 + utf8_1.byteLengthUtf8(this.cinematicName);
    }
}
exports.default = Camera;
