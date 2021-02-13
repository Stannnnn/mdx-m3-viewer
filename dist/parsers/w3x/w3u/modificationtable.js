"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modifiedobject_1 = require("./modifiedobject");
/**
 * A modification table.
 */
class ModificationTable {
    constructor() {
        this.objects = [];
    }
    load(stream, useOptionalInts) {
        for (let i = 0, l = stream.readUint32(); i < l; i++) {
            let object = new modifiedobject_1.default();
            object.load(stream, useOptionalInts);
            this.objects[i] = object;
        }
    }
    save(stream, useOptionalInts) {
        stream.writeUint32(this.objects.length);
        for (let object of this.objects) {
            object.save(stream, useOptionalInts);
        }
    }
    getByteLength(useOptionalInts) {
        let size = 4;
        for (let object of this.objects) {
            size += object.getByteLength(useOptionalInts);
        }
        return size;
    }
}
exports.default = ModificationTable;
