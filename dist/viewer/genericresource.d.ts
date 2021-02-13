import { Resource, ResourceData } from './resource';
/**
 * A generic resource.
 */
export default class GenericResource extends Resource {
    data: any;
    constructor(data: any, resourceData: ResourceData);
}
