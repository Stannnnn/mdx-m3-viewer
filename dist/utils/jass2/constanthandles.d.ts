import JassPlayerColor from './types/playercolor';
import JassRace from './types/race';
import JassPlayerGameResult from './types/playergameresult';
import JassAllianceType from './types/alliancetype';
import JassVersion from './types/version';
import JassAttackType from './types/attacktype';
import JassDamageType from './types/damagetype';
import JassWeaponType from './types/weapontype';
import JassPathingType from './types/pathingtype';
import JassMouseButtonType from './types/mousebuttontype';
import JassRacePreference from './types/racepreference';
import JassMapControl from './types/mapcontrol';
import JassGameType from './types/gametype';
import JassMapFlag from './types/mapflag';
import JassPlacement from './types/placement';
import JassStartLocPrio from './types/startlocprio';
import JassMapDensity from './types/mapdensity';
import JassGameDifficulty from './types/gamedifficulty';
import JassGameSpeed from './types/gamespeed';
import JassPlayerSlotState from './types/playerslotstate';
import JassVolumeGroup from './types/volumegroup';
import JassIGameState from './types/igamestate';
import JassFGameState from './types/fgamestate';
import JassPlayerState from './types/playerstate';
import JassUnitState from './types/unitstate';
import JassAiDifficulty from './types/aidifficulty';
import JassPlayerScore from './types/playerscore';
import JassGameEvent from './types/gameevent';
import JassPlayerEvent from './types/playerevent';
import JassPlayerUnitEvent from './types/playerunitevent';
import JassUnitEvent from './types/unitevent';
import JassWidgetEvent from './types/widgetevent';
import JassDialogEvent from './types/dialogevent';
import JassLimitOp from './types/limitop';
import JassUnitType from './types/unittype';
import JassItemType from './types/itemtype';
import JassCameraField from './types/camerafield';
import JassBlendMode from './types/blendmode';
import JassRarityControl from './types/raritycontrol';
import JassTexMapFlags from './types/texmapflags';
import JassFogState from './types/fogstate';
import JassEffectType from './types/effecttype';
import JassSoundType from './types/soundtype';
export default function constantHandles(): {
    playerColors: JassPlayerColor[];
    races: JassRace[];
    playerGameResults: JassPlayerGameResult[];
    allianceTypes: JassAllianceType[];
    versions: JassVersion[];
    attackTypes: JassAttackType[];
    damageTypes: JassDamageType[];
    weaponTypes: JassWeaponType[];
    pathingTypes: JassPathingType[];
    mouseButtonTypes: JassMouseButtonType[];
    racePrefs: JassRacePreference[];
    mapControls: JassMapControl[];
    gameTypes: JassGameType[];
    mapFlags: JassMapFlag[];
    placements: JassPlacement[];
    startLocPrios: JassStartLocPrio[];
    mapDensities: JassMapDensity[];
    gameDifficulties: JassGameDifficulty[];
    gameSpeeds: JassGameSpeed[];
    playerSlotStates: JassPlayerSlotState[];
    volumeGroups: JassVolumeGroup[];
    gameStates: (JassIGameState | JassFGameState)[];
    playerStates: JassPlayerState[];
    unitStates: JassUnitState[];
    aiDifficulties: JassAiDifficulty[];
    playerScores: JassPlayerScore[];
    events: (JassGameEvent | JassPlayerEvent | JassPlayerUnitEvent | JassUnitEvent | JassWidgetEvent | JassDialogEvent)[];
    limitOps: JassLimitOp[];
    unitTypes: JassUnitType[];
    itemTypes: JassItemType[];
    cameraFields: JassCameraField[];
    blendModes: JassBlendMode[];
    rarityControls: JassRarityControl[];
    texMapFlags: JassTexMapFlags[];
    fogStates: JassFogState[];
    effectTypes: JassEffectType[];
    soundTypes: JassSoundType[];
};
