"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utf8_1 = require("../../../common/utf8");
const parameter_1 = require("./parameter");
/**
 * An Event/Condition/Action.
 */
class ECA {
    constructor() {
        this.type = -1;
        this.group = -1;
        this.name = '';
        this.isEnabled = 0;
        this.parameters = [];
        this.ecas = [];
    }
    load(stream, version, isChildECA, triggerData) {
        this.type = stream.readInt32();
        if (isChildECA) {
            this.group = stream.readUint32();
        }
        this.name = stream.readNull();
        this.isEnabled = stream.readInt32();
        let signature = triggerData.getFunction(this.type, this.name);
        if (!signature) {
            throw new Error(`ECA ${this.name}'s signature is unknown`);
        }
        let args = signature.args;
        for (let i = 0, l = args.length; i < l; i++) {
            let parameter = new parameter_1.default();
            try {
                parameter.load(stream, version, triggerData);
            }
            catch (e) {
                throw new Error(`ECA "${this.name}": Parameter ${i}: ${e}`);
            }
            this.parameters[i] = parameter;
        }
        if (version === 7) {
            for (let i = 0, l = stream.readUint32(); i < l; i++) {
                let eca = new ECA();
                try {
                    eca.load(stream, version, true, triggerData);
                }
                catch (e) {
                    throw new Error(`ECA "${this.name}": Child ECA ${i} ${e}`);
                }
                this.ecas[i] = eca;
            }
        }
    }
    save(stream, version) {
        stream.writeInt32(this.type);
        if (this.group !== -1) {
            stream.writeInt32(this.group);
        }
        stream.writeNull(this.name);
        stream.writeInt32(this.isEnabled);
        for (let parameter of this.parameters) {
            parameter.save(stream, version);
        }
        if (version === 7) {
            stream.writeUint32(this.ecas.length);
            for (let eca of this.ecas) {
                eca.save(stream, version);
            }
        }
    }
    getByteLength(version) {
        let size = 9 + utf8_1.byteLengthUtf8(this.name);
        if (this.group !== -1) {
            size += 4;
        }
        for (let parameter of this.parameters) {
            size += parameter.getByteLength(version);
        }
        if (version === 7) {
            size += 4;
            for (let eca of this.ecas) {
                size += eca.getByteLength(version);
            }
        }
        return size;
    }
}
exports.default = ECA;
