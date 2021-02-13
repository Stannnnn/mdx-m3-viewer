import JassAgent from './agent';
/**
 * type player
 */
export default class JassPlayer extends JassAgent {
    index: number;
    name: string;
    team: number;
    startLocation: number;
    forcedStartLocation: number;
    color: number;
    racePreference: number;
    raceSelectable: boolean;
    controller: number;
    alliances: Map<number, object>;
    constructor(index: number, maxPlayers: number);
}
