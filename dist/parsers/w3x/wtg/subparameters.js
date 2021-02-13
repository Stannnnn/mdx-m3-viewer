"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utf8_1 = require("../../../common/utf8");
const parameter_1 = require("./parameter");
/**
 * A function call in an expression.
 */
class SubParameters {
    constructor() {
        this.type = 0;
        this.name = '';
        this.beginParameters = 0;
        this.parameters = [];
    }
    load(stream, version, triggerData) {
        this.type = stream.readInt32();
        this.name = stream.readNull();
        this.beginParameters = stream.readInt32();
        if (this.beginParameters) {
            let signature = triggerData.getFunction(this.type, this.name);
            if (!signature) {
                throw new Error(`SubParameters ${this.name}'s signature is unknown`);
            }
            let args = signature.args;
            for (let i = 0, l = args.length; i < l; i++) {
                let parameter = new parameter_1.default();
                try {
                    parameter.load(stream, version, triggerData);
                }
                catch (e) {
                    throw new Error(`SubParameters "${this.name}": Parameter ${i}: ${e}`);
                }
                this.parameters[i] = parameter;
            }
        }
    }
    save(stream, version) {
        stream.writeInt32(this.type);
        stream.writeNull(this.name);
        stream.writeInt32(this.beginParameters);
        for (let parameter of this.parameters) {
            parameter.save(stream, version);
        }
    }
    getByteLength(version) {
        let size = 9 + utf8_1.byteLengthUtf8(this.name);
        if (this.parameters.length) {
            for (let parameter of this.parameters) {
                size += parameter.getByteLength(version);
            }
        }
        return size;
    }
}
exports.default = SubParameters;
