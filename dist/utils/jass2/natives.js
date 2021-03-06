"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const lua_1 = require("fengari/src/lua");
// @ts-ignore
const lauxlib_1 = require("fengari/src/lauxlib");
const types_1 = require("./types");
/**
 * constant native ConvertRace takes integer i returns race
 */
function ConvertRace(C, L) {
    let i = lauxlib_1.luaL_checkinteger(L, 1);
    lua_1.lua_pushlightuserdata(L, C.constantHandles.races[i]);
    return 1;
}
/**
 * constant native ConvertAllianceType takes integer i returns alliancetype
 */
function ConvertAllianceType(C, L) {
    let i = lauxlib_1.luaL_checkinteger(L, 1);
    lua_1.lua_pushlightuserdata(L, C.constantHandles.allianceTypes[i]);
    return 1;
}
/**
 * constant native ConvertRacePref takes integer i returns racepreference
 */
function ConvertRacePref(C, L) {
    let i = lauxlib_1.luaL_checkinteger(L, 1);
    lua_1.lua_pushlightuserdata(L, C.constantHandles.racePrefs[i]);
    return 1;
}
/**
 * constant native ConvertIGameState takes integer i returns igamestate
 */
function ConvertIGameState(C, L) {
    let i = lauxlib_1.luaL_checkinteger(L, 1);
    lua_1.lua_pushlightuserdata(L, C.constantHandles.gameStates[i]);
    return 1;
}
/**
 * constant native ConvertFGameState takes integer i returns fgamestate
 */
function ConvertFGameState(C, L) {
    let i = lauxlib_1.luaL_checkinteger(L, 1);
    lua_1.lua_pushlightuserdata(L, C.constantHandles.gameStates[i]);
    return 1;
}
/**
 * constant native ConvertPlayerState takes integer i returns playerstate
 */
function ConvertPlayerState(C, L) {
    let i = lauxlib_1.luaL_checkinteger(L, 1);
    lua_1.lua_pushlightuserdata(L, C.constantHandles.playerStates[i]);
    return 1;
}
/**
 * constant native ConvertPlayerScore takes integer i returns playerscore
 */
function ConvertPlayerScore(C, L) {
    let i = lauxlib_1.luaL_checkinteger(L, 1);
    lua_1.lua_pushlightuserdata(L, C.constantHandles.playerScores[i]);
    return 1;
}
/**
 * constant native ConvertPlayerGameResult takes integer i returns playergameresult
 */
function ConvertPlayerGameResult(C, L) {
    let i = lauxlib_1.luaL_checkinteger(L, 1);
    lua_1.lua_pushlightuserdata(L, C.constantHandles.playerGameResults[i]);
    return 1;
}
/**
 * constant native ConvertUnitState takes integer i returns unitstate
 */
function ConvertUnitState(C, L) {
    let i = lauxlib_1.luaL_checkinteger(L, 1);
    lua_1.lua_pushlightuserdata(L, C.constantHandles.unitStates[i]);
    return 1;
}
/**
 * constant native ConvertAIDifficulty takes integer i returns aidifficulty
 */
function ConvertAIDifficulty(C, L) {
    let i = lauxlib_1.luaL_checkinteger(L, 1);
    lua_1.lua_pushlightuserdata(L, C.constantHandles.aiDifficulties[i]);
    return 1;
}
/**
 * constant native ConvertGameEvent takes integer i returns gameevent
 */
function ConvertGameEvent(C, L) {
    let i = lauxlib_1.luaL_checkinteger(L, 1);
    lua_1.lua_pushlightuserdata(L, C.constantHandles.events[i]);
    return 1;
}
/**
 * constant native ConvertPlayerEvent takes integer i returns playerevent
 */
function ConvertPlayerEvent(C, L) {
    let i = lauxlib_1.luaL_checkinteger(L, 1);
    lua_1.lua_pushlightuserdata(L, C.constantHandles.events[i]);
    return 1;
}
/**
 * constant native ConvertPlayerUnitEvent takes integer i returns playerunitevent
 */
function ConvertPlayerUnitEvent(C, L) {
    let i = lauxlib_1.luaL_checkinteger(L, 1);
    lua_1.lua_pushlightuserdata(L, C.constantHandles.events[i]);
    return 1;
}
/**
 * constant native ConvertWidgetEvent takes integer i returns widgetevent
 */
function ConvertWidgetEvent(C, L) {
    let i = lauxlib_1.luaL_checkinteger(L, 1);
    lua_1.lua_pushlightuserdata(L, C.constantHandles.events[i]);
    return 1;
}
/**
 * constant native ConvertDialogEvent takes integer i returns dialogevent
 */
function ConvertDialogEvent(C, L) {
    let i = lauxlib_1.luaL_checkinteger(L, 1);
    lua_1.lua_pushlightuserdata(L, C.constantHandles.events[i]);
    return 1;
}
/**
 * constant native ConvertUnitEvent takes integer i returns unitevent
 */
function ConvertUnitEvent(C, L) {
    let i = lauxlib_1.luaL_checkinteger(L, 1);
    lua_1.lua_pushlightuserdata(L, C.constantHandles.events[i]);
    return 1;
}
/**
 * constant native ConvertLimitOp takes integer i returns limitop
 */
function ConvertLimitOp(C, L) {
    let i = lauxlib_1.luaL_checkinteger(L, 1);
    lua_1.lua_pushlightuserdata(L, C.constantHandles.limitOps[i]);
    return 1;
}
/**
 * constant native ConvertUnitType takes integer i returns unittype
 */
function ConvertUnitType(C, L) {
    let i = lauxlib_1.luaL_checkinteger(L, 1);
    lua_1.lua_pushlightuserdata(L, C.constantHandles.unitTypes[i]);
    return 1;
}
/**
 * constant native ConvertGameSpeed takes integer i returns gamespeed
 */
function ConvertGameSpeed(C, L) {
    let i = lauxlib_1.luaL_checkinteger(L, 1);
    lua_1.lua_pushlightuserdata(L, C.constantHandles.gameSpeeds[i]);
    return 1;
}
/**
 * constant native ConvertPlacement takes integer i returns placement
 */
function ConvertPlacement(C, L) {
    let i = lauxlib_1.luaL_checkinteger(L, 1);
    lua_1.lua_pushlightuserdata(L, C.constantHandles.placements[i]);
    return 1;
}
/**
 * constant native ConvertStartLocPrio takes integer i returns startlocprio
 */
function ConvertStartLocPrio(C, L) {
    let i = lauxlib_1.luaL_checkinteger(L, 1);
    lua_1.lua_pushlightuserdata(L, C.constantHandles.startLocPrios[i]);
    return 1;
}
/**
 * constant native ConvertGameDifficulty takes integer i returns gamedifficulty
 */
function ConvertGameDifficulty(C, L) {
    let i = lauxlib_1.luaL_checkinteger(L, 1);
    lua_1.lua_pushlightuserdata(L, C.constantHandles.gameDifficulties[i]);
    return 1;
}
/**
 * constant native ConvertGameType takes integer i returns gametype
 */
function ConvertGameType(C, L) {
    let i = lauxlib_1.luaL_checkinteger(L, 1);
    lua_1.lua_pushlightuserdata(L, C.constantHandles.gameTypes[i]);
    return 1;
}
/**
 * constant native ConvertMapFlag takes integer i returns mapflag
 */
function ConvertMapFlag(C, L) {
    let i = lauxlib_1.luaL_checkinteger(L, 1);
    lua_1.lua_pushlightuserdata(L, C.constantHandles.mapFlags[i]);
    return 1;
}
/**
 * constant native ConvertMapVisibility takes integer i returns mapvisibility
 */
function ConvertMapVisibility(C, L) {
    let i = lauxlib_1.luaL_checkinteger(L, 1);
    console.warn('ConvertMapVisibility used, but the implementation is unknown');
    lua_1.lua_pushnil(L);
    return 1;
}
/**
 * constant native ConvertMapSetting takes integer i returns mapsetting
 */
function ConvertMapSetting(C, L) {
    let i = lauxlib_1.luaL_checkinteger(L, 1);
    console.warn('ConvertMapSetting used, but the implementation is unknown');
    lua_1.lua_pushnil(L);
    return 1;
}
/**
 * constant native ConvertMapDensity takes integer i returns mapdensity
 */
function ConvertMapDensity(C, L) {
    let i = lauxlib_1.luaL_checkinteger(L, 1);
    lua_1.lua_pushlightuserdata(L, C.constantHandles.mapDensities[i]);
    return 1;
}
/**
 * constant native ConvertMapControl takes integer i returns mapcontrol
 */
function ConvertMapControl(C, L) {
    let i = lauxlib_1.luaL_checkinteger(L, 1);
    lua_1.lua_pushlightuserdata(L, C.constantHandles.mapControls[i]);
    return 1;
}
/**
 * constant native ConvertPlayerColor takes integer i returns playercolor
 */
function ConvertPlayerColor(C, L) {
    let i = lauxlib_1.luaL_checkinteger(L, 1);
    lua_1.lua_pushlightuserdata(L, C.constantHandles.playerColors[i]);
    return 1;
}
/**
 * constant native ConvertPlayerSlotState takes integer i returns playerslotstate
 */
function ConvertPlayerSlotState(C, L) {
    let i = lauxlib_1.luaL_checkinteger(L, 1);
    lua_1.lua_pushlightuserdata(L, C.constantHandles.playerSlotStates[i]);
    return 1;
}
/**
 * constant native ConvertVolumeGroup takes integer i returns volumegroup
 */
function ConvertVolumeGroup(C, L) {
    let i = lauxlib_1.luaL_checkinteger(L, 1);
    lua_1.lua_pushlightuserdata(L, C.constantHandles.volumeGroups[i]);
    return 1;
}
/**
 * constant native ConvertCameraField takes integer i returns camerafield
 */
function ConvertCameraField(C, L) {
    let i = lauxlib_1.luaL_checkinteger(L, 1);
    lua_1.lua_pushlightuserdata(L, C.constantHandles.cameraFields[i]);
    return 1;
}
/**
 * constant native ConvertBlendMode takes integer i returns blendmode
 */
function ConvertBlendMode(C, L) {
    let i = lauxlib_1.luaL_checkinteger(L, 1);
    lua_1.lua_pushlightuserdata(L, C.constantHandles.blendModes[i]);
    return 1;
}
/**
 * constant native ConvertRarityControl takes integer i returns raritycontrol
 */
function ConvertRarityControl(C, L) {
    let i = lauxlib_1.luaL_checkinteger(L, 1);
    lua_1.lua_pushlightuserdata(L, C.constantHandles.rarityControls[i]);
    return 1;
}
/**
 * constant native ConvertTexMapFlags takes integer i returns texmapflags
 */
function ConvertTexMapFlags(C, L) {
    let i = lauxlib_1.luaL_checkinteger(L, 1);
    lua_1.lua_pushlightuserdata(L, C.constantHandles.texMapFlags[i]);
    return 1;
}
/**
 * constant native ConvertFogState takes integer i returns fogstate
 */
function ConvertFogState(C, L) {
    let i = lauxlib_1.luaL_checkinteger(L, 1);
    lua_1.lua_pushlightuserdata(L, C.constantHandles.fogStates[i]);
    return 1;
}
/**
 * constant native ConvertEffectType takes integer i returns effecttype
 */
function ConvertEffectType(C, L) {
    let i = lauxlib_1.luaL_checkinteger(L, 1);
    lua_1.lua_pushlightuserdata(L, C.constantHandles.effectTypes[i]);
    return 1;
}
/**
 * constant native ConvertVersion takes integer i returns version
 */
function ConvertVersion(C, L) {
    let i = lauxlib_1.luaL_checkinteger(L, 1);
    lua_1.lua_pushlightuserdata(L, C.constantHandles.versions[i]);
    return 1;
}
/**
 * constant native ConvertItemType takes integer i returns itemtype
 */
function ConvertItemType(C, L) {
    let i = lauxlib_1.luaL_checkinteger(L, 1);
    lua_1.lua_pushlightuserdata(L, C.constantHandles.itemTypes[i]);
    return 1;
}
/**
 * constant native ConvertAttackType takes integer i returns attacktype
 */
function ConvertAttackType(C, L) {
    let i = lauxlib_1.luaL_checkinteger(L, 1);
    lua_1.lua_pushlightuserdata(L, C.constantHandles.attackTypes[i]);
    return 1;
}
/**
 * constant native ConvertDamageType takes integer i returns damagetype
 */
function ConvertDamageType(C, L) {
    let i = lauxlib_1.luaL_checkinteger(L, 1);
    lua_1.lua_pushlightuserdata(L, C.constantHandles.damageTypes[i]);
    return 1;
}
/**
 * constant native ConvertWeaponType takes integer i returns weapontype
 */
function ConvertWeaponType(C, L) {
    let i = lauxlib_1.luaL_checkinteger(L, 1);
    lua_1.lua_pushlightuserdata(L, C.constantHandles.weaponTypes[i]);
    return 1;
}
/**
 * constant native ConvertSoundType takes integer i returns soundtype
 */
function ConvertSoundType(C, L) {
    let i = lauxlib_1.luaL_checkinteger(L, 1);
    lua_1.lua_pushlightuserdata(L, C.constantHandles.soundTypes[i]);
    return 1;
}
/**
 * constant native ConvertPathingType takes integer i returns pathingtype
 */
function ConvertPathingType(C, L) {
    let i = lauxlib_1.luaL_checkinteger(L, 1);
    lua_1.lua_pushlightuserdata(L, C.constantHandles.pathingTypes[i]);
    return 1;
}
/**
 * constant native ConvertMouseButtonType takes integer i returns mousebuttontype
 */
function ConvertMouseButtonType(C, L) {
    let i = lauxlib_1.luaL_checkinteger(L, 1);
    lua_1.lua_pushlightuserdata(L, C.constantHandles.mouseButtonTypes[i]);
    return 1;
}
/**
 * constant native OrderId takes string orderIdString returns integer
 */
function OrderId(C, L) {
    let orderIdString = lauxlib_1.luaL_checkstring(L, 1);
    console.warn('OrderId was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * constant native OrderId2String takes integer orderId returns string
 */
function OrderId2String(C, L) {
    let orderId = lauxlib_1.luaL_checkinteger(L, 1);
    console.warn('OrderId2String was called but is not implemented :(');
    lua_1.lua_pushstring(L, '');
    return 1;
}
/**
 * constant native UnitId takes string unitIdString returns integer
 */
function UnitId(C, L) {
    let unitIdString = lauxlib_1.luaL_checkstring(L, 1);
    console.warn('UnitId was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * constant native UnitId2String takes integer unitId returns string
 */
function UnitId2String(C, L) {
    let unitId = lauxlib_1.luaL_checkinteger(L, 1);
    console.warn('UnitId2String was called but is not implemented :(');
    lua_1.lua_pushstring(L, '');
    return 1;
}
/**
 * constant native AbilityId takes string abilityIdString returns integer
 */
function AbilityId(C, L) {
    let abilityIdString = lauxlib_1.luaL_checkstring(L, 1);
    console.warn('AbilityId was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * constant native AbilityId2String takes integer abilityId returns string
 */
function AbilityId2String(C, L) {
    let abilityId = lauxlib_1.luaL_checkinteger(L, 1);
    console.warn('AbilityId2String was called but is not implemented :(');
    lua_1.lua_pushstring(L, '');
    return 1;
}
/**
 * constant native GetObjectName takes integer objectId returns string
 */
function GetObjectName(C, L) {
    let objectId = lauxlib_1.luaL_checkinteger(L, 1);
    console.warn('GetObjectName was called but is not implemented :(');
    lua_1.lua_pushstring(L, '');
    return 1;
}
/**
 * constant native GetBJMaxPlayers takes nothing returns integer
 */
function GetBJMaxPlayers(C, L) {
    lua_1.lua_pushinteger(L, 28);
    return 1;
}
/**
 * constant native GetBJPlayerNeutralVictim takes nothing returns integer
 */
function GetBJPlayerNeutralVictim(C, L) {
    lua_1.lua_pushinteger(L, 24);
    return 1;
}
/**
 * constant native GetBJPlayerNeutralExtra takes nothing returns integer
 */
function GetBJPlayerNeutralExtra(C, L) {
    lua_1.lua_pushinteger(L, 25);
    return 1;
}
/**
 * constant native GetBJMaxPlayerSlots takes nothing returns integer
 */
function GetBJMaxPlayerSlots(C, L) {
    lua_1.lua_pushinteger(L, 24);
    return 1;
}
/**
 * constant native GetPlayerNeutralPassive takes nothing returns integer
 */
function GetPlayerNeutralPassive(C, L) {
    lua_1.lua_pushinteger(L, 26);
    return 1;
}
/**
 * constant native GetPlayerNeutralAggressive takes nothing returns integer
 */
function GetPlayerNeutralAggressive(C, L) {
    lua_1.lua_pushinteger(L, 27);
    return 1;
}
/**
 * native Deg2Rad takes real degrees returns real
 */
function Deg2Rad(C, L) {
    let degrees = lauxlib_1.luaL_checknumber(L, 1);
    lua_1.lua_pushnumber(L, degrees * (Math.PI / 180));
    return 1;
}
/**
 * native Rad2Deg takes real radians returns real
 */
function Rad2Deg(C, L) {
    let radians = lauxlib_1.luaL_checknumber(L, 1);
    lua_1.lua_pushnumber(L, radians * (180 / Math.PI));
    return 1;
}
/**
 * native Sin takes real radians returns real
 */
function Sin(C, L) {
    let radians = lauxlib_1.luaL_checknumber(L, 1);
    lua_1.lua_pushnumber(L, Math.sin(radians));
    return 1;
}
/**
 * native Cos takes real radians returns real
 */
function Cos(C, L) {
    let radians = lauxlib_1.luaL_checknumber(L, 1);
    lua_1.lua_pushnumber(L, Math.cos(radians));
    return 1;
}
/**
 * native Tan takes real radians returns real
 */
function Tan(C, L) {
    let radians = lauxlib_1.luaL_checknumber(L, 1);
    lua_1.lua_pushnumber(L, Math.tan(radians));
    return 1;
}
/**
 * native Asin takes real y returns real
 */
function Asin(C, L) {
    let y = lauxlib_1.luaL_checknumber(L, 1);
    lua_1.lua_pushnumber(L, Math.asin(y));
    return 1;
}
/**
 * native Acos takes real x returns real
 */
function Acos(C, L) {
    let x = lauxlib_1.luaL_checknumber(L, 1);
    lua_1.lua_pushnumber(L, Math.acos(x));
    return 1;
}
/**
 * native Atan takes real x returns real
 */
function Atan(C, L) {
    let x = lauxlib_1.luaL_checknumber(L, 1);
    lua_1.lua_pushnumber(L, Math.atan(x));
    return 1;
}
/**
 * native Atan2 takes real y, real x returns real
 */
function Atan2(C, L) {
    let y = lauxlib_1.luaL_checknumber(L, 1);
    let x = lauxlib_1.luaL_checknumber(L, 2);
    lua_1.lua_pushnumber(L, Math.atan2(y, x));
    return 1;
}
/**
 * native SquareRoot takes real x returns real
 */
function SquareRoot(C, L) {
    let x = lauxlib_1.luaL_checknumber(L, 1);
    lua_1.lua_pushnumber(L, Math.sqrt(x));
    return 1;
}
/**
 * native Pow takes real x, real power returns real
 */
function Pow(C, L) {
    let x = lauxlib_1.luaL_checknumber(L, 1);
    let power = lauxlib_1.luaL_checknumber(L, 2);
    lua_1.lua_pushnumber(L, Math.pow(x, power));
    return 1;
}
/**
 * native I2R takes integer i returns real
 */
function I2R(C, L) {
    let i = lauxlib_1.luaL_checkinteger(L, 1);
    lua_1.lua_pushnumber(L, i);
    return 1;
}
/**
 * native R2I takes real r returns integer
 */
function R2I(C, L) {
    let r = lauxlib_1.luaL_checknumber(L, 1);
    lua_1.lua_pushinteger(L, r | 0);
    return 1;
}
/**
 * native I2S takes integer i returns string
 */
function I2S(C, L) {
    let i = lauxlib_1.luaL_checkinteger(L, 1);
    console.warn('I2S was called but is not implemented :(');
    lua_1.lua_pushstring(L, '');
    return 1;
}
/**
 * native R2S takes real r returns string
 */
function R2S(C, L) {
    let r = lauxlib_1.luaL_checknumber(L, 1);
    console.warn('R2S was called but is not implemented :(');
    lua_1.lua_pushstring(L, '');
    return 1;
}
/**
 * native R2SW takes real r, integer width, integer precision returns string
 */
function R2SW(C, L) {
    let r = lauxlib_1.luaL_checknumber(L, 1);
    let width = lauxlib_1.luaL_checkinteger(L, 2);
    let precision = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('R2SW was called but is not implemented :(');
    lua_1.lua_pushstring(L, '');
    return 1;
}
/**
 * native S2I takes string s returns integer
 */
function S2I(C, L) {
    let s = lauxlib_1.luaL_checkstring(L, 1);
    console.warn('S2I was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native S2R takes string s returns real
 */
function S2R(C, L) {
    let s = lauxlib_1.luaL_checkstring(L, 1);
    console.warn('S2R was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native GetHandleId takes handle h returns integer
 */
function GetHandleId(C, L) {
    let h = lua_1.lua_touserdata(L, 1);
    lua_1.lua_pushinteger(L, h.handleId);
    return 1;
}
/**
 * native SubString takes string source, integer start, integer end_ returns string
 */
function SubString(C, L) {
    let source = lauxlib_1.luaL_checkstring(L, 1);
    let start = lauxlib_1.luaL_checkinteger(L, 2);
    let end_ = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('SubString was called but is not implemented :(');
    lua_1.lua_pushstring(L, '');
    return 1;
}
/**
 * native StringLength takes string s returns integer
 */
function StringLength(C, L) {
    let s = lauxlib_1.luaL_checkstring(L, 1);
    console.warn('StringLength was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native StringCase takes string source, boolean upper returns string
 */
function StringCase(C, L) {
    let source = lauxlib_1.luaL_checkstring(L, 1);
    let upper = lua_1.lua_toboolean(L, 2);
    console.warn('StringCase was called but is not implemented :(');
    lua_1.lua_pushstring(L, '');
    return 1;
}
/**
 * native StringHash takes string s returns integer
 */
function StringHash(C, L) {
    let s = lauxlib_1.luaL_checkstring(L, 1);
    console.warn('StringHash was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native GetLocalizedString takes string source returns string
 */
function GetLocalizedString(C, L) {
    let source = lauxlib_1.luaL_checkstring(L, 1);
    console.warn('GetLocalizedString was called but is not implemented :(');
    lua_1.lua_pushstring(L, '');
    return 1;
}
/**
 * native GetLocalizedHotkey takes string source returns integer
 */
function GetLocalizedHotkey(C, L) {
    let source = lauxlib_1.luaL_checkstring(L, 1);
    console.warn('GetLocalizedHotkey was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native SetMapName takes string name returns nothing
 */
function SetMapName(C, L) {
    let name = lauxlib_1.luaL_checkstring(L, 1);
    console.warn('SetMapName was called but is not implemented :(');
    return 0;
}
/**
 * native SetMapDescription takes string description returns nothing
 */
function SetMapDescription(C, L) {
    let description = lauxlib_1.luaL_checkstring(L, 1);
    console.warn('SetMapDescription was called but is not implemented :(');
    return 0;
}
/**
 * native SetTeams takes integer teamcount returns nothing
 */
function SetTeams(C, L) {
    let teamcount = lauxlib_1.luaL_checkinteger(L, 1);
    console.warn('SetTeams was called but is not implemented :(');
    return 0;
}
/**
 * native SetPlayers takes integer playercount returns nothing
 */
function SetPlayers(C, L) {
    let playercount = lauxlib_1.luaL_checkinteger(L, 1);
    console.warn('SetPlayers was called but is not implemented :(');
    return 0;
}
/**
 * native DefineStartLocation takes integer whichStartLoc, real x, real y returns nothing
 */
function DefineStartLocation(C, L) {
    let whichStartLoc = lauxlib_1.luaL_checkinteger(L, 1);
    let x = lauxlib_1.luaL_checknumber(L, 2);
    let y = lauxlib_1.luaL_checknumber(L, 3);
    C.startLocations[whichStartLoc] = C.addHandle(new types_1.JassLocation(x, y));
    return 0;
}
/**
 * native DefineStartLocationLoc takes integer whichStartLoc, location whichLocation returns nothing
 */
function DefineStartLocationLoc(C, L) {
    let whichStartLoc = lauxlib_1.luaL_checkinteger(L, 1);
    let whichLocation = lua_1.lua_touserdata(L, 2);
    console.warn('DefineStartLocationLoc was called but is not implemented :(');
    return 0;
}
/**
 * native SetStartLocPrioCount takes integer whichStartLoc, integer prioSlotCount returns nothing
 */
function SetStartLocPrioCount(C, L) {
    let whichStartLoc = lauxlib_1.luaL_checkinteger(L, 1);
    let prioSlotCount = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('SetStartLocPrioCount was called but is not implemented :(');
    return 0;
}
/**
 * native SetStartLocPrio takes integer whichStartLoc, integer prioSlotIndex, integer otherStartLocIndex, startlocprio priority returns nothing
 */
function SetStartLocPrio(C, L) {
    let whichStartLoc = lauxlib_1.luaL_checkinteger(L, 1);
    let prioSlotIndex = lauxlib_1.luaL_checkinteger(L, 2);
    let otherStartLocIndex = lauxlib_1.luaL_checkinteger(L, 3);
    let priority = lua_1.lua_touserdata(L, 4);
    console.warn('SetStartLocPrio was called but is not implemented :(');
    return 0;
}
/**
 * native GetStartLocPrioSlot takes integer whichStartLoc, integer prioSlotIndex returns integer
 */
function GetStartLocPrioSlot(C, L) {
    let whichStartLoc = lauxlib_1.luaL_checkinteger(L, 1);
    let prioSlotIndex = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('GetStartLocPrioSlot was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native GetStartLocPrio takes integer whichStartLoc, integer prioSlotIndex returns startlocprio
 */
function GetStartLocPrio(C, L) {
    let whichStartLoc = lauxlib_1.luaL_checkinteger(L, 1);
    let prioSlotIndex = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('GetStartLocPrio was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native SetGameTypeSupported takes gametype whichGameType, boolean value returns nothing
 */
function SetGameTypeSupported(C, L) {
    let whichGameType = lua_1.lua_touserdata(L, 1);
    let value = lua_1.lua_toboolean(L, 2);
    console.warn('SetGameTypeSupported was called but is not implemented :(');
    return 0;
}
/**
 * native SetMapFlag takes mapflag whichMapFlag, boolean value returns nothing
 */
function SetMapFlag(C, L) {
    let whichMapFlag = lua_1.lua_touserdata(L, 1);
    let value = lua_1.lua_toboolean(L, 2);
    console.warn('SetMapFlag was called but is not implemented :(');
    return 0;
}
/**
 * native SetGamePlacement takes placement whichPlacementType returns nothing
 */
function SetGamePlacement(C, L) {
    let whichPlacementType = lua_1.lua_touserdata(L, 1);
    console.warn('SetGamePlacement was called but is not implemented :(');
    return 0;
}
/**
 * native SetGameSpeed takes gamespeed whichspeed returns nothing
 */
function SetGameSpeed(C, L) {
    let whichspeed = lua_1.lua_touserdata(L, 1);
    console.warn('SetGameSpeed was called but is not implemented :(');
    return 0;
}
/**
 * native SetGameDifficulty takes gamedifficulty whichdifficulty returns nothing
 */
function SetGameDifficulty(C, L) {
    let whichdifficulty = lua_1.lua_touserdata(L, 1);
    console.warn('SetGameDifficulty was called but is not implemented :(');
    return 0;
}
/**
 * native SetResourceDensity takes mapdensity whichdensity returns nothing
 */
function SetResourceDensity(C, L) {
    let whichdensity = lua_1.lua_touserdata(L, 1);
    console.warn('SetResourceDensity was called but is not implemented :(');
    return 0;
}
/**
 * native SetCreatureDensity takes mapdensity whichdensity returns nothing
 */
function SetCreatureDensity(C, L) {
    let whichdensity = lua_1.lua_touserdata(L, 1);
    console.warn('SetCreatureDensity was called but is not implemented :(');
    return 0;
}
/**
 * native GetTeams takes nothing returns integer
 */
function GetTeams(C, L) {
    console.warn('GetTeams was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native GetPlayers takes nothing returns integer
 */
function GetPlayers(C, L) {
    console.warn('GetPlayers was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native IsGameTypeSupported takes gametype whichGameType returns boolean
 */
function IsGameTypeSupported(C, L) {
    let whichGameType = lua_1.lua_touserdata(L, 1);
    console.warn('IsGameTypeSupported was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native GetGameTypeSelected takes nothing returns gametype
 */
function GetGameTypeSelected(C, L) {
    console.warn('GetGameTypeSelected was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native IsMapFlagSet takes mapflag whichMapFlag returns boolean
 */
function IsMapFlagSet(C, L) {
    let whichMapFlag = lua_1.lua_touserdata(L, 1);
    console.warn('IsMapFlagSet was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * constant native GetGamePlacement takes nothing returns placement
 */
function GetGamePlacement(C, L) {
    console.warn('GetGamePlacement was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetGameSpeed takes nothing returns gamespeed
 */
function GetGameSpeed(C, L) {
    console.warn('GetGameSpeed was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetGameDifficulty takes nothing returns gamedifficulty
 */
function GetGameDifficulty(C, L) {
    console.warn('GetGameDifficulty was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetResourceDensity takes nothing returns mapdensity
 */
function GetResourceDensity(C, L) {
    console.warn('GetResourceDensity was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetCreatureDensity takes nothing returns mapdensity
 */
function GetCreatureDensity(C, L) {
    console.warn('GetCreatureDensity was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetStartLocationX takes integer whichStartLocation returns real
 */
function GetStartLocationX(C, L) {
    let whichStartLocation = lauxlib_1.luaL_checkinteger(L, 1);
    console.warn('GetStartLocationX was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * constant native GetStartLocationY takes integer whichStartLocation returns real
 */
function GetStartLocationY(C, L) {
    let whichStartLocation = lauxlib_1.luaL_checkinteger(L, 1);
    console.warn('GetStartLocationY was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * constant native GetStartLocationLoc takes integer whichStartLocation returns location
 */
function GetStartLocationLoc(C, L) {
    let whichStartLocation = lauxlib_1.luaL_checkinteger(L, 1);
    console.warn('GetStartLocationLoc was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native SetPlayerTeam takes player whichPlayer, integer whichTeam returns nothing
 */
function SetPlayerTeam(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    let whichTeam = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('SetPlayerTeam was called but is not implemented :(');
    return 0;
}
/**
 * native SetPlayerStartLocation takes player whichPlayer, integer startLocIndex returns nothing
 */
function SetPlayerStartLocation(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    let startLocIndex = lauxlib_1.luaL_checkinteger(L, 2);
    whichPlayer.startLocation = startLocIndex;
    return 0;
}
/**
 * native ForcePlayerStartLocation takes player whichPlayer, integer startLocIndex returns nothing
 */
function ForcePlayerStartLocation(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    let startLocIndex = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('ForcePlayerStartLocation was called but is not implemented :(');
    return 0;
}
/**
 * native SetPlayerColor takes player whichPlayer, playercolor color returns nothing
 */
function SetPlayerColor(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    let color = lua_1.lua_touserdata(L, 2);
    whichPlayer.color = color;
    return 0;
}
/**
 * native SetPlayerAlliance takes player sourcePlayer, player otherPlayer, alliancetype whichAllianceSetting, boolean value returns nothing
 */
function SetPlayerAlliance(C, L) {
    let sourcePlayer = lua_1.lua_touserdata(L, 1);
    let otherPlayer = lua_1.lua_touserdata(L, 2);
    let whichAllianceSetting = lua_1.lua_touserdata(L, 3);
    let value = lua_1.lua_toboolean(L, 4);
    console.warn('SetPlayerAlliance was called but is not implemented :(');
    return 0;
}
/**
 * native SetPlayerTaxRate takes player sourcePlayer, player otherPlayer, playerstate whichResource, integer rate returns nothing
 */
function SetPlayerTaxRate(C, L) {
    let sourcePlayer = lua_1.lua_touserdata(L, 1);
    let otherPlayer = lua_1.lua_touserdata(L, 2);
    let whichResource = lua_1.lua_touserdata(L, 3);
    let rate = lauxlib_1.luaL_checkinteger(L, 4);
    console.warn('SetPlayerTaxRate was called but is not implemented :(');
    return 0;
}
/**
 * native SetPlayerRacePreference takes player whichPlayer, racepreference whichRacePreference returns nothing
 */
function SetPlayerRacePreference(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    let whichRacePreference = lua_1.lua_touserdata(L, 2);
    console.warn('SetPlayerRacePreference was called but is not implemented :(');
    return 0;
}
/**
 * native SetPlayerRaceSelectable takes player whichPlayer, boolean value returns nothing
 */
function SetPlayerRaceSelectable(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    let value = lua_1.lua_toboolean(L, 2);
    whichPlayer.raceSelectable = value;
    return 0;
}
/**
 * native SetPlayerController takes player whichPlayer, mapcontrol controlType returns nothing
 */
function SetPlayerController(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    let controlType = lua_1.lua_touserdata(L, 2);
    whichPlayer.controller = controlType;
    return 0;
}
/**
 * native SetPlayerName takes player whichPlayer, string name returns nothing
 */
function SetPlayerName(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    let name = lauxlib_1.luaL_checkstring(L, 2);
    whichPlayer.name = name;
    return 0;
}
/**
 * native SetPlayerOnScoreScreen takes player whichPlayer, boolean flag returns nothing
 */
function SetPlayerOnScoreScreen(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    let flag = lua_1.lua_toboolean(L, 2);
    console.warn('SetPlayerOnScoreScreen was called but is not implemented :(');
    return 0;
}
/**
 * native GetPlayerTeam takes player whichPlayer returns integer
 */
function GetPlayerTeam(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    console.warn('GetPlayerTeam was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native GetPlayerStartLocation takes player whichPlayer returns integer
 */
function GetPlayerStartLocation(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    lua_1.lua_pushinteger(L, whichPlayer.startLocation);
    return 1;
}
/**
 * native GetPlayerColor takes player whichPlayer returns playercolor
 */
function GetPlayerColor(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    lua_1.lua_pushlightuserdata(L, whichPlayer.color);
    return 1;
}
/**
 * native GetPlayerSelectable takes player whichPlayer returns boolean
 */
function GetPlayerSelectable(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    console.warn('GetPlayerSelectable was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native GetPlayerController takes player whichPlayer returns mapcontrol
 */
function GetPlayerController(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    lua_1.lua_pushlightuserdata(L, whichPlayer.controller);
    return 1;
}
/**
 * native GetPlayerSlotState takes player whichPlayer returns playerslotstate
 */
function GetPlayerSlotState(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    console.warn('GetPlayerSlotState was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native GetPlayerTaxRate takes player sourcePlayer, player otherPlayer, playerstate whichResource returns integer
 */
function GetPlayerTaxRate(C, L) {
    let sourcePlayer = lua_1.lua_touserdata(L, 1);
    let otherPlayer = lua_1.lua_touserdata(L, 2);
    let whichResource = lua_1.lua_touserdata(L, 3);
    console.warn('GetPlayerTaxRate was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native IsPlayerRacePrefSet takes player whichPlayer, racepreference pref returns boolean
 */
function IsPlayerRacePrefSet(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    let pref = lua_1.lua_touserdata(L, 2);
    console.warn('IsPlayerRacePrefSet was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native GetPlayerName takes player whichPlayer returns string
 */
function GetPlayerName(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    lua_1.lua_pushstring(L, whichPlayer.name);
    return 1;
}
/**
 * native CreateTimer takes nothing returns timer
 */
function CreateTimer(C, L) {
    lua_1.lua_pushlightuserdata(L, C.addHandle(new types_1.JassTimer()));
    return 1;
}
/**
 * native DestroyTimer takes timer whichTimer returns nothing
 */
function DestroyTimer(C, L) {
    let whichTimer = lua_1.lua_touserdata(L, 1);
    // In case it's in the middle of running, remove it.
    C.timers.delete(whichTimer);
    C.freeHandle(whichTimer);
    return 0;
}
/**
 * native TimerStart takes timer whichTimer, real timeout, boolean periodic, code handlerFunc returns nothing
 */
function TimerStart(C, L) {
    let whichTimer = lua_1.lua_touserdata(L, 1);
    let timeout = lauxlib_1.luaL_checknumber(L, 2);
    let periodic = lua_1.lua_toboolean(L, 3);
    let handlerFunc = lauxlib_1.luaL_ref(L, lua_1.LUA_REGISTRYINDEX);
    whichTimer.elapsed = 0;
    whichTimer.timeout = timeout;
    whichTimer.periodic = periodic;
    whichTimer.handlerFunc = handlerFunc;
    C.timers.add(whichTimer);
    return 0;
}
/**
 * native TimerGetElapsed takes timer whichTimer returns real
 */
function TimerGetElapsed(C, L) {
    let whichTimer = lua_1.lua_touserdata(L, 1);
    lua_1.lua_pushnumber(L, whichTimer.elapsed);
    return 1;
}
/**
 * native TimerGetRemaining takes timer whichTimer returns real
 */
function TimerGetRemaining(C, L) {
    let whichTimer = lua_1.lua_touserdata(L, 1);
    lua_1.lua_pushnumber(L, whichTimer.timeout - whichTimer.elapsed);
    return 1;
}
/**
 * native TimerGetTimeout takes timer whichTimer returns real
 */
function TimerGetTimeout(C, L) {
    let whichTimer = lua_1.lua_touserdata(L, 1);
    lua_1.lua_pushnumber(L, whichTimer.timeout);
    return 1;
}
/**
 * native PauseTimer takes timer whichTimer returns nothing
 */
function PauseTimer(C, L) {
    let whichTimer = lua_1.lua_touserdata(L, 1);
    C.timers.delete(whichTimer);
    return 0;
}
/**
 * native ResumeTimer takes timer whichTimer returns nothing
 */
function ResumeTimer(C, L) {
    let whichTimer = lua_1.lua_touserdata(L, 1);
    C.timers.add(whichTimer);
    return 0;
}
/**
 * native GetExpiredTimer takes nothing returns timer
 */
function GetExpiredTimer(C, L) {
    let thread = C.currentThread;
    if (thread && thread.expiredTimer) {
        lua_1.lua_pushlightuserdata(L, thread.expiredTimer);
    }
    else {
        lua_1.lua_pushnil(L);
    }
    return 1;
}
/**
 * native CreateGroup takes nothing returns group
 */
function CreateGroup(C, L) {
    lua_1.lua_pushlightuserdata(L, C.addHandle(new types_1.JassGroup()));
    return 1;
}
/**
 * native DestroyGroup takes group whichGroup returns nothing
 */
function DestroyGroup(C, L) {
    let whichGroup = lua_1.lua_touserdata(L, 1);
    C.freeHandle(whichGroup);
    return 0;
}
/**
 * native GroupAddUnit takes group whichGroup, unit whichUnit returns nothing
 */
function GroupAddUnit(C, L) {
    let whichGroup = lua_1.lua_touserdata(L, 1);
    let whichUnit = lua_1.lua_touserdata(L, 2);
    whichGroup.units.add(whichUnit);
    return 0;
}
/**
 * native GroupRemoveUnit takes group whichGroup, unit whichUnit returns nothing
 */
function GroupRemoveUnit(C, L) {
    let whichGroup = lua_1.lua_touserdata(L, 1);
    let whichUnit = lua_1.lua_touserdata(L, 2);
    whichGroup.units.delete(whichUnit);
    return 0;
}
/**
 * native GroupClear takes group whichGroup returns nothing
 */
function GroupClear(C, L) {
    let whichGroup = lua_1.lua_touserdata(L, 1);
    whichGroup.units.clear();
    return 0;
}
/**
 * native GroupEnumUnitsOfType takes group whichGroup, string unitname, boolexpr filter returns nothing
 */
function GroupEnumUnitsOfType(C, L) {
    let whichGroup = lua_1.lua_touserdata(L, 1);
    let unitname = lauxlib_1.luaL_checkstring(L, 2);
    let filter = lua_1.lua_touserdata(L, 3);
    console.warn('GroupEnumUnitsOfType was called but is not implemented :(');
    return 0;
}
/**
 * native GroupEnumUnitsOfPlayer takes group whichGroup, player whichPlayer, boolexpr filter returns nothing
 */
function GroupEnumUnitsOfPlayer(C, L) {
    let whichGroup = lua_1.lua_touserdata(L, 1);
    let whichPlayer = lua_1.lua_touserdata(L, 2);
    let filter = lua_1.lua_touserdata(L, 3);
    console.warn('GroupEnumUnitsOfPlayer was called but is not implemented :(');
    return 0;
}
/**
 * native GroupEnumUnitsOfTypeCounted takes group whichGroup, string unitname, boolexpr filter, integer countLimit returns nothing
 */
function GroupEnumUnitsOfTypeCounted(C, L) {
    let whichGroup = lua_1.lua_touserdata(L, 1);
    let unitname = lauxlib_1.luaL_checkstring(L, 2);
    let filter = lua_1.lua_touserdata(L, 3);
    let countLimit = lauxlib_1.luaL_checkinteger(L, 4);
    console.warn('GroupEnumUnitsOfTypeCounted was called but is not implemented :(');
    return 0;
}
/**
 * native GroupEnumUnitsInRect takes group whichGroup, rect r, boolexpr filter returns nothing
 */
function GroupEnumUnitsInRect(C, L) {
    let whichGroup = lua_1.lua_touserdata(L, 1);
    let r = lua_1.lua_touserdata(L, 2);
    let filter = lua_1.lua_touserdata(L, 3);
    console.warn('GroupEnumUnitsInRect was called but is not implemented :(');
    return 0;
}
/**
 * native GroupEnumUnitsInRectCounted takes group whichGroup, rect r, boolexpr filter, integer countLimit returns nothing
 */
function GroupEnumUnitsInRectCounted(C, L) {
    let whichGroup = lua_1.lua_touserdata(L, 1);
    let r = lua_1.lua_touserdata(L, 2);
    let filter = lua_1.lua_touserdata(L, 3);
    let countLimit = lauxlib_1.luaL_checkinteger(L, 4);
    console.warn('GroupEnumUnitsInRectCounted was called but is not implemented :(');
    return 0;
}
/**
 * native GroupEnumUnitsInRange takes group whichGroup, real x, real y, real radius, boolexpr filter returns nothing
 */
function GroupEnumUnitsInRange(C, L) {
    let whichGroup = lua_1.lua_touserdata(L, 1);
    let x = lauxlib_1.luaL_checknumber(L, 2);
    let y = lauxlib_1.luaL_checknumber(L, 3);
    let radius = lauxlib_1.luaL_checknumber(L, 4);
    let filter = lua_1.lua_touserdata(L, 5);
    console.warn('GroupEnumUnitsInRange was called but is not implemented :(');
    return 0;
}
/**
 * native GroupEnumUnitsInRangeOfLoc takes group whichGroup, location whichLocation, real radius, boolexpr filter returns nothing
 */
function GroupEnumUnitsInRangeOfLoc(C, L) {
    let whichGroup = lua_1.lua_touserdata(L, 1);
    let whichLocation = lua_1.lua_touserdata(L, 2);
    let radius = lauxlib_1.luaL_checknumber(L, 3);
    let filter = lua_1.lua_touserdata(L, 4);
    console.warn('GroupEnumUnitsInRangeOfLoc was called but is not implemented :(');
    return 0;
}
/**
 * native GroupEnumUnitsInRangeCounted takes group whichGroup, real x, real y, real radius, boolexpr filter, integer countLimit returns nothing
 */
function GroupEnumUnitsInRangeCounted(C, L) {
    let whichGroup = lua_1.lua_touserdata(L, 1);
    let x = lauxlib_1.luaL_checknumber(L, 2);
    let y = lauxlib_1.luaL_checknumber(L, 3);
    let radius = lauxlib_1.luaL_checknumber(L, 4);
    let filter = lua_1.lua_touserdata(L, 5);
    let countLimit = lauxlib_1.luaL_checkinteger(L, 6);
    console.warn('GroupEnumUnitsInRangeCounted was called but is not implemented :(');
    return 0;
}
/**
 * native GroupEnumUnitsInRangeOfLocCounted takes group whichGroup, location whichLocation, real radius, boolexpr filter, integer countLimit returns nothing
 */
function GroupEnumUnitsInRangeOfLocCounted(C, L) {
    let whichGroup = lua_1.lua_touserdata(L, 1);
    let whichLocation = lua_1.lua_touserdata(L, 2);
    let radius = lauxlib_1.luaL_checknumber(L, 3);
    let filter = lua_1.lua_touserdata(L, 4);
    let countLimit = lauxlib_1.luaL_checkinteger(L, 5);
    console.warn('GroupEnumUnitsInRangeOfLocCounted was called but is not implemented :(');
    return 0;
}
/**
 * native GroupEnumUnitsSelected takes group whichGroup, player whichPlayer, boolexpr filter returns nothing
 */
function GroupEnumUnitsSelected(C, L) {
    let whichGroup = lua_1.lua_touserdata(L, 1);
    let whichPlayer = lua_1.lua_touserdata(L, 2);
    let filter = lua_1.lua_touserdata(L, 3);
    console.warn('GroupEnumUnitsSelected was called but is not implemented :(');
    return 0;
}
/**
 * native GroupImmediateOrder takes group whichGroup, string order returns boolean
 */
function GroupImmediateOrder(C, L) {
    let whichGroup = lua_1.lua_touserdata(L, 1);
    let order = lauxlib_1.luaL_checkstring(L, 2);
    console.warn('GroupImmediateOrder was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native GroupImmediateOrderById takes group whichGroup, integer order returns boolean
 */
function GroupImmediateOrderById(C, L) {
    let whichGroup = lua_1.lua_touserdata(L, 1);
    let order = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('GroupImmediateOrderById was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native GroupPointOrder takes group whichGroup, string order, real x, real y returns boolean
 */
function GroupPointOrder(C, L) {
    let whichGroup = lua_1.lua_touserdata(L, 1);
    let order = lauxlib_1.luaL_checkstring(L, 2);
    let x = lauxlib_1.luaL_checknumber(L, 3);
    let y = lauxlib_1.luaL_checknumber(L, 4);
    console.warn('GroupPointOrder was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native GroupPointOrderLoc takes group whichGroup, string order, location whichLocation returns boolean
 */
function GroupPointOrderLoc(C, L) {
    let whichGroup = lua_1.lua_touserdata(L, 1);
    let order = lauxlib_1.luaL_checkstring(L, 2);
    let whichLocation = lua_1.lua_touserdata(L, 3);
    console.warn('GroupPointOrderLoc was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native GroupPointOrderById takes group whichGroup, integer order, real x, real y returns boolean
 */
function GroupPointOrderById(C, L) {
    let whichGroup = lua_1.lua_touserdata(L, 1);
    let order = lauxlib_1.luaL_checkinteger(L, 2);
    let x = lauxlib_1.luaL_checknumber(L, 3);
    let y = lauxlib_1.luaL_checknumber(L, 4);
    console.warn('GroupPointOrderById was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native GroupPointOrderByIdLoc takes group whichGroup, integer order, location whichLocation returns boolean
 */
function GroupPointOrderByIdLoc(C, L) {
    let whichGroup = lua_1.lua_touserdata(L, 1);
    let order = lauxlib_1.luaL_checkinteger(L, 2);
    let whichLocation = lua_1.lua_touserdata(L, 3);
    console.warn('GroupPointOrderByIdLoc was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native GroupTargetOrder takes group whichGroup, string order, widget targetWidget returns boolean
 */
function GroupTargetOrder(C, L) {
    let whichGroup = lua_1.lua_touserdata(L, 1);
    let order = lauxlib_1.luaL_checkstring(L, 2);
    let targetWidget = lua_1.lua_touserdata(L, 3);
    console.warn('GroupTargetOrder was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native GroupTargetOrderById takes group whichGroup, integer order, widget targetWidget returns boolean
 */
function GroupTargetOrderById(C, L) {
    let whichGroup = lua_1.lua_touserdata(L, 1);
    let order = lauxlib_1.luaL_checkinteger(L, 2);
    let targetWidget = lua_1.lua_touserdata(L, 3);
    console.warn('GroupTargetOrderById was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native ForGroup takes group whichGroup, code callback returns nothing
 */
function ForGroup(C, L) {
    let whichGroup = lua_1.lua_touserdata(L, 1);
    let callback = lauxlib_1.luaL_ref(L, lua_1.LUA_REGISTRYINDEX);
    for (let unit of whichGroup.units) {
        C.enumUnit = unit;
        C.call(callback);
    }
    C.enumUnit = null;
    lauxlib_1.luaL_unref(L, callback);
    return 0;
}
/**
 * native FirstOfGroup takes group whichGroup returns unit
 */
function FirstOfGroup(C, L) {
    let whichGroup = lua_1.lua_touserdata(L, 1);
    console.warn('FirstOfGroup was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native CreateForce takes nothing returns force
 */
function CreateForce(C, L) {
    lua_1.lua_pushlightuserdata(L, C.addHandle(new types_1.JassForce()));
    return 1;
}
/**
 * native DestroyForce takes force whichForce returns nothing
 */
function DestroyForce(C, L) {
    let whichForce = lua_1.lua_touserdata(L, 1);
    C.freeHandle(whichForce);
    return 0;
}
/**
 * native ForceAddPlayer takes force whichForce, player whichPlayer returns nothing
 */
function ForceAddPlayer(C, L) {
    let whichForce = lua_1.lua_touserdata(L, 1);
    let whichPlayer = lua_1.lua_touserdata(L, 2);
    whichForce.players.add(whichPlayer);
    return 0;
}
/**
 * native ForceRemovePlayer takes force whichForce, player whichPlayer returns nothing
 */
function ForceRemovePlayer(C, L) {
    let whichForce = lua_1.lua_touserdata(L, 1);
    let whichPlayer = lua_1.lua_touserdata(L, 2);
    whichForce.players.delete(whichPlayer);
    return 0;
}
/**
 * native ForceClear takes force whichForce returns nothing
 */
function ForceClear(C, L) {
    let whichForce = lua_1.lua_touserdata(L, 1);
    whichForce.players.clear();
    return 0;
}
/**
 * native ForceEnumPlayers takes force whichForce, boolexpr filter returns nothing
 */
function ForceEnumPlayers(C, L) {
    let whichForce = lua_1.lua_touserdata(L, 1);
    let filter = lua_1.lua_touserdata(L, 2);
    console.warn('ForceEnumPlayers was called but is not implemented :(');
    return 0;
}
/**
 * native ForceEnumPlayersCounted takes force whichForce, boolexpr filter, integer countLimit returns nothing
 */
function ForceEnumPlayersCounted(C, L) {
    let whichForce = lua_1.lua_touserdata(L, 1);
    let filter = lua_1.lua_touserdata(L, 2);
    let countLimit = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('ForceEnumPlayersCounted was called but is not implemented :(');
    return 0;
}
/**
 * native ForceEnumAllies takes force whichForce, player whichPlayer, boolexpr filter returns nothing
 */
function ForceEnumAllies(C, L) {
    let whichForce = lua_1.lua_touserdata(L, 1);
    let whichPlayer = lua_1.lua_touserdata(L, 2);
    let filter = lua_1.lua_touserdata(L, 3);
    console.warn('ForceEnumAllies was called but is not implemented :(');
    return 0;
}
/**
 * native ForceEnumEnemies takes force whichForce, player whichPlayer, boolexpr filter returns nothing
 */
function ForceEnumEnemies(C, L) {
    let whichForce = lua_1.lua_touserdata(L, 1);
    let whichPlayer = lua_1.lua_touserdata(L, 2);
    let filter = lua_1.lua_touserdata(L, 3);
    console.warn('ForceEnumEnemies was called but is not implemented :(');
    return 0;
}
/**
 * native ForForce takes force whichForce, code callback returns nothing
 */
function ForForce(C, L) {
    let whichForce = lua_1.lua_touserdata(L, 1);
    let callback = lauxlib_1.luaL_ref(L, lua_1.LUA_REGISTRYINDEX);
    for (let player of whichForce.players) {
        C.enumPlayer = player;
        C.call(callback);
    }
    C.enumPlayer = null;
    lauxlib_1.luaL_unref(L, callback);
    return 0;
}
/**
 * native Rect takes real minx, real miny, real maxx, real maxy returns rect
 */
function Rect(C, L) {
    let minx = lauxlib_1.luaL_checknumber(L, 1);
    let miny = lauxlib_1.luaL_checknumber(L, 2);
    let maxx = lauxlib_1.luaL_checknumber(L, 3);
    let maxy = lauxlib_1.luaL_checknumber(L, 4);
    console.warn('Rect was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native RectFromLoc takes location min, location max returns rect
 */
function RectFromLoc(C, L) {
    let min = lua_1.lua_touserdata(L, 1);
    let max = lua_1.lua_touserdata(L, 2);
    console.warn('RectFromLoc was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native RemoveRect takes rect whichRect returns nothing
 */
function RemoveRect(C, L) {
    let whichRect = lua_1.lua_touserdata(L, 1);
    console.warn('RemoveRect was called but is not implemented :(');
    return 0;
}
/**
 * native SetRect takes rect whichRect, real minx, real miny, real maxx, real maxy returns nothing
 */
function SetRect(C, L) {
    let whichRect = lua_1.lua_touserdata(L, 1);
    let minx = lauxlib_1.luaL_checknumber(L, 2);
    let miny = lauxlib_1.luaL_checknumber(L, 3);
    let maxx = lauxlib_1.luaL_checknumber(L, 4);
    let maxy = lauxlib_1.luaL_checknumber(L, 5);
    console.warn('SetRect was called but is not implemented :(');
    return 0;
}
/**
 * native SetRectFromLoc takes rect whichRect, location min, location max returns nothing
 */
function SetRectFromLoc(C, L) {
    let whichRect = lua_1.lua_touserdata(L, 1);
    let min = lua_1.lua_touserdata(L, 2);
    let max = lua_1.lua_touserdata(L, 3);
    console.warn('SetRectFromLoc was called but is not implemented :(');
    return 0;
}
/**
 * native MoveRectTo takes rect whichRect, real newCenterX, real newCenterY returns nothing
 */
function MoveRectTo(C, L) {
    let whichRect = lua_1.lua_touserdata(L, 1);
    let newCenterX = lauxlib_1.luaL_checknumber(L, 2);
    let newCenterY = lauxlib_1.luaL_checknumber(L, 3);
    console.warn('MoveRectTo was called but is not implemented :(');
    return 0;
}
/**
 * native MoveRectToLoc takes rect whichRect, location newCenterLoc returns nothing
 */
function MoveRectToLoc(C, L) {
    let whichRect = lua_1.lua_touserdata(L, 1);
    let newCenterLoc = lua_1.lua_touserdata(L, 2);
    console.warn('MoveRectToLoc was called but is not implemented :(');
    return 0;
}
/**
 * native GetRectCenterX takes rect whichRect returns real
 */
function GetRectCenterX(C, L) {
    let whichRect = lua_1.lua_touserdata(L, 1);
    console.warn('GetRectCenterX was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native GetRectCenterY takes rect whichRect returns real
 */
function GetRectCenterY(C, L) {
    let whichRect = lua_1.lua_touserdata(L, 1);
    console.warn('GetRectCenterY was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native GetRectMinX takes rect whichRect returns real
 */
function GetRectMinX(C, L) {
    let whichRect = lua_1.lua_touserdata(L, 1);
    console.warn('GetRectMinX was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native GetRectMinY takes rect whichRect returns real
 */
function GetRectMinY(C, L) {
    let whichRect = lua_1.lua_touserdata(L, 1);
    console.warn('GetRectMinY was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native GetRectMaxX takes rect whichRect returns real
 */
function GetRectMaxX(C, L) {
    let whichRect = lua_1.lua_touserdata(L, 1);
    console.warn('GetRectMaxX was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native GetRectMaxY takes rect whichRect returns real
 */
function GetRectMaxY(C, L) {
    let whichRect = lua_1.lua_touserdata(L, 1);
    console.warn('GetRectMaxY was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native CreateRegion takes nothing returns region
 */
function CreateRegion(C, L) {
    console.warn('CreateRegion was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native RemoveRegion takes region whichRegion returns nothing
 */
function RemoveRegion(C, L) {
    let whichRegion = lua_1.lua_touserdata(L, 1);
    console.warn('RemoveRegion was called but is not implemented :(');
    return 0;
}
/**
 * native RegionAddRect takes region whichRegion, rect r returns nothing
 */
function RegionAddRect(C, L) {
    let whichRegion = lua_1.lua_touserdata(L, 1);
    let r = lua_1.lua_touserdata(L, 2);
    console.warn('RegionAddRect was called but is not implemented :(');
    return 0;
}
/**
 * native RegionClearRect takes region whichRegion, rect r returns nothing
 */
function RegionClearRect(C, L) {
    let whichRegion = lua_1.lua_touserdata(L, 1);
    let r = lua_1.lua_touserdata(L, 2);
    console.warn('RegionClearRect was called but is not implemented :(');
    return 0;
}
/**
 * native RegionAddCell takes region whichRegion, real x, real y returns nothing
 */
function RegionAddCell(C, L) {
    let whichRegion = lua_1.lua_touserdata(L, 1);
    let x = lauxlib_1.luaL_checknumber(L, 2);
    let y = lauxlib_1.luaL_checknumber(L, 3);
    console.warn('RegionAddCell was called but is not implemented :(');
    return 0;
}
/**
 * native RegionAddCellAtLoc takes region whichRegion, location whichLocation returns nothing
 */
function RegionAddCellAtLoc(C, L) {
    let whichRegion = lua_1.lua_touserdata(L, 1);
    let whichLocation = lua_1.lua_touserdata(L, 2);
    console.warn('RegionAddCellAtLoc was called but is not implemented :(');
    return 0;
}
/**
 * native RegionClearCell takes region whichRegion, real x, real y returns nothing
 */
function RegionClearCell(C, L) {
    let whichRegion = lua_1.lua_touserdata(L, 1);
    let x = lauxlib_1.luaL_checknumber(L, 2);
    let y = lauxlib_1.luaL_checknumber(L, 3);
    console.warn('RegionClearCell was called but is not implemented :(');
    return 0;
}
/**
 * native RegionClearCellAtLoc takes region whichRegion, location whichLocation returns nothing
 */
function RegionClearCellAtLoc(C, L) {
    let whichRegion = lua_1.lua_touserdata(L, 1);
    let whichLocation = lua_1.lua_touserdata(L, 2);
    console.warn('RegionClearCellAtLoc was called but is not implemented :(');
    return 0;
}
/**
 * native Location takes real x, real y returns location
 */
function Location(C, L) {
    let x = lauxlib_1.luaL_checknumber(L, 1);
    let y = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('Location was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native RemoveLocation takes location whichLocation returns nothing
 */
function RemoveLocation(C, L) {
    let whichLocation = lua_1.lua_touserdata(L, 1);
    console.warn('RemoveLocation was called but is not implemented :(');
    return 0;
}
/**
 * native MoveLocation takes location whichLocation, real newX, real newY returns nothing
 */
function MoveLocation(C, L) {
    let whichLocation = lua_1.lua_touserdata(L, 1);
    let newX = lauxlib_1.luaL_checknumber(L, 2);
    let newY = lauxlib_1.luaL_checknumber(L, 3);
    console.warn('MoveLocation was called but is not implemented :(');
    return 0;
}
/**
 * native GetLocationX takes location whichLocation returns real
 */
function GetLocationX(C, L) {
    let whichLocation = lua_1.lua_touserdata(L, 1);
    console.warn('GetLocationX was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native GetLocationY takes location whichLocation returns real
 */
function GetLocationY(C, L) {
    let whichLocation = lua_1.lua_touserdata(L, 1);
    console.warn('GetLocationY was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native GetLocationZ takes location whichLocation returns real
 */
function GetLocationZ(C, L) {
    let whichLocation = lua_1.lua_touserdata(L, 1);
    console.warn('GetLocationZ was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native IsUnitInRegion takes region whichRegion, unit whichUnit returns boolean
 */
function IsUnitInRegion(C, L) {
    let whichRegion = lua_1.lua_touserdata(L, 1);
    let whichUnit = lua_1.lua_touserdata(L, 2);
    console.warn('IsUnitInRegion was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native IsPointInRegion takes region whichRegion, real x, real y returns boolean
 */
function IsPointInRegion(C, L) {
    let whichRegion = lua_1.lua_touserdata(L, 1);
    let x = lauxlib_1.luaL_checknumber(L, 2);
    let y = lauxlib_1.luaL_checknumber(L, 3);
    console.warn('IsPointInRegion was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native IsLocationInRegion takes region whichRegion, location whichLocation returns boolean
 */
function IsLocationInRegion(C, L) {
    let whichRegion = lua_1.lua_touserdata(L, 1);
    let whichLocation = lua_1.lua_touserdata(L, 2);
    console.warn('IsLocationInRegion was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native GetWorldBounds takes nothing returns rect
 */
function GetWorldBounds(C, L) {
    console.warn('GetWorldBounds was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native CreateTrigger takes nothing returns trigger
 */
function CreateTrigger(C, L) {
    lua_1.lua_pushlightuserdata(L, C.addHandle(new types_1.JassTrigger()));
    return 1;
}
/**
 * native DestroyTrigger takes trigger whichTrigger returns nothing
 */
function DestroyTrigger(C, L) {
    let whichTrigger = lua_1.lua_touserdata(L, 1);
    // In case it's registered, remove it.
    C.triggers.delete(whichTrigger);
    C.freeHandle(whichTrigger);
    return 0;
}
/**
 * native ResetTrigger takes trigger whichTrigger returns nothing
 */
function ResetTrigger(C, L) {
    let whichTrigger = lua_1.lua_touserdata(L, 1);
    console.warn('ResetTrigger was called but is not implemented :(');
    return 0;
}
/**
 * native EnableTrigger takes trigger whichTrigger returns nothing
 */
function EnableTrigger(C, L) {
    let whichTrigger = lua_1.lua_touserdata(L, 1);
    console.warn('EnableTrigger was called but is not implemented :(');
    return 0;
}
/**
 * native DisableTrigger takes trigger whichTrigger returns nothing
 */
function DisableTrigger(C, L) {
    let whichTrigger = lua_1.lua_touserdata(L, 1);
    console.warn('DisableTrigger was called but is not implemented :(');
    return 0;
}
/**
 * native IsTriggerEnabled takes trigger whichTrigger returns boolean
 */
function IsTriggerEnabled(C, L) {
    let whichTrigger = lua_1.lua_touserdata(L, 1);
    console.warn('IsTriggerEnabled was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native TriggerWaitOnSleeps takes trigger whichTrigger, boolean flag returns nothing
 */
function TriggerWaitOnSleeps(C, L) {
    let whichTrigger = lua_1.lua_touserdata(L, 1);
    let flag = lua_1.lua_toboolean(L, 2);
    console.warn('TriggerWaitOnSleeps was called but is not implemented :(');
    return 0;
}
/**
 * native IsTriggerWaitOnSleeps takes trigger whichTrigger returns boolean
 */
function IsTriggerWaitOnSleeps(C, L) {
    let whichTrigger = lua_1.lua_touserdata(L, 1);
    console.warn('IsTriggerWaitOnSleeps was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * constant native GetFilterUnit takes nothing returns unit
 */
function GetFilterUnit(C, L) {
    lua_1.lua_pushlightuserdata(L, C.filterUnit);
    return 1;
}
/**
 * constant native GetEnumUnit takes nothing returns unit
 */
function GetEnumUnit(C, L) {
    lua_1.lua_pushlightuserdata(L, C.enumUnit);
    return 1;
}
/**
 * constant native GetFilterDestructable takes nothing returns destructable
 */
function GetFilterDestructable(C, L) {
    console.warn('GetFilterDestructable was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetEnumDestructable takes nothing returns destructable
 */
function GetEnumDestructable(C, L) {
    console.warn('GetEnumDestructable was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetFilterItem takes nothing returns item
 */
function GetFilterItem(C, L) {
    console.warn('GetFilterItem was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetEnumItem takes nothing returns item
 */
function GetEnumItem(C, L) {
    console.warn('GetEnumItem was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetFilterPlayer takes nothing returns player
 */
function GetFilterPlayer(C, L) {
    console.warn('GetFilterPlayer was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetEnumPlayer takes nothing returns player
 */
function GetEnumPlayer(C, L) {
    lua_1.lua_pushlightuserdata(L, C.enumPlayer);
    return 1;
}
/**
 * constant native GetTriggeringTrigger takes nothing returns trigger
 */
function GetTriggeringTrigger(C, L) {
    let thread = C.currentThread;
    if (thread && thread.triggeringTrigger) {
        lua_1.lua_pushlightuserdata(L, thread.triggeringTrigger);
    }
    else {
        lua_1.lua_pushnil(L);
    }
    return 1;
}
/**
 * constant native GetTriggerEventId takes nothing returns eventid
 */
function GetTriggerEventId(C, L) {
    console.warn('GetTriggerEventId was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetTriggerEvalCount takes trigger whichTrigger returns integer
 */
function GetTriggerEvalCount(C, L) {
    let whichTrigger = lua_1.lua_touserdata(L, 1);
    console.warn('GetTriggerEvalCount was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * constant native GetTriggerExecCount takes trigger whichTrigger returns integer
 */
function GetTriggerExecCount(C, L) {
    let whichTrigger = lua_1.lua_touserdata(L, 1);
    console.warn('GetTriggerExecCount was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native ExecuteFunc takes string funcName returns nothing
 */
function ExecuteFunc(C, L) {
    let funcName = lauxlib_1.luaL_checkstring(L, 1);
    console.warn('ExecuteFunc was called but is not implemented :(');
    return 0;
}
/**
 * native And takes boolexpr operandA, boolexpr operandB returns boolexpr
 */
function And(C, L) {
    let operandA = lua_1.lua_touserdata(L, 1);
    let operandB = lua_1.lua_touserdata(L, 2);
    console.warn('And was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native Or takes boolexpr operandA, boolexpr operandB returns boolexpr
 */
function Or(C, L) {
    let operandA = lua_1.lua_touserdata(L, 1);
    let operandB = lua_1.lua_touserdata(L, 2);
    console.warn('Or was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native Not takes boolexpr operand returns boolexpr
 */
function Not(C, L) {
    let operand = lua_1.lua_touserdata(L, 1);
    console.warn('Not was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native Condition takes code func returns conditionfunc
 */
function Condition(C, L) {
    let func = lauxlib_1.luaL_ref(L, lua_1.LUA_REGISTRYINDEX);
    console.warn('Condition was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native DestroyCondition takes conditionfunc c returns nothing
 */
function DestroyCondition(C, L) {
    let c = lua_1.lua_touserdata(L, 1);
    console.warn('DestroyCondition was called but is not implemented :(');
    return 0;
}
/**
 * native Filter takes code func returns filterfunc
 */
function Filter(C, L) {
    let func = lauxlib_1.luaL_ref(L, lua_1.LUA_REGISTRYINDEX);
    console.warn('Filter was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native DestroyFilter takes filterfunc f returns nothing
 */
function DestroyFilter(C, L) {
    let f = lua_1.lua_touserdata(L, 1);
    console.warn('DestroyFilter was called but is not implemented :(');
    return 0;
}
/**
 * native DestroyBoolExpr takes boolexpr e returns nothing
 */
function DestroyBoolExpr(C, L) {
    let e = lua_1.lua_touserdata(L, 1);
    console.warn('DestroyBoolExpr was called but is not implemented :(');
    return 0;
}
/**
 * native TriggerRegisterVariableEvent takes trigger whichTrigger, string varName, limitop opcode, real limitval returns event
 */
function TriggerRegisterVariableEvent(C, L) {
    let whichTrigger = lua_1.lua_touserdata(L, 1);
    let varName = lauxlib_1.luaL_checkstring(L, 2);
    let opcode = lua_1.lua_touserdata(L, 3);
    let limitval = lauxlib_1.luaL_checknumber(L, 4);
    console.warn('TriggerRegisterVariableEvent was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native TriggerRegisterTimerEvent takes trigger whichTrigger, real timeout, boolean periodic returns event
 */
function TriggerRegisterTimerEvent(C, L) {
    let whichTrigger = lua_1.lua_touserdata(L, 1);
    let timeout = lauxlib_1.luaL_checknumber(L, 2);
    let periodic = lua_1.lua_toboolean(L, 3);
    console.warn('TriggerRegisterTimerEvent was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native TriggerRegisterTimerExpireEvent takes trigger whichTrigger, timer t returns event
 */
function TriggerRegisterTimerExpireEvent(C, L) {
    let whichTrigger = lua_1.lua_touserdata(L, 1);
    let t = lua_1.lua_touserdata(L, 2);
    console.warn('TriggerRegisterTimerExpireEvent was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native TriggerRegisterGameStateEvent takes trigger whichTrigger, gamestate whichState, limitop opcode, real limitval returns event
 */
function TriggerRegisterGameStateEvent(C, L) {
    let whichTrigger = lua_1.lua_touserdata(L, 1);
    let whichState = lua_1.lua_touserdata(L, 2);
    let opcode = lua_1.lua_touserdata(L, 3);
    let limitval = lauxlib_1.luaL_checknumber(L, 4);
    console.warn('TriggerRegisterGameStateEvent was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native TriggerRegisterDialogEvent takes trigger whichTrigger, dialog whichDialog returns event
 */
function TriggerRegisterDialogEvent(C, L) {
    let whichTrigger = lua_1.lua_touserdata(L, 1);
    let whichDialog = lua_1.lua_touserdata(L, 2);
    console.warn('TriggerRegisterDialogEvent was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native TriggerRegisterDialogButtonEvent takes trigger whichTrigger, button whichButton returns event
 */
function TriggerRegisterDialogButtonEvent(C, L) {
    let whichTrigger = lua_1.lua_touserdata(L, 1);
    let whichButton = lua_1.lua_touserdata(L, 2);
    console.warn('TriggerRegisterDialogButtonEvent was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetEventGameState takes nothing returns gamestate
 */
function GetEventGameState(C, L) {
    console.warn('GetEventGameState was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native TriggerRegisterGameEvent takes trigger whichTrigger, gameevent whichGameEvent returns event
 */
function TriggerRegisterGameEvent(C, L) {
    let whichTrigger = lua_1.lua_touserdata(L, 1);
    let whichGameEvent = lua_1.lua_touserdata(L, 2);
    console.warn('TriggerRegisterGameEvent was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetWinningPlayer takes nothing returns player
 */
function GetWinningPlayer(C, L) {
    console.warn('GetWinningPlayer was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native TriggerRegisterEnterRegion takes trigger whichTrigger, region whichRegion, boolexpr filter returns event
 */
function TriggerRegisterEnterRegion(C, L) {
    let whichTrigger = lua_1.lua_touserdata(L, 1);
    let whichRegion = lua_1.lua_touserdata(L, 2);
    let filter = lua_1.lua_touserdata(L, 3);
    console.warn('TriggerRegisterEnterRegion was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetTriggeringRegion takes nothing returns region
 */
function GetTriggeringRegion(C, L) {
    console.warn('GetTriggeringRegion was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetEnteringUnit takes nothing returns unit
 */
function GetEnteringUnit(C, L) {
    console.warn('GetEnteringUnit was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native TriggerRegisterLeaveRegion takes trigger whichTrigger, region whichRegion, boolexpr filter returns event
 */
function TriggerRegisterLeaveRegion(C, L) {
    let whichTrigger = lua_1.lua_touserdata(L, 1);
    let whichRegion = lua_1.lua_touserdata(L, 2);
    let filter = lua_1.lua_touserdata(L, 3);
    console.warn('TriggerRegisterLeaveRegion was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetLeavingUnit takes nothing returns unit
 */
function GetLeavingUnit(C, L) {
    console.warn('GetLeavingUnit was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native TriggerRegisterTrackableHitEvent takes trigger whichTrigger, trackable t returns event
 */
function TriggerRegisterTrackableHitEvent(C, L) {
    let whichTrigger = lua_1.lua_touserdata(L, 1);
    let t = lua_1.lua_touserdata(L, 2);
    console.warn('TriggerRegisterTrackableHitEvent was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native TriggerRegisterTrackableTrackEvent takes trigger whichTrigger, trackable t returns event
 */
function TriggerRegisterTrackableTrackEvent(C, L) {
    let whichTrigger = lua_1.lua_touserdata(L, 1);
    let t = lua_1.lua_touserdata(L, 2);
    console.warn('TriggerRegisterTrackableTrackEvent was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetTriggeringTrackable takes nothing returns trackable
 */
function GetTriggeringTrackable(C, L) {
    console.warn('GetTriggeringTrackable was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetClickedButton takes nothing returns button
 */
function GetClickedButton(C, L) {
    console.warn('GetClickedButton was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetClickedDialog takes nothing returns dialog
 */
function GetClickedDialog(C, L) {
    console.warn('GetClickedDialog was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetTournamentFinishSoonTimeRemaining takes nothing returns real
 */
function GetTournamentFinishSoonTimeRemaining(C, L) {
    console.warn('GetTournamentFinishSoonTimeRemaining was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * constant native GetTournamentFinishNowRule takes nothing returns integer
 */
function GetTournamentFinishNowRule(C, L) {
    console.warn('GetTournamentFinishNowRule was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * constant native GetTournamentFinishNowPlayer takes nothing returns player
 */
function GetTournamentFinishNowPlayer(C, L) {
    console.warn('GetTournamentFinishNowPlayer was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetTournamentScore takes player whichPlayer returns integer
 */
function GetTournamentScore(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    console.warn('GetTournamentScore was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * constant native GetSaveBasicFilename takes nothing returns string
 */
function GetSaveBasicFilename(C, L) {
    console.warn('GetSaveBasicFilename was called but is not implemented :(');
    lua_1.lua_pushstring(L, '');
    return 1;
}
/**
 * native TriggerRegisterPlayerEvent takes trigger whichTrigger, player whichPlayer, playerevent whichPlayerEvent returns event
 */
function TriggerRegisterPlayerEvent(C, L) {
    let whichTrigger = lua_1.lua_touserdata(L, 1);
    let whichPlayer = lua_1.lua_touserdata(L, 2);
    let whichPlayerEvent = lua_1.lua_touserdata(L, 3);
    console.warn('TriggerRegisterPlayerEvent was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetTriggerPlayer takes nothing returns player
 */
function GetTriggerPlayer(C, L) {
    console.warn('GetTriggerPlayer was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native TriggerRegisterPlayerUnitEvent takes trigger whichTrigger, player whichPlayer, playerunitevent whichPlayerUnitEvent, boolexpr filter returns event
 */
function TriggerRegisterPlayerUnitEvent(C, L) {
    let whichTrigger = lua_1.lua_touserdata(L, 1);
    let whichPlayer = lua_1.lua_touserdata(L, 2);
    let whichPlayerUnitEvent = lua_1.lua_touserdata(L, 3);
    let filter = lua_1.lua_touserdata(L, 4);
    console.warn('TriggerRegisterPlayerUnitEvent was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetLevelingUnit takes nothing returns unit
 */
function GetLevelingUnit(C, L) {
    console.warn('GetLevelingUnit was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetLearningUnit takes nothing returns unit
 */
function GetLearningUnit(C, L) {
    console.warn('GetLearningUnit was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetLearnedSkill takes nothing returns integer
 */
function GetLearnedSkill(C, L) {
    console.warn('GetLearnedSkill was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * constant native GetLearnedSkillLevel takes nothing returns integer
 */
function GetLearnedSkillLevel(C, L) {
    console.warn('GetLearnedSkillLevel was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * constant native GetRevivableUnit takes nothing returns unit
 */
function GetRevivableUnit(C, L) {
    console.warn('GetRevivableUnit was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetRevivingUnit takes nothing returns unit
 */
function GetRevivingUnit(C, L) {
    console.warn('GetRevivingUnit was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetAttacker takes nothing returns unit
 */
function GetAttacker(C, L) {
    console.warn('GetAttacker was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetRescuer takes nothing returns unit
 */
function GetRescuer(C, L) {
    console.warn('GetRescuer was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetDyingUnit takes nothing returns unit
 */
function GetDyingUnit(C, L) {
    console.warn('GetDyingUnit was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetKillingUnit takes nothing returns unit
 */
function GetKillingUnit(C, L) {
    console.warn('GetKillingUnit was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetDecayingUnit takes nothing returns unit
 */
function GetDecayingUnit(C, L) {
    console.warn('GetDecayingUnit was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetConstructingStructure takes nothing returns unit
 */
function GetConstructingStructure(C, L) {
    console.warn('GetConstructingStructure was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetCancelledStructure takes nothing returns unit
 */
function GetCancelledStructure(C, L) {
    console.warn('GetCancelledStructure was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetConstructedStructure takes nothing returns unit
 */
function GetConstructedStructure(C, L) {
    console.warn('GetConstructedStructure was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetResearchingUnit takes nothing returns unit
 */
function GetResearchingUnit(C, L) {
    console.warn('GetResearchingUnit was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetResearched takes nothing returns integer
 */
function GetResearched(C, L) {
    console.warn('GetResearched was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * constant native GetTrainedUnitType takes nothing returns integer
 */
function GetTrainedUnitType(C, L) {
    console.warn('GetTrainedUnitType was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * constant native GetTrainedUnit takes nothing returns unit
 */
function GetTrainedUnit(C, L) {
    console.warn('GetTrainedUnit was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetDetectedUnit takes nothing returns unit
 */
function GetDetectedUnit(C, L) {
    console.warn('GetDetectedUnit was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetSummoningUnit takes nothing returns unit
 */
function GetSummoningUnit(C, L) {
    console.warn('GetSummoningUnit was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetSummonedUnit takes nothing returns unit
 */
function GetSummonedUnit(C, L) {
    console.warn('GetSummonedUnit was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetTransportUnit takes nothing returns unit
 */
function GetTransportUnit(C, L) {
    console.warn('GetTransportUnit was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetLoadedUnit takes nothing returns unit
 */
function GetLoadedUnit(C, L) {
    console.warn('GetLoadedUnit was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetSellingUnit takes nothing returns unit
 */
function GetSellingUnit(C, L) {
    console.warn('GetSellingUnit was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetSoldUnit takes nothing returns unit
 */
function GetSoldUnit(C, L) {
    console.warn('GetSoldUnit was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetBuyingUnit takes nothing returns unit
 */
function GetBuyingUnit(C, L) {
    console.warn('GetBuyingUnit was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetSoldItem takes nothing returns item
 */
function GetSoldItem(C, L) {
    console.warn('GetSoldItem was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetChangingUnit takes nothing returns unit
 */
function GetChangingUnit(C, L) {
    console.warn('GetChangingUnit was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetChangingUnitPrevOwner takes nothing returns player
 */
function GetChangingUnitPrevOwner(C, L) {
    console.warn('GetChangingUnitPrevOwner was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetManipulatingUnit takes nothing returns unit
 */
function GetManipulatingUnit(C, L) {
    console.warn('GetManipulatingUnit was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetManipulatedItem takes nothing returns item
 */
function GetManipulatedItem(C, L) {
    console.warn('GetManipulatedItem was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetOrderedUnit takes nothing returns unit
 */
function GetOrderedUnit(C, L) {
    console.warn('GetOrderedUnit was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetIssuedOrderId takes nothing returns integer
 */
function GetIssuedOrderId(C, L) {
    console.warn('GetIssuedOrderId was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * constant native GetOrderPointX takes nothing returns real
 */
function GetOrderPointX(C, L) {
    console.warn('GetOrderPointX was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * constant native GetOrderPointY takes nothing returns real
 */
function GetOrderPointY(C, L) {
    console.warn('GetOrderPointY was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * constant native GetOrderPointLoc takes nothing returns location
 */
function GetOrderPointLoc(C, L) {
    console.warn('GetOrderPointLoc was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetOrderTarget takes nothing returns widget
 */
function GetOrderTarget(C, L) {
    console.warn('GetOrderTarget was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetOrderTargetDestructable takes nothing returns destructable
 */
function GetOrderTargetDestructable(C, L) {
    console.warn('GetOrderTargetDestructable was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetOrderTargetItem takes nothing returns item
 */
function GetOrderTargetItem(C, L) {
    console.warn('GetOrderTargetItem was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetOrderTargetUnit takes nothing returns unit
 */
function GetOrderTargetUnit(C, L) {
    console.warn('GetOrderTargetUnit was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetSpellAbilityUnit takes nothing returns unit
 */
function GetSpellAbilityUnit(C, L) {
    console.warn('GetSpellAbilityUnit was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetSpellAbilityId takes nothing returns integer
 */
function GetSpellAbilityId(C, L) {
    console.warn('GetSpellAbilityId was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * constant native GetSpellAbility takes nothing returns ability
 */
function GetSpellAbility(C, L) {
    console.warn('GetSpellAbility was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetSpellTargetLoc takes nothing returns location
 */
function GetSpellTargetLoc(C, L) {
    console.warn('GetSpellTargetLoc was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetSpellTargetX takes nothing returns real
 */
function GetSpellTargetX(C, L) {
    console.warn('GetSpellTargetX was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * constant native GetSpellTargetY takes nothing returns real
 */
function GetSpellTargetY(C, L) {
    console.warn('GetSpellTargetY was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * constant native GetSpellTargetDestructable takes nothing returns destructable
 */
function GetSpellTargetDestructable(C, L) {
    console.warn('GetSpellTargetDestructable was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetSpellTargetItem takes nothing returns item
 */
function GetSpellTargetItem(C, L) {
    console.warn('GetSpellTargetItem was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetSpellTargetUnit takes nothing returns unit
 */
function GetSpellTargetUnit(C, L) {
    console.warn('GetSpellTargetUnit was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native TriggerRegisterPlayerAllianceChange takes trigger whichTrigger, player whichPlayer, alliancetype whichAlliance returns event
 */
function TriggerRegisterPlayerAllianceChange(C, L) {
    let whichTrigger = lua_1.lua_touserdata(L, 1);
    let whichPlayer = lua_1.lua_touserdata(L, 2);
    let whichAlliance = lua_1.lua_touserdata(L, 3);
    console.warn('TriggerRegisterPlayerAllianceChange was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native TriggerRegisterPlayerStateEvent takes trigger whichTrigger, player whichPlayer, playerstate whichState, limitop opcode, real limitval returns event
 */
function TriggerRegisterPlayerStateEvent(C, L) {
    let whichTrigger = lua_1.lua_touserdata(L, 1);
    let whichPlayer = lua_1.lua_touserdata(L, 2);
    let whichState = lua_1.lua_touserdata(L, 3);
    let opcode = lua_1.lua_touserdata(L, 4);
    let limitval = lauxlib_1.luaL_checknumber(L, 5);
    console.warn('TriggerRegisterPlayerStateEvent was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetEventPlayerState takes nothing returns playerstate
 */
function GetEventPlayerState(C, L) {
    console.warn('GetEventPlayerState was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native TriggerRegisterPlayerChatEvent takes trigger whichTrigger, player whichPlayer, string chatMessageToDetect, boolean exactMatchOnly returns event
 */
function TriggerRegisterPlayerChatEvent(C, L) {
    let whichTrigger = lua_1.lua_touserdata(L, 1);
    let whichPlayer = lua_1.lua_touserdata(L, 2);
    let chatMessageToDetect = lauxlib_1.luaL_checkstring(L, 3);
    let exactMatchOnly = lua_1.lua_toboolean(L, 4);
    console.warn('TriggerRegisterPlayerChatEvent was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetEventPlayerChatString takes nothing returns string
 */
function GetEventPlayerChatString(C, L) {
    console.warn('GetEventPlayerChatString was called but is not implemented :(');
    lua_1.lua_pushstring(L, '');
    return 1;
}
/**
 * constant native GetEventPlayerChatStringMatched takes nothing returns string
 */
function GetEventPlayerChatStringMatched(C, L) {
    console.warn('GetEventPlayerChatStringMatched was called but is not implemented :(');
    lua_1.lua_pushstring(L, '');
    return 1;
}
/**
 * native TriggerRegisterDeathEvent takes trigger whichTrigger, widget whichWidget returns event
 */
function TriggerRegisterDeathEvent(C, L) {
    let whichTrigger = lua_1.lua_touserdata(L, 1);
    let whichWidget = lua_1.lua_touserdata(L, 2);
    console.warn('TriggerRegisterDeathEvent was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetTriggerUnit takes nothing returns unit
 */
function GetTriggerUnit(C, L) {
    let thread = C.currentThread;
    if (thread && thread.triggerUnit) {
        lua_1.lua_pushlightuserdata(L, thread.triggerUnit);
    }
    else {
        lua_1.lua_pushnil(L);
    }
    return 1;
}
/**
 * native TriggerRegisterUnitStateEvent takes trigger whichTrigger, unit whichUnit, unitstate whichState, limitop opcode, real limitval returns event
 */
function TriggerRegisterUnitStateEvent(C, L) {
    let whichTrigger = lua_1.lua_touserdata(L, 1);
    let whichUnit = lua_1.lua_touserdata(L, 2);
    let whichState = lua_1.lua_touserdata(L, 3);
    let opcode = lua_1.lua_touserdata(L, 4);
    let limitval = lauxlib_1.luaL_checknumber(L, 5);
    console.warn('TriggerRegisterUnitStateEvent was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetEventUnitState takes nothing returns unitstate
 */
function GetEventUnitState(C, L) {
    console.warn('GetEventUnitState was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native TriggerRegisterUnitEvent takes trigger whichTrigger, unit whichUnit, unitevent whichEvent returns event
 */
function TriggerRegisterUnitEvent(C, L) {
    let whichTrigger = lua_1.lua_touserdata(L, 1);
    let whichUnit = lua_1.lua_touserdata(L, 2);
    let whichEvent = lua_1.lua_touserdata(L, 3);
    console.warn('TriggerRegisterUnitEvent was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetEventDamage takes nothing returns real
 */
function GetEventDamage(C, L) {
    console.warn('GetEventDamage was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * constant native GetEventDamageSource takes nothing returns unit
 */
function GetEventDamageSource(C, L) {
    console.warn('GetEventDamageSource was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetEventDetectingPlayer takes nothing returns player
 */
function GetEventDetectingPlayer(C, L) {
    console.warn('GetEventDetectingPlayer was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native TriggerRegisterFilterUnitEvent takes trigger whichTrigger, unit whichUnit, unitevent whichEvent, boolexpr filter returns event
 */
function TriggerRegisterFilterUnitEvent(C, L) {
    let whichTrigger = lua_1.lua_touserdata(L, 1);
    let whichUnit = lua_1.lua_touserdata(L, 2);
    let whichEvent = lua_1.lua_touserdata(L, 3);
    let filter = lua_1.lua_touserdata(L, 4);
    console.warn('TriggerRegisterFilterUnitEvent was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetEventTargetUnit takes nothing returns unit
 */
function GetEventTargetUnit(C, L) {
    console.warn('GetEventTargetUnit was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native TriggerRegisterUnitInRange takes trigger whichTrigger, unit whichUnit, real range, boolexpr filter returns event
 */
function TriggerRegisterUnitInRange(C, L) {
    let whichTrigger = lua_1.lua_touserdata(L, 1);
    let whichUnit = lua_1.lua_touserdata(L, 2);
    let range = lauxlib_1.luaL_checknumber(L, 3);
    let filter = lua_1.lua_touserdata(L, 4);
    console.warn('TriggerRegisterUnitInRange was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native TriggerAddCondition takes trigger whichTrigger, boolexpr condition returns triggercondition
 */
function TriggerAddCondition(C, L) {
    let whichTrigger = lua_1.lua_touserdata(L, 1);
    let condition = lua_1.lua_touserdata(L, 2);
    console.warn('TriggerAddCondition was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native TriggerRemoveCondition takes trigger whichTrigger, triggercondition whichCondition returns nothing
 */
function TriggerRemoveCondition(C, L) {
    let whichTrigger = lua_1.lua_touserdata(L, 1);
    let whichCondition = lua_1.lua_touserdata(L, 2);
    console.warn('TriggerRemoveCondition was called but is not implemented :(');
    return 0;
}
/**
 * native TriggerClearConditions takes trigger whichTrigger returns nothing
 */
function TriggerClearConditions(C, L) {
    let whichTrigger = lua_1.lua_touserdata(L, 1);
    console.warn('TriggerClearConditions was called but is not implemented :(');
    return 0;
}
/**
 * native TriggerAddAction takes trigger whichTrigger, code actionFunc returns triggeraction
 */
function TriggerAddAction(C, L) {
    let whichTrigger = lua_1.lua_touserdata(L, 1);
    let actionFunc = lauxlib_1.luaL_ref(L, lua_1.LUA_REGISTRYINDEX);
    console.warn('TriggerAddAction was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native TriggerRemoveAction takes trigger whichTrigger, triggeraction whichAction returns nothing
 */
function TriggerRemoveAction(C, L) {
    let whichTrigger = lua_1.lua_touserdata(L, 1);
    let whichAction = lua_1.lua_touserdata(L, 2);
    console.warn('TriggerRemoveAction was called but is not implemented :(');
    return 0;
}
/**
 * native TriggerClearActions takes trigger whichTrigger returns nothing
 */
function TriggerClearActions(C, L) {
    let whichTrigger = lua_1.lua_touserdata(L, 1);
    console.warn('TriggerClearActions was called but is not implemented :(');
    return 0;
}
/**
 * native TriggerSleepAction takes real timeout returns nothing
 */
function TriggerSleepAction(C, L) {
    let timeout = lauxlib_1.luaL_checknumber(L, 1);
    lua_1.lua_pushnumber(L, timeout);
    lua_1.lua_yield(L, 1);
    return 0;
}
/**
 * native TriggerWaitForSound takes sound s, real offset returns nothing
 */
function TriggerWaitForSound(C, L) {
    let s = lua_1.lua_touserdata(L, 1);
    let offset = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('TriggerWaitForSound was called but is not implemented :(');
    return 0;
}
/**
 * native TriggerEvaluate takes trigger whichTrigger returns boolean
 */
function TriggerEvaluate(C, L) {
    let whichTrigger = lua_1.lua_touserdata(L, 1);
    console.warn('TriggerEvaluate was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native TriggerExecute takes trigger whichTrigger returns nothing
 */
function TriggerExecute(C, L) {
    let whichTrigger = lua_1.lua_touserdata(L, 1);
    console.warn('TriggerExecute was called but is not implemented :(');
    return 0;
}
/**
 * native TriggerExecuteWait takes trigger whichTrigger returns nothing
 */
function TriggerExecuteWait(C, L) {
    let whichTrigger = lua_1.lua_touserdata(L, 1);
    console.warn('TriggerExecuteWait was called but is not implemented :(');
    return 0;
}
/**
 * native TriggerSyncStart takes nothing returns nothing
 */
function TriggerSyncStart(C, L) {
    console.warn('TriggerSyncStart was called but is not implemented :(');
    return 0;
}
/**
 * native TriggerSyncReady takes nothing returns nothing
 */
function TriggerSyncReady(C, L) {
    console.warn('TriggerSyncReady was called but is not implemented :(');
    return 0;
}
/**
 * native GetWidgetLife takes widget whichWidget returns real
 */
function GetWidgetLife(C, L) {
    let whichWidget = lua_1.lua_touserdata(L, 1);
    console.warn('GetWidgetLife was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native SetWidgetLife takes widget whichWidget, real newLife returns nothing
 */
function SetWidgetLife(C, L) {
    let whichWidget = lua_1.lua_touserdata(L, 1);
    let newLife = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('SetWidgetLife was called but is not implemented :(');
    return 0;
}
/**
 * native GetWidgetX takes widget whichWidget returns real
 */
function GetWidgetX(C, L) {
    let whichWidget = lua_1.lua_touserdata(L, 1);
    console.warn('GetWidgetX was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native GetWidgetY takes widget whichWidget returns real
 */
function GetWidgetY(C, L) {
    let whichWidget = lua_1.lua_touserdata(L, 1);
    console.warn('GetWidgetY was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * constant native GetTriggerWidget takes nothing returns widget
 */
function GetTriggerWidget(C, L) {
    console.warn('GetTriggerWidget was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native CreateDestructable takes integer objectid, real x, real y, real face, real scale, integer variation returns destructable
 */
function CreateDestructable(C, L) {
    let objectid = lauxlib_1.luaL_checkinteger(L, 1);
    let x = lauxlib_1.luaL_checknumber(L, 2);
    let y = lauxlib_1.luaL_checknumber(L, 3);
    let face = lauxlib_1.luaL_checknumber(L, 4);
    let scale = lauxlib_1.luaL_checknumber(L, 5);
    let variation = lauxlib_1.luaL_checkinteger(L, 6);
    console.warn('CreateDestructable was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native CreateDestructableZ takes integer objectid, real x, real y, real z, real face, real scale, integer variation returns destructable
 */
function CreateDestructableZ(C, L) {
    let objectid = lauxlib_1.luaL_checkinteger(L, 1);
    let x = lauxlib_1.luaL_checknumber(L, 2);
    let y = lauxlib_1.luaL_checknumber(L, 3);
    let z = lauxlib_1.luaL_checknumber(L, 4);
    let face = lauxlib_1.luaL_checknumber(L, 5);
    let scale = lauxlib_1.luaL_checknumber(L, 6);
    let variation = lauxlib_1.luaL_checkinteger(L, 7);
    console.warn('CreateDestructableZ was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native CreateDeadDestructable takes integer objectid, real x, real y, real face, real scale, integer variation returns destructable
 */
function CreateDeadDestructable(C, L) {
    let objectid = lauxlib_1.luaL_checkinteger(L, 1);
    let x = lauxlib_1.luaL_checknumber(L, 2);
    let y = lauxlib_1.luaL_checknumber(L, 3);
    let face = lauxlib_1.luaL_checknumber(L, 4);
    let scale = lauxlib_1.luaL_checknumber(L, 5);
    let variation = lauxlib_1.luaL_checkinteger(L, 6);
    console.warn('CreateDeadDestructable was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native CreateDeadDestructableZ takes integer objectid, real x, real y, real z, real face, real scale, integer variation returns destructable
 */
function CreateDeadDestructableZ(C, L) {
    let objectid = lauxlib_1.luaL_checkinteger(L, 1);
    let x = lauxlib_1.luaL_checknumber(L, 2);
    let y = lauxlib_1.luaL_checknumber(L, 3);
    let z = lauxlib_1.luaL_checknumber(L, 4);
    let face = lauxlib_1.luaL_checknumber(L, 5);
    let scale = lauxlib_1.luaL_checknumber(L, 6);
    let variation = lauxlib_1.luaL_checkinteger(L, 7);
    console.warn('CreateDeadDestructableZ was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native RemoveDestructable takes destructable d returns nothing
 */
function RemoveDestructable(C, L) {
    let d = lua_1.lua_touserdata(L, 1);
    console.warn('RemoveDestructable was called but is not implemented :(');
    return 0;
}
/**
 * native KillDestructable takes destructable d returns nothing
 */
function KillDestructable(C, L) {
    let d = lua_1.lua_touserdata(L, 1);
    console.warn('KillDestructable was called but is not implemented :(');
    return 0;
}
/**
 * native SetDestructableInvulnerable takes destructable d, boolean flag returns nothing
 */
function SetDestructableInvulnerable(C, L) {
    let d = lua_1.lua_touserdata(L, 1);
    let flag = lua_1.lua_toboolean(L, 2);
    console.warn('SetDestructableInvulnerable was called but is not implemented :(');
    return 0;
}
/**
 * native IsDestructableInvulnerable takes destructable d returns boolean
 */
function IsDestructableInvulnerable(C, L) {
    let d = lua_1.lua_touserdata(L, 1);
    console.warn('IsDestructableInvulnerable was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native EnumDestructablesInRect takes rect r, boolexpr filter, code actionFunc returns nothing
 */
function EnumDestructablesInRect(C, L) {
    let r = lua_1.lua_touserdata(L, 1);
    let filter = lua_1.lua_touserdata(L, 2);
    let actionFunc = lauxlib_1.luaL_ref(L, lua_1.LUA_REGISTRYINDEX);
    console.warn('EnumDestructablesInRect was called but is not implemented :(');
    return 0;
}
/**
 * native GetDestructableTypeId takes destructable d returns integer
 */
function GetDestructableTypeId(C, L) {
    let d = lua_1.lua_touserdata(L, 1);
    console.warn('GetDestructableTypeId was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native GetDestructableX takes destructable d returns real
 */
function GetDestructableX(C, L) {
    let d = lua_1.lua_touserdata(L, 1);
    console.warn('GetDestructableX was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native GetDestructableY takes destructable d returns real
 */
function GetDestructableY(C, L) {
    let d = lua_1.lua_touserdata(L, 1);
    console.warn('GetDestructableY was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native SetDestructableLife takes destructable d, real life returns nothing
 */
function SetDestructableLife(C, L) {
    let d = lua_1.lua_touserdata(L, 1);
    let life = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('SetDestructableLife was called but is not implemented :(');
    return 0;
}
/**
 * native GetDestructableLife takes destructable d returns real
 */
function GetDestructableLife(C, L) {
    let d = lua_1.lua_touserdata(L, 1);
    console.warn('GetDestructableLife was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native SetDestructableMaxLife takes destructable d, real max returns nothing
 */
function SetDestructableMaxLife(C, L) {
    let d = lua_1.lua_touserdata(L, 1);
    let max = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('SetDestructableMaxLife was called but is not implemented :(');
    return 0;
}
/**
 * native GetDestructableMaxLife takes destructable d returns real
 */
function GetDestructableMaxLife(C, L) {
    let d = lua_1.lua_touserdata(L, 1);
    console.warn('GetDestructableMaxLife was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native DestructableRestoreLife takes destructable d, real life, boolean birth returns nothing
 */
function DestructableRestoreLife(C, L) {
    let d = lua_1.lua_touserdata(L, 1);
    let life = lauxlib_1.luaL_checknumber(L, 2);
    let birth = lua_1.lua_toboolean(L, 3);
    console.warn('DestructableRestoreLife was called but is not implemented :(');
    return 0;
}
/**
 * native QueueDestructableAnimation takes destructable d, string whichAnimation returns nothing
 */
function QueueDestructableAnimation(C, L) {
    let d = lua_1.lua_touserdata(L, 1);
    let whichAnimation = lauxlib_1.luaL_checkstring(L, 2);
    console.warn('QueueDestructableAnimation was called but is not implemented :(');
    return 0;
}
/**
 * native SetDestructableAnimation takes destructable d, string whichAnimation returns nothing
 */
function SetDestructableAnimation(C, L) {
    let d = lua_1.lua_touserdata(L, 1);
    let whichAnimation = lauxlib_1.luaL_checkstring(L, 2);
    console.warn('SetDestructableAnimation was called but is not implemented :(');
    return 0;
}
/**
 * native SetDestructableAnimationSpeed takes destructable d, real speedFactor returns nothing
 */
function SetDestructableAnimationSpeed(C, L) {
    let d = lua_1.lua_touserdata(L, 1);
    let speedFactor = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('SetDestructableAnimationSpeed was called but is not implemented :(');
    return 0;
}
/**
 * native ShowDestructable takes destructable d, boolean flag returns nothing
 */
function ShowDestructable(C, L) {
    let d = lua_1.lua_touserdata(L, 1);
    let flag = lua_1.lua_toboolean(L, 2);
    console.warn('ShowDestructable was called but is not implemented :(');
    return 0;
}
/**
 * native GetDestructableOccluderHeight takes destructable d returns real
 */
function GetDestructableOccluderHeight(C, L) {
    let d = lua_1.lua_touserdata(L, 1);
    console.warn('GetDestructableOccluderHeight was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native SetDestructableOccluderHeight takes destructable d, real height returns nothing
 */
function SetDestructableOccluderHeight(C, L) {
    let d = lua_1.lua_touserdata(L, 1);
    let height = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('SetDestructableOccluderHeight was called but is not implemented :(');
    return 0;
}
/**
 * native GetDestructableName takes destructable d returns string
 */
function GetDestructableName(C, L) {
    let d = lua_1.lua_touserdata(L, 1);
    console.warn('GetDestructableName was called but is not implemented :(');
    lua_1.lua_pushstring(L, '');
    return 1;
}
/**
 * constant native GetTriggerDestructable takes nothing returns destructable
 */
function GetTriggerDestructable(C, L) {
    console.warn('GetTriggerDestructable was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native CreateItem takes integer itemid, real x, real y returns item
 */
function CreateItem(C, L) {
    let itemid = lauxlib_1.luaL_checkinteger(L, 1);
    let x = lauxlib_1.luaL_checknumber(L, 2);
    let y = lauxlib_1.luaL_checknumber(L, 3);
    console.warn('CreateItem was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native RemoveItem takes item whichItem returns nothing
 */
function RemoveItem(C, L) {
    let whichItem = lua_1.lua_touserdata(L, 1);
    console.warn('RemoveItem was called but is not implemented :(');
    return 0;
}
/**
 * native GetItemPlayer takes item whichItem returns player
 */
function GetItemPlayer(C, L) {
    let whichItem = lua_1.lua_touserdata(L, 1);
    console.warn('GetItemPlayer was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native GetItemTypeId takes item i returns integer
 */
function GetItemTypeId(C, L) {
    let i = lua_1.lua_touserdata(L, 1);
    console.warn('GetItemTypeId was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native GetItemX takes item i returns real
 */
function GetItemX(C, L) {
    let i = lua_1.lua_touserdata(L, 1);
    console.warn('GetItemX was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native GetItemY takes item i returns real
 */
function GetItemY(C, L) {
    let i = lua_1.lua_touserdata(L, 1);
    console.warn('GetItemY was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native SetItemPosition takes item i, real x, real y returns nothing
 */
function SetItemPosition(C, L) {
    let i = lua_1.lua_touserdata(L, 1);
    let x = lauxlib_1.luaL_checknumber(L, 2);
    let y = lauxlib_1.luaL_checknumber(L, 3);
    console.warn('SetItemPosition was called but is not implemented :(');
    return 0;
}
/**
 * native SetItemDropOnDeath takes item whichItem, boolean flag returns nothing
 */
function SetItemDropOnDeath(C, L) {
    let whichItem = lua_1.lua_touserdata(L, 1);
    let flag = lua_1.lua_toboolean(L, 2);
    console.warn('SetItemDropOnDeath was called but is not implemented :(');
    return 0;
}
/**
 * native SetItemDroppable takes item i, boolean flag returns nothing
 */
function SetItemDroppable(C, L) {
    let i = lua_1.lua_touserdata(L, 1);
    let flag = lua_1.lua_toboolean(L, 2);
    console.warn('SetItemDroppable was called but is not implemented :(');
    return 0;
}
/**
 * native SetItemPawnable takes item i, boolean flag returns nothing
 */
function SetItemPawnable(C, L) {
    let i = lua_1.lua_touserdata(L, 1);
    let flag = lua_1.lua_toboolean(L, 2);
    console.warn('SetItemPawnable was called but is not implemented :(');
    return 0;
}
/**
 * native SetItemPlayer takes item whichItem, player whichPlayer, boolean changeColor returns nothing
 */
function SetItemPlayer(C, L) {
    let whichItem = lua_1.lua_touserdata(L, 1);
    let whichPlayer = lua_1.lua_touserdata(L, 2);
    let changeColor = lua_1.lua_toboolean(L, 3);
    console.warn('SetItemPlayer was called but is not implemented :(');
    return 0;
}
/**
 * native SetItemInvulnerable takes item whichItem, boolean flag returns nothing
 */
function SetItemInvulnerable(C, L) {
    let whichItem = lua_1.lua_touserdata(L, 1);
    let flag = lua_1.lua_toboolean(L, 2);
    console.warn('SetItemInvulnerable was called but is not implemented :(');
    return 0;
}
/**
 * native IsItemInvulnerable takes item whichItem returns boolean
 */
function IsItemInvulnerable(C, L) {
    let whichItem = lua_1.lua_touserdata(L, 1);
    console.warn('IsItemInvulnerable was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native SetItemVisible takes item whichItem, boolean show returns nothing
 */
function SetItemVisible(C, L) {
    let whichItem = lua_1.lua_touserdata(L, 1);
    let show = lua_1.lua_toboolean(L, 2);
    console.warn('SetItemVisible was called but is not implemented :(');
    return 0;
}
/**
 * native IsItemVisible takes item whichItem returns boolean
 */
function IsItemVisible(C, L) {
    let whichItem = lua_1.lua_touserdata(L, 1);
    console.warn('IsItemVisible was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native IsItemOwned takes item whichItem returns boolean
 */
function IsItemOwned(C, L) {
    let whichItem = lua_1.lua_touserdata(L, 1);
    console.warn('IsItemOwned was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native IsItemPowerup takes item whichItem returns boolean
 */
function IsItemPowerup(C, L) {
    let whichItem = lua_1.lua_touserdata(L, 1);
    console.warn('IsItemPowerup was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native IsItemSellable takes item whichItem returns boolean
 */
function IsItemSellable(C, L) {
    let whichItem = lua_1.lua_touserdata(L, 1);
    console.warn('IsItemSellable was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native IsItemPawnable takes item whichItem returns boolean
 */
function IsItemPawnable(C, L) {
    let whichItem = lua_1.lua_touserdata(L, 1);
    console.warn('IsItemPawnable was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native IsItemIdPowerup takes integer itemId returns boolean
 */
function IsItemIdPowerup(C, L) {
    let itemId = lauxlib_1.luaL_checkinteger(L, 1);
    console.warn('IsItemIdPowerup was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native IsItemIdSellable takes integer itemId returns boolean
 */
function IsItemIdSellable(C, L) {
    let itemId = lauxlib_1.luaL_checkinteger(L, 1);
    console.warn('IsItemIdSellable was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native IsItemIdPawnable takes integer itemId returns boolean
 */
function IsItemIdPawnable(C, L) {
    let itemId = lauxlib_1.luaL_checkinteger(L, 1);
    console.warn('IsItemIdPawnable was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native EnumItemsInRect takes rect r, boolexpr filter, code actionFunc returns nothing
 */
function EnumItemsInRect(C, L) {
    let r = lua_1.lua_touserdata(L, 1);
    let filter = lua_1.lua_touserdata(L, 2);
    let actionFunc = lauxlib_1.luaL_ref(L, lua_1.LUA_REGISTRYINDEX);
    console.warn('EnumItemsInRect was called but is not implemented :(');
    return 0;
}
/**
 * native GetItemLevel takes item whichItem returns integer
 */
function GetItemLevel(C, L) {
    let whichItem = lua_1.lua_touserdata(L, 1);
    console.warn('GetItemLevel was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native GetItemType takes item whichItem returns itemtype
 */
function GetItemType(C, L) {
    let whichItem = lua_1.lua_touserdata(L, 1);
    console.warn('GetItemType was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native SetItemDropID takes item whichItem, integer unitId returns nothing
 */
function SetItemDropID(C, L) {
    let whichItem = lua_1.lua_touserdata(L, 1);
    let unitId = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('SetItemDropID was called but is not implemented :(');
    return 0;
}
/**
 * constant native GetItemName takes item whichItem returns string
 */
function GetItemName(C, L) {
    let whichItem = lua_1.lua_touserdata(L, 1);
    console.warn('GetItemName was called but is not implemented :(');
    lua_1.lua_pushstring(L, '');
    return 1;
}
/**
 * native GetItemCharges takes item whichItem returns integer
 */
function GetItemCharges(C, L) {
    let whichItem = lua_1.lua_touserdata(L, 1);
    console.warn('GetItemCharges was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native SetItemCharges takes item whichItem, integer charges returns nothing
 */
function SetItemCharges(C, L) {
    let whichItem = lua_1.lua_touserdata(L, 1);
    let charges = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('SetItemCharges was called but is not implemented :(');
    return 0;
}
/**
 * native GetItemUserData takes item whichItem returns integer
 */
function GetItemUserData(C, L) {
    let whichItem = lua_1.lua_touserdata(L, 1);
    console.warn('GetItemUserData was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native SetItemUserData takes item whichItem, integer data returns nothing
 */
function SetItemUserData(C, L) {
    let whichItem = lua_1.lua_touserdata(L, 1);
    let data = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('SetItemUserData was called but is not implemented :(');
    return 0;
}
/**
 * native CreateUnit takes player id, integer unitid, real x, real y, real face returns unit
 */
function CreateUnit(C, L) {
    let id = lua_1.lua_touserdata(L, 1);
    let unitid = lauxlib_1.luaL_checkinteger(L, 2);
    let x = lauxlib_1.luaL_checknumber(L, 3);
    let y = lauxlib_1.luaL_checknumber(L, 4);
    let face = lauxlib_1.luaL_checknumber(L, 5);
    lua_1.lua_pushlightuserdata(L, C.addHandle(new types_1.JassUnit(id, unitid, x, y, face)));
    return 1;
}
/**
 * native CreateUnitByName takes player whichPlayer, string unitname, real x, real y, real face returns unit
 */
function CreateUnitByName(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    let unitname = lauxlib_1.luaL_checkstring(L, 2);
    let x = lauxlib_1.luaL_checknumber(L, 3);
    let y = lauxlib_1.luaL_checknumber(L, 4);
    let face = lauxlib_1.luaL_checknumber(L, 5);
    console.warn('CreateUnitByName was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native CreateUnitAtLoc takes player id, integer unitid, location whichLocation, real face returns unit
 */
function CreateUnitAtLoc(C, L) {
    let id = lua_1.lua_touserdata(L, 1);
    let unitid = lauxlib_1.luaL_checkinteger(L, 2);
    let whichLocation = lua_1.lua_touserdata(L, 3);
    let face = lauxlib_1.luaL_checknumber(L, 4);
    console.warn('CreateUnitAtLoc was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native CreateUnitAtLocByName takes player id, string unitname, location whichLocation, real face returns unit
 */
function CreateUnitAtLocByName(C, L) {
    let id = lua_1.lua_touserdata(L, 1);
    let unitname = lauxlib_1.luaL_checkstring(L, 2);
    let whichLocation = lua_1.lua_touserdata(L, 3);
    let face = lauxlib_1.luaL_checknumber(L, 4);
    console.warn('CreateUnitAtLocByName was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native CreateCorpse takes player whichPlayer, integer unitid, real x, real y, real face returns unit
 */
function CreateCorpse(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    let unitid = lauxlib_1.luaL_checkinteger(L, 2);
    let x = lauxlib_1.luaL_checknumber(L, 3);
    let y = lauxlib_1.luaL_checknumber(L, 4);
    let face = lauxlib_1.luaL_checknumber(L, 5);
    console.warn('CreateCorpse was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native KillUnit takes unit whichUnit returns nothing
 */
function KillUnit(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    console.warn('KillUnit was called but is not implemented :(');
    return 0;
}
/**
 * native RemoveUnit takes unit whichUnit returns nothing
 */
function RemoveUnit(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    console.warn('RemoveUnit was called but is not implemented :(');
    return 0;
}
/**
 * native ShowUnit takes unit whichUnit, boolean show returns nothing
 */
function ShowUnit(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let show = lua_1.lua_toboolean(L, 2);
    console.warn('ShowUnit was called but is not implemented :(');
    return 0;
}
/**
 * native SetUnitState takes unit whichUnit, unitstate whichUnitState, real newVal returns nothing
 */
function SetUnitState(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let whichUnitState = lua_1.lua_touserdata(L, 2);
    let newVal = lauxlib_1.luaL_checknumber(L, 3);
    console.warn('SetUnitState was called but is not implemented :(');
    return 0;
}
/**
 * native SetUnitX takes unit whichUnit, real newX returns nothing
 */
function SetUnitX(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let newX = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('SetUnitX was called but is not implemented :(');
    return 0;
}
/**
 * native SetUnitY takes unit whichUnit, real newY returns nothing
 */
function SetUnitY(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let newY = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('SetUnitY was called but is not implemented :(');
    return 0;
}
/**
 * native SetUnitPosition takes unit whichUnit, real newX, real newY returns nothing
 */
function SetUnitPosition(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let newX = lauxlib_1.luaL_checknumber(L, 2);
    let newY = lauxlib_1.luaL_checknumber(L, 3);
    console.warn('SetUnitPosition was called but is not implemented :(');
    return 0;
}
/**
 * native SetUnitPositionLoc takes unit whichUnit, location whichLocation returns nothing
 */
function SetUnitPositionLoc(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let whichLocation = lua_1.lua_touserdata(L, 2);
    console.warn('SetUnitPositionLoc was called but is not implemented :(');
    return 0;
}
/**
 * native SetUnitFacing takes unit whichUnit, real facingAngle returns nothing
 */
function SetUnitFacing(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let facingAngle = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('SetUnitFacing was called but is not implemented :(');
    return 0;
}
/**
 * native SetUnitFacingTimed takes unit whichUnit, real facingAngle, real duration returns nothing
 */
function SetUnitFacingTimed(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let facingAngle = lauxlib_1.luaL_checknumber(L, 2);
    let duration = lauxlib_1.luaL_checknumber(L, 3);
    console.warn('SetUnitFacingTimed was called but is not implemented :(');
    return 0;
}
/**
 * native SetUnitMoveSpeed takes unit whichUnit, real newSpeed returns nothing
 */
function SetUnitMoveSpeed(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let newSpeed = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('SetUnitMoveSpeed was called but is not implemented :(');
    return 0;
}
/**
 * native SetUnitFlyHeight takes unit whichUnit, real newHeight, real rate returns nothing
 */
function SetUnitFlyHeight(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let newHeight = lauxlib_1.luaL_checknumber(L, 2);
    let rate = lauxlib_1.luaL_checknumber(L, 3);
    console.warn('SetUnitFlyHeight was called but is not implemented :(');
    return 0;
}
/**
 * native SetUnitTurnSpeed takes unit whichUnit, real newTurnSpeed returns nothing
 */
function SetUnitTurnSpeed(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let newTurnSpeed = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('SetUnitTurnSpeed was called but is not implemented :(');
    return 0;
}
/**
 * native SetUnitPropWindow takes unit whichUnit, real newPropWindowAngle returns nothing
 */
function SetUnitPropWindow(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let newPropWindowAngle = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('SetUnitPropWindow was called but is not implemented :(');
    return 0;
}
/**
 * native SetUnitAcquireRange takes unit whichUnit, real newAcquireRange returns nothing
 */
function SetUnitAcquireRange(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let newAcquireRange = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('SetUnitAcquireRange was called but is not implemented :(');
    return 0;
}
/**
 * native SetUnitCreepGuard takes unit whichUnit, boolean creepGuard returns nothing
 */
function SetUnitCreepGuard(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let creepGuard = lua_1.lua_toboolean(L, 2);
    console.warn('SetUnitCreepGuard was called but is not implemented :(');
    return 0;
}
/**
 * native GetUnitAcquireRange takes unit whichUnit returns real
 */
function GetUnitAcquireRange(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    console.warn('GetUnitAcquireRange was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native GetUnitTurnSpeed takes unit whichUnit returns real
 */
function GetUnitTurnSpeed(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    console.warn('GetUnitTurnSpeed was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native GetUnitPropWindow takes unit whichUnit returns real
 */
function GetUnitPropWindow(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    console.warn('GetUnitPropWindow was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native GetUnitFlyHeight takes unit whichUnit returns real
 */
function GetUnitFlyHeight(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    console.warn('GetUnitFlyHeight was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native GetUnitDefaultAcquireRange takes unit whichUnit returns real
 */
function GetUnitDefaultAcquireRange(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    console.warn('GetUnitDefaultAcquireRange was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native GetUnitDefaultTurnSpeed takes unit whichUnit returns real
 */
function GetUnitDefaultTurnSpeed(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    console.warn('GetUnitDefaultTurnSpeed was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native GetUnitDefaultPropWindow takes unit whichUnit returns real
 */
function GetUnitDefaultPropWindow(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    console.warn('GetUnitDefaultPropWindow was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native GetUnitDefaultFlyHeight takes unit whichUnit returns real
 */
function GetUnitDefaultFlyHeight(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    console.warn('GetUnitDefaultFlyHeight was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native SetUnitOwner takes unit whichUnit, player whichPlayer, boolean changeColor returns nothing
 */
function SetUnitOwner(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let whichPlayer = lua_1.lua_touserdata(L, 2);
    let changeColor = lua_1.lua_toboolean(L, 3);
    console.warn('SetUnitOwner was called but is not implemented :(');
    return 0;
}
/**
 * native SetUnitColor takes unit whichUnit, playercolor whichColor returns nothing
 */
function SetUnitColor(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let whichColor = lua_1.lua_touserdata(L, 2);
    console.warn('SetUnitColor was called but is not implemented :(');
    return 0;
}
/**
 * native SetUnitScale takes unit whichUnit, real scaleX, real scaleY, real scaleZ returns nothing
 */
function SetUnitScale(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let scaleX = lauxlib_1.luaL_checknumber(L, 2);
    let scaleY = lauxlib_1.luaL_checknumber(L, 3);
    let scaleZ = lauxlib_1.luaL_checknumber(L, 4);
    console.warn('SetUnitScale was called but is not implemented :(');
    return 0;
}
/**
 * native SetUnitTimeScale takes unit whichUnit, real timeScale returns nothing
 */
function SetUnitTimeScale(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let timeScale = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('SetUnitTimeScale was called but is not implemented :(');
    return 0;
}
/**
 * native SetUnitBlendTime takes unit whichUnit, real blendTime returns nothing
 */
function SetUnitBlendTime(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let blendTime = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('SetUnitBlendTime was called but is not implemented :(');
    return 0;
}
/**
 * native SetUnitVertexColor takes unit whichUnit, integer red, integer green, integer blue, integer alpha returns nothing
 */
function SetUnitVertexColor(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let red = lauxlib_1.luaL_checkinteger(L, 2);
    let green = lauxlib_1.luaL_checkinteger(L, 3);
    let blue = lauxlib_1.luaL_checkinteger(L, 4);
    let alpha = lauxlib_1.luaL_checkinteger(L, 5);
    console.warn('SetUnitVertexColor was called but is not implemented :(');
    return 0;
}
/**
 * native QueueUnitAnimation takes unit whichUnit, string whichAnimation returns nothing
 */
function QueueUnitAnimation(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let whichAnimation = lauxlib_1.luaL_checkstring(L, 2);
    console.warn('QueueUnitAnimation was called but is not implemented :(');
    return 0;
}
/**
 * native SetUnitAnimation takes unit whichUnit, string whichAnimation returns nothing
 */
function SetUnitAnimation(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let whichAnimation = lauxlib_1.luaL_checkstring(L, 2);
    console.warn('SetUnitAnimation was called but is not implemented :(');
    return 0;
}
/**
 * native SetUnitAnimationByIndex takes unit whichUnit, integer whichAnimation returns nothing
 */
function SetUnitAnimationByIndex(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let whichAnimation = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('SetUnitAnimationByIndex was called but is not implemented :(');
    return 0;
}
/**
 * native SetUnitAnimationWithRarity takes unit whichUnit, string whichAnimation, raritycontrol rarity returns nothing
 */
function SetUnitAnimationWithRarity(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let whichAnimation = lauxlib_1.luaL_checkstring(L, 2);
    let rarity = lua_1.lua_touserdata(L, 3);
    console.warn('SetUnitAnimationWithRarity was called but is not implemented :(');
    return 0;
}
/**
 * native AddUnitAnimationProperties takes unit whichUnit, string animProperties, boolean add returns nothing
 */
function AddUnitAnimationProperties(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let animProperties = lauxlib_1.luaL_checkstring(L, 2);
    let add = lua_1.lua_toboolean(L, 3);
    console.warn('AddUnitAnimationProperties was called but is not implemented :(');
    return 0;
}
/**
 * native SetUnitLookAt takes unit whichUnit, string whichBone, unit lookAtTarget, real offsetX, real offsetY, real offsetZ returns nothing
 */
function SetUnitLookAt(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let whichBone = lauxlib_1.luaL_checkstring(L, 2);
    let lookAtTarget = lua_1.lua_touserdata(L, 3);
    let offsetX = lauxlib_1.luaL_checknumber(L, 4);
    let offsetY = lauxlib_1.luaL_checknumber(L, 5);
    let offsetZ = lauxlib_1.luaL_checknumber(L, 6);
    console.warn('SetUnitLookAt was called but is not implemented :(');
    return 0;
}
/**
 * native ResetUnitLookAt takes unit whichUnit returns nothing
 */
function ResetUnitLookAt(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    console.warn('ResetUnitLookAt was called but is not implemented :(');
    return 0;
}
/**
 * native SetUnitRescuable takes unit whichUnit, player byWhichPlayer, boolean flag returns nothing
 */
function SetUnitRescuable(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let byWhichPlayer = lua_1.lua_touserdata(L, 2);
    let flag = lua_1.lua_toboolean(L, 3);
    console.warn('SetUnitRescuable was called but is not implemented :(');
    return 0;
}
/**
 * native SetUnitRescueRange takes unit whichUnit, real range returns nothing
 */
function SetUnitRescueRange(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let range = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('SetUnitRescueRange was called but is not implemented :(');
    return 0;
}
/**
 * native SetHeroStr takes unit whichHero, integer newStr, boolean permanent returns nothing
 */
function SetHeroStr(C, L) {
    let whichHero = lua_1.lua_touserdata(L, 1);
    let newStr = lauxlib_1.luaL_checkinteger(L, 2);
    let permanent = lua_1.lua_toboolean(L, 3);
    console.warn('SetHeroStr was called but is not implemented :(');
    return 0;
}
/**
 * native SetHeroAgi takes unit whichHero, integer newAgi, boolean permanent returns nothing
 */
function SetHeroAgi(C, L) {
    let whichHero = lua_1.lua_touserdata(L, 1);
    let newAgi = lauxlib_1.luaL_checkinteger(L, 2);
    let permanent = lua_1.lua_toboolean(L, 3);
    console.warn('SetHeroAgi was called but is not implemented :(');
    return 0;
}
/**
 * native SetHeroInt takes unit whichHero, integer newInt, boolean permanent returns nothing
 */
function SetHeroInt(C, L) {
    let whichHero = lua_1.lua_touserdata(L, 1);
    let newInt = lauxlib_1.luaL_checkinteger(L, 2);
    let permanent = lua_1.lua_toboolean(L, 3);
    console.warn('SetHeroInt was called but is not implemented :(');
    return 0;
}
/**
 * native GetHeroStr takes unit whichHero, boolean includeBonuses returns integer
 */
function GetHeroStr(C, L) {
    let whichHero = lua_1.lua_touserdata(L, 1);
    let includeBonuses = lua_1.lua_toboolean(L, 2);
    console.warn('GetHeroStr was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native GetHeroAgi takes unit whichHero, boolean includeBonuses returns integer
 */
function GetHeroAgi(C, L) {
    let whichHero = lua_1.lua_touserdata(L, 1);
    let includeBonuses = lua_1.lua_toboolean(L, 2);
    console.warn('GetHeroAgi was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native GetHeroInt takes unit whichHero, boolean includeBonuses returns integer
 */
function GetHeroInt(C, L) {
    let whichHero = lua_1.lua_touserdata(L, 1);
    let includeBonuses = lua_1.lua_toboolean(L, 2);
    console.warn('GetHeroInt was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native UnitStripHeroLevel takes unit whichHero, integer howManyLevels returns boolean
 */
function UnitStripHeroLevel(C, L) {
    let whichHero = lua_1.lua_touserdata(L, 1);
    let howManyLevels = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('UnitStripHeroLevel was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native GetHeroXP takes unit whichHero returns integer
 */
function GetHeroXP(C, L) {
    let whichHero = lua_1.lua_touserdata(L, 1);
    console.warn('GetHeroXP was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native SetHeroXP takes unit whichHero, integer newXpVal, boolean showEyeCandy returns nothing
 */
function SetHeroXP(C, L) {
    let whichHero = lua_1.lua_touserdata(L, 1);
    let newXpVal = lauxlib_1.luaL_checkinteger(L, 2);
    let showEyeCandy = lua_1.lua_toboolean(L, 3);
    console.warn('SetHeroXP was called but is not implemented :(');
    return 0;
}
/**
 * native GetHeroSkillPoints takes unit whichHero returns integer
 */
function GetHeroSkillPoints(C, L) {
    let whichHero = lua_1.lua_touserdata(L, 1);
    console.warn('GetHeroSkillPoints was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native UnitModifySkillPoints takes unit whichHero, integer skillPointDelta returns boolean
 */
function UnitModifySkillPoints(C, L) {
    let whichHero = lua_1.lua_touserdata(L, 1);
    let skillPointDelta = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('UnitModifySkillPoints was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native AddHeroXP takes unit whichHero, integer xpToAdd, boolean showEyeCandy returns nothing
 */
function AddHeroXP(C, L) {
    let whichHero = lua_1.lua_touserdata(L, 1);
    let xpToAdd = lauxlib_1.luaL_checkinteger(L, 2);
    let showEyeCandy = lua_1.lua_toboolean(L, 3);
    console.warn('AddHeroXP was called but is not implemented :(');
    return 0;
}
/**
 * native SetHeroLevel takes unit whichHero, integer level, boolean showEyeCandy returns nothing
 */
function SetHeroLevel(C, L) {
    let whichHero = lua_1.lua_touserdata(L, 1);
    let level = lauxlib_1.luaL_checkinteger(L, 2);
    let showEyeCandy = lua_1.lua_toboolean(L, 3);
    console.warn('SetHeroLevel was called but is not implemented :(');
    return 0;
}
/**
 * constant native GetHeroLevel takes unit whichHero returns integer
 */
function GetHeroLevel(C, L) {
    let whichHero = lua_1.lua_touserdata(L, 1);
    console.warn('GetHeroLevel was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * constant native GetUnitLevel takes unit whichUnit returns integer
 */
function GetUnitLevel(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    console.warn('GetUnitLevel was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native GetHeroProperName takes unit whichHero returns string
 */
function GetHeroProperName(C, L) {
    let whichHero = lua_1.lua_touserdata(L, 1);
    console.warn('GetHeroProperName was called but is not implemented :(');
    lua_1.lua_pushstring(L, '');
    return 1;
}
/**
 * native SuspendHeroXP takes unit whichHero, boolean flag returns nothing
 */
function SuspendHeroXP(C, L) {
    let whichHero = lua_1.lua_touserdata(L, 1);
    let flag = lua_1.lua_toboolean(L, 2);
    console.warn('SuspendHeroXP was called but is not implemented :(');
    return 0;
}
/**
 * native IsSuspendedXP takes unit whichHero returns boolean
 */
function IsSuspendedXP(C, L) {
    let whichHero = lua_1.lua_touserdata(L, 1);
    console.warn('IsSuspendedXP was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native SelectHeroSkill takes unit whichHero, integer abilcode returns nothing
 */
function SelectHeroSkill(C, L) {
    let whichHero = lua_1.lua_touserdata(L, 1);
    let abilcode = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('SelectHeroSkill was called but is not implemented :(');
    return 0;
}
/**
 * native GetUnitAbilityLevel takes unit whichUnit, integer abilcode returns integer
 */
function GetUnitAbilityLevel(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let abilcode = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('GetUnitAbilityLevel was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native DecUnitAbilityLevel takes unit whichUnit, integer abilcode returns integer
 */
function DecUnitAbilityLevel(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let abilcode = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('DecUnitAbilityLevel was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native IncUnitAbilityLevel takes unit whichUnit, integer abilcode returns integer
 */
function IncUnitAbilityLevel(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let abilcode = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('IncUnitAbilityLevel was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native SetUnitAbilityLevel takes unit whichUnit, integer abilcode, integer level returns integer
 */
function SetUnitAbilityLevel(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let abilcode = lauxlib_1.luaL_checkinteger(L, 2);
    let level = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('SetUnitAbilityLevel was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native ReviveHero takes unit whichHero, real x, real y, boolean doEyecandy returns boolean
 */
function ReviveHero(C, L) {
    let whichHero = lua_1.lua_touserdata(L, 1);
    let x = lauxlib_1.luaL_checknumber(L, 2);
    let y = lauxlib_1.luaL_checknumber(L, 3);
    let doEyecandy = lua_1.lua_toboolean(L, 4);
    console.warn('ReviveHero was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native ReviveHeroLoc takes unit whichHero, location loc, boolean doEyecandy returns boolean
 */
function ReviveHeroLoc(C, L) {
    let whichHero = lua_1.lua_touserdata(L, 1);
    let loc = lua_1.lua_touserdata(L, 2);
    let doEyecandy = lua_1.lua_toboolean(L, 3);
    console.warn('ReviveHeroLoc was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native SetUnitExploded takes unit whichUnit, boolean exploded returns nothing
 */
function SetUnitExploded(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let exploded = lua_1.lua_toboolean(L, 2);
    console.warn('SetUnitExploded was called but is not implemented :(');
    return 0;
}
/**
 * native SetUnitInvulnerable takes unit whichUnit, boolean flag returns nothing
 */
function SetUnitInvulnerable(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let flag = lua_1.lua_toboolean(L, 2);
    console.warn('SetUnitInvulnerable was called but is not implemented :(');
    return 0;
}
/**
 * native PauseUnit takes unit whichUnit, boolean flag returns nothing
 */
function PauseUnit(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let flag = lua_1.lua_toboolean(L, 2);
    console.warn('PauseUnit was called but is not implemented :(');
    return 0;
}
/**
 * native IsUnitPaused takes unit whichHero returns boolean
 */
function IsUnitPaused(C, L) {
    let whichHero = lua_1.lua_touserdata(L, 1);
    console.warn('IsUnitPaused was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native SetUnitPathing takes unit whichUnit, boolean flag returns nothing
 */
function SetUnitPathing(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let flag = lua_1.lua_toboolean(L, 2);
    console.warn('SetUnitPathing was called but is not implemented :(');
    return 0;
}
/**
 * native ClearSelection takes nothing returns nothing
 */
function ClearSelection(C, L) {
    console.warn('ClearSelection was called but is not implemented :(');
    return 0;
}
/**
 * native SelectUnit takes unit whichUnit, boolean flag returns nothing
 */
function SelectUnit(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let flag = lua_1.lua_toboolean(L, 2);
    console.warn('SelectUnit was called but is not implemented :(');
    return 0;
}
/**
 * native GetUnitPointValue takes unit whichUnit returns integer
 */
function GetUnitPointValue(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    console.warn('GetUnitPointValue was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native GetUnitPointValueByType takes integer unitType returns integer
 */
function GetUnitPointValueByType(C, L) {
    let unitType = lauxlib_1.luaL_checkinteger(L, 1);
    console.warn('GetUnitPointValueByType was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native UnitAddItem takes unit whichUnit, item whichItem returns boolean
 */
function UnitAddItem(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let whichItem = lua_1.lua_touserdata(L, 2);
    console.warn('UnitAddItem was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native UnitAddItemById takes unit whichUnit, integer itemId returns item
 */
function UnitAddItemById(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let itemId = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('UnitAddItemById was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native UnitAddItemToSlotById takes unit whichUnit, integer itemId, integer itemSlot returns boolean
 */
function UnitAddItemToSlotById(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let itemId = lauxlib_1.luaL_checkinteger(L, 2);
    let itemSlot = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('UnitAddItemToSlotById was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native UnitRemoveItem takes unit whichUnit, item whichItem returns nothing
 */
function UnitRemoveItem(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let whichItem = lua_1.lua_touserdata(L, 2);
    console.warn('UnitRemoveItem was called but is not implemented :(');
    return 0;
}
/**
 * native UnitRemoveItemFromSlot takes unit whichUnit, integer itemSlot returns item
 */
function UnitRemoveItemFromSlot(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let itemSlot = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('UnitRemoveItemFromSlot was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native UnitHasItem takes unit whichUnit, item whichItem returns boolean
 */
function UnitHasItem(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let whichItem = lua_1.lua_touserdata(L, 2);
    console.warn('UnitHasItem was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native UnitItemInSlot takes unit whichUnit, integer itemSlot returns item
 */
function UnitItemInSlot(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let itemSlot = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('UnitItemInSlot was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native UnitInventorySize takes unit whichUnit returns integer
 */
function UnitInventorySize(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    console.warn('UnitInventorySize was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native UnitDropItemPoint takes unit whichUnit, item whichItem, real x, real y returns boolean
 */
function UnitDropItemPoint(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let whichItem = lua_1.lua_touserdata(L, 2);
    let x = lauxlib_1.luaL_checknumber(L, 3);
    let y = lauxlib_1.luaL_checknumber(L, 4);
    console.warn('UnitDropItemPoint was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native UnitDropItemSlot takes unit whichUnit, item whichItem, integer slot returns boolean
 */
function UnitDropItemSlot(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let whichItem = lua_1.lua_touserdata(L, 2);
    let slot = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('UnitDropItemSlot was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native UnitDropItemTarget takes unit whichUnit, item whichItem, widget target returns boolean
 */
function UnitDropItemTarget(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let whichItem = lua_1.lua_touserdata(L, 2);
    let target = lua_1.lua_touserdata(L, 3);
    console.warn('UnitDropItemTarget was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native UnitUseItem takes unit whichUnit, item whichItem returns boolean
 */
function UnitUseItem(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let whichItem = lua_1.lua_touserdata(L, 2);
    console.warn('UnitUseItem was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native UnitUseItemPoint takes unit whichUnit, item whichItem, real x, real y returns boolean
 */
function UnitUseItemPoint(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let whichItem = lua_1.lua_touserdata(L, 2);
    let x = lauxlib_1.luaL_checknumber(L, 3);
    let y = lauxlib_1.luaL_checknumber(L, 4);
    console.warn('UnitUseItemPoint was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native UnitUseItemTarget takes unit whichUnit, item whichItem, widget target returns boolean
 */
function UnitUseItemTarget(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let whichItem = lua_1.lua_touserdata(L, 2);
    let target = lua_1.lua_touserdata(L, 3);
    console.warn('UnitUseItemTarget was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * constant native GetUnitX takes unit whichUnit returns real
 */
function GetUnitX(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    console.warn('GetUnitX was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * constant native GetUnitY takes unit whichUnit returns real
 */
function GetUnitY(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    console.warn('GetUnitY was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * constant native GetUnitLoc takes unit whichUnit returns location
 */
function GetUnitLoc(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    console.warn('GetUnitLoc was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetUnitFacing takes unit whichUnit returns real
 */
function GetUnitFacing(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    console.warn('GetUnitFacing was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * constant native GetUnitMoveSpeed takes unit whichUnit returns real
 */
function GetUnitMoveSpeed(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    console.warn('GetUnitMoveSpeed was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * constant native GetUnitDefaultMoveSpeed takes unit whichUnit returns real
 */
function GetUnitDefaultMoveSpeed(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    console.warn('GetUnitDefaultMoveSpeed was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * constant native GetUnitState takes unit whichUnit, unitstate whichUnitState returns real
 */
function GetUnitState(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let whichUnitState = lua_1.lua_touserdata(L, 2);
    console.warn('GetUnitState was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * constant native GetOwningPlayer takes unit whichUnit returns player
 */
function GetOwningPlayer(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    lua_1.lua_pushlightuserdata(L, whichUnit.player);
    return 1;
}
/**
 * constant native GetUnitTypeId takes unit whichUnit returns integer
 */
function GetUnitTypeId(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    console.warn('GetUnitTypeId was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * constant native GetUnitRace takes unit whichUnit returns race
 */
function GetUnitRace(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    console.warn('GetUnitRace was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetUnitName takes unit whichUnit returns string
 */
function GetUnitName(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    console.warn('GetUnitName was called but is not implemented :(');
    lua_1.lua_pushstring(L, '');
    return 1;
}
/**
 * constant native GetUnitFoodUsed takes unit whichUnit returns integer
 */
function GetUnitFoodUsed(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    console.warn('GetUnitFoodUsed was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * constant native GetUnitFoodMade takes unit whichUnit returns integer
 */
function GetUnitFoodMade(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    console.warn('GetUnitFoodMade was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * constant native GetFoodMade takes integer unitId returns integer
 */
function GetFoodMade(C, L) {
    let unitId = lauxlib_1.luaL_checkinteger(L, 1);
    console.warn('GetFoodMade was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * constant native GetFoodUsed takes integer unitId returns integer
 */
function GetFoodUsed(C, L) {
    let unitId = lauxlib_1.luaL_checkinteger(L, 1);
    console.warn('GetFoodUsed was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native SetUnitUseFood takes unit whichUnit, boolean useFood returns nothing
 */
function SetUnitUseFood(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let useFood = lua_1.lua_toboolean(L, 2);
    console.warn('SetUnitUseFood was called but is not implemented :(');
    return 0;
}
/**
 * constant native GetUnitRallyPoint takes unit whichUnit returns location
 */
function GetUnitRallyPoint(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    console.warn('GetUnitRallyPoint was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetUnitRallyUnit takes unit whichUnit returns unit
 */
function GetUnitRallyUnit(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    console.warn('GetUnitRallyUnit was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetUnitRallyDestructable takes unit whichUnit returns destructable
 */
function GetUnitRallyDestructable(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    console.warn('GetUnitRallyDestructable was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native IsUnitInGroup takes unit whichUnit, group whichGroup returns boolean
 */
function IsUnitInGroup(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let whichGroup = lua_1.lua_touserdata(L, 2);
    console.warn('IsUnitInGroup was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * constant native IsUnitInForce takes unit whichUnit, force whichForce returns boolean
 */
function IsUnitInForce(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let whichForce = lua_1.lua_touserdata(L, 2);
    console.warn('IsUnitInForce was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * constant native IsUnitOwnedByPlayer takes unit whichUnit, player whichPlayer returns boolean
 */
function IsUnitOwnedByPlayer(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let whichPlayer = lua_1.lua_touserdata(L, 2);
    console.warn('IsUnitOwnedByPlayer was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * constant native IsUnitAlly takes unit whichUnit, player whichPlayer returns boolean
 */
function IsUnitAlly(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let whichPlayer = lua_1.lua_touserdata(L, 2);
    console.warn('IsUnitAlly was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * constant native IsUnitEnemy takes unit whichUnit, player whichPlayer returns boolean
 */
function IsUnitEnemy(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let whichPlayer = lua_1.lua_touserdata(L, 2);
    console.warn('IsUnitEnemy was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * constant native IsUnitVisible takes unit whichUnit, player whichPlayer returns boolean
 */
function IsUnitVisible(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let whichPlayer = lua_1.lua_touserdata(L, 2);
    console.warn('IsUnitVisible was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * constant native IsUnitDetected takes unit whichUnit, player whichPlayer returns boolean
 */
function IsUnitDetected(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let whichPlayer = lua_1.lua_touserdata(L, 2);
    console.warn('IsUnitDetected was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * constant native IsUnitInvisible takes unit whichUnit, player whichPlayer returns boolean
 */
function IsUnitInvisible(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let whichPlayer = lua_1.lua_touserdata(L, 2);
    console.warn('IsUnitInvisible was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * constant native IsUnitFogged takes unit whichUnit, player whichPlayer returns boolean
 */
function IsUnitFogged(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let whichPlayer = lua_1.lua_touserdata(L, 2);
    console.warn('IsUnitFogged was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * constant native IsUnitMasked takes unit whichUnit, player whichPlayer returns boolean
 */
function IsUnitMasked(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let whichPlayer = lua_1.lua_touserdata(L, 2);
    console.warn('IsUnitMasked was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * constant native IsUnitSelected takes unit whichUnit, player whichPlayer returns boolean
 */
function IsUnitSelected(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let whichPlayer = lua_1.lua_touserdata(L, 2);
    console.warn('IsUnitSelected was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * constant native IsUnitRace takes unit whichUnit, race whichRace returns boolean
 */
function IsUnitRace(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let whichRace = lua_1.lua_touserdata(L, 2);
    console.warn('IsUnitRace was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * constant native IsUnitType takes unit whichUnit, unittype whichUnitType returns boolean
 */
function IsUnitType(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let whichUnitType = lua_1.lua_touserdata(L, 2);
    console.warn('IsUnitType was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * constant native IsUnit takes unit whichUnit, unit whichSpecifiedUnit returns boolean
 */
function IsUnit(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let whichSpecifiedUnit = lua_1.lua_touserdata(L, 2);
    console.warn('IsUnit was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * constant native IsUnitInRange takes unit whichUnit, unit otherUnit, real distance returns boolean
 */
function IsUnitInRange(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let otherUnit = lua_1.lua_touserdata(L, 2);
    let distance = lauxlib_1.luaL_checknumber(L, 3);
    console.warn('IsUnitInRange was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * constant native IsUnitInRangeXY takes unit whichUnit, real x, real y, real distance returns boolean
 */
function IsUnitInRangeXY(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let x = lauxlib_1.luaL_checknumber(L, 2);
    let y = lauxlib_1.luaL_checknumber(L, 3);
    let distance = lauxlib_1.luaL_checknumber(L, 4);
    console.warn('IsUnitInRangeXY was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * constant native IsUnitInRangeLoc takes unit whichUnit, location whichLocation, real distance returns boolean
 */
function IsUnitInRangeLoc(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let whichLocation = lua_1.lua_touserdata(L, 2);
    let distance = lauxlib_1.luaL_checknumber(L, 3);
    console.warn('IsUnitInRangeLoc was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * constant native IsUnitHidden takes unit whichUnit returns boolean
 */
function IsUnitHidden(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    console.warn('IsUnitHidden was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * constant native IsUnitIllusion takes unit whichUnit returns boolean
 */
function IsUnitIllusion(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    console.warn('IsUnitIllusion was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * constant native IsUnitInTransport takes unit whichUnit, unit whichTransport returns boolean
 */
function IsUnitInTransport(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let whichTransport = lua_1.lua_touserdata(L, 2);
    console.warn('IsUnitInTransport was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * constant native IsUnitLoaded takes unit whichUnit returns boolean
 */
function IsUnitLoaded(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    console.warn('IsUnitLoaded was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * constant native IsHeroUnitId takes integer unitId returns boolean
 */
function IsHeroUnitId(C, L) {
    let unitId = lauxlib_1.luaL_checkinteger(L, 1);
    console.warn('IsHeroUnitId was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * constant native IsUnitIdType takes integer unitId, unittype whichUnitType returns boolean
 */
function IsUnitIdType(C, L) {
    let unitId = lauxlib_1.luaL_checkinteger(L, 1);
    let whichUnitType = lua_1.lua_touserdata(L, 2);
    console.warn('IsUnitIdType was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native UnitShareVision takes unit whichUnit, player whichPlayer, boolean share returns nothing
 */
function UnitShareVision(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let whichPlayer = lua_1.lua_touserdata(L, 2);
    let share = lua_1.lua_toboolean(L, 3);
    console.warn('UnitShareVision was called but is not implemented :(');
    return 0;
}
/**
 * native UnitSuspendDecay takes unit whichUnit, boolean suspend returns nothing
 */
function UnitSuspendDecay(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let suspend = lua_1.lua_toboolean(L, 2);
    console.warn('UnitSuspendDecay was called but is not implemented :(');
    return 0;
}
/**
 * native UnitAddType takes unit whichUnit, unittype whichUnitType returns boolean
 */
function UnitAddType(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let whichUnitType = lua_1.lua_touserdata(L, 2);
    console.warn('UnitAddType was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native UnitRemoveType takes unit whichUnit, unittype whichUnitType returns boolean
 */
function UnitRemoveType(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let whichUnitType = lua_1.lua_touserdata(L, 2);
    console.warn('UnitRemoveType was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native UnitAddAbility takes unit whichUnit, integer abilityId returns boolean
 */
function UnitAddAbility(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let abilityId = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('UnitAddAbility was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native UnitRemoveAbility takes unit whichUnit, integer abilityId returns boolean
 */
function UnitRemoveAbility(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let abilityId = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('UnitRemoveAbility was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native UnitMakeAbilityPermanent takes unit whichUnit, boolean permanent, integer abilityId returns boolean
 */
function UnitMakeAbilityPermanent(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let permanent = lua_1.lua_toboolean(L, 2);
    let abilityId = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('UnitMakeAbilityPermanent was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native UnitRemoveBuffs takes unit whichUnit, boolean removePositive, boolean removeNegative returns nothing
 */
function UnitRemoveBuffs(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let removePositive = lua_1.lua_toboolean(L, 2);
    let removeNegative = lua_1.lua_toboolean(L, 3);
    console.warn('UnitRemoveBuffs was called but is not implemented :(');
    return 0;
}
/**
 * native UnitRemoveBuffsEx takes unit whichUnit, boolean removePositive, boolean removeNegative, boolean magic, boolean physical, boolean timedLife, boolean aura, boolean autoDispel returns nothing
 */
function UnitRemoveBuffsEx(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let removePositive = lua_1.lua_toboolean(L, 2);
    let removeNegative = lua_1.lua_toboolean(L, 3);
    let magic = lua_1.lua_toboolean(L, 4);
    let physical = lua_1.lua_toboolean(L, 5);
    let timedLife = lua_1.lua_toboolean(L, 6);
    let aura = lua_1.lua_toboolean(L, 7);
    let autoDispel = lua_1.lua_toboolean(L, 8);
    console.warn('UnitRemoveBuffsEx was called but is not implemented :(');
    return 0;
}
/**
 * native UnitHasBuffsEx takes unit whichUnit, boolean removePositive, boolean removeNegative, boolean magic, boolean physical, boolean timedLife, boolean aura, boolean autoDispel returns boolean
 */
function UnitHasBuffsEx(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let removePositive = lua_1.lua_toboolean(L, 2);
    let removeNegative = lua_1.lua_toboolean(L, 3);
    let magic = lua_1.lua_toboolean(L, 4);
    let physical = lua_1.lua_toboolean(L, 5);
    let timedLife = lua_1.lua_toboolean(L, 6);
    let aura = lua_1.lua_toboolean(L, 7);
    let autoDispel = lua_1.lua_toboolean(L, 8);
    console.warn('UnitHasBuffsEx was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native UnitCountBuffsEx takes unit whichUnit, boolean removePositive, boolean removeNegative, boolean magic, boolean physical, boolean timedLife, boolean aura, boolean autoDispel returns integer
 */
function UnitCountBuffsEx(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let removePositive = lua_1.lua_toboolean(L, 2);
    let removeNegative = lua_1.lua_toboolean(L, 3);
    let magic = lua_1.lua_toboolean(L, 4);
    let physical = lua_1.lua_toboolean(L, 5);
    let timedLife = lua_1.lua_toboolean(L, 6);
    let aura = lua_1.lua_toboolean(L, 7);
    let autoDispel = lua_1.lua_toboolean(L, 8);
    console.warn('UnitCountBuffsEx was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native UnitAddSleep takes unit whichUnit, boolean add returns nothing
 */
function UnitAddSleep(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let add = lua_1.lua_toboolean(L, 2);
    console.warn('UnitAddSleep was called but is not implemented :(');
    return 0;
}
/**
 * native UnitCanSleep takes unit whichUnit returns boolean
 */
function UnitCanSleep(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    console.warn('UnitCanSleep was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native UnitAddSleepPerm takes unit whichUnit, boolean add returns nothing
 */
function UnitAddSleepPerm(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let add = lua_1.lua_toboolean(L, 2);
    console.warn('UnitAddSleepPerm was called but is not implemented :(');
    return 0;
}
/**
 * native UnitCanSleepPerm takes unit whichUnit returns boolean
 */
function UnitCanSleepPerm(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    console.warn('UnitCanSleepPerm was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native UnitIsSleeping takes unit whichUnit returns boolean
 */
function UnitIsSleeping(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    console.warn('UnitIsSleeping was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native UnitWakeUp takes unit whichUnit returns nothing
 */
function UnitWakeUp(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    console.warn('UnitWakeUp was called but is not implemented :(');
    return 0;
}
/**
 * native UnitApplyTimedLife takes unit whichUnit, integer buffId, real duration returns nothing
 */
function UnitApplyTimedLife(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let buffId = lauxlib_1.luaL_checkinteger(L, 2);
    let duration = lauxlib_1.luaL_checknumber(L, 3);
    console.warn('UnitApplyTimedLife was called but is not implemented :(');
    return 0;
}
/**
 * native UnitIgnoreAlarm takes unit whichUnit, boolean flag returns boolean
 */
function UnitIgnoreAlarm(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let flag = lua_1.lua_toboolean(L, 2);
    console.warn('UnitIgnoreAlarm was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native UnitIgnoreAlarmToggled takes unit whichUnit returns boolean
 */
function UnitIgnoreAlarmToggled(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    console.warn('UnitIgnoreAlarmToggled was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native UnitResetCooldown takes unit whichUnit returns nothing
 */
function UnitResetCooldown(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    console.warn('UnitResetCooldown was called but is not implemented :(');
    return 0;
}
/**
 * native UnitSetConstructionProgress takes unit whichUnit, integer constructionPercentage returns nothing
 */
function UnitSetConstructionProgress(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let constructionPercentage = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('UnitSetConstructionProgress was called but is not implemented :(');
    return 0;
}
/**
 * native UnitSetUpgradeProgress takes unit whichUnit, integer upgradePercentage returns nothing
 */
function UnitSetUpgradeProgress(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let upgradePercentage = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('UnitSetUpgradeProgress was called but is not implemented :(');
    return 0;
}
/**
 * native UnitPauseTimedLife takes unit whichUnit, boolean flag returns nothing
 */
function UnitPauseTimedLife(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let flag = lua_1.lua_toboolean(L, 2);
    console.warn('UnitPauseTimedLife was called but is not implemented :(');
    return 0;
}
/**
 * native UnitSetUsesAltIcon takes unit whichUnit, boolean flag returns nothing
 */
function UnitSetUsesAltIcon(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let flag = lua_1.lua_toboolean(L, 2);
    console.warn('UnitSetUsesAltIcon was called but is not implemented :(');
    return 0;
}
/**
 * native UnitDamagePoint takes unit whichUnit, real delay, real radius, real x, real y, real amount, boolean attack, boolean ranged, attacktype attackType, damagetype damageType, weapontype weaponType returns boolean
 */
function UnitDamagePoint(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let delay = lauxlib_1.luaL_checknumber(L, 2);
    let radius = lauxlib_1.luaL_checknumber(L, 3);
    let x = lauxlib_1.luaL_checknumber(L, 4);
    let y = lauxlib_1.luaL_checknumber(L, 5);
    let amount = lauxlib_1.luaL_checknumber(L, 6);
    let attack = lua_1.lua_toboolean(L, 7);
    let ranged = lua_1.lua_toboolean(L, 8);
    let attackType = lua_1.lua_touserdata(L, 9);
    let damageType = lua_1.lua_touserdata(L, 10);
    let weaponType = lua_1.lua_touserdata(L, 11);
    console.warn('UnitDamagePoint was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native UnitDamageTarget takes unit whichUnit, widget target, real amount, boolean attack, boolean ranged, attacktype attackType, damagetype damageType, weapontype weaponType returns boolean
 */
function UnitDamageTarget(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let target = lua_1.lua_touserdata(L, 2);
    let amount = lauxlib_1.luaL_checknumber(L, 3);
    let attack = lua_1.lua_toboolean(L, 4);
    let ranged = lua_1.lua_toboolean(L, 5);
    let attackType = lua_1.lua_touserdata(L, 6);
    let damageType = lua_1.lua_touserdata(L, 7);
    let weaponType = lua_1.lua_touserdata(L, 8);
    console.warn('UnitDamageTarget was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native IssueImmediateOrder takes unit whichUnit, string order returns boolean
 */
function IssueImmediateOrder(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let order = lauxlib_1.luaL_checkstring(L, 2);
    console.warn('IssueImmediateOrder was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native IssueImmediateOrderById takes unit whichUnit, integer order returns boolean
 */
function IssueImmediateOrderById(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let order = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('IssueImmediateOrderById was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native IssuePointOrder takes unit whichUnit, string order, real x, real y returns boolean
 */
function IssuePointOrder(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let order = lauxlib_1.luaL_checkstring(L, 2);
    let x = lauxlib_1.luaL_checknumber(L, 3);
    let y = lauxlib_1.luaL_checknumber(L, 4);
    console.warn('IssuePointOrder was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native IssuePointOrderLoc takes unit whichUnit, string order, location whichLocation returns boolean
 */
function IssuePointOrderLoc(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let order = lauxlib_1.luaL_checkstring(L, 2);
    let whichLocation = lua_1.lua_touserdata(L, 3);
    console.warn('IssuePointOrderLoc was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native IssuePointOrderById takes unit whichUnit, integer order, real x, real y returns boolean
 */
function IssuePointOrderById(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let order = lauxlib_1.luaL_checkinteger(L, 2);
    let x = lauxlib_1.luaL_checknumber(L, 3);
    let y = lauxlib_1.luaL_checknumber(L, 4);
    console.warn('IssuePointOrderById was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native IssuePointOrderByIdLoc takes unit whichUnit, integer order, location whichLocation returns boolean
 */
function IssuePointOrderByIdLoc(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let order = lauxlib_1.luaL_checkinteger(L, 2);
    let whichLocation = lua_1.lua_touserdata(L, 3);
    console.warn('IssuePointOrderByIdLoc was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native IssueTargetOrder takes unit whichUnit, string order, widget targetWidget returns boolean
 */
function IssueTargetOrder(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let order = lauxlib_1.luaL_checkstring(L, 2);
    let targetWidget = lua_1.lua_touserdata(L, 3);
    console.warn('IssueTargetOrder was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native IssueTargetOrderById takes unit whichUnit, integer order, widget targetWidget returns boolean
 */
function IssueTargetOrderById(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let order = lauxlib_1.luaL_checkinteger(L, 2);
    let targetWidget = lua_1.lua_touserdata(L, 3);
    console.warn('IssueTargetOrderById was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native IssueInstantPointOrder takes unit whichUnit, string order, real x, real y, widget instantTargetWidget returns boolean
 */
function IssueInstantPointOrder(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let order = lauxlib_1.luaL_checkstring(L, 2);
    let x = lauxlib_1.luaL_checknumber(L, 3);
    let y = lauxlib_1.luaL_checknumber(L, 4);
    let instantTargetWidget = lua_1.lua_touserdata(L, 5);
    console.warn('IssueInstantPointOrder was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native IssueInstantPointOrderById takes unit whichUnit, integer order, real x, real y, widget instantTargetWidget returns boolean
 */
function IssueInstantPointOrderById(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let order = lauxlib_1.luaL_checkinteger(L, 2);
    let x = lauxlib_1.luaL_checknumber(L, 3);
    let y = lauxlib_1.luaL_checknumber(L, 4);
    let instantTargetWidget = lua_1.lua_touserdata(L, 5);
    console.warn('IssueInstantPointOrderById was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native IssueInstantTargetOrder takes unit whichUnit, string order, widget targetWidget, widget instantTargetWidget returns boolean
 */
function IssueInstantTargetOrder(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let order = lauxlib_1.luaL_checkstring(L, 2);
    let targetWidget = lua_1.lua_touserdata(L, 3);
    let instantTargetWidget = lua_1.lua_touserdata(L, 4);
    console.warn('IssueInstantTargetOrder was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native IssueInstantTargetOrderById takes unit whichUnit, integer order, widget targetWidget, widget instantTargetWidget returns boolean
 */
function IssueInstantTargetOrderById(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let order = lauxlib_1.luaL_checkinteger(L, 2);
    let targetWidget = lua_1.lua_touserdata(L, 3);
    let instantTargetWidget = lua_1.lua_touserdata(L, 4);
    console.warn('IssueInstantTargetOrderById was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native IssueBuildOrder takes unit whichPeon, string unitToBuild, real x, real y returns boolean
 */
function IssueBuildOrder(C, L) {
    let whichPeon = lua_1.lua_touserdata(L, 1);
    let unitToBuild = lauxlib_1.luaL_checkstring(L, 2);
    let x = lauxlib_1.luaL_checknumber(L, 3);
    let y = lauxlib_1.luaL_checknumber(L, 4);
    console.warn('IssueBuildOrder was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native IssueBuildOrderById takes unit whichPeon, integer unitId, real x, real y returns boolean
 */
function IssueBuildOrderById(C, L) {
    let whichPeon = lua_1.lua_touserdata(L, 1);
    let unitId = lauxlib_1.luaL_checkinteger(L, 2);
    let x = lauxlib_1.luaL_checknumber(L, 3);
    let y = lauxlib_1.luaL_checknumber(L, 4);
    console.warn('IssueBuildOrderById was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native IssueNeutralImmediateOrder takes player forWhichPlayer, unit neutralStructure, string unitToBuild returns boolean
 */
function IssueNeutralImmediateOrder(C, L) {
    let forWhichPlayer = lua_1.lua_touserdata(L, 1);
    let neutralStructure = lua_1.lua_touserdata(L, 2);
    let unitToBuild = lauxlib_1.luaL_checkstring(L, 3);
    console.warn('IssueNeutralImmediateOrder was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native IssueNeutralImmediateOrderById takes player forWhichPlayer, unit neutralStructure, integer unitId returns boolean
 */
function IssueNeutralImmediateOrderById(C, L) {
    let forWhichPlayer = lua_1.lua_touserdata(L, 1);
    let neutralStructure = lua_1.lua_touserdata(L, 2);
    let unitId = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('IssueNeutralImmediateOrderById was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native IssueNeutralPointOrder takes player forWhichPlayer, unit neutralStructure, string unitToBuild, real x, real y returns boolean
 */
function IssueNeutralPointOrder(C, L) {
    let forWhichPlayer = lua_1.lua_touserdata(L, 1);
    let neutralStructure = lua_1.lua_touserdata(L, 2);
    let unitToBuild = lauxlib_1.luaL_checkstring(L, 3);
    let x = lauxlib_1.luaL_checknumber(L, 4);
    let y = lauxlib_1.luaL_checknumber(L, 5);
    console.warn('IssueNeutralPointOrder was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native IssueNeutralPointOrderById takes player forWhichPlayer, unit neutralStructure, integer unitId, real x, real y returns boolean
 */
function IssueNeutralPointOrderById(C, L) {
    let forWhichPlayer = lua_1.lua_touserdata(L, 1);
    let neutralStructure = lua_1.lua_touserdata(L, 2);
    let unitId = lauxlib_1.luaL_checkinteger(L, 3);
    let x = lauxlib_1.luaL_checknumber(L, 4);
    let y = lauxlib_1.luaL_checknumber(L, 5);
    console.warn('IssueNeutralPointOrderById was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native IssueNeutralTargetOrder takes player forWhichPlayer, unit neutralStructure, string unitToBuild, widget target returns boolean
 */
function IssueNeutralTargetOrder(C, L) {
    let forWhichPlayer = lua_1.lua_touserdata(L, 1);
    let neutralStructure = lua_1.lua_touserdata(L, 2);
    let unitToBuild = lauxlib_1.luaL_checkstring(L, 3);
    let target = lua_1.lua_touserdata(L, 4);
    console.warn('IssueNeutralTargetOrder was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native IssueNeutralTargetOrderById takes player forWhichPlayer, unit neutralStructure, integer unitId, widget target returns boolean
 */
function IssueNeutralTargetOrderById(C, L) {
    let forWhichPlayer = lua_1.lua_touserdata(L, 1);
    let neutralStructure = lua_1.lua_touserdata(L, 2);
    let unitId = lauxlib_1.luaL_checkinteger(L, 3);
    let target = lua_1.lua_touserdata(L, 4);
    console.warn('IssueNeutralTargetOrderById was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native GetUnitCurrentOrder takes unit whichUnit returns integer
 */
function GetUnitCurrentOrder(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    console.warn('GetUnitCurrentOrder was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native SetResourceAmount takes unit whichUnit, integer amount returns nothing
 */
function SetResourceAmount(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let amount = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('SetResourceAmount was called but is not implemented :(');
    return 0;
}
/**
 * native AddResourceAmount takes unit whichUnit, integer amount returns nothing
 */
function AddResourceAmount(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let amount = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('AddResourceAmount was called but is not implemented :(');
    return 0;
}
/**
 * native GetResourceAmount takes unit whichUnit returns integer
 */
function GetResourceAmount(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    console.warn('GetResourceAmount was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native WaygateGetDestinationX takes unit waygate returns real
 */
function WaygateGetDestinationX(C, L) {
    let waygate = lua_1.lua_touserdata(L, 1);
    console.warn('WaygateGetDestinationX was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native WaygateGetDestinationY takes unit waygate returns real
 */
function WaygateGetDestinationY(C, L) {
    let waygate = lua_1.lua_touserdata(L, 1);
    console.warn('WaygateGetDestinationY was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native WaygateSetDestination takes unit waygate, real x, real y returns nothing
 */
function WaygateSetDestination(C, L) {
    let waygate = lua_1.lua_touserdata(L, 1);
    let x = lauxlib_1.luaL_checknumber(L, 2);
    let y = lauxlib_1.luaL_checknumber(L, 3);
    console.warn('WaygateSetDestination was called but is not implemented :(');
    return 0;
}
/**
 * native WaygateActivate takes unit waygate, boolean activate returns nothing
 */
function WaygateActivate(C, L) {
    let waygate = lua_1.lua_touserdata(L, 1);
    let activate = lua_1.lua_toboolean(L, 2);
    console.warn('WaygateActivate was called but is not implemented :(');
    return 0;
}
/**
 * native WaygateIsActive takes unit waygate returns boolean
 */
function WaygateIsActive(C, L) {
    let waygate = lua_1.lua_touserdata(L, 1);
    console.warn('WaygateIsActive was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native AddItemToAllStock takes integer itemId, integer currentStock, integer stockMax returns nothing
 */
function AddItemToAllStock(C, L) {
    let itemId = lauxlib_1.luaL_checkinteger(L, 1);
    let currentStock = lauxlib_1.luaL_checkinteger(L, 2);
    let stockMax = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('AddItemToAllStock was called but is not implemented :(');
    return 0;
}
/**
 * native AddItemToStock takes unit whichUnit, integer itemId, integer currentStock, integer stockMax returns nothing
 */
function AddItemToStock(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let itemId = lauxlib_1.luaL_checkinteger(L, 2);
    let currentStock = lauxlib_1.luaL_checkinteger(L, 3);
    let stockMax = lauxlib_1.luaL_checkinteger(L, 4);
    console.warn('AddItemToStock was called but is not implemented :(');
    return 0;
}
/**
 * native AddUnitToAllStock takes integer unitId, integer currentStock, integer stockMax returns nothing
 */
function AddUnitToAllStock(C, L) {
    let unitId = lauxlib_1.luaL_checkinteger(L, 1);
    let currentStock = lauxlib_1.luaL_checkinteger(L, 2);
    let stockMax = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('AddUnitToAllStock was called but is not implemented :(');
    return 0;
}
/**
 * native AddUnitToStock takes unit whichUnit, integer unitId, integer currentStock, integer stockMax returns nothing
 */
function AddUnitToStock(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let unitId = lauxlib_1.luaL_checkinteger(L, 2);
    let currentStock = lauxlib_1.luaL_checkinteger(L, 3);
    let stockMax = lauxlib_1.luaL_checkinteger(L, 4);
    console.warn('AddUnitToStock was called but is not implemented :(');
    return 0;
}
/**
 * native RemoveItemFromAllStock takes integer itemId returns nothing
 */
function RemoveItemFromAllStock(C, L) {
    let itemId = lauxlib_1.luaL_checkinteger(L, 1);
    console.warn('RemoveItemFromAllStock was called but is not implemented :(');
    return 0;
}
/**
 * native RemoveItemFromStock takes unit whichUnit, integer itemId returns nothing
 */
function RemoveItemFromStock(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let itemId = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('RemoveItemFromStock was called but is not implemented :(');
    return 0;
}
/**
 * native RemoveUnitFromAllStock takes integer unitId returns nothing
 */
function RemoveUnitFromAllStock(C, L) {
    let unitId = lauxlib_1.luaL_checkinteger(L, 1);
    console.warn('RemoveUnitFromAllStock was called but is not implemented :(');
    return 0;
}
/**
 * native RemoveUnitFromStock takes unit whichUnit, integer unitId returns nothing
 */
function RemoveUnitFromStock(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let unitId = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('RemoveUnitFromStock was called but is not implemented :(');
    return 0;
}
/**
 * native SetAllItemTypeSlots takes integer slots returns nothing
 */
function SetAllItemTypeSlots(C, L) {
    let slots = lauxlib_1.luaL_checkinteger(L, 1);
    console.warn('SetAllItemTypeSlots was called but is not implemented :(');
    return 0;
}
/**
 * native SetAllUnitTypeSlots takes integer slots returns nothing
 */
function SetAllUnitTypeSlots(C, L) {
    let slots = lauxlib_1.luaL_checkinteger(L, 1);
    console.warn('SetAllUnitTypeSlots was called but is not implemented :(');
    return 0;
}
/**
 * native SetItemTypeSlots takes unit whichUnit, integer slots returns nothing
 */
function SetItemTypeSlots(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let slots = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('SetItemTypeSlots was called but is not implemented :(');
    return 0;
}
/**
 * native SetUnitTypeSlots takes unit whichUnit, integer slots returns nothing
 */
function SetUnitTypeSlots(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let slots = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('SetUnitTypeSlots was called but is not implemented :(');
    return 0;
}
/**
 * native GetUnitUserData takes unit whichUnit returns integer
 */
function GetUnitUserData(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    console.warn('GetUnitUserData was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native SetUnitUserData takes unit whichUnit, integer data returns nothing
 */
function SetUnitUserData(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let data = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('SetUnitUserData was called but is not implemented :(');
    return 0;
}
/**
 * constant native Player takes integer number returns player
 */
function Player(C, L) {
    let number = lauxlib_1.luaL_checkinteger(L, 1);
    lua_1.lua_pushlightuserdata(L, C.players[number]);
    return 1;
}
/**
 * constant native GetLocalPlayer takes nothing returns player
 */
function GetLocalPlayer(C, L) {
    console.warn('GetLocalPlayer was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native IsPlayerAlly takes player whichPlayer, player otherPlayer returns boolean
 */
function IsPlayerAlly(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    let otherPlayer = lua_1.lua_touserdata(L, 2);
    console.warn('IsPlayerAlly was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * constant native IsPlayerEnemy takes player whichPlayer, player otherPlayer returns boolean
 */
function IsPlayerEnemy(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    let otherPlayer = lua_1.lua_touserdata(L, 2);
    console.warn('IsPlayerEnemy was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * constant native IsPlayerInForce takes player whichPlayer, force whichForce returns boolean
 */
function IsPlayerInForce(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    let whichForce = lua_1.lua_touserdata(L, 2);
    console.warn('IsPlayerInForce was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * constant native IsPlayerObserver takes player whichPlayer returns boolean
 */
function IsPlayerObserver(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    console.warn('IsPlayerObserver was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * constant native IsVisibleToPlayer takes real x, real y, player whichPlayer returns boolean
 */
function IsVisibleToPlayer(C, L) {
    let x = lauxlib_1.luaL_checknumber(L, 1);
    let y = lauxlib_1.luaL_checknumber(L, 2);
    let whichPlayer = lua_1.lua_touserdata(L, 3);
    console.warn('IsVisibleToPlayer was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * constant native IsLocationVisibleToPlayer takes location whichLocation, player whichPlayer returns boolean
 */
function IsLocationVisibleToPlayer(C, L) {
    let whichLocation = lua_1.lua_touserdata(L, 1);
    let whichPlayer = lua_1.lua_touserdata(L, 2);
    console.warn('IsLocationVisibleToPlayer was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * constant native IsFoggedToPlayer takes real x, real y, player whichPlayer returns boolean
 */
function IsFoggedToPlayer(C, L) {
    let x = lauxlib_1.luaL_checknumber(L, 1);
    let y = lauxlib_1.luaL_checknumber(L, 2);
    let whichPlayer = lua_1.lua_touserdata(L, 3);
    console.warn('IsFoggedToPlayer was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * constant native IsLocationFoggedToPlayer takes location whichLocation, player whichPlayer returns boolean
 */
function IsLocationFoggedToPlayer(C, L) {
    let whichLocation = lua_1.lua_touserdata(L, 1);
    let whichPlayer = lua_1.lua_touserdata(L, 2);
    console.warn('IsLocationFoggedToPlayer was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * constant native IsMaskedToPlayer takes real x, real y, player whichPlayer returns boolean
 */
function IsMaskedToPlayer(C, L) {
    let x = lauxlib_1.luaL_checknumber(L, 1);
    let y = lauxlib_1.luaL_checknumber(L, 2);
    let whichPlayer = lua_1.lua_touserdata(L, 3);
    console.warn('IsMaskedToPlayer was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * constant native IsLocationMaskedToPlayer takes location whichLocation, player whichPlayer returns boolean
 */
function IsLocationMaskedToPlayer(C, L) {
    let whichLocation = lua_1.lua_touserdata(L, 1);
    let whichPlayer = lua_1.lua_touserdata(L, 2);
    console.warn('IsLocationMaskedToPlayer was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * constant native GetPlayerRace takes player whichPlayer returns race
 */
function GetPlayerRace(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    lua_1.lua_pushlightuserdata(L, whichPlayer.race);
    return 1;
}
/**
 * constant native GetPlayerId takes player whichPlayer returns integer
 */
function GetPlayerId(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    lua_1.lua_pushinteger(L, whichPlayer.index);
    return 1;
}
/**
 * constant native GetPlayerUnitCount takes player whichPlayer, boolean includeIncomplete returns integer
 */
function GetPlayerUnitCount(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    let includeIncomplete = lua_1.lua_toboolean(L, 2);
    console.warn('GetPlayerUnitCount was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * constant native GetPlayerTypedUnitCount takes player whichPlayer, string unitName, boolean includeIncomplete, boolean includeUpgrades returns integer
 */
function GetPlayerTypedUnitCount(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    let unitName = lauxlib_1.luaL_checkstring(L, 2);
    let includeIncomplete = lua_1.lua_toboolean(L, 3);
    let includeUpgrades = lua_1.lua_toboolean(L, 4);
    console.warn('GetPlayerTypedUnitCount was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * constant native GetPlayerStructureCount takes player whichPlayer, boolean includeIncomplete returns integer
 */
function GetPlayerStructureCount(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    let includeIncomplete = lua_1.lua_toboolean(L, 2);
    console.warn('GetPlayerStructureCount was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * constant native GetPlayerState takes player whichPlayer, playerstate whichPlayerState returns integer
 */
function GetPlayerState(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    let whichPlayerState = lua_1.lua_touserdata(L, 2);
    console.warn('GetPlayerState was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * constant native GetPlayerScore takes player whichPlayer, playerscore whichPlayerScore returns integer
 */
function GetPlayerScore(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    let whichPlayerScore = lua_1.lua_touserdata(L, 2);
    console.warn('GetPlayerScore was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * constant native GetPlayerAlliance takes player sourcePlayer, player otherPlayer, alliancetype whichAllianceSetting returns boolean
 */
function GetPlayerAlliance(C, L) {
    let sourcePlayer = lua_1.lua_touserdata(L, 1);
    let otherPlayer = lua_1.lua_touserdata(L, 2);
    let whichAllianceSetting = lua_1.lua_touserdata(L, 3);
    console.warn('GetPlayerAlliance was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * constant native GetPlayerHandicap takes player whichPlayer returns real
 */
function GetPlayerHandicap(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    console.warn('GetPlayerHandicap was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * constant native GetPlayerHandicapXP takes player whichPlayer returns real
 */
function GetPlayerHandicapXP(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    console.warn('GetPlayerHandicapXP was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * constant native SetPlayerHandicap takes player whichPlayer, real handicap returns nothing
 */
function SetPlayerHandicap(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    let handicap = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('SetPlayerHandicap was called but is not implemented :(');
    return 0;
}
/**
 * constant native SetPlayerHandicapXP takes player whichPlayer, real handicap returns nothing
 */
function SetPlayerHandicapXP(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    let handicap = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('SetPlayerHandicapXP was called but is not implemented :(');
    return 0;
}
/**
 * constant native SetPlayerTechMaxAllowed takes player whichPlayer, integer techid, integer maximum returns nothing
 */
function SetPlayerTechMaxAllowed(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    let techid = lauxlib_1.luaL_checkinteger(L, 2);
    let maximum = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('SetPlayerTechMaxAllowed was called but is not implemented :(');
    return 0;
}
/**
 * constant native GetPlayerTechMaxAllowed takes player whichPlayer, integer techid returns integer
 */
function GetPlayerTechMaxAllowed(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    let techid = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('GetPlayerTechMaxAllowed was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * constant native AddPlayerTechResearched takes player whichPlayer, integer techid, integer levels returns nothing
 */
function AddPlayerTechResearched(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    let techid = lauxlib_1.luaL_checkinteger(L, 2);
    let levels = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('AddPlayerTechResearched was called but is not implemented :(');
    return 0;
}
/**
 * constant native SetPlayerTechResearched takes player whichPlayer, integer techid, integer setToLevel returns nothing
 */
function SetPlayerTechResearched(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    let techid = lauxlib_1.luaL_checkinteger(L, 2);
    let setToLevel = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('SetPlayerTechResearched was called but is not implemented :(');
    return 0;
}
/**
 * constant native GetPlayerTechResearched takes player whichPlayer, integer techid, boolean specificonly returns boolean
 */
function GetPlayerTechResearched(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    let techid = lauxlib_1.luaL_checkinteger(L, 2);
    let specificonly = lua_1.lua_toboolean(L, 3);
    console.warn('GetPlayerTechResearched was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * constant native GetPlayerTechCount takes player whichPlayer, integer techid, boolean specificonly returns integer
 */
function GetPlayerTechCount(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    let techid = lauxlib_1.luaL_checkinteger(L, 2);
    let specificonly = lua_1.lua_toboolean(L, 3);
    console.warn('GetPlayerTechCount was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native SetPlayerUnitsOwner takes player whichPlayer, integer newOwner returns nothing
 */
function SetPlayerUnitsOwner(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    let newOwner = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('SetPlayerUnitsOwner was called but is not implemented :(');
    return 0;
}
/**
 * native CripplePlayer takes player whichPlayer, force toWhichPlayers, boolean flag returns nothing
 */
function CripplePlayer(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    let toWhichPlayers = lua_1.lua_touserdata(L, 2);
    let flag = lua_1.lua_toboolean(L, 3);
    console.warn('CripplePlayer was called but is not implemented :(');
    return 0;
}
/**
 * native SetPlayerAbilityAvailable takes player whichPlayer, integer abilid, boolean avail returns nothing
 */
function SetPlayerAbilityAvailable(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    let abilid = lauxlib_1.luaL_checkinteger(L, 2);
    let avail = lua_1.lua_toboolean(L, 3);
    console.warn('SetPlayerAbilityAvailable was called but is not implemented :(');
    return 0;
}
/**
 * native SetPlayerState takes player whichPlayer, playerstate whichPlayerState, integer value returns nothing
 */
function SetPlayerState(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    let whichPlayerState = lua_1.lua_touserdata(L, 2);
    let value = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('SetPlayerState was called but is not implemented :(');
    return 0;
}
/**
 * native RemovePlayer takes player whichPlayer, playergameresult gameResult returns nothing
 */
function RemovePlayer(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    let gameResult = lua_1.lua_touserdata(L, 2);
    console.warn('RemovePlayer was called but is not implemented :(');
    return 0;
}
/**
 * native CachePlayerHeroData takes player whichPlayer returns nothing
 */
function CachePlayerHeroData(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    console.warn('CachePlayerHeroData was called but is not implemented :(');
    return 0;
}
/**
 * native SetFogStateRect takes player forWhichPlayer, fogstate whichState, rect where, boolean useSharedVision returns nothing
 */
function SetFogStateRect(C, L) {
    let forWhichPlayer = lua_1.lua_touserdata(L, 1);
    let whichState = lua_1.lua_touserdata(L, 2);
    let where = lua_1.lua_touserdata(L, 3);
    let useSharedVision = lua_1.lua_toboolean(L, 4);
    console.warn('SetFogStateRect was called but is not implemented :(');
    return 0;
}
/**
 * native SetFogStateRadius takes player forWhichPlayer, fogstate whichState, real centerx, real centerY, real radius, boolean useSharedVision returns nothing
 */
function SetFogStateRadius(C, L) {
    let forWhichPlayer = lua_1.lua_touserdata(L, 1);
    let whichState = lua_1.lua_touserdata(L, 2);
    let centerx = lauxlib_1.luaL_checknumber(L, 3);
    let centerY = lauxlib_1.luaL_checknumber(L, 4);
    let radius = lauxlib_1.luaL_checknumber(L, 5);
    let useSharedVision = lua_1.lua_toboolean(L, 6);
    console.warn('SetFogStateRadius was called but is not implemented :(');
    return 0;
}
/**
 * native SetFogStateRadiusLoc takes player forWhichPlayer, fogstate whichState, location center, real radius, boolean useSharedVision returns nothing
 */
function SetFogStateRadiusLoc(C, L) {
    let forWhichPlayer = lua_1.lua_touserdata(L, 1);
    let whichState = lua_1.lua_touserdata(L, 2);
    let center = lua_1.lua_touserdata(L, 3);
    let radius = lauxlib_1.luaL_checknumber(L, 4);
    let useSharedVision = lua_1.lua_toboolean(L, 5);
    console.warn('SetFogStateRadiusLoc was called but is not implemented :(');
    return 0;
}
/**
 * native FogMaskEnable takes boolean enable returns nothing
 */
function FogMaskEnable(C, L) {
    let enable = lua_1.lua_toboolean(L, 1);
    console.warn('FogMaskEnable was called but is not implemented :(');
    return 0;
}
/**
 * native IsFogMaskEnabled takes nothing returns boolean
 */
function IsFogMaskEnabled(C, L) {
    console.warn('IsFogMaskEnabled was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native FogEnable takes boolean enable returns nothing
 */
function FogEnable(C, L) {
    let enable = lua_1.lua_toboolean(L, 1);
    console.warn('FogEnable was called but is not implemented :(');
    return 0;
}
/**
 * native IsFogEnabled takes nothing returns boolean
 */
function IsFogEnabled(C, L) {
    console.warn('IsFogEnabled was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native CreateFogModifierRect takes player forWhichPlayer, fogstate whichState, rect where, boolean useSharedVision, boolean afterUnits returns fogmodifier
 */
function CreateFogModifierRect(C, L) {
    let forWhichPlayer = lua_1.lua_touserdata(L, 1);
    let whichState = lua_1.lua_touserdata(L, 2);
    let where = lua_1.lua_touserdata(L, 3);
    let useSharedVision = lua_1.lua_toboolean(L, 4);
    let afterUnits = lua_1.lua_toboolean(L, 5);
    console.warn('CreateFogModifierRect was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native CreateFogModifierRadius takes player forWhichPlayer, fogstate whichState, real centerx, real centerY, real radius, boolean useSharedVision, boolean afterUnits returns fogmodifier
 */
function CreateFogModifierRadius(C, L) {
    let forWhichPlayer = lua_1.lua_touserdata(L, 1);
    let whichState = lua_1.lua_touserdata(L, 2);
    let centerx = lauxlib_1.luaL_checknumber(L, 3);
    let centerY = lauxlib_1.luaL_checknumber(L, 4);
    let radius = lauxlib_1.luaL_checknumber(L, 5);
    let useSharedVision = lua_1.lua_toboolean(L, 6);
    let afterUnits = lua_1.lua_toboolean(L, 7);
    console.warn('CreateFogModifierRadius was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native CreateFogModifierRadiusLoc takes player forWhichPlayer, fogstate whichState, location center, real radius, boolean useSharedVision, boolean afterUnits returns fogmodifier
 */
function CreateFogModifierRadiusLoc(C, L) {
    let forWhichPlayer = lua_1.lua_touserdata(L, 1);
    let whichState = lua_1.lua_touserdata(L, 2);
    let center = lua_1.lua_touserdata(L, 3);
    let radius = lauxlib_1.luaL_checknumber(L, 4);
    let useSharedVision = lua_1.lua_toboolean(L, 5);
    let afterUnits = lua_1.lua_toboolean(L, 6);
    console.warn('CreateFogModifierRadiusLoc was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native DestroyFogModifier takes fogmodifier whichFogModifier returns nothing
 */
function DestroyFogModifier(C, L) {
    let whichFogModifier = lua_1.lua_touserdata(L, 1);
    console.warn('DestroyFogModifier was called but is not implemented :(');
    return 0;
}
/**
 * native FogModifierStart takes fogmodifier whichFogModifier returns nothing
 */
function FogModifierStart(C, L) {
    let whichFogModifier = lua_1.lua_touserdata(L, 1);
    console.warn('FogModifierStart was called but is not implemented :(');
    return 0;
}
/**
 * native FogModifierStop takes fogmodifier whichFogModifier returns nothing
 */
function FogModifierStop(C, L) {
    let whichFogModifier = lua_1.lua_touserdata(L, 1);
    console.warn('FogModifierStop was called but is not implemented :(');
    return 0;
}
/**
 * native VersionGet takes nothing returns version
 */
function VersionGet(C, L) {
    console.warn('VersionGet was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native VersionCompatible takes version whichVersion returns boolean
 */
function VersionCompatible(C, L) {
    let whichVersion = lua_1.lua_touserdata(L, 1);
    console.warn('VersionCompatible was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native VersionSupported takes version whichVersion returns boolean
 */
function VersionSupported(C, L) {
    let whichVersion = lua_1.lua_touserdata(L, 1);
    console.warn('VersionSupported was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native EndGame takes boolean doScoreScreen returns nothing
 */
function EndGame(C, L) {
    let doScoreScreen = lua_1.lua_toboolean(L, 1);
    console.warn('EndGame was called but is not implemented :(');
    return 0;
}
/**
 * native ChangeLevel takes string newLevel, boolean doScoreScreen returns nothing
 */
function ChangeLevel(C, L) {
    let newLevel = lauxlib_1.luaL_checkstring(L, 1);
    let doScoreScreen = lua_1.lua_toboolean(L, 2);
    console.warn('ChangeLevel was called but is not implemented :(');
    return 0;
}
/**
 * native RestartGame takes boolean doScoreScreen returns nothing
 */
function RestartGame(C, L) {
    let doScoreScreen = lua_1.lua_toboolean(L, 1);
    console.warn('RestartGame was called but is not implemented :(');
    return 0;
}
/**
 * native ReloadGame takes nothing returns nothing
 */
function ReloadGame(C, L) {
    console.warn('ReloadGame was called but is not implemented :(');
    return 0;
}
/**
 * native SetCampaignMenuRace takes race r returns nothing
 */
function SetCampaignMenuRace(C, L) {
    let r = lua_1.lua_touserdata(L, 1);
    console.warn('SetCampaignMenuRace was called but is not implemented :(');
    return 0;
}
/**
 * native SetCampaignMenuRaceEx takes integer campaignIndex returns nothing
 */
function SetCampaignMenuRaceEx(C, L) {
    let campaignIndex = lauxlib_1.luaL_checkinteger(L, 1);
    console.warn('SetCampaignMenuRaceEx was called but is not implemented :(');
    return 0;
}
/**
 * native ForceCampaignSelectScreen takes nothing returns nothing
 */
function ForceCampaignSelectScreen(C, L) {
    console.warn('ForceCampaignSelectScreen was called but is not implemented :(');
    return 0;
}
/**
 * native LoadGame takes string saveFileName, boolean doScoreScreen returns nothing
 */
function LoadGame(C, L) {
    let saveFileName = lauxlib_1.luaL_checkstring(L, 1);
    let doScoreScreen = lua_1.lua_toboolean(L, 2);
    console.warn('LoadGame was called but is not implemented :(');
    return 0;
}
/**
 * native SaveGame takes string saveFileName returns nothing
 */
function SaveGame(C, L) {
    let saveFileName = lauxlib_1.luaL_checkstring(L, 1);
    console.warn('SaveGame was called but is not implemented :(');
    return 0;
}
/**
 * native RenameSaveDirectory takes string sourceDirName, string destDirName returns boolean
 */
function RenameSaveDirectory(C, L) {
    let sourceDirName = lauxlib_1.luaL_checkstring(L, 1);
    let destDirName = lauxlib_1.luaL_checkstring(L, 2);
    console.warn('RenameSaveDirectory was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native RemoveSaveDirectory takes string sourceDirName returns boolean
 */
function RemoveSaveDirectory(C, L) {
    let sourceDirName = lauxlib_1.luaL_checkstring(L, 1);
    console.warn('RemoveSaveDirectory was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native CopySaveGame takes string sourceSaveName, string destSaveName returns boolean
 */
function CopySaveGame(C, L) {
    let sourceSaveName = lauxlib_1.luaL_checkstring(L, 1);
    let destSaveName = lauxlib_1.luaL_checkstring(L, 2);
    console.warn('CopySaveGame was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native SaveGameExists takes string saveName returns boolean
 */
function SaveGameExists(C, L) {
    let saveName = lauxlib_1.luaL_checkstring(L, 1);
    console.warn('SaveGameExists was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native SyncSelections takes nothing returns nothing
 */
function SyncSelections(C, L) {
    console.warn('SyncSelections was called but is not implemented :(');
    return 0;
}
/**
 * native SetFloatGameState takes fgamestate whichFloatGameState, real value returns nothing
 */
function SetFloatGameState(C, L) {
    let whichFloatGameState = lua_1.lua_touserdata(L, 1);
    let value = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('SetFloatGameState was called but is not implemented :(');
    return 0;
}
/**
 * constant native GetFloatGameState takes fgamestate whichFloatGameState returns real
 */
function GetFloatGameState(C, L) {
    let whichFloatGameState = lua_1.lua_touserdata(L, 1);
    console.warn('GetFloatGameState was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native SetIntegerGameState takes igamestate whichIntegerGameState, integer value returns nothing
 */
function SetIntegerGameState(C, L) {
    let whichIntegerGameState = lua_1.lua_touserdata(L, 1);
    let value = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('SetIntegerGameState was called but is not implemented :(');
    return 0;
}
/**
 * constant native GetIntegerGameState takes igamestate whichIntegerGameState returns integer
 */
function GetIntegerGameState(C, L) {
    let whichIntegerGameState = lua_1.lua_touserdata(L, 1);
    console.warn('GetIntegerGameState was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native SetTutorialCleared takes boolean cleared returns nothing
 */
function SetTutorialCleared(C, L) {
    let cleared = lua_1.lua_toboolean(L, 1);
    console.warn('SetTutorialCleared was called but is not implemented :(');
    return 0;
}
/**
 * native SetMissionAvailable takes integer campaignNumber, integer missionNumber, boolean available returns nothing
 */
function SetMissionAvailable(C, L) {
    let campaignNumber = lauxlib_1.luaL_checkinteger(L, 1);
    let missionNumber = lauxlib_1.luaL_checkinteger(L, 2);
    let available = lua_1.lua_toboolean(L, 3);
    console.warn('SetMissionAvailable was called but is not implemented :(');
    return 0;
}
/**
 * native SetCampaignAvailable takes integer campaignNumber, boolean available returns nothing
 */
function SetCampaignAvailable(C, L) {
    let campaignNumber = lauxlib_1.luaL_checkinteger(L, 1);
    let available = lua_1.lua_toboolean(L, 2);
    console.warn('SetCampaignAvailable was called but is not implemented :(');
    return 0;
}
/**
 * native SetOpCinematicAvailable takes integer campaignNumber, boolean available returns nothing
 */
function SetOpCinematicAvailable(C, L) {
    let campaignNumber = lauxlib_1.luaL_checkinteger(L, 1);
    let available = lua_1.lua_toboolean(L, 2);
    console.warn('SetOpCinematicAvailable was called but is not implemented :(');
    return 0;
}
/**
 * native SetEdCinematicAvailable takes integer campaignNumber, boolean available returns nothing
 */
function SetEdCinematicAvailable(C, L) {
    let campaignNumber = lauxlib_1.luaL_checkinteger(L, 1);
    let available = lua_1.lua_toboolean(L, 2);
    console.warn('SetEdCinematicAvailable was called but is not implemented :(');
    return 0;
}
/**
 * native GetDefaultDifficulty takes nothing returns gamedifficulty
 */
function GetDefaultDifficulty(C, L) {
    console.warn('GetDefaultDifficulty was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native SetDefaultDifficulty takes gamedifficulty g returns nothing
 */
function SetDefaultDifficulty(C, L) {
    let g = lua_1.lua_touserdata(L, 1);
    console.warn('SetDefaultDifficulty was called but is not implemented :(');
    return 0;
}
/**
 * native SetCustomCampaignButtonVisible takes integer whichButton, boolean visible returns nothing
 */
function SetCustomCampaignButtonVisible(C, L) {
    let whichButton = lauxlib_1.luaL_checkinteger(L, 1);
    let visible = lua_1.lua_toboolean(L, 2);
    console.warn('SetCustomCampaignButtonVisible was called but is not implemented :(');
    return 0;
}
/**
 * native GetCustomCampaignButtonVisible takes integer whichButton returns boolean
 */
function GetCustomCampaignButtonVisible(C, L) {
    let whichButton = lauxlib_1.luaL_checkinteger(L, 1);
    console.warn('GetCustomCampaignButtonVisible was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native DoNotSaveReplay takes nothing returns nothing
 */
function DoNotSaveReplay(C, L) {
    console.warn('DoNotSaveReplay was called but is not implemented :(');
    return 0;
}
/**
 * native DialogCreate takes nothing returns dialog
 */
function DialogCreate(C, L) {
    console.warn('DialogCreate was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native DialogDestroy takes dialog whichDialog returns nothing
 */
function DialogDestroy(C, L) {
    let whichDialog = lua_1.lua_touserdata(L, 1);
    console.warn('DialogDestroy was called but is not implemented :(');
    return 0;
}
/**
 * native DialogClear takes dialog whichDialog returns nothing
 */
function DialogClear(C, L) {
    let whichDialog = lua_1.lua_touserdata(L, 1);
    console.warn('DialogClear was called but is not implemented :(');
    return 0;
}
/**
 * native DialogSetMessage takes dialog whichDialog, string messageText returns nothing
 */
function DialogSetMessage(C, L) {
    let whichDialog = lua_1.lua_touserdata(L, 1);
    let messageText = lauxlib_1.luaL_checkstring(L, 2);
    console.warn('DialogSetMessage was called but is not implemented :(');
    return 0;
}
/**
 * native DialogAddButton takes dialog whichDialog, string buttonText, integer hotkey returns button
 */
function DialogAddButton(C, L) {
    let whichDialog = lua_1.lua_touserdata(L, 1);
    let buttonText = lauxlib_1.luaL_checkstring(L, 2);
    let hotkey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('DialogAddButton was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native DialogAddQuitButton takes dialog whichDialog, boolean doScoreScreen, string buttonText, integer hotkey returns button
 */
function DialogAddQuitButton(C, L) {
    let whichDialog = lua_1.lua_touserdata(L, 1);
    let doScoreScreen = lua_1.lua_toboolean(L, 2);
    let buttonText = lauxlib_1.luaL_checkstring(L, 3);
    let hotkey = lauxlib_1.luaL_checkinteger(L, 4);
    console.warn('DialogAddQuitButton was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native DialogDisplay takes player whichPlayer, dialog whichDialog, boolean flag returns nothing
 */
function DialogDisplay(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    let whichDialog = lua_1.lua_touserdata(L, 2);
    let flag = lua_1.lua_toboolean(L, 3);
    console.warn('DialogDisplay was called but is not implemented :(');
    return 0;
}
/**
 * native ReloadGameCachesFromDisk takes nothing returns boolean
 */
function ReloadGameCachesFromDisk(C, L) {
    console.warn('ReloadGameCachesFromDisk was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native InitGameCache takes string campaignFile returns gamecache
 */
function InitGameCache(C, L) {
    let campaignFile = lauxlib_1.luaL_checkstring(L, 1);
    console.warn('InitGameCache was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native SaveGameCache takes gamecache whichCache returns boolean
 */
function SaveGameCache(C, L) {
    let whichCache = lua_1.lua_touserdata(L, 1);
    console.warn('SaveGameCache was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native StoreInteger takes gamecache cache, string missionKey, string key, integer value returns nothing
 */
function StoreInteger(C, L) {
    let cache = lua_1.lua_touserdata(L, 1);
    let missionKey = lauxlib_1.luaL_checkstring(L, 2);
    let key = lauxlib_1.luaL_checkstring(L, 3);
    let value = lauxlib_1.luaL_checkinteger(L, 4);
    console.warn('StoreInteger was called but is not implemented :(');
    return 0;
}
/**
 * native StoreReal takes gamecache cache, string missionKey, string key, real value returns nothing
 */
function StoreReal(C, L) {
    let cache = lua_1.lua_touserdata(L, 1);
    let missionKey = lauxlib_1.luaL_checkstring(L, 2);
    let key = lauxlib_1.luaL_checkstring(L, 3);
    let value = lauxlib_1.luaL_checknumber(L, 4);
    console.warn('StoreReal was called but is not implemented :(');
    return 0;
}
/**
 * native StoreBoolean takes gamecache cache, string missionKey, string key, boolean value returns nothing
 */
function StoreBoolean(C, L) {
    let cache = lua_1.lua_touserdata(L, 1);
    let missionKey = lauxlib_1.luaL_checkstring(L, 2);
    let key = lauxlib_1.luaL_checkstring(L, 3);
    let value = lua_1.lua_toboolean(L, 4);
    console.warn('StoreBoolean was called but is not implemented :(');
    return 0;
}
/**
 * native StoreUnit takes gamecache cache, string missionKey, string key, unit whichUnit returns boolean
 */
function StoreUnit(C, L) {
    let cache = lua_1.lua_touserdata(L, 1);
    let missionKey = lauxlib_1.luaL_checkstring(L, 2);
    let key = lauxlib_1.luaL_checkstring(L, 3);
    let whichUnit = lua_1.lua_touserdata(L, 4);
    console.warn('StoreUnit was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native StoreString takes gamecache cache, string missionKey, string key, string value returns boolean
 */
function StoreString(C, L) {
    let cache = lua_1.lua_touserdata(L, 1);
    let missionKey = lauxlib_1.luaL_checkstring(L, 2);
    let key = lauxlib_1.luaL_checkstring(L, 3);
    let value = lauxlib_1.luaL_checkstring(L, 4);
    console.warn('StoreString was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native SyncStoredInteger takes gamecache cache, string missionKey, string key returns nothing
 */
function SyncStoredInteger(C, L) {
    let cache = lua_1.lua_touserdata(L, 1);
    let missionKey = lauxlib_1.luaL_checkstring(L, 2);
    let key = lauxlib_1.luaL_checkstring(L, 3);
    console.warn('SyncStoredInteger was called but is not implemented :(');
    return 0;
}
/**
 * native SyncStoredReal takes gamecache cache, string missionKey, string key returns nothing
 */
function SyncStoredReal(C, L) {
    let cache = lua_1.lua_touserdata(L, 1);
    let missionKey = lauxlib_1.luaL_checkstring(L, 2);
    let key = lauxlib_1.luaL_checkstring(L, 3);
    console.warn('SyncStoredReal was called but is not implemented :(');
    return 0;
}
/**
 * native SyncStoredBoolean takes gamecache cache, string missionKey, string key returns nothing
 */
function SyncStoredBoolean(C, L) {
    let cache = lua_1.lua_touserdata(L, 1);
    let missionKey = lauxlib_1.luaL_checkstring(L, 2);
    let key = lauxlib_1.luaL_checkstring(L, 3);
    console.warn('SyncStoredBoolean was called but is not implemented :(');
    return 0;
}
/**
 * native SyncStoredUnit takes gamecache cache, string missionKey, string key returns nothing
 */
function SyncStoredUnit(C, L) {
    let cache = lua_1.lua_touserdata(L, 1);
    let missionKey = lauxlib_1.luaL_checkstring(L, 2);
    let key = lauxlib_1.luaL_checkstring(L, 3);
    console.warn('SyncStoredUnit was called but is not implemented :(');
    return 0;
}
/**
 * native SyncStoredString takes gamecache cache, string missionKey, string key returns nothing
 */
function SyncStoredString(C, L) {
    let cache = lua_1.lua_touserdata(L, 1);
    let missionKey = lauxlib_1.luaL_checkstring(L, 2);
    let key = lauxlib_1.luaL_checkstring(L, 3);
    console.warn('SyncStoredString was called but is not implemented :(');
    return 0;
}
/**
 * native HaveStoredInteger takes gamecache cache, string missionKey, string key returns boolean
 */
function HaveStoredInteger(C, L) {
    let cache = lua_1.lua_touserdata(L, 1);
    let missionKey = lauxlib_1.luaL_checkstring(L, 2);
    let key = lauxlib_1.luaL_checkstring(L, 3);
    console.warn('HaveStoredInteger was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native HaveStoredReal takes gamecache cache, string missionKey, string key returns boolean
 */
function HaveStoredReal(C, L) {
    let cache = lua_1.lua_touserdata(L, 1);
    let missionKey = lauxlib_1.luaL_checkstring(L, 2);
    let key = lauxlib_1.luaL_checkstring(L, 3);
    console.warn('HaveStoredReal was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native HaveStoredBoolean takes gamecache cache, string missionKey, string key returns boolean
 */
function HaveStoredBoolean(C, L) {
    let cache = lua_1.lua_touserdata(L, 1);
    let missionKey = lauxlib_1.luaL_checkstring(L, 2);
    let key = lauxlib_1.luaL_checkstring(L, 3);
    console.warn('HaveStoredBoolean was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native HaveStoredUnit takes gamecache cache, string missionKey, string key returns boolean
 */
function HaveStoredUnit(C, L) {
    let cache = lua_1.lua_touserdata(L, 1);
    let missionKey = lauxlib_1.luaL_checkstring(L, 2);
    let key = lauxlib_1.luaL_checkstring(L, 3);
    console.warn('HaveStoredUnit was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native HaveStoredString takes gamecache cache, string missionKey, string key returns boolean
 */
function HaveStoredString(C, L) {
    let cache = lua_1.lua_touserdata(L, 1);
    let missionKey = lauxlib_1.luaL_checkstring(L, 2);
    let key = lauxlib_1.luaL_checkstring(L, 3);
    console.warn('HaveStoredString was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native FlushGameCache takes gamecache cache returns nothing
 */
function FlushGameCache(C, L) {
    let cache = lua_1.lua_touserdata(L, 1);
    console.warn('FlushGameCache was called but is not implemented :(');
    return 0;
}
/**
 * native FlushStoredMission takes gamecache cache, string missionKey returns nothing
 */
function FlushStoredMission(C, L) {
    let cache = lua_1.lua_touserdata(L, 1);
    let missionKey = lauxlib_1.luaL_checkstring(L, 2);
    console.warn('FlushStoredMission was called but is not implemented :(');
    return 0;
}
/**
 * native FlushStoredInteger takes gamecache cache, string missionKey, string key returns nothing
 */
function FlushStoredInteger(C, L) {
    let cache = lua_1.lua_touserdata(L, 1);
    let missionKey = lauxlib_1.luaL_checkstring(L, 2);
    let key = lauxlib_1.luaL_checkstring(L, 3);
    console.warn('FlushStoredInteger was called but is not implemented :(');
    return 0;
}
/**
 * native FlushStoredReal takes gamecache cache, string missionKey, string key returns nothing
 */
function FlushStoredReal(C, L) {
    let cache = lua_1.lua_touserdata(L, 1);
    let missionKey = lauxlib_1.luaL_checkstring(L, 2);
    let key = lauxlib_1.luaL_checkstring(L, 3);
    console.warn('FlushStoredReal was called but is not implemented :(');
    return 0;
}
/**
 * native FlushStoredBoolean takes gamecache cache, string missionKey, string key returns nothing
 */
function FlushStoredBoolean(C, L) {
    let cache = lua_1.lua_touserdata(L, 1);
    let missionKey = lauxlib_1.luaL_checkstring(L, 2);
    let key = lauxlib_1.luaL_checkstring(L, 3);
    console.warn('FlushStoredBoolean was called but is not implemented :(');
    return 0;
}
/**
 * native FlushStoredUnit takes gamecache cache, string missionKey, string key returns nothing
 */
function FlushStoredUnit(C, L) {
    let cache = lua_1.lua_touserdata(L, 1);
    let missionKey = lauxlib_1.luaL_checkstring(L, 2);
    let key = lauxlib_1.luaL_checkstring(L, 3);
    console.warn('FlushStoredUnit was called but is not implemented :(');
    return 0;
}
/**
 * native FlushStoredString takes gamecache cache, string missionKey, string key returns nothing
 */
function FlushStoredString(C, L) {
    let cache = lua_1.lua_touserdata(L, 1);
    let missionKey = lauxlib_1.luaL_checkstring(L, 2);
    let key = lauxlib_1.luaL_checkstring(L, 3);
    console.warn('FlushStoredString was called but is not implemented :(');
    return 0;
}
/**
 * native GetStoredInteger takes gamecache cache, string missionKey, string key returns integer
 */
function GetStoredInteger(C, L) {
    let cache = lua_1.lua_touserdata(L, 1);
    let missionKey = lauxlib_1.luaL_checkstring(L, 2);
    let key = lauxlib_1.luaL_checkstring(L, 3);
    console.warn('GetStoredInteger was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native GetStoredReal takes gamecache cache, string missionKey, string key returns real
 */
function GetStoredReal(C, L) {
    let cache = lua_1.lua_touserdata(L, 1);
    let missionKey = lauxlib_1.luaL_checkstring(L, 2);
    let key = lauxlib_1.luaL_checkstring(L, 3);
    console.warn('GetStoredReal was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native GetStoredBoolean takes gamecache cache, string missionKey, string key returns boolean
 */
function GetStoredBoolean(C, L) {
    let cache = lua_1.lua_touserdata(L, 1);
    let missionKey = lauxlib_1.luaL_checkstring(L, 2);
    let key = lauxlib_1.luaL_checkstring(L, 3);
    console.warn('GetStoredBoolean was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native GetStoredString takes gamecache cache, string missionKey, string key returns string
 */
function GetStoredString(C, L) {
    let cache = lua_1.lua_touserdata(L, 1);
    let missionKey = lauxlib_1.luaL_checkstring(L, 2);
    let key = lauxlib_1.luaL_checkstring(L, 3);
    console.warn('GetStoredString was called but is not implemented :(');
    lua_1.lua_pushstring(L, '');
    return 1;
}
/**
 * native RestoreUnit takes gamecache cache, string missionKey, string key, player forWhichPlayer, real x, real y, real facing returns unit
 */
function RestoreUnit(C, L) {
    let cache = lua_1.lua_touserdata(L, 1);
    let missionKey = lauxlib_1.luaL_checkstring(L, 2);
    let key = lauxlib_1.luaL_checkstring(L, 3);
    let forWhichPlayer = lua_1.lua_touserdata(L, 4);
    let x = lauxlib_1.luaL_checknumber(L, 5);
    let y = lauxlib_1.luaL_checknumber(L, 6);
    let facing = lauxlib_1.luaL_checknumber(L, 7);
    console.warn('RestoreUnit was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native InitHashtable takes nothing returns hashtable
 */
function InitHashtable(C, L) {
    console.warn('InitHashtable was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native SaveInteger takes hashtable table, integer parentKey, integer childKey, integer value returns nothing
 */
function SaveInteger(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    let value = lauxlib_1.luaL_checkinteger(L, 4);
    console.warn('SaveInteger was called but is not implemented :(');
    return 0;
}
/**
 * native SaveReal takes hashtable table, integer parentKey, integer childKey, real value returns nothing
 */
function SaveReal(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    let value = lauxlib_1.luaL_checknumber(L, 4);
    console.warn('SaveReal was called but is not implemented :(');
    return 0;
}
/**
 * native SaveBoolean takes hashtable table, integer parentKey, integer childKey, boolean value returns nothing
 */
function SaveBoolean(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    let value = lua_1.lua_toboolean(L, 4);
    console.warn('SaveBoolean was called but is not implemented :(');
    return 0;
}
/**
 * native SaveStr takes hashtable table, integer parentKey, integer childKey, string value returns boolean
 */
function SaveStr(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    let value = lauxlib_1.luaL_checkstring(L, 4);
    console.warn('SaveStr was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native SavePlayerHandle takes hashtable table, integer parentKey, integer childKey, player whichPlayer returns boolean
 */
function SavePlayerHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    let whichPlayer = lua_1.lua_touserdata(L, 4);
    console.warn('SavePlayerHandle was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native SaveWidgetHandle takes hashtable table, integer parentKey, integer childKey, widget whichWidget returns boolean
 */
function SaveWidgetHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    let whichWidget = lua_1.lua_touserdata(L, 4);
    console.warn('SaveWidgetHandle was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native SaveDestructableHandle takes hashtable table, integer parentKey, integer childKey, destructable whichDestructable returns boolean
 */
function SaveDestructableHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    let whichDestructable = lua_1.lua_touserdata(L, 4);
    console.warn('SaveDestructableHandle was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native SaveItemHandle takes hashtable table, integer parentKey, integer childKey, item whichItem returns boolean
 */
function SaveItemHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    let whichItem = lua_1.lua_touserdata(L, 4);
    console.warn('SaveItemHandle was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native SaveUnitHandle takes hashtable table, integer parentKey, integer childKey, unit whichUnit returns boolean
 */
function SaveUnitHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    let whichUnit = lua_1.lua_touserdata(L, 4);
    console.warn('SaveUnitHandle was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native SaveAbilityHandle takes hashtable table, integer parentKey, integer childKey, ability whichAbility returns boolean
 */
function SaveAbilityHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    let whichAbility = lua_1.lua_touserdata(L, 4);
    console.warn('SaveAbilityHandle was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native SaveTimerHandle takes hashtable table, integer parentKey, integer childKey, timer whichTimer returns boolean
 */
function SaveTimerHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    let whichTimer = lua_1.lua_touserdata(L, 4);
    console.warn('SaveTimerHandle was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native SaveTriggerHandle takes hashtable table, integer parentKey, integer childKey, trigger whichTrigger returns boolean
 */
function SaveTriggerHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    let whichTrigger = lua_1.lua_touserdata(L, 4);
    console.warn('SaveTriggerHandle was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native SaveTriggerConditionHandle takes hashtable table, integer parentKey, integer childKey, triggercondition whichTriggercondition returns boolean
 */
function SaveTriggerConditionHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    let whichTriggercondition = lua_1.lua_touserdata(L, 4);
    console.warn('SaveTriggerConditionHandle was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native SaveTriggerActionHandle takes hashtable table, integer parentKey, integer childKey, triggeraction whichTriggeraction returns boolean
 */
function SaveTriggerActionHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    let whichTriggeraction = lua_1.lua_touserdata(L, 4);
    console.warn('SaveTriggerActionHandle was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native SaveTriggerEventHandle takes hashtable table, integer parentKey, integer childKey, event whichEvent returns boolean
 */
function SaveTriggerEventHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    let whichEvent = lua_1.lua_touserdata(L, 4);
    console.warn('SaveTriggerEventHandle was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native SaveForceHandle takes hashtable table, integer parentKey, integer childKey, force whichForce returns boolean
 */
function SaveForceHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    let whichForce = lua_1.lua_touserdata(L, 4);
    console.warn('SaveForceHandle was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native SaveGroupHandle takes hashtable table, integer parentKey, integer childKey, group whichGroup returns boolean
 */
function SaveGroupHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    let whichGroup = lua_1.lua_touserdata(L, 4);
    console.warn('SaveGroupHandle was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native SaveLocationHandle takes hashtable table, integer parentKey, integer childKey, location whichLocation returns boolean
 */
function SaveLocationHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    let whichLocation = lua_1.lua_touserdata(L, 4);
    console.warn('SaveLocationHandle was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native SaveRectHandle takes hashtable table, integer parentKey, integer childKey, rect whichRect returns boolean
 */
function SaveRectHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    let whichRect = lua_1.lua_touserdata(L, 4);
    console.warn('SaveRectHandle was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native SaveBooleanExprHandle takes hashtable table, integer parentKey, integer childKey, boolexpr whichBoolexpr returns boolean
 */
function SaveBooleanExprHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    let whichBoolexpr = lua_1.lua_touserdata(L, 4);
    console.warn('SaveBooleanExprHandle was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native SaveSoundHandle takes hashtable table, integer parentKey, integer childKey, sound whichSound returns boolean
 */
function SaveSoundHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    let whichSound = lua_1.lua_touserdata(L, 4);
    console.warn('SaveSoundHandle was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native SaveEffectHandle takes hashtable table, integer parentKey, integer childKey, effect whichEffect returns boolean
 */
function SaveEffectHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    let whichEffect = lua_1.lua_touserdata(L, 4);
    console.warn('SaveEffectHandle was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native SaveUnitPoolHandle takes hashtable table, integer parentKey, integer childKey, unitpool whichUnitpool returns boolean
 */
function SaveUnitPoolHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    let whichUnitpool = lua_1.lua_touserdata(L, 4);
    console.warn('SaveUnitPoolHandle was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native SaveItemPoolHandle takes hashtable table, integer parentKey, integer childKey, itempool whichItempool returns boolean
 */
function SaveItemPoolHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    let whichItempool = lua_1.lua_touserdata(L, 4);
    console.warn('SaveItemPoolHandle was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native SaveQuestHandle takes hashtable table, integer parentKey, integer childKey, quest whichQuest returns boolean
 */
function SaveQuestHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    let whichQuest = lua_1.lua_touserdata(L, 4);
    console.warn('SaveQuestHandle was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native SaveQuestItemHandle takes hashtable table, integer parentKey, integer childKey, questitem whichQuestitem returns boolean
 */
function SaveQuestItemHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    let whichQuestitem = lua_1.lua_touserdata(L, 4);
    console.warn('SaveQuestItemHandle was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native SaveDefeatConditionHandle takes hashtable table, integer parentKey, integer childKey, defeatcondition whichDefeatcondition returns boolean
 */
function SaveDefeatConditionHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    let whichDefeatcondition = lua_1.lua_touserdata(L, 4);
    console.warn('SaveDefeatConditionHandle was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native SaveTimerDialogHandle takes hashtable table, integer parentKey, integer childKey, timerdialog whichTimerdialog returns boolean
 */
function SaveTimerDialogHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    let whichTimerdialog = lua_1.lua_touserdata(L, 4);
    console.warn('SaveTimerDialogHandle was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native SaveLeaderboardHandle takes hashtable table, integer parentKey, integer childKey, leaderboard whichLeaderboard returns boolean
 */
function SaveLeaderboardHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    let whichLeaderboard = lua_1.lua_touserdata(L, 4);
    console.warn('SaveLeaderboardHandle was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native SaveMultiboardHandle takes hashtable table, integer parentKey, integer childKey, multiboard whichMultiboard returns boolean
 */
function SaveMultiboardHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    let whichMultiboard = lua_1.lua_touserdata(L, 4);
    console.warn('SaveMultiboardHandle was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native SaveMultiboardItemHandle takes hashtable table, integer parentKey, integer childKey, multiboarditem whichMultiboarditem returns boolean
 */
function SaveMultiboardItemHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    let whichMultiboarditem = lua_1.lua_touserdata(L, 4);
    console.warn('SaveMultiboardItemHandle was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native SaveTrackableHandle takes hashtable table, integer parentKey, integer childKey, trackable whichTrackable returns boolean
 */
function SaveTrackableHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    let whichTrackable = lua_1.lua_touserdata(L, 4);
    console.warn('SaveTrackableHandle was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native SaveDialogHandle takes hashtable table, integer parentKey, integer childKey, dialog whichDialog returns boolean
 */
function SaveDialogHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    let whichDialog = lua_1.lua_touserdata(L, 4);
    console.warn('SaveDialogHandle was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native SaveButtonHandle takes hashtable table, integer parentKey, integer childKey, button whichButton returns boolean
 */
function SaveButtonHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    let whichButton = lua_1.lua_touserdata(L, 4);
    console.warn('SaveButtonHandle was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native SaveTextTagHandle takes hashtable table, integer parentKey, integer childKey, texttag whichTexttag returns boolean
 */
function SaveTextTagHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    let whichTexttag = lua_1.lua_touserdata(L, 4);
    console.warn('SaveTextTagHandle was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native SaveLightningHandle takes hashtable table, integer parentKey, integer childKey, lightning whichLightning returns boolean
 */
function SaveLightningHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    let whichLightning = lua_1.lua_touserdata(L, 4);
    console.warn('SaveLightningHandle was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native SaveImageHandle takes hashtable table, integer parentKey, integer childKey, image whichImage returns boolean
 */
function SaveImageHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    let whichImage = lua_1.lua_touserdata(L, 4);
    console.warn('SaveImageHandle was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native SaveUbersplatHandle takes hashtable table, integer parentKey, integer childKey, ubersplat whichUbersplat returns boolean
 */
function SaveUbersplatHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    let whichUbersplat = lua_1.lua_touserdata(L, 4);
    console.warn('SaveUbersplatHandle was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native SaveRegionHandle takes hashtable table, integer parentKey, integer childKey, region whichRegion returns boolean
 */
function SaveRegionHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    let whichRegion = lua_1.lua_touserdata(L, 4);
    console.warn('SaveRegionHandle was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native SaveFogStateHandle takes hashtable table, integer parentKey, integer childKey, fogstate whichFogState returns boolean
 */
function SaveFogStateHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    let whichFogState = lua_1.lua_touserdata(L, 4);
    console.warn('SaveFogStateHandle was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native SaveFogModifierHandle takes hashtable table, integer parentKey, integer childKey, fogmodifier whichFogModifier returns boolean
 */
function SaveFogModifierHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    let whichFogModifier = lua_1.lua_touserdata(L, 4);
    console.warn('SaveFogModifierHandle was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native SaveAgentHandle takes hashtable table, integer parentKey, integer childKey, agent whichAgent returns boolean
 */
function SaveAgentHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    let whichAgent = lua_1.lua_touserdata(L, 4);
    console.warn('SaveAgentHandle was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native SaveHashtableHandle takes hashtable table, integer parentKey, integer childKey, hashtable whichHashtable returns boolean
 */
function SaveHashtableHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    let whichHashtable = lua_1.lua_touserdata(L, 4);
    console.warn('SaveHashtableHandle was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native LoadInteger takes hashtable table, integer parentKey, integer childKey returns integer
 */
function LoadInteger(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('LoadInteger was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native LoadReal takes hashtable table, integer parentKey, integer childKey returns real
 */
function LoadReal(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('LoadReal was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native LoadBoolean takes hashtable table, integer parentKey, integer childKey returns boolean
 */
function LoadBoolean(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('LoadBoolean was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native LoadStr takes hashtable table, integer parentKey, integer childKey returns string
 */
function LoadStr(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('LoadStr was called but is not implemented :(');
    lua_1.lua_pushstring(L, '');
    return 1;
}
/**
 * native LoadPlayerHandle takes hashtable table, integer parentKey, integer childKey returns player
 */
function LoadPlayerHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('LoadPlayerHandle was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native LoadWidgetHandle takes hashtable table, integer parentKey, integer childKey returns widget
 */
function LoadWidgetHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('LoadWidgetHandle was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native LoadDestructableHandle takes hashtable table, integer parentKey, integer childKey returns destructable
 */
function LoadDestructableHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('LoadDestructableHandle was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native LoadItemHandle takes hashtable table, integer parentKey, integer childKey returns item
 */
function LoadItemHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('LoadItemHandle was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native LoadUnitHandle takes hashtable table, integer parentKey, integer childKey returns unit
 */
function LoadUnitHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('LoadUnitHandle was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native LoadAbilityHandle takes hashtable table, integer parentKey, integer childKey returns ability
 */
function LoadAbilityHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('LoadAbilityHandle was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native LoadTimerHandle takes hashtable table, integer parentKey, integer childKey returns timer
 */
function LoadTimerHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('LoadTimerHandle was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native LoadTriggerHandle takes hashtable table, integer parentKey, integer childKey returns trigger
 */
function LoadTriggerHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('LoadTriggerHandle was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native LoadTriggerConditionHandle takes hashtable table, integer parentKey, integer childKey returns triggercondition
 */
function LoadTriggerConditionHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('LoadTriggerConditionHandle was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native LoadTriggerActionHandle takes hashtable table, integer parentKey, integer childKey returns triggeraction
 */
function LoadTriggerActionHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('LoadTriggerActionHandle was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native LoadTriggerEventHandle takes hashtable table, integer parentKey, integer childKey returns event
 */
function LoadTriggerEventHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('LoadTriggerEventHandle was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native LoadForceHandle takes hashtable table, integer parentKey, integer childKey returns force
 */
function LoadForceHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('LoadForceHandle was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native LoadGroupHandle takes hashtable table, integer parentKey, integer childKey returns group
 */
function LoadGroupHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('LoadGroupHandle was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native LoadLocationHandle takes hashtable table, integer parentKey, integer childKey returns location
 */
function LoadLocationHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('LoadLocationHandle was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native LoadRectHandle takes hashtable table, integer parentKey, integer childKey returns rect
 */
function LoadRectHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('LoadRectHandle was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native LoadBooleanExprHandle takes hashtable table, integer parentKey, integer childKey returns boolexpr
 */
function LoadBooleanExprHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('LoadBooleanExprHandle was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native LoadSoundHandle takes hashtable table, integer parentKey, integer childKey returns sound
 */
function LoadSoundHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('LoadSoundHandle was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native LoadEffectHandle takes hashtable table, integer parentKey, integer childKey returns effect
 */
function LoadEffectHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('LoadEffectHandle was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native LoadUnitPoolHandle takes hashtable table, integer parentKey, integer childKey returns unitpool
 */
function LoadUnitPoolHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('LoadUnitPoolHandle was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native LoadItemPoolHandle takes hashtable table, integer parentKey, integer childKey returns itempool
 */
function LoadItemPoolHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('LoadItemPoolHandle was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native LoadQuestHandle takes hashtable table, integer parentKey, integer childKey returns quest
 */
function LoadQuestHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('LoadQuestHandle was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native LoadQuestItemHandle takes hashtable table, integer parentKey, integer childKey returns questitem
 */
function LoadQuestItemHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('LoadQuestItemHandle was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native LoadDefeatConditionHandle takes hashtable table, integer parentKey, integer childKey returns defeatcondition
 */
function LoadDefeatConditionHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('LoadDefeatConditionHandle was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native LoadTimerDialogHandle takes hashtable table, integer parentKey, integer childKey returns timerdialog
 */
function LoadTimerDialogHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('LoadTimerDialogHandle was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native LoadLeaderboardHandle takes hashtable table, integer parentKey, integer childKey returns leaderboard
 */
function LoadLeaderboardHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('LoadLeaderboardHandle was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native LoadMultiboardHandle takes hashtable table, integer parentKey, integer childKey returns multiboard
 */
function LoadMultiboardHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('LoadMultiboardHandle was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native LoadMultiboardItemHandle takes hashtable table, integer parentKey, integer childKey returns multiboarditem
 */
function LoadMultiboardItemHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('LoadMultiboardItemHandle was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native LoadTrackableHandle takes hashtable table, integer parentKey, integer childKey returns trackable
 */
function LoadTrackableHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('LoadTrackableHandle was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native LoadDialogHandle takes hashtable table, integer parentKey, integer childKey returns dialog
 */
function LoadDialogHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('LoadDialogHandle was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native LoadButtonHandle takes hashtable table, integer parentKey, integer childKey returns button
 */
function LoadButtonHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('LoadButtonHandle was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native LoadTextTagHandle takes hashtable table, integer parentKey, integer childKey returns texttag
 */
function LoadTextTagHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('LoadTextTagHandle was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native LoadLightningHandle takes hashtable table, integer parentKey, integer childKey returns lightning
 */
function LoadLightningHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('LoadLightningHandle was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native LoadImageHandle takes hashtable table, integer parentKey, integer childKey returns image
 */
function LoadImageHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('LoadImageHandle was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native LoadUbersplatHandle takes hashtable table, integer parentKey, integer childKey returns ubersplat
 */
function LoadUbersplatHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('LoadUbersplatHandle was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native LoadRegionHandle takes hashtable table, integer parentKey, integer childKey returns region
 */
function LoadRegionHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('LoadRegionHandle was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native LoadFogStateHandle takes hashtable table, integer parentKey, integer childKey returns fogstate
 */
function LoadFogStateHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('LoadFogStateHandle was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native LoadFogModifierHandle takes hashtable table, integer parentKey, integer childKey returns fogmodifier
 */
function LoadFogModifierHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('LoadFogModifierHandle was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native LoadHashtableHandle takes hashtable table, integer parentKey, integer childKey returns hashtable
 */
function LoadHashtableHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('LoadHashtableHandle was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native HaveSavedInteger takes hashtable table, integer parentKey, integer childKey returns boolean
 */
function HaveSavedInteger(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('HaveSavedInteger was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native HaveSavedReal takes hashtable table, integer parentKey, integer childKey returns boolean
 */
function HaveSavedReal(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('HaveSavedReal was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native HaveSavedBoolean takes hashtable table, integer parentKey, integer childKey returns boolean
 */
function HaveSavedBoolean(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('HaveSavedBoolean was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native HaveSavedString takes hashtable table, integer parentKey, integer childKey returns boolean
 */
function HaveSavedString(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('HaveSavedString was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native HaveSavedHandle takes hashtable table, integer parentKey, integer childKey returns boolean
 */
function HaveSavedHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('HaveSavedHandle was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native RemoveSavedInteger takes hashtable table, integer parentKey, integer childKey returns nothing
 */
function RemoveSavedInteger(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('RemoveSavedInteger was called but is not implemented :(');
    return 0;
}
/**
 * native RemoveSavedReal takes hashtable table, integer parentKey, integer childKey returns nothing
 */
function RemoveSavedReal(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('RemoveSavedReal was called but is not implemented :(');
    return 0;
}
/**
 * native RemoveSavedBoolean takes hashtable table, integer parentKey, integer childKey returns nothing
 */
function RemoveSavedBoolean(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('RemoveSavedBoolean was called but is not implemented :(');
    return 0;
}
/**
 * native RemoveSavedString takes hashtable table, integer parentKey, integer childKey returns nothing
 */
function RemoveSavedString(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('RemoveSavedString was called but is not implemented :(');
    return 0;
}
/**
 * native RemoveSavedHandle takes hashtable table, integer parentKey, integer childKey returns nothing
 */
function RemoveSavedHandle(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    let childKey = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('RemoveSavedHandle was called but is not implemented :(');
    return 0;
}
/**
 * native FlushParentHashtable takes hashtable table returns nothing
 */
function FlushParentHashtable(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    console.warn('FlushParentHashtable was called but is not implemented :(');
    return 0;
}
/**
 * native FlushChildHashtable takes hashtable table, integer parentKey returns nothing
 */
function FlushChildHashtable(C, L) {
    let table = lua_1.lua_touserdata(L, 1);
    let parentKey = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('FlushChildHashtable was called but is not implemented :(');
    return 0;
}
/**
 * native GetRandomInt takes integer lowBound, integer highBound returns integer
 */
function GetRandomInt(C, L) {
    let lowBound = lauxlib_1.luaL_checkinteger(L, 1);
    let highBound = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('GetRandomInt was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native GetRandomReal takes real lowBound, real highBound returns real
 */
function GetRandomReal(C, L) {
    let lowBound = lauxlib_1.luaL_checknumber(L, 1);
    let highBound = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('GetRandomReal was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native CreateUnitPool takes nothing returns unitpool
 */
function CreateUnitPool(C, L) {
    console.warn('CreateUnitPool was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native DestroyUnitPool takes unitpool whichPool returns nothing
 */
function DestroyUnitPool(C, L) {
    let whichPool = lua_1.lua_touserdata(L, 1);
    console.warn('DestroyUnitPool was called but is not implemented :(');
    return 0;
}
/**
 * native UnitPoolAddUnitType takes unitpool whichPool, integer unitId, real weight returns nothing
 */
function UnitPoolAddUnitType(C, L) {
    let whichPool = lua_1.lua_touserdata(L, 1);
    let unitId = lauxlib_1.luaL_checkinteger(L, 2);
    let weight = lauxlib_1.luaL_checknumber(L, 3);
    console.warn('UnitPoolAddUnitType was called but is not implemented :(');
    return 0;
}
/**
 * native UnitPoolRemoveUnitType takes unitpool whichPool, integer unitId returns nothing
 */
function UnitPoolRemoveUnitType(C, L) {
    let whichPool = lua_1.lua_touserdata(L, 1);
    let unitId = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('UnitPoolRemoveUnitType was called but is not implemented :(');
    return 0;
}
/**
 * native PlaceRandomUnit takes unitpool whichPool, player forWhichPlayer, real x, real y, real facing returns unit
 */
function PlaceRandomUnit(C, L) {
    let whichPool = lua_1.lua_touserdata(L, 1);
    let forWhichPlayer = lua_1.lua_touserdata(L, 2);
    let x = lauxlib_1.luaL_checknumber(L, 3);
    let y = lauxlib_1.luaL_checknumber(L, 4);
    let facing = lauxlib_1.luaL_checknumber(L, 5);
    console.warn('PlaceRandomUnit was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native CreateItemPool takes nothing returns itempool
 */
function CreateItemPool(C, L) {
    console.warn('CreateItemPool was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native DestroyItemPool takes itempool whichItemPool returns nothing
 */
function DestroyItemPool(C, L) {
    let whichItemPool = lua_1.lua_touserdata(L, 1);
    console.warn('DestroyItemPool was called but is not implemented :(');
    return 0;
}
/**
 * native ItemPoolAddItemType takes itempool whichItemPool, integer itemId, real weight returns nothing
 */
function ItemPoolAddItemType(C, L) {
    let whichItemPool = lua_1.lua_touserdata(L, 1);
    let itemId = lauxlib_1.luaL_checkinteger(L, 2);
    let weight = lauxlib_1.luaL_checknumber(L, 3);
    console.warn('ItemPoolAddItemType was called but is not implemented :(');
    return 0;
}
/**
 * native ItemPoolRemoveItemType takes itempool whichItemPool, integer itemId returns nothing
 */
function ItemPoolRemoveItemType(C, L) {
    let whichItemPool = lua_1.lua_touserdata(L, 1);
    let itemId = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('ItemPoolRemoveItemType was called but is not implemented :(');
    return 0;
}
/**
 * native PlaceRandomItem takes itempool whichItemPool, real x, real y returns item
 */
function PlaceRandomItem(C, L) {
    let whichItemPool = lua_1.lua_touserdata(L, 1);
    let x = lauxlib_1.luaL_checknumber(L, 2);
    let y = lauxlib_1.luaL_checknumber(L, 3);
    console.warn('PlaceRandomItem was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native ChooseRandomCreep takes integer level returns integer
 */
function ChooseRandomCreep(C, L) {
    let level = lauxlib_1.luaL_checkinteger(L, 1);
    console.warn('ChooseRandomCreep was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native ChooseRandomNPBuilding takes nothing returns integer
 */
function ChooseRandomNPBuilding(C, L) {
    console.warn('ChooseRandomNPBuilding was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native ChooseRandomItem takes integer level returns integer
 */
function ChooseRandomItem(C, L) {
    let level = lauxlib_1.luaL_checkinteger(L, 1);
    console.warn('ChooseRandomItem was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native ChooseRandomItemEx takes itemtype whichType, integer level returns integer
 */
function ChooseRandomItemEx(C, L) {
    let whichType = lua_1.lua_touserdata(L, 1);
    let level = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('ChooseRandomItemEx was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native SetRandomSeed takes integer seed returns nothing
 */
function SetRandomSeed(C, L) {
    let seed = lauxlib_1.luaL_checkinteger(L, 1);
    console.warn('SetRandomSeed was called but is not implemented :(');
    return 0;
}
/**
 * native SetTerrainFog takes real a, real b, real c, real d, real e returns nothing
 */
function SetTerrainFog(C, L) {
    let a = lauxlib_1.luaL_checknumber(L, 1);
    let b = lauxlib_1.luaL_checknumber(L, 2);
    let c = lauxlib_1.luaL_checknumber(L, 3);
    let d = lauxlib_1.luaL_checknumber(L, 4);
    let e = lauxlib_1.luaL_checknumber(L, 5);
    console.warn('SetTerrainFog was called but is not implemented :(');
    return 0;
}
/**
 * native ResetTerrainFog takes nothing returns nothing
 */
function ResetTerrainFog(C, L) {
    console.warn('ResetTerrainFog was called but is not implemented :(');
    return 0;
}
/**
 * native SetUnitFog takes real a, real b, real c, real d, real e returns nothing
 */
function SetUnitFog(C, L) {
    let a = lauxlib_1.luaL_checknumber(L, 1);
    let b = lauxlib_1.luaL_checknumber(L, 2);
    let c = lauxlib_1.luaL_checknumber(L, 3);
    let d = lauxlib_1.luaL_checknumber(L, 4);
    let e = lauxlib_1.luaL_checknumber(L, 5);
    console.warn('SetUnitFog was called but is not implemented :(');
    return 0;
}
/**
 * native SetTerrainFogEx takes integer style, real zstart, real zend, real density, real red, real green, real blue returns nothing
 */
function SetTerrainFogEx(C, L) {
    let style = lauxlib_1.luaL_checkinteger(L, 1);
    let zstart = lauxlib_1.luaL_checknumber(L, 2);
    let zend = lauxlib_1.luaL_checknumber(L, 3);
    let density = lauxlib_1.luaL_checknumber(L, 4);
    let red = lauxlib_1.luaL_checknumber(L, 5);
    let green = lauxlib_1.luaL_checknumber(L, 6);
    let blue = lauxlib_1.luaL_checknumber(L, 7);
    console.warn('SetTerrainFogEx was called but is not implemented :(');
    return 0;
}
/**
 * native DisplayTextToPlayer takes player toPlayer, real x, real y, string message returns nothing
 */
function DisplayTextToPlayer(C, L) {
    let toPlayer = lua_1.lua_touserdata(L, 1);
    let x = lauxlib_1.luaL_checknumber(L, 2);
    let y = lauxlib_1.luaL_checknumber(L, 3);
    let message = lauxlib_1.luaL_checkstring(L, 4);
    console.warn('DisplayTextToPlayer was called but is not implemented :(');
    return 0;
}
/**
 * native DisplayTimedTextToPlayer takes player toPlayer, real x, real y, real duration, string message returns nothing
 */
function DisplayTimedTextToPlayer(C, L) {
    let toPlayer = lua_1.lua_touserdata(L, 1);
    let x = lauxlib_1.luaL_checknumber(L, 2);
    let y = lauxlib_1.luaL_checknumber(L, 3);
    let duration = lauxlib_1.luaL_checknumber(L, 4);
    let message = lauxlib_1.luaL_checkstring(L, 5);
    console.warn('DisplayTimedTextToPlayer was called but is not implemented :(');
    return 0;
}
/**
 * native DisplayTimedTextFromPlayer takes player toPlayer, real x, real y, real duration, string message returns nothing
 */
function DisplayTimedTextFromPlayer(C, L) {
    let toPlayer = lua_1.lua_touserdata(L, 1);
    let x = lauxlib_1.luaL_checknumber(L, 2);
    let y = lauxlib_1.luaL_checknumber(L, 3);
    let duration = lauxlib_1.luaL_checknumber(L, 4);
    let message = lauxlib_1.luaL_checkstring(L, 5);
    console.warn('DisplayTimedTextFromPlayer was called but is not implemented :(');
    return 0;
}
/**
 * native ClearTextMessages takes nothing returns nothing
 */
function ClearTextMessages(C, L) {
    console.warn('ClearTextMessages was called but is not implemented :(');
    return 0;
}
/**
 * native SetDayNightModels takes string terrainDNCFile, string unitDNCFile returns nothing
 */
function SetDayNightModels(C, L) {
    let terrainDNCFile = lauxlib_1.luaL_checkstring(L, 1);
    let unitDNCFile = lauxlib_1.luaL_checkstring(L, 2);
    console.warn('SetDayNightModels was called but is not implemented :(');
    return 0;
}
/**
 * native SetSkyModel takes string skyModelFile returns nothing
 */
function SetSkyModel(C, L) {
    let skyModelFile = lauxlib_1.luaL_checkstring(L, 1);
    console.warn('SetSkyModel was called but is not implemented :(');
    return 0;
}
/**
 * native EnableUserControl takes boolean b returns nothing
 */
function EnableUserControl(C, L) {
    let b = lua_1.lua_toboolean(L, 1);
    console.warn('EnableUserControl was called but is not implemented :(');
    return 0;
}
/**
 * native EnableUserUI takes boolean b returns nothing
 */
function EnableUserUI(C, L) {
    let b = lua_1.lua_toboolean(L, 1);
    console.warn('EnableUserUI was called but is not implemented :(');
    return 0;
}
/**
 * native SuspendTimeOfDay takes boolean b returns nothing
 */
function SuspendTimeOfDay(C, L) {
    let b = lua_1.lua_toboolean(L, 1);
    console.warn('SuspendTimeOfDay was called but is not implemented :(');
    return 0;
}
/**
 * native SetTimeOfDayScale takes real r returns nothing
 */
function SetTimeOfDayScale(C, L) {
    let r = lauxlib_1.luaL_checknumber(L, 1);
    console.warn('SetTimeOfDayScale was called but is not implemented :(');
    return 0;
}
/**
 * native GetTimeOfDayScale takes nothing returns real
 */
function GetTimeOfDayScale(C, L) {
    console.warn('GetTimeOfDayScale was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native ShowInterface takes boolean flag, real fadeDuration returns nothing
 */
function ShowInterface(C, L) {
    let flag = lua_1.lua_toboolean(L, 1);
    let fadeDuration = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('ShowInterface was called but is not implemented :(');
    return 0;
}
/**
 * native PauseGame takes boolean flag returns nothing
 */
function PauseGame(C, L) {
    let flag = lua_1.lua_toboolean(L, 1);
    console.warn('PauseGame was called but is not implemented :(');
    return 0;
}
/**
 * native UnitAddIndicator takes unit whichUnit, integer red, integer green, integer blue, integer alpha returns nothing
 */
function UnitAddIndicator(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let red = lauxlib_1.luaL_checkinteger(L, 2);
    let green = lauxlib_1.luaL_checkinteger(L, 3);
    let blue = lauxlib_1.luaL_checkinteger(L, 4);
    let alpha = lauxlib_1.luaL_checkinteger(L, 5);
    console.warn('UnitAddIndicator was called but is not implemented :(');
    return 0;
}
/**
 * native AddIndicator takes widget whichWidget, integer red, integer green, integer blue, integer alpha returns nothing
 */
function AddIndicator(C, L) {
    let whichWidget = lua_1.lua_touserdata(L, 1);
    let red = lauxlib_1.luaL_checkinteger(L, 2);
    let green = lauxlib_1.luaL_checkinteger(L, 3);
    let blue = lauxlib_1.luaL_checkinteger(L, 4);
    let alpha = lauxlib_1.luaL_checkinteger(L, 5);
    console.warn('AddIndicator was called but is not implemented :(');
    return 0;
}
/**
 * native PingMinimap takes real x, real y, real duration returns nothing
 */
function PingMinimap(C, L) {
    let x = lauxlib_1.luaL_checknumber(L, 1);
    let y = lauxlib_1.luaL_checknumber(L, 2);
    let duration = lauxlib_1.luaL_checknumber(L, 3);
    console.warn('PingMinimap was called but is not implemented :(');
    return 0;
}
/**
 * native PingMinimapEx takes real x, real y, real duration, integer red, integer green, integer blue, boolean extraEffects returns nothing
 */
function PingMinimapEx(C, L) {
    let x = lauxlib_1.luaL_checknumber(L, 1);
    let y = lauxlib_1.luaL_checknumber(L, 2);
    let duration = lauxlib_1.luaL_checknumber(L, 3);
    let red = lauxlib_1.luaL_checkinteger(L, 4);
    let green = lauxlib_1.luaL_checkinteger(L, 5);
    let blue = lauxlib_1.luaL_checkinteger(L, 6);
    let extraEffects = lua_1.lua_toboolean(L, 7);
    console.warn('PingMinimapEx was called but is not implemented :(');
    return 0;
}
/**
 * native EnableOcclusion takes boolean flag returns nothing
 */
function EnableOcclusion(C, L) {
    let flag = lua_1.lua_toboolean(L, 1);
    console.warn('EnableOcclusion was called but is not implemented :(');
    return 0;
}
/**
 * native SetIntroShotText takes string introText returns nothing
 */
function SetIntroShotText(C, L) {
    let introText = lauxlib_1.luaL_checkstring(L, 1);
    console.warn('SetIntroShotText was called but is not implemented :(');
    return 0;
}
/**
 * native SetIntroShotModel takes string introModelPath returns nothing
 */
function SetIntroShotModel(C, L) {
    let introModelPath = lauxlib_1.luaL_checkstring(L, 1);
    console.warn('SetIntroShotModel was called but is not implemented :(');
    return 0;
}
/**
 * native EnableWorldFogBoundary takes boolean b returns nothing
 */
function EnableWorldFogBoundary(C, L) {
    let b = lua_1.lua_toboolean(L, 1);
    console.warn('EnableWorldFogBoundary was called but is not implemented :(');
    return 0;
}
/**
 * native PlayModelCinematic takes string modelName returns nothing
 */
function PlayModelCinematic(C, L) {
    let modelName = lauxlib_1.luaL_checkstring(L, 1);
    console.warn('PlayModelCinematic was called but is not implemented :(');
    return 0;
}
/**
 * native PlayCinematic takes string movieName returns nothing
 */
function PlayCinematic(C, L) {
    let movieName = lauxlib_1.luaL_checkstring(L, 1);
    console.warn('PlayCinematic was called but is not implemented :(');
    return 0;
}
/**
 * native ForceUIKey takes string key returns nothing
 */
function ForceUIKey(C, L) {
    let key = lauxlib_1.luaL_checkstring(L, 1);
    console.warn('ForceUIKey was called but is not implemented :(');
    return 0;
}
/**
 * native ForceUICancel takes nothing returns nothing
 */
function ForceUICancel(C, L) {
    console.warn('ForceUICancel was called but is not implemented :(');
    return 0;
}
/**
 * native DisplayLoadDialog takes nothing returns nothing
 */
function DisplayLoadDialog(C, L) {
    console.warn('DisplayLoadDialog was called but is not implemented :(');
    return 0;
}
/**
 * native SetAltMinimapIcon takes string iconPath returns nothing
 */
function SetAltMinimapIcon(C, L) {
    let iconPath = lauxlib_1.luaL_checkstring(L, 1);
    console.warn('SetAltMinimapIcon was called but is not implemented :(');
    return 0;
}
/**
 * native DisableRestartMission takes boolean flag returns nothing
 */
function DisableRestartMission(C, L) {
    let flag = lua_1.lua_toboolean(L, 1);
    console.warn('DisableRestartMission was called but is not implemented :(');
    return 0;
}
/**
 * native CreateTextTag takes nothing returns texttag
 */
function CreateTextTag(C, L) {
    console.warn('CreateTextTag was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native DestroyTextTag takes texttag t returns nothing
 */
function DestroyTextTag(C, L) {
    let t = lua_1.lua_touserdata(L, 1);
    console.warn('DestroyTextTag was called but is not implemented :(');
    return 0;
}
/**
 * native SetTextTagText takes texttag t, string s, real height returns nothing
 */
function SetTextTagText(C, L) {
    let t = lua_1.lua_touserdata(L, 1);
    let s = lauxlib_1.luaL_checkstring(L, 2);
    let height = lauxlib_1.luaL_checknumber(L, 3);
    console.warn('SetTextTagText was called but is not implemented :(');
    return 0;
}
/**
 * native SetTextTagPos takes texttag t, real x, real y, real heightOffset returns nothing
 */
function SetTextTagPos(C, L) {
    let t = lua_1.lua_touserdata(L, 1);
    let x = lauxlib_1.luaL_checknumber(L, 2);
    let y = lauxlib_1.luaL_checknumber(L, 3);
    let heightOffset = lauxlib_1.luaL_checknumber(L, 4);
    console.warn('SetTextTagPos was called but is not implemented :(');
    return 0;
}
/**
 * native SetTextTagPosUnit takes texttag t, unit whichUnit, real heightOffset returns nothing
 */
function SetTextTagPosUnit(C, L) {
    let t = lua_1.lua_touserdata(L, 1);
    let whichUnit = lua_1.lua_touserdata(L, 2);
    let heightOffset = lauxlib_1.luaL_checknumber(L, 3);
    console.warn('SetTextTagPosUnit was called but is not implemented :(');
    return 0;
}
/**
 * native SetTextTagColor takes texttag t, integer red, integer green, integer blue, integer alpha returns nothing
 */
function SetTextTagColor(C, L) {
    let t = lua_1.lua_touserdata(L, 1);
    let red = lauxlib_1.luaL_checkinteger(L, 2);
    let green = lauxlib_1.luaL_checkinteger(L, 3);
    let blue = lauxlib_1.luaL_checkinteger(L, 4);
    let alpha = lauxlib_1.luaL_checkinteger(L, 5);
    console.warn('SetTextTagColor was called but is not implemented :(');
    return 0;
}
/**
 * native SetTextTagVelocity takes texttag t, real xvel, real yvel returns nothing
 */
function SetTextTagVelocity(C, L) {
    let t = lua_1.lua_touserdata(L, 1);
    let xvel = lauxlib_1.luaL_checknumber(L, 2);
    let yvel = lauxlib_1.luaL_checknumber(L, 3);
    console.warn('SetTextTagVelocity was called but is not implemented :(');
    return 0;
}
/**
 * native SetTextTagVisibility takes texttag t, boolean flag returns nothing
 */
function SetTextTagVisibility(C, L) {
    let t = lua_1.lua_touserdata(L, 1);
    let flag = lua_1.lua_toboolean(L, 2);
    console.warn('SetTextTagVisibility was called but is not implemented :(');
    return 0;
}
/**
 * native SetTextTagSuspended takes texttag t, boolean flag returns nothing
 */
function SetTextTagSuspended(C, L) {
    let t = lua_1.lua_touserdata(L, 1);
    let flag = lua_1.lua_toboolean(L, 2);
    console.warn('SetTextTagSuspended was called but is not implemented :(');
    return 0;
}
/**
 * native SetTextTagPermanent takes texttag t, boolean flag returns nothing
 */
function SetTextTagPermanent(C, L) {
    let t = lua_1.lua_touserdata(L, 1);
    let flag = lua_1.lua_toboolean(L, 2);
    console.warn('SetTextTagPermanent was called but is not implemented :(');
    return 0;
}
/**
 * native SetTextTagAge takes texttag t, real age returns nothing
 */
function SetTextTagAge(C, L) {
    let t = lua_1.lua_touserdata(L, 1);
    let age = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('SetTextTagAge was called but is not implemented :(');
    return 0;
}
/**
 * native SetTextTagLifespan takes texttag t, real lifespan returns nothing
 */
function SetTextTagLifespan(C, L) {
    let t = lua_1.lua_touserdata(L, 1);
    let lifespan = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('SetTextTagLifespan was called but is not implemented :(');
    return 0;
}
/**
 * native SetTextTagFadepoint takes texttag t, real fadepoint returns nothing
 */
function SetTextTagFadepoint(C, L) {
    let t = lua_1.lua_touserdata(L, 1);
    let fadepoint = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('SetTextTagFadepoint was called but is not implemented :(');
    return 0;
}
/**
 * native SetReservedLocalHeroButtons takes integer reserved returns nothing
 */
function SetReservedLocalHeroButtons(C, L) {
    let reserved = lauxlib_1.luaL_checkinteger(L, 1);
    console.warn('SetReservedLocalHeroButtons was called but is not implemented :(');
    return 0;
}
/**
 * native GetAllyColorFilterState takes nothing returns integer
 */
function GetAllyColorFilterState(C, L) {
    console.warn('GetAllyColorFilterState was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native SetAllyColorFilterState takes integer state returns nothing
 */
function SetAllyColorFilterState(C, L) {
    let state = lauxlib_1.luaL_checkinteger(L, 1);
    console.warn('SetAllyColorFilterState was called but is not implemented :(');
    return 0;
}
/**
 * native GetCreepCampFilterState takes nothing returns boolean
 */
function GetCreepCampFilterState(C, L) {
    console.warn('GetCreepCampFilterState was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native SetCreepCampFilterState takes boolean state returns nothing
 */
function SetCreepCampFilterState(C, L) {
    let state = lua_1.lua_toboolean(L, 1);
    console.warn('SetCreepCampFilterState was called but is not implemented :(');
    return 0;
}
/**
 * native EnableMinimapFilterButtons takes boolean enableAlly, boolean enableCreep returns nothing
 */
function EnableMinimapFilterButtons(C, L) {
    let enableAlly = lua_1.lua_toboolean(L, 1);
    let enableCreep = lua_1.lua_toboolean(L, 2);
    console.warn('EnableMinimapFilterButtons was called but is not implemented :(');
    return 0;
}
/**
 * native EnableDragSelect takes boolean state, boolean ui returns nothing
 */
function EnableDragSelect(C, L) {
    let state = lua_1.lua_toboolean(L, 1);
    let ui = lua_1.lua_toboolean(L, 2);
    console.warn('EnableDragSelect was called but is not implemented :(');
    return 0;
}
/**
 * native EnablePreSelect takes boolean state, boolean ui returns nothing
 */
function EnablePreSelect(C, L) {
    let state = lua_1.lua_toboolean(L, 1);
    let ui = lua_1.lua_toboolean(L, 2);
    console.warn('EnablePreSelect was called but is not implemented :(');
    return 0;
}
/**
 * native EnableSelect takes boolean state, boolean ui returns nothing
 */
function EnableSelect(C, L) {
    let state = lua_1.lua_toboolean(L, 1);
    let ui = lua_1.lua_toboolean(L, 2);
    console.warn('EnableSelect was called but is not implemented :(');
    return 0;
}
/**
 * native CreateTrackable takes string trackableModelPath, real x, real y, real facing returns trackable
 */
function CreateTrackable(C, L) {
    let trackableModelPath = lauxlib_1.luaL_checkstring(L, 1);
    let x = lauxlib_1.luaL_checknumber(L, 2);
    let y = lauxlib_1.luaL_checknumber(L, 3);
    let facing = lauxlib_1.luaL_checknumber(L, 4);
    console.warn('CreateTrackable was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native CreateQuest takes nothing returns quest
 */
function CreateQuest(C, L) {
    console.warn('CreateQuest was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native DestroyQuest takes quest whichQuest returns nothing
 */
function DestroyQuest(C, L) {
    let whichQuest = lua_1.lua_touserdata(L, 1);
    console.warn('DestroyQuest was called but is not implemented :(');
    return 0;
}
/**
 * native QuestSetTitle takes quest whichQuest, string title returns nothing
 */
function QuestSetTitle(C, L) {
    let whichQuest = lua_1.lua_touserdata(L, 1);
    let title = lauxlib_1.luaL_checkstring(L, 2);
    console.warn('QuestSetTitle was called but is not implemented :(');
    return 0;
}
/**
 * native QuestSetDescription takes quest whichQuest, string description returns nothing
 */
function QuestSetDescription(C, L) {
    let whichQuest = lua_1.lua_touserdata(L, 1);
    let description = lauxlib_1.luaL_checkstring(L, 2);
    console.warn('QuestSetDescription was called but is not implemented :(');
    return 0;
}
/**
 * native QuestSetIconPath takes quest whichQuest, string iconPath returns nothing
 */
function QuestSetIconPath(C, L) {
    let whichQuest = lua_1.lua_touserdata(L, 1);
    let iconPath = lauxlib_1.luaL_checkstring(L, 2);
    console.warn('QuestSetIconPath was called but is not implemented :(');
    return 0;
}
/**
 * native QuestSetRequired takes quest whichQuest, boolean required returns nothing
 */
function QuestSetRequired(C, L) {
    let whichQuest = lua_1.lua_touserdata(L, 1);
    let required = lua_1.lua_toboolean(L, 2);
    console.warn('QuestSetRequired was called but is not implemented :(');
    return 0;
}
/**
 * native QuestSetCompleted takes quest whichQuest, boolean completed returns nothing
 */
function QuestSetCompleted(C, L) {
    let whichQuest = lua_1.lua_touserdata(L, 1);
    let completed = lua_1.lua_toboolean(L, 2);
    console.warn('QuestSetCompleted was called but is not implemented :(');
    return 0;
}
/**
 * native QuestSetDiscovered takes quest whichQuest, boolean discovered returns nothing
 */
function QuestSetDiscovered(C, L) {
    let whichQuest = lua_1.lua_touserdata(L, 1);
    let discovered = lua_1.lua_toboolean(L, 2);
    console.warn('QuestSetDiscovered was called but is not implemented :(');
    return 0;
}
/**
 * native QuestSetFailed takes quest whichQuest, boolean failed returns nothing
 */
function QuestSetFailed(C, L) {
    let whichQuest = lua_1.lua_touserdata(L, 1);
    let failed = lua_1.lua_toboolean(L, 2);
    console.warn('QuestSetFailed was called but is not implemented :(');
    return 0;
}
/**
 * native QuestSetEnabled takes quest whichQuest, boolean enabled returns nothing
 */
function QuestSetEnabled(C, L) {
    let whichQuest = lua_1.lua_touserdata(L, 1);
    let enabled = lua_1.lua_toboolean(L, 2);
    console.warn('QuestSetEnabled was called but is not implemented :(');
    return 0;
}
/**
 * native IsQuestRequired takes quest whichQuest returns boolean
 */
function IsQuestRequired(C, L) {
    let whichQuest = lua_1.lua_touserdata(L, 1);
    console.warn('IsQuestRequired was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native IsQuestCompleted takes quest whichQuest returns boolean
 */
function IsQuestCompleted(C, L) {
    let whichQuest = lua_1.lua_touserdata(L, 1);
    console.warn('IsQuestCompleted was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native IsQuestDiscovered takes quest whichQuest returns boolean
 */
function IsQuestDiscovered(C, L) {
    let whichQuest = lua_1.lua_touserdata(L, 1);
    console.warn('IsQuestDiscovered was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native IsQuestFailed takes quest whichQuest returns boolean
 */
function IsQuestFailed(C, L) {
    let whichQuest = lua_1.lua_touserdata(L, 1);
    console.warn('IsQuestFailed was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native IsQuestEnabled takes quest whichQuest returns boolean
 */
function IsQuestEnabled(C, L) {
    let whichQuest = lua_1.lua_touserdata(L, 1);
    console.warn('IsQuestEnabled was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native QuestCreateItem takes quest whichQuest returns questitem
 */
function QuestCreateItem(C, L) {
    let whichQuest = lua_1.lua_touserdata(L, 1);
    console.warn('QuestCreateItem was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native QuestItemSetDescription takes questitem whichQuestItem, string description returns nothing
 */
function QuestItemSetDescription(C, L) {
    let whichQuestItem = lua_1.lua_touserdata(L, 1);
    let description = lauxlib_1.luaL_checkstring(L, 2);
    console.warn('QuestItemSetDescription was called but is not implemented :(');
    return 0;
}
/**
 * native QuestItemSetCompleted takes questitem whichQuestItem, boolean completed returns nothing
 */
function QuestItemSetCompleted(C, L) {
    let whichQuestItem = lua_1.lua_touserdata(L, 1);
    let completed = lua_1.lua_toboolean(L, 2);
    console.warn('QuestItemSetCompleted was called but is not implemented :(');
    return 0;
}
/**
 * native IsQuestItemCompleted takes questitem whichQuestItem returns boolean
 */
function IsQuestItemCompleted(C, L) {
    let whichQuestItem = lua_1.lua_touserdata(L, 1);
    console.warn('IsQuestItemCompleted was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native CreateDefeatCondition takes nothing returns defeatcondition
 */
function CreateDefeatCondition(C, L) {
    console.warn('CreateDefeatCondition was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native DestroyDefeatCondition takes defeatcondition whichCondition returns nothing
 */
function DestroyDefeatCondition(C, L) {
    let whichCondition = lua_1.lua_touserdata(L, 1);
    console.warn('DestroyDefeatCondition was called but is not implemented :(');
    return 0;
}
/**
 * native DefeatConditionSetDescription takes defeatcondition whichCondition, string description returns nothing
 */
function DefeatConditionSetDescription(C, L) {
    let whichCondition = lua_1.lua_touserdata(L, 1);
    let description = lauxlib_1.luaL_checkstring(L, 2);
    console.warn('DefeatConditionSetDescription was called but is not implemented :(');
    return 0;
}
/**
 * native FlashQuestDialogButton takes nothing returns nothing
 */
function FlashQuestDialogButton(C, L) {
    console.warn('FlashQuestDialogButton was called but is not implemented :(');
    return 0;
}
/**
 * native ForceQuestDialogUpdate takes nothing returns nothing
 */
function ForceQuestDialogUpdate(C, L) {
    console.warn('ForceQuestDialogUpdate was called but is not implemented :(');
    return 0;
}
/**
 * native CreateTimerDialog takes timer t returns timerdialog
 */
function CreateTimerDialog(C, L) {
    let t = lua_1.lua_touserdata(L, 1);
    console.warn('CreateTimerDialog was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native DestroyTimerDialog takes timerdialog whichDialog returns nothing
 */
function DestroyTimerDialog(C, L) {
    let whichDialog = lua_1.lua_touserdata(L, 1);
    console.warn('DestroyTimerDialog was called but is not implemented :(');
    return 0;
}
/**
 * native TimerDialogSetTitle takes timerdialog whichDialog, string title returns nothing
 */
function TimerDialogSetTitle(C, L) {
    let whichDialog = lua_1.lua_touserdata(L, 1);
    let title = lauxlib_1.luaL_checkstring(L, 2);
    console.warn('TimerDialogSetTitle was called but is not implemented :(');
    return 0;
}
/**
 * native TimerDialogSetTitleColor takes timerdialog whichDialog, integer red, integer green, integer blue, integer alpha returns nothing
 */
function TimerDialogSetTitleColor(C, L) {
    let whichDialog = lua_1.lua_touserdata(L, 1);
    let red = lauxlib_1.luaL_checkinteger(L, 2);
    let green = lauxlib_1.luaL_checkinteger(L, 3);
    let blue = lauxlib_1.luaL_checkinteger(L, 4);
    let alpha = lauxlib_1.luaL_checkinteger(L, 5);
    console.warn('TimerDialogSetTitleColor was called but is not implemented :(');
    return 0;
}
/**
 * native TimerDialogSetTimeColor takes timerdialog whichDialog, integer red, integer green, integer blue, integer alpha returns nothing
 */
function TimerDialogSetTimeColor(C, L) {
    let whichDialog = lua_1.lua_touserdata(L, 1);
    let red = lauxlib_1.luaL_checkinteger(L, 2);
    let green = lauxlib_1.luaL_checkinteger(L, 3);
    let blue = lauxlib_1.luaL_checkinteger(L, 4);
    let alpha = lauxlib_1.luaL_checkinteger(L, 5);
    console.warn('TimerDialogSetTimeColor was called but is not implemented :(');
    return 0;
}
/**
 * native TimerDialogSetSpeed takes timerdialog whichDialog, real speedMultFactor returns nothing
 */
function TimerDialogSetSpeed(C, L) {
    let whichDialog = lua_1.lua_touserdata(L, 1);
    let speedMultFactor = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('TimerDialogSetSpeed was called but is not implemented :(');
    return 0;
}
/**
 * native TimerDialogDisplay takes timerdialog whichDialog, boolean display returns nothing
 */
function TimerDialogDisplay(C, L) {
    let whichDialog = lua_1.lua_touserdata(L, 1);
    let display = lua_1.lua_toboolean(L, 2);
    console.warn('TimerDialogDisplay was called but is not implemented :(');
    return 0;
}
/**
 * native IsTimerDialogDisplayed takes timerdialog whichDialog returns boolean
 */
function IsTimerDialogDisplayed(C, L) {
    let whichDialog = lua_1.lua_touserdata(L, 1);
    console.warn('IsTimerDialogDisplayed was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native TimerDialogSetRealTimeRemaining takes timerdialog whichDialog, real timeRemaining returns nothing
 */
function TimerDialogSetRealTimeRemaining(C, L) {
    let whichDialog = lua_1.lua_touserdata(L, 1);
    let timeRemaining = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('TimerDialogSetRealTimeRemaining was called but is not implemented :(');
    return 0;
}
/**
 * native CreateLeaderboard takes nothing returns leaderboard
 */
function CreateLeaderboard(C, L) {
    console.warn('CreateLeaderboard was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native DestroyLeaderboard takes leaderboard lb returns nothing
 */
function DestroyLeaderboard(C, L) {
    let lb = lua_1.lua_touserdata(L, 1);
    console.warn('DestroyLeaderboard was called but is not implemented :(');
    return 0;
}
/**
 * native LeaderboardDisplay takes leaderboard lb, boolean show returns nothing
 */
function LeaderboardDisplay(C, L) {
    let lb = lua_1.lua_touserdata(L, 1);
    let show = lua_1.lua_toboolean(L, 2);
    console.warn('LeaderboardDisplay was called but is not implemented :(');
    return 0;
}
/**
 * native IsLeaderboardDisplayed takes leaderboard lb returns boolean
 */
function IsLeaderboardDisplayed(C, L) {
    let lb = lua_1.lua_touserdata(L, 1);
    console.warn('IsLeaderboardDisplayed was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native LeaderboardGetItemCount takes leaderboard lb returns integer
 */
function LeaderboardGetItemCount(C, L) {
    let lb = lua_1.lua_touserdata(L, 1);
    console.warn('LeaderboardGetItemCount was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native LeaderboardSetSizeByItemCount takes leaderboard lb, integer count returns nothing
 */
function LeaderboardSetSizeByItemCount(C, L) {
    let lb = lua_1.lua_touserdata(L, 1);
    let count = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('LeaderboardSetSizeByItemCount was called but is not implemented :(');
    return 0;
}
/**
 * native LeaderboardAddItem takes leaderboard lb, string label, integer value, player p returns nothing
 */
function LeaderboardAddItem(C, L) {
    let lb = lua_1.lua_touserdata(L, 1);
    let label = lauxlib_1.luaL_checkstring(L, 2);
    let value = lauxlib_1.luaL_checkinteger(L, 3);
    let p = lua_1.lua_touserdata(L, 4);
    console.warn('LeaderboardAddItem was called but is not implemented :(');
    return 0;
}
/**
 * native LeaderboardRemoveItem takes leaderboard lb, integer index returns nothing
 */
function LeaderboardRemoveItem(C, L) {
    let lb = lua_1.lua_touserdata(L, 1);
    let index = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('LeaderboardRemoveItem was called but is not implemented :(');
    return 0;
}
/**
 * native LeaderboardRemovePlayerItem takes leaderboard lb, player p returns nothing
 */
function LeaderboardRemovePlayerItem(C, L) {
    let lb = lua_1.lua_touserdata(L, 1);
    let p = lua_1.lua_touserdata(L, 2);
    console.warn('LeaderboardRemovePlayerItem was called but is not implemented :(');
    return 0;
}
/**
 * native LeaderboardClear takes leaderboard lb returns nothing
 */
function LeaderboardClear(C, L) {
    let lb = lua_1.lua_touserdata(L, 1);
    console.warn('LeaderboardClear was called but is not implemented :(');
    return 0;
}
/**
 * native LeaderboardSortItemsByValue takes leaderboard lb, boolean ascending returns nothing
 */
function LeaderboardSortItemsByValue(C, L) {
    let lb = lua_1.lua_touserdata(L, 1);
    let ascending = lua_1.lua_toboolean(L, 2);
    console.warn('LeaderboardSortItemsByValue was called but is not implemented :(');
    return 0;
}
/**
 * native LeaderboardSortItemsByPlayer takes leaderboard lb, boolean ascending returns nothing
 */
function LeaderboardSortItemsByPlayer(C, L) {
    let lb = lua_1.lua_touserdata(L, 1);
    let ascending = lua_1.lua_toboolean(L, 2);
    console.warn('LeaderboardSortItemsByPlayer was called but is not implemented :(');
    return 0;
}
/**
 * native LeaderboardSortItemsByLabel takes leaderboard lb, boolean ascending returns nothing
 */
function LeaderboardSortItemsByLabel(C, L) {
    let lb = lua_1.lua_touserdata(L, 1);
    let ascending = lua_1.lua_toboolean(L, 2);
    console.warn('LeaderboardSortItemsByLabel was called but is not implemented :(');
    return 0;
}
/**
 * native LeaderboardHasPlayerItem takes leaderboard lb, player p returns boolean
 */
function LeaderboardHasPlayerItem(C, L) {
    let lb = lua_1.lua_touserdata(L, 1);
    let p = lua_1.lua_touserdata(L, 2);
    console.warn('LeaderboardHasPlayerItem was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native LeaderboardGetPlayerIndex takes leaderboard lb, player p returns integer
 */
function LeaderboardGetPlayerIndex(C, L) {
    let lb = lua_1.lua_touserdata(L, 1);
    let p = lua_1.lua_touserdata(L, 2);
    console.warn('LeaderboardGetPlayerIndex was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native LeaderboardSetLabel takes leaderboard lb, string label returns nothing
 */
function LeaderboardSetLabel(C, L) {
    let lb = lua_1.lua_touserdata(L, 1);
    let label = lauxlib_1.luaL_checkstring(L, 2);
    console.warn('LeaderboardSetLabel was called but is not implemented :(');
    return 0;
}
/**
 * native LeaderboardGetLabelText takes leaderboard lb returns string
 */
function LeaderboardGetLabelText(C, L) {
    let lb = lua_1.lua_touserdata(L, 1);
    console.warn('LeaderboardGetLabelText was called but is not implemented :(');
    lua_1.lua_pushstring(L, '');
    return 1;
}
/**
 * native PlayerSetLeaderboard takes player toPlayer, leaderboard lb returns nothing
 */
function PlayerSetLeaderboard(C, L) {
    let toPlayer = lua_1.lua_touserdata(L, 1);
    let lb = lua_1.lua_touserdata(L, 2);
    console.warn('PlayerSetLeaderboard was called but is not implemented :(');
    return 0;
}
/**
 * native PlayerGetLeaderboard takes player toPlayer returns leaderboard
 */
function PlayerGetLeaderboard(C, L) {
    let toPlayer = lua_1.lua_touserdata(L, 1);
    console.warn('PlayerGetLeaderboard was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native LeaderboardSetLabelColor takes leaderboard lb, integer red, integer green, integer blue, integer alpha returns nothing
 */
function LeaderboardSetLabelColor(C, L) {
    let lb = lua_1.lua_touserdata(L, 1);
    let red = lauxlib_1.luaL_checkinteger(L, 2);
    let green = lauxlib_1.luaL_checkinteger(L, 3);
    let blue = lauxlib_1.luaL_checkinteger(L, 4);
    let alpha = lauxlib_1.luaL_checkinteger(L, 5);
    console.warn('LeaderboardSetLabelColor was called but is not implemented :(');
    return 0;
}
/**
 * native LeaderboardSetValueColor takes leaderboard lb, integer red, integer green, integer blue, integer alpha returns nothing
 */
function LeaderboardSetValueColor(C, L) {
    let lb = lua_1.lua_touserdata(L, 1);
    let red = lauxlib_1.luaL_checkinteger(L, 2);
    let green = lauxlib_1.luaL_checkinteger(L, 3);
    let blue = lauxlib_1.luaL_checkinteger(L, 4);
    let alpha = lauxlib_1.luaL_checkinteger(L, 5);
    console.warn('LeaderboardSetValueColor was called but is not implemented :(');
    return 0;
}
/**
 * native LeaderboardSetStyle takes leaderboard lb, boolean showLabel, boolean showNames, boolean showValues, boolean showIcons returns nothing
 */
function LeaderboardSetStyle(C, L) {
    let lb = lua_1.lua_touserdata(L, 1);
    let showLabel = lua_1.lua_toboolean(L, 2);
    let showNames = lua_1.lua_toboolean(L, 3);
    let showValues = lua_1.lua_toboolean(L, 4);
    let showIcons = lua_1.lua_toboolean(L, 5);
    console.warn('LeaderboardSetStyle was called but is not implemented :(');
    return 0;
}
/**
 * native LeaderboardSetItemValue takes leaderboard lb, integer whichItem, integer val returns nothing
 */
function LeaderboardSetItemValue(C, L) {
    let lb = lua_1.lua_touserdata(L, 1);
    let whichItem = lauxlib_1.luaL_checkinteger(L, 2);
    let val = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('LeaderboardSetItemValue was called but is not implemented :(');
    return 0;
}
/**
 * native LeaderboardSetItemLabel takes leaderboard lb, integer whichItem, string val returns nothing
 */
function LeaderboardSetItemLabel(C, L) {
    let lb = lua_1.lua_touserdata(L, 1);
    let whichItem = lauxlib_1.luaL_checkinteger(L, 2);
    let val = lauxlib_1.luaL_checkstring(L, 3);
    console.warn('LeaderboardSetItemLabel was called but is not implemented :(');
    return 0;
}
/**
 * native LeaderboardSetItemStyle takes leaderboard lb, integer whichItem, boolean showLabel, boolean showValue, boolean showIcon returns nothing
 */
function LeaderboardSetItemStyle(C, L) {
    let lb = lua_1.lua_touserdata(L, 1);
    let whichItem = lauxlib_1.luaL_checkinteger(L, 2);
    let showLabel = lua_1.lua_toboolean(L, 3);
    let showValue = lua_1.lua_toboolean(L, 4);
    let showIcon = lua_1.lua_toboolean(L, 5);
    console.warn('LeaderboardSetItemStyle was called but is not implemented :(');
    return 0;
}
/**
 * native LeaderboardSetItemLabelColor takes leaderboard lb, integer whichItem, integer red, integer green, integer blue, integer alpha returns nothing
 */
function LeaderboardSetItemLabelColor(C, L) {
    let lb = lua_1.lua_touserdata(L, 1);
    let whichItem = lauxlib_1.luaL_checkinteger(L, 2);
    let red = lauxlib_1.luaL_checkinteger(L, 3);
    let green = lauxlib_1.luaL_checkinteger(L, 4);
    let blue = lauxlib_1.luaL_checkinteger(L, 5);
    let alpha = lauxlib_1.luaL_checkinteger(L, 6);
    console.warn('LeaderboardSetItemLabelColor was called but is not implemented :(');
    return 0;
}
/**
 * native LeaderboardSetItemValueColor takes leaderboard lb, integer whichItem, integer red, integer green, integer blue, integer alpha returns nothing
 */
function LeaderboardSetItemValueColor(C, L) {
    let lb = lua_1.lua_touserdata(L, 1);
    let whichItem = lauxlib_1.luaL_checkinteger(L, 2);
    let red = lauxlib_1.luaL_checkinteger(L, 3);
    let green = lauxlib_1.luaL_checkinteger(L, 4);
    let blue = lauxlib_1.luaL_checkinteger(L, 5);
    let alpha = lauxlib_1.luaL_checkinteger(L, 6);
    console.warn('LeaderboardSetItemValueColor was called but is not implemented :(');
    return 0;
}
/**
 * native CreateMultiboard takes nothing returns multiboard
 */
function CreateMultiboard(C, L) {
    console.warn('CreateMultiboard was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native DestroyMultiboard takes multiboard lb returns nothing
 */
function DestroyMultiboard(C, L) {
    let lb = lua_1.lua_touserdata(L, 1);
    console.warn('DestroyMultiboard was called but is not implemented :(');
    return 0;
}
/**
 * native MultiboardDisplay takes multiboard lb, boolean show returns nothing
 */
function MultiboardDisplay(C, L) {
    let lb = lua_1.lua_touserdata(L, 1);
    let show = lua_1.lua_toboolean(L, 2);
    console.warn('MultiboardDisplay was called but is not implemented :(');
    return 0;
}
/**
 * native IsMultiboardDisplayed takes multiboard lb returns boolean
 */
function IsMultiboardDisplayed(C, L) {
    let lb = lua_1.lua_touserdata(L, 1);
    console.warn('IsMultiboardDisplayed was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native MultiboardMinimize takes multiboard lb, boolean minimize returns nothing
 */
function MultiboardMinimize(C, L) {
    let lb = lua_1.lua_touserdata(L, 1);
    let minimize = lua_1.lua_toboolean(L, 2);
    console.warn('MultiboardMinimize was called but is not implemented :(');
    return 0;
}
/**
 * native IsMultiboardMinimized takes multiboard lb returns boolean
 */
function IsMultiboardMinimized(C, L) {
    let lb = lua_1.lua_touserdata(L, 1);
    console.warn('IsMultiboardMinimized was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native MultiboardClear takes multiboard lb returns nothing
 */
function MultiboardClear(C, L) {
    let lb = lua_1.lua_touserdata(L, 1);
    console.warn('MultiboardClear was called but is not implemented :(');
    return 0;
}
/**
 * native MultiboardSetTitleText takes multiboard lb, string label returns nothing
 */
function MultiboardSetTitleText(C, L) {
    let lb = lua_1.lua_touserdata(L, 1);
    let label = lauxlib_1.luaL_checkstring(L, 2);
    console.warn('MultiboardSetTitleText was called but is not implemented :(');
    return 0;
}
/**
 * native MultiboardGetTitleText takes multiboard lb returns string
 */
function MultiboardGetTitleText(C, L) {
    let lb = lua_1.lua_touserdata(L, 1);
    console.warn('MultiboardGetTitleText was called but is not implemented :(');
    lua_1.lua_pushstring(L, '');
    return 1;
}
/**
 * native MultiboardSetTitleTextColor takes multiboard lb, integer red, integer green, integer blue, integer alpha returns nothing
 */
function MultiboardSetTitleTextColor(C, L) {
    let lb = lua_1.lua_touserdata(L, 1);
    let red = lauxlib_1.luaL_checkinteger(L, 2);
    let green = lauxlib_1.luaL_checkinteger(L, 3);
    let blue = lauxlib_1.luaL_checkinteger(L, 4);
    let alpha = lauxlib_1.luaL_checkinteger(L, 5);
    console.warn('MultiboardSetTitleTextColor was called but is not implemented :(');
    return 0;
}
/**
 * native MultiboardGetRowCount takes multiboard lb returns integer
 */
function MultiboardGetRowCount(C, L) {
    let lb = lua_1.lua_touserdata(L, 1);
    console.warn('MultiboardGetRowCount was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native MultiboardGetColumnCount takes multiboard lb returns integer
 */
function MultiboardGetColumnCount(C, L) {
    let lb = lua_1.lua_touserdata(L, 1);
    console.warn('MultiboardGetColumnCount was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native MultiboardSetColumnCount takes multiboard lb, integer count returns nothing
 */
function MultiboardSetColumnCount(C, L) {
    let lb = lua_1.lua_touserdata(L, 1);
    let count = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('MultiboardSetColumnCount was called but is not implemented :(');
    return 0;
}
/**
 * native MultiboardSetRowCount takes multiboard lb, integer count returns nothing
 */
function MultiboardSetRowCount(C, L) {
    let lb = lua_1.lua_touserdata(L, 1);
    let count = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('MultiboardSetRowCount was called but is not implemented :(');
    return 0;
}
/**
 * native MultiboardSetItemsStyle takes multiboard lb, boolean showValues, boolean showIcons returns nothing
 */
function MultiboardSetItemsStyle(C, L) {
    let lb = lua_1.lua_touserdata(L, 1);
    let showValues = lua_1.lua_toboolean(L, 2);
    let showIcons = lua_1.lua_toboolean(L, 3);
    console.warn('MultiboardSetItemsStyle was called but is not implemented :(');
    return 0;
}
/**
 * native MultiboardSetItemsValue takes multiboard lb, string value returns nothing
 */
function MultiboardSetItemsValue(C, L) {
    let lb = lua_1.lua_touserdata(L, 1);
    let value = lauxlib_1.luaL_checkstring(L, 2);
    console.warn('MultiboardSetItemsValue was called but is not implemented :(');
    return 0;
}
/**
 * native MultiboardSetItemsValueColor takes multiboard lb, integer red, integer green, integer blue, integer alpha returns nothing
 */
function MultiboardSetItemsValueColor(C, L) {
    let lb = lua_1.lua_touserdata(L, 1);
    let red = lauxlib_1.luaL_checkinteger(L, 2);
    let green = lauxlib_1.luaL_checkinteger(L, 3);
    let blue = lauxlib_1.luaL_checkinteger(L, 4);
    let alpha = lauxlib_1.luaL_checkinteger(L, 5);
    console.warn('MultiboardSetItemsValueColor was called but is not implemented :(');
    return 0;
}
/**
 * native MultiboardSetItemsWidth takes multiboard lb, real width returns nothing
 */
function MultiboardSetItemsWidth(C, L) {
    let lb = lua_1.lua_touserdata(L, 1);
    let width = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('MultiboardSetItemsWidth was called but is not implemented :(');
    return 0;
}
/**
 * native MultiboardSetItemsIcon takes multiboard lb, string iconPath returns nothing
 */
function MultiboardSetItemsIcon(C, L) {
    let lb = lua_1.lua_touserdata(L, 1);
    let iconPath = lauxlib_1.luaL_checkstring(L, 2);
    console.warn('MultiboardSetItemsIcon was called but is not implemented :(');
    return 0;
}
/**
 * native MultiboardGetItem takes multiboard lb, integer row, integer column returns multiboarditem
 */
function MultiboardGetItem(C, L) {
    let lb = lua_1.lua_touserdata(L, 1);
    let row = lauxlib_1.luaL_checkinteger(L, 2);
    let column = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('MultiboardGetItem was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native MultiboardReleaseItem takes multiboarditem mbi returns nothing
 */
function MultiboardReleaseItem(C, L) {
    let mbi = lua_1.lua_touserdata(L, 1);
    console.warn('MultiboardReleaseItem was called but is not implemented :(');
    return 0;
}
/**
 * native MultiboardSetItemStyle takes multiboarditem mbi, boolean showValue, boolean showIcon returns nothing
 */
function MultiboardSetItemStyle(C, L) {
    let mbi = lua_1.lua_touserdata(L, 1);
    let showValue = lua_1.lua_toboolean(L, 2);
    let showIcon = lua_1.lua_toboolean(L, 3);
    console.warn('MultiboardSetItemStyle was called but is not implemented :(');
    return 0;
}
/**
 * native MultiboardSetItemValue takes multiboarditem mbi, string val returns nothing
 */
function MultiboardSetItemValue(C, L) {
    let mbi = lua_1.lua_touserdata(L, 1);
    let val = lauxlib_1.luaL_checkstring(L, 2);
    console.warn('MultiboardSetItemValue was called but is not implemented :(');
    return 0;
}
/**
 * native MultiboardSetItemValueColor takes multiboarditem mbi, integer red, integer green, integer blue, integer alpha returns nothing
 */
function MultiboardSetItemValueColor(C, L) {
    let mbi = lua_1.lua_touserdata(L, 1);
    let red = lauxlib_1.luaL_checkinteger(L, 2);
    let green = lauxlib_1.luaL_checkinteger(L, 3);
    let blue = lauxlib_1.luaL_checkinteger(L, 4);
    let alpha = lauxlib_1.luaL_checkinteger(L, 5);
    console.warn('MultiboardSetItemValueColor was called but is not implemented :(');
    return 0;
}
/**
 * native MultiboardSetItemWidth takes multiboarditem mbi, real width returns nothing
 */
function MultiboardSetItemWidth(C, L) {
    let mbi = lua_1.lua_touserdata(L, 1);
    let width = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('MultiboardSetItemWidth was called but is not implemented :(');
    return 0;
}
/**
 * native MultiboardSetItemIcon takes multiboarditem mbi, string iconFileName returns nothing
 */
function MultiboardSetItemIcon(C, L) {
    let mbi = lua_1.lua_touserdata(L, 1);
    let iconFileName = lauxlib_1.luaL_checkstring(L, 2);
    console.warn('MultiboardSetItemIcon was called but is not implemented :(');
    return 0;
}
/**
 * native MultiboardSuppressDisplay takes boolean flag returns nothing
 */
function MultiboardSuppressDisplay(C, L) {
    let flag = lua_1.lua_toboolean(L, 1);
    console.warn('MultiboardSuppressDisplay was called but is not implemented :(');
    return 0;
}
/**
 * native SetCameraPosition takes real x, real y returns nothing
 */
function SetCameraPosition(C, L) {
    let x = lauxlib_1.luaL_checknumber(L, 1);
    let y = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('SetCameraPosition was called but is not implemented :(');
    return 0;
}
/**
 * native SetCameraQuickPosition takes real x, real y returns nothing
 */
function SetCameraQuickPosition(C, L) {
    let x = lauxlib_1.luaL_checknumber(L, 1);
    let y = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('SetCameraQuickPosition was called but is not implemented :(');
    return 0;
}
/**
 * native SetCameraBounds takes real x1, real y1, real x2, real y2, real x3, real y3, real x4, real y4 returns nothing
 */
function SetCameraBounds(C, L) {
    let x1 = lauxlib_1.luaL_checknumber(L, 1);
    let y1 = lauxlib_1.luaL_checknumber(L, 2);
    let x2 = lauxlib_1.luaL_checknumber(L, 3);
    let y2 = lauxlib_1.luaL_checknumber(L, 4);
    let x3 = lauxlib_1.luaL_checknumber(L, 5);
    let y3 = lauxlib_1.luaL_checknumber(L, 6);
    let x4 = lauxlib_1.luaL_checknumber(L, 7);
    let y4 = lauxlib_1.luaL_checknumber(L, 8);
    console.warn('SetCameraBounds was called but is not implemented :(');
    return 0;
}
/**
 * native StopCamera takes nothing returns nothing
 */
function StopCamera(C, L) {
    console.warn('StopCamera was called but is not implemented :(');
    return 0;
}
/**
 * native ResetToGameCamera takes real duration returns nothing
 */
function ResetToGameCamera(C, L) {
    let duration = lauxlib_1.luaL_checknumber(L, 1);
    console.warn('ResetToGameCamera was called but is not implemented :(');
    return 0;
}
/**
 * native PanCameraTo takes real x, real y returns nothing
 */
function PanCameraTo(C, L) {
    let x = lauxlib_1.luaL_checknumber(L, 1);
    let y = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('PanCameraTo was called but is not implemented :(');
    return 0;
}
/**
 * native PanCameraToTimed takes real x, real y, real duration returns nothing
 */
function PanCameraToTimed(C, L) {
    let x = lauxlib_1.luaL_checknumber(L, 1);
    let y = lauxlib_1.luaL_checknumber(L, 2);
    let duration = lauxlib_1.luaL_checknumber(L, 3);
    console.warn('PanCameraToTimed was called but is not implemented :(');
    return 0;
}
/**
 * native PanCameraToWithZ takes real x, real y, real zOffsetDest returns nothing
 */
function PanCameraToWithZ(C, L) {
    let x = lauxlib_1.luaL_checknumber(L, 1);
    let y = lauxlib_1.luaL_checknumber(L, 2);
    let zOffsetDest = lauxlib_1.luaL_checknumber(L, 3);
    console.warn('PanCameraToWithZ was called but is not implemented :(');
    return 0;
}
/**
 * native PanCameraToTimedWithZ takes real x, real y, real zOffsetDest, real duration returns nothing
 */
function PanCameraToTimedWithZ(C, L) {
    let x = lauxlib_1.luaL_checknumber(L, 1);
    let y = lauxlib_1.luaL_checknumber(L, 2);
    let zOffsetDest = lauxlib_1.luaL_checknumber(L, 3);
    let duration = lauxlib_1.luaL_checknumber(L, 4);
    console.warn('PanCameraToTimedWithZ was called but is not implemented :(');
    return 0;
}
/**
 * native SetCinematicCamera takes string cameraModelFile returns nothing
 */
function SetCinematicCamera(C, L) {
    let cameraModelFile = lauxlib_1.luaL_checkstring(L, 1);
    console.warn('SetCinematicCamera was called but is not implemented :(');
    return 0;
}
/**
 * native SetCameraRotateMode takes real x, real y, real radiansToSweep, real duration returns nothing
 */
function SetCameraRotateMode(C, L) {
    let x = lauxlib_1.luaL_checknumber(L, 1);
    let y = lauxlib_1.luaL_checknumber(L, 2);
    let radiansToSweep = lauxlib_1.luaL_checknumber(L, 3);
    let duration = lauxlib_1.luaL_checknumber(L, 4);
    console.warn('SetCameraRotateMode was called but is not implemented :(');
    return 0;
}
/**
 * native SetCameraField takes camerafield whichField, real value, real duration returns nothing
 */
function SetCameraField(C, L) {
    let whichField = lua_1.lua_touserdata(L, 1);
    let value = lauxlib_1.luaL_checknumber(L, 2);
    let duration = lauxlib_1.luaL_checknumber(L, 3);
    console.warn('SetCameraField was called but is not implemented :(');
    return 0;
}
/**
 * native AdjustCameraField takes camerafield whichField, real offset, real duration returns nothing
 */
function AdjustCameraField(C, L) {
    let whichField = lua_1.lua_touserdata(L, 1);
    let offset = lauxlib_1.luaL_checknumber(L, 2);
    let duration = lauxlib_1.luaL_checknumber(L, 3);
    console.warn('AdjustCameraField was called but is not implemented :(');
    return 0;
}
/**
 * native SetCameraTargetController takes unit whichUnit, real xoffset, real yoffset, boolean inheritOrientation returns nothing
 */
function SetCameraTargetController(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let xoffset = lauxlib_1.luaL_checknumber(L, 2);
    let yoffset = lauxlib_1.luaL_checknumber(L, 3);
    let inheritOrientation = lua_1.lua_toboolean(L, 4);
    console.warn('SetCameraTargetController was called but is not implemented :(');
    return 0;
}
/**
 * native SetCameraOrientController takes unit whichUnit, real xoffset, real yoffset returns nothing
 */
function SetCameraOrientController(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let xoffset = lauxlib_1.luaL_checknumber(L, 2);
    let yoffset = lauxlib_1.luaL_checknumber(L, 3);
    console.warn('SetCameraOrientController was called but is not implemented :(');
    return 0;
}
/**
 * native CreateCameraSetup takes nothing returns camerasetup
 */
function CreateCameraSetup(C, L) {
    console.warn('CreateCameraSetup was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native CameraSetupSetField takes camerasetup whichSetup, camerafield whichField, real value, real duration returns nothing
 */
function CameraSetupSetField(C, L) {
    let whichSetup = lua_1.lua_touserdata(L, 1);
    let whichField = lua_1.lua_touserdata(L, 2);
    let value = lauxlib_1.luaL_checknumber(L, 3);
    let duration = lauxlib_1.luaL_checknumber(L, 4);
    console.warn('CameraSetupSetField was called but is not implemented :(');
    return 0;
}
/**
 * native CameraSetupGetField takes camerasetup whichSetup, camerafield whichField returns real
 */
function CameraSetupGetField(C, L) {
    let whichSetup = lua_1.lua_touserdata(L, 1);
    let whichField = lua_1.lua_touserdata(L, 2);
    console.warn('CameraSetupGetField was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native CameraSetupSetDestPosition takes camerasetup whichSetup, real x, real y, real duration returns nothing
 */
function CameraSetupSetDestPosition(C, L) {
    let whichSetup = lua_1.lua_touserdata(L, 1);
    let x = lauxlib_1.luaL_checknumber(L, 2);
    let y = lauxlib_1.luaL_checknumber(L, 3);
    let duration = lauxlib_1.luaL_checknumber(L, 4);
    console.warn('CameraSetupSetDestPosition was called but is not implemented :(');
    return 0;
}
/**
 * native CameraSetupGetDestPositionLoc takes camerasetup whichSetup returns location
 */
function CameraSetupGetDestPositionLoc(C, L) {
    let whichSetup = lua_1.lua_touserdata(L, 1);
    console.warn('CameraSetupGetDestPositionLoc was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native CameraSetupGetDestPositionX takes camerasetup whichSetup returns real
 */
function CameraSetupGetDestPositionX(C, L) {
    let whichSetup = lua_1.lua_touserdata(L, 1);
    console.warn('CameraSetupGetDestPositionX was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native CameraSetupGetDestPositionY takes camerasetup whichSetup returns real
 */
function CameraSetupGetDestPositionY(C, L) {
    let whichSetup = lua_1.lua_touserdata(L, 1);
    console.warn('CameraSetupGetDestPositionY was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native CameraSetupApply takes camerasetup whichSetup, boolean doPan, boolean panTimed returns nothing
 */
function CameraSetupApply(C, L) {
    let whichSetup = lua_1.lua_touserdata(L, 1);
    let doPan = lua_1.lua_toboolean(L, 2);
    let panTimed = lua_1.lua_toboolean(L, 3);
    console.warn('CameraSetupApply was called but is not implemented :(');
    return 0;
}
/**
 * native CameraSetupApplyWithZ takes camerasetup whichSetup, real zDestOffset returns nothing
 */
function CameraSetupApplyWithZ(C, L) {
    let whichSetup = lua_1.lua_touserdata(L, 1);
    let zDestOffset = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('CameraSetupApplyWithZ was called but is not implemented :(');
    return 0;
}
/**
 * native CameraSetupApplyForceDuration takes camerasetup whichSetup, boolean doPan, real forceDuration returns nothing
 */
function CameraSetupApplyForceDuration(C, L) {
    let whichSetup = lua_1.lua_touserdata(L, 1);
    let doPan = lua_1.lua_toboolean(L, 2);
    let forceDuration = lauxlib_1.luaL_checknumber(L, 3);
    console.warn('CameraSetupApplyForceDuration was called but is not implemented :(');
    return 0;
}
/**
 * native CameraSetupApplyForceDurationWithZ takes camerasetup whichSetup, real zDestOffset, real forceDuration returns nothing
 */
function CameraSetupApplyForceDurationWithZ(C, L) {
    let whichSetup = lua_1.lua_touserdata(L, 1);
    let zDestOffset = lauxlib_1.luaL_checknumber(L, 2);
    let forceDuration = lauxlib_1.luaL_checknumber(L, 3);
    console.warn('CameraSetupApplyForceDurationWithZ was called but is not implemented :(');
    return 0;
}
/**
 * native CameraSetTargetNoise takes real mag, real velocity returns nothing
 */
function CameraSetTargetNoise(C, L) {
    let mag = lauxlib_1.luaL_checknumber(L, 1);
    let velocity = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('CameraSetTargetNoise was called but is not implemented :(');
    return 0;
}
/**
 * native CameraSetSourceNoise takes real mag, real velocity returns nothing
 */
function CameraSetSourceNoise(C, L) {
    let mag = lauxlib_1.luaL_checknumber(L, 1);
    let velocity = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('CameraSetSourceNoise was called but is not implemented :(');
    return 0;
}
/**
 * native CameraSetTargetNoiseEx takes real mag, real velocity, boolean vertOnly returns nothing
 */
function CameraSetTargetNoiseEx(C, L) {
    let mag = lauxlib_1.luaL_checknumber(L, 1);
    let velocity = lauxlib_1.luaL_checknumber(L, 2);
    let vertOnly = lua_1.lua_toboolean(L, 3);
    console.warn('CameraSetTargetNoiseEx was called but is not implemented :(');
    return 0;
}
/**
 * native CameraSetSourceNoiseEx takes real mag, real velocity, boolean vertOnly returns nothing
 */
function CameraSetSourceNoiseEx(C, L) {
    let mag = lauxlib_1.luaL_checknumber(L, 1);
    let velocity = lauxlib_1.luaL_checknumber(L, 2);
    let vertOnly = lua_1.lua_toboolean(L, 3);
    console.warn('CameraSetSourceNoiseEx was called but is not implemented :(');
    return 0;
}
/**
 * native CameraSetSmoothingFactor takes real factor returns nothing
 */
function CameraSetSmoothingFactor(C, L) {
    let factor = lauxlib_1.luaL_checknumber(L, 1);
    console.warn('CameraSetSmoothingFactor was called but is not implemented :(');
    return 0;
}
/**
 * native SetCineFilterTexture takes string filename returns nothing
 */
function SetCineFilterTexture(C, L) {
    let filename = lauxlib_1.luaL_checkstring(L, 1);
    console.warn('SetCineFilterTexture was called but is not implemented :(');
    return 0;
}
/**
 * native SetCineFilterBlendMode takes blendmode whichMode returns nothing
 */
function SetCineFilterBlendMode(C, L) {
    let whichMode = lua_1.lua_touserdata(L, 1);
    console.warn('SetCineFilterBlendMode was called but is not implemented :(');
    return 0;
}
/**
 * native SetCineFilterTexMapFlags takes texmapflags whichFlags returns nothing
 */
function SetCineFilterTexMapFlags(C, L) {
    let whichFlags = lua_1.lua_touserdata(L, 1);
    console.warn('SetCineFilterTexMapFlags was called but is not implemented :(');
    return 0;
}
/**
 * native SetCineFilterStartUV takes real minu, real minv, real maxu, real maxv returns nothing
 */
function SetCineFilterStartUV(C, L) {
    let minu = lauxlib_1.luaL_checknumber(L, 1);
    let minv = lauxlib_1.luaL_checknumber(L, 2);
    let maxu = lauxlib_1.luaL_checknumber(L, 3);
    let maxv = lauxlib_1.luaL_checknumber(L, 4);
    console.warn('SetCineFilterStartUV was called but is not implemented :(');
    return 0;
}
/**
 * native SetCineFilterEndUV takes real minu, real minv, real maxu, real maxv returns nothing
 */
function SetCineFilterEndUV(C, L) {
    let minu = lauxlib_1.luaL_checknumber(L, 1);
    let minv = lauxlib_1.luaL_checknumber(L, 2);
    let maxu = lauxlib_1.luaL_checknumber(L, 3);
    let maxv = lauxlib_1.luaL_checknumber(L, 4);
    console.warn('SetCineFilterEndUV was called but is not implemented :(');
    return 0;
}
/**
 * native SetCineFilterStartColor takes integer red, integer green, integer blue, integer alpha returns nothing
 */
function SetCineFilterStartColor(C, L) {
    let red = lauxlib_1.luaL_checkinteger(L, 1);
    let green = lauxlib_1.luaL_checkinteger(L, 2);
    let blue = lauxlib_1.luaL_checkinteger(L, 3);
    let alpha = lauxlib_1.luaL_checkinteger(L, 4);
    console.warn('SetCineFilterStartColor was called but is not implemented :(');
    return 0;
}
/**
 * native SetCineFilterEndColor takes integer red, integer green, integer blue, integer alpha returns nothing
 */
function SetCineFilterEndColor(C, L) {
    let red = lauxlib_1.luaL_checkinteger(L, 1);
    let green = lauxlib_1.luaL_checkinteger(L, 2);
    let blue = lauxlib_1.luaL_checkinteger(L, 3);
    let alpha = lauxlib_1.luaL_checkinteger(L, 4);
    console.warn('SetCineFilterEndColor was called but is not implemented :(');
    return 0;
}
/**
 * native SetCineFilterDuration takes real duration returns nothing
 */
function SetCineFilterDuration(C, L) {
    let duration = lauxlib_1.luaL_checknumber(L, 1);
    console.warn('SetCineFilterDuration was called but is not implemented :(');
    return 0;
}
/**
 * native DisplayCineFilter takes boolean flag returns nothing
 */
function DisplayCineFilter(C, L) {
    let flag = lua_1.lua_toboolean(L, 1);
    console.warn('DisplayCineFilter was called but is not implemented :(');
    return 0;
}
/**
 * native IsCineFilterDisplayed takes nothing returns boolean
 */
function IsCineFilterDisplayed(C, L) {
    console.warn('IsCineFilterDisplayed was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native SetCinematicScene takes integer portraitUnitId, playercolor color, string speakerTitle, string text, real sceneDuration, real voiceoverDuration returns nothing
 */
function SetCinematicScene(C, L) {
    let portraitUnitId = lauxlib_1.luaL_checkinteger(L, 1);
    let color = lua_1.lua_touserdata(L, 2);
    let speakerTitle = lauxlib_1.luaL_checkstring(L, 3);
    let text = lauxlib_1.luaL_checkstring(L, 4);
    let sceneDuration = lauxlib_1.luaL_checknumber(L, 5);
    let voiceoverDuration = lauxlib_1.luaL_checknumber(L, 6);
    console.warn('SetCinematicScene was called but is not implemented :(');
    return 0;
}
/**
 * native EndCinematicScene takes nothing returns nothing
 */
function EndCinematicScene(C, L) {
    console.warn('EndCinematicScene was called but is not implemented :(');
    return 0;
}
/**
 * native ForceCinematicSubtitles takes boolean flag returns nothing
 */
function ForceCinematicSubtitles(C, L) {
    let flag = lua_1.lua_toboolean(L, 1);
    console.warn('ForceCinematicSubtitles was called but is not implemented :(');
    return 0;
}
/**
 * native GetCameraMargin takes integer whichMargin returns real
 */
function GetCameraMargin(C, L) {
    let whichMargin = lauxlib_1.luaL_checkinteger(L, 1);
    console.warn('GetCameraMargin was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * constant native GetCameraBoundMinX takes nothing returns real
 */
function GetCameraBoundMinX(C, L) {
    console.warn('GetCameraBoundMinX was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * constant native GetCameraBoundMinY takes nothing returns real
 */
function GetCameraBoundMinY(C, L) {
    console.warn('GetCameraBoundMinY was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * constant native GetCameraBoundMaxX takes nothing returns real
 */
function GetCameraBoundMaxX(C, L) {
    console.warn('GetCameraBoundMaxX was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * constant native GetCameraBoundMaxY takes nothing returns real
 */
function GetCameraBoundMaxY(C, L) {
    console.warn('GetCameraBoundMaxY was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * constant native GetCameraField takes camerafield whichField returns real
 */
function GetCameraField(C, L) {
    let whichField = lua_1.lua_touserdata(L, 1);
    console.warn('GetCameraField was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * constant native GetCameraTargetPositionX takes nothing returns real
 */
function GetCameraTargetPositionX(C, L) {
    console.warn('GetCameraTargetPositionX was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * constant native GetCameraTargetPositionY takes nothing returns real
 */
function GetCameraTargetPositionY(C, L) {
    console.warn('GetCameraTargetPositionY was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * constant native GetCameraTargetPositionZ takes nothing returns real
 */
function GetCameraTargetPositionZ(C, L) {
    console.warn('GetCameraTargetPositionZ was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * constant native GetCameraTargetPositionLoc takes nothing returns location
 */
function GetCameraTargetPositionLoc(C, L) {
    console.warn('GetCameraTargetPositionLoc was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * constant native GetCameraEyePositionX takes nothing returns real
 */
function GetCameraEyePositionX(C, L) {
    console.warn('GetCameraEyePositionX was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * constant native GetCameraEyePositionY takes nothing returns real
 */
function GetCameraEyePositionY(C, L) {
    console.warn('GetCameraEyePositionY was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * constant native GetCameraEyePositionZ takes nothing returns real
 */
function GetCameraEyePositionZ(C, L) {
    console.warn('GetCameraEyePositionZ was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * constant native GetCameraEyePositionLoc takes nothing returns location
 */
function GetCameraEyePositionLoc(C, L) {
    console.warn('GetCameraEyePositionLoc was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native NewSoundEnvironment takes string environmentName returns nothing
 */
function NewSoundEnvironment(C, L) {
    let environmentName = lauxlib_1.luaL_checkstring(L, 1);
    console.warn('NewSoundEnvironment was called but is not implemented :(');
    return 0;
}
/**
 * native CreateSound takes string fileName, boolean looping, boolean is3D, boolean stopwhenoutofrange, integer fadeInRate, integer fadeOutRate, string eaxSetting returns sound
 */
function CreateSound(C, L) {
    let fileName = lauxlib_1.luaL_checkstring(L, 1);
    let looping = lua_1.lua_toboolean(L, 2);
    let is3D = lua_1.lua_toboolean(L, 3);
    let stopwhenoutofrange = lua_1.lua_toboolean(L, 4);
    let fadeInRate = lauxlib_1.luaL_checkinteger(L, 5);
    let fadeOutRate = lauxlib_1.luaL_checkinteger(L, 6);
    let eaxSetting = lauxlib_1.luaL_checkstring(L, 7);
    console.warn('CreateSound was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native CreateSoundFilenameWithLabel takes string fileName, boolean looping, boolean is3D, boolean stopwhenoutofrange, integer fadeInRate, integer fadeOutRate, string SLKEntryName returns sound
 */
function CreateSoundFilenameWithLabel(C, L) {
    let fileName = lauxlib_1.luaL_checkstring(L, 1);
    let looping = lua_1.lua_toboolean(L, 2);
    let is3D = lua_1.lua_toboolean(L, 3);
    let stopwhenoutofrange = lua_1.lua_toboolean(L, 4);
    let fadeInRate = lauxlib_1.luaL_checkinteger(L, 5);
    let fadeOutRate = lauxlib_1.luaL_checkinteger(L, 6);
    let SLKEntryName = lauxlib_1.luaL_checkstring(L, 7);
    console.warn('CreateSoundFilenameWithLabel was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native CreateSoundFromLabel takes string soundLabel, boolean looping, boolean is3D, boolean stopwhenoutofrange, integer fadeInRate, integer fadeOutRate returns sound
 */
function CreateSoundFromLabel(C, L) {
    let soundLabel = lauxlib_1.luaL_checkstring(L, 1);
    let looping = lua_1.lua_toboolean(L, 2);
    let is3D = lua_1.lua_toboolean(L, 3);
    let stopwhenoutofrange = lua_1.lua_toboolean(L, 4);
    let fadeInRate = lauxlib_1.luaL_checkinteger(L, 5);
    let fadeOutRate = lauxlib_1.luaL_checkinteger(L, 6);
    console.warn('CreateSoundFromLabel was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native CreateMIDISound takes string soundLabel, integer fadeInRate, integer fadeOutRate returns sound
 */
function CreateMIDISound(C, L) {
    let soundLabel = lauxlib_1.luaL_checkstring(L, 1);
    let fadeInRate = lauxlib_1.luaL_checkinteger(L, 2);
    let fadeOutRate = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('CreateMIDISound was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native SetSoundParamsFromLabel takes sound soundHandle, string soundLabel returns nothing
 */
function SetSoundParamsFromLabel(C, L) {
    let soundHandle = lua_1.lua_touserdata(L, 1);
    let soundLabel = lauxlib_1.luaL_checkstring(L, 2);
    console.warn('SetSoundParamsFromLabel was called but is not implemented :(');
    return 0;
}
/**
 * native SetSoundDistanceCutoff takes sound soundHandle, real cutoff returns nothing
 */
function SetSoundDistanceCutoff(C, L) {
    let soundHandle = lua_1.lua_touserdata(L, 1);
    let cutoff = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('SetSoundDistanceCutoff was called but is not implemented :(');
    return 0;
}
/**
 * native SetSoundChannel takes sound soundHandle, integer channel returns nothing
 */
function SetSoundChannel(C, L) {
    let soundHandle = lua_1.lua_touserdata(L, 1);
    let channel = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('SetSoundChannel was called but is not implemented :(');
    return 0;
}
/**
 * native SetSoundVolume takes sound soundHandle, integer volume returns nothing
 */
function SetSoundVolume(C, L) {
    let soundHandle = lua_1.lua_touserdata(L, 1);
    let volume = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('SetSoundVolume was called but is not implemented :(');
    return 0;
}
/**
 * native SetSoundPitch takes sound soundHandle, real pitch returns nothing
 */
function SetSoundPitch(C, L) {
    let soundHandle = lua_1.lua_touserdata(L, 1);
    let pitch = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('SetSoundPitch was called but is not implemented :(');
    return 0;
}
/**
 * native SetSoundPlayPosition takes sound soundHandle, integer millisecs returns nothing
 */
function SetSoundPlayPosition(C, L) {
    let soundHandle = lua_1.lua_touserdata(L, 1);
    let millisecs = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('SetSoundPlayPosition was called but is not implemented :(');
    return 0;
}
/**
 * native SetSoundDistances takes sound soundHandle, real minDist, real maxDist returns nothing
 */
function SetSoundDistances(C, L) {
    let soundHandle = lua_1.lua_touserdata(L, 1);
    let minDist = lauxlib_1.luaL_checknumber(L, 2);
    let maxDist = lauxlib_1.luaL_checknumber(L, 3);
    console.warn('SetSoundDistances was called but is not implemented :(');
    return 0;
}
/**
 * native SetSoundConeAngles takes sound soundHandle, real inside, real outside, integer outsideVolume returns nothing
 */
function SetSoundConeAngles(C, L) {
    let soundHandle = lua_1.lua_touserdata(L, 1);
    let inside = lauxlib_1.luaL_checknumber(L, 2);
    let outside = lauxlib_1.luaL_checknumber(L, 3);
    let outsideVolume = lauxlib_1.luaL_checkinteger(L, 4);
    console.warn('SetSoundConeAngles was called but is not implemented :(');
    return 0;
}
/**
 * native SetSoundConeOrientation takes sound soundHandle, real x, real y, real z returns nothing
 */
function SetSoundConeOrientation(C, L) {
    let soundHandle = lua_1.lua_touserdata(L, 1);
    let x = lauxlib_1.luaL_checknumber(L, 2);
    let y = lauxlib_1.luaL_checknumber(L, 3);
    let z = lauxlib_1.luaL_checknumber(L, 4);
    console.warn('SetSoundConeOrientation was called but is not implemented :(');
    return 0;
}
/**
 * native SetSoundPosition takes sound soundHandle, real x, real y, real z returns nothing
 */
function SetSoundPosition(C, L) {
    let soundHandle = lua_1.lua_touserdata(L, 1);
    let x = lauxlib_1.luaL_checknumber(L, 2);
    let y = lauxlib_1.luaL_checknumber(L, 3);
    let z = lauxlib_1.luaL_checknumber(L, 4);
    console.warn('SetSoundPosition was called but is not implemented :(');
    return 0;
}
/**
 * native SetSoundVelocity takes sound soundHandle, real x, real y, real z returns nothing
 */
function SetSoundVelocity(C, L) {
    let soundHandle = lua_1.lua_touserdata(L, 1);
    let x = lauxlib_1.luaL_checknumber(L, 2);
    let y = lauxlib_1.luaL_checknumber(L, 3);
    let z = lauxlib_1.luaL_checknumber(L, 4);
    console.warn('SetSoundVelocity was called but is not implemented :(');
    return 0;
}
/**
 * native AttachSoundToUnit takes sound soundHandle, unit whichUnit returns nothing
 */
function AttachSoundToUnit(C, L) {
    let soundHandle = lua_1.lua_touserdata(L, 1);
    let whichUnit = lua_1.lua_touserdata(L, 2);
    console.warn('AttachSoundToUnit was called but is not implemented :(');
    return 0;
}
/**
 * native StartSound takes sound soundHandle returns nothing
 */
function StartSound(C, L) {
    let soundHandle = lua_1.lua_touserdata(L, 1);
    console.warn('StartSound was called but is not implemented :(');
    return 0;
}
/**
 * native StopSound takes sound soundHandle, boolean killWhenDone, boolean fadeOut returns nothing
 */
function StopSound(C, L) {
    let soundHandle = lua_1.lua_touserdata(L, 1);
    let killWhenDone = lua_1.lua_toboolean(L, 2);
    let fadeOut = lua_1.lua_toboolean(L, 3);
    console.warn('StopSound was called but is not implemented :(');
    return 0;
}
/**
 * native KillSoundWhenDone takes sound soundHandle returns nothing
 */
function KillSoundWhenDone(C, L) {
    let soundHandle = lua_1.lua_touserdata(L, 1);
    console.warn('KillSoundWhenDone was called but is not implemented :(');
    return 0;
}
/**
 * native SetMapMusic takes string musicName, boolean random, integer index returns nothing
 */
function SetMapMusic(C, L) {
    let musicName = lauxlib_1.luaL_checkstring(L, 1);
    let random = lua_1.lua_toboolean(L, 2);
    let index = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('SetMapMusic was called but is not implemented :(');
    return 0;
}
/**
 * native ClearMapMusic takes nothing returns nothing
 */
function ClearMapMusic(C, L) {
    console.warn('ClearMapMusic was called but is not implemented :(');
    return 0;
}
/**
 * native PlayMusic takes string musicName returns nothing
 */
function PlayMusic(C, L) {
    let musicName = lauxlib_1.luaL_checkstring(L, 1);
    console.warn('PlayMusic was called but is not implemented :(');
    return 0;
}
/**
 * native PlayMusicEx takes string musicName, integer frommsecs, integer fadeinmsecs returns nothing
 */
function PlayMusicEx(C, L) {
    let musicName = lauxlib_1.luaL_checkstring(L, 1);
    let frommsecs = lauxlib_1.luaL_checkinteger(L, 2);
    let fadeinmsecs = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('PlayMusicEx was called but is not implemented :(');
    return 0;
}
/**
 * native StopMusic takes boolean fadeOut returns nothing
 */
function StopMusic(C, L) {
    let fadeOut = lua_1.lua_toboolean(L, 1);
    console.warn('StopMusic was called but is not implemented :(');
    return 0;
}
/**
 * native ResumeMusic takes nothing returns nothing
 */
function ResumeMusic(C, L) {
    console.warn('ResumeMusic was called but is not implemented :(');
    return 0;
}
/**
 * native PlayThematicMusic takes string musicFileName returns nothing
 */
function PlayThematicMusic(C, L) {
    let musicFileName = lauxlib_1.luaL_checkstring(L, 1);
    console.warn('PlayThematicMusic was called but is not implemented :(');
    return 0;
}
/**
 * native PlayThematicMusicEx takes string musicFileName, integer frommsecs returns nothing
 */
function PlayThematicMusicEx(C, L) {
    let musicFileName = lauxlib_1.luaL_checkstring(L, 1);
    let frommsecs = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('PlayThematicMusicEx was called but is not implemented :(');
    return 0;
}
/**
 * native EndThematicMusic takes nothing returns nothing
 */
function EndThematicMusic(C, L) {
    console.warn('EndThematicMusic was called but is not implemented :(');
    return 0;
}
/**
 * native SetMusicVolume takes integer volume returns nothing
 */
function SetMusicVolume(C, L) {
    let volume = lauxlib_1.luaL_checkinteger(L, 1);
    console.warn('SetMusicVolume was called but is not implemented :(');
    return 0;
}
/**
 * native SetMusicPlayPosition takes integer millisecs returns nothing
 */
function SetMusicPlayPosition(C, L) {
    let millisecs = lauxlib_1.luaL_checkinteger(L, 1);
    console.warn('SetMusicPlayPosition was called but is not implemented :(');
    return 0;
}
/**
 * native SetThematicMusicPlayPosition takes integer millisecs returns nothing
 */
function SetThematicMusicPlayPosition(C, L) {
    let millisecs = lauxlib_1.luaL_checkinteger(L, 1);
    console.warn('SetThematicMusicPlayPosition was called but is not implemented :(');
    return 0;
}
/**
 * native SetSoundDuration takes sound soundHandle, integer duration returns nothing
 */
function SetSoundDuration(C, L) {
    let soundHandle = lua_1.lua_touserdata(L, 1);
    let duration = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('SetSoundDuration was called but is not implemented :(');
    return 0;
}
/**
 * native GetSoundDuration takes sound soundHandle returns integer
 */
function GetSoundDuration(C, L) {
    let soundHandle = lua_1.lua_touserdata(L, 1);
    console.warn('GetSoundDuration was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native GetSoundFileDuration takes string musicFileName returns integer
 */
function GetSoundFileDuration(C, L) {
    let musicFileName = lauxlib_1.luaL_checkstring(L, 1);
    console.warn('GetSoundFileDuration was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native VolumeGroupSetVolume takes volumegroup vgroup, real scale returns nothing
 */
function VolumeGroupSetVolume(C, L) {
    let vgroup = lua_1.lua_touserdata(L, 1);
    let scale = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('VolumeGroupSetVolume was called but is not implemented :(');
    return 0;
}
/**
 * native VolumeGroupReset takes nothing returns nothing
 */
function VolumeGroupReset(C, L) {
    console.warn('VolumeGroupReset was called but is not implemented :(');
    return 0;
}
/**
 * native GetSoundIsPlaying takes sound soundHandle returns boolean
 */
function GetSoundIsPlaying(C, L) {
    let soundHandle = lua_1.lua_touserdata(L, 1);
    console.warn('GetSoundIsPlaying was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native GetSoundIsLoading takes sound soundHandle returns boolean
 */
function GetSoundIsLoading(C, L) {
    let soundHandle = lua_1.lua_touserdata(L, 1);
    console.warn('GetSoundIsLoading was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native RegisterStackedSound takes sound soundHandle, boolean byPosition, real rectwidth, real rectheight returns nothing
 */
function RegisterStackedSound(C, L) {
    let soundHandle = lua_1.lua_touserdata(L, 1);
    let byPosition = lua_1.lua_toboolean(L, 2);
    let rectwidth = lauxlib_1.luaL_checknumber(L, 3);
    let rectheight = lauxlib_1.luaL_checknumber(L, 4);
    console.warn('RegisterStackedSound was called but is not implemented :(');
    return 0;
}
/**
 * native UnregisterStackedSound takes sound soundHandle, boolean byPosition, real rectwidth, real rectheight returns nothing
 */
function UnregisterStackedSound(C, L) {
    let soundHandle = lua_1.lua_touserdata(L, 1);
    let byPosition = lua_1.lua_toboolean(L, 2);
    let rectwidth = lauxlib_1.luaL_checknumber(L, 3);
    let rectheight = lauxlib_1.luaL_checknumber(L, 4);
    console.warn('UnregisterStackedSound was called but is not implemented :(');
    return 0;
}
/**
 * native AddWeatherEffect takes rect where, integer effectID returns weathereffect
 */
function AddWeatherEffect(C, L) {
    let where = lua_1.lua_touserdata(L, 1);
    let effectID = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('AddWeatherEffect was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native RemoveWeatherEffect takes weathereffect whichEffect returns nothing
 */
function RemoveWeatherEffect(C, L) {
    let whichEffect = lua_1.lua_touserdata(L, 1);
    console.warn('RemoveWeatherEffect was called but is not implemented :(');
    return 0;
}
/**
 * native EnableWeatherEffect takes weathereffect whichEffect, boolean enable returns nothing
 */
function EnableWeatherEffect(C, L) {
    let whichEffect = lua_1.lua_touserdata(L, 1);
    let enable = lua_1.lua_toboolean(L, 2);
    console.warn('EnableWeatherEffect was called but is not implemented :(');
    return 0;
}
/**
 * native TerrainDeformCrater takes real x, real y, real radius, real depth, integer duration, boolean permanent returns terraindeformation
 */
function TerrainDeformCrater(C, L) {
    let x = lauxlib_1.luaL_checknumber(L, 1);
    let y = lauxlib_1.luaL_checknumber(L, 2);
    let radius = lauxlib_1.luaL_checknumber(L, 3);
    let depth = lauxlib_1.luaL_checknumber(L, 4);
    let duration = lauxlib_1.luaL_checkinteger(L, 5);
    let permanent = lua_1.lua_toboolean(L, 6);
    console.warn('TerrainDeformCrater was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native TerrainDeformRipple takes real x, real y, real radius, real depth, integer duration, integer count, real spaceWaves, real timeWaves, real radiusStartPct, boolean limitNeg returns terraindeformation
 */
function TerrainDeformRipple(C, L) {
    let x = lauxlib_1.luaL_checknumber(L, 1);
    let y = lauxlib_1.luaL_checknumber(L, 2);
    let radius = lauxlib_1.luaL_checknumber(L, 3);
    let depth = lauxlib_1.luaL_checknumber(L, 4);
    let duration = lauxlib_1.luaL_checkinteger(L, 5);
    let count = lauxlib_1.luaL_checkinteger(L, 6);
    let spaceWaves = lauxlib_1.luaL_checknumber(L, 7);
    let timeWaves = lauxlib_1.luaL_checknumber(L, 8);
    let radiusStartPct = lauxlib_1.luaL_checknumber(L, 9);
    let limitNeg = lua_1.lua_toboolean(L, 10);
    console.warn('TerrainDeformRipple was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native TerrainDeformWave takes real x, real y, real dirX, real dirY, real distance, real speed, real radius, real depth, integer trailTime, integer count returns terraindeformation
 */
function TerrainDeformWave(C, L) {
    let x = lauxlib_1.luaL_checknumber(L, 1);
    let y = lauxlib_1.luaL_checknumber(L, 2);
    let dirX = lauxlib_1.luaL_checknumber(L, 3);
    let dirY = lauxlib_1.luaL_checknumber(L, 4);
    let distance = lauxlib_1.luaL_checknumber(L, 5);
    let speed = lauxlib_1.luaL_checknumber(L, 6);
    let radius = lauxlib_1.luaL_checknumber(L, 7);
    let depth = lauxlib_1.luaL_checknumber(L, 8);
    let trailTime = lauxlib_1.luaL_checkinteger(L, 9);
    let count = lauxlib_1.luaL_checkinteger(L, 10);
    console.warn('TerrainDeformWave was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native TerrainDeformRandom takes real x, real y, real radius, real minDelta, real maxDelta, integer duration, integer updateInterval returns terraindeformation
 */
function TerrainDeformRandom(C, L) {
    let x = lauxlib_1.luaL_checknumber(L, 1);
    let y = lauxlib_1.luaL_checknumber(L, 2);
    let radius = lauxlib_1.luaL_checknumber(L, 3);
    let minDelta = lauxlib_1.luaL_checknumber(L, 4);
    let maxDelta = lauxlib_1.luaL_checknumber(L, 5);
    let duration = lauxlib_1.luaL_checkinteger(L, 6);
    let updateInterval = lauxlib_1.luaL_checkinteger(L, 7);
    console.warn('TerrainDeformRandom was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native TerrainDeformStop takes terraindeformation deformation, integer duration returns nothing
 */
function TerrainDeformStop(C, L) {
    let deformation = lua_1.lua_touserdata(L, 1);
    let duration = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('TerrainDeformStop was called but is not implemented :(');
    return 0;
}
/**
 * native TerrainDeformStopAll takes nothing returns nothing
 */
function TerrainDeformStopAll(C, L) {
    console.warn('TerrainDeformStopAll was called but is not implemented :(');
    return 0;
}
/**
 * native AddSpecialEffect takes string modelName, real x, real y returns effect
 */
function AddSpecialEffect(C, L) {
    let modelName = lauxlib_1.luaL_checkstring(L, 1);
    let x = lauxlib_1.luaL_checknumber(L, 2);
    let y = lauxlib_1.luaL_checknumber(L, 3);
    console.warn('AddSpecialEffect was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native AddSpecialEffectLoc takes string modelName, location where returns effect
 */
function AddSpecialEffectLoc(C, L) {
    let modelName = lauxlib_1.luaL_checkstring(L, 1);
    let where = lua_1.lua_touserdata(L, 2);
    console.warn('AddSpecialEffectLoc was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native AddSpecialEffectTarget takes string modelName, widget targetWidget, string attachPointName returns effect
 */
function AddSpecialEffectTarget(C, L) {
    let modelName = lauxlib_1.luaL_checkstring(L, 1);
    let targetWidget = lua_1.lua_touserdata(L, 2);
    let attachPointName = lauxlib_1.luaL_checkstring(L, 3);
    console.warn('AddSpecialEffectTarget was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native DestroyEffect takes effect whichEffect returns nothing
 */
function DestroyEffect(C, L) {
    let whichEffect = lua_1.lua_touserdata(L, 1);
    console.warn('DestroyEffect was called but is not implemented :(');
    return 0;
}
/**
 * native AddSpellEffect takes string abilityString, effecttype t, real x, real y returns effect
 */
function AddSpellEffect(C, L) {
    let abilityString = lauxlib_1.luaL_checkstring(L, 1);
    let t = lua_1.lua_touserdata(L, 2);
    let x = lauxlib_1.luaL_checknumber(L, 3);
    let y = lauxlib_1.luaL_checknumber(L, 4);
    console.warn('AddSpellEffect was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native AddSpellEffectLoc takes string abilityString, effecttype t, location where returns effect
 */
function AddSpellEffectLoc(C, L) {
    let abilityString = lauxlib_1.luaL_checkstring(L, 1);
    let t = lua_1.lua_touserdata(L, 2);
    let where = lua_1.lua_touserdata(L, 3);
    console.warn('AddSpellEffectLoc was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native AddSpellEffectById takes integer abilityId, effecttype t, real x, real y returns effect
 */
function AddSpellEffectById(C, L) {
    let abilityId = lauxlib_1.luaL_checkinteger(L, 1);
    let t = lua_1.lua_touserdata(L, 2);
    let x = lauxlib_1.luaL_checknumber(L, 3);
    let y = lauxlib_1.luaL_checknumber(L, 4);
    console.warn('AddSpellEffectById was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native AddSpellEffectByIdLoc takes integer abilityId, effecttype t, location where returns effect
 */
function AddSpellEffectByIdLoc(C, L) {
    let abilityId = lauxlib_1.luaL_checkinteger(L, 1);
    let t = lua_1.lua_touserdata(L, 2);
    let where = lua_1.lua_touserdata(L, 3);
    console.warn('AddSpellEffectByIdLoc was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native AddSpellEffectTarget takes string modelName, effecttype t, widget targetWidget, string attachPoint returns effect
 */
function AddSpellEffectTarget(C, L) {
    let modelName = lauxlib_1.luaL_checkstring(L, 1);
    let t = lua_1.lua_touserdata(L, 2);
    let targetWidget = lua_1.lua_touserdata(L, 3);
    let attachPoint = lauxlib_1.luaL_checkstring(L, 4);
    console.warn('AddSpellEffectTarget was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native AddSpellEffectTargetById takes integer abilityId, effecttype t, widget targetWidget, string attachPoint returns effect
 */
function AddSpellEffectTargetById(C, L) {
    let abilityId = lauxlib_1.luaL_checkinteger(L, 1);
    let t = lua_1.lua_touserdata(L, 2);
    let targetWidget = lua_1.lua_touserdata(L, 3);
    let attachPoint = lauxlib_1.luaL_checkstring(L, 4);
    console.warn('AddSpellEffectTargetById was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native AddLightning takes string codeName, boolean checkVisibility, real x1, real y1, real x2, real y2 returns lightning
 */
function AddLightning(C, L) {
    let codeName = lauxlib_1.luaL_checkstring(L, 1);
    let checkVisibility = lua_1.lua_toboolean(L, 2);
    let x1 = lauxlib_1.luaL_checknumber(L, 3);
    let y1 = lauxlib_1.luaL_checknumber(L, 4);
    let x2 = lauxlib_1.luaL_checknumber(L, 5);
    let y2 = lauxlib_1.luaL_checknumber(L, 6);
    console.warn('AddLightning was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native AddLightningEx takes string codeName, boolean checkVisibility, real x1, real y1, real z1, real x2, real y2, real z2 returns lightning
 */
function AddLightningEx(C, L) {
    let codeName = lauxlib_1.luaL_checkstring(L, 1);
    let checkVisibility = lua_1.lua_toboolean(L, 2);
    let x1 = lauxlib_1.luaL_checknumber(L, 3);
    let y1 = lauxlib_1.luaL_checknumber(L, 4);
    let z1 = lauxlib_1.luaL_checknumber(L, 5);
    let x2 = lauxlib_1.luaL_checknumber(L, 6);
    let y2 = lauxlib_1.luaL_checknumber(L, 7);
    let z2 = lauxlib_1.luaL_checknumber(L, 8);
    console.warn('AddLightningEx was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native DestroyLightning takes lightning whichBolt returns boolean
 */
function DestroyLightning(C, L) {
    let whichBolt = lua_1.lua_touserdata(L, 1);
    console.warn('DestroyLightning was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native MoveLightning takes lightning whichBolt, boolean checkVisibility, real x1, real y1, real x2, real y2 returns boolean
 */
function MoveLightning(C, L) {
    let whichBolt = lua_1.lua_touserdata(L, 1);
    let checkVisibility = lua_1.lua_toboolean(L, 2);
    let x1 = lauxlib_1.luaL_checknumber(L, 3);
    let y1 = lauxlib_1.luaL_checknumber(L, 4);
    let x2 = lauxlib_1.luaL_checknumber(L, 5);
    let y2 = lauxlib_1.luaL_checknumber(L, 6);
    console.warn('MoveLightning was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native MoveLightningEx takes lightning whichBolt, boolean checkVisibility, real x1, real y1, real z1, real x2, real y2, real z2 returns boolean
 */
function MoveLightningEx(C, L) {
    let whichBolt = lua_1.lua_touserdata(L, 1);
    let checkVisibility = lua_1.lua_toboolean(L, 2);
    let x1 = lauxlib_1.luaL_checknumber(L, 3);
    let y1 = lauxlib_1.luaL_checknumber(L, 4);
    let z1 = lauxlib_1.luaL_checknumber(L, 5);
    let x2 = lauxlib_1.luaL_checknumber(L, 6);
    let y2 = lauxlib_1.luaL_checknumber(L, 7);
    let z2 = lauxlib_1.luaL_checknumber(L, 8);
    console.warn('MoveLightningEx was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native GetLightningColorA takes lightning whichBolt returns real
 */
function GetLightningColorA(C, L) {
    let whichBolt = lua_1.lua_touserdata(L, 1);
    console.warn('GetLightningColorA was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native GetLightningColorR takes lightning whichBolt returns real
 */
function GetLightningColorR(C, L) {
    let whichBolt = lua_1.lua_touserdata(L, 1);
    console.warn('GetLightningColorR was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native GetLightningColorG takes lightning whichBolt returns real
 */
function GetLightningColorG(C, L) {
    let whichBolt = lua_1.lua_touserdata(L, 1);
    console.warn('GetLightningColorG was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native GetLightningColorB takes lightning whichBolt returns real
 */
function GetLightningColorB(C, L) {
    let whichBolt = lua_1.lua_touserdata(L, 1);
    console.warn('GetLightningColorB was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native SetLightningColor takes lightning whichBolt, real r, real g, real b, real a returns boolean
 */
function SetLightningColor(C, L) {
    let whichBolt = lua_1.lua_touserdata(L, 1);
    let r = lauxlib_1.luaL_checknumber(L, 2);
    let g = lauxlib_1.luaL_checknumber(L, 3);
    let b = lauxlib_1.luaL_checknumber(L, 4);
    let a = lauxlib_1.luaL_checknumber(L, 5);
    console.warn('SetLightningColor was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native GetAbilityEffect takes string abilityString, effecttype t, integer index returns string
 */
function GetAbilityEffect(C, L) {
    let abilityString = lauxlib_1.luaL_checkstring(L, 1);
    let t = lua_1.lua_touserdata(L, 2);
    let index = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('GetAbilityEffect was called but is not implemented :(');
    lua_1.lua_pushstring(L, '');
    return 1;
}
/**
 * native GetAbilityEffectById takes integer abilityId, effecttype t, integer index returns string
 */
function GetAbilityEffectById(C, L) {
    let abilityId = lauxlib_1.luaL_checkinteger(L, 1);
    let t = lua_1.lua_touserdata(L, 2);
    let index = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('GetAbilityEffectById was called but is not implemented :(');
    lua_1.lua_pushstring(L, '');
    return 1;
}
/**
 * native GetAbilitySound takes string abilityString, soundtype t returns string
 */
function GetAbilitySound(C, L) {
    let abilityString = lauxlib_1.luaL_checkstring(L, 1);
    let t = lua_1.lua_touserdata(L, 2);
    console.warn('GetAbilitySound was called but is not implemented :(');
    lua_1.lua_pushstring(L, '');
    return 1;
}
/**
 * native GetAbilitySoundById takes integer abilityId, soundtype t returns string
 */
function GetAbilitySoundById(C, L) {
    let abilityId = lauxlib_1.luaL_checkinteger(L, 1);
    let t = lua_1.lua_touserdata(L, 2);
    console.warn('GetAbilitySoundById was called but is not implemented :(');
    lua_1.lua_pushstring(L, '');
    return 1;
}
/**
 * native GetTerrainCliffLevel takes real x, real y returns integer
 */
function GetTerrainCliffLevel(C, L) {
    let x = lauxlib_1.luaL_checknumber(L, 1);
    let y = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('GetTerrainCliffLevel was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native SetWaterBaseColor takes integer red, integer green, integer blue, integer alpha returns nothing
 */
function SetWaterBaseColor(C, L) {
    let red = lauxlib_1.luaL_checkinteger(L, 1);
    let green = lauxlib_1.luaL_checkinteger(L, 2);
    let blue = lauxlib_1.luaL_checkinteger(L, 3);
    let alpha = lauxlib_1.luaL_checkinteger(L, 4);
    console.warn('SetWaterBaseColor was called but is not implemented :(');
    return 0;
}
/**
 * native SetWaterDeforms takes boolean val returns nothing
 */
function SetWaterDeforms(C, L) {
    let val = lua_1.lua_toboolean(L, 1);
    console.warn('SetWaterDeforms was called but is not implemented :(');
    return 0;
}
/**
 * native GetTerrainType takes real x, real y returns integer
 */
function GetTerrainType(C, L) {
    let x = lauxlib_1.luaL_checknumber(L, 1);
    let y = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('GetTerrainType was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native GetTerrainVariance takes real x, real y returns integer
 */
function GetTerrainVariance(C, L) {
    let x = lauxlib_1.luaL_checknumber(L, 1);
    let y = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('GetTerrainVariance was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native SetTerrainType takes real x, real y, integer terrainType, integer variation, integer area, integer shape returns nothing
 */
function SetTerrainType(C, L) {
    let x = lauxlib_1.luaL_checknumber(L, 1);
    let y = lauxlib_1.luaL_checknumber(L, 2);
    let terrainType = lauxlib_1.luaL_checkinteger(L, 3);
    let variation = lauxlib_1.luaL_checkinteger(L, 4);
    let area = lauxlib_1.luaL_checkinteger(L, 5);
    let shape = lauxlib_1.luaL_checkinteger(L, 6);
    console.warn('SetTerrainType was called but is not implemented :(');
    return 0;
}
/**
 * native IsTerrainPathable takes real x, real y, pathingtype t returns boolean
 */
function IsTerrainPathable(C, L) {
    let x = lauxlib_1.luaL_checknumber(L, 1);
    let y = lauxlib_1.luaL_checknumber(L, 2);
    let t = lua_1.lua_touserdata(L, 3);
    console.warn('IsTerrainPathable was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native SetTerrainPathable takes real x, real y, pathingtype t, boolean flag returns nothing
 */
function SetTerrainPathable(C, L) {
    let x = lauxlib_1.luaL_checknumber(L, 1);
    let y = lauxlib_1.luaL_checknumber(L, 2);
    let t = lua_1.lua_touserdata(L, 3);
    let flag = lua_1.lua_toboolean(L, 4);
    console.warn('SetTerrainPathable was called but is not implemented :(');
    return 0;
}
/**
 * native CreateImage takes string file, real sizeX, real sizeY, real sizeZ, real posX, real posY, real posZ, real originX, real originY, real originZ, integer imageType returns image
 */
function CreateImage(C, L) {
    let file = lauxlib_1.luaL_checkstring(L, 1);
    let sizeX = lauxlib_1.luaL_checknumber(L, 2);
    let sizeY = lauxlib_1.luaL_checknumber(L, 3);
    let sizeZ = lauxlib_1.luaL_checknumber(L, 4);
    let posX = lauxlib_1.luaL_checknumber(L, 5);
    let posY = lauxlib_1.luaL_checknumber(L, 6);
    let posZ = lauxlib_1.luaL_checknumber(L, 7);
    let originX = lauxlib_1.luaL_checknumber(L, 8);
    let originY = lauxlib_1.luaL_checknumber(L, 9);
    let originZ = lauxlib_1.luaL_checknumber(L, 10);
    let imageType = lauxlib_1.luaL_checkinteger(L, 11);
    console.warn('CreateImage was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native DestroyImage takes image whichImage returns nothing
 */
function DestroyImage(C, L) {
    let whichImage = lua_1.lua_touserdata(L, 1);
    console.warn('DestroyImage was called but is not implemented :(');
    return 0;
}
/**
 * native ShowImage takes image whichImage, boolean flag returns nothing
 */
function ShowImage(C, L) {
    let whichImage = lua_1.lua_touserdata(L, 1);
    let flag = lua_1.lua_toboolean(L, 2);
    console.warn('ShowImage was called but is not implemented :(');
    return 0;
}
/**
 * native SetImageConstantHeight takes image whichImage, boolean flag, real height returns nothing
 */
function SetImageConstantHeight(C, L) {
    let whichImage = lua_1.lua_touserdata(L, 1);
    let flag = lua_1.lua_toboolean(L, 2);
    let height = lauxlib_1.luaL_checknumber(L, 3);
    console.warn('SetImageConstantHeight was called but is not implemented :(');
    return 0;
}
/**
 * native SetImagePosition takes image whichImage, real x, real y, real z returns nothing
 */
function SetImagePosition(C, L) {
    let whichImage = lua_1.lua_touserdata(L, 1);
    let x = lauxlib_1.luaL_checknumber(L, 2);
    let y = lauxlib_1.luaL_checknumber(L, 3);
    let z = lauxlib_1.luaL_checknumber(L, 4);
    console.warn('SetImagePosition was called but is not implemented :(');
    return 0;
}
/**
 * native SetImageColor takes image whichImage, integer red, integer green, integer blue, integer alpha returns nothing
 */
function SetImageColor(C, L) {
    let whichImage = lua_1.lua_touserdata(L, 1);
    let red = lauxlib_1.luaL_checkinteger(L, 2);
    let green = lauxlib_1.luaL_checkinteger(L, 3);
    let blue = lauxlib_1.luaL_checkinteger(L, 4);
    let alpha = lauxlib_1.luaL_checkinteger(L, 5);
    console.warn('SetImageColor was called but is not implemented :(');
    return 0;
}
/**
 * native SetImageRender takes image whichImage, boolean flag returns nothing
 */
function SetImageRender(C, L) {
    let whichImage = lua_1.lua_touserdata(L, 1);
    let flag = lua_1.lua_toboolean(L, 2);
    console.warn('SetImageRender was called but is not implemented :(');
    return 0;
}
/**
 * native SetImageRenderAlways takes image whichImage, boolean flag returns nothing
 */
function SetImageRenderAlways(C, L) {
    let whichImage = lua_1.lua_touserdata(L, 1);
    let flag = lua_1.lua_toboolean(L, 2);
    console.warn('SetImageRenderAlways was called but is not implemented :(');
    return 0;
}
/**
 * native SetImageAboveWater takes image whichImage, boolean flag, boolean useWaterAlpha returns nothing
 */
function SetImageAboveWater(C, L) {
    let whichImage = lua_1.lua_touserdata(L, 1);
    let flag = lua_1.lua_toboolean(L, 2);
    let useWaterAlpha = lua_1.lua_toboolean(L, 3);
    console.warn('SetImageAboveWater was called but is not implemented :(');
    return 0;
}
/**
 * native SetImageType takes image whichImage, integer imageType returns nothing
 */
function SetImageType(C, L) {
    let whichImage = lua_1.lua_touserdata(L, 1);
    let imageType = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('SetImageType was called but is not implemented :(');
    return 0;
}
/**
 * native CreateUbersplat takes real x, real y, string name, integer red, integer green, integer blue, integer alpha, boolean forcePaused, boolean noBirthTime returns ubersplat
 */
function CreateUbersplat(C, L) {
    let x = lauxlib_1.luaL_checknumber(L, 1);
    let y = lauxlib_1.luaL_checknumber(L, 2);
    let name = lauxlib_1.luaL_checkstring(L, 3);
    let red = lauxlib_1.luaL_checkinteger(L, 4);
    let green = lauxlib_1.luaL_checkinteger(L, 5);
    let blue = lauxlib_1.luaL_checkinteger(L, 6);
    let alpha = lauxlib_1.luaL_checkinteger(L, 7);
    let forcePaused = lua_1.lua_toboolean(L, 8);
    let noBirthTime = lua_1.lua_toboolean(L, 9);
    console.warn('CreateUbersplat was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native DestroyUbersplat takes ubersplat whichSplat returns nothing
 */
function DestroyUbersplat(C, L) {
    let whichSplat = lua_1.lua_touserdata(L, 1);
    console.warn('DestroyUbersplat was called but is not implemented :(');
    return 0;
}
/**
 * native ResetUbersplat takes ubersplat whichSplat returns nothing
 */
function ResetUbersplat(C, L) {
    let whichSplat = lua_1.lua_touserdata(L, 1);
    console.warn('ResetUbersplat was called but is not implemented :(');
    return 0;
}
/**
 * native FinishUbersplat takes ubersplat whichSplat returns nothing
 */
function FinishUbersplat(C, L) {
    let whichSplat = lua_1.lua_touserdata(L, 1);
    console.warn('FinishUbersplat was called but is not implemented :(');
    return 0;
}
/**
 * native ShowUbersplat takes ubersplat whichSplat, boolean flag returns nothing
 */
function ShowUbersplat(C, L) {
    let whichSplat = lua_1.lua_touserdata(L, 1);
    let flag = lua_1.lua_toboolean(L, 2);
    console.warn('ShowUbersplat was called but is not implemented :(');
    return 0;
}
/**
 * native SetUbersplatRender takes ubersplat whichSplat, boolean flag returns nothing
 */
function SetUbersplatRender(C, L) {
    let whichSplat = lua_1.lua_touserdata(L, 1);
    let flag = lua_1.lua_toboolean(L, 2);
    console.warn('SetUbersplatRender was called but is not implemented :(');
    return 0;
}
/**
 * native SetUbersplatRenderAlways takes ubersplat whichSplat, boolean flag returns nothing
 */
function SetUbersplatRenderAlways(C, L) {
    let whichSplat = lua_1.lua_touserdata(L, 1);
    let flag = lua_1.lua_toboolean(L, 2);
    console.warn('SetUbersplatRenderAlways was called but is not implemented :(');
    return 0;
}
/**
 * native SetBlight takes player whichPlayer, real x, real y, real radius, boolean addBlight returns nothing
 */
function SetBlight(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    let x = lauxlib_1.luaL_checknumber(L, 2);
    let y = lauxlib_1.luaL_checknumber(L, 3);
    let radius = lauxlib_1.luaL_checknumber(L, 4);
    let addBlight = lua_1.lua_toboolean(L, 5);
    console.warn('SetBlight was called but is not implemented :(');
    return 0;
}
/**
 * native SetBlightRect takes player whichPlayer, rect r, boolean addBlight returns nothing
 */
function SetBlightRect(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    let r = lua_1.lua_touserdata(L, 2);
    let addBlight = lua_1.lua_toboolean(L, 3);
    console.warn('SetBlightRect was called but is not implemented :(');
    return 0;
}
/**
 * native SetBlightPoint takes player whichPlayer, real x, real y, boolean addBlight returns nothing
 */
function SetBlightPoint(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    let x = lauxlib_1.luaL_checknumber(L, 2);
    let y = lauxlib_1.luaL_checknumber(L, 3);
    let addBlight = lua_1.lua_toboolean(L, 4);
    console.warn('SetBlightPoint was called but is not implemented :(');
    return 0;
}
/**
 * native SetBlightLoc takes player whichPlayer, location whichLocation, real radius, boolean addBlight returns nothing
 */
function SetBlightLoc(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    let whichLocation = lua_1.lua_touserdata(L, 2);
    let radius = lauxlib_1.luaL_checknumber(L, 3);
    let addBlight = lua_1.lua_toboolean(L, 4);
    console.warn('SetBlightLoc was called but is not implemented :(');
    return 0;
}
/**
 * native CreateBlightedGoldmine takes player id, real x, real y, real face returns unit
 */
function CreateBlightedGoldmine(C, L) {
    let id = lua_1.lua_touserdata(L, 1);
    let x = lauxlib_1.luaL_checknumber(L, 2);
    let y = lauxlib_1.luaL_checknumber(L, 3);
    let face = lauxlib_1.luaL_checknumber(L, 4);
    console.warn('CreateBlightedGoldmine was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native IsPointBlighted takes real x, real y returns boolean
 */
function IsPointBlighted(C, L) {
    let x = lauxlib_1.luaL_checknumber(L, 1);
    let y = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('IsPointBlighted was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native SetDoodadAnimation takes real x, real y, real radius, integer doodadID, boolean nearestOnly, string animName, boolean animRandom returns nothing
 */
function SetDoodadAnimation(C, L) {
    let x = lauxlib_1.luaL_checknumber(L, 1);
    let y = lauxlib_1.luaL_checknumber(L, 2);
    let radius = lauxlib_1.luaL_checknumber(L, 3);
    let doodadID = lauxlib_1.luaL_checkinteger(L, 4);
    let nearestOnly = lua_1.lua_toboolean(L, 5);
    let animName = lauxlib_1.luaL_checkstring(L, 6);
    let animRandom = lua_1.lua_toboolean(L, 7);
    console.warn('SetDoodadAnimation was called but is not implemented :(');
    return 0;
}
/**
 * native SetDoodadAnimationRect takes rect r, integer doodadID, string animName, boolean animRandom returns nothing
 */
function SetDoodadAnimationRect(C, L) {
    let r = lua_1.lua_touserdata(L, 1);
    let doodadID = lauxlib_1.luaL_checkinteger(L, 2);
    let animName = lauxlib_1.luaL_checkstring(L, 3);
    let animRandom = lua_1.lua_toboolean(L, 4);
    console.warn('SetDoodadAnimationRect was called but is not implemented :(');
    return 0;
}
/**
 * native StartMeleeAI takes player num, string script returns nothing
 */
function StartMeleeAI(C, L) {
    let num = lua_1.lua_touserdata(L, 1);
    let script = lauxlib_1.luaL_checkstring(L, 2);
    console.warn('StartMeleeAI was called but is not implemented :(');
    return 0;
}
/**
 * native StartCampaignAI takes player num, string script returns nothing
 */
function StartCampaignAI(C, L) {
    let num = lua_1.lua_touserdata(L, 1);
    let script = lauxlib_1.luaL_checkstring(L, 2);
    console.warn('StartCampaignAI was called but is not implemented :(');
    return 0;
}
/**
 * native CommandAI takes player num, integer command, integer data returns nothing
 */
function CommandAI(C, L) {
    let num = lua_1.lua_touserdata(L, 1);
    let command = lauxlib_1.luaL_checkinteger(L, 2);
    let data = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('CommandAI was called but is not implemented :(');
    return 0;
}
/**
 * native PauseCompAI takes player p, boolean pause returns nothing
 */
function PauseCompAI(C, L) {
    let p = lua_1.lua_touserdata(L, 1);
    let pause = lua_1.lua_toboolean(L, 2);
    console.warn('PauseCompAI was called but is not implemented :(');
    return 0;
}
/**
 * native GetAIDifficulty takes player num returns aidifficulty
 */
function GetAIDifficulty(C, L) {
    let num = lua_1.lua_touserdata(L, 1);
    console.warn('GetAIDifficulty was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native RemoveGuardPosition takes unit hUnit returns nothing
 */
function RemoveGuardPosition(C, L) {
    let hUnit = lua_1.lua_touserdata(L, 1);
    console.warn('RemoveGuardPosition was called but is not implemented :(');
    return 0;
}
/**
 * native RecycleGuardPosition takes unit hUnit returns nothing
 */
function RecycleGuardPosition(C, L) {
    let hUnit = lua_1.lua_touserdata(L, 1);
    console.warn('RecycleGuardPosition was called but is not implemented :(');
    return 0;
}
/**
 * native RemoveAllGuardPositions takes player num returns nothing
 */
function RemoveAllGuardPositions(C, L) {
    let num = lua_1.lua_touserdata(L, 1);
    console.warn('RemoveAllGuardPositions was called but is not implemented :(');
    return 0;
}
/**
 * native Cheat takes string cheatStr returns nothing
 */
function Cheat(C, L) {
    let cheatStr = lauxlib_1.luaL_checkstring(L, 1);
    console.warn('Cheat was called but is not implemented :(');
    return 0;
}
/**
 * native IsNoVictoryCheat takes nothing returns boolean
 */
function IsNoVictoryCheat(C, L) {
    console.warn('IsNoVictoryCheat was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native IsNoDefeatCheat takes nothing returns boolean
 */
function IsNoDefeatCheat(C, L) {
    console.warn('IsNoDefeatCheat was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native Preload takes string filename returns nothing
 */
function Preload(C, L) {
    let filename = lauxlib_1.luaL_checkstring(L, 1);
    console.warn('Preload was called but is not implemented :(');
    return 0;
}
/**
 * native PreloadEnd takes real timeout returns nothing
 */
function PreloadEnd(C, L) {
    let timeout = lauxlib_1.luaL_checknumber(L, 1);
    console.warn('PreloadEnd was called but is not implemented :(');
    return 0;
}
/**
 * native PreloadStart takes nothing returns nothing
 */
function PreloadStart(C, L) {
    console.warn('PreloadStart was called but is not implemented :(');
    return 0;
}
/**
 * native PreloadRefresh takes nothing returns nothing
 */
function PreloadRefresh(C, L) {
    console.warn('PreloadRefresh was called but is not implemented :(');
    return 0;
}
/**
 * native PreloadEndEx takes nothing returns nothing
 */
function PreloadEndEx(C, L) {
    console.warn('PreloadEndEx was called but is not implemented :(');
    return 0;
}
/**
 * native PreloadGenClear takes nothing returns nothing
 */
function PreloadGenClear(C, L) {
    console.warn('PreloadGenClear was called but is not implemented :(');
    return 0;
}
/**
 * native PreloadGenStart takes nothing returns nothing
 */
function PreloadGenStart(C, L) {
    console.warn('PreloadGenStart was called but is not implemented :(');
    return 0;
}
/**
 * native PreloadGenEnd takes string filename returns nothing
 */
function PreloadGenEnd(C, L) {
    let filename = lauxlib_1.luaL_checkstring(L, 1);
    console.warn('PreloadGenEnd was called but is not implemented :(');
    return 0;
}
/**
 * native Preloader takes string filename returns nothing
 */
function Preloader(C, L) {
    let filename = lauxlib_1.luaL_checkstring(L, 1);
    console.warn('Preloader was called but is not implemented :(');
    return 0;
}
/**
 * native AutomationTestStart takes string testName returns nothing
 */
function AutomationTestStart(C, L) {
    let testName = lauxlib_1.luaL_checkstring(L, 1);
    console.warn('AutomationTestStart was called but is not implemented :(');
    return 0;
}
/**
 * native AutomationTestEnd takes string testName returns nothing
 */
function AutomationTestEnd(C, L) {
    let testName = lauxlib_1.luaL_checkstring(L, 1);
    console.warn('AutomationTestEnd was called but is not implemented :(');
    return 0;
}
/**
 * native BlzGetTriggerPlayerMouseX takes nothing returns real
 */
function BlzGetTriggerPlayerMouseX(C, L) {
    console.warn('BlzGetTriggerPlayerMouseX was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native BlzGetTriggerPlayerMouseY takes nothing returns real
 */
function BlzGetTriggerPlayerMouseY(C, L) {
    console.warn('BlzGetTriggerPlayerMouseY was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native BlzGetTriggerPlayerMousePosition takes nothing returns location
 */
function BlzGetTriggerPlayerMousePosition(C, L) {
    console.warn('BlzGetTriggerPlayerMousePosition was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native BlzGetTriggerPlayerMouseButton takes nothing returns mousebuttontype
 */
function BlzGetTriggerPlayerMouseButton(C, L) {
    console.warn('BlzGetTriggerPlayerMouseButton was called but is not implemented :(');
    lua_1.lua_pushlightuserdata(L, { name: 'FAKE' });
    return 1;
}
/**
 * native BlzSetAbilityTooltip takes integer abilCode, string tooltip, integer level returns nothing
 */
function BlzSetAbilityTooltip(C, L) {
    let abilCode = lauxlib_1.luaL_checkinteger(L, 1);
    let tooltip = lauxlib_1.luaL_checkstring(L, 2);
    let level = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('BlzSetAbilityTooltip was called but is not implemented :(');
    return 0;
}
/**
 * native BlzSetAbilityActivatedTooltip takes integer abilCode, string tooltip, integer level returns nothing
 */
function BlzSetAbilityActivatedTooltip(C, L) {
    let abilCode = lauxlib_1.luaL_checkinteger(L, 1);
    let tooltip = lauxlib_1.luaL_checkstring(L, 2);
    let level = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('BlzSetAbilityActivatedTooltip was called but is not implemented :(');
    return 0;
}
/**
 * native BlzSetAbilityExtendedTooltip takes integer abilCode, string ExtendedTooltip, integer level returns nothing
 */
function BlzSetAbilityExtendedTooltip(C, L) {
    let abilCode = lauxlib_1.luaL_checkinteger(L, 1);
    let ExtendedTooltip = lauxlib_1.luaL_checkstring(L, 2);
    let level = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('BlzSetAbilityExtendedTooltip was called but is not implemented :(');
    return 0;
}
/**
 * native BlzSetAbilityActivatedExtendedTooltip takes integer abilCode, string ExtendedTooltip, integer level returns nothing
 */
function BlzSetAbilityActivatedExtendedTooltip(C, L) {
    let abilCode = lauxlib_1.luaL_checkinteger(L, 1);
    let ExtendedTooltip = lauxlib_1.luaL_checkstring(L, 2);
    let level = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('BlzSetAbilityActivatedExtendedTooltip was called but is not implemented :(');
    return 0;
}
/**
 * native BlzSetAbilityResearchTooltip takes integer abilCode, string researchTooltip, integer level returns nothing
 */
function BlzSetAbilityResearchTooltip(C, L) {
    let abilCode = lauxlib_1.luaL_checkinteger(L, 1);
    let researchTooltip = lauxlib_1.luaL_checkstring(L, 2);
    let level = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('BlzSetAbilityResearchTooltip was called but is not implemented :(');
    return 0;
}
/**
 * native BlzSetAbilityResearchExtendedTooltip takes integer abilCode, string researchExtendedTooltip, integer level returns nothing
 */
function BlzSetAbilityResearchExtendedTooltip(C, L) {
    let abilCode = lauxlib_1.luaL_checkinteger(L, 1);
    let researchExtendedTooltip = lauxlib_1.luaL_checkstring(L, 2);
    let level = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('BlzSetAbilityResearchExtendedTooltip was called but is not implemented :(');
    return 0;
}
/**
 * native BlzGetAbilityTooltip takes integer abilCode, integer level returns string
 */
function BlzGetAbilityTooltip(C, L) {
    let abilCode = lauxlib_1.luaL_checkinteger(L, 1);
    let level = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('BlzGetAbilityTooltip was called but is not implemented :(');
    lua_1.lua_pushstring(L, '');
    return 1;
}
/**
 * native BlzGetAbilityActivatedTooltip takes integer abilCode, integer level returns string
 */
function BlzGetAbilityActivatedTooltip(C, L) {
    let abilCode = lauxlib_1.luaL_checkinteger(L, 1);
    let level = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('BlzGetAbilityActivatedTooltip was called but is not implemented :(');
    lua_1.lua_pushstring(L, '');
    return 1;
}
/**
 * native BlzGetAbilityExtendedTooltip takes integer abilCode, integer level returns string
 */
function BlzGetAbilityExtendedTooltip(C, L) {
    let abilCode = lauxlib_1.luaL_checkinteger(L, 1);
    let level = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('BlzGetAbilityExtendedTooltip was called but is not implemented :(');
    lua_1.lua_pushstring(L, '');
    return 1;
}
/**
 * native BlzGetAbilityActivatedExtendedTooltip takes integer abilCode, integer level returns string
 */
function BlzGetAbilityActivatedExtendedTooltip(C, L) {
    let abilCode = lauxlib_1.luaL_checkinteger(L, 1);
    let level = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('BlzGetAbilityActivatedExtendedTooltip was called but is not implemented :(');
    lua_1.lua_pushstring(L, '');
    return 1;
}
/**
 * native BlzGetAbilityResearchTooltip takes integer abilCode, integer level returns string
 */
function BlzGetAbilityResearchTooltip(C, L) {
    let abilCode = lauxlib_1.luaL_checkinteger(L, 1);
    let level = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('BlzGetAbilityResearchTooltip was called but is not implemented :(');
    lua_1.lua_pushstring(L, '');
    return 1;
}
/**
 * native BlzGetAbilityResearchExtendedTooltip takes integer abilCode, integer level returns string
 */
function BlzGetAbilityResearchExtendedTooltip(C, L) {
    let abilCode = lauxlib_1.luaL_checkinteger(L, 1);
    let level = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('BlzGetAbilityResearchExtendedTooltip was called but is not implemented :(');
    lua_1.lua_pushstring(L, '');
    return 1;
}
/**
 * native BlzSetAbilityIcon takes integer abilCode, string iconPath returns nothing
 */
function BlzSetAbilityIcon(C, L) {
    let abilCode = lauxlib_1.luaL_checkinteger(L, 1);
    let iconPath = lauxlib_1.luaL_checkstring(L, 2);
    console.warn('BlzSetAbilityIcon was called but is not implemented :(');
    return 0;
}
/**
 * native BlzGetAbilityIcon takes integer abilCode returns string
 */
function BlzGetAbilityIcon(C, L) {
    let abilCode = lauxlib_1.luaL_checkinteger(L, 1);
    console.warn('BlzGetAbilityIcon was called but is not implemented :(');
    lua_1.lua_pushstring(L, '');
    return 1;
}
/**
 * native BlzSetAbilityActivatedIcon takes integer abilCode, string iconPath returns nothing
 */
function BlzSetAbilityActivatedIcon(C, L) {
    let abilCode = lauxlib_1.luaL_checkinteger(L, 1);
    let iconPath = lauxlib_1.luaL_checkstring(L, 2);
    console.warn('BlzSetAbilityActivatedIcon was called but is not implemented :(');
    return 0;
}
/**
 * native BlzGetAbilityActivatedIcon takes integer abilCode returns string
 */
function BlzGetAbilityActivatedIcon(C, L) {
    let abilCode = lauxlib_1.luaL_checkinteger(L, 1);
    console.warn('BlzGetAbilityActivatedIcon was called but is not implemented :(');
    lua_1.lua_pushstring(L, '');
    return 1;
}
/**
 * native BlzGetAbilityPosX takes integer abilCode returns integer
 */
function BlzGetAbilityPosX(C, L) {
    let abilCode = lauxlib_1.luaL_checkinteger(L, 1);
    console.warn('BlzGetAbilityPosX was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native BlzGetAbilityPosY takes integer abilCode returns integer
 */
function BlzGetAbilityPosY(C, L) {
    let abilCode = lauxlib_1.luaL_checkinteger(L, 1);
    console.warn('BlzGetAbilityPosY was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native BlzSetAbilityPosX takes integer abilCode, integer x returns nothing
 */
function BlzSetAbilityPosX(C, L) {
    let abilCode = lauxlib_1.luaL_checkinteger(L, 1);
    let x = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('BlzSetAbilityPosX was called but is not implemented :(');
    return 0;
}
/**
 * native BlzSetAbilityPosY takes integer abilCode, integer y returns nothing
 */
function BlzSetAbilityPosY(C, L) {
    let abilCode = lauxlib_1.luaL_checkinteger(L, 1);
    let y = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('BlzSetAbilityPosY was called but is not implemented :(');
    return 0;
}
/**
 * native BlzGetAbilityActivatedPosX takes integer abilCode returns integer
 */
function BlzGetAbilityActivatedPosX(C, L) {
    let abilCode = lauxlib_1.luaL_checkinteger(L, 1);
    console.warn('BlzGetAbilityActivatedPosX was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native BlzGetAbilityActivatedPosY takes integer abilCode returns integer
 */
function BlzGetAbilityActivatedPosY(C, L) {
    let abilCode = lauxlib_1.luaL_checkinteger(L, 1);
    console.warn('BlzGetAbilityActivatedPosY was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native BlzSetAbilityActivatedPosX takes integer abilCode, integer x returns nothing
 */
function BlzSetAbilityActivatedPosX(C, L) {
    let abilCode = lauxlib_1.luaL_checkinteger(L, 1);
    let x = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('BlzSetAbilityActivatedPosX was called but is not implemented :(');
    return 0;
}
/**
 * native BlzSetAbilityActivatedPosY takes integer abilCode, integer y returns nothing
 */
function BlzSetAbilityActivatedPosY(C, L) {
    let abilCode = lauxlib_1.luaL_checkinteger(L, 1);
    let y = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('BlzSetAbilityActivatedPosY was called but is not implemented :(');
    return 0;
}
/**
 * native BlzGetUnitMaxHP takes unit whichUnit returns integer
 */
function BlzGetUnitMaxHP(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    console.warn('BlzGetUnitMaxHP was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native BlzSetUnitMaxHP takes unit whichUnit, integer hp returns nothing
 */
function BlzSetUnitMaxHP(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let hp = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('BlzSetUnitMaxHP was called but is not implemented :(');
    return 0;
}
/**
 * native BlzGetUnitMaxMana takes unit whichUnit returns integer
 */
function BlzGetUnitMaxMana(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    console.warn('BlzGetUnitMaxMana was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native BlzSetUnitMaxMana takes unit whichUnit, integer mana returns nothing
 */
function BlzSetUnitMaxMana(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let mana = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('BlzSetUnitMaxMana was called but is not implemented :(');
    return 0;
}
/**
 * native BlzDeleteHeroAbility takes unit whichUnit, integer abilCode returns nothing
 */
function BlzDeleteHeroAbility(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let abilCode = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('BlzDeleteHeroAbility was called but is not implemented :(');
    return 0;
}
/**
 * native BlzSetItemName takes item whichItem, string name returns nothing
 */
function BlzSetItemName(C, L) {
    let whichItem = lua_1.lua_touserdata(L, 1);
    let name = lauxlib_1.luaL_checkstring(L, 2);
    console.warn('BlzSetItemName was called but is not implemented :(');
    return 0;
}
/**
 * native BlzSetItemDescription takes item whichItem, string name returns nothing
 */
function BlzSetItemDescription(C, L) {
    let whichItem = lua_1.lua_touserdata(L, 1);
    let name = lauxlib_1.luaL_checkstring(L, 2);
    console.warn('BlzSetItemDescription was called but is not implemented :(');
    return 0;
}
/**
 * native BlzGetItemDescription takes item whichItem returns string
 */
function BlzGetItemDescription(C, L) {
    let whichItem = lua_1.lua_touserdata(L, 1);
    console.warn('BlzGetItemDescription was called but is not implemented :(');
    lua_1.lua_pushstring(L, '');
    return 1;
}
/**
 * native BlzSetItemTooltip takes item whichItem, string name returns nothing
 */
function BlzSetItemTooltip(C, L) {
    let whichItem = lua_1.lua_touserdata(L, 1);
    let name = lauxlib_1.luaL_checkstring(L, 2);
    console.warn('BlzSetItemTooltip was called but is not implemented :(');
    return 0;
}
/**
 * native BlzGetItemTooltip takes item whichItem returns string
 */
function BlzGetItemTooltip(C, L) {
    let whichItem = lua_1.lua_touserdata(L, 1);
    console.warn('BlzGetItemTooltip was called but is not implemented :(');
    lua_1.lua_pushstring(L, '');
    return 1;
}
/**
 * native BlzSetItemExtendedTooltip takes item whichItem, string name returns nothing
 */
function BlzSetItemExtendedTooltip(C, L) {
    let whichItem = lua_1.lua_touserdata(L, 1);
    let name = lauxlib_1.luaL_checkstring(L, 2);
    console.warn('BlzSetItemExtendedTooltip was called but is not implemented :(');
    return 0;
}
/**
 * native BlzGetItemExtendedTooltip takes item whichItem returns string
 */
function BlzGetItemExtendedTooltip(C, L) {
    let whichItem = lua_1.lua_touserdata(L, 1);
    console.warn('BlzGetItemExtendedTooltip was called but is not implemented :(');
    lua_1.lua_pushstring(L, '');
    return 1;
}
/**
 * native BlzSetItemIconPath takes item whichItem, string name returns nothing
 */
function BlzSetItemIconPath(C, L) {
    let whichItem = lua_1.lua_touserdata(L, 1);
    let name = lauxlib_1.luaL_checkstring(L, 2);
    console.warn('BlzSetItemIconPath was called but is not implemented :(');
    return 0;
}
/**
 * native BlzGetItemIconPath takes item whichItem returns string
 */
function BlzGetItemIconPath(C, L) {
    let whichItem = lua_1.lua_touserdata(L, 1);
    console.warn('BlzGetItemIconPath was called but is not implemented :(');
    lua_1.lua_pushstring(L, '');
    return 1;
}
/**
 * native BlzSetUnitName takes unit whichUnit, string name returns nothing
 */
function BlzSetUnitName(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let name = lauxlib_1.luaL_checkstring(L, 2);
    console.warn('BlzSetUnitName was called but is not implemented :(');
    return 0;
}
/**
 * native BlzSetHeroProperName takes unit whichUnit, string name returns nothing
 */
function BlzSetHeroProperName(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let name = lauxlib_1.luaL_checkstring(L, 2);
    console.warn('BlzSetHeroProperName was called but is not implemented :(');
    return 0;
}
/**
 * native BlzGetUnitBaseDamage takes unit whichUnit, integer weaponIndex returns integer
 */
function BlzGetUnitBaseDamage(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let weaponIndex = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('BlzGetUnitBaseDamage was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native BlzSetUnitBaseDamage takes unit whichUnit, integer baseDamage, integer weaponIndex returns nothing
 */
function BlzSetUnitBaseDamage(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let baseDamage = lauxlib_1.luaL_checkinteger(L, 2);
    let weaponIndex = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('BlzSetUnitBaseDamage was called but is not implemented :(');
    return 0;
}
/**
 * native BlzGetUnitDiceNumber takes unit whichUnit, integer weaponIndex returns integer
 */
function BlzGetUnitDiceNumber(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let weaponIndex = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('BlzGetUnitDiceNumber was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native BlzSetUnitDiceNumber takes unit whichUnit, integer diceNumber, integer weaponIndex returns nothing
 */
function BlzSetUnitDiceNumber(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let diceNumber = lauxlib_1.luaL_checkinteger(L, 2);
    let weaponIndex = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('BlzSetUnitDiceNumber was called but is not implemented :(');
    return 0;
}
/**
 * native BlzGetUnitDiceSides takes unit whichUnit, integer weaponIndex returns integer
 */
function BlzGetUnitDiceSides(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let weaponIndex = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('BlzGetUnitDiceSides was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native BlzSetUnitDiceSides takes unit whichUnit, integer diceSides, integer weaponIndex returns nothing
 */
function BlzSetUnitDiceSides(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let diceSides = lauxlib_1.luaL_checkinteger(L, 2);
    let weaponIndex = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('BlzSetUnitDiceSides was called but is not implemented :(');
    return 0;
}
/**
 * native BlzGetUnitAttackCooldown takes unit whichUnit, integer weaponIndex returns real
 */
function BlzGetUnitAttackCooldown(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let weaponIndex = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('BlzGetUnitAttackCooldown was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native BlzSetUnitAttackCooldown takes unit whichUnit, real cooldown, integer weaponIndex returns nothing
 */
function BlzSetUnitAttackCooldown(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let cooldown = lauxlib_1.luaL_checknumber(L, 2);
    let weaponIndex = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('BlzSetUnitAttackCooldown was called but is not implemented :(');
    return 0;
}
/**
 * native BlzSetSpecialEffectColorByPlayer takes effect whichEffect, player whichPlayer returns nothing
 */
function BlzSetSpecialEffectColorByPlayer(C, L) {
    let whichEffect = lua_1.lua_touserdata(L, 1);
    let whichPlayer = lua_1.lua_touserdata(L, 2);
    console.warn('BlzSetSpecialEffectColorByPlayer was called but is not implemented :(');
    return 0;
}
/**
 * native BlzSetSpecialEffectColor takes effect whichEffect, integer r, integer g, integer b returns nothing
 */
function BlzSetSpecialEffectColor(C, L) {
    let whichEffect = lua_1.lua_touserdata(L, 1);
    let r = lauxlib_1.luaL_checkinteger(L, 2);
    let g = lauxlib_1.luaL_checkinteger(L, 3);
    let b = lauxlib_1.luaL_checkinteger(L, 4);
    console.warn('BlzSetSpecialEffectColor was called but is not implemented :(');
    return 0;
}
/**
 * native BlzSetSpecialEffectAlpha takes effect whichEffect, integer alpha returns nothing
 */
function BlzSetSpecialEffectAlpha(C, L) {
    let whichEffect = lua_1.lua_touserdata(L, 1);
    let alpha = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('BlzSetSpecialEffectAlpha was called but is not implemented :(');
    return 0;
}
/**
 * native BlzSetSpecialEffectScale takes effect whichEffect, real scale returns nothing
 */
function BlzSetSpecialEffectScale(C, L) {
    let whichEffect = lua_1.lua_touserdata(L, 1);
    let scale = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('BlzSetSpecialEffectScale was called but is not implemented :(');
    return 0;
}
/**
 * native BlzSetSpecialEffectPosition takes effect whichEffect, real x, real y, real z returns nothing
 */
function BlzSetSpecialEffectPosition(C, L) {
    let whichEffect = lua_1.lua_touserdata(L, 1);
    let x = lauxlib_1.luaL_checknumber(L, 2);
    let y = lauxlib_1.luaL_checknumber(L, 3);
    let z = lauxlib_1.luaL_checknumber(L, 4);
    console.warn('BlzSetSpecialEffectPosition was called but is not implemented :(');
    return 0;
}
/**
 * native BlzSetSpecialEffectHeight takes effect whichEffect, real height returns nothing
 */
function BlzSetSpecialEffectHeight(C, L) {
    let whichEffect = lua_1.lua_touserdata(L, 1);
    let height = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('BlzSetSpecialEffectHeight was called but is not implemented :(');
    return 0;
}
/**
 * native BlzSetSpecialEffectTimeScale takes effect whichEffect, real timeScale returns nothing
 */
function BlzSetSpecialEffectTimeScale(C, L) {
    let whichEffect = lua_1.lua_touserdata(L, 1);
    let timeScale = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('BlzSetSpecialEffectTimeScale was called but is not implemented :(');
    return 0;
}
/**
 * native BlzSetSpecialEffectTime takes effect whichEffect, real time returns nothing
 */
function BlzSetSpecialEffectTime(C, L) {
    let whichEffect = lua_1.lua_touserdata(L, 1);
    let time = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('BlzSetSpecialEffectTime was called but is not implemented :(');
    return 0;
}
/**
 * native BlzSetSpecialEffectOrientation takes effect whichEffect, real yaw, real pitch, real roll returns nothing
 */
function BlzSetSpecialEffectOrientation(C, L) {
    let whichEffect = lua_1.lua_touserdata(L, 1);
    let yaw = lauxlib_1.luaL_checknumber(L, 2);
    let pitch = lauxlib_1.luaL_checknumber(L, 3);
    let roll = lauxlib_1.luaL_checknumber(L, 4);
    console.warn('BlzSetSpecialEffectOrientation was called but is not implemented :(');
    return 0;
}
/**
 * native BlzSetSpecialEffectYaw takes effect whichEffect, real yaw returns nothing
 */
function BlzSetSpecialEffectYaw(C, L) {
    let whichEffect = lua_1.lua_touserdata(L, 1);
    let yaw = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('BlzSetSpecialEffectYaw was called but is not implemented :(');
    return 0;
}
/**
 * native BlzSetSpecialEffectPitch takes effect whichEffect, real pitch returns nothing
 */
function BlzSetSpecialEffectPitch(C, L) {
    let whichEffect = lua_1.lua_touserdata(L, 1);
    let pitch = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('BlzSetSpecialEffectPitch was called but is not implemented :(');
    return 0;
}
/**
 * native BlzSetSpecialEffectRoll takes effect whichEffect, real roll returns nothing
 */
function BlzSetSpecialEffectRoll(C, L) {
    let whichEffect = lua_1.lua_touserdata(L, 1);
    let roll = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('BlzSetSpecialEffectRoll was called but is not implemented :(');
    return 0;
}
/**
 * native BlzSetSpecialEffectX takes effect whichEffect, real x returns nothing
 */
function BlzSetSpecialEffectX(C, L) {
    let whichEffect = lua_1.lua_touserdata(L, 1);
    let x = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('BlzSetSpecialEffectX was called but is not implemented :(');
    return 0;
}
/**
 * native BlzSetSpecialEffectY takes effect whichEffect, real y returns nothing
 */
function BlzSetSpecialEffectY(C, L) {
    let whichEffect = lua_1.lua_touserdata(L, 1);
    let y = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('BlzSetSpecialEffectY was called but is not implemented :(');
    return 0;
}
/**
 * native BlzSetSpecialEffectZ takes effect whichEffect, real z returns nothing
 */
function BlzSetSpecialEffectZ(C, L) {
    let whichEffect = lua_1.lua_touserdata(L, 1);
    let z = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('BlzSetSpecialEffectZ was called but is not implemented :(');
    return 0;
}
/**
 * native BlzSetSpecialEffectPositionLoc takes effect whichEffect, location loc returns nothing
 */
function BlzSetSpecialEffectPositionLoc(C, L) {
    let whichEffect = lua_1.lua_touserdata(L, 1);
    let loc = lua_1.lua_touserdata(L, 2);
    console.warn('BlzSetSpecialEffectPositionLoc was called but is not implemented :(');
    return 0;
}
/**
 * native BlzGetLocalSpecialEffectX takes effect whichEffect returns real
 */
function BlzGetLocalSpecialEffectX(C, L) {
    let whichEffect = lua_1.lua_touserdata(L, 1);
    console.warn('BlzGetLocalSpecialEffectX was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native BlzGetLocalSpecialEffectY takes effect whichEffect returns real
 */
function BlzGetLocalSpecialEffectY(C, L) {
    let whichEffect = lua_1.lua_touserdata(L, 1);
    console.warn('BlzGetLocalSpecialEffectY was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native BlzGetLocalSpecialEffectZ takes effect whichEffect returns real
 */
function BlzGetLocalSpecialEffectZ(C, L) {
    let whichEffect = lua_1.lua_touserdata(L, 1);
    console.warn('BlzGetLocalSpecialEffectZ was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native BlzGetUnitArmor takes unit whichUnit returns real
 */
function BlzGetUnitArmor(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    console.warn('BlzGetUnitArmor was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native BlzSetUnitArmor takes unit whichUnit, real armorAmount returns nothing
 */
function BlzSetUnitArmor(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let armorAmount = lauxlib_1.luaL_checknumber(L, 2);
    console.warn('BlzSetUnitArmor was called but is not implemented :(');
    return 0;
}
/**
 * native BlzUnitHideAbility takes unit whichUnit, integer abilId, boolean flag returns nothing
 */
function BlzUnitHideAbility(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let abilId = lauxlib_1.luaL_checkinteger(L, 2);
    let flag = lua_1.lua_toboolean(L, 3);
    console.warn('BlzUnitHideAbility was called but is not implemented :(');
    return 0;
}
/**
 * native BlzUnitDisableAbility takes unit whichUnit, integer abilId, boolean flag, boolean hideUI returns nothing
 */
function BlzUnitDisableAbility(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let abilId = lauxlib_1.luaL_checkinteger(L, 2);
    let flag = lua_1.lua_toboolean(L, 3);
    let hideUI = lua_1.lua_toboolean(L, 4);
    console.warn('BlzUnitDisableAbility was called but is not implemented :(');
    return 0;
}
/**
 * native BlzUnitCancelTimedLife takes unit whichUnit returns nothing
 */
function BlzUnitCancelTimedLife(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    console.warn('BlzUnitCancelTimedLife was called but is not implemented :(');
    return 0;
}
/**
 * native BlzIsUnitSelectable takes unit whichUnit returns boolean
 */
function BlzIsUnitSelectable(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    console.warn('BlzIsUnitSelectable was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native BlzIsUnitInvulnerable takes unit whichUnit returns boolean
 */
function BlzIsUnitInvulnerable(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    console.warn('BlzIsUnitInvulnerable was called but is not implemented :(');
    lua_1.lua_pushboolean(L, false);
    return 1;
}
/**
 * native BlzUnitInterruptAttack takes unit whichUnit returns nothing
 */
function BlzUnitInterruptAttack(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    console.warn('BlzUnitInterruptAttack was called but is not implemented :(');
    return 0;
}
/**
 * native BlzGetUnitCollisionSize takes unit whichUnit returns real
 */
function BlzGetUnitCollisionSize(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    console.warn('BlzGetUnitCollisionSize was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native BlzGetAbilityManaCost takes integer abilId, integer level returns integer
 */
function BlzGetAbilityManaCost(C, L) {
    let abilId = lauxlib_1.luaL_checkinteger(L, 1);
    let level = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('BlzGetAbilityManaCost was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native BlzGetAbilityCooldown takes integer abilId, integer level returns real
 */
function BlzGetAbilityCooldown(C, L) {
    let abilId = lauxlib_1.luaL_checkinteger(L, 1);
    let level = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('BlzGetAbilityCooldown was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native BlzSetUnitAbilityCooldown takes unit whichUnit, integer abilId, integer level, real cooldown returns nothing
 */
function BlzSetUnitAbilityCooldown(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let abilId = lauxlib_1.luaL_checkinteger(L, 2);
    let level = lauxlib_1.luaL_checkinteger(L, 3);
    let cooldown = lauxlib_1.luaL_checknumber(L, 4);
    console.warn('BlzSetUnitAbilityCooldown was called but is not implemented :(');
    return 0;
}
/**
 * native BlzGetUnitAbilityCooldown takes unit whichUnit, integer abilId, integer level returns real
 */
function BlzGetUnitAbilityCooldown(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let abilId = lauxlib_1.luaL_checkinteger(L, 2);
    let level = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('BlzGetUnitAbilityCooldown was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native BlzGetUnitAbilityCooldownRemaining takes unit whichUnit, integer abilId returns real
 */
function BlzGetUnitAbilityCooldownRemaining(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let abilId = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('BlzGetUnitAbilityCooldownRemaining was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native BlzEndUnitAbilityCooldown takes unit whichUnit, integer abilCode returns nothing
 */
function BlzEndUnitAbilityCooldown(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let abilCode = lauxlib_1.luaL_checkinteger(L, 2);
    console.warn('BlzEndUnitAbilityCooldown was called but is not implemented :(');
    return 0;
}
/**
 * native BlzGetUnitAbilityManaCost takes unit whichUnit, integer abilId, integer level returns integer
 */
function BlzGetUnitAbilityManaCost(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let abilId = lauxlib_1.luaL_checkinteger(L, 2);
    let level = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('BlzGetUnitAbilityManaCost was called but is not implemented :(');
    lua_1.lua_pushinteger(L, 0);
    return 1;
}
/**
 * native BlzSetUnitAbilityManaCost takes unit whichUnit, integer abilId, integer level, integer manaCost returns nothing
 */
function BlzSetUnitAbilityManaCost(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    let abilId = lauxlib_1.luaL_checkinteger(L, 2);
    let level = lauxlib_1.luaL_checkinteger(L, 3);
    let manaCost = lauxlib_1.luaL_checkinteger(L, 4);
    console.warn('BlzSetUnitAbilityManaCost was called but is not implemented :(');
    return 0;
}
/**
 * native BlzGetLocalUnitZ takes unit whichUnit returns real
 */
function BlzGetLocalUnitZ(C, L) {
    let whichUnit = lua_1.lua_touserdata(L, 1);
    console.warn('BlzGetLocalUnitZ was called but is not implemented :(');
    lua_1.lua_pushnumber(L, 0);
    return 1;
}
/**
 * native BlzDecPlayerTechResearched takes player whichPlayer, integer techid, integer levels returns nothing
 */
function BlzDecPlayerTechResearched(C, L) {
    let whichPlayer = lua_1.lua_touserdata(L, 1);
    let techid = lauxlib_1.luaL_checkinteger(L, 2);
    let levels = lauxlib_1.luaL_checkinteger(L, 3);
    console.warn('BlzDecPlayerTechResearched was called but is not implemented :(');
    return 0;
}
/**
 * native BlzSetEventDamage takes real damage returns nothing
 */
function BlzSetEventDamage(C, L) {
    let damage = lauxlib_1.luaL_checknumber(L, 1);
    console.warn('BlzSetEventDamage was called but is not implemented :(');
    return 0;
}
function bindNatives(C) {
    let L = C.L;
    lua_1.lua_register(L, 'ConvertRace', ConvertRace.bind(null, C));
    lua_1.lua_register(L, 'ConvertAllianceType', ConvertAllianceType.bind(null, C));
    lua_1.lua_register(L, 'ConvertRacePref', ConvertRacePref.bind(null, C));
    lua_1.lua_register(L, 'ConvertIGameState', ConvertIGameState.bind(null, C));
    lua_1.lua_register(L, 'ConvertFGameState', ConvertFGameState.bind(null, C));
    lua_1.lua_register(L, 'ConvertPlayerState', ConvertPlayerState.bind(null, C));
    lua_1.lua_register(L, 'ConvertPlayerScore', ConvertPlayerScore.bind(null, C));
    lua_1.lua_register(L, 'ConvertPlayerGameResult', ConvertPlayerGameResult.bind(null, C));
    lua_1.lua_register(L, 'ConvertUnitState', ConvertUnitState.bind(null, C));
    lua_1.lua_register(L, 'ConvertAIDifficulty', ConvertAIDifficulty.bind(null, C));
    lua_1.lua_register(L, 'ConvertGameEvent', ConvertGameEvent.bind(null, C));
    lua_1.lua_register(L, 'ConvertPlayerEvent', ConvertPlayerEvent.bind(null, C));
    lua_1.lua_register(L, 'ConvertPlayerUnitEvent', ConvertPlayerUnitEvent.bind(null, C));
    lua_1.lua_register(L, 'ConvertWidgetEvent', ConvertWidgetEvent.bind(null, C));
    lua_1.lua_register(L, 'ConvertDialogEvent', ConvertDialogEvent.bind(null, C));
    lua_1.lua_register(L, 'ConvertUnitEvent', ConvertUnitEvent.bind(null, C));
    lua_1.lua_register(L, 'ConvertLimitOp', ConvertLimitOp.bind(null, C));
    lua_1.lua_register(L, 'ConvertUnitType', ConvertUnitType.bind(null, C));
    lua_1.lua_register(L, 'ConvertGameSpeed', ConvertGameSpeed.bind(null, C));
    lua_1.lua_register(L, 'ConvertPlacement', ConvertPlacement.bind(null, C));
    lua_1.lua_register(L, 'ConvertStartLocPrio', ConvertStartLocPrio.bind(null, C));
    lua_1.lua_register(L, 'ConvertGameDifficulty', ConvertGameDifficulty.bind(null, C));
    lua_1.lua_register(L, 'ConvertGameType', ConvertGameType.bind(null, C));
    lua_1.lua_register(L, 'ConvertMapFlag', ConvertMapFlag.bind(null, C));
    lua_1.lua_register(L, 'ConvertMapVisibility', ConvertMapVisibility.bind(null, C));
    lua_1.lua_register(L, 'ConvertMapSetting', ConvertMapSetting.bind(null, C));
    lua_1.lua_register(L, 'ConvertMapDensity', ConvertMapDensity.bind(null, C));
    lua_1.lua_register(L, 'ConvertMapControl', ConvertMapControl.bind(null, C));
    lua_1.lua_register(L, 'ConvertPlayerColor', ConvertPlayerColor.bind(null, C));
    lua_1.lua_register(L, 'ConvertPlayerSlotState', ConvertPlayerSlotState.bind(null, C));
    lua_1.lua_register(L, 'ConvertVolumeGroup', ConvertVolumeGroup.bind(null, C));
    lua_1.lua_register(L, 'ConvertCameraField', ConvertCameraField.bind(null, C));
    lua_1.lua_register(L, 'ConvertBlendMode', ConvertBlendMode.bind(null, C));
    lua_1.lua_register(L, 'ConvertRarityControl', ConvertRarityControl.bind(null, C));
    lua_1.lua_register(L, 'ConvertTexMapFlags', ConvertTexMapFlags.bind(null, C));
    lua_1.lua_register(L, 'ConvertFogState', ConvertFogState.bind(null, C));
    lua_1.lua_register(L, 'ConvertEffectType', ConvertEffectType.bind(null, C));
    lua_1.lua_register(L, 'ConvertVersion', ConvertVersion.bind(null, C));
    lua_1.lua_register(L, 'ConvertItemType', ConvertItemType.bind(null, C));
    lua_1.lua_register(L, 'ConvertAttackType', ConvertAttackType.bind(null, C));
    lua_1.lua_register(L, 'ConvertDamageType', ConvertDamageType.bind(null, C));
    lua_1.lua_register(L, 'ConvertWeaponType', ConvertWeaponType.bind(null, C));
    lua_1.lua_register(L, 'ConvertSoundType', ConvertSoundType.bind(null, C));
    lua_1.lua_register(L, 'ConvertPathingType', ConvertPathingType.bind(null, C));
    lua_1.lua_register(L, 'ConvertMouseButtonType', ConvertMouseButtonType.bind(null, C));
    lua_1.lua_register(L, 'OrderId', OrderId.bind(null, C));
    lua_1.lua_register(L, 'OrderId2String', OrderId2String.bind(null, C));
    lua_1.lua_register(L, 'UnitId', UnitId.bind(null, C));
    lua_1.lua_register(L, 'UnitId2String', UnitId2String.bind(null, C));
    lua_1.lua_register(L, 'AbilityId', AbilityId.bind(null, C));
    lua_1.lua_register(L, 'AbilityId2String', AbilityId2String.bind(null, C));
    lua_1.lua_register(L, 'GetObjectName', GetObjectName.bind(null, C));
    lua_1.lua_register(L, 'GetBJMaxPlayers', GetBJMaxPlayers.bind(null, C));
    lua_1.lua_register(L, 'GetBJPlayerNeutralVictim', GetBJPlayerNeutralVictim.bind(null, C));
    lua_1.lua_register(L, 'GetBJPlayerNeutralExtra', GetBJPlayerNeutralExtra.bind(null, C));
    lua_1.lua_register(L, 'GetBJMaxPlayerSlots', GetBJMaxPlayerSlots.bind(null, C));
    lua_1.lua_register(L, 'GetPlayerNeutralPassive', GetPlayerNeutralPassive.bind(null, C));
    lua_1.lua_register(L, 'GetPlayerNeutralAggressive', GetPlayerNeutralAggressive.bind(null, C));
    lua_1.lua_register(L, 'Deg2Rad', Deg2Rad.bind(null, C));
    lua_1.lua_register(L, 'Rad2Deg', Rad2Deg.bind(null, C));
    lua_1.lua_register(L, 'Sin', Sin.bind(null, C));
    lua_1.lua_register(L, 'Cos', Cos.bind(null, C));
    lua_1.lua_register(L, 'Tan', Tan.bind(null, C));
    lua_1.lua_register(L, 'Asin', Asin.bind(null, C));
    lua_1.lua_register(L, 'Acos', Acos.bind(null, C));
    lua_1.lua_register(L, 'Atan', Atan.bind(null, C));
    lua_1.lua_register(L, 'Atan2', Atan2.bind(null, C));
    lua_1.lua_register(L, 'SquareRoot', SquareRoot.bind(null, C));
    lua_1.lua_register(L, 'Pow', Pow.bind(null, C));
    lua_1.lua_register(L, 'I2R', I2R.bind(null, C));
    lua_1.lua_register(L, 'R2I', R2I.bind(null, C));
    lua_1.lua_register(L, 'I2S', I2S.bind(null, C));
    lua_1.lua_register(L, 'R2S', R2S.bind(null, C));
    lua_1.lua_register(L, 'R2SW', R2SW.bind(null, C));
    lua_1.lua_register(L, 'S2I', S2I.bind(null, C));
    lua_1.lua_register(L, 'S2R', S2R.bind(null, C));
    lua_1.lua_register(L, 'GetHandleId', GetHandleId.bind(null, C));
    lua_1.lua_register(L, 'SubString', SubString.bind(null, C));
    lua_1.lua_register(L, 'StringLength', StringLength.bind(null, C));
    lua_1.lua_register(L, 'StringCase', StringCase.bind(null, C));
    lua_1.lua_register(L, 'StringHash', StringHash.bind(null, C));
    lua_1.lua_register(L, 'GetLocalizedString', GetLocalizedString.bind(null, C));
    lua_1.lua_register(L, 'GetLocalizedHotkey', GetLocalizedHotkey.bind(null, C));
    lua_1.lua_register(L, 'SetMapName', SetMapName.bind(null, C));
    lua_1.lua_register(L, 'SetMapDescription', SetMapDescription.bind(null, C));
    lua_1.lua_register(L, 'SetTeams', SetTeams.bind(null, C));
    lua_1.lua_register(L, 'SetPlayers', SetPlayers.bind(null, C));
    lua_1.lua_register(L, 'DefineStartLocation', DefineStartLocation.bind(null, C));
    lua_1.lua_register(L, 'DefineStartLocationLoc', DefineStartLocationLoc.bind(null, C));
    lua_1.lua_register(L, 'SetStartLocPrioCount', SetStartLocPrioCount.bind(null, C));
    lua_1.lua_register(L, 'SetStartLocPrio', SetStartLocPrio.bind(null, C));
    lua_1.lua_register(L, 'GetStartLocPrioSlot', GetStartLocPrioSlot.bind(null, C));
    lua_1.lua_register(L, 'GetStartLocPrio', GetStartLocPrio.bind(null, C));
    lua_1.lua_register(L, 'SetGameTypeSupported', SetGameTypeSupported.bind(null, C));
    lua_1.lua_register(L, 'SetMapFlag', SetMapFlag.bind(null, C));
    lua_1.lua_register(L, 'SetGamePlacement', SetGamePlacement.bind(null, C));
    lua_1.lua_register(L, 'SetGameSpeed', SetGameSpeed.bind(null, C));
    lua_1.lua_register(L, 'SetGameDifficulty', SetGameDifficulty.bind(null, C));
    lua_1.lua_register(L, 'SetResourceDensity', SetResourceDensity.bind(null, C));
    lua_1.lua_register(L, 'SetCreatureDensity', SetCreatureDensity.bind(null, C));
    lua_1.lua_register(L, 'GetTeams', GetTeams.bind(null, C));
    lua_1.lua_register(L, 'GetPlayers', GetPlayers.bind(null, C));
    lua_1.lua_register(L, 'IsGameTypeSupported', IsGameTypeSupported.bind(null, C));
    lua_1.lua_register(L, 'GetGameTypeSelected', GetGameTypeSelected.bind(null, C));
    lua_1.lua_register(L, 'IsMapFlagSet', IsMapFlagSet.bind(null, C));
    lua_1.lua_register(L, 'GetGamePlacement', GetGamePlacement.bind(null, C));
    lua_1.lua_register(L, 'GetGameSpeed', GetGameSpeed.bind(null, C));
    lua_1.lua_register(L, 'GetGameDifficulty', GetGameDifficulty.bind(null, C));
    lua_1.lua_register(L, 'GetResourceDensity', GetResourceDensity.bind(null, C));
    lua_1.lua_register(L, 'GetCreatureDensity', GetCreatureDensity.bind(null, C));
    lua_1.lua_register(L, 'GetStartLocationX', GetStartLocationX.bind(null, C));
    lua_1.lua_register(L, 'GetStartLocationY', GetStartLocationY.bind(null, C));
    lua_1.lua_register(L, 'GetStartLocationLoc', GetStartLocationLoc.bind(null, C));
    lua_1.lua_register(L, 'SetPlayerTeam', SetPlayerTeam.bind(null, C));
    lua_1.lua_register(L, 'SetPlayerStartLocation', SetPlayerStartLocation.bind(null, C));
    lua_1.lua_register(L, 'ForcePlayerStartLocation', ForcePlayerStartLocation.bind(null, C));
    lua_1.lua_register(L, 'SetPlayerColor', SetPlayerColor.bind(null, C));
    lua_1.lua_register(L, 'SetPlayerAlliance', SetPlayerAlliance.bind(null, C));
    lua_1.lua_register(L, 'SetPlayerTaxRate', SetPlayerTaxRate.bind(null, C));
    lua_1.lua_register(L, 'SetPlayerRacePreference', SetPlayerRacePreference.bind(null, C));
    lua_1.lua_register(L, 'SetPlayerRaceSelectable', SetPlayerRaceSelectable.bind(null, C));
    lua_1.lua_register(L, 'SetPlayerController', SetPlayerController.bind(null, C));
    lua_1.lua_register(L, 'SetPlayerName', SetPlayerName.bind(null, C));
    lua_1.lua_register(L, 'SetPlayerOnScoreScreen', SetPlayerOnScoreScreen.bind(null, C));
    lua_1.lua_register(L, 'GetPlayerTeam', GetPlayerTeam.bind(null, C));
    lua_1.lua_register(L, 'GetPlayerStartLocation', GetPlayerStartLocation.bind(null, C));
    lua_1.lua_register(L, 'GetPlayerColor', GetPlayerColor.bind(null, C));
    lua_1.lua_register(L, 'GetPlayerSelectable', GetPlayerSelectable.bind(null, C));
    lua_1.lua_register(L, 'GetPlayerController', GetPlayerController.bind(null, C));
    lua_1.lua_register(L, 'GetPlayerSlotState', GetPlayerSlotState.bind(null, C));
    lua_1.lua_register(L, 'GetPlayerTaxRate', GetPlayerTaxRate.bind(null, C));
    lua_1.lua_register(L, 'IsPlayerRacePrefSet', IsPlayerRacePrefSet.bind(null, C));
    lua_1.lua_register(L, 'GetPlayerName', GetPlayerName.bind(null, C));
    lua_1.lua_register(L, 'CreateTimer', CreateTimer.bind(null, C));
    lua_1.lua_register(L, 'DestroyTimer', DestroyTimer.bind(null, C));
    lua_1.lua_register(L, 'TimerStart', TimerStart.bind(null, C));
    lua_1.lua_register(L, 'TimerGetElapsed', TimerGetElapsed.bind(null, C));
    lua_1.lua_register(L, 'TimerGetRemaining', TimerGetRemaining.bind(null, C));
    lua_1.lua_register(L, 'TimerGetTimeout', TimerGetTimeout.bind(null, C));
    lua_1.lua_register(L, 'PauseTimer', PauseTimer.bind(null, C));
    lua_1.lua_register(L, 'ResumeTimer', ResumeTimer.bind(null, C));
    lua_1.lua_register(L, 'GetExpiredTimer', GetExpiredTimer.bind(null, C));
    lua_1.lua_register(L, 'CreateGroup', CreateGroup.bind(null, C));
    lua_1.lua_register(L, 'DestroyGroup', DestroyGroup.bind(null, C));
    lua_1.lua_register(L, 'GroupAddUnit', GroupAddUnit.bind(null, C));
    lua_1.lua_register(L, 'GroupRemoveUnit', GroupRemoveUnit.bind(null, C));
    lua_1.lua_register(L, 'GroupClear', GroupClear.bind(null, C));
    lua_1.lua_register(L, 'GroupEnumUnitsOfType', GroupEnumUnitsOfType.bind(null, C));
    lua_1.lua_register(L, 'GroupEnumUnitsOfPlayer', GroupEnumUnitsOfPlayer.bind(null, C));
    lua_1.lua_register(L, 'GroupEnumUnitsOfTypeCounted', GroupEnumUnitsOfTypeCounted.bind(null, C));
    lua_1.lua_register(L, 'GroupEnumUnitsInRect', GroupEnumUnitsInRect.bind(null, C));
    lua_1.lua_register(L, 'GroupEnumUnitsInRectCounted', GroupEnumUnitsInRectCounted.bind(null, C));
    lua_1.lua_register(L, 'GroupEnumUnitsInRange', GroupEnumUnitsInRange.bind(null, C));
    lua_1.lua_register(L, 'GroupEnumUnitsInRangeOfLoc', GroupEnumUnitsInRangeOfLoc.bind(null, C));
    lua_1.lua_register(L, 'GroupEnumUnitsInRangeCounted', GroupEnumUnitsInRangeCounted.bind(null, C));
    lua_1.lua_register(L, 'GroupEnumUnitsInRangeOfLocCounted', GroupEnumUnitsInRangeOfLocCounted.bind(null, C));
    lua_1.lua_register(L, 'GroupEnumUnitsSelected', GroupEnumUnitsSelected.bind(null, C));
    lua_1.lua_register(L, 'GroupImmediateOrder', GroupImmediateOrder.bind(null, C));
    lua_1.lua_register(L, 'GroupImmediateOrderById', GroupImmediateOrderById.bind(null, C));
    lua_1.lua_register(L, 'GroupPointOrder', GroupPointOrder.bind(null, C));
    lua_1.lua_register(L, 'GroupPointOrderLoc', GroupPointOrderLoc.bind(null, C));
    lua_1.lua_register(L, 'GroupPointOrderById', GroupPointOrderById.bind(null, C));
    lua_1.lua_register(L, 'GroupPointOrderByIdLoc', GroupPointOrderByIdLoc.bind(null, C));
    lua_1.lua_register(L, 'GroupTargetOrder', GroupTargetOrder.bind(null, C));
    lua_1.lua_register(L, 'GroupTargetOrderById', GroupTargetOrderById.bind(null, C));
    lua_1.lua_register(L, 'ForGroup', ForGroup.bind(null, C));
    lua_1.lua_register(L, 'FirstOfGroup', FirstOfGroup.bind(null, C));
    lua_1.lua_register(L, 'CreateForce', CreateForce.bind(null, C));
    lua_1.lua_register(L, 'DestroyForce', DestroyForce.bind(null, C));
    lua_1.lua_register(L, 'ForceAddPlayer', ForceAddPlayer.bind(null, C));
    lua_1.lua_register(L, 'ForceRemovePlayer', ForceRemovePlayer.bind(null, C));
    lua_1.lua_register(L, 'ForceClear', ForceClear.bind(null, C));
    lua_1.lua_register(L, 'ForceEnumPlayers', ForceEnumPlayers.bind(null, C));
    lua_1.lua_register(L, 'ForceEnumPlayersCounted', ForceEnumPlayersCounted.bind(null, C));
    lua_1.lua_register(L, 'ForceEnumAllies', ForceEnumAllies.bind(null, C));
    lua_1.lua_register(L, 'ForceEnumEnemies', ForceEnumEnemies.bind(null, C));
    lua_1.lua_register(L, 'ForForce', ForForce.bind(null, C));
    lua_1.lua_register(L, 'Rect', Rect.bind(null, C));
    lua_1.lua_register(L, 'RectFromLoc', RectFromLoc.bind(null, C));
    lua_1.lua_register(L, 'RemoveRect', RemoveRect.bind(null, C));
    lua_1.lua_register(L, 'SetRect', SetRect.bind(null, C));
    lua_1.lua_register(L, 'SetRectFromLoc', SetRectFromLoc.bind(null, C));
    lua_1.lua_register(L, 'MoveRectTo', MoveRectTo.bind(null, C));
    lua_1.lua_register(L, 'MoveRectToLoc', MoveRectToLoc.bind(null, C));
    lua_1.lua_register(L, 'GetRectCenterX', GetRectCenterX.bind(null, C));
    lua_1.lua_register(L, 'GetRectCenterY', GetRectCenterY.bind(null, C));
    lua_1.lua_register(L, 'GetRectMinX', GetRectMinX.bind(null, C));
    lua_1.lua_register(L, 'GetRectMinY', GetRectMinY.bind(null, C));
    lua_1.lua_register(L, 'GetRectMaxX', GetRectMaxX.bind(null, C));
    lua_1.lua_register(L, 'GetRectMaxY', GetRectMaxY.bind(null, C));
    lua_1.lua_register(L, 'CreateRegion', CreateRegion.bind(null, C));
    lua_1.lua_register(L, 'RemoveRegion', RemoveRegion.bind(null, C));
    lua_1.lua_register(L, 'RegionAddRect', RegionAddRect.bind(null, C));
    lua_1.lua_register(L, 'RegionClearRect', RegionClearRect.bind(null, C));
    lua_1.lua_register(L, 'RegionAddCell', RegionAddCell.bind(null, C));
    lua_1.lua_register(L, 'RegionAddCellAtLoc', RegionAddCellAtLoc.bind(null, C));
    lua_1.lua_register(L, 'RegionClearCell', RegionClearCell.bind(null, C));
    lua_1.lua_register(L, 'RegionClearCellAtLoc', RegionClearCellAtLoc.bind(null, C));
    lua_1.lua_register(L, 'Location', Location.bind(null, C));
    lua_1.lua_register(L, 'RemoveLocation', RemoveLocation.bind(null, C));
    lua_1.lua_register(L, 'MoveLocation', MoveLocation.bind(null, C));
    lua_1.lua_register(L, 'GetLocationX', GetLocationX.bind(null, C));
    lua_1.lua_register(L, 'GetLocationY', GetLocationY.bind(null, C));
    lua_1.lua_register(L, 'GetLocationZ', GetLocationZ.bind(null, C));
    lua_1.lua_register(L, 'IsUnitInRegion', IsUnitInRegion.bind(null, C));
    lua_1.lua_register(L, 'IsPointInRegion', IsPointInRegion.bind(null, C));
    lua_1.lua_register(L, 'IsLocationInRegion', IsLocationInRegion.bind(null, C));
    lua_1.lua_register(L, 'GetWorldBounds', GetWorldBounds.bind(null, C));
    lua_1.lua_register(L, 'CreateTrigger', CreateTrigger.bind(null, C));
    lua_1.lua_register(L, 'DestroyTrigger', DestroyTrigger.bind(null, C));
    lua_1.lua_register(L, 'ResetTrigger', ResetTrigger.bind(null, C));
    lua_1.lua_register(L, 'EnableTrigger', EnableTrigger.bind(null, C));
    lua_1.lua_register(L, 'DisableTrigger', DisableTrigger.bind(null, C));
    lua_1.lua_register(L, 'IsTriggerEnabled', IsTriggerEnabled.bind(null, C));
    lua_1.lua_register(L, 'TriggerWaitOnSleeps', TriggerWaitOnSleeps.bind(null, C));
    lua_1.lua_register(L, 'IsTriggerWaitOnSleeps', IsTriggerWaitOnSleeps.bind(null, C));
    lua_1.lua_register(L, 'GetFilterUnit', GetFilterUnit.bind(null, C));
    lua_1.lua_register(L, 'GetEnumUnit', GetEnumUnit.bind(null, C));
    lua_1.lua_register(L, 'GetFilterDestructable', GetFilterDestructable.bind(null, C));
    lua_1.lua_register(L, 'GetEnumDestructable', GetEnumDestructable.bind(null, C));
    lua_1.lua_register(L, 'GetFilterItem', GetFilterItem.bind(null, C));
    lua_1.lua_register(L, 'GetEnumItem', GetEnumItem.bind(null, C));
    lua_1.lua_register(L, 'GetFilterPlayer', GetFilterPlayer.bind(null, C));
    lua_1.lua_register(L, 'GetEnumPlayer', GetEnumPlayer.bind(null, C));
    lua_1.lua_register(L, 'GetTriggeringTrigger', GetTriggeringTrigger.bind(null, C));
    lua_1.lua_register(L, 'GetTriggerEventId', GetTriggerEventId.bind(null, C));
    lua_1.lua_register(L, 'GetTriggerEvalCount', GetTriggerEvalCount.bind(null, C));
    lua_1.lua_register(L, 'GetTriggerExecCount', GetTriggerExecCount.bind(null, C));
    lua_1.lua_register(L, 'ExecuteFunc', ExecuteFunc.bind(null, C));
    lua_1.lua_register(L, 'And', And.bind(null, C));
    lua_1.lua_register(L, 'Or', Or.bind(null, C));
    lua_1.lua_register(L, 'Not', Not.bind(null, C));
    lua_1.lua_register(L, 'Condition', Condition.bind(null, C));
    lua_1.lua_register(L, 'DestroyCondition', DestroyCondition.bind(null, C));
    lua_1.lua_register(L, 'Filter', Filter.bind(null, C));
    lua_1.lua_register(L, 'DestroyFilter', DestroyFilter.bind(null, C));
    lua_1.lua_register(L, 'DestroyBoolExpr', DestroyBoolExpr.bind(null, C));
    lua_1.lua_register(L, 'TriggerRegisterVariableEvent', TriggerRegisterVariableEvent.bind(null, C));
    lua_1.lua_register(L, 'TriggerRegisterTimerEvent', TriggerRegisterTimerEvent.bind(null, C));
    lua_1.lua_register(L, 'TriggerRegisterTimerExpireEvent', TriggerRegisterTimerExpireEvent.bind(null, C));
    lua_1.lua_register(L, 'TriggerRegisterGameStateEvent', TriggerRegisterGameStateEvent.bind(null, C));
    lua_1.lua_register(L, 'TriggerRegisterDialogEvent', TriggerRegisterDialogEvent.bind(null, C));
    lua_1.lua_register(L, 'TriggerRegisterDialogButtonEvent', TriggerRegisterDialogButtonEvent.bind(null, C));
    lua_1.lua_register(L, 'GetEventGameState', GetEventGameState.bind(null, C));
    lua_1.lua_register(L, 'TriggerRegisterGameEvent', TriggerRegisterGameEvent.bind(null, C));
    lua_1.lua_register(L, 'GetWinningPlayer', GetWinningPlayer.bind(null, C));
    lua_1.lua_register(L, 'TriggerRegisterEnterRegion', TriggerRegisterEnterRegion.bind(null, C));
    lua_1.lua_register(L, 'GetTriggeringRegion', GetTriggeringRegion.bind(null, C));
    lua_1.lua_register(L, 'GetEnteringUnit', GetEnteringUnit.bind(null, C));
    lua_1.lua_register(L, 'TriggerRegisterLeaveRegion', TriggerRegisterLeaveRegion.bind(null, C));
    lua_1.lua_register(L, 'GetLeavingUnit', GetLeavingUnit.bind(null, C));
    lua_1.lua_register(L, 'TriggerRegisterTrackableHitEvent', TriggerRegisterTrackableHitEvent.bind(null, C));
    lua_1.lua_register(L, 'TriggerRegisterTrackableTrackEvent', TriggerRegisterTrackableTrackEvent.bind(null, C));
    lua_1.lua_register(L, 'GetTriggeringTrackable', GetTriggeringTrackable.bind(null, C));
    lua_1.lua_register(L, 'GetClickedButton', GetClickedButton.bind(null, C));
    lua_1.lua_register(L, 'GetClickedDialog', GetClickedDialog.bind(null, C));
    lua_1.lua_register(L, 'GetTournamentFinishSoonTimeRemaining', GetTournamentFinishSoonTimeRemaining.bind(null, C));
    lua_1.lua_register(L, 'GetTournamentFinishNowRule', GetTournamentFinishNowRule.bind(null, C));
    lua_1.lua_register(L, 'GetTournamentFinishNowPlayer', GetTournamentFinishNowPlayer.bind(null, C));
    lua_1.lua_register(L, 'GetTournamentScore', GetTournamentScore.bind(null, C));
    lua_1.lua_register(L, 'GetSaveBasicFilename', GetSaveBasicFilename.bind(null, C));
    lua_1.lua_register(L, 'TriggerRegisterPlayerEvent', TriggerRegisterPlayerEvent.bind(null, C));
    lua_1.lua_register(L, 'GetTriggerPlayer', GetTriggerPlayer.bind(null, C));
    lua_1.lua_register(L, 'TriggerRegisterPlayerUnitEvent', TriggerRegisterPlayerUnitEvent.bind(null, C));
    lua_1.lua_register(L, 'GetLevelingUnit', GetLevelingUnit.bind(null, C));
    lua_1.lua_register(L, 'GetLearningUnit', GetLearningUnit.bind(null, C));
    lua_1.lua_register(L, 'GetLearnedSkill', GetLearnedSkill.bind(null, C));
    lua_1.lua_register(L, 'GetLearnedSkillLevel', GetLearnedSkillLevel.bind(null, C));
    lua_1.lua_register(L, 'GetRevivableUnit', GetRevivableUnit.bind(null, C));
    lua_1.lua_register(L, 'GetRevivingUnit', GetRevivingUnit.bind(null, C));
    lua_1.lua_register(L, 'GetAttacker', GetAttacker.bind(null, C));
    lua_1.lua_register(L, 'GetRescuer', GetRescuer.bind(null, C));
    lua_1.lua_register(L, 'GetDyingUnit', GetDyingUnit.bind(null, C));
    lua_1.lua_register(L, 'GetKillingUnit', GetKillingUnit.bind(null, C));
    lua_1.lua_register(L, 'GetDecayingUnit', GetDecayingUnit.bind(null, C));
    lua_1.lua_register(L, 'GetConstructingStructure', GetConstructingStructure.bind(null, C));
    lua_1.lua_register(L, 'GetCancelledStructure', GetCancelledStructure.bind(null, C));
    lua_1.lua_register(L, 'GetConstructedStructure', GetConstructedStructure.bind(null, C));
    lua_1.lua_register(L, 'GetResearchingUnit', GetResearchingUnit.bind(null, C));
    lua_1.lua_register(L, 'GetResearched', GetResearched.bind(null, C));
    lua_1.lua_register(L, 'GetTrainedUnitType', GetTrainedUnitType.bind(null, C));
    lua_1.lua_register(L, 'GetTrainedUnit', GetTrainedUnit.bind(null, C));
    lua_1.lua_register(L, 'GetDetectedUnit', GetDetectedUnit.bind(null, C));
    lua_1.lua_register(L, 'GetSummoningUnit', GetSummoningUnit.bind(null, C));
    lua_1.lua_register(L, 'GetSummonedUnit', GetSummonedUnit.bind(null, C));
    lua_1.lua_register(L, 'GetTransportUnit', GetTransportUnit.bind(null, C));
    lua_1.lua_register(L, 'GetLoadedUnit', GetLoadedUnit.bind(null, C));
    lua_1.lua_register(L, 'GetSellingUnit', GetSellingUnit.bind(null, C));
    lua_1.lua_register(L, 'GetSoldUnit', GetSoldUnit.bind(null, C));
    lua_1.lua_register(L, 'GetBuyingUnit', GetBuyingUnit.bind(null, C));
    lua_1.lua_register(L, 'GetSoldItem', GetSoldItem.bind(null, C));
    lua_1.lua_register(L, 'GetChangingUnit', GetChangingUnit.bind(null, C));
    lua_1.lua_register(L, 'GetChangingUnitPrevOwner', GetChangingUnitPrevOwner.bind(null, C));
    lua_1.lua_register(L, 'GetManipulatingUnit', GetManipulatingUnit.bind(null, C));
    lua_1.lua_register(L, 'GetManipulatedItem', GetManipulatedItem.bind(null, C));
    lua_1.lua_register(L, 'GetOrderedUnit', GetOrderedUnit.bind(null, C));
    lua_1.lua_register(L, 'GetIssuedOrderId', GetIssuedOrderId.bind(null, C));
    lua_1.lua_register(L, 'GetOrderPointX', GetOrderPointX.bind(null, C));
    lua_1.lua_register(L, 'GetOrderPointY', GetOrderPointY.bind(null, C));
    lua_1.lua_register(L, 'GetOrderPointLoc', GetOrderPointLoc.bind(null, C));
    lua_1.lua_register(L, 'GetOrderTarget', GetOrderTarget.bind(null, C));
    lua_1.lua_register(L, 'GetOrderTargetDestructable', GetOrderTargetDestructable.bind(null, C));
    lua_1.lua_register(L, 'GetOrderTargetItem', GetOrderTargetItem.bind(null, C));
    lua_1.lua_register(L, 'GetOrderTargetUnit', GetOrderTargetUnit.bind(null, C));
    lua_1.lua_register(L, 'GetSpellAbilityUnit', GetSpellAbilityUnit.bind(null, C));
    lua_1.lua_register(L, 'GetSpellAbilityId', GetSpellAbilityId.bind(null, C));
    lua_1.lua_register(L, 'GetSpellAbility', GetSpellAbility.bind(null, C));
    lua_1.lua_register(L, 'GetSpellTargetLoc', GetSpellTargetLoc.bind(null, C));
    lua_1.lua_register(L, 'GetSpellTargetX', GetSpellTargetX.bind(null, C));
    lua_1.lua_register(L, 'GetSpellTargetY', GetSpellTargetY.bind(null, C));
    lua_1.lua_register(L, 'GetSpellTargetDestructable', GetSpellTargetDestructable.bind(null, C));
    lua_1.lua_register(L, 'GetSpellTargetItem', GetSpellTargetItem.bind(null, C));
    lua_1.lua_register(L, 'GetSpellTargetUnit', GetSpellTargetUnit.bind(null, C));
    lua_1.lua_register(L, 'TriggerRegisterPlayerAllianceChange', TriggerRegisterPlayerAllianceChange.bind(null, C));
    lua_1.lua_register(L, 'TriggerRegisterPlayerStateEvent', TriggerRegisterPlayerStateEvent.bind(null, C));
    lua_1.lua_register(L, 'GetEventPlayerState', GetEventPlayerState.bind(null, C));
    lua_1.lua_register(L, 'TriggerRegisterPlayerChatEvent', TriggerRegisterPlayerChatEvent.bind(null, C));
    lua_1.lua_register(L, 'GetEventPlayerChatString', GetEventPlayerChatString.bind(null, C));
    lua_1.lua_register(L, 'GetEventPlayerChatStringMatched', GetEventPlayerChatStringMatched.bind(null, C));
    lua_1.lua_register(L, 'TriggerRegisterDeathEvent', TriggerRegisterDeathEvent.bind(null, C));
    lua_1.lua_register(L, 'GetTriggerUnit', GetTriggerUnit.bind(null, C));
    lua_1.lua_register(L, 'TriggerRegisterUnitStateEvent', TriggerRegisterUnitStateEvent.bind(null, C));
    lua_1.lua_register(L, 'GetEventUnitState', GetEventUnitState.bind(null, C));
    lua_1.lua_register(L, 'TriggerRegisterUnitEvent', TriggerRegisterUnitEvent.bind(null, C));
    lua_1.lua_register(L, 'GetEventDamage', GetEventDamage.bind(null, C));
    lua_1.lua_register(L, 'GetEventDamageSource', GetEventDamageSource.bind(null, C));
    lua_1.lua_register(L, 'GetEventDetectingPlayer', GetEventDetectingPlayer.bind(null, C));
    lua_1.lua_register(L, 'TriggerRegisterFilterUnitEvent', TriggerRegisterFilterUnitEvent.bind(null, C));
    lua_1.lua_register(L, 'GetEventTargetUnit', GetEventTargetUnit.bind(null, C));
    lua_1.lua_register(L, 'TriggerRegisterUnitInRange', TriggerRegisterUnitInRange.bind(null, C));
    lua_1.lua_register(L, 'TriggerAddCondition', TriggerAddCondition.bind(null, C));
    lua_1.lua_register(L, 'TriggerRemoveCondition', TriggerRemoveCondition.bind(null, C));
    lua_1.lua_register(L, 'TriggerClearConditions', TriggerClearConditions.bind(null, C));
    lua_1.lua_register(L, 'TriggerAddAction', TriggerAddAction.bind(null, C));
    lua_1.lua_register(L, 'TriggerRemoveAction', TriggerRemoveAction.bind(null, C));
    lua_1.lua_register(L, 'TriggerClearActions', TriggerClearActions.bind(null, C));
    lua_1.lua_register(L, 'TriggerSleepAction', TriggerSleepAction.bind(null, C));
    lua_1.lua_register(L, 'TriggerWaitForSound', TriggerWaitForSound.bind(null, C));
    lua_1.lua_register(L, 'TriggerEvaluate', TriggerEvaluate.bind(null, C));
    lua_1.lua_register(L, 'TriggerExecute', TriggerExecute.bind(null, C));
    lua_1.lua_register(L, 'TriggerExecuteWait', TriggerExecuteWait.bind(null, C));
    lua_1.lua_register(L, 'TriggerSyncStart', TriggerSyncStart.bind(null, C));
    lua_1.lua_register(L, 'TriggerSyncReady', TriggerSyncReady.bind(null, C));
    lua_1.lua_register(L, 'GetWidgetLife', GetWidgetLife.bind(null, C));
    lua_1.lua_register(L, 'SetWidgetLife', SetWidgetLife.bind(null, C));
    lua_1.lua_register(L, 'GetWidgetX', GetWidgetX.bind(null, C));
    lua_1.lua_register(L, 'GetWidgetY', GetWidgetY.bind(null, C));
    lua_1.lua_register(L, 'GetTriggerWidget', GetTriggerWidget.bind(null, C));
    lua_1.lua_register(L, 'CreateDestructable', CreateDestructable.bind(null, C));
    lua_1.lua_register(L, 'CreateDestructableZ', CreateDestructableZ.bind(null, C));
    lua_1.lua_register(L, 'CreateDeadDestructable', CreateDeadDestructable.bind(null, C));
    lua_1.lua_register(L, 'CreateDeadDestructableZ', CreateDeadDestructableZ.bind(null, C));
    lua_1.lua_register(L, 'RemoveDestructable', RemoveDestructable.bind(null, C));
    lua_1.lua_register(L, 'KillDestructable', KillDestructable.bind(null, C));
    lua_1.lua_register(L, 'SetDestructableInvulnerable', SetDestructableInvulnerable.bind(null, C));
    lua_1.lua_register(L, 'IsDestructableInvulnerable', IsDestructableInvulnerable.bind(null, C));
    lua_1.lua_register(L, 'EnumDestructablesInRect', EnumDestructablesInRect.bind(null, C));
    lua_1.lua_register(L, 'GetDestructableTypeId', GetDestructableTypeId.bind(null, C));
    lua_1.lua_register(L, 'GetDestructableX', GetDestructableX.bind(null, C));
    lua_1.lua_register(L, 'GetDestructableY', GetDestructableY.bind(null, C));
    lua_1.lua_register(L, 'SetDestructableLife', SetDestructableLife.bind(null, C));
    lua_1.lua_register(L, 'GetDestructableLife', GetDestructableLife.bind(null, C));
    lua_1.lua_register(L, 'SetDestructableMaxLife', SetDestructableMaxLife.bind(null, C));
    lua_1.lua_register(L, 'GetDestructableMaxLife', GetDestructableMaxLife.bind(null, C));
    lua_1.lua_register(L, 'DestructableRestoreLife', DestructableRestoreLife.bind(null, C));
    lua_1.lua_register(L, 'QueueDestructableAnimation', QueueDestructableAnimation.bind(null, C));
    lua_1.lua_register(L, 'SetDestructableAnimation', SetDestructableAnimation.bind(null, C));
    lua_1.lua_register(L, 'SetDestructableAnimationSpeed', SetDestructableAnimationSpeed.bind(null, C));
    lua_1.lua_register(L, 'ShowDestructable', ShowDestructable.bind(null, C));
    lua_1.lua_register(L, 'GetDestructableOccluderHeight', GetDestructableOccluderHeight.bind(null, C));
    lua_1.lua_register(L, 'SetDestructableOccluderHeight', SetDestructableOccluderHeight.bind(null, C));
    lua_1.lua_register(L, 'GetDestructableName', GetDestructableName.bind(null, C));
    lua_1.lua_register(L, 'GetTriggerDestructable', GetTriggerDestructable.bind(null, C));
    lua_1.lua_register(L, 'CreateItem', CreateItem.bind(null, C));
    lua_1.lua_register(L, 'RemoveItem', RemoveItem.bind(null, C));
    lua_1.lua_register(L, 'GetItemPlayer', GetItemPlayer.bind(null, C));
    lua_1.lua_register(L, 'GetItemTypeId', GetItemTypeId.bind(null, C));
    lua_1.lua_register(L, 'GetItemX', GetItemX.bind(null, C));
    lua_1.lua_register(L, 'GetItemY', GetItemY.bind(null, C));
    lua_1.lua_register(L, 'SetItemPosition', SetItemPosition.bind(null, C));
    lua_1.lua_register(L, 'SetItemDropOnDeath', SetItemDropOnDeath.bind(null, C));
    lua_1.lua_register(L, 'SetItemDroppable', SetItemDroppable.bind(null, C));
    lua_1.lua_register(L, 'SetItemPawnable', SetItemPawnable.bind(null, C));
    lua_1.lua_register(L, 'SetItemPlayer', SetItemPlayer.bind(null, C));
    lua_1.lua_register(L, 'SetItemInvulnerable', SetItemInvulnerable.bind(null, C));
    lua_1.lua_register(L, 'IsItemInvulnerable', IsItemInvulnerable.bind(null, C));
    lua_1.lua_register(L, 'SetItemVisible', SetItemVisible.bind(null, C));
    lua_1.lua_register(L, 'IsItemVisible', IsItemVisible.bind(null, C));
    lua_1.lua_register(L, 'IsItemOwned', IsItemOwned.bind(null, C));
    lua_1.lua_register(L, 'IsItemPowerup', IsItemPowerup.bind(null, C));
    lua_1.lua_register(L, 'IsItemSellable', IsItemSellable.bind(null, C));
    lua_1.lua_register(L, 'IsItemPawnable', IsItemPawnable.bind(null, C));
    lua_1.lua_register(L, 'IsItemIdPowerup', IsItemIdPowerup.bind(null, C));
    lua_1.lua_register(L, 'IsItemIdSellable', IsItemIdSellable.bind(null, C));
    lua_1.lua_register(L, 'IsItemIdPawnable', IsItemIdPawnable.bind(null, C));
    lua_1.lua_register(L, 'EnumItemsInRect', EnumItemsInRect.bind(null, C));
    lua_1.lua_register(L, 'GetItemLevel', GetItemLevel.bind(null, C));
    lua_1.lua_register(L, 'GetItemType', GetItemType.bind(null, C));
    lua_1.lua_register(L, 'SetItemDropID', SetItemDropID.bind(null, C));
    lua_1.lua_register(L, 'GetItemName', GetItemName.bind(null, C));
    lua_1.lua_register(L, 'GetItemCharges', GetItemCharges.bind(null, C));
    lua_1.lua_register(L, 'SetItemCharges', SetItemCharges.bind(null, C));
    lua_1.lua_register(L, 'GetItemUserData', GetItemUserData.bind(null, C));
    lua_1.lua_register(L, 'SetItemUserData', SetItemUserData.bind(null, C));
    lua_1.lua_register(L, 'CreateUnit', CreateUnit.bind(null, C));
    lua_1.lua_register(L, 'CreateUnitByName', CreateUnitByName.bind(null, C));
    lua_1.lua_register(L, 'CreateUnitAtLoc', CreateUnitAtLoc.bind(null, C));
    lua_1.lua_register(L, 'CreateUnitAtLocByName', CreateUnitAtLocByName.bind(null, C));
    lua_1.lua_register(L, 'CreateCorpse', CreateCorpse.bind(null, C));
    lua_1.lua_register(L, 'KillUnit', KillUnit.bind(null, C));
    lua_1.lua_register(L, 'RemoveUnit', RemoveUnit.bind(null, C));
    lua_1.lua_register(L, 'ShowUnit', ShowUnit.bind(null, C));
    lua_1.lua_register(L, 'SetUnitState', SetUnitState.bind(null, C));
    lua_1.lua_register(L, 'SetUnitX', SetUnitX.bind(null, C));
    lua_1.lua_register(L, 'SetUnitY', SetUnitY.bind(null, C));
    lua_1.lua_register(L, 'SetUnitPosition', SetUnitPosition.bind(null, C));
    lua_1.lua_register(L, 'SetUnitPositionLoc', SetUnitPositionLoc.bind(null, C));
    lua_1.lua_register(L, 'SetUnitFacing', SetUnitFacing.bind(null, C));
    lua_1.lua_register(L, 'SetUnitFacingTimed', SetUnitFacingTimed.bind(null, C));
    lua_1.lua_register(L, 'SetUnitMoveSpeed', SetUnitMoveSpeed.bind(null, C));
    lua_1.lua_register(L, 'SetUnitFlyHeight', SetUnitFlyHeight.bind(null, C));
    lua_1.lua_register(L, 'SetUnitTurnSpeed', SetUnitTurnSpeed.bind(null, C));
    lua_1.lua_register(L, 'SetUnitPropWindow', SetUnitPropWindow.bind(null, C));
    lua_1.lua_register(L, 'SetUnitAcquireRange', SetUnitAcquireRange.bind(null, C));
    lua_1.lua_register(L, 'SetUnitCreepGuard', SetUnitCreepGuard.bind(null, C));
    lua_1.lua_register(L, 'GetUnitAcquireRange', GetUnitAcquireRange.bind(null, C));
    lua_1.lua_register(L, 'GetUnitTurnSpeed', GetUnitTurnSpeed.bind(null, C));
    lua_1.lua_register(L, 'GetUnitPropWindow', GetUnitPropWindow.bind(null, C));
    lua_1.lua_register(L, 'GetUnitFlyHeight', GetUnitFlyHeight.bind(null, C));
    lua_1.lua_register(L, 'GetUnitDefaultAcquireRange', GetUnitDefaultAcquireRange.bind(null, C));
    lua_1.lua_register(L, 'GetUnitDefaultTurnSpeed', GetUnitDefaultTurnSpeed.bind(null, C));
    lua_1.lua_register(L, 'GetUnitDefaultPropWindow', GetUnitDefaultPropWindow.bind(null, C));
    lua_1.lua_register(L, 'GetUnitDefaultFlyHeight', GetUnitDefaultFlyHeight.bind(null, C));
    lua_1.lua_register(L, 'SetUnitOwner', SetUnitOwner.bind(null, C));
    lua_1.lua_register(L, 'SetUnitColor', SetUnitColor.bind(null, C));
    lua_1.lua_register(L, 'SetUnitScale', SetUnitScale.bind(null, C));
    lua_1.lua_register(L, 'SetUnitTimeScale', SetUnitTimeScale.bind(null, C));
    lua_1.lua_register(L, 'SetUnitBlendTime', SetUnitBlendTime.bind(null, C));
    lua_1.lua_register(L, 'SetUnitVertexColor', SetUnitVertexColor.bind(null, C));
    lua_1.lua_register(L, 'QueueUnitAnimation', QueueUnitAnimation.bind(null, C));
    lua_1.lua_register(L, 'SetUnitAnimation', SetUnitAnimation.bind(null, C));
    lua_1.lua_register(L, 'SetUnitAnimationByIndex', SetUnitAnimationByIndex.bind(null, C));
    lua_1.lua_register(L, 'SetUnitAnimationWithRarity', SetUnitAnimationWithRarity.bind(null, C));
    lua_1.lua_register(L, 'AddUnitAnimationProperties', AddUnitAnimationProperties.bind(null, C));
    lua_1.lua_register(L, 'SetUnitLookAt', SetUnitLookAt.bind(null, C));
    lua_1.lua_register(L, 'ResetUnitLookAt', ResetUnitLookAt.bind(null, C));
    lua_1.lua_register(L, 'SetUnitRescuable', SetUnitRescuable.bind(null, C));
    lua_1.lua_register(L, 'SetUnitRescueRange', SetUnitRescueRange.bind(null, C));
    lua_1.lua_register(L, 'SetHeroStr', SetHeroStr.bind(null, C));
    lua_1.lua_register(L, 'SetHeroAgi', SetHeroAgi.bind(null, C));
    lua_1.lua_register(L, 'SetHeroInt', SetHeroInt.bind(null, C));
    lua_1.lua_register(L, 'GetHeroStr', GetHeroStr.bind(null, C));
    lua_1.lua_register(L, 'GetHeroAgi', GetHeroAgi.bind(null, C));
    lua_1.lua_register(L, 'GetHeroInt', GetHeroInt.bind(null, C));
    lua_1.lua_register(L, 'UnitStripHeroLevel', UnitStripHeroLevel.bind(null, C));
    lua_1.lua_register(L, 'GetHeroXP', GetHeroXP.bind(null, C));
    lua_1.lua_register(L, 'SetHeroXP', SetHeroXP.bind(null, C));
    lua_1.lua_register(L, 'GetHeroSkillPoints', GetHeroSkillPoints.bind(null, C));
    lua_1.lua_register(L, 'UnitModifySkillPoints', UnitModifySkillPoints.bind(null, C));
    lua_1.lua_register(L, 'AddHeroXP', AddHeroXP.bind(null, C));
    lua_1.lua_register(L, 'SetHeroLevel', SetHeroLevel.bind(null, C));
    lua_1.lua_register(L, 'GetHeroLevel', GetHeroLevel.bind(null, C));
    lua_1.lua_register(L, 'GetUnitLevel', GetUnitLevel.bind(null, C));
    lua_1.lua_register(L, 'GetHeroProperName', GetHeroProperName.bind(null, C));
    lua_1.lua_register(L, 'SuspendHeroXP', SuspendHeroXP.bind(null, C));
    lua_1.lua_register(L, 'IsSuspendedXP', IsSuspendedXP.bind(null, C));
    lua_1.lua_register(L, 'SelectHeroSkill', SelectHeroSkill.bind(null, C));
    lua_1.lua_register(L, 'GetUnitAbilityLevel', GetUnitAbilityLevel.bind(null, C));
    lua_1.lua_register(L, 'DecUnitAbilityLevel', DecUnitAbilityLevel.bind(null, C));
    lua_1.lua_register(L, 'IncUnitAbilityLevel', IncUnitAbilityLevel.bind(null, C));
    lua_1.lua_register(L, 'SetUnitAbilityLevel', SetUnitAbilityLevel.bind(null, C));
    lua_1.lua_register(L, 'ReviveHero', ReviveHero.bind(null, C));
    lua_1.lua_register(L, 'ReviveHeroLoc', ReviveHeroLoc.bind(null, C));
    lua_1.lua_register(L, 'SetUnitExploded', SetUnitExploded.bind(null, C));
    lua_1.lua_register(L, 'SetUnitInvulnerable', SetUnitInvulnerable.bind(null, C));
    lua_1.lua_register(L, 'PauseUnit', PauseUnit.bind(null, C));
    lua_1.lua_register(L, 'IsUnitPaused', IsUnitPaused.bind(null, C));
    lua_1.lua_register(L, 'SetUnitPathing', SetUnitPathing.bind(null, C));
    lua_1.lua_register(L, 'ClearSelection', ClearSelection.bind(null, C));
    lua_1.lua_register(L, 'SelectUnit', SelectUnit.bind(null, C));
    lua_1.lua_register(L, 'GetUnitPointValue', GetUnitPointValue.bind(null, C));
    lua_1.lua_register(L, 'GetUnitPointValueByType', GetUnitPointValueByType.bind(null, C));
    lua_1.lua_register(L, 'UnitAddItem', UnitAddItem.bind(null, C));
    lua_1.lua_register(L, 'UnitAddItemById', UnitAddItemById.bind(null, C));
    lua_1.lua_register(L, 'UnitAddItemToSlotById', UnitAddItemToSlotById.bind(null, C));
    lua_1.lua_register(L, 'UnitRemoveItem', UnitRemoveItem.bind(null, C));
    lua_1.lua_register(L, 'UnitRemoveItemFromSlot', UnitRemoveItemFromSlot.bind(null, C));
    lua_1.lua_register(L, 'UnitHasItem', UnitHasItem.bind(null, C));
    lua_1.lua_register(L, 'UnitItemInSlot', UnitItemInSlot.bind(null, C));
    lua_1.lua_register(L, 'UnitInventorySize', UnitInventorySize.bind(null, C));
    lua_1.lua_register(L, 'UnitDropItemPoint', UnitDropItemPoint.bind(null, C));
    lua_1.lua_register(L, 'UnitDropItemSlot', UnitDropItemSlot.bind(null, C));
    lua_1.lua_register(L, 'UnitDropItemTarget', UnitDropItemTarget.bind(null, C));
    lua_1.lua_register(L, 'UnitUseItem', UnitUseItem.bind(null, C));
    lua_1.lua_register(L, 'UnitUseItemPoint', UnitUseItemPoint.bind(null, C));
    lua_1.lua_register(L, 'UnitUseItemTarget', UnitUseItemTarget.bind(null, C));
    lua_1.lua_register(L, 'GetUnitX', GetUnitX.bind(null, C));
    lua_1.lua_register(L, 'GetUnitY', GetUnitY.bind(null, C));
    lua_1.lua_register(L, 'GetUnitLoc', GetUnitLoc.bind(null, C));
    lua_1.lua_register(L, 'GetUnitFacing', GetUnitFacing.bind(null, C));
    lua_1.lua_register(L, 'GetUnitMoveSpeed', GetUnitMoveSpeed.bind(null, C));
    lua_1.lua_register(L, 'GetUnitDefaultMoveSpeed', GetUnitDefaultMoveSpeed.bind(null, C));
    lua_1.lua_register(L, 'GetUnitState', GetUnitState.bind(null, C));
    lua_1.lua_register(L, 'GetOwningPlayer', GetOwningPlayer.bind(null, C));
    lua_1.lua_register(L, 'GetUnitTypeId', GetUnitTypeId.bind(null, C));
    lua_1.lua_register(L, 'GetUnitRace', GetUnitRace.bind(null, C));
    lua_1.lua_register(L, 'GetUnitName', GetUnitName.bind(null, C));
    lua_1.lua_register(L, 'GetUnitFoodUsed', GetUnitFoodUsed.bind(null, C));
    lua_1.lua_register(L, 'GetUnitFoodMade', GetUnitFoodMade.bind(null, C));
    lua_1.lua_register(L, 'GetFoodMade', GetFoodMade.bind(null, C));
    lua_1.lua_register(L, 'GetFoodUsed', GetFoodUsed.bind(null, C));
    lua_1.lua_register(L, 'SetUnitUseFood', SetUnitUseFood.bind(null, C));
    lua_1.lua_register(L, 'GetUnitRallyPoint', GetUnitRallyPoint.bind(null, C));
    lua_1.lua_register(L, 'GetUnitRallyUnit', GetUnitRallyUnit.bind(null, C));
    lua_1.lua_register(L, 'GetUnitRallyDestructable', GetUnitRallyDestructable.bind(null, C));
    lua_1.lua_register(L, 'IsUnitInGroup', IsUnitInGroup.bind(null, C));
    lua_1.lua_register(L, 'IsUnitInForce', IsUnitInForce.bind(null, C));
    lua_1.lua_register(L, 'IsUnitOwnedByPlayer', IsUnitOwnedByPlayer.bind(null, C));
    lua_1.lua_register(L, 'IsUnitAlly', IsUnitAlly.bind(null, C));
    lua_1.lua_register(L, 'IsUnitEnemy', IsUnitEnemy.bind(null, C));
    lua_1.lua_register(L, 'IsUnitVisible', IsUnitVisible.bind(null, C));
    lua_1.lua_register(L, 'IsUnitDetected', IsUnitDetected.bind(null, C));
    lua_1.lua_register(L, 'IsUnitInvisible', IsUnitInvisible.bind(null, C));
    lua_1.lua_register(L, 'IsUnitFogged', IsUnitFogged.bind(null, C));
    lua_1.lua_register(L, 'IsUnitMasked', IsUnitMasked.bind(null, C));
    lua_1.lua_register(L, 'IsUnitSelected', IsUnitSelected.bind(null, C));
    lua_1.lua_register(L, 'IsUnitRace', IsUnitRace.bind(null, C));
    lua_1.lua_register(L, 'IsUnitType', IsUnitType.bind(null, C));
    lua_1.lua_register(L, 'IsUnit', IsUnit.bind(null, C));
    lua_1.lua_register(L, 'IsUnitInRange', IsUnitInRange.bind(null, C));
    lua_1.lua_register(L, 'IsUnitInRangeXY', IsUnitInRangeXY.bind(null, C));
    lua_1.lua_register(L, 'IsUnitInRangeLoc', IsUnitInRangeLoc.bind(null, C));
    lua_1.lua_register(L, 'IsUnitHidden', IsUnitHidden.bind(null, C));
    lua_1.lua_register(L, 'IsUnitIllusion', IsUnitIllusion.bind(null, C));
    lua_1.lua_register(L, 'IsUnitInTransport', IsUnitInTransport.bind(null, C));
    lua_1.lua_register(L, 'IsUnitLoaded', IsUnitLoaded.bind(null, C));
    lua_1.lua_register(L, 'IsHeroUnitId', IsHeroUnitId.bind(null, C));
    lua_1.lua_register(L, 'IsUnitIdType', IsUnitIdType.bind(null, C));
    lua_1.lua_register(L, 'UnitShareVision', UnitShareVision.bind(null, C));
    lua_1.lua_register(L, 'UnitSuspendDecay', UnitSuspendDecay.bind(null, C));
    lua_1.lua_register(L, 'UnitAddType', UnitAddType.bind(null, C));
    lua_1.lua_register(L, 'UnitRemoveType', UnitRemoveType.bind(null, C));
    lua_1.lua_register(L, 'UnitAddAbility', UnitAddAbility.bind(null, C));
    lua_1.lua_register(L, 'UnitRemoveAbility', UnitRemoveAbility.bind(null, C));
    lua_1.lua_register(L, 'UnitMakeAbilityPermanent', UnitMakeAbilityPermanent.bind(null, C));
    lua_1.lua_register(L, 'UnitRemoveBuffs', UnitRemoveBuffs.bind(null, C));
    lua_1.lua_register(L, 'UnitRemoveBuffsEx', UnitRemoveBuffsEx.bind(null, C));
    lua_1.lua_register(L, 'UnitHasBuffsEx', UnitHasBuffsEx.bind(null, C));
    lua_1.lua_register(L, 'UnitCountBuffsEx', UnitCountBuffsEx.bind(null, C));
    lua_1.lua_register(L, 'UnitAddSleep', UnitAddSleep.bind(null, C));
    lua_1.lua_register(L, 'UnitCanSleep', UnitCanSleep.bind(null, C));
    lua_1.lua_register(L, 'UnitAddSleepPerm', UnitAddSleepPerm.bind(null, C));
    lua_1.lua_register(L, 'UnitCanSleepPerm', UnitCanSleepPerm.bind(null, C));
    lua_1.lua_register(L, 'UnitIsSleeping', UnitIsSleeping.bind(null, C));
    lua_1.lua_register(L, 'UnitWakeUp', UnitWakeUp.bind(null, C));
    lua_1.lua_register(L, 'UnitApplyTimedLife', UnitApplyTimedLife.bind(null, C));
    lua_1.lua_register(L, 'UnitIgnoreAlarm', UnitIgnoreAlarm.bind(null, C));
    lua_1.lua_register(L, 'UnitIgnoreAlarmToggled', UnitIgnoreAlarmToggled.bind(null, C));
    lua_1.lua_register(L, 'UnitResetCooldown', UnitResetCooldown.bind(null, C));
    lua_1.lua_register(L, 'UnitSetConstructionProgress', UnitSetConstructionProgress.bind(null, C));
    lua_1.lua_register(L, 'UnitSetUpgradeProgress', UnitSetUpgradeProgress.bind(null, C));
    lua_1.lua_register(L, 'UnitPauseTimedLife', UnitPauseTimedLife.bind(null, C));
    lua_1.lua_register(L, 'UnitSetUsesAltIcon', UnitSetUsesAltIcon.bind(null, C));
    lua_1.lua_register(L, 'UnitDamagePoint', UnitDamagePoint.bind(null, C));
    lua_1.lua_register(L, 'UnitDamageTarget', UnitDamageTarget.bind(null, C));
    lua_1.lua_register(L, 'IssueImmediateOrder', IssueImmediateOrder.bind(null, C));
    lua_1.lua_register(L, 'IssueImmediateOrderById', IssueImmediateOrderById.bind(null, C));
    lua_1.lua_register(L, 'IssuePointOrder', IssuePointOrder.bind(null, C));
    lua_1.lua_register(L, 'IssuePointOrderLoc', IssuePointOrderLoc.bind(null, C));
    lua_1.lua_register(L, 'IssuePointOrderById', IssuePointOrderById.bind(null, C));
    lua_1.lua_register(L, 'IssuePointOrderByIdLoc', IssuePointOrderByIdLoc.bind(null, C));
    lua_1.lua_register(L, 'IssueTargetOrder', IssueTargetOrder.bind(null, C));
    lua_1.lua_register(L, 'IssueTargetOrderById', IssueTargetOrderById.bind(null, C));
    lua_1.lua_register(L, 'IssueInstantPointOrder', IssueInstantPointOrder.bind(null, C));
    lua_1.lua_register(L, 'IssueInstantPointOrderById', IssueInstantPointOrderById.bind(null, C));
    lua_1.lua_register(L, 'IssueInstantTargetOrder', IssueInstantTargetOrder.bind(null, C));
    lua_1.lua_register(L, 'IssueInstantTargetOrderById', IssueInstantTargetOrderById.bind(null, C));
    lua_1.lua_register(L, 'IssueBuildOrder', IssueBuildOrder.bind(null, C));
    lua_1.lua_register(L, 'IssueBuildOrderById', IssueBuildOrderById.bind(null, C));
    lua_1.lua_register(L, 'IssueNeutralImmediateOrder', IssueNeutralImmediateOrder.bind(null, C));
    lua_1.lua_register(L, 'IssueNeutralImmediateOrderById', IssueNeutralImmediateOrderById.bind(null, C));
    lua_1.lua_register(L, 'IssueNeutralPointOrder', IssueNeutralPointOrder.bind(null, C));
    lua_1.lua_register(L, 'IssueNeutralPointOrderById', IssueNeutralPointOrderById.bind(null, C));
    lua_1.lua_register(L, 'IssueNeutralTargetOrder', IssueNeutralTargetOrder.bind(null, C));
    lua_1.lua_register(L, 'IssueNeutralTargetOrderById', IssueNeutralTargetOrderById.bind(null, C));
    lua_1.lua_register(L, 'GetUnitCurrentOrder', GetUnitCurrentOrder.bind(null, C));
    lua_1.lua_register(L, 'SetResourceAmount', SetResourceAmount.bind(null, C));
    lua_1.lua_register(L, 'AddResourceAmount', AddResourceAmount.bind(null, C));
    lua_1.lua_register(L, 'GetResourceAmount', GetResourceAmount.bind(null, C));
    lua_1.lua_register(L, 'WaygateGetDestinationX', WaygateGetDestinationX.bind(null, C));
    lua_1.lua_register(L, 'WaygateGetDestinationY', WaygateGetDestinationY.bind(null, C));
    lua_1.lua_register(L, 'WaygateSetDestination', WaygateSetDestination.bind(null, C));
    lua_1.lua_register(L, 'WaygateActivate', WaygateActivate.bind(null, C));
    lua_1.lua_register(L, 'WaygateIsActive', WaygateIsActive.bind(null, C));
    lua_1.lua_register(L, 'AddItemToAllStock', AddItemToAllStock.bind(null, C));
    lua_1.lua_register(L, 'AddItemToStock', AddItemToStock.bind(null, C));
    lua_1.lua_register(L, 'AddUnitToAllStock', AddUnitToAllStock.bind(null, C));
    lua_1.lua_register(L, 'AddUnitToStock', AddUnitToStock.bind(null, C));
    lua_1.lua_register(L, 'RemoveItemFromAllStock', RemoveItemFromAllStock.bind(null, C));
    lua_1.lua_register(L, 'RemoveItemFromStock', RemoveItemFromStock.bind(null, C));
    lua_1.lua_register(L, 'RemoveUnitFromAllStock', RemoveUnitFromAllStock.bind(null, C));
    lua_1.lua_register(L, 'RemoveUnitFromStock', RemoveUnitFromStock.bind(null, C));
    lua_1.lua_register(L, 'SetAllItemTypeSlots', SetAllItemTypeSlots.bind(null, C));
    lua_1.lua_register(L, 'SetAllUnitTypeSlots', SetAllUnitTypeSlots.bind(null, C));
    lua_1.lua_register(L, 'SetItemTypeSlots', SetItemTypeSlots.bind(null, C));
    lua_1.lua_register(L, 'SetUnitTypeSlots', SetUnitTypeSlots.bind(null, C));
    lua_1.lua_register(L, 'GetUnitUserData', GetUnitUserData.bind(null, C));
    lua_1.lua_register(L, 'SetUnitUserData', SetUnitUserData.bind(null, C));
    lua_1.lua_register(L, 'Player', Player.bind(null, C));
    lua_1.lua_register(L, 'GetLocalPlayer', GetLocalPlayer.bind(null, C));
    lua_1.lua_register(L, 'IsPlayerAlly', IsPlayerAlly.bind(null, C));
    lua_1.lua_register(L, 'IsPlayerEnemy', IsPlayerEnemy.bind(null, C));
    lua_1.lua_register(L, 'IsPlayerInForce', IsPlayerInForce.bind(null, C));
    lua_1.lua_register(L, 'IsPlayerObserver', IsPlayerObserver.bind(null, C));
    lua_1.lua_register(L, 'IsVisibleToPlayer', IsVisibleToPlayer.bind(null, C));
    lua_1.lua_register(L, 'IsLocationVisibleToPlayer', IsLocationVisibleToPlayer.bind(null, C));
    lua_1.lua_register(L, 'IsFoggedToPlayer', IsFoggedToPlayer.bind(null, C));
    lua_1.lua_register(L, 'IsLocationFoggedToPlayer', IsLocationFoggedToPlayer.bind(null, C));
    lua_1.lua_register(L, 'IsMaskedToPlayer', IsMaskedToPlayer.bind(null, C));
    lua_1.lua_register(L, 'IsLocationMaskedToPlayer', IsLocationMaskedToPlayer.bind(null, C));
    lua_1.lua_register(L, 'GetPlayerRace', GetPlayerRace.bind(null, C));
    lua_1.lua_register(L, 'GetPlayerId', GetPlayerId.bind(null, C));
    lua_1.lua_register(L, 'GetPlayerUnitCount', GetPlayerUnitCount.bind(null, C));
    lua_1.lua_register(L, 'GetPlayerTypedUnitCount', GetPlayerTypedUnitCount.bind(null, C));
    lua_1.lua_register(L, 'GetPlayerStructureCount', GetPlayerStructureCount.bind(null, C));
    lua_1.lua_register(L, 'GetPlayerState', GetPlayerState.bind(null, C));
    lua_1.lua_register(L, 'GetPlayerScore', GetPlayerScore.bind(null, C));
    lua_1.lua_register(L, 'GetPlayerAlliance', GetPlayerAlliance.bind(null, C));
    lua_1.lua_register(L, 'GetPlayerHandicap', GetPlayerHandicap.bind(null, C));
    lua_1.lua_register(L, 'GetPlayerHandicapXP', GetPlayerHandicapXP.bind(null, C));
    lua_1.lua_register(L, 'SetPlayerHandicap', SetPlayerHandicap.bind(null, C));
    lua_1.lua_register(L, 'SetPlayerHandicapXP', SetPlayerHandicapXP.bind(null, C));
    lua_1.lua_register(L, 'SetPlayerTechMaxAllowed', SetPlayerTechMaxAllowed.bind(null, C));
    lua_1.lua_register(L, 'GetPlayerTechMaxAllowed', GetPlayerTechMaxAllowed.bind(null, C));
    lua_1.lua_register(L, 'AddPlayerTechResearched', AddPlayerTechResearched.bind(null, C));
    lua_1.lua_register(L, 'SetPlayerTechResearched', SetPlayerTechResearched.bind(null, C));
    lua_1.lua_register(L, 'GetPlayerTechResearched', GetPlayerTechResearched.bind(null, C));
    lua_1.lua_register(L, 'GetPlayerTechCount', GetPlayerTechCount.bind(null, C));
    lua_1.lua_register(L, 'SetPlayerUnitsOwner', SetPlayerUnitsOwner.bind(null, C));
    lua_1.lua_register(L, 'CripplePlayer', CripplePlayer.bind(null, C));
    lua_1.lua_register(L, 'SetPlayerAbilityAvailable', SetPlayerAbilityAvailable.bind(null, C));
    lua_1.lua_register(L, 'SetPlayerState', SetPlayerState.bind(null, C));
    lua_1.lua_register(L, 'RemovePlayer', RemovePlayer.bind(null, C));
    lua_1.lua_register(L, 'CachePlayerHeroData', CachePlayerHeroData.bind(null, C));
    lua_1.lua_register(L, 'SetFogStateRect', SetFogStateRect.bind(null, C));
    lua_1.lua_register(L, 'SetFogStateRadius', SetFogStateRadius.bind(null, C));
    lua_1.lua_register(L, 'SetFogStateRadiusLoc', SetFogStateRadiusLoc.bind(null, C));
    lua_1.lua_register(L, 'FogMaskEnable', FogMaskEnable.bind(null, C));
    lua_1.lua_register(L, 'IsFogMaskEnabled', IsFogMaskEnabled.bind(null, C));
    lua_1.lua_register(L, 'FogEnable', FogEnable.bind(null, C));
    lua_1.lua_register(L, 'IsFogEnabled', IsFogEnabled.bind(null, C));
    lua_1.lua_register(L, 'CreateFogModifierRect', CreateFogModifierRect.bind(null, C));
    lua_1.lua_register(L, 'CreateFogModifierRadius', CreateFogModifierRadius.bind(null, C));
    lua_1.lua_register(L, 'CreateFogModifierRadiusLoc', CreateFogModifierRadiusLoc.bind(null, C));
    lua_1.lua_register(L, 'DestroyFogModifier', DestroyFogModifier.bind(null, C));
    lua_1.lua_register(L, 'FogModifierStart', FogModifierStart.bind(null, C));
    lua_1.lua_register(L, 'FogModifierStop', FogModifierStop.bind(null, C));
    lua_1.lua_register(L, 'VersionGet', VersionGet.bind(null, C));
    lua_1.lua_register(L, 'VersionCompatible', VersionCompatible.bind(null, C));
    lua_1.lua_register(L, 'VersionSupported', VersionSupported.bind(null, C));
    lua_1.lua_register(L, 'EndGame', EndGame.bind(null, C));
    lua_1.lua_register(L, 'ChangeLevel', ChangeLevel.bind(null, C));
    lua_1.lua_register(L, 'RestartGame', RestartGame.bind(null, C));
    lua_1.lua_register(L, 'ReloadGame', ReloadGame.bind(null, C));
    lua_1.lua_register(L, 'SetCampaignMenuRace', SetCampaignMenuRace.bind(null, C));
    lua_1.lua_register(L, 'SetCampaignMenuRaceEx', SetCampaignMenuRaceEx.bind(null, C));
    lua_1.lua_register(L, 'ForceCampaignSelectScreen', ForceCampaignSelectScreen.bind(null, C));
    lua_1.lua_register(L, 'LoadGame', LoadGame.bind(null, C));
    lua_1.lua_register(L, 'SaveGame', SaveGame.bind(null, C));
    lua_1.lua_register(L, 'RenameSaveDirectory', RenameSaveDirectory.bind(null, C));
    lua_1.lua_register(L, 'RemoveSaveDirectory', RemoveSaveDirectory.bind(null, C));
    lua_1.lua_register(L, 'CopySaveGame', CopySaveGame.bind(null, C));
    lua_1.lua_register(L, 'SaveGameExists', SaveGameExists.bind(null, C));
    lua_1.lua_register(L, 'SyncSelections', SyncSelections.bind(null, C));
    lua_1.lua_register(L, 'SetFloatGameState', SetFloatGameState.bind(null, C));
    lua_1.lua_register(L, 'GetFloatGameState', GetFloatGameState.bind(null, C));
    lua_1.lua_register(L, 'SetIntegerGameState', SetIntegerGameState.bind(null, C));
    lua_1.lua_register(L, 'GetIntegerGameState', GetIntegerGameState.bind(null, C));
    lua_1.lua_register(L, 'SetTutorialCleared', SetTutorialCleared.bind(null, C));
    lua_1.lua_register(L, 'SetMissionAvailable', SetMissionAvailable.bind(null, C));
    lua_1.lua_register(L, 'SetCampaignAvailable', SetCampaignAvailable.bind(null, C));
    lua_1.lua_register(L, 'SetOpCinematicAvailable', SetOpCinematicAvailable.bind(null, C));
    lua_1.lua_register(L, 'SetEdCinematicAvailable', SetEdCinematicAvailable.bind(null, C));
    lua_1.lua_register(L, 'GetDefaultDifficulty', GetDefaultDifficulty.bind(null, C));
    lua_1.lua_register(L, 'SetDefaultDifficulty', SetDefaultDifficulty.bind(null, C));
    lua_1.lua_register(L, 'SetCustomCampaignButtonVisible', SetCustomCampaignButtonVisible.bind(null, C));
    lua_1.lua_register(L, 'GetCustomCampaignButtonVisible', GetCustomCampaignButtonVisible.bind(null, C));
    lua_1.lua_register(L, 'DoNotSaveReplay', DoNotSaveReplay.bind(null, C));
    lua_1.lua_register(L, 'DialogCreate', DialogCreate.bind(null, C));
    lua_1.lua_register(L, 'DialogDestroy', DialogDestroy.bind(null, C));
    lua_1.lua_register(L, 'DialogClear', DialogClear.bind(null, C));
    lua_1.lua_register(L, 'DialogSetMessage', DialogSetMessage.bind(null, C));
    lua_1.lua_register(L, 'DialogAddButton', DialogAddButton.bind(null, C));
    lua_1.lua_register(L, 'DialogAddQuitButton', DialogAddQuitButton.bind(null, C));
    lua_1.lua_register(L, 'DialogDisplay', DialogDisplay.bind(null, C));
    lua_1.lua_register(L, 'ReloadGameCachesFromDisk', ReloadGameCachesFromDisk.bind(null, C));
    lua_1.lua_register(L, 'InitGameCache', InitGameCache.bind(null, C));
    lua_1.lua_register(L, 'SaveGameCache', SaveGameCache.bind(null, C));
    lua_1.lua_register(L, 'StoreInteger', StoreInteger.bind(null, C));
    lua_1.lua_register(L, 'StoreReal', StoreReal.bind(null, C));
    lua_1.lua_register(L, 'StoreBoolean', StoreBoolean.bind(null, C));
    lua_1.lua_register(L, 'StoreUnit', StoreUnit.bind(null, C));
    lua_1.lua_register(L, 'StoreString', StoreString.bind(null, C));
    lua_1.lua_register(L, 'SyncStoredInteger', SyncStoredInteger.bind(null, C));
    lua_1.lua_register(L, 'SyncStoredReal', SyncStoredReal.bind(null, C));
    lua_1.lua_register(L, 'SyncStoredBoolean', SyncStoredBoolean.bind(null, C));
    lua_1.lua_register(L, 'SyncStoredUnit', SyncStoredUnit.bind(null, C));
    lua_1.lua_register(L, 'SyncStoredString', SyncStoredString.bind(null, C));
    lua_1.lua_register(L, 'HaveStoredInteger', HaveStoredInteger.bind(null, C));
    lua_1.lua_register(L, 'HaveStoredReal', HaveStoredReal.bind(null, C));
    lua_1.lua_register(L, 'HaveStoredBoolean', HaveStoredBoolean.bind(null, C));
    lua_1.lua_register(L, 'HaveStoredUnit', HaveStoredUnit.bind(null, C));
    lua_1.lua_register(L, 'HaveStoredString', HaveStoredString.bind(null, C));
    lua_1.lua_register(L, 'FlushGameCache', FlushGameCache.bind(null, C));
    lua_1.lua_register(L, 'FlushStoredMission', FlushStoredMission.bind(null, C));
    lua_1.lua_register(L, 'FlushStoredInteger', FlushStoredInteger.bind(null, C));
    lua_1.lua_register(L, 'FlushStoredReal', FlushStoredReal.bind(null, C));
    lua_1.lua_register(L, 'FlushStoredBoolean', FlushStoredBoolean.bind(null, C));
    lua_1.lua_register(L, 'FlushStoredUnit', FlushStoredUnit.bind(null, C));
    lua_1.lua_register(L, 'FlushStoredString', FlushStoredString.bind(null, C));
    lua_1.lua_register(L, 'GetStoredInteger', GetStoredInteger.bind(null, C));
    lua_1.lua_register(L, 'GetStoredReal', GetStoredReal.bind(null, C));
    lua_1.lua_register(L, 'GetStoredBoolean', GetStoredBoolean.bind(null, C));
    lua_1.lua_register(L, 'GetStoredString', GetStoredString.bind(null, C));
    lua_1.lua_register(L, 'RestoreUnit', RestoreUnit.bind(null, C));
    lua_1.lua_register(L, 'InitHashtable', InitHashtable.bind(null, C));
    lua_1.lua_register(L, 'SaveInteger', SaveInteger.bind(null, C));
    lua_1.lua_register(L, 'SaveReal', SaveReal.bind(null, C));
    lua_1.lua_register(L, 'SaveBoolean', SaveBoolean.bind(null, C));
    lua_1.lua_register(L, 'SaveStr', SaveStr.bind(null, C));
    lua_1.lua_register(L, 'SavePlayerHandle', SavePlayerHandle.bind(null, C));
    lua_1.lua_register(L, 'SaveWidgetHandle', SaveWidgetHandle.bind(null, C));
    lua_1.lua_register(L, 'SaveDestructableHandle', SaveDestructableHandle.bind(null, C));
    lua_1.lua_register(L, 'SaveItemHandle', SaveItemHandle.bind(null, C));
    lua_1.lua_register(L, 'SaveUnitHandle', SaveUnitHandle.bind(null, C));
    lua_1.lua_register(L, 'SaveAbilityHandle', SaveAbilityHandle.bind(null, C));
    lua_1.lua_register(L, 'SaveTimerHandle', SaveTimerHandle.bind(null, C));
    lua_1.lua_register(L, 'SaveTriggerHandle', SaveTriggerHandle.bind(null, C));
    lua_1.lua_register(L, 'SaveTriggerConditionHandle', SaveTriggerConditionHandle.bind(null, C));
    lua_1.lua_register(L, 'SaveTriggerActionHandle', SaveTriggerActionHandle.bind(null, C));
    lua_1.lua_register(L, 'SaveTriggerEventHandle', SaveTriggerEventHandle.bind(null, C));
    lua_1.lua_register(L, 'SaveForceHandle', SaveForceHandle.bind(null, C));
    lua_1.lua_register(L, 'SaveGroupHandle', SaveGroupHandle.bind(null, C));
    lua_1.lua_register(L, 'SaveLocationHandle', SaveLocationHandle.bind(null, C));
    lua_1.lua_register(L, 'SaveRectHandle', SaveRectHandle.bind(null, C));
    lua_1.lua_register(L, 'SaveBooleanExprHandle', SaveBooleanExprHandle.bind(null, C));
    lua_1.lua_register(L, 'SaveSoundHandle', SaveSoundHandle.bind(null, C));
    lua_1.lua_register(L, 'SaveEffectHandle', SaveEffectHandle.bind(null, C));
    lua_1.lua_register(L, 'SaveUnitPoolHandle', SaveUnitPoolHandle.bind(null, C));
    lua_1.lua_register(L, 'SaveItemPoolHandle', SaveItemPoolHandle.bind(null, C));
    lua_1.lua_register(L, 'SaveQuestHandle', SaveQuestHandle.bind(null, C));
    lua_1.lua_register(L, 'SaveQuestItemHandle', SaveQuestItemHandle.bind(null, C));
    lua_1.lua_register(L, 'SaveDefeatConditionHandle', SaveDefeatConditionHandle.bind(null, C));
    lua_1.lua_register(L, 'SaveTimerDialogHandle', SaveTimerDialogHandle.bind(null, C));
    lua_1.lua_register(L, 'SaveLeaderboardHandle', SaveLeaderboardHandle.bind(null, C));
    lua_1.lua_register(L, 'SaveMultiboardHandle', SaveMultiboardHandle.bind(null, C));
    lua_1.lua_register(L, 'SaveMultiboardItemHandle', SaveMultiboardItemHandle.bind(null, C));
    lua_1.lua_register(L, 'SaveTrackableHandle', SaveTrackableHandle.bind(null, C));
    lua_1.lua_register(L, 'SaveDialogHandle', SaveDialogHandle.bind(null, C));
    lua_1.lua_register(L, 'SaveButtonHandle', SaveButtonHandle.bind(null, C));
    lua_1.lua_register(L, 'SaveTextTagHandle', SaveTextTagHandle.bind(null, C));
    lua_1.lua_register(L, 'SaveLightningHandle', SaveLightningHandle.bind(null, C));
    lua_1.lua_register(L, 'SaveImageHandle', SaveImageHandle.bind(null, C));
    lua_1.lua_register(L, 'SaveUbersplatHandle', SaveUbersplatHandle.bind(null, C));
    lua_1.lua_register(L, 'SaveRegionHandle', SaveRegionHandle.bind(null, C));
    lua_1.lua_register(L, 'SaveFogStateHandle', SaveFogStateHandle.bind(null, C));
    lua_1.lua_register(L, 'SaveFogModifierHandle', SaveFogModifierHandle.bind(null, C));
    lua_1.lua_register(L, 'SaveAgentHandle', SaveAgentHandle.bind(null, C));
    lua_1.lua_register(L, 'SaveHashtableHandle', SaveHashtableHandle.bind(null, C));
    lua_1.lua_register(L, 'LoadInteger', LoadInteger.bind(null, C));
    lua_1.lua_register(L, 'LoadReal', LoadReal.bind(null, C));
    lua_1.lua_register(L, 'LoadBoolean', LoadBoolean.bind(null, C));
    lua_1.lua_register(L, 'LoadStr', LoadStr.bind(null, C));
    lua_1.lua_register(L, 'LoadPlayerHandle', LoadPlayerHandle.bind(null, C));
    lua_1.lua_register(L, 'LoadWidgetHandle', LoadWidgetHandle.bind(null, C));
    lua_1.lua_register(L, 'LoadDestructableHandle', LoadDestructableHandle.bind(null, C));
    lua_1.lua_register(L, 'LoadItemHandle', LoadItemHandle.bind(null, C));
    lua_1.lua_register(L, 'LoadUnitHandle', LoadUnitHandle.bind(null, C));
    lua_1.lua_register(L, 'LoadAbilityHandle', LoadAbilityHandle.bind(null, C));
    lua_1.lua_register(L, 'LoadTimerHandle', LoadTimerHandle.bind(null, C));
    lua_1.lua_register(L, 'LoadTriggerHandle', LoadTriggerHandle.bind(null, C));
    lua_1.lua_register(L, 'LoadTriggerConditionHandle', LoadTriggerConditionHandle.bind(null, C));
    lua_1.lua_register(L, 'LoadTriggerActionHandle', LoadTriggerActionHandle.bind(null, C));
    lua_1.lua_register(L, 'LoadTriggerEventHandle', LoadTriggerEventHandle.bind(null, C));
    lua_1.lua_register(L, 'LoadForceHandle', LoadForceHandle.bind(null, C));
    lua_1.lua_register(L, 'LoadGroupHandle', LoadGroupHandle.bind(null, C));
    lua_1.lua_register(L, 'LoadLocationHandle', LoadLocationHandle.bind(null, C));
    lua_1.lua_register(L, 'LoadRectHandle', LoadRectHandle.bind(null, C));
    lua_1.lua_register(L, 'LoadBooleanExprHandle', LoadBooleanExprHandle.bind(null, C));
    lua_1.lua_register(L, 'LoadSoundHandle', LoadSoundHandle.bind(null, C));
    lua_1.lua_register(L, 'LoadEffectHandle', LoadEffectHandle.bind(null, C));
    lua_1.lua_register(L, 'LoadUnitPoolHandle', LoadUnitPoolHandle.bind(null, C));
    lua_1.lua_register(L, 'LoadItemPoolHandle', LoadItemPoolHandle.bind(null, C));
    lua_1.lua_register(L, 'LoadQuestHandle', LoadQuestHandle.bind(null, C));
    lua_1.lua_register(L, 'LoadQuestItemHandle', LoadQuestItemHandle.bind(null, C));
    lua_1.lua_register(L, 'LoadDefeatConditionHandle', LoadDefeatConditionHandle.bind(null, C));
    lua_1.lua_register(L, 'LoadTimerDialogHandle', LoadTimerDialogHandle.bind(null, C));
    lua_1.lua_register(L, 'LoadLeaderboardHandle', LoadLeaderboardHandle.bind(null, C));
    lua_1.lua_register(L, 'LoadMultiboardHandle', LoadMultiboardHandle.bind(null, C));
    lua_1.lua_register(L, 'LoadMultiboardItemHandle', LoadMultiboardItemHandle.bind(null, C));
    lua_1.lua_register(L, 'LoadTrackableHandle', LoadTrackableHandle.bind(null, C));
    lua_1.lua_register(L, 'LoadDialogHandle', LoadDialogHandle.bind(null, C));
    lua_1.lua_register(L, 'LoadButtonHandle', LoadButtonHandle.bind(null, C));
    lua_1.lua_register(L, 'LoadTextTagHandle', LoadTextTagHandle.bind(null, C));
    lua_1.lua_register(L, 'LoadLightningHandle', LoadLightningHandle.bind(null, C));
    lua_1.lua_register(L, 'LoadImageHandle', LoadImageHandle.bind(null, C));
    lua_1.lua_register(L, 'LoadUbersplatHandle', LoadUbersplatHandle.bind(null, C));
    lua_1.lua_register(L, 'LoadRegionHandle', LoadRegionHandle.bind(null, C));
    lua_1.lua_register(L, 'LoadFogStateHandle', LoadFogStateHandle.bind(null, C));
    lua_1.lua_register(L, 'LoadFogModifierHandle', LoadFogModifierHandle.bind(null, C));
    lua_1.lua_register(L, 'LoadHashtableHandle', LoadHashtableHandle.bind(null, C));
    lua_1.lua_register(L, 'HaveSavedInteger', HaveSavedInteger.bind(null, C));
    lua_1.lua_register(L, 'HaveSavedReal', HaveSavedReal.bind(null, C));
    lua_1.lua_register(L, 'HaveSavedBoolean', HaveSavedBoolean.bind(null, C));
    lua_1.lua_register(L, 'HaveSavedString', HaveSavedString.bind(null, C));
    lua_1.lua_register(L, 'HaveSavedHandle', HaveSavedHandle.bind(null, C));
    lua_1.lua_register(L, 'RemoveSavedInteger', RemoveSavedInteger.bind(null, C));
    lua_1.lua_register(L, 'RemoveSavedReal', RemoveSavedReal.bind(null, C));
    lua_1.lua_register(L, 'RemoveSavedBoolean', RemoveSavedBoolean.bind(null, C));
    lua_1.lua_register(L, 'RemoveSavedString', RemoveSavedString.bind(null, C));
    lua_1.lua_register(L, 'RemoveSavedHandle', RemoveSavedHandle.bind(null, C));
    lua_1.lua_register(L, 'FlushParentHashtable', FlushParentHashtable.bind(null, C));
    lua_1.lua_register(L, 'FlushChildHashtable', FlushChildHashtable.bind(null, C));
    lua_1.lua_register(L, 'GetRandomInt', GetRandomInt.bind(null, C));
    lua_1.lua_register(L, 'GetRandomReal', GetRandomReal.bind(null, C));
    lua_1.lua_register(L, 'CreateUnitPool', CreateUnitPool.bind(null, C));
    lua_1.lua_register(L, 'DestroyUnitPool', DestroyUnitPool.bind(null, C));
    lua_1.lua_register(L, 'UnitPoolAddUnitType', UnitPoolAddUnitType.bind(null, C));
    lua_1.lua_register(L, 'UnitPoolRemoveUnitType', UnitPoolRemoveUnitType.bind(null, C));
    lua_1.lua_register(L, 'PlaceRandomUnit', PlaceRandomUnit.bind(null, C));
    lua_1.lua_register(L, 'CreateItemPool', CreateItemPool.bind(null, C));
    lua_1.lua_register(L, 'DestroyItemPool', DestroyItemPool.bind(null, C));
    lua_1.lua_register(L, 'ItemPoolAddItemType', ItemPoolAddItemType.bind(null, C));
    lua_1.lua_register(L, 'ItemPoolRemoveItemType', ItemPoolRemoveItemType.bind(null, C));
    lua_1.lua_register(L, 'PlaceRandomItem', PlaceRandomItem.bind(null, C));
    lua_1.lua_register(L, 'ChooseRandomCreep', ChooseRandomCreep.bind(null, C));
    lua_1.lua_register(L, 'ChooseRandomNPBuilding', ChooseRandomNPBuilding.bind(null, C));
    lua_1.lua_register(L, 'ChooseRandomItem', ChooseRandomItem.bind(null, C));
    lua_1.lua_register(L, 'ChooseRandomItemEx', ChooseRandomItemEx.bind(null, C));
    lua_1.lua_register(L, 'SetRandomSeed', SetRandomSeed.bind(null, C));
    lua_1.lua_register(L, 'SetTerrainFog', SetTerrainFog.bind(null, C));
    lua_1.lua_register(L, 'ResetTerrainFog', ResetTerrainFog.bind(null, C));
    lua_1.lua_register(L, 'SetUnitFog', SetUnitFog.bind(null, C));
    lua_1.lua_register(L, 'SetTerrainFogEx', SetTerrainFogEx.bind(null, C));
    lua_1.lua_register(L, 'DisplayTextToPlayer', DisplayTextToPlayer.bind(null, C));
    lua_1.lua_register(L, 'DisplayTimedTextToPlayer', DisplayTimedTextToPlayer.bind(null, C));
    lua_1.lua_register(L, 'DisplayTimedTextFromPlayer', DisplayTimedTextFromPlayer.bind(null, C));
    lua_1.lua_register(L, 'ClearTextMessages', ClearTextMessages.bind(null, C));
    lua_1.lua_register(L, 'SetDayNightModels', SetDayNightModels.bind(null, C));
    lua_1.lua_register(L, 'SetSkyModel', SetSkyModel.bind(null, C));
    lua_1.lua_register(L, 'EnableUserControl', EnableUserControl.bind(null, C));
    lua_1.lua_register(L, 'EnableUserUI', EnableUserUI.bind(null, C));
    lua_1.lua_register(L, 'SuspendTimeOfDay', SuspendTimeOfDay.bind(null, C));
    lua_1.lua_register(L, 'SetTimeOfDayScale', SetTimeOfDayScale.bind(null, C));
    lua_1.lua_register(L, 'GetTimeOfDayScale', GetTimeOfDayScale.bind(null, C));
    lua_1.lua_register(L, 'ShowInterface', ShowInterface.bind(null, C));
    lua_1.lua_register(L, 'PauseGame', PauseGame.bind(null, C));
    lua_1.lua_register(L, 'UnitAddIndicator', UnitAddIndicator.bind(null, C));
    lua_1.lua_register(L, 'AddIndicator', AddIndicator.bind(null, C));
    lua_1.lua_register(L, 'PingMinimap', PingMinimap.bind(null, C));
    lua_1.lua_register(L, 'PingMinimapEx', PingMinimapEx.bind(null, C));
    lua_1.lua_register(L, 'EnableOcclusion', EnableOcclusion.bind(null, C));
    lua_1.lua_register(L, 'SetIntroShotText', SetIntroShotText.bind(null, C));
    lua_1.lua_register(L, 'SetIntroShotModel', SetIntroShotModel.bind(null, C));
    lua_1.lua_register(L, 'EnableWorldFogBoundary', EnableWorldFogBoundary.bind(null, C));
    lua_1.lua_register(L, 'PlayModelCinematic', PlayModelCinematic.bind(null, C));
    lua_1.lua_register(L, 'PlayCinematic', PlayCinematic.bind(null, C));
    lua_1.lua_register(L, 'ForceUIKey', ForceUIKey.bind(null, C));
    lua_1.lua_register(L, 'ForceUICancel', ForceUICancel.bind(null, C));
    lua_1.lua_register(L, 'DisplayLoadDialog', DisplayLoadDialog.bind(null, C));
    lua_1.lua_register(L, 'SetAltMinimapIcon', SetAltMinimapIcon.bind(null, C));
    lua_1.lua_register(L, 'DisableRestartMission', DisableRestartMission.bind(null, C));
    lua_1.lua_register(L, 'CreateTextTag', CreateTextTag.bind(null, C));
    lua_1.lua_register(L, 'DestroyTextTag', DestroyTextTag.bind(null, C));
    lua_1.lua_register(L, 'SetTextTagText', SetTextTagText.bind(null, C));
    lua_1.lua_register(L, 'SetTextTagPos', SetTextTagPos.bind(null, C));
    lua_1.lua_register(L, 'SetTextTagPosUnit', SetTextTagPosUnit.bind(null, C));
    lua_1.lua_register(L, 'SetTextTagColor', SetTextTagColor.bind(null, C));
    lua_1.lua_register(L, 'SetTextTagVelocity', SetTextTagVelocity.bind(null, C));
    lua_1.lua_register(L, 'SetTextTagVisibility', SetTextTagVisibility.bind(null, C));
    lua_1.lua_register(L, 'SetTextTagSuspended', SetTextTagSuspended.bind(null, C));
    lua_1.lua_register(L, 'SetTextTagPermanent', SetTextTagPermanent.bind(null, C));
    lua_1.lua_register(L, 'SetTextTagAge', SetTextTagAge.bind(null, C));
    lua_1.lua_register(L, 'SetTextTagLifespan', SetTextTagLifespan.bind(null, C));
    lua_1.lua_register(L, 'SetTextTagFadepoint', SetTextTagFadepoint.bind(null, C));
    lua_1.lua_register(L, 'SetReservedLocalHeroButtons', SetReservedLocalHeroButtons.bind(null, C));
    lua_1.lua_register(L, 'GetAllyColorFilterState', GetAllyColorFilterState.bind(null, C));
    lua_1.lua_register(L, 'SetAllyColorFilterState', SetAllyColorFilterState.bind(null, C));
    lua_1.lua_register(L, 'GetCreepCampFilterState', GetCreepCampFilterState.bind(null, C));
    lua_1.lua_register(L, 'SetCreepCampFilterState', SetCreepCampFilterState.bind(null, C));
    lua_1.lua_register(L, 'EnableMinimapFilterButtons', EnableMinimapFilterButtons.bind(null, C));
    lua_1.lua_register(L, 'EnableDragSelect', EnableDragSelect.bind(null, C));
    lua_1.lua_register(L, 'EnablePreSelect', EnablePreSelect.bind(null, C));
    lua_1.lua_register(L, 'EnableSelect', EnableSelect.bind(null, C));
    lua_1.lua_register(L, 'CreateTrackable', CreateTrackable.bind(null, C));
    lua_1.lua_register(L, 'CreateQuest', CreateQuest.bind(null, C));
    lua_1.lua_register(L, 'DestroyQuest', DestroyQuest.bind(null, C));
    lua_1.lua_register(L, 'QuestSetTitle', QuestSetTitle.bind(null, C));
    lua_1.lua_register(L, 'QuestSetDescription', QuestSetDescription.bind(null, C));
    lua_1.lua_register(L, 'QuestSetIconPath', QuestSetIconPath.bind(null, C));
    lua_1.lua_register(L, 'QuestSetRequired', QuestSetRequired.bind(null, C));
    lua_1.lua_register(L, 'QuestSetCompleted', QuestSetCompleted.bind(null, C));
    lua_1.lua_register(L, 'QuestSetDiscovered', QuestSetDiscovered.bind(null, C));
    lua_1.lua_register(L, 'QuestSetFailed', QuestSetFailed.bind(null, C));
    lua_1.lua_register(L, 'QuestSetEnabled', QuestSetEnabled.bind(null, C));
    lua_1.lua_register(L, 'IsQuestRequired', IsQuestRequired.bind(null, C));
    lua_1.lua_register(L, 'IsQuestCompleted', IsQuestCompleted.bind(null, C));
    lua_1.lua_register(L, 'IsQuestDiscovered', IsQuestDiscovered.bind(null, C));
    lua_1.lua_register(L, 'IsQuestFailed', IsQuestFailed.bind(null, C));
    lua_1.lua_register(L, 'IsQuestEnabled', IsQuestEnabled.bind(null, C));
    lua_1.lua_register(L, 'QuestCreateItem', QuestCreateItem.bind(null, C));
    lua_1.lua_register(L, 'QuestItemSetDescription', QuestItemSetDescription.bind(null, C));
    lua_1.lua_register(L, 'QuestItemSetCompleted', QuestItemSetCompleted.bind(null, C));
    lua_1.lua_register(L, 'IsQuestItemCompleted', IsQuestItemCompleted.bind(null, C));
    lua_1.lua_register(L, 'CreateDefeatCondition', CreateDefeatCondition.bind(null, C));
    lua_1.lua_register(L, 'DestroyDefeatCondition', DestroyDefeatCondition.bind(null, C));
    lua_1.lua_register(L, 'DefeatConditionSetDescription', DefeatConditionSetDescription.bind(null, C));
    lua_1.lua_register(L, 'FlashQuestDialogButton', FlashQuestDialogButton.bind(null, C));
    lua_1.lua_register(L, 'ForceQuestDialogUpdate', ForceQuestDialogUpdate.bind(null, C));
    lua_1.lua_register(L, 'CreateTimerDialog', CreateTimerDialog.bind(null, C));
    lua_1.lua_register(L, 'DestroyTimerDialog', DestroyTimerDialog.bind(null, C));
    lua_1.lua_register(L, 'TimerDialogSetTitle', TimerDialogSetTitle.bind(null, C));
    lua_1.lua_register(L, 'TimerDialogSetTitleColor', TimerDialogSetTitleColor.bind(null, C));
    lua_1.lua_register(L, 'TimerDialogSetTimeColor', TimerDialogSetTimeColor.bind(null, C));
    lua_1.lua_register(L, 'TimerDialogSetSpeed', TimerDialogSetSpeed.bind(null, C));
    lua_1.lua_register(L, 'TimerDialogDisplay', TimerDialogDisplay.bind(null, C));
    lua_1.lua_register(L, 'IsTimerDialogDisplayed', IsTimerDialogDisplayed.bind(null, C));
    lua_1.lua_register(L, 'TimerDialogSetRealTimeRemaining', TimerDialogSetRealTimeRemaining.bind(null, C));
    lua_1.lua_register(L, 'CreateLeaderboard', CreateLeaderboard.bind(null, C));
    lua_1.lua_register(L, 'DestroyLeaderboard', DestroyLeaderboard.bind(null, C));
    lua_1.lua_register(L, 'LeaderboardDisplay', LeaderboardDisplay.bind(null, C));
    lua_1.lua_register(L, 'IsLeaderboardDisplayed', IsLeaderboardDisplayed.bind(null, C));
    lua_1.lua_register(L, 'LeaderboardGetItemCount', LeaderboardGetItemCount.bind(null, C));
    lua_1.lua_register(L, 'LeaderboardSetSizeByItemCount', LeaderboardSetSizeByItemCount.bind(null, C));
    lua_1.lua_register(L, 'LeaderboardAddItem', LeaderboardAddItem.bind(null, C));
    lua_1.lua_register(L, 'LeaderboardRemoveItem', LeaderboardRemoveItem.bind(null, C));
    lua_1.lua_register(L, 'LeaderboardRemovePlayerItem', LeaderboardRemovePlayerItem.bind(null, C));
    lua_1.lua_register(L, 'LeaderboardClear', LeaderboardClear.bind(null, C));
    lua_1.lua_register(L, 'LeaderboardSortItemsByValue', LeaderboardSortItemsByValue.bind(null, C));
    lua_1.lua_register(L, 'LeaderboardSortItemsByPlayer', LeaderboardSortItemsByPlayer.bind(null, C));
    lua_1.lua_register(L, 'LeaderboardSortItemsByLabel', LeaderboardSortItemsByLabel.bind(null, C));
    lua_1.lua_register(L, 'LeaderboardHasPlayerItem', LeaderboardHasPlayerItem.bind(null, C));
    lua_1.lua_register(L, 'LeaderboardGetPlayerIndex', LeaderboardGetPlayerIndex.bind(null, C));
    lua_1.lua_register(L, 'LeaderboardSetLabel', LeaderboardSetLabel.bind(null, C));
    lua_1.lua_register(L, 'LeaderboardGetLabelText', LeaderboardGetLabelText.bind(null, C));
    lua_1.lua_register(L, 'PlayerSetLeaderboard', PlayerSetLeaderboard.bind(null, C));
    lua_1.lua_register(L, 'PlayerGetLeaderboard', PlayerGetLeaderboard.bind(null, C));
    lua_1.lua_register(L, 'LeaderboardSetLabelColor', LeaderboardSetLabelColor.bind(null, C));
    lua_1.lua_register(L, 'LeaderboardSetValueColor', LeaderboardSetValueColor.bind(null, C));
    lua_1.lua_register(L, 'LeaderboardSetStyle', LeaderboardSetStyle.bind(null, C));
    lua_1.lua_register(L, 'LeaderboardSetItemValue', LeaderboardSetItemValue.bind(null, C));
    lua_1.lua_register(L, 'LeaderboardSetItemLabel', LeaderboardSetItemLabel.bind(null, C));
    lua_1.lua_register(L, 'LeaderboardSetItemStyle', LeaderboardSetItemStyle.bind(null, C));
    lua_1.lua_register(L, 'LeaderboardSetItemLabelColor', LeaderboardSetItemLabelColor.bind(null, C));
    lua_1.lua_register(L, 'LeaderboardSetItemValueColor', LeaderboardSetItemValueColor.bind(null, C));
    lua_1.lua_register(L, 'CreateMultiboard', CreateMultiboard.bind(null, C));
    lua_1.lua_register(L, 'DestroyMultiboard', DestroyMultiboard.bind(null, C));
    lua_1.lua_register(L, 'MultiboardDisplay', MultiboardDisplay.bind(null, C));
    lua_1.lua_register(L, 'IsMultiboardDisplayed', IsMultiboardDisplayed.bind(null, C));
    lua_1.lua_register(L, 'MultiboardMinimize', MultiboardMinimize.bind(null, C));
    lua_1.lua_register(L, 'IsMultiboardMinimized', IsMultiboardMinimized.bind(null, C));
    lua_1.lua_register(L, 'MultiboardClear', MultiboardClear.bind(null, C));
    lua_1.lua_register(L, 'MultiboardSetTitleText', MultiboardSetTitleText.bind(null, C));
    lua_1.lua_register(L, 'MultiboardGetTitleText', MultiboardGetTitleText.bind(null, C));
    lua_1.lua_register(L, 'MultiboardSetTitleTextColor', MultiboardSetTitleTextColor.bind(null, C));
    lua_1.lua_register(L, 'MultiboardGetRowCount', MultiboardGetRowCount.bind(null, C));
    lua_1.lua_register(L, 'MultiboardGetColumnCount', MultiboardGetColumnCount.bind(null, C));
    lua_1.lua_register(L, 'MultiboardSetColumnCount', MultiboardSetColumnCount.bind(null, C));
    lua_1.lua_register(L, 'MultiboardSetRowCount', MultiboardSetRowCount.bind(null, C));
    lua_1.lua_register(L, 'MultiboardSetItemsStyle', MultiboardSetItemsStyle.bind(null, C));
    lua_1.lua_register(L, 'MultiboardSetItemsValue', MultiboardSetItemsValue.bind(null, C));
    lua_1.lua_register(L, 'MultiboardSetItemsValueColor', MultiboardSetItemsValueColor.bind(null, C));
    lua_1.lua_register(L, 'MultiboardSetItemsWidth', MultiboardSetItemsWidth.bind(null, C));
    lua_1.lua_register(L, 'MultiboardSetItemsIcon', MultiboardSetItemsIcon.bind(null, C));
    lua_1.lua_register(L, 'MultiboardGetItem', MultiboardGetItem.bind(null, C));
    lua_1.lua_register(L, 'MultiboardReleaseItem', MultiboardReleaseItem.bind(null, C));
    lua_1.lua_register(L, 'MultiboardSetItemStyle', MultiboardSetItemStyle.bind(null, C));
    lua_1.lua_register(L, 'MultiboardSetItemValue', MultiboardSetItemValue.bind(null, C));
    lua_1.lua_register(L, 'MultiboardSetItemValueColor', MultiboardSetItemValueColor.bind(null, C));
    lua_1.lua_register(L, 'MultiboardSetItemWidth', MultiboardSetItemWidth.bind(null, C));
    lua_1.lua_register(L, 'MultiboardSetItemIcon', MultiboardSetItemIcon.bind(null, C));
    lua_1.lua_register(L, 'MultiboardSuppressDisplay', MultiboardSuppressDisplay.bind(null, C));
    lua_1.lua_register(L, 'SetCameraPosition', SetCameraPosition.bind(null, C));
    lua_1.lua_register(L, 'SetCameraQuickPosition', SetCameraQuickPosition.bind(null, C));
    lua_1.lua_register(L, 'SetCameraBounds', SetCameraBounds.bind(null, C));
    lua_1.lua_register(L, 'StopCamera', StopCamera.bind(null, C));
    lua_1.lua_register(L, 'ResetToGameCamera', ResetToGameCamera.bind(null, C));
    lua_1.lua_register(L, 'PanCameraTo', PanCameraTo.bind(null, C));
    lua_1.lua_register(L, 'PanCameraToTimed', PanCameraToTimed.bind(null, C));
    lua_1.lua_register(L, 'PanCameraToWithZ', PanCameraToWithZ.bind(null, C));
    lua_1.lua_register(L, 'PanCameraToTimedWithZ', PanCameraToTimedWithZ.bind(null, C));
    lua_1.lua_register(L, 'SetCinematicCamera', SetCinematicCamera.bind(null, C));
    lua_1.lua_register(L, 'SetCameraRotateMode', SetCameraRotateMode.bind(null, C));
    lua_1.lua_register(L, 'SetCameraField', SetCameraField.bind(null, C));
    lua_1.lua_register(L, 'AdjustCameraField', AdjustCameraField.bind(null, C));
    lua_1.lua_register(L, 'SetCameraTargetController', SetCameraTargetController.bind(null, C));
    lua_1.lua_register(L, 'SetCameraOrientController', SetCameraOrientController.bind(null, C));
    lua_1.lua_register(L, 'CreateCameraSetup', CreateCameraSetup.bind(null, C));
    lua_1.lua_register(L, 'CameraSetupSetField', CameraSetupSetField.bind(null, C));
    lua_1.lua_register(L, 'CameraSetupGetField', CameraSetupGetField.bind(null, C));
    lua_1.lua_register(L, 'CameraSetupSetDestPosition', CameraSetupSetDestPosition.bind(null, C));
    lua_1.lua_register(L, 'CameraSetupGetDestPositionLoc', CameraSetupGetDestPositionLoc.bind(null, C));
    lua_1.lua_register(L, 'CameraSetupGetDestPositionX', CameraSetupGetDestPositionX.bind(null, C));
    lua_1.lua_register(L, 'CameraSetupGetDestPositionY', CameraSetupGetDestPositionY.bind(null, C));
    lua_1.lua_register(L, 'CameraSetupApply', CameraSetupApply.bind(null, C));
    lua_1.lua_register(L, 'CameraSetupApplyWithZ', CameraSetupApplyWithZ.bind(null, C));
    lua_1.lua_register(L, 'CameraSetupApplyForceDuration', CameraSetupApplyForceDuration.bind(null, C));
    lua_1.lua_register(L, 'CameraSetupApplyForceDurationWithZ', CameraSetupApplyForceDurationWithZ.bind(null, C));
    lua_1.lua_register(L, 'CameraSetTargetNoise', CameraSetTargetNoise.bind(null, C));
    lua_1.lua_register(L, 'CameraSetSourceNoise', CameraSetSourceNoise.bind(null, C));
    lua_1.lua_register(L, 'CameraSetTargetNoiseEx', CameraSetTargetNoiseEx.bind(null, C));
    lua_1.lua_register(L, 'CameraSetSourceNoiseEx', CameraSetSourceNoiseEx.bind(null, C));
    lua_1.lua_register(L, 'CameraSetSmoothingFactor', CameraSetSmoothingFactor.bind(null, C));
    lua_1.lua_register(L, 'SetCineFilterTexture', SetCineFilterTexture.bind(null, C));
    lua_1.lua_register(L, 'SetCineFilterBlendMode', SetCineFilterBlendMode.bind(null, C));
    lua_1.lua_register(L, 'SetCineFilterTexMapFlags', SetCineFilterTexMapFlags.bind(null, C));
    lua_1.lua_register(L, 'SetCineFilterStartUV', SetCineFilterStartUV.bind(null, C));
    lua_1.lua_register(L, 'SetCineFilterEndUV', SetCineFilterEndUV.bind(null, C));
    lua_1.lua_register(L, 'SetCineFilterStartColor', SetCineFilterStartColor.bind(null, C));
    lua_1.lua_register(L, 'SetCineFilterEndColor', SetCineFilterEndColor.bind(null, C));
    lua_1.lua_register(L, 'SetCineFilterDuration', SetCineFilterDuration.bind(null, C));
    lua_1.lua_register(L, 'DisplayCineFilter', DisplayCineFilter.bind(null, C));
    lua_1.lua_register(L, 'IsCineFilterDisplayed', IsCineFilterDisplayed.bind(null, C));
    lua_1.lua_register(L, 'SetCinematicScene', SetCinematicScene.bind(null, C));
    lua_1.lua_register(L, 'EndCinematicScene', EndCinematicScene.bind(null, C));
    lua_1.lua_register(L, 'ForceCinematicSubtitles', ForceCinematicSubtitles.bind(null, C));
    lua_1.lua_register(L, 'GetCameraMargin', GetCameraMargin.bind(null, C));
    lua_1.lua_register(L, 'GetCameraBoundMinX', GetCameraBoundMinX.bind(null, C));
    lua_1.lua_register(L, 'GetCameraBoundMinY', GetCameraBoundMinY.bind(null, C));
    lua_1.lua_register(L, 'GetCameraBoundMaxX', GetCameraBoundMaxX.bind(null, C));
    lua_1.lua_register(L, 'GetCameraBoundMaxY', GetCameraBoundMaxY.bind(null, C));
    lua_1.lua_register(L, 'GetCameraField', GetCameraField.bind(null, C));
    lua_1.lua_register(L, 'GetCameraTargetPositionX', GetCameraTargetPositionX.bind(null, C));
    lua_1.lua_register(L, 'GetCameraTargetPositionY', GetCameraTargetPositionY.bind(null, C));
    lua_1.lua_register(L, 'GetCameraTargetPositionZ', GetCameraTargetPositionZ.bind(null, C));
    lua_1.lua_register(L, 'GetCameraTargetPositionLoc', GetCameraTargetPositionLoc.bind(null, C));
    lua_1.lua_register(L, 'GetCameraEyePositionX', GetCameraEyePositionX.bind(null, C));
    lua_1.lua_register(L, 'GetCameraEyePositionY', GetCameraEyePositionY.bind(null, C));
    lua_1.lua_register(L, 'GetCameraEyePositionZ', GetCameraEyePositionZ.bind(null, C));
    lua_1.lua_register(L, 'GetCameraEyePositionLoc', GetCameraEyePositionLoc.bind(null, C));
    lua_1.lua_register(L, 'NewSoundEnvironment', NewSoundEnvironment.bind(null, C));
    lua_1.lua_register(L, 'CreateSound', CreateSound.bind(null, C));
    lua_1.lua_register(L, 'CreateSoundFilenameWithLabel', CreateSoundFilenameWithLabel.bind(null, C));
    lua_1.lua_register(L, 'CreateSoundFromLabel', CreateSoundFromLabel.bind(null, C));
    lua_1.lua_register(L, 'CreateMIDISound', CreateMIDISound.bind(null, C));
    lua_1.lua_register(L, 'SetSoundParamsFromLabel', SetSoundParamsFromLabel.bind(null, C));
    lua_1.lua_register(L, 'SetSoundDistanceCutoff', SetSoundDistanceCutoff.bind(null, C));
    lua_1.lua_register(L, 'SetSoundChannel', SetSoundChannel.bind(null, C));
    lua_1.lua_register(L, 'SetSoundVolume', SetSoundVolume.bind(null, C));
    lua_1.lua_register(L, 'SetSoundPitch', SetSoundPitch.bind(null, C));
    lua_1.lua_register(L, 'SetSoundPlayPosition', SetSoundPlayPosition.bind(null, C));
    lua_1.lua_register(L, 'SetSoundDistances', SetSoundDistances.bind(null, C));
    lua_1.lua_register(L, 'SetSoundConeAngles', SetSoundConeAngles.bind(null, C));
    lua_1.lua_register(L, 'SetSoundConeOrientation', SetSoundConeOrientation.bind(null, C));
    lua_1.lua_register(L, 'SetSoundPosition', SetSoundPosition.bind(null, C));
    lua_1.lua_register(L, 'SetSoundVelocity', SetSoundVelocity.bind(null, C));
    lua_1.lua_register(L, 'AttachSoundToUnit', AttachSoundToUnit.bind(null, C));
    lua_1.lua_register(L, 'StartSound', StartSound.bind(null, C));
    lua_1.lua_register(L, 'StopSound', StopSound.bind(null, C));
    lua_1.lua_register(L, 'KillSoundWhenDone', KillSoundWhenDone.bind(null, C));
    lua_1.lua_register(L, 'SetMapMusic', SetMapMusic.bind(null, C));
    lua_1.lua_register(L, 'ClearMapMusic', ClearMapMusic.bind(null, C));
    lua_1.lua_register(L, 'PlayMusic', PlayMusic.bind(null, C));
    lua_1.lua_register(L, 'PlayMusicEx', PlayMusicEx.bind(null, C));
    lua_1.lua_register(L, 'StopMusic', StopMusic.bind(null, C));
    lua_1.lua_register(L, 'ResumeMusic', ResumeMusic.bind(null, C));
    lua_1.lua_register(L, 'PlayThematicMusic', PlayThematicMusic.bind(null, C));
    lua_1.lua_register(L, 'PlayThematicMusicEx', PlayThematicMusicEx.bind(null, C));
    lua_1.lua_register(L, 'EndThematicMusic', EndThematicMusic.bind(null, C));
    lua_1.lua_register(L, 'SetMusicVolume', SetMusicVolume.bind(null, C));
    lua_1.lua_register(L, 'SetMusicPlayPosition', SetMusicPlayPosition.bind(null, C));
    lua_1.lua_register(L, 'SetThematicMusicPlayPosition', SetThematicMusicPlayPosition.bind(null, C));
    lua_1.lua_register(L, 'SetSoundDuration', SetSoundDuration.bind(null, C));
    lua_1.lua_register(L, 'GetSoundDuration', GetSoundDuration.bind(null, C));
    lua_1.lua_register(L, 'GetSoundFileDuration', GetSoundFileDuration.bind(null, C));
    lua_1.lua_register(L, 'VolumeGroupSetVolume', VolumeGroupSetVolume.bind(null, C));
    lua_1.lua_register(L, 'VolumeGroupReset', VolumeGroupReset.bind(null, C));
    lua_1.lua_register(L, 'GetSoundIsPlaying', GetSoundIsPlaying.bind(null, C));
    lua_1.lua_register(L, 'GetSoundIsLoading', GetSoundIsLoading.bind(null, C));
    lua_1.lua_register(L, 'RegisterStackedSound', RegisterStackedSound.bind(null, C));
    lua_1.lua_register(L, 'UnregisterStackedSound', UnregisterStackedSound.bind(null, C));
    lua_1.lua_register(L, 'AddWeatherEffect', AddWeatherEffect.bind(null, C));
    lua_1.lua_register(L, 'RemoveWeatherEffect', RemoveWeatherEffect.bind(null, C));
    lua_1.lua_register(L, 'EnableWeatherEffect', EnableWeatherEffect.bind(null, C));
    lua_1.lua_register(L, 'TerrainDeformCrater', TerrainDeformCrater.bind(null, C));
    lua_1.lua_register(L, 'TerrainDeformRipple', TerrainDeformRipple.bind(null, C));
    lua_1.lua_register(L, 'TerrainDeformWave', TerrainDeformWave.bind(null, C));
    lua_1.lua_register(L, 'TerrainDeformRandom', TerrainDeformRandom.bind(null, C));
    lua_1.lua_register(L, 'TerrainDeformStop', TerrainDeformStop.bind(null, C));
    lua_1.lua_register(L, 'TerrainDeformStopAll', TerrainDeformStopAll.bind(null, C));
    lua_1.lua_register(L, 'AddSpecialEffect', AddSpecialEffect.bind(null, C));
    lua_1.lua_register(L, 'AddSpecialEffectLoc', AddSpecialEffectLoc.bind(null, C));
    lua_1.lua_register(L, 'AddSpecialEffectTarget', AddSpecialEffectTarget.bind(null, C));
    lua_1.lua_register(L, 'DestroyEffect', DestroyEffect.bind(null, C));
    lua_1.lua_register(L, 'AddSpellEffect', AddSpellEffect.bind(null, C));
    lua_1.lua_register(L, 'AddSpellEffectLoc', AddSpellEffectLoc.bind(null, C));
    lua_1.lua_register(L, 'AddSpellEffectById', AddSpellEffectById.bind(null, C));
    lua_1.lua_register(L, 'AddSpellEffectByIdLoc', AddSpellEffectByIdLoc.bind(null, C));
    lua_1.lua_register(L, 'AddSpellEffectTarget', AddSpellEffectTarget.bind(null, C));
    lua_1.lua_register(L, 'AddSpellEffectTargetById', AddSpellEffectTargetById.bind(null, C));
    lua_1.lua_register(L, 'AddLightning', AddLightning.bind(null, C));
    lua_1.lua_register(L, 'AddLightningEx', AddLightningEx.bind(null, C));
    lua_1.lua_register(L, 'DestroyLightning', DestroyLightning.bind(null, C));
    lua_1.lua_register(L, 'MoveLightning', MoveLightning.bind(null, C));
    lua_1.lua_register(L, 'MoveLightningEx', MoveLightningEx.bind(null, C));
    lua_1.lua_register(L, 'GetLightningColorA', GetLightningColorA.bind(null, C));
    lua_1.lua_register(L, 'GetLightningColorR', GetLightningColorR.bind(null, C));
    lua_1.lua_register(L, 'GetLightningColorG', GetLightningColorG.bind(null, C));
    lua_1.lua_register(L, 'GetLightningColorB', GetLightningColorB.bind(null, C));
    lua_1.lua_register(L, 'SetLightningColor', SetLightningColor.bind(null, C));
    lua_1.lua_register(L, 'GetAbilityEffect', GetAbilityEffect.bind(null, C));
    lua_1.lua_register(L, 'GetAbilityEffectById', GetAbilityEffectById.bind(null, C));
    lua_1.lua_register(L, 'GetAbilitySound', GetAbilitySound.bind(null, C));
    lua_1.lua_register(L, 'GetAbilitySoundById', GetAbilitySoundById.bind(null, C));
    lua_1.lua_register(L, 'GetTerrainCliffLevel', GetTerrainCliffLevel.bind(null, C));
    lua_1.lua_register(L, 'SetWaterBaseColor', SetWaterBaseColor.bind(null, C));
    lua_1.lua_register(L, 'SetWaterDeforms', SetWaterDeforms.bind(null, C));
    lua_1.lua_register(L, 'GetTerrainType', GetTerrainType.bind(null, C));
    lua_1.lua_register(L, 'GetTerrainVariance', GetTerrainVariance.bind(null, C));
    lua_1.lua_register(L, 'SetTerrainType', SetTerrainType.bind(null, C));
    lua_1.lua_register(L, 'IsTerrainPathable', IsTerrainPathable.bind(null, C));
    lua_1.lua_register(L, 'SetTerrainPathable', SetTerrainPathable.bind(null, C));
    lua_1.lua_register(L, 'CreateImage', CreateImage.bind(null, C));
    lua_1.lua_register(L, 'DestroyImage', DestroyImage.bind(null, C));
    lua_1.lua_register(L, 'ShowImage', ShowImage.bind(null, C));
    lua_1.lua_register(L, 'SetImageConstantHeight', SetImageConstantHeight.bind(null, C));
    lua_1.lua_register(L, 'SetImagePosition', SetImagePosition.bind(null, C));
    lua_1.lua_register(L, 'SetImageColor', SetImageColor.bind(null, C));
    lua_1.lua_register(L, 'SetImageRender', SetImageRender.bind(null, C));
    lua_1.lua_register(L, 'SetImageRenderAlways', SetImageRenderAlways.bind(null, C));
    lua_1.lua_register(L, 'SetImageAboveWater', SetImageAboveWater.bind(null, C));
    lua_1.lua_register(L, 'SetImageType', SetImageType.bind(null, C));
    lua_1.lua_register(L, 'CreateUbersplat', CreateUbersplat.bind(null, C));
    lua_1.lua_register(L, 'DestroyUbersplat', DestroyUbersplat.bind(null, C));
    lua_1.lua_register(L, 'ResetUbersplat', ResetUbersplat.bind(null, C));
    lua_1.lua_register(L, 'FinishUbersplat', FinishUbersplat.bind(null, C));
    lua_1.lua_register(L, 'ShowUbersplat', ShowUbersplat.bind(null, C));
    lua_1.lua_register(L, 'SetUbersplatRender', SetUbersplatRender.bind(null, C));
    lua_1.lua_register(L, 'SetUbersplatRenderAlways', SetUbersplatRenderAlways.bind(null, C));
    lua_1.lua_register(L, 'SetBlight', SetBlight.bind(null, C));
    lua_1.lua_register(L, 'SetBlightRect', SetBlightRect.bind(null, C));
    lua_1.lua_register(L, 'SetBlightPoint', SetBlightPoint.bind(null, C));
    lua_1.lua_register(L, 'SetBlightLoc', SetBlightLoc.bind(null, C));
    lua_1.lua_register(L, 'CreateBlightedGoldmine', CreateBlightedGoldmine.bind(null, C));
    lua_1.lua_register(L, 'IsPointBlighted', IsPointBlighted.bind(null, C));
    lua_1.lua_register(L, 'SetDoodadAnimation', SetDoodadAnimation.bind(null, C));
    lua_1.lua_register(L, 'SetDoodadAnimationRect', SetDoodadAnimationRect.bind(null, C));
    lua_1.lua_register(L, 'StartMeleeAI', StartMeleeAI.bind(null, C));
    lua_1.lua_register(L, 'StartCampaignAI', StartCampaignAI.bind(null, C));
    lua_1.lua_register(L, 'CommandAI', CommandAI.bind(null, C));
    lua_1.lua_register(L, 'PauseCompAI', PauseCompAI.bind(null, C));
    lua_1.lua_register(L, 'GetAIDifficulty', GetAIDifficulty.bind(null, C));
    lua_1.lua_register(L, 'RemoveGuardPosition', RemoveGuardPosition.bind(null, C));
    lua_1.lua_register(L, 'RecycleGuardPosition', RecycleGuardPosition.bind(null, C));
    lua_1.lua_register(L, 'RemoveAllGuardPositions', RemoveAllGuardPositions.bind(null, C));
    lua_1.lua_register(L, 'Cheat', Cheat.bind(null, C));
    lua_1.lua_register(L, 'IsNoVictoryCheat', IsNoVictoryCheat.bind(null, C));
    lua_1.lua_register(L, 'IsNoDefeatCheat', IsNoDefeatCheat.bind(null, C));
    lua_1.lua_register(L, 'Preload', Preload.bind(null, C));
    lua_1.lua_register(L, 'PreloadEnd', PreloadEnd.bind(null, C));
    lua_1.lua_register(L, 'PreloadStart', PreloadStart.bind(null, C));
    lua_1.lua_register(L, 'PreloadRefresh', PreloadRefresh.bind(null, C));
    lua_1.lua_register(L, 'PreloadEndEx', PreloadEndEx.bind(null, C));
    lua_1.lua_register(L, 'PreloadGenClear', PreloadGenClear.bind(null, C));
    lua_1.lua_register(L, 'PreloadGenStart', PreloadGenStart.bind(null, C));
    lua_1.lua_register(L, 'PreloadGenEnd', PreloadGenEnd.bind(null, C));
    lua_1.lua_register(L, 'Preloader', Preloader.bind(null, C));
    lua_1.lua_register(L, 'AutomationTestStart', AutomationTestStart.bind(null, C));
    lua_1.lua_register(L, 'AutomationTestEnd', AutomationTestEnd.bind(null, C));
    lua_1.lua_register(L, 'BlzGetTriggerPlayerMouseX', BlzGetTriggerPlayerMouseX.bind(null, C));
    lua_1.lua_register(L, 'BlzGetTriggerPlayerMouseY', BlzGetTriggerPlayerMouseY.bind(null, C));
    lua_1.lua_register(L, 'BlzGetTriggerPlayerMousePosition', BlzGetTriggerPlayerMousePosition.bind(null, C));
    lua_1.lua_register(L, 'BlzGetTriggerPlayerMouseButton', BlzGetTriggerPlayerMouseButton.bind(null, C));
    lua_1.lua_register(L, 'BlzSetAbilityTooltip', BlzSetAbilityTooltip.bind(null, C));
    lua_1.lua_register(L, 'BlzSetAbilityActivatedTooltip', BlzSetAbilityActivatedTooltip.bind(null, C));
    lua_1.lua_register(L, 'BlzSetAbilityExtendedTooltip', BlzSetAbilityExtendedTooltip.bind(null, C));
    lua_1.lua_register(L, 'BlzSetAbilityActivatedExtendedTooltip', BlzSetAbilityActivatedExtendedTooltip.bind(null, C));
    lua_1.lua_register(L, 'BlzSetAbilityResearchTooltip', BlzSetAbilityResearchTooltip.bind(null, C));
    lua_1.lua_register(L, 'BlzSetAbilityResearchExtendedTooltip', BlzSetAbilityResearchExtendedTooltip.bind(null, C));
    lua_1.lua_register(L, 'BlzGetAbilityTooltip', BlzGetAbilityTooltip.bind(null, C));
    lua_1.lua_register(L, 'BlzGetAbilityActivatedTooltip', BlzGetAbilityActivatedTooltip.bind(null, C));
    lua_1.lua_register(L, 'BlzGetAbilityExtendedTooltip', BlzGetAbilityExtendedTooltip.bind(null, C));
    lua_1.lua_register(L, 'BlzGetAbilityActivatedExtendedTooltip', BlzGetAbilityActivatedExtendedTooltip.bind(null, C));
    lua_1.lua_register(L, 'BlzGetAbilityResearchTooltip', BlzGetAbilityResearchTooltip.bind(null, C));
    lua_1.lua_register(L, 'BlzGetAbilityResearchExtendedTooltip', BlzGetAbilityResearchExtendedTooltip.bind(null, C));
    lua_1.lua_register(L, 'BlzSetAbilityIcon', BlzSetAbilityIcon.bind(null, C));
    lua_1.lua_register(L, 'BlzGetAbilityIcon', BlzGetAbilityIcon.bind(null, C));
    lua_1.lua_register(L, 'BlzSetAbilityActivatedIcon', BlzSetAbilityActivatedIcon.bind(null, C));
    lua_1.lua_register(L, 'BlzGetAbilityActivatedIcon', BlzGetAbilityActivatedIcon.bind(null, C));
    lua_1.lua_register(L, 'BlzGetAbilityPosX', BlzGetAbilityPosX.bind(null, C));
    lua_1.lua_register(L, 'BlzGetAbilityPosY', BlzGetAbilityPosY.bind(null, C));
    lua_1.lua_register(L, 'BlzSetAbilityPosX', BlzSetAbilityPosX.bind(null, C));
    lua_1.lua_register(L, 'BlzSetAbilityPosY', BlzSetAbilityPosY.bind(null, C));
    lua_1.lua_register(L, 'BlzGetAbilityActivatedPosX', BlzGetAbilityActivatedPosX.bind(null, C));
    lua_1.lua_register(L, 'BlzGetAbilityActivatedPosY', BlzGetAbilityActivatedPosY.bind(null, C));
    lua_1.lua_register(L, 'BlzSetAbilityActivatedPosX', BlzSetAbilityActivatedPosX.bind(null, C));
    lua_1.lua_register(L, 'BlzSetAbilityActivatedPosY', BlzSetAbilityActivatedPosY.bind(null, C));
    lua_1.lua_register(L, 'BlzGetUnitMaxHP', BlzGetUnitMaxHP.bind(null, C));
    lua_1.lua_register(L, 'BlzSetUnitMaxHP', BlzSetUnitMaxHP.bind(null, C));
    lua_1.lua_register(L, 'BlzGetUnitMaxMana', BlzGetUnitMaxMana.bind(null, C));
    lua_1.lua_register(L, 'BlzSetUnitMaxMana', BlzSetUnitMaxMana.bind(null, C));
    lua_1.lua_register(L, 'BlzDeleteHeroAbility', BlzDeleteHeroAbility.bind(null, C));
    lua_1.lua_register(L, 'BlzSetItemName', BlzSetItemName.bind(null, C));
    lua_1.lua_register(L, 'BlzSetItemDescription', BlzSetItemDescription.bind(null, C));
    lua_1.lua_register(L, 'BlzGetItemDescription', BlzGetItemDescription.bind(null, C));
    lua_1.lua_register(L, 'BlzSetItemTooltip', BlzSetItemTooltip.bind(null, C));
    lua_1.lua_register(L, 'BlzGetItemTooltip', BlzGetItemTooltip.bind(null, C));
    lua_1.lua_register(L, 'BlzSetItemExtendedTooltip', BlzSetItemExtendedTooltip.bind(null, C));
    lua_1.lua_register(L, 'BlzGetItemExtendedTooltip', BlzGetItemExtendedTooltip.bind(null, C));
    lua_1.lua_register(L, 'BlzSetItemIconPath', BlzSetItemIconPath.bind(null, C));
    lua_1.lua_register(L, 'BlzGetItemIconPath', BlzGetItemIconPath.bind(null, C));
    lua_1.lua_register(L, 'BlzSetUnitName', BlzSetUnitName.bind(null, C));
    lua_1.lua_register(L, 'BlzSetHeroProperName', BlzSetHeroProperName.bind(null, C));
    lua_1.lua_register(L, 'BlzGetUnitBaseDamage', BlzGetUnitBaseDamage.bind(null, C));
    lua_1.lua_register(L, 'BlzSetUnitBaseDamage', BlzSetUnitBaseDamage.bind(null, C));
    lua_1.lua_register(L, 'BlzGetUnitDiceNumber', BlzGetUnitDiceNumber.bind(null, C));
    lua_1.lua_register(L, 'BlzSetUnitDiceNumber', BlzSetUnitDiceNumber.bind(null, C));
    lua_1.lua_register(L, 'BlzGetUnitDiceSides', BlzGetUnitDiceSides.bind(null, C));
    lua_1.lua_register(L, 'BlzSetUnitDiceSides', BlzSetUnitDiceSides.bind(null, C));
    lua_1.lua_register(L, 'BlzGetUnitAttackCooldown', BlzGetUnitAttackCooldown.bind(null, C));
    lua_1.lua_register(L, 'BlzSetUnitAttackCooldown', BlzSetUnitAttackCooldown.bind(null, C));
    lua_1.lua_register(L, 'BlzSetSpecialEffectColorByPlayer', BlzSetSpecialEffectColorByPlayer.bind(null, C));
    lua_1.lua_register(L, 'BlzSetSpecialEffectColor', BlzSetSpecialEffectColor.bind(null, C));
    lua_1.lua_register(L, 'BlzSetSpecialEffectAlpha', BlzSetSpecialEffectAlpha.bind(null, C));
    lua_1.lua_register(L, 'BlzSetSpecialEffectScale', BlzSetSpecialEffectScale.bind(null, C));
    lua_1.lua_register(L, 'BlzSetSpecialEffectPosition', BlzSetSpecialEffectPosition.bind(null, C));
    lua_1.lua_register(L, 'BlzSetSpecialEffectHeight', BlzSetSpecialEffectHeight.bind(null, C));
    lua_1.lua_register(L, 'BlzSetSpecialEffectTimeScale', BlzSetSpecialEffectTimeScale.bind(null, C));
    lua_1.lua_register(L, 'BlzSetSpecialEffectTime', BlzSetSpecialEffectTime.bind(null, C));
    lua_1.lua_register(L, 'BlzSetSpecialEffectOrientation', BlzSetSpecialEffectOrientation.bind(null, C));
    lua_1.lua_register(L, 'BlzSetSpecialEffectYaw', BlzSetSpecialEffectYaw.bind(null, C));
    lua_1.lua_register(L, 'BlzSetSpecialEffectPitch', BlzSetSpecialEffectPitch.bind(null, C));
    lua_1.lua_register(L, 'BlzSetSpecialEffectRoll', BlzSetSpecialEffectRoll.bind(null, C));
    lua_1.lua_register(L, 'BlzSetSpecialEffectX', BlzSetSpecialEffectX.bind(null, C));
    lua_1.lua_register(L, 'BlzSetSpecialEffectY', BlzSetSpecialEffectY.bind(null, C));
    lua_1.lua_register(L, 'BlzSetSpecialEffectZ', BlzSetSpecialEffectZ.bind(null, C));
    lua_1.lua_register(L, 'BlzSetSpecialEffectPositionLoc', BlzSetSpecialEffectPositionLoc.bind(null, C));
    lua_1.lua_register(L, 'BlzGetLocalSpecialEffectX', BlzGetLocalSpecialEffectX.bind(null, C));
    lua_1.lua_register(L, 'BlzGetLocalSpecialEffectY', BlzGetLocalSpecialEffectY.bind(null, C));
    lua_1.lua_register(L, 'BlzGetLocalSpecialEffectZ', BlzGetLocalSpecialEffectZ.bind(null, C));
    lua_1.lua_register(L, 'BlzGetUnitArmor', BlzGetUnitArmor.bind(null, C));
    lua_1.lua_register(L, 'BlzSetUnitArmor', BlzSetUnitArmor.bind(null, C));
    lua_1.lua_register(L, 'BlzUnitHideAbility', BlzUnitHideAbility.bind(null, C));
    lua_1.lua_register(L, 'BlzUnitDisableAbility', BlzUnitDisableAbility.bind(null, C));
    lua_1.lua_register(L, 'BlzUnitCancelTimedLife', BlzUnitCancelTimedLife.bind(null, C));
    lua_1.lua_register(L, 'BlzIsUnitSelectable', BlzIsUnitSelectable.bind(null, C));
    lua_1.lua_register(L, 'BlzIsUnitInvulnerable', BlzIsUnitInvulnerable.bind(null, C));
    lua_1.lua_register(L, 'BlzUnitInterruptAttack', BlzUnitInterruptAttack.bind(null, C));
    lua_1.lua_register(L, 'BlzGetUnitCollisionSize', BlzGetUnitCollisionSize.bind(null, C));
    lua_1.lua_register(L, 'BlzGetAbilityManaCost', BlzGetAbilityManaCost.bind(null, C));
    lua_1.lua_register(L, 'BlzGetAbilityCooldown', BlzGetAbilityCooldown.bind(null, C));
    lua_1.lua_register(L, 'BlzSetUnitAbilityCooldown', BlzSetUnitAbilityCooldown.bind(null, C));
    lua_1.lua_register(L, 'BlzGetUnitAbilityCooldown', BlzGetUnitAbilityCooldown.bind(null, C));
    lua_1.lua_register(L, 'BlzGetUnitAbilityCooldownRemaining', BlzGetUnitAbilityCooldownRemaining.bind(null, C));
    lua_1.lua_register(L, 'BlzEndUnitAbilityCooldown', BlzEndUnitAbilityCooldown.bind(null, C));
    lua_1.lua_register(L, 'BlzGetUnitAbilityManaCost', BlzGetUnitAbilityManaCost.bind(null, C));
    lua_1.lua_register(L, 'BlzSetUnitAbilityManaCost', BlzSetUnitAbilityManaCost.bind(null, C));
    lua_1.lua_register(L, 'BlzGetLocalUnitZ', BlzGetLocalUnitZ.bind(null, C));
    lua_1.lua_register(L, 'BlzDecPlayerTechResearched', BlzDecPlayerTechResearched.bind(null, C));
    lua_1.lua_register(L, 'BlzSetEventDamage', BlzSetEventDamage.bind(null, C));
}
exports.default = bindNatives;
