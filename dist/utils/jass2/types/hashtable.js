"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const agent_1 = require("./agent");
/**
 * type unit
 */
class JassHashTable extends agent_1.default {
    constructor() {
        super(...arguments);
        this.table = new Map();
    }
    save(parentKey, childKey, value) {
        let table = this.table;
        let childTable = table.get(parentKey);
        if (!childTable) {
            childTable = new Map();
            table.set(parentKey, childTable);
        }
        childTable.set(childKey, value);
    }
    load(parentKey, childKey, defaultValue) {
        let table = this.table;
        let childTable = table.get(parentKey);
        if (childTable) {
            let value = childTable.get(childKey);
            if (value !== undefined) {
                return value;
            }
        }
        return defaultValue;
    }
    have(parentKey, childKey) {
        let table = this.table;
        let childTable = table.get(parentKey);
        if (!childTable) {
            return false;
        }
        return childTable.has(childKey);
    }
    remove(parentKey, childKey) {
        let table = this.table;
        let childTable = table.get(parentKey);
        if (childTable) {
            childTable.delete(childKey);
            if (!childTable.size) {
                table.delete(parentKey);
            }
        }
    }
    flush() {
        this.table.clear();
    }
    flushChild(parentKey) {
        let child = this.table.get(parentKey);
        if (child) {
            child.clear();
        }
    }
}
exports.default = JassHashTable;
