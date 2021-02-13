"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isArchive = exports.searchHeader = void 0;
/**
 * Search for the MPQ header - MPQ\x1A.
 * The header can be on any 512 bytes boundry offset.
 */
function searchHeader(bytes) {
    let offset = -1;
    for (let i = 0, l = Math.ceil(bytes.byteLength / 512); i < l; i++) {
        let base = i * 512;
        // Test 'MPQ\x1A'.
        if (bytes[base] === 77 && bytes[base + 1] === 80 && bytes[base + 2] === 81 && bytes[base + 3] === 26) {
            offset = base;
        }
    }
    return offset;
}
exports.searchHeader = searchHeader;
/**
 * Checks whether the given buffer is either a Warcraft 3 map or otherwise a generic MPQ archive.
 */
function isArchive(bytes) {
    // Check for the map identifier - HM3W
    if (bytes[0] === 72 && bytes[1] === 77 && bytes[2] === 51 && bytes[3] === 87) {
        return true;
    }
    // Look for an MPQ header.
    return searchHeader(bytes) !== -1;
}
exports.isArchive = isArchive;
