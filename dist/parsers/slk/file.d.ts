/**
 * A SLK table file.
 */
export default class SlkFile {
    rows: (string | number | boolean)[][];
    load(buffer: string): void;
    save(): string;
}
