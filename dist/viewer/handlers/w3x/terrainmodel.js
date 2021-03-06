"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../../../parsers/mdlx/model");
/**
 * A static terrain model.
 */
class TerrainModel {
    constructor(map, arrayBuffer, locations, textures, shader) {
        let gl = map.viewer.gl;
        let webgl = map.viewer.webgl;
        let instancedArrays = webgl.extensions.ANGLE_instanced_arrays;
        let vertexArrayObject = webgl.extensions.OES_vertex_array_object;
        let parser = new model_1.default();
        parser.load(arrayBuffer);
        let geoset = parser.geosets[0];
        let vertices = geoset.vertices;
        let normals = geoset.normals;
        let uvs = geoset.uvSets[0];
        let faces = geoset.faces;
        let normalsOffset = vertices.byteLength;
        let uvsOffset = normalsOffset + normals.byteLength;
        let vao = null;
        let attribs = shader.attribs;
        if (vertexArrayObject) {
            vao = vertexArrayObject.createVertexArrayOES();
            vertexArrayObject.bindVertexArrayOES(vao);
        }
        let vertexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, uvsOffset + uvs.byteLength, gl.STATIC_DRAW);
        gl.bufferSubData(gl.ARRAY_BUFFER, 0, vertices);
        gl.bufferSubData(gl.ARRAY_BUFFER, normalsOffset, normals);
        gl.bufferSubData(gl.ARRAY_BUFFER, uvsOffset, uvs);
        if (vertexArrayObject) {
            gl.vertexAttribPointer(attribs.a_position, 3, gl.FLOAT, false, 0, 0);
            gl.enableVertexAttribArray(attribs.a_position);
            gl.vertexAttribPointer(attribs.a_normal, 3, gl.FLOAT, false, 0, normalsOffset);
            gl.enableVertexAttribArray(attribs.a_normal);
            gl.vertexAttribPointer(attribs.a_uv, 2, gl.FLOAT, false, 0, uvsOffset);
            gl.enableVertexAttribArray(attribs.a_uv);
        }
        let texturesOffset = locations.length * 4;
        let locationAndTextureBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, locationAndTextureBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, texturesOffset + textures.length, gl.STATIC_DRAW);
        gl.bufferSubData(gl.ARRAY_BUFFER, 0, new Float32Array(locations));
        gl.bufferSubData(gl.ARRAY_BUFFER, texturesOffset, new Uint8Array(textures));
        if (vertexArrayObject) {
            gl.vertexAttribPointer(attribs.a_instancePosition, 3, gl.FLOAT, false, 0, 0);
            gl.enableVertexAttribArray(attribs.a_instancePosition);
            instancedArrays.vertexAttribDivisorANGLE(attribs.a_instancePosition, 1);
            gl.vertexAttribPointer(attribs.a_instanceTexture, 1, gl.UNSIGNED_BYTE, false, 0, texturesOffset);
            gl.enableVertexAttribArray(attribs.a_instanceTexture);
            instancedArrays.vertexAttribDivisorANGLE(attribs.a_instanceTexture, 1);
        }
        let faceBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, faceBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, faces, gl.STATIC_DRAW);
        if (vertexArrayObject) {
            vertexArrayObject.bindVertexArrayOES(null);
        }
        this.map = map;
        this.vertexBuffer = vertexBuffer;
        this.faceBuffer = faceBuffer;
        this.normalsOffset = normalsOffset;
        this.uvsOffset = uvsOffset;
        this.elements = faces.length;
        this.locationAndTextureBuffer = locationAndTextureBuffer;
        this.texturesOffset = texturesOffset;
        this.instances = locations.length / 3;
        this.vao = vao;
    }
    render(shader) {
        let viewer = this.map.viewer;
        let gl = viewer.gl;
        let webgl = viewer.webgl;
        let instancedArrays = webgl.extensions.ANGLE_instanced_arrays;
        let vertexArrayObject = webgl.extensions.OES_vertex_array_object;
        let attribs = shader.attribs;
        if (vertexArrayObject) {
            vertexArrayObject.bindVertexArrayOES(this.vao);
        }
        else {
            // Locations and textures.
            gl.bindBuffer(gl.ARRAY_BUFFER, this.locationAndTextureBuffer);
            gl.vertexAttribPointer(attribs.a_instancePosition, 3, gl.FLOAT, false, 0, 0);
            gl.vertexAttribPointer(attribs.a_instanceTexture, 1, gl.UNSIGNED_BYTE, false, 0, this.texturesOffset);
            // Vertices.
            gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
            gl.vertexAttribPointer(attribs.a_position, 3, gl.FLOAT, false, 0, 0);
            gl.vertexAttribPointer(attribs.a_normal, 3, gl.FLOAT, false, 0, this.normalsOffset);
            gl.vertexAttribPointer(attribs.a_uv, 2, gl.FLOAT, false, 0, this.uvsOffset);
            // Faces.
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.faceBuffer);
        }
        // Draw.
        instancedArrays.drawElementsInstancedANGLE(gl.TRIANGLES, this.elements, gl.UNSIGNED_SHORT, 0, this.instances);
        if (vertexArrayObject) {
            vertexArrayObject.bindVertexArrayOES(null);
        }
    }
}
exports.default = TerrainModel;
