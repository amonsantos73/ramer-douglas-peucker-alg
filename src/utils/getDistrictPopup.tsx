import {JSX} from "react";
import {IDistrictData} from "../models/DistrictDataInterface.ts";
import {Popup} from "react-leaflet";

export function getDistrictPopup(district: IDistrictData): JSX.Element {
    return (
        <Popup offset={[0, 20]} opacity={1}>
            <div>
                <p><strong>District Name:</strong> {district.districtName}</p>
                <p><strong>Abbreviation:</strong> {district.districtAbv}</p>
                <p><strong>Original Size:</strong> {district.originalSize}</p>
                <p><strong>Number of Coordinates:</strong> {district.numberOfCoordinates}</p>
            </div>
        </Popup>
    );
}
