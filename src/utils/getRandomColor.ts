import {polygonColors} from "../statics/polygonColors.ts";

export function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * polygonColors.length);
    return polygonColors[randomIndex].hex;
}