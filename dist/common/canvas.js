"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resizeImageData = exports.scaleNPOT = exports.imageToImageData = exports.imageDataToImage = exports.imageDataToDataUrl = exports.imageDataToBlob = exports.blobToImageData = exports.blobToImage = void 0;
const math_1 = require("./math");
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
const canvas2 = document.createElement('canvas');
const ctx2 = canvas2.getContext('2d');
function blobToImage(blob) {
    return new Promise((resolve) => {
        let url = URL.createObjectURL(blob);
        let image = new Image();
        image.onload = () => {
            canvas.width = image.width;
            canvas.height = image.height;
            ctx.drawImage(image, 0, 0);
            resolve(image);
        };
        image.onerror = () => {
            resolve(image);
        };
        image.src = url;
    });
}
exports.blobToImage = blobToImage;
function blobToImageData(blob) {
    return new Promise((resolve, reject) => {
        let url = URL.createObjectURL(blob);
        let image = new Image();
        image.onload = () => {
            URL.revokeObjectURL(url);
            canvas.width = image.width;
            canvas.height = image.height;
            ctx.drawImage(image, 0, 0);
            resolve(ctx.getImageData(0, 0, image.width, image.height));
        };
        image.onerror = (e) => {
            reject(e);
        };
        image.src = url;
    });
}
exports.blobToImageData = blobToImageData;
function imageDataToBlob(imageData) {
    return new Promise((resolve) => {
        canvas.width = imageData.width;
        canvas.height = imageData.height;
        ctx.putImageData(imageData, 0, 0);
        canvas.toBlob((blob) => {
            resolve(blob);
        });
    });
}
exports.imageDataToBlob = imageDataToBlob;
function imageDataToDataUrl(imageData) {
    canvas.width = imageData.width;
    canvas.height = imageData.height;
    ctx.putImageData(imageData, 0, 0);
    return canvas.toDataURL();
}
exports.imageDataToDataUrl = imageDataToDataUrl;
function imageDataToImage(imageData) {
    let image = new Image();
    image.src = imageDataToDataUrl(imageData);
    return image;
}
exports.imageDataToImage = imageDataToImage;
function imageToImageData(image) {
    let width = image.width;
    let height = image.height;
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(image, 0, 0);
    return ctx.getImageData(0, 0, width, height);
}
exports.imageToImageData = imageToImageData;
function scaleNPOT(imageData) {
    let width = imageData.width;
    let height = imageData.height;
    let potWidth = math_1.powerOfTwo(width);
    let potHeight = math_1.powerOfTwo(height);
    if (width !== potWidth || height !== potHeight) {
        return resizeImageData(imageData, potWidth, potHeight);
    }
    return imageData;
}
exports.scaleNPOT = scaleNPOT;
function resizeImageData(data, width, height) {
    let srcWidth = data.width;
    let srcHeight = data.height;
    // ImageData
    if (data instanceof ImageData) {
        canvas.width = srcWidth;
        canvas.height = srcHeight;
        ctx.putImageData(data, 0, 0);
        canvas2.width = width;
        canvas2.height = height;
        ctx2.drawImage(canvas, 0, 0, width, height);
        return ctx2.getImageData(0, 0, width, height);
        // Assumed to be Image
    }
    else {
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(data, 0, 0, width, height);
        return ctx.getImageData(0, 0, width, height);
    }
}
exports.resizeImageData = resizeImageData;
