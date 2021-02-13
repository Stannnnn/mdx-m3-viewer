"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("../../common/path");
const file_1 = require("../../parsers/ini/file");
const model_1 = require("../../parsers/mdlx/model");
const file_2 = require("../../parsers/w3x/imp/file");
const file_3 = require("../../parsers/w3x/w3d/file");
const file_4 = require("../../parsers/w3x/w3s/file");
const file_5 = require("../../parsers/w3x/w3u/file");
const tokenstream_1 = require("../jass2/tokenstream");
function isModel(file) {
    return file.endsWith('.mdx') || file.endsWith('.mdl');
}
function isTexture(file) {
    return file.endsWith('.blp') || file.endsWith('.dds') || file.endsWith('.tga');
}
function isOther(file) {
    return file.endsWith('.wav') || file.endsWith('.mp3') || file.endsWith('.slk') || file.endsWith('.txt');
}
function filterFile(files, file) {
    if (file.length > 6 && (isModel(file) || isTexture(file) || isOther(file))) {
        if (file.endsWith('.mdl')) {
            file = `${file.slice(0, -4)}.mdx`;
        }
        files.push(file.replace(/\\\\/g, '\\'));
    }
}
/**
 * Given a map, attempt to find all file names referenced in it.
 *
 * Can be used with MpqArchive.applyListfile() to actually attempt to resolve the files in the archive.
 *
 * Based on code generously shared by Ralle.
 */
function generateListfile(map) {
    let files = [
        '(listfile)',
        '(signature)',
        '(attributes)',
        'war3map.w3e',
        'war3map.w3i',
        'war3map.wtg',
        'war3map.wct',
        'war3map.wts',
        'war3map.j',
        'scripts\\war3map.j',
        'war3map.lua',
        'scripts\\war3map.lua',
        'war3map.shd',
        'war3mapMap.blp',
        'war3mapMap.b00',
        'war3mapMap.tga',
        'war3mapPreview.tga',
        'war3map.mmp',
        'war3mapPath.tga',
        'war3map.wpm',
        'war3map.doo',
        'war3mapUnits.doo',
        'war3map.w3r',
        'war3map.w3c',
        'war3map.w3s',
        'war3map.w3u',
        'war3map.w3t',
        'war3map.w3a',
        'war3map.w3b',
        'war3map.w3d',
        'war3map.w3q',
        'war3mapMisc.txt',
        'war3mapSkin.txt',
        'war3mapExtra.txt',
        'war3map.imp',
    ];
    // Listfile.
    let file = map.get('(listfile)');
    if (file) {
        try {
            let text = file.text();
            let lines = text.split(/\r\n/g);
            for (let line of lines) {
                files.push(line.trim());
            }
        }
        catch (e) {
            console.warn('(listfile)', e);
        }
    }
    // Object files.
    for (let objectFile of ['.w3u', '.w3t', '.w3b', '.w3d', '.w3a', '.w3h', '.w3q']) {
        file = map.get('war3map' + objectFile);
        if (file) {
            try {
                let bytes = file.bytes();
                let parser;
                if (objectFile === '.w3d' || objectFile === '.w3q' || objectFile === '.w3a') {
                    parser = new file_3.default();
                }
                else {
                    parser = new file_5.default();
                }
                parser.load(bytes);
                let tables = [
                    parser.originalTable,
                    parser.customTable,
                ];
                for (let table of tables) {
                    for (let object of table.objects) {
                        for (let modification of object.modifications) {
                            // String
                            if (modification.variableType === 3) {
                                filterFile(files, modification.value);
                            }
                        }
                    }
                }
            }
            catch (e) {
                console.warn(file.name, e);
            }
        }
    }
    // Sounds.
    file = map.get('war3map.w3s');
    if (file) {
        try {
            let bytes = file.bytes();
            let parser = new file_4.default();
            parser.load(bytes);
            for (let sound of parser.sounds) {
                files.push(sound.file);
            }
        }
        catch (e) {
            console.warn('war3map.w3s', e);
        }
    }
    // Scripts.
    file = map.get('war3map.j') || map.get('Scripts\\war3map.j') || map.get('war3map.lua') || map.get('Scripts\\war3map.lua');
    if (file) {
        try {
            let text = file.text();
            let stream = new tokenstream_1.default(text);
            let token;
            while ((token = stream.read()) !== undefined) {
                if (token[0] === '"') {
                    filterFile(files, token.slice(1, -1));
                }
            }
        }
        catch (e) {
            console.warn(file.name, e);
        }
    }
    // User interface replacements.
    file = map.get('war3mapSkin.txt');
    if (file) {
        try {
            let text = file.text();
            let config = new file_1.default();
            config.load(text);
            for (let section of config.sections.values()) {
                for (let value of section.values()) {
                    for (let token of value.split(',')) {
                        filterFile(files, token);
                    }
                }
            }
        }
        catch (e) {
            console.warn('war3mapSkin.txt', e);
        }
    }
    // Imports
    file = map.get('war3map.imp');
    if (file) {
        try {
            let bytes = file.bytes();
            let parser = new file_2.default();
            parser.load(bytes);
            for (let file of parser.entries.keys()) {
                files.push(file);
            }
        }
        catch (e) {
            console.warn('war3map.imp', e);
        }
    }
    // Model portraits
    for (let i = 0, l = files.length; i < l; i++) {
        let file = files[i];
        if (isModel(file)) {
            files.push(`${file.slice(0, -4)}_portrait.mdx`); // MDL portraits?
        }
    }
    // Model textures.
    for (let i = 0, l = files.length; i < l; i++) {
        let file = files[i];
        if (isModel(file)) {
            let actualFile = map.get(file);
            if (actualFile) {
                try {
                    let bytes = actualFile.bytes();
                    let parser = new model_1.default();
                    parser.load(bytes);
                    for (let texture of parser.textures) {
                        if (texture.path.length) {
                            files.push(texture.path);
                        }
                    }
                }
                catch (e) {
                    console.warn(file, e);
                }
            }
        }
    }
    // Disabled icon versions.
    for (let i = 0, l = files.length; i < l; i++) {
        let file = files[i];
        if (isTexture(file)) {
            files.push(`ReplaceableTextures\\CommandButtonsDisabled\\DIS${path_1.basename(file)}`);
        }
    }
    return new Set(files);
}
exports.default = generateListfile;
