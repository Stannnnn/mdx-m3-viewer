import BinaryStream from '../../../common/binarystream';
/**
 * A camera.
 */
export default class Camera {
    targetLocation: Float32Array;
    rotation: number;
    angleOfAttack: number;
    distance: number;
    roll: number;
    fieldOfView: number;
    farClippingPlane: number;
    nearClippingPlane: number;
    cinematicName: string;
    load(stream: BinaryStream): void;
    save(stream: BinaryStream): void;
    getByteLength(): number;
}
