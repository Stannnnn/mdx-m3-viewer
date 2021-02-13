"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sequenceSorter(a, b) {
    return a.sequence.rarity - b.sequence.rarity;
}
function filterSequences(type, sequences) {
    let filtered = [];
    for (let i = 0, l = sequences.length; i < l; i++) {
        let sequence = sequences[i], name = sequence.name.split('-')[0].replace(/\d/g, '').trim().toLowerCase();
        if (name === type) {
            filtered.push({ sequence, index: i });
        }
    }
    return filtered;
}
function selectSequence(type, sequences) {
    let filtered = filterSequences(type, sequences);
    filtered.sort(sequenceSorter);
    for (var i = 0, l = filtered.length; i < l; i++) {
        let sequence = filtered[i].sequence;
        let rarity = sequence.rarity;
        if (rarity === 0) {
            break;
        }
        if (Math.random() * 10 > rarity) {
            return filtered[i];
        }
    }
    let sequencesLeft = filtered.length - i;
    let random = i + Math.floor(Math.random() * sequencesLeft);
    let sequence = filtered[random];
    return sequence;
}
function randomStandSequence(target) {
    let model = target.model;
    let sequences = model.sequences;
    let sequence = selectSequence('stand', sequences);
    if (sequence) {
        target.setSequence(sequence.index);
    }
}
exports.default = randomStandSequence;
