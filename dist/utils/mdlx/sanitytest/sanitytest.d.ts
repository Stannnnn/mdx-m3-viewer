import Model from '../../../parsers/mdlx/model';
/**
 * Run a sanity test on the model and return the results.
 */
export default function sanityTest(model: Model): {
    type: string;
    nodes: (import("./data").SanityTestNode | import("./data").SanityTestMessage)[];
    errors: number;
    severe: number;
    warnings: number;
    unused: number;
};
