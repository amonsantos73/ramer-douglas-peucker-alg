import React, {useState} from "react";

import {DistrictOptions} from "../data/DistrictOptions.ts";
import {getDistrict} from "../services/getDistrict.ts";
import {useMapUpdate} from "../providers/MapProvider.tsx";

const FilterComponent: React.FC = () => {
    const [formValues, setFormValues] = useState({
        district: DistrictOptions.length > 0 ? DistrictOptions[0].key : "",
        resolution: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        console.log(value);
        setFormValues((prev) => ({
            ...prev,
            [name]: name === "resolution" ? Number(value) : value,
        }));
    };

    const {updateMap}= useMapUpdate();

    const handleFilter = (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        console.log("Form Values:", formValues);

        const districts2Render = getDistrict(formValues.district, formValues.resolution)
        console.log(districts2Render);
        updateMap(districts2Render);
    };

    return (
        <div className="container">
            <form>
                <div className="row">
                    <label>District</label>
                    <select className="u-full-width" id="exampleRecipientInput" name="district" onChange={handleChange}
                            value={formValues.district}>
                        {
                            DistrictOptions.map((option) => (
                                <option key={option.key} value={option.key}>
                                    {option.value}
                                </option>
                            ))}
                    </select>
                </div>
                <div>
                    <label className="label">Algorithm tolerance</label>
                    <div className="row">
                        <input type="number" name="resolution" value={formValues.resolution} onChange={handleChange}
                               className="input" step="0.0001"/>
                    </div>
                </div>
                <div className="row">
                    <button onClick={handleFilter} className="button-primary" type="button">
                        Apply Filter
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FilterComponent;

