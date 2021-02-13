"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const binarystream_1 = require("../../../common/binarystream");
const triggercategory_1 = require("./triggercategory");
const variable_1 = require("./variable");
const trigger_1 = require("./trigger");
/**
 * war3map.wtg - the trigger file.
 */
class War3MapWtg {
    constructor() {
        this.version = 0;
        this.categories = [];
        this.u1 = 0;
        this.variables = [];
        this.triggers = [];
    }
    load(buffer, triggerData) {
        let stream = new binarystream_1.default(buffer);
        if (stream.readBinary(4) !== 'WTG!') {
            throw new Error('Not a WTG file');
        }
        this.version = stream.readInt32();
        for (let i = 0, l = stream.readUint32(); i < l; i++) {
            let category = new triggercategory_1.default();
            category.load(stream, this.version);
            this.categories[i] = category;
        }
        this.u1 = stream.readInt32();
        for (let i = 0, l = stream.readUint32(); i < l; i++) {
            let variable = new variable_1.default();
            variable.load(stream, this.version);
            this.variables[i] = variable;
        }
        for (let i = 0, l = stream.readUint32(); i < l; i++) {
            let trigger = new trigger_1.default();
            try {
                trigger.load(stream, this.version, triggerData);
            }
            catch (e) {
                throw new Error(`Trigger ${i}: ${e}`);
            }
            this.triggers[i] = trigger;
        }
    }
    save() {
        let stream = new binarystream_1.default(new ArrayBuffer(this.getByteLength()));
        stream.writeBinary('WTG!');
        stream.writeInt32(this.version);
        stream.writeUint32(this.categories.length);
        for (let category of this.categories) {
            category.save(stream, this.version);
        }
        stream.writeInt32(this.u1);
        stream.writeUint32(this.variables.length);
        for (let variable of this.variables) {
            variable.save(stream, this.version);
        }
        stream.writeUint32(this.triggers.length);
        for (let trigger of this.triggers) {
            trigger.save(stream, this.version);
        }
        return stream.uint8array;
    }
    getByteLength() {
        let size = 24;
        let version = this.version;
        for (let category of this.categories) {
            size += category.getByteLength(version);
        }
        for (let variable of this.variables) {
            size += variable.getByteLength(version);
        }
        for (let trigger of this.triggers) {
            size += trigger.getByteLength(version);
        }
        return size;
    }
}
exports.default = War3MapWtg;
