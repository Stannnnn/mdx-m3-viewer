"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const file_1 = require("../../ini/file");
/**
 * Trigger data needed to load a WTG file.
 */
class TriggerData {
    constructor() {
        this.types = {};
        this.functions = [{}, {}, {}, {}];
        this.presets = {};
        this.externalTypes = {};
        this.externalFunctions = [{}, {}, {}, {}];
        this.externalPresets = {};
    }
    addTriggerData(buffer, isExternal) {
        let types = this.types;
        let functions = this.functions;
        let presets = this.presets;
        if (isExternal) {
            types = this.externalTypes;
            functions = this.externalFunctions;
            presets = this.externalPresets;
        }
        let triggerData = new file_1.default();
        triggerData.load(buffer);
        let section = triggerData.getSection('TriggerTypes');
        if (section) {
            this.addTriggerTypes(types, section);
        }
        section = triggerData.getSection('TriggerEvents');
        if (section) {
            this.addTriggerDataFunctions(functions[0], section, 1);
        }
        section = triggerData.getSection('TriggerConditions');
        if (section) {
            this.addTriggerDataFunctions(functions[1], section, 1);
        }
        section = triggerData.getSection('TriggerActions');
        if (section) {
            this.addTriggerDataFunctions(functions[2], section, 1);
        }
        section = triggerData.getSection('TriggerCalls');
        if (section) {
            this.addTriggerDataFunctions(functions[3], section, 3);
        }
        section = triggerData.getSection('TriggerParams');
        if (section) {
            this.addTriggerDataPresets(presets, section);
        }
    }
    addTriggerTypes(types, section) {
        for (let [key, value] of section) {
            let tokens = value.split(',');
            types[key] = tokens[4] || '';
        }
    }
    addTriggerDataFunctions(functions, section, skipped) {
        for (let [key, value] of section) {
            // We don't care about metadata lines.
            if (key[0] !== '_') {
                let tokens = value.split(',').slice(skipped);
                let args = [];
                // Can be used by actions to make aliases.
                let scriptName = section.get(`_${key}_scriptname`) || null;
                for (let argument of tokens) {
                    // We don't care about constants.
                    if (Number.isNaN(parseFloat(argument)) && argument !== 'nothing' && argument !== '') {
                        args.push(argument);
                    }
                }
                functions[key] = { args, scriptName };
            }
        }
    }
    addTriggerDataPresets(presets, section) {
        for (let [key, value] of section) {
            let tokens = value.split(',');
            // Note that the operators are enclosed by "" for some reason.
            // Note that string literals are enclosed by backticks.
            presets[key] = tokens[2].replace(/"/g, '').replace(/`/g, '"');
        }
    }
    /**
     * Given a type, return its base type.
     *
     * Returns the given type if its not a child type.
     */
    getBaseType(type) {
        type = type.toLowerCase();
        let base = this.types[type];
        if (base === undefined) {
            base = this.externalTypes[type];
        }
        // Same as !base, but be explicit to be clearer.
        if (base === '' || base === undefined) {
            return type;
        }
        return base;
    }
    isBaseFunction(type, name) {
        name = name.toLowerCase();
        if (this.functions[type][name]) {
            return true;
        }
        return false;
    }
    /**
     * Gets the signature of the given function.
     */
    getFunction(type, name) {
        name = name.toLowerCase();
        let args = this.functions[type][name];
        if (!args) {
            args = this.externalFunctions[type][name];
        }
        return args;
    }
    /**
     * Get the type of a function given its name.
     * Returns -1 if the function isn't recognized.
     */
    getFunctionType(name) {
        name = name.toLowerCase();
        let functions = this.functions;
        for (let i = 0; i < 4; i++) {
            if (functions[i][name]) {
                return i;
            }
        }
        return -1;
    }
    /**
     * Gets a preset value.
     */
    getPreset(name) {
        name = name.toLowerCase();
        let preset = this.presets[name];
        if (preset === undefined) {
            preset = this.externalPresets[name];
        }
        return preset;
    }
    /**
     * Is the given preset a custom or standard one?
     */
    isCustomPreset(name) {
        name = name.toLowerCase();
        if (this.presets[name] !== undefined) {
            return false;
        }
        if (this.externalPresets[name] !== undefined) {
            return true;
        }
        throw new Error(`Failed to find a preset: ${name}`);
    }
}
exports.default = TriggerData;
