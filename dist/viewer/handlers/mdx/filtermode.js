"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emitterFilterMode = exports.layerFilterMode = void 0;
function layerFilterMode(filterMode, gl) {
    if (filterMode === 2) {
        return [gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA]; // Blend
    }
    else if (filterMode === 3) {
        return [gl.SRC_ALPHA, gl.ONE]; // Additive
    }
    else if (filterMode === 4) {
        return [gl.SRC_ALPHA, gl.ONE]; // Add alpha
    }
    else if (filterMode === 5) {
        return [gl.ZERO, gl.SRC_COLOR]; // Modulate
    }
    else if (filterMode === 6) {
        return [gl.DST_COLOR, gl.SRC_COLOR]; // Modulate 2x
    }
    else {
        return [0, 0];
    }
}
exports.layerFilterMode = layerFilterMode;
function emitterFilterMode(filterMode, gl) {
    if (filterMode === 0) {
        return [gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA]; // Blend
    }
    else if (filterMode === 1) {
        return [gl.SRC_ALPHA, gl.ONE]; // Add alpha
    }
    else if (filterMode === 2) {
        return [gl.ZERO, gl.SRC_COLOR]; // Modulate
    }
    else if (filterMode === 3) {
        return [gl.DST_COLOR, gl.SRC_COLOR]; // Modulate 2x
    }
    else if (filterMode === 4) {
        return [gl.SRC_ALPHA, gl.ONE]; // Add alpha
    }
    else {
        return [0, 0];
    }
}
exports.emitterFilterMode = emitterFilterMode;
