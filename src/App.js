import React from "react";
import { Route, Routes } from "react-router-dom";
import { Nav } from "./Components";
import { HomePage, MyListings } from "./Pages";
import "./App.css";

function App() {
  return (
    <div>
      <Nav pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <h1 className="title">Let's begin!</h1>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/mylistings" element={<MyListings />} />
      </Routes>
    </div>
  );
}

export default App;
