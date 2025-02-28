import React, {createContext, useContext, useState} from 'react';
import {ICoordinate} from "../models/CoordinateInterface.ts";
import {IDistrictData} from "../models/DistrictDataInterface.ts";

interface MapContextType {
    districts2Render: IDistrictData | IDistrictData[];
    updateMap: (data: IDistrictData | IDistrictData[]) => void;
}

const MapContext = createContext<MapContextType | null>(null);

export const useMapUpdate = () => {
    const context = useContext(MapContext);
    if (!context) throw new Error("useMapUpdate must be used inside MapProvider");
    return context;
};

export const MapProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [districts, setDistricts] = useState<IDistrictData | IDistrictData[]>(null);


    const updateMap = (data: IDistrictData | IDistrictData[]) => {
        setDistricts(null);
        setTimeout(() => {
            setDistricts(data);
        }, 100);
    };

    return (
        <MapContext.Provider value={{districts2Render: districts, updateMap}}>
            {children}
        </MapContext.Provider>
    );
};

