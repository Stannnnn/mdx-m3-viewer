/**
 * An INI file.
 */
export default class IniFile {
    properties: Map<string, string>;
    sections: Map<string, Map<string, string>>;
    load(buffer: string): void;
    save(): string;
    getSection(name: string): Map<string, string> | undefined;
}
