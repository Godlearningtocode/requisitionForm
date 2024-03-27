import { useState } from 'react'
import './App.css'
import HomePage from './homePage'
import LoginPage from './loginPage'
import SiginPage from './signinPage'
import DisplayVehicle from './vehicleDisplay' 

function App() {
  const [userLogin, setUserLogin] = useState("0");
  const [loginUsername, setLoginUsername] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [saveDetails, setSaveDetails] = useState("")
  const [vehicleStatus, setVehicleStatus] = useState("0")

  const setters = {
    setUsername,
    setPassword,
    setEmail,
    setFirstName,
    setLastName
  }

  const state = {
    username,
    password,
    email,
    firstName,
    lastName
  }

  return (
    <div id="mainSection">
      {userLogin === "0" && <HomePage setUserLogin={setUserLogin}/>}
      {userLogin === "1" && <LoginPage setUserLogin={setUserLogin} loginUsername={loginUsername} setLoginUsername={setLoginUsername} loginPassword={loginPassword} setLoginPassword={setLoginPassword} />}
      {userLogin === "2" && <SiginPage {...setters} {...state} saveDetails={saveDetails} setSaveDetails={setSaveDetails} setUserLogin={setUserLogin} />}
      {userLogin === "4" && <DisplayVehicle vehicleStatus={vehicleStatus} setVehicleStatus={setVehicleStatus} />}
    </div>
  )
}

export default App
