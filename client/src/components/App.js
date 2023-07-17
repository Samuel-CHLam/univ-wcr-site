import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import jwt_decode from "jwt-decode";

import NavBar from "./modules/NavBar.js";
import BottomBanner from "./modules/BottomBanner.js";

import NotFound from "./pages/NotFound.js";
import Accessibility from "./pages/Accessibility.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Profile from "./pages/Profile.js";

import "../utilities.css";

import { get, post } from "../utilities";

/**
 * Define the "App" component
 */
const App = () => {
  const [userId, setUserId] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registerd in the database, and currently logged in.
        setUserId(user.googleid)
        // setCurrentUser(user)
        console.log(`You are currently logged in as ${user.name}`)
      }
    });
  }, []);

  const handleLogin = (credentialResponse) => {
    const userToken = credentialResponse.credential;
    const decodedCredential = jwt_decode(userToken);
    console.log(`Logged in as ${decodedCredential.name}`);
    post("/api/login", { token: userToken }).then((user) => {
      setUserId(user.googleid);
      // setCurrentUser(user)
    });
  };

  const handleLogout = () => {
    setUserId(undefined);
    // setCurrentUser(undefined);
    post("/api/logout");
  };

  // console.log(currentUser);

  return (
    <>
      <NavBar handleLogin={handleLogin} handleLogout={handleLogout} userId={userId}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile userId={userId} />} />
        <Route path="/privacyaccessibility" element={<Accessibility />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <BottomBanner />
    </>
  );
};

export default App;
