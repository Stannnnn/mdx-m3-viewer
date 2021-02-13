"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modification_1 = require("./modification");
/**
 * A modified object.
 */
class ModifiedObject {
    constructor() {
        this.oldId = '\0\0\0\0';
        this.newId = '\0\0\0\0';
        this.modifications = [];
    }
    load(stream, useOptionalInts) {
        this.oldId = stream.readBinary(4);
        this.newId = stream.readBinary(4);
        for (let i = 0, l = stream.readUint32(); i < l; i++) {
            let modification = new modification_1.default();
            modification.load(stream, useOptionalInts);
            this.modifications[i] = modification;
        }
    }
    save(stream, useOptionalInts) {
        if (this.oldId !== '\0\0\0\0') {
            stream.writeBinary(this.oldId);
        }
        else {
            stream.writeUint32(0);
        }
        if (this.newId !== '\0\0\0\0') {
            stream.writeBinary(this.newId);
        }
        else {
            stream.writeUint32(0);
        }
        stream.writeUint32(this.modifications.length);
        for (let modification of this.modifications) {
            modification.save(stream, useOptionalInts);
        }
    }
    getByteLength(useOptionalInts) {
        let size = 12;
        for (let modification of this.modifications) {
            size += modification.getByteLength(useOptionalInts);
        }
        return size;
    }
}
exports.default = ModifiedObject;
