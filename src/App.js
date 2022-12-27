import React from 'react';
// import Login from "./components/login.js";
import "bootstrap/dist/css/bootstrap.min.css";
// import Header from "./components/header.js";
// import Sidemanu from "./components/sidemanu.js";

// import Profile from "./components/profile.js";
// import Onboarding from './components/onboarding.js';
import "../src/css/alert.css"
import Alert from './components/alert.js';
import Activity from './components/activity.js';
import Tank from './components/tank.js';
import Tank1 from './components/tank1.js';
import Tank2 from './components/tank2.js';
import Tank3 from './components/tank3.js';
// import Alert3 from './components/alert3.js';

function App() {
  return (
    <>
    {/* <Login/> */}
    {/* <Header/>
    <Sidemanu/>
    <Profile/>
    <Onboarding/> */}
    <Alert/>
    <Activity/>
    <Tank/>
    <Tank1/>
    <Tank2/>
    <Tank3/>
    {/* <Alert3/> */}
    </>
    
  );
}

export default App;
