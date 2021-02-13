"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extname = exports.basename = void 0;
function basename(path) {
    if (path && path.length) {
        let parts = path.split(/[\\\/]/g);
        return parts[parts.length - 1];
    }
    return '';
}
exports.basename = basename;
function extname(path) {
    return path.slice(path.lastIndexOf('.')).toLowerCase();
}
exports.extname = extname;
