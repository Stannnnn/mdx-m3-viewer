declare const _default: {
    version: string;
    common: {
        glMatrix: any;
        glMatrixAddon: typeof import("./common/gl-matrix-addon");
        math: typeof import("./common/math");
        canvas: typeof import("./common/canvas");
        BinaryStream: typeof import("./common/binarystream").default;
        BitStream: typeof import("./common/bitstream").default;
        urlWithParams: typeof import("./common/urlwithparams").default;
        path: typeof import("./common/path");
        isPng: typeof import("./common/isformat").isPng;
        isJpeg: typeof import("./common/isformat").isJpeg;
        isGif: typeof import("./common/isformat").isGif;
        isWebP: typeof import("./common/isformat").isWebP;
    };
    parsers: {
        ini: {
            File: typeof import("./parsers/ini/file").default;
        };
        slk: {
            File: typeof import("./parsers/slk/file").default;
        };
        m3: {
            Model: typeof import("./parsers/m3/model").default;
            isM3: typeof import("./parsers/m3/isformat").default;
        };
        mdlx: {
            Model: typeof import("./parsers/mdlx/model").default;
            Sequence: typeof import("./parsers/mdlx/sequence").default;
            Material: typeof import("./parsers/mdlx/material").default;
            Layer: typeof import("./parsers/mdlx/layer").default;
            Texture: typeof import("./parsers/mdlx/texture").default;
            TextureAnimation: typeof import("./parsers/mdlx/textureanimation").default;
            Geoset: typeof import("./parsers/mdlx/geoset").default;
            GeosetAnimation: typeof import("./parsers/mdlx/geosetanimation").default;
            Bone: typeof import("./parsers/mdlx/bone").default;
            Light: typeof import("./parsers/mdlx/light").default;
            Helper: typeof import("./parsers/mdlx/helper").default;
            Attachment: typeof import("./parsers/mdlx/attachment").default;
            ParticleEmitter: typeof import("./parsers/mdlx/particleemitter").default;
            ParticleEmitter2: typeof import("./parsers/mdlx/particleemitter2").default;
            ParticleEmitterPopcorn: typeof import("./parsers/mdlx/particleemitterpopcorn").default;
            RibbonEmitter: typeof import("./parsers/mdlx/ribbonemitter").default;
            Camera: typeof import("./parsers/mdlx/camera").default;
            EventObject: typeof import("./parsers/mdlx/eventobject").default;
            CollisionShape: typeof import("./parsers/mdlx/collisionshape").default;
            UnknownChunk: typeof import("./parsers/mdlx/unknownchunk").default;
            TokenStream: typeof import("./parsers/mdlx/tokenstream").default;
            isMdx: typeof import("./parsers/mdlx/isformat").isMdx;
            isMdl: typeof import("./parsers/mdlx/isformat").isMdl;
        };
        mpq: {
            Archive: typeof import("./parsers/mpq/archive").default;
            Crypto: typeof import("./parsers/mpq/crypto").default;
            HashTable: typeof import("./parsers/mpq/hashtable").default;
            Hash: typeof import("./parsers/mpq/hash").default;
            BlockTable: typeof import("./parsers/mpq/blocktable").default;
            Block: typeof import("./parsers/mpq/block").default;
            File: typeof import("./parsers/mpq/file").default;
            isArchive: typeof import("./parsers/mpq/isarchive").isArchive;
        };
        w3x: {
            Map: typeof import("./parsers/w3x/map").default;
            doo: {
                File: typeof import("./parsers/w3x/doo/file").default;
                Doodad: typeof import("./parsers/w3x/doo/doodad").default;
                RandomItemSet: typeof import("./parsers/w3x/doo/randomitemset").default;
                RandomItem: typeof import("./parsers/w3x/doo/randomitem").default;
                TerrainDoodad: typeof import("./parsers/w3x/doo/terraindoodad").default;
            };
            imp: {
                File: typeof import("./parsers/w3x/imp/file").default;
                Import: typeof import("./parsers/w3x/imp/import").default;
            };
            mmp: {
                File: typeof import("./parsers/w3x/mmp/file").default;
                MinimapIcon: typeof import("./parsers/w3x/mmp/minimapicon").default;
            };
            shd: {
                File: typeof import("./parsers/w3x/shd/file").default;
            };
            w3c: {
                File: typeof import("./parsers/w3x/w3c/file").default;
                Camera: typeof import("./parsers/w3x/w3c/camera").default;
            };
            w3d: {
                File: typeof import("./parsers/w3x/w3d/file").default;
            };
            w3e: {
                File: typeof import("./parsers/w3x/w3e/file").default;
                Corner: typeof import("./parsers/w3x/w3e/corner").default;
            };
            w3i: {
                File: typeof import("./parsers/w3x/w3i/file").default;
                Player: typeof import("./parsers/w3x/w3i/player").default;
                Force: typeof import("./parsers/w3x/w3i/force").default;
                UpgradeAvailabilityChange: typeof import("./parsers/w3x/w3i/upgradeavailabilitychange").default;
                TechAvailabilityChange: typeof import("./parsers/w3x/w3i/techavailabilitychange").default;
                RandomUnitTable: typeof import("./parsers/w3x/w3i/randomunittable").default;
                RandomUnit: typeof import("./parsers/w3x/w3i/randomunit").default;
                RandomItemTable: typeof import("./parsers/w3x/w3i/randomitemtable").default;
                RandomItemSet: typeof import("./parsers/w3x/w3i/randomitemset").default;
                RandomItem: typeof import("./parsers/w3x/w3i/randomitem").default;
            };
            w3o: {
                File: typeof import("./parsers/w3x/w3o/file").default;
            };
            w3r: {
                File: typeof import("./parsers/w3x/w3r/file").default;
                Region: typeof import("./parsers/w3x/w3r/region").default;
            };
            w3s: {
                File: typeof import("./parsers/w3x/w3s/file").default;
                Sound: typeof import("./parsers/w3x/w3s/sound").default;
            };
            w3u: {
                File: typeof import("./parsers/w3x/w3u/file").default;
                ModificationTable: typeof import("./parsers/w3x/w3u/modificationtable").default;
                ModificationObject: typeof import("./parsers/w3x/w3u/modifiedobject").default;
                Modification: typeof import("./parsers/w3x/w3u/modification").default;
            };
            wct: {
                File: typeof import("./parsers/w3x/wct/file").default;
                CustomTextTrigger: typeof import("./parsers/w3x/wct/customtexttrigger").default;
            };
            wpm: {
                File: typeof import("./parsers/w3x/wpm/file").default;
            };
            wtg: {
                File: typeof import("./parsers/w3x/wtg/file").default;
                TriggerCategory: typeof import("./parsers/w3x/wtg/triggercategory").default;
                Variable: typeof import("./parsers/w3x/wtg/variable").default;
                Trigger: typeof import("./parsers/w3x/wtg/trigger").default;
                ECA: typeof import("./parsers/w3x/wtg/eca").default;
                Parameter: typeof import("./parsers/w3x/wtg/parameter").default;
                SubParameters: typeof import("./parsers/w3x/wtg/subparameters").default;
                TriggerData: typeof import("./parsers/w3x/wtg/triggerdata").default;
            };
            wts: {
                File: typeof import("./parsers/w3x/wts/file").default;
            };
            unitsdoo: {
                File: typeof import("./parsers/w3x/unitsdoo/file").default;
                Unit: typeof import("./parsers/w3x/unitsdoo/unit").default;
                DroppedItemSet: typeof import("./parsers/w3x/unitsdoo/droppeditemset").default;
                DroppedItem: typeof import("./parsers/w3x/unitsdoo/droppeditem").default;
                InventoryItem: typeof import("./parsers/w3x/unitsdoo/inventoryitem").default;
                ModifiedAbility: typeof import("./parsers/w3x/unitsdoo/modifiedability").default;
                RandomUnit: typeof import("./parsers/w3x/unitsdoo/randomunit").default;
            };
            w3f: {
                File: typeof import("./parsers/w3x/w3f/file").default;
                MapTitle: typeof import("./parsers/w3x/w3f/maptitle").default;
                MapOrder: typeof import("./parsers/w3x/w3f/maporder").default;
            };
        };
        blp: {
            Image: typeof import("./parsers/blp/image").BlpImage;
        };
        dds: {
            Image: typeof import("./parsers/dds/image").DdsImage;
            FOURCC_DXT1: number;
            FOURCC_DXT3: number;
            FOURCC_DXT5: number;
            FOURCC_ATI2: number;
            isDds: typeof import("./parsers/dds/isformat").default;
        };
        tga: {
            Image: typeof import("./parsers/tga/image").default;
            isTga: typeof import("./parsers/tga/isformat").default;
        };
    };
    viewer: {
        ModelViewer: typeof import("./viewer/viewer").default;
        Scene: typeof import("./viewer/scene").default;
        Camera: typeof import("./viewer/camera").default;
        Model: typeof import("./viewer/model").default;
        ModelInstance: typeof import("./viewer/modelinstance").default;
        Texture: typeof import("./viewer/texture").default;
        GenericResource: typeof import("./viewer/genericresource").default;
        handlers: {
            blp: {
                isValidSource(object: any): boolean;
                resource: typeof import("./viewer/handlers/blp/texture").default;
            };
            dds: {
                load(viewer: import("./viewer/viewer").default): void;
                isValidSource(object: any): boolean;
                resource: typeof import("./viewer/handlers/dds/texture").default;
            };
            m3: {
                load(viewer: import("./viewer/viewer").default): void;
                isValidSource(object: any): boolean;
                resource: typeof import("./viewer/handlers/m3/model").default;
            };
            mdx: {
                load(viewer: import("./viewer/viewer").default, pathSolver?: import("./viewer/handlerresource").PathSolver | undefined, reforgedTeams?: boolean | undefined): void;
                isValidSource(object: any): boolean;
                resource: typeof import("./viewer/handlers/mdx/model").default;
            };
            tga: {
                isValidSource(object: any): boolean;
                resource: typeof import("./viewer/handlers/tga/texture").default;
            };
            War3MapViewer: typeof import("./viewer/handlers/w3x/viewer").default;
        };
    };
    utils: {
        UnitTester: typeof import("./utils/unittester").default;
        blp: {
            sanityTest: typeof import("./utils/blp/sanitytest").default;
        };
        MappedData: typeof import("./utils/mappeddata").MappedData;
        jass2: {
            Context: typeof import("./utils/jass2/context").default;
            jass2lua: typeof import("./utils/jass2/jass2lua").default;
            types: typeof import("./utils/jass2/types");
            compileNatives: typeof import("./utils/jass2/compilenatives").default;
        };
        mdlx: {
            sanityTest: typeof import("./utils/mdlx/sanitytest/sanitytest").default;
            createPrimitive: typeof import("./utils/mdlx/primitives/createprimitive").default;
            primitives: typeof import("./utils/mdlx/primitives/primitives");
            mdlStructure: typeof import("./utils/mdlx/mdlstructure").default;
        };
        w3x: {
            convertWeu: typeof import("./utils/w3x/weu/weu").default;
            generateListfile: typeof import("./utils/w3x/generatelistfile").default;
        };
    };
};
export default _default;
