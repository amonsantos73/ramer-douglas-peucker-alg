import {ICoordinate} from "../models/CoordinateInterface.ts";

/**
 * Ramer Douglas Peucker Algortithm implementation is Typescript
 * @param line List of coordinates to simplify
 * @param epsilon Resolution of reduction of the algorithm
 * */

export function RDP(line: ICoordinate[], epsilon: number): ICoordinate[] {
    console.log('RDP', line.length, epsilon);
    const startIndex = 0;
    const endIndex = line.length - 1;

    let maxDistance = 0;
    let maxDistanceIndex = 0;

    for (let i = 0; i < line.length; i++) {
        let distance = perpendicularDistance(line[i], line[startIndex], line[endIndex]);
        if (distance > maxDistance) {
            maxDistance = distance;
            maxDistanceIndex = i;
        }

    }

    if (maxDistance > epsilon) {
        let left = RDP(line.slice(startIndex, maxDistanceIndex + 1), epsilon);
        let right = RDP(line.slice(maxDistanceIndex), epsilon);

        return left.slice(0, -1).concat(right);
    } else {
        return [line[startIndex], line[endIndex]];
    }
}

function perpendicularDistance(coord: ICoordinate, startCoord: ICoordinate, endCoord: ICoordinate): number {
    // Verifies the line is vertical
    if (startCoord.lat === endCoord.lat) {
        return Math.abs(coord.lat - startCoord.lat);
    }

    const A = endCoord.long - startCoord.long;
    const B = startCoord.lat - endCoord.lat;
    const C = endCoord.lat * startCoord.long - startCoord.lat * endCoord.long;

    const distance = Math.abs(A * coord.lat + B * coord.long + C) / Math.sqrt((A ** 2 + B ** 2));

    return distance;
}