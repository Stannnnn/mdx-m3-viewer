import ModelViewer from '../viewer/viewer';
import { Resource } from '../viewer/resource';
import Scene from '../viewer/scene';
import Camera from '../viewer/camera';
import { PathSolver } from '../viewer/handlerresource';
/**
 * The signature of a test loader.
 *
 * The returned data will be passed to the handler.
 */
declare type TestLoader = (viewer: ModelViewer) => any;
/**
 * The signature of a test handler.
 */
declare type TestHandler = (viewer: ModelViewer, scene: Scene, camera: Camera, data: any) => void;
/**
 * The recursive test structure passed to the unit tester.
 *
 * In reality either `load` and `test` should be defined, or `tests` should be defined.
 */
interface RecursiveTest {
    name: string;
    load?: TestLoader;
    test?: TestHandler;
    tests?: RecursiveTest[];
}
/**
 * The internal type used by the tester.
 */
interface Test {
    name: string;
    test: RecursiveTest;
}
/**
 * The result given to the callback when running the tests.
 */
interface TestResult {
    done: boolean;
    value?: {
        name: string;
        testImage?: HTMLImageElement;
        comparisonImage?: HTMLImageElement;
        mismatchPercentage: number;
    };
}
/**
 * The result given to the callback when downloading the tests.
 */
interface DownloadResult {
    done: boolean;
    value?: {
        name: string;
        blob?: Blob;
    };
}
/**
 * A unit tester designed for the model viewer.
 * The input of each test is a pre-defined scene, and the output is the rendered image.
 * The image is then compared to another image generated from the same test, at a time when rendering it was considered "correct".
 */
export default class UnitTester {
    viewer: ModelViewer;
    mathRandom: () => number;
    tests: Test[];
    constructor(wc3PathSolver: PathSolver);
    /**
     * Add a test or a hierarchy of tests.
     */
    add(test: RecursiveTest): void;
    /**
     * Run all of the tests that were added.
     * The callback will be called with the result of each one.
     * The results look like iterators: {done: true/false, value: undefine/result }.
     */
    test(callback: (testResult: TestResult) => void): Promise<void>;
    /**
     * Run all of the tests that were added, and download them.
     * The tests are not compared against anything.
     * This is used to update the "correct" results.
     */
    download(callback: (testResult: DownloadResult) => void): Promise<void>;
    /**
     * Is the given resource or array of resources ok?
     */
    isDataAGo(data: Resource | Resource[]): boolean;
    /**
     * Given a test, return a promise that will resolve to the blob that resulted from running the test.
     */
    getTestBlob(test: Test): Promise<Blob | null | undefined>;
    /**
     * Given a test, return a promise that will resolve to the comparison image of this test.
     */
    getComparisonBlob(test: Test): Promise<Blob | undefined>;
    /**
     * Adds tests from an hierarchy while appending their names.
     * Called automatically by add() if needed.
     */
    addBaseName(tests: RecursiveTest[], baseName: string): void;
}
export {};
