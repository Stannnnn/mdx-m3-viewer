"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gl_matrix_1 = require("gl-matrix");
const arrayunique_1 = require("../../../common/arrayunique");
const map_1 = require("../../../parsers/w3x/map");
const file_1 = require("../../../parsers/w3x/w3i/file");
const file_2 = require("../../../parsers/w3x/w3e/file");
const file_3 = require("../../../parsers/w3x/doo/file");
const file_4 = require("../../../parsers/w3x/unitsdoo/file");
const grid_1 = require("../../grid");
const variations_1 = require("./variations");
const terrainmodel_1 = require("./terrainmodel");
const standsequence_1 = require("./standsequence");
const unit_1 = require("./unit");
const doodad_1 = require("./doodad");
const terraindoodad_1 = require("./terraindoodad");
const normalHeap1 = gl_matrix_1.vec3.create();
const normalHeap2 = gl_matrix_1.vec3.create();
class War3MapViewerMap {
    constructor(viewer, buffer) {
        this.isReforged = false;
        this.solverParams = { tileset: 'a' };
        this.waterIndex = 0;
        this.waterIncreasePerFrame = 0;
        this.waterHeightOffset = 0;
        this.waterTextures = [];
        this.maxDeepColor = new Float32Array(4);
        this.minDeepColor = new Float32Array(4);
        this.maxShallowColor = new Float32Array(4);
        this.minShallowColor = new Float32Array(4);
        this.anyReady = false;
        this.terrainReady = false;
        this.cliffsReady = false;
        this.doodads = [];
        this.terrainDoodads = [];
        this.doodadsReady = false;
        this.units = [];
        this.unitsReady = false;
        this.tilesetTextures = [];
        this.cliffTextures = [];
        this.cliffModels = [];
        this.corners = [];
        this.centerOffset = new Float32Array(2);
        this.mapSize = new Int32Array(2);
        this.tilesets = [];
        this.blightTextureIndex = -1;
        this.cliffTilesets = [];
        this.columns = 0;
        this.rows = 0;
        this.vertexBuffer = null;
        this.faceBuffer = null;
        this.instanceBuffer = null;
        this.textureBuffer = null;
        this.variationBuffer = null;
        this.waterBuffer = null;
        this.heightMap = null;
        this.waterHeightMap = null;
        this.cliffHeightMap = null;
        this.viewer = viewer;
        this.worldScene = viewer.addScene();
        this.map = new map_1.default();
        // Readonly mode to optimize memory usage.
        this.map.load(buffer, true);
        this.loadMapInformation();
        this.pathSolver = (src, params) => {
            // The type won't be a string for loads from memory, where the final source is the input source.
            // The primitive constructor is one example of this.
            if (typeof src === 'string') {
                // MPQ paths have backwards slashes...always? Don't know.
                let path = src.replace(/\//g, '\\');
                // If the file is in the map, return it.
                let file = this.map.get(path);
                if (file) {
                    return file.arrayBuffer();
                }
                // Try to get the file from the server.
                return viewer.wc3PathSolver(src, params);
            }
            return src;
        };
        this.loadTerrainCliffsAndWater();
        // Global tables like WC3. It's bad.
        let modifications = this.map.readModifications();
        this.applyModificationFile(viewer.doodadsData, viewer.doodadMetaData, modifications.w3d);
        this.applyModificationFile(viewer.doodadsData, viewer.destructableMetaData, modifications.w3b);
        this.applyModificationFile(viewer.unitsData, viewer.unitMetaData, modifications.w3u);
        this.applyModificationFile(viewer.unitsData, viewer.unitMetaData, modifications.w3t);
        this.loadDoodadsAndDestructibles();
        this.loadUnitsAndItems();
    }
    die() {
        this.worldScene.detach();
    }
    load(src) {
        return this.viewer.load(src, this.pathSolver, this.solverParams);
    }
    loadMapInformation() {
        let file = this.map.get('war3map.w3i');
        if (!file) {
            console.warn('Attempted to load war3map.w3i but it is not there. Using default tileset A.');
            return;
        }
        let bytes = file.bytes();
        let w3i = new file_1.default();
        try {
            w3i.load(bytes);
        }
        catch (e) {
        }
        this.solverParams.tileset = w3i.tileset.toLowerCase();
        if (w3i.buildVersion[0] * 100 + w3i.buildVersion[1] > 131) {
            this.isReforged = true;
            this.solverParams.reforged = true;
        }
    }
    async loadTerrainCliffsAndWater() {
        let viewer = this.viewer;
        let file = this.map.get('war3map.w3e');
        if (!file) {
            console.warn('Attempted to load war3map.w3i, but it is not there.');
            return;
        }
        let bytes = file.bytes();
        let w3e = new file_2.default();
        w3e.load(bytes);
        let centerOffset = w3e.centerOffset;
        let mapSize = w3e.mapSize;
        this.corners = w3e.corners;
        this.centerOffset.set(centerOffset);
        this.mapSize.set(mapSize);
        // Override the grid based on the map.
        this.worldScene.grid = new grid_1.default(centerOffset[0], centerOffset[1], mapSize[0] * 128 - 128, mapSize[1] * 128 - 128, 16 * 128, 16 * 128);
        let texturesExt = this.solverParams.reforged ? '.dds' : '.blp';
        let tileset = w3e.tileset;
        let tilesetTextures = [];
        let cliffTextures = [];
        let waterTextures = [];
        for (let groundTileset of w3e.groundTilesets) {
            let row = viewer.terrainData.getRow(groundTileset);
            this.tilesets.push(row);
            tilesetTextures.push(this.load(`${row.dir}\\${row.file}${texturesExt}`));
        }
        let blights = {
            A: 'Ashen',
            B: 'Barrens',
            C: 'Felwood',
            D: 'Cave',
            F: 'Lordf',
            G: 'Dungeon',
            I: 'Ice',
            J: 'DRuins',
            K: 'Citadel',
            L: 'Lords',
            N: 'North',
            O: 'Outland',
            Q: 'VillageFall',
            V: 'Village',
            W: 'Lordw',
            X: 'Village',
            Y: 'Village',
            Z: 'Ruins',
        };
        this.blightTextureIndex = this.tilesetTextures.length;
        tilesetTextures.push(this.load(`TerrainArt\\Blight\\${blights[tileset]}_Blight${texturesExt}`));
        for (let cliffTileset of w3e.cliffTilesets) {
            let row = viewer.cliffTypesData.getRow(cliffTileset);
            this.cliffTilesets.push(row);
            cliffTextures.push(this.load(`${row.texDir}\\${row.texFile}${texturesExt}`));
        }
        let waterRow = viewer.waterData.getRow(`${tileset}Sha`);
        this.waterHeightOffset = waterRow.height;
        this.waterIncreasePerFrame = waterRow.texRate / 60;
        this.waterTextures.length = 0;
        this.maxDeepColor.set([waterRow.Dmax_R, waterRow.Dmax_G, waterRow.Dmax_B, waterRow.Dmax_A]);
        this.minDeepColor.set([waterRow.Dmin_R, waterRow.Dmin_G, waterRow.Dmin_B, waterRow.Dmin_A]);
        this.maxShallowColor.set([waterRow.Smax_R, waterRow.Smax_G, waterRow.Smax_B, waterRow.Smax_A]);
        this.minShallowColor.set([waterRow.Smin_R, waterRow.Smin_G, waterRow.Smin_B, waterRow.Smin_A]);
        for (let i = 0, l = waterRow.numTex; i < l; i++) {
            waterTextures.push(this.load(`${waterRow.texFile}${i < 10 ? '0' : ''}${i}${texturesExt}`));
        }
        this.tilesetTextures = await Promise.all(tilesetTextures);
        this.cliffTextures = await Promise.all(cliffTextures);
        this.waterTextures = await Promise.all(waterTextures);
        let corners = w3e.corners;
        let [columns, rows] = this.mapSize;
        let instanceCount = (columns - 1) * (rows - 1);
        let cliffHeights = new Float32Array(columns * rows);
        let cornerHeights = new Float32Array(columns * rows);
        let waterHeights = new Float32Array(columns * rows);
        let cornerTextures = new Uint8Array(instanceCount * 4);
        let cornerVariations = new Uint8Array(instanceCount * 4);
        let waterFlags = new Uint8Array(instanceCount);
        let instance = 0;
        let cliffs = {};
        this.columns = columns - 1;
        this.rows = rows - 1;
        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < columns; x++) {
                let bottomLeft = corners[y][x];
                let index = y * columns + x;
                cliffHeights[index] = bottomLeft.groundHeight;
                cornerHeights[index] = bottomLeft.groundHeight + bottomLeft.layerHeight - 2;
                waterHeights[index] = bottomLeft.waterHeight;
                if (y < rows - 1 && x < columns - 1) {
                    // Water can be used with cliffs and normal corners, so store water state regardless.
                    waterFlags[instance] = this.isWater(x, y);
                    // Is this a cliff, or a normal corner?
                    if (this.isCliff(x, y)) {
                        let bottomLeftLayer = bottomLeft.layerHeight;
                        let bottomRightLayer = corners[y][x + 1].layerHeight;
                        let topLeftLayer = corners[y + 1][x].layerHeight;
                        let topRightLayer = corners[y + 1][x + 1].layerHeight;
                        let base = Math.min(bottomLeftLayer, bottomRightLayer, topLeftLayer, topRightLayer);
                        let fileName = this.cliffFileName(bottomLeftLayer, bottomRightLayer, topLeftLayer, topRightLayer, base);
                        if (fileName !== 'AAAA') {
                            let cliffTexture = bottomLeft.cliffTexture;
                            /// ?
                            if (cliffTexture === 15) {
                                cliffTexture = 1;
                            }
                            let cliffRow = this.cliffTilesets[cliffTexture];
                            let dir = cliffRow.cliffModelDir;
                            let path = `Doodads\\Terrain\\${dir}\\${dir}${fileName}${variations_1.default(dir, fileName, bottomLeft.cliffVariation)}.mdx`;
                            if (!cliffs[path]) {
                                cliffs[path] = { locations: [], textures: [] };
                            }
                            cliffs[path].locations.push((x + 1) * 128 + centerOffset[0], y * 128 + centerOffset[1], (base - 2) * 128);
                            cliffs[path].textures.push(cliffTexture);
                        }
                    }
                    else {
                        let bottomLeftTexture = this.cornerTexture(x, y);
                        let bottomRightTexture = this.cornerTexture(x + 1, y);
                        let topLeftTexture = this.cornerTexture(x, y + 1);
                        let topRightTexture = this.cornerTexture(x + 1, y + 1);
                        let textures = arrayunique_1.default([bottomLeftTexture, bottomRightTexture, topLeftTexture, topRightTexture]).sort();
                        let texture = textures[0];
                        cornerTextures[instance * 4] = texture + 1;
                        cornerVariations[instance * 4] = this.getVariation(texture, bottomLeft.groundVariation);
                        textures.shift();
                        for (let i = 0, l = textures.length; i < l; i++) {
                            let bitset = 0;
                            texture = textures[i];
                            if (bottomRightTexture === texture) {
                                bitset |= 0b0001;
                            }
                            if (bottomLeftTexture === texture) {
                                bitset |= 0b0010;
                            }
                            if (topRightTexture === texture) {
                                bitset |= 0b0100;
                            }
                            if (topLeftTexture === texture) {
                                bitset |= 0b1000;
                            }
                            cornerTextures[instance * 4 + 1 + i] = texture + 1;
                            cornerVariations[instance * 4 + 1 + i] = bitset;
                        }
                    }
                    instance += 1;
                }
            }
        }
        let gl = this.viewer.gl;
        let webgl = this.viewer.webgl;
        this.vertexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]), gl.STATIC_DRAW);
        this.faceBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.faceBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint8Array([0, 1, 2, 1, 3, 2]), gl.STATIC_DRAW);
        this.cliffHeightMap = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, this.cliffHeightMap);
        webgl.setTextureMode(gl.CLAMP_TO_EDGE, gl.CLAMP_TO_EDGE, gl.NEAREST, gl.NEAREST);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.ALPHA, columns, rows, 0, gl.ALPHA, gl.FLOAT, cliffHeights);
        this.heightMap = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, this.heightMap);
        webgl.setTextureMode(gl.CLAMP_TO_EDGE, gl.CLAMP_TO_EDGE, gl.NEAREST, gl.NEAREST);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.ALPHA, columns, rows, 0, gl.ALPHA, gl.FLOAT, cornerHeights);
        this.waterHeightMap = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, this.waterHeightMap);
        webgl.setTextureMode(gl.CLAMP_TO_EDGE, gl.CLAMP_TO_EDGE, gl.NEAREST, gl.NEAREST);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.ALPHA, columns, rows, 0, gl.ALPHA, gl.FLOAT, waterHeights);
        this.instanceBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.instanceBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(instanceCount).map((currentValue, index, array) => index), gl.STATIC_DRAW);
        this.textureBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.textureBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, cornerTextures, gl.STATIC_DRAW);
        this.variationBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.variationBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, cornerVariations, gl.STATIC_DRAW);
        this.waterBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.waterBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, waterFlags, gl.STATIC_DRAW);
        this.terrainReady = true;
        this.anyReady = true;
        let cliffShader = viewer.cliffShader;
        let cliffPromises = Object.entries(cliffs).map(async (cliff) => {
            let path = cliff[0];
            let { locations, textures } = cliff[1];
            let resource = await viewer.loadBaseFile(path, 'arrayBuffer');
            if (resource) {
                return new terrainmodel_1.default(this, resource.data, locations, textures, cliffShader);
            }
        }).filter(x => x);
        // Sometimes TS isn't the brightest.
        let cliffPromisesForReal = cliffPromises;
        this.cliffModels = await Promise.all(cliffPromisesForReal);
        this.cliffsReady = true;
    }
    loadDoodadsAndDestructibles() {
        let file = this.map.get('war3map.doo');
        if (!file) {
            console.warn('Attempted to load war3map.doo but it is not there');
            return;
        }
        let bytes = file.arrayBuffer();
        let doo = new file_3.default();
        try {
            doo.load(bytes, this.isReforged);
        }
        catch (e) {
        }
        // Doodads and destructibles.
        for (let doodad of doo.doodads) {
            try {
                let row = this.viewer.doodadsData.getRow(doodad.id);
                let file = row.file;
                let numVar = row.numVar;
                if (file.endsWith('.mdl')) {
                    file = file.slice(0, -4);
                }
                let fileVar = file;
                file += '.mdx';
                if (numVar > 1) {
                    fileVar += Math.min(doodad.variation, numVar - 1);
                }
                fileVar += '.mdx';
                // First see if the model is local.
                // Doodads refering to local models may have invalid variations, so if the variation doesn't exist, try without a variation.
                let mpqFile = this.map.get(fileVar) || this.map.get(file);
                let promise;
                if (mpqFile) {
                    promise = this.load(mpqFile.name);
                }
                else {
                    promise = this.load(fileVar);
                }
                promise.then((model) => {
                    if (model) {
                        this.doodads.push(new doodad_1.default(this, model, row, doodad));
                    }
                });
            }
            catch (e) {
                console.warn(`Failed to load doodad/destructible ID ${doodad.id}`);
            }
        }
        // Cliff/Terrain doodads.
        for (let doodad of doo.terrainDoodads) {
            try {
                let row = this.viewer.doodadsData.getRow(doodad.id);
                this.load(`${row.file}.mdx`)
                    .then((model) => {
                    if (model) {
                        this.terrainDoodads.push(new terraindoodad_1.default(this, model, row, doodad));
                    }
                });
                // let pathTexture = <Texture>this.load(row.pathTex);
                // pathTexture.whenLoaded(() => {
                //   let startx = doodad.location[0];
                //   let starty = doodad.location[1];
                //   let endx = startx + pathTexture.width / 4;
                //   let endy = starty + pathTexture.height / 4;
                //   for (let x = startx; x < endx; x++) {
                //     for (let y = starty; y < endy; y++) {
                //     }
                //   }
                // });
            }
            catch (e) {
                console.warn(`Failed to load cliff/terrain doodad ID ${doodad.id}`);
            }
        }
        this.doodadsReady = true;
        this.anyReady = true;
    }
    loadUnitsAndItems() {
        let file = this.map.get('war3mapUnits.doo');
        if (!file) {
            console.warn('Attempted to load war3mapUnits.doo, but it is not there');
            return;
        }
        let bytes = file.bytes();
        let unitsDoo = new file_4.default();
        try {
            unitsDoo.load(bytes, this.isReforged);
        }
        catch (e) {
        }
        // Collect the units and items data.
        for (let unit of unitsDoo.units) {
            try {
                let row;
                let path;
                // Hardcoded?
                if (unit.id === 'sloc') {
                    path = 'Objects\\StartLocation\\StartLocation.mdx';
                }
                else {
                    row = this.viewer.unitsData.getRow(unit.id);
                    path = row.file;
                    if (path.endsWith('.mdl')) {
                        path = path.slice(0, -4);
                    }
                    path += '.mdx';
                }
                if (path) {
                    this.load(path)
                        .then((model) => {
                        if (model) {
                            this.units.push(new unit_1.default(this, model, row, unit));
                        }
                    });
                }
                else {
                    console.log('Unknown unit ID', unit.id, unit);
                }
            }
            catch (e) {
                console.warn(`Failed to load unit/item ID ${unit.id}`);
            }
        }
        this.unitsReady = true;
        this.anyReady = true;
    }
    /**
     * Update the map.
     */
    update() {
        if (this.anyReady) {
            this.waterIndex += this.waterIncreasePerFrame;
            if (this.waterIndex >= this.waterTextures.length) {
                this.waterIndex = 0;
            }
            let instances = this.worldScene.instances;
            for (let instance of instances) {
                if (instance.sequenceEnded || instance.sequence === -1) {
                    standsequence_1.default(instance);
                }
            }
        }
    }
    /**
     * Render the map.
     */
    render() {
        if (this.anyReady) {
            let worldScene = this.worldScene;
            worldScene.startFrame();
            this.renderGround();
            this.renderCliffs();
            worldScene.renderOpaque();
            this.renderWater();
            worldScene.renderTranslucent();
        }
    }
    renderGround() {
        if (this.terrainReady) {
            let gl = this.viewer.gl;
            let webgl = this.viewer.webgl;
            let instancedArrays = webgl.extensions.ANGLE_instanced_arrays;
            let shader = this.viewer.groundShader;
            let uniforms = shader.uniforms;
            let attribs = shader.attribs;
            let tilesetTextures = this.tilesetTextures;
            let instanceAttrib = attribs.a_InstanceID;
            let positionAttrib = attribs.a_position;
            let texturesAttrib = attribs.a_textures;
            let variationsAttrib = attribs.a_variations;
            let tilesetCount = tilesetTextures.length; // This includes the blight texture.
            gl.enable(gl.BLEND);
            gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
            webgl.useShader(shader);
            gl.uniformMatrix4fv(uniforms.u_VP, false, this.worldScene.camera.viewProjectionMatrix);
            gl.uniform2fv(uniforms.u_offset, this.centerOffset);
            gl.uniform2f(uniforms.u_size, this.columns, this.rows);
            gl.uniform1i(uniforms.u_heightMap, 15);
            gl.activeTexture(gl.TEXTURE15);
            gl.bindTexture(gl.TEXTURE_2D, this.heightMap);
            gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
            gl.vertexAttribPointer(positionAttrib, 2, gl.FLOAT, false, 0, 0);
            gl.bindBuffer(gl.ARRAY_BUFFER, this.instanceBuffer);
            gl.vertexAttribPointer(instanceAttrib, 1, gl.FLOAT, false, 0, 0);
            instancedArrays.vertexAttribDivisorANGLE(instanceAttrib, 1);
            gl.bindBuffer(gl.ARRAY_BUFFER, this.textureBuffer);
            gl.vertexAttribPointer(texturesAttrib, 4, gl.UNSIGNED_BYTE, false, 0, 0);
            instancedArrays.vertexAttribDivisorANGLE(texturesAttrib, 1);
            gl.bindBuffer(gl.ARRAY_BUFFER, this.variationBuffer);
            gl.vertexAttribPointer(variationsAttrib, 4, gl.UNSIGNED_BYTE, false, 0, 0);
            instancedArrays.vertexAttribDivisorANGLE(variationsAttrib, 1);
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.faceBuffer);
            gl.uniform1f(uniforms.u_baseTileset, 0);
            for (let i = 0, l = Math.min(tilesetCount, 15); i < l; i++) {
                let isExtended = tilesetTextures[i].width > tilesetTextures[i].height ? 1 : 0;
                gl.uniform1f(uniforms[`u_extended[${i}]`], isExtended);
                gl.uniform1i(uniforms[`u_tilesets[${i}]`], i);
                webgl.bindTexture(tilesetTextures[i], i);
            }
            instancedArrays.drawElementsInstancedANGLE(gl.TRIANGLES, 6, gl.UNSIGNED_BYTE, 0, this.rows * this.columns);
            if (tilesetCount > 15) {
                gl.uniform1f(uniforms.u_baseTileset, 15);
                for (let i = 0, l = tilesetCount - 15; i < l; i++) {
                    let isExtended = tilesetTextures[i + 15].width > tilesetTextures[i + 15].height ? 1 : 0;
                    gl.uniform1f(uniforms[`u_extended[${i}]`], isExtended);
                    webgl.bindTexture(tilesetTextures[i + 15], i);
                }
                instancedArrays.drawElementsInstancedANGLE(gl.TRIANGLES, 6, gl.UNSIGNED_BYTE, 0, this.rows * this.columns);
            }
            instancedArrays.vertexAttribDivisorANGLE(texturesAttrib, 0);
            instancedArrays.vertexAttribDivisorANGLE(variationsAttrib, 0);
            instancedArrays.vertexAttribDivisorANGLE(instanceAttrib, 0);
        }
    }
    renderWater() {
        if (this.terrainReady) {
            let gl = this.viewer.gl;
            let webgl = this.viewer.webgl;
            let instancedArrays = webgl.extensions.ANGLE_instanced_arrays;
            let shader = this.viewer.waterShader;
            let uniforms = shader.uniforms;
            let attribs = shader.attribs;
            let instanceAttrib = attribs.a_InstanceID;
            let positionAttrib = attribs.a_position;
            let isWaterAttrib = attribs.a_isWater;
            gl.depthMask(false);
            gl.enable(gl.BLEND);
            gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
            webgl.useShader(shader);
            gl.uniformMatrix4fv(uniforms.u_VP, false, this.worldScene.camera.viewProjectionMatrix);
            gl.uniform2fv(uniforms.u_offset, this.centerOffset);
            gl.uniform2f(uniforms.u_size, this.columns, this.rows);
            gl.uniform1i(uniforms.u_heightMap, 0);
            gl.uniform1i(uniforms.u_waterHeightMap, 1);
            gl.uniform1i(uniforms.u_waterTexture, 2);
            gl.uniform1f(uniforms.u_offsetHeight, this.waterHeightOffset);
            gl.uniform4fv(uniforms.u_maxDeepColor, this.maxDeepColor);
            gl.uniform4fv(uniforms.u_minDeepColor, this.minDeepColor);
            gl.uniform4fv(uniforms.u_maxShallowColor, this.maxShallowColor);
            gl.uniform4fv(uniforms.u_minShallowColor, this.minShallowColor);
            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, this.heightMap);
            gl.activeTexture(gl.TEXTURE1);
            gl.bindTexture(gl.TEXTURE_2D, this.waterHeightMap);
            webgl.bindTexture(this.waterTextures[this.waterIndex | 0], 2);
            gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
            gl.vertexAttribPointer(positionAttrib, 2, gl.FLOAT, false, 8, 0);
            gl.bindBuffer(gl.ARRAY_BUFFER, this.instanceBuffer);
            gl.vertexAttribPointer(instanceAttrib, 1, gl.FLOAT, false, 4, 0);
            instancedArrays.vertexAttribDivisorANGLE(instanceAttrib, 1);
            gl.bindBuffer(gl.ARRAY_BUFFER, this.waterBuffer);
            gl.vertexAttribPointer(isWaterAttrib, 1, gl.UNSIGNED_BYTE, false, 1, 0);
            instancedArrays.vertexAttribDivisorANGLE(isWaterAttrib, 1);
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.faceBuffer);
            instancedArrays.drawElementsInstancedANGLE(gl.TRIANGLES, 6, gl.UNSIGNED_BYTE, 0, this.rows * this.columns);
            instancedArrays.vertexAttribDivisorANGLE(isWaterAttrib, 0);
            instancedArrays.vertexAttribDivisorANGLE(instanceAttrib, 0);
        }
    }
    renderCliffs() {
        if (this.cliffsReady) {
            let gl = this.viewer.gl;
            let webgl = this.viewer.webgl;
            let instancedArrays = webgl.extensions.ANGLE_instanced_arrays;
            let vertexArrayObject = webgl.extensions.OES_vertex_array_object;
            let shader = this.viewer.cliffShader;
            let attribs = shader.attribs;
            let uniforms = shader.uniforms;
            gl.disable(gl.BLEND);
            shader.use();
            gl.uniformMatrix4fv(uniforms.u_VP, false, this.worldScene.camera.viewProjectionMatrix);
            gl.uniform1i(uniforms.u_heightMap, 0);
            gl.uniform2f(uniforms.u_pixel, 1 / (this.columns + 1), 1 / (this.rows + 1));
            gl.uniform2fv(uniforms.u_centerOffset, this.centerOffset);
            gl.uniform1i(uniforms.u_texture1, 1);
            gl.uniform1i(uniforms.u_texture2, 2);
            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, this.cliffHeightMap);
            gl.activeTexture(gl.TEXTURE1);
            gl.bindTexture(gl.TEXTURE_2D, this.cliffTextures[0].webglResource);
            if (this.cliffTextures.length > 1) {
                gl.activeTexture(gl.TEXTURE2);
                gl.bindTexture(gl.TEXTURE_2D, this.cliffTextures[1].webglResource);
            }
            // Set instanced attributes.
            if (!vertexArrayObject) {
                instancedArrays.vertexAttribDivisorANGLE(attribs.a_instancePosition, 1);
                instancedArrays.vertexAttribDivisorANGLE(attribs.a_instanceTexture, 1);
            }
            // Render the cliffs.
            for (let cliff of this.cliffModels) {
                cliff.render(shader);
            }
            // Clear instanced attributes.
            if (!vertexArrayObject) {
                instancedArrays.vertexAttribDivisorANGLE(attribs.a_instancePosition, 0);
                instancedArrays.vertexAttribDivisorANGLE(attribs.a_instanceTexture, 0);
            }
        }
    }
    cliffFileName(bottomLeftLayer, bottomRightLayer, topLeftLayer, topRightLayer, base) {
        return String.fromCharCode(65 + bottomLeftLayer - base) +
            String.fromCharCode(65 + topLeftLayer - base) +
            String.fromCharCode(65 + topRightLayer - base) +
            String.fromCharCode(65 + bottomRightLayer - base);
    }
    getVariation(groundTexture, variation) {
        let texture = this.tilesetTextures[groundTexture];
        // Extended?
        if (texture.width > texture.height) {
            if (variation < 16) {
                return 16 + variation;
            }
            else if (variation === 16) {
                return 15;
            }
            else {
                return 0;
            }
        }
        else {
            if (variation === 0) {
                return 0;
            }
            else {
                return 15;
            }
        }
    }
    /**
     * Is the corner at the given column and row a cliff?
     */
    isCliff(column, row) {
        if (column < 1 || column > this.columns - 1 || row < 1 || row > this.rows - 1) {
            return false;
        }
        let corners = this.corners;
        let bottomLeft = corners[row][column].layerHeight;
        let bottomRight = corners[row][column + 1].layerHeight;
        let topLeft = corners[row + 1][column].layerHeight;
        let topRight = corners[row + 1][column + 1].layerHeight;
        return bottomLeft !== bottomRight || bottomLeft !== topLeft || bottomLeft !== topRight;
    }
    /**
     * Is the tile at the given column and row water?
     */
    isWater(column, row) {
        let corners = this.corners;
        return corners[row][column].water || corners[row][column + 1].water || corners[row + 1][column].water || corners[row + 1][column + 1].water;
    }
    /**
     * Given a cliff index, get its ground texture index.
     * This is an index into the tilset textures.
     */
    cliffGroundIndex(whichCliff) {
        let whichTileset = this.cliffTilesets[whichCliff].groundTile;
        let tilesets = this.tilesets;
        for (let i = 0, l = tilesets.length; i < l; i++) {
            if (tilesets[i].tileID === whichTileset) {
                return i;
            }
        }
    }
    /**
     * Get the ground texture of a corner, whether it's normal ground, a cliff, or a blighted corner.
     */
    cornerTexture(column, row) {
        let corners = this.corners;
        let columns = this.columns;
        let rows = this.rows;
        for (let y = -1; y < 1; y++) {
            for (let x = -1; x < 1; x++) {
                if (column + x > 0 && column + x < columns - 1 && row + y > 0 && row + y < rows - 1) {
                    if (this.isCliff(column + x, row + y)) {
                        let texture = corners[row + y][column + x].cliffTexture;
                        if (texture === 15) {
                            texture = 1;
                        }
                        return this.cliffGroundIndex(texture);
                    }
                }
            }
        }
        let corner = corners[row][column];
        // Is this corner blighted?
        if (corner.blight) {
            return this.blightTextureIndex;
        }
        return corner.groundTexture;
    }
    applyModificationFile(dataMap, metadataMap, modificationFile) {
        if (modificationFile) {
            // Modifications to built-in objects
            this.applyModificationTable(dataMap, metadataMap, modificationFile.originalTable);
            // Declarations of user-defined objects
            this.applyModificationTable(dataMap, metadataMap, modificationFile.customTable);
        }
    }
    applyModificationTable(dataMap, metadataMap, modificationTable) {
        for (let modificationObject of modificationTable.objects) {
            let row;
            if (modificationObject.newId !== '') {
                row = dataMap.getRow(modificationObject.newId);
                if (!row) {
                    row = Object.assign({}, dataMap.getRow(modificationObject.oldId));
                    dataMap.setRow(modificationObject.newId, row);
                }
            }
            else {
                row = dataMap.getRow(modificationObject.oldId);
            }
            for (let modification of modificationObject.modifications) {
                let metadata = metadataMap.getRow(modification.id);
                if (metadata) {
                    row[metadata.field] = modification.value;
                }
                else {
                    console.warn('Unknown modification ID', modification);
                }
            }
        }
    }
    groundNormal(out, x, y) {
        let centerOffset = this.centerOffset;
        let mapSize = this.mapSize;
        x = (x - centerOffset[0]) / 128;
        y = (y - centerOffset[1]) / 128;
        let cellX = x | 0;
        let cellY = y | 0;
        // See if this coordinate is in the map
        if (cellX >= 0 && cellX < mapSize[0] - 1 && cellY >= 0 && cellY < mapSize[1] - 1) {
            // See http://gamedev.stackexchange.com/a/24574
            let corners = this.corners;
            let bottomLeft = corners[cellY][cellX].groundHeight;
            let bottomRight = corners[cellY][cellX + 1].groundHeight;
            let topLeft = corners[cellY + 1][cellX].groundHeight;
            let topRight = corners[cellY + 1][cellX + 1].groundHeight;
            let sqX = x - cellX;
            let sqY = y - cellY;
            if (sqX + sqY < 1) {
                gl_matrix_1.vec3.set(normalHeap1, 1, 0, bottomRight - bottomLeft);
                gl_matrix_1.vec3.set(normalHeap2, 0, 1, topLeft - bottomLeft);
            }
            else {
                gl_matrix_1.vec3.set(normalHeap1, -1, 0, topRight - topLeft);
                gl_matrix_1.vec3.set(normalHeap2, 0, 1, topRight - bottomRight);
            }
            gl_matrix_1.vec3.normalize(out, gl_matrix_1.vec3.cross(out, normalHeap1, normalHeap2));
        }
        else {
            gl_matrix_1.vec3.set(out, 0, 0, 1);
        }
        return out;
    }
}
exports.default = War3MapViewerMap;
/*
  heightAt(location) {
    let heightMap = this.heightMap,
      offset = this.offset,
      x = (location[0] / 128) + offset[0],
      y = (location[1] / 128) + offset[1];

    let minY = Math.floor(y),
      maxY = Math.ceil(y),
      minX = Math.floor(x),
      maxX = Math.ceil(x);

    // See if this coordinate is in the map
    if (maxY > 0 && minY < heightMap.length - 1 && maxX > 0 && minX < heightMap[0].length - 1) {
      // See http://gamedev.stackexchange.com/a/24574
      let triZ0 = heightMap[minY][minX],
        triZ1 = heightMap[minY][maxX],
        triZ2 = heightMap[maxY][minX],
        triZ3 = heightMap[maxY][maxX],
        sqX = x - minX,
        sqZ = y - minY,
        height;

      if ((sqX + sqZ) < 1) {
        height = triZ0 + (triZ1 - triZ0) * sqX + (triZ2 - triZ0) * sqZ;
      } else {
        height = triZ3 + (triZ1 - triZ3) * (1 - sqZ) + (triZ2 - triZ3) * (1 - sqX);
      }

      return height * 128;
    }

    return 0;
  }
  */
