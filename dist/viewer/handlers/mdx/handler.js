"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../../../parsers/mdlx/model");
const isformat_1 = require("../../../parsers/mdlx/isformat");
const model_2 = require("./model");
const texture_1 = require("./texture");
const standard_vert_1 = require("./shaders/standard.vert");
const standard_frag_1 = require("./shaders/standard.frag");
const hd_vert_1 = require("./shaders/hd.vert");
const hd_frag_1 = require("./shaders/hd.frag");
const particles_vert_1 = require("./shaders/particles.vert");
const particles_frag_1 = require("./shaders/particles.frag");
exports.default = {
    load(viewer, pathSolver, reforgedTeams) {
        let gl = viewer.gl;
        let webgl = viewer.webgl;
        // Bone textures.
        if (!webgl.ensureExtension('OES_texture_float')) {
            throw new Error('MDX: No float texture support!');
        }
        // Geometry emitters.
        if (!webgl.ensureExtension('ANGLE_instanced_arrays')) {
            throw new Error('MDX: No instanced rendering support!');
        }
        let standardShader = webgl.createShader(standard_vert_1.default, standard_frag_1.default);
        let extendedShader = webgl.createShader('#define EXTENDED_BONES\n' + standard_vert_1.default, standard_frag_1.default);
        let hdShader = webgl.createShader(hd_vert_1.default, hd_frag_1.default);
        let particlesShader = webgl.createShader(particles_vert_1.default, particles_frag_1.default);
        let rectBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, rectBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Uint8Array([0, 1, 2, 0, 2, 3]), gl.STATIC_DRAW);
        let teamColors = [];
        let teamGlows = [];
        let teams = reforgedTeams ? 28 : 14;
        let ext = reforgedTeams ? 'dds' : 'blp';
        let params = reforgedTeams ? { reforged: true } : {};
        for (let i = 0; i < teams; i++) {
            let id = ('' + i).padStart(2, '0');
            let end = `${id}.${ext}`;
            let teamColor = new texture_1.default(1, true, true);
            let teamGlow = new texture_1.default(2, true, true);
            viewer.load(`ReplaceableTextures\\TeamColor\\TeamColor${end}`, pathSolver, params)
                .then((texture) => teamColor.texture = texture);
            viewer.load(`ReplaceableTextures\\TeamGlow\\TeamGlow${end}`, pathSolver, params)
                .then((texture) => teamGlow.texture = texture);
            teamColors[i] = teamColor;
            teamGlows[i] = teamGlow;
        }
        viewer.sharedCache.set('mdx', {
            // Shaders.
            standardShader,
            extendedShader,
            hdShader,
            particlesShader,
            // Geometry emitters buffer.
            rectBuffer,
            // Team color/glow textures.
            teamColors,
            teamGlows,
        });
    },
    isValidSource(object) {
        if (object instanceof model_1.default) {
            return true;
        }
        return isformat_1.isMdx(object) || isformat_1.isMdl(object);
    },
    resource: model_2.default,
};
