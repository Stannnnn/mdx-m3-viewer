"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.floatArrayDecimals = exports.floatDecimals = exports.isPowerOfTwo = exports.powerOfTwo = exports.copysign = exports.bezier = exports.hermite = exports.lerp = exports.clamp = exports.randomInRange = exports.radToDeg = exports.degToRad = void 0;
/**
 * Convert from degrees to radians.
 */
function degToRad(degrees) {
    return degrees * (Math.PI / 180);
}
exports.degToRad = degToRad;
/**
 * Convert from radians to degrees.
 */
function radToDeg(radians) {
    return radians * (180 / Math.PI);
}
exports.radToDeg = radToDeg;
/**
 * Gets a random number between a range.
 */
function randomInRange(a, b) {
    return a + Math.random() * (b - a);
}
exports.randomInRange = randomInRange;
/**
 * Clamp a number in a range.
 */
function clamp(x, minVal, maxVal) {
    return Math.min(Math.max(x, minVal), maxVal);
}
exports.clamp = clamp;
/**
 * Linear interpolation.
 */
function lerp(a, b, t) {
    return a + t * (b - a);
}
exports.lerp = lerp;
/**
 * Hermite interpolation.
 */
function hermite(a, b, c, d, t) {
    let factorTimes2 = t * t;
    let factor1 = factorTimes2 * (2 * t - 3) + 1;
    let factor2 = factorTimes2 * (t - 2) + t;
    let factor3 = factorTimes2 * (t - 1);
    let factor4 = factorTimes2 * (3 - 2 * t);
    return (a * factor1) + (b * factor2) + (c * factor3) + (d * factor4);
}
exports.hermite = hermite;
/**
 * Bezier interpolation.
 */
function bezier(a, b, c, d, t) {
    let invt = 1 - t;
    let factorTimes2 = t * t;
    let inverseFactorTimesTwo = invt * invt;
    let factor1 = inverseFactorTimesTwo * invt;
    let factor2 = 3 * t * inverseFactorTimesTwo;
    let factor3 = 3 * factorTimes2 * invt;
    let factor4 = factorTimes2 * t;
    return (a * factor1) + (b * factor2) + (c * factor3) + (d * factor4);
}
exports.bezier = bezier;
/**
 * Copies the sign of one number onto another.
 */
function copysign(x, y) {
    let signy = Math.sign(y);
    if (signy === 0) {
        return 0;
    }
    let signx = Math.sign(x);
    if (signx !== signy) {
        return -x;
    }
    return x;
}
exports.copysign = copysign;
/**
 * Gets the closest power of two bigger or equal to the given number.
 */
function powerOfTwo(x) {
    x--;
    x |= x >> 1;
    x |= x >> 2;
    x |= x >> 4;
    x |= x >> 8;
    x |= x >> 16;
    x++;
    return x;
}
exports.powerOfTwo = powerOfTwo;
/**
 * Is this number a power of two?
 */
function isPowerOfTwo(x) {
    if (x === 0) {
        return false;
    }
    return ((x & (x - 1)) === 0);
}
exports.isPowerOfTwo = isPowerOfTwo;
/**
 * Given a number, truncates digits after the decimal point.
 * The given precision should be in base 10.
 * E.g. for a precision of two digits after the decimal point, the precision should be 100.
 * The result is returned as a string.
 */
function floatDecimals(value, precision) {
    return `${Math.trunc(value * precision) / precision}`;
}
exports.floatDecimals = floatDecimals;
/**
 * Uses floatDecimals on a typed array, and returns its string representation.
 */
function floatArrayDecimals(value, precision) {
    if (value instanceof Float32Array) {
        let array = [];
        for (let i = 0, l = value.length; i < l; i++) {
            array[i] = floatDecimals(value[i], precision);
        }
        return array.join(', ');
    }
    else {
        return value.join(', ');
    }
}
exports.floatArrayDecimals = floatArrayDecimals;
