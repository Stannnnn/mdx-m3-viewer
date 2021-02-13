"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A reference.
 */
class Reference {
    constructor() {
        this.index = null;
        this.entries = 0;
        this.id = 0;
        this.flags = 0;
    }
    load(stream, index) {
        this.index = index;
        this.entries = stream.readUint32();
        this.id = stream.readUint32();
        this.flags = stream.readUint32();
    }
    /**
     * Get the entries this index entry references.
     */
    get() {
        if (this.index) {
            let id = this.id;
            // For empty references (e.g. Layer.imagePath)
            if (id === 0 || this.entries === 0) {
                return [];
            }
            return this.index[id].entries;
        }
    }
    /**
     * Get the first entry this index entry references.
     */
    first() {
        if (this.index) {
            let id = this.id;
            if (id !== 0 && this.entries !== 0) {
                let entries = this.index[id].entries;
                if (entries) {
                    return entries[0];
                }
            }
        }
    }
}
exports.default = Reference;
