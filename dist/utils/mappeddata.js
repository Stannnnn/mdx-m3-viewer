"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MappedData = void 0;
const file_1 = require("../parsers/slk/file");
const file_2 = require("../parsers/ini/file");
/**
 * A structure that holds mapped data from INI and SLK files.
 *
 * In the case of SLK files, the first row is expected to hold the names of the columns.
 */
class MappedData {
    constructor(buffer) {
        this.map = {};
        if (buffer) {
            this.load(buffer);
        }
    }
    /**
     * Load data from an SLK file or an INI file.
     *
     * Note that this may override previous properties!
     */
    load(buffer) {
        if (buffer.startsWith('ID;')) {
            let file = new file_1.default();
            file.load(buffer);
            let rows = file.rows;
            let header = rows[0];
            let map = this.map;
            for (let i = 1, l = rows.length; i < l; i++) {
                let row = rows[i];
                let name = row[0];
                if (name) {
                    name = name.toLowerCase();
                    if (!map[name]) {
                        map[name] = {};
                    }
                    let mapped = map[name];
                    for (let j = 0, k = header.length; j < k; j++) {
                        let key = header[j];
                        // UnitBalance.slk doesn't define the name of one row.
                        if (key === undefined) {
                            key = `column${j}`;
                        }
                        mapped[`${key}`] = row[j];
                    }
                }
            }
        }
        else {
            let file = new file_2.default();
            file.load(buffer);
            let sections = file.sections;
            let map = this.map;
            for (let [row, properties] of sections.entries()) {
                if (!map[row]) {
                    map[row] = {};
                }
                let mapped = map[row];
                for (let [name, property] of properties) {
                    mapped[name] = property;
                }
            }
        }
    }
    getRow(key) {
        return this.map[key.toLowerCase()];
    }
    getProperty(key, name) {
        return this.map[key.toLowerCase()][name];
    }
    setRow(key, values) {
        this.map[key.toLowerCase()] = values;
    }
}
exports.MappedData = MappedData;
