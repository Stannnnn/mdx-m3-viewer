/**
 * A MappedData row.
 */
export declare type MappedDataRow = {
    [key: string]: string | number | boolean;
};
/**
 * A structure that holds mapped data from INI and SLK files.
 *
 * In the case of SLK files, the first row is expected to hold the names of the columns.
 */
export declare class MappedData {
    map: {
        [key: string]: MappedDataRow;
    };
    constructor(buffer?: string);
    /**
     * Load data from an SLK file or an INI file.
     *
     * Note that this may override previous properties!
     */
    load(buffer: string): void;
    getRow(key: string): MappedDataRow;
    getProperty(key: string, name: string): string | number | boolean;
    setRow(key: string, values: MappedDataRow): void;
}
