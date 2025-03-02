import {ICoordinate} from "../models/CoordinateInterface.ts";

export function parseCoordinates(data: ICoordinate[]): [number, number][] {
    const coords:[number,number][] = [];
    data.map((coord: ICoordinate) => {
        coords.push([coord.lat, coord.long]);
    });


    return coords;
}