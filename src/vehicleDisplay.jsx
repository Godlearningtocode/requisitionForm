/* eslint-disable react/prop-types */
import { useState } from "react";

export default function DisplayVehicle({vehicleList}) {

    return (
        <div id="vehicleListContainer">
            <div className="displayForm">
                <label htmlFor="pickVehicle">Choose a vehicle</label>
                <select name="pickVehicle" id="pickVehicle">
                    {vehicleList.map((element, index) => (
                        <option value={element.name} key={element.name + index} >{element.name}</option>
                    ))}
                </select>
            </div>
        </div>
      );
}
