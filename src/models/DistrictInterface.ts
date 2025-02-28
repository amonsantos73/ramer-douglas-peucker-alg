import {ICoordinate} from "./CoordinateInterface.ts";

export interface IDistrict {
    districtAbv:string;
    districtName:string
    coordinates: ICoordinate[];
}