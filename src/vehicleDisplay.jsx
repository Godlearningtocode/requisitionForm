import { useState } from "react";

export default function DisplayVehicle({ vehicleStatus, setVehicleStatus }) {
  const [selectedAvailableVehicle, setSelectedAvailableVehicle] = useState("a");
  const unavailableVehicleArray = [1, 2, 3];

  function ShowAvailableVehicle() {
    setVehicleStatus("1");
  }

  function ShowUnavailableVehicle() {
    setVehicleStatus("2");
  }

  function AvailableDetails() {
    return (
      <div id="availableVehicleContainer">
        <form className="availableVehicleForm">
          <div className="inputCard">
            <label htmlFor="availableVehicleDropdown">Available vehicle</label>
            <select
              name="availableVehicleDropdown"
              id="availableVehicleDropdown"
              value={selectedAvailableVehicle}
              onChange={(e) => setSelectedAvailableVehicle(e.target.value)}
            >
              <option value="a">a</option>
              <option value="b">b</option>
              <option value="c">c</option>
              <option value="d">d</option>
              <option value="e">e</option>
            </select>
          </div>
        </form>
        <div className="availableVehicleHeading">
          {selectedAvailableVehicle}
        </div>
      </div>
    );
  }

  function UnavailableDetails() {
    return (
      <div id="unavailableVehicleContainer">
        {unavailableVehicleArray.map((element, index) => {
          return (
            <div key={element + index} className="unavailableVehicleCard">
              {element}
            </div>
          );
        })}
      </div>
    );
  }

  function AppendVehicleDetails() {
    return (
      <div id="vehicleDetailsSection">
        {vehicleStatus === "1" && <AvailableDetails />}
        {vehicleStatus === "2" && <UnavailableDetails />}
      </div>
    );
  }

  return vehicleStatus === "0" ? (
    <div className="buttonContainer">
      <button className="availableVehicle" onClick={ShowAvailableVehicle}>
        Available Vehicle
      </button>
      <button className="unavailableVehicle" onClick={ShowUnavailableVehicle}>
        Unavailable Vehicle
      </button>
    </div>
  ) : (
    <AppendVehicleDetails />
  );
}
