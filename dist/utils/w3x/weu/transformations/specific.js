"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformerIsUnitType = exports.transformerIsUnitRace = exports.transformerIsUnitOwnedByPlayer = void 0;
const conversions_1 = require("../conversions");
/**
 * IsUnitOwnedByPlayer(whichUnit, whichPlayer) == boolean
 * =>
 * GetOwningPlayer(whichUnit) == whichPlayer
 */
function transformerIsUnitOwnedByPlayer(data, object) {
    let parameter = data.stack[1];
    let comparator = data.stack[2];
    let comparatorParameters = comparator.parameters;
    if (comparator.name !== 'OperatorCompareBoolean') {
        return false;
    }
    let otherParameter;
    if (comparator.parameters[0] === parameter) {
        otherParameter = comparatorParameters[2];
    }
    else {
        otherParameter = comparatorParameters[0];
    }
    let trueOrFalse = conversions_1.convertParameterInline(data, otherParameter, 'boolean');
    if (trueOrFalse !== 'true' && trueOrFalse !== 'false') {
        return false;
    }
    // Change to a player comparison.
    comparator.name = 'OperatorComparePlayer';
    let parameters = object.parameters;
    let whichPlayer = parameters[1];
    // Change IsUnitOwnedByPlayer(whichUnit, whichPlayer) to GetOwningPlayer(whichUnit)
    parameter.value = 'GetOwningPlayer';
    object.name = 'GetOwningPlayer';
    object.parameters.length = 1;
    comparatorParameters[0] = parameter;
    // Equal or not equal.
    if (trueOrFalse === 'true') {
        comparatorParameters[1].value = 'OperatorEqualENE';
    }
    else {
        comparatorParameters[1].value = 'OperatorNotEqualENE';
    }
    // Change the boolean to whichPlayer.
    comparatorParameters[2] = whichPlayer;
    return true;
}
exports.transformerIsUnitOwnedByPlayer = transformerIsUnitOwnedByPlayer;
/**
 * IsUnitRace(whichUnit, whichRace) == boolean
 * =>
 * GetUnitRace(whichUnit) == whichRace
 */
function transformerIsUnitRace(data, object) {
    let parameter = data.stack[1];
    let comparator = data.stack[2];
    let comparatorParameters = comparator.parameters;
    if (comparator.name !== 'OperatorCompareBoolean') {
        return false;
    }
    let otherParameter;
    if (comparator.parameters[0] === parameter) {
        otherParameter = comparatorParameters[2];
    }
    else {
        otherParameter = comparatorParameters[0];
    }
    let trueOrFalse = conversions_1.convertParameterInline(data, otherParameter, 'boolean');
    if (trueOrFalse !== 'true' && trueOrFalse !== 'false') {
        return false;
    }
    // Change to a race comparison.
    comparator.name = 'OperatorCompareRace';
    let parameters = object.parameters;
    let whichRace = parameters[1];
    // Change IsUnitRace(whichUnit, whichRace) to GetUnitRace(whichUnit)
    parameter.value = 'GetUnitRace';
    object.name = 'GetUnitRace';
    object.parameters.length = 1;
    comparatorParameters[0] = parameter;
    let isEqual = comparatorParameters[1].value === 'OperatorEqualENE';
    let isTrue = trueOrFalse === 'true';
    // Essentially a XOR between the booleans.
    if (isEqual === isTrue) {
        comparatorParameters[1].value = 'OperatorEqualENE';
    }
    else {
        comparatorParameters[1].value = 'OperatorNotEqualENE';
    }
    comparatorParameters[1] = whichRace;
    return true;
}
exports.transformerIsUnitRace = transformerIsUnitRace;
/**
 * IsUnitType(whichUnit, UNIT_TYPE_DEAD) == boolean
 * =>
 * IsUnitDeadBJ(whichUnit) == boolean
 */
function transformerIsUnitType(data, object) {
    let comparator = data.stack[2];
    if (comparator.name !== 'OperatorCompareBoolean') {
        return false;
    }
    let whichUnitType = conversions_1.convertParameterInline(data, object.parameters[1], 'unittype');
    if (whichUnitType !== 'UNIT_TYPE_DEAD') {
        return false;
    }
    let parameter = data.stack[1];
    // Change IsUnitType(whichUnit, UNIT_TYPE_DEAD) to IsUnitDeadBJ(whichUnit)
    parameter.value = 'IsUnitDeadBJ';
    object.name = 'IsUnitDeadBJ';
    object.parameters.length = 1;
    return true;
}
exports.transformerIsUnitType = transformerIsUnitType;
