import {ICoordinate} from "../models/CoordinateInterface.ts";

export function parseCoordinates(data: ICoordinate[]): [number, number][] {
    const coords = [];
    data.map((coord: ICoordinate) => {
        coords.push([coord.lat, coord.long]);
    });
    console.log('parseCoordinates', coords);
    return coords;
}