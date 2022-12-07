import React from 'react';
// import Login from "./components/login.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header.js";
import Sidemanu from "./components/sidemanu.js";

import Profile from "./components/profile.js";
import Onboarding from './components/onboarding.js';
function App() {
  return (
    <>
    {/* <Login/> */}
    <Header/>
    <Sidemanu/>
    <Profile/>
    <Onboarding/>
    </>
    
  );
}

export default App;
