import { useState } from "react";
import LoginPage from "./loginPage";
import SiginPage from "./signinPage";
import DisplayVehicle from "./vehicleDisplay.jsx";

export default function MainSection() {
  const [userLogin, setUserLogin] = useState("0");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [saveDetails, setSaveDetails] = useState("");

  const setters = {
    setUsername,
    setPassword,
    setEmail,
    setFirstName,
    setLastName,
  };

  const state = {
    username,
    password,
    email,
    firstName,
    lastName,
  };

  let vehicleList = [
    {
      name: "car1",
      type: "4 Wheeler",
      status: "available",
    },

    {
      name: "car2",
      type: "4 Wheeler",
      status: "unavailable",
    },

    {
      name: "car3",
      type: "8 Wheeler",
      status: "available",
    },

    {
      name: "car4",
      type: "8 Wheeler",
      status: "available",
    },

    {
      name: "car5",
      type: "12 Wheeler",
      status: "unavailable",
    },
  ];

  function DisplayLogin() {
    setUserLogin("1");
  }

  function DisplaySigin() {
    setUserLogin("2");
  }

  return (
    <div id="mainSection">
      <div className="mainHeadingContainer">
        Neo Metaliks vehicle requisition form
      </div>
      <div id="buttonContainer">
        <button className="sigin" onClick={DisplaySigin}>
          Signin
        </button>
        <button className="login" onClick={DisplayLogin}>
          Login
        </button>
      </div>
      {userLogin === "1" && (
        <LoginPage
          setUserLogin={setUserLogin}
          loginUsername={loginUsername}
          setLoginUsername={setLoginUsername}
          loginPassword={loginPassword}
          setLoginPassword={setLoginPassword}
        />
      )}
      {userLogin === "2" && (
        <SiginPage
          {...setters}
          {...state}
          saveDetails={saveDetails}
          setSaveDetails={setSaveDetails}
          setUserLogin={setUserLogin}
        />
      )}
      {userLogin === "4" && <DisplayVehicle vehicleList={vehicleList} />}
    </div>
  );
}
