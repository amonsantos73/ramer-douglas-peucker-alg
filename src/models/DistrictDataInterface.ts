import {ICoordinate} from "./CoordinateInterface.ts";
import {IDistrict} from "./DistrictInterface.ts";

export interface IDistrictData extends IDistrict {
    originalSize: number;
    numberOfCoordinates: number;
}