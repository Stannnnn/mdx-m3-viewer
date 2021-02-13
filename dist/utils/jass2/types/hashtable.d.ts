import JassAgent from './agent';
/**
 * type unit
 */
export default class JassHashTable extends JassAgent {
    table: Map<number, Map<number, any>>;
    save(parentKey: number, childKey: number, value: any): void;
    load(parentKey: number, childKey: number, defaultValue?: number): any;
    have(parentKey: number, childKey: number): boolean;
    remove(parentKey: number, childKey: number): void;
    flush(): void;
    flushChild(parentKey: number): void;
}
