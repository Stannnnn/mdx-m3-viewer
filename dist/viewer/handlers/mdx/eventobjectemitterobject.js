"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const urlwithparams_1 = require("../../../common/urlwithparams");
const audio_1 = require("../../../common/audio");
const mappeddata_1 = require("../../../utils/mappeddata");
const genericobject_1 = require("./genericobject");
const filtermode_1 = require("./filtermode");
const geometryemitterfuncs_1 = require("./geometryemitterfuncs");
const texture_1 = require("./texture");
const mappedDataCallback = (data) => new mappeddata_1.MappedData(data);
const decodedDataCallback = (data) => audio_1.decodeAudioData(data);
/**
 * An event object.
 */
class EventObjectEmitterObject extends genericobject_1.default {
    constructor(model, eventObject, index) {
        super(model, eventObject, index);
        this.geometryEmitterType = -1;
        this.globalSequence = -1;
        this.defval = new Uint32Array(1);
        this.internalModel = null;
        this.internalTexture = null;
        this.colors = [];
        this.intervalTimes = new Float32Array(3);
        this.scale = 0;
        this.columns = 0;
        this.rows = 0;
        this.lifeSpan = 0;
        this.blendSrc = 0;
        this.blendDst = 0;
        this.intervals = [];
        this.distanceCutoff = 0;
        this.maxDistance = 0;
        this.minDistance = 0;
        this.pitch = 0;
        this.pitchVariance = 0;
        this.volume = 0;
        this.decodedBuffers = [];
        this.ok = false;
        let viewer = model.viewer;
        let name = eventObject.name;
        let type = name.substring(0, 3);
        let id = name.substring(4);
        // Same thing
        if (type === 'FPT') {
            type = 'SPL';
        }
        if (type === 'SPL') {
            this.geometryEmitterType = geometryemitterfuncs_1.EMITTER_SPLAT;
        }
        else if (type === 'UBR') {
            this.geometryEmitterType = geometryemitterfuncs_1.EMITTER_UBERSPLAT;
        }
        this.type = type;
        this.id = id;
        this.tracks = eventObject.tracks;
        let globalSequenceId = eventObject.globalSequenceId;
        if (globalSequenceId !== -1) {
            this.globalSequence = model.globalSequences[globalSequenceId];
        }
        let tables = [];
        let pathSolver = model.pathSolver;
        // Nothing to do without a path solver.
        if (!pathSolver) {
            return;
        }
        // Sometimes TS isn't the brightest.
        let pathSolverAsPathSolver = pathSolver;
        let solverParams = model.solverParams;
        if (type === 'SPN') {
            tables[0] = viewer.loadGeneric(urlwithparams_1.default(pathSolver('Splats\\SpawnData.slk'), solverParams), 'text', mappedDataCallback);
        }
        else if (type === 'SPL') {
            tables[0] = viewer.loadGeneric(urlwithparams_1.default(pathSolver('Splats\\SplatData.slk'), solverParams), 'text', mappedDataCallback);
        }
        else if (type === 'UBR') {
            tables[0] = viewer.loadGeneric(urlwithparams_1.default(pathSolver('Splats\\UberSplatData.slk'), solverParams), 'text', mappedDataCallback);
        }
        else if (type === 'SND') {
            if (!model.reforged) {
                tables.push(viewer.loadGeneric(urlwithparams_1.default(pathSolver('UI\\SoundInfo\\AnimLookups.slk'), solverParams), 'text', mappedDataCallback));
            }
            tables.push(viewer.loadGeneric(urlwithparams_1.default(pathSolver('UI\\SoundInfo\\AnimSounds.slk'), solverParams), 'text', mappedDataCallback));
        }
        else {
            // Units\Critters\BlackStagMale\BlackStagMale.mdx has an event object named "Point01".
            return;
        }
        let resolve = viewer.promise();
        Promise.all(tables)
            .then((tables) => {
            for (let table of tables) {
                if (!table) {
                    resolve();
                    return;
                }
            }
            let tablesAsGeneric = tables;
            let firstTable = tablesAsGeneric[0].data;
            let row = firstTable.getRow(this.id);
            if (row) {
                if (type === 'SPN') {
                    viewer.load(row.Model.replace('.mdl', '.mdx'), pathSolverAsPathSolver, model.solverParams)
                        .then((model) => {
                        if (model) {
                            this.internalModel = model;
                            this.ok = true;
                        }
                    });
                }
                else if (type === 'SPL' || type === 'UBR') {
                    let texturesExt = model.reforged ? '.dds' : '.blp';
                    this.internalTexture = new texture_1.default(0, true, true);
                    viewer.load(`replaceabletextures/splats/${row.file}${texturesExt}`, pathSolverAsPathSolver, model.solverParams)
                        .then((texture) => {
                        if (texture) {
                            this.internalTexture.texture = texture;
                            this.ok = true;
                        }
                    });
                    this.scale = row.Scale;
                    this.colors[0] = new Float32Array([row.StartR, row.StartG, row.StartB, row.StartA]);
                    this.colors[1] = new Float32Array([row.MiddleR, row.MiddleG, row.MiddleB, row.MiddleA]);
                    this.colors[2] = new Float32Array([row.EndR, row.EndG, row.EndB, row.EndA]);
                    if (type === 'SPL') {
                        this.columns = row.Columns;
                        this.rows = row.Rows;
                        this.lifeSpan = row.Lifespan + row.Decay;
                        this.intervalTimes[0] = row.Lifespan;
                        this.intervalTimes[1] = row.Decay;
                        this.intervals[0] = new Float32Array([row.UVLifespanStart, row.UVLifespanEnd, row.LifespanRepeat]);
                        this.intervals[1] = new Float32Array([row.UVDecayStart, row.UVDecayEnd, row.DecayRepeat]);
                    }
                    else {
                        this.columns = 1;
                        this.rows = 1;
                        this.lifeSpan = row.BirthTime + row.PauseTime + row.Decay;
                        this.intervalTimes[0] = row.BirthTime;
                        this.intervalTimes[1] = row.PauseTime;
                        this.intervalTimes[2] = row.Decay;
                    }
                    let blendModes = filtermode_1.emitterFilterMode(row.BlendMode, viewer.gl);
                    this.blendSrc = blendModes[0];
                    this.blendDst = blendModes[1];
                    this.ok = true;
                }
                else if (type === 'SND') {
                    // Only load sounds if audio is enabled.
                    // This is mostly to save on bandwidth and loading time, especially when loading full maps.
                    if (viewer.audioEnabled) {
                        let animSounds = tablesAsGeneric[1].data;
                        row = animSounds.getRow(row.SoundLabel);
                        if (row) {
                            this.distanceCutoff = row.DistanceCutoff;
                            this.maxDistance = row.MaxDistance;
                            this.minDistance = row.MinDistance;
                            this.pitch = row.Pitch;
                            this.pitchVariance = row.PitchVariance;
                            this.volume = row.Volume;
                            let fileNames = row.FileNames.split(',');
                            let resources = fileNames.map((fileName) => viewer.loadGeneric(urlwithparams_1.default(pathSolverAsPathSolver(row.DirectoryBase + fileName), model.solverParams), 'arrayBuffer', decodedDataCallback));
                            Promise.all(resources)
                                .then((resources) => {
                                for (let resource of resources) {
                                    this.decodedBuffers.push(resource.data);
                                }
                                this.ok = true;
                            });
                        }
                    }
                }
            }
            else {
                console.warn('Unknown event object ID', type, this.id);
            }
            resolve();
        });
    }
    getValue(out, instance) {
        if (this.globalSequence !== -1) {
            let globalSequence = this.globalSequence;
            return this.getValueAtTime(out, instance.counter % globalSequence, 0, globalSequence);
        }
        else if (instance.sequence !== -1) {
            let interval = this.model.sequences[instance.sequence].interval;
            return this.getValueAtTime(out, instance.frame, interval[0], interval[1]);
        }
        else {
            out[0] = this.defval[0];
            return -1;
        }
    }
    getValueAtTime(out, frame, start, end) {
        let tracks = this.tracks;
        if (frame >= start && frame <= end) {
            for (let i = tracks.length - 1; i > -1; i--) {
                if (tracks[i] < start) {
                    out[0] = 0;
                    return i;
                }
                else if (tracks[i] <= frame) {
                    out[0] = 1;
                    return i;
                }
            }
        }
        out[0] = 0;
        return -1;
    }
}
exports.default = EventObjectEmitterObject;
