import War3Map from '../../../parsers/w3x/map';
import TriggerData from '../../../parsers/w3x/wtg/triggerdata';
export default function convertWeu(map: War3Map, customTriggerData: TriggerData, weTriggerData: TriggerData): {
    ok: boolean;
    error: string;
    changes?: undefined;
} | {
    ok: boolean;
    changes: import("./data").WEUChange[];
    error?: undefined;
};
