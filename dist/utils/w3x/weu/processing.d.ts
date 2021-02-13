import Trigger from '../../../parsers/w3x/wtg/trigger';
import ECA from '../../../parsers/w3x/wtg/eca';
import WeuData from './data';
export declare function processTrigger(data: WeuData, trigger: Trigger, callbacks: string[]): {
    convert: boolean;
    reason: string;
};
export declare function processECA(data: WeuData, eca: ECA, callbacks: string[]): {
    convert: boolean;
    reason: string;
};
