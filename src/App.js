import React from "react";
import { Route, Routes } from "react-router-dom";
import { Nav } from "./Components";
import { HomePage, MyListings, Registration, MessageInbox } from "./Pages";
import "./App.css";


function App() {
  return (
    <div>
      <Nav pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      {/* <h1 className="title"></h1> */}
      <Routes>
        <Route path="/" element={<Registration/>}/>
        <Route path="/home" element={<HomePage />} />
        <Route path="/mylistings" element={<MyListings />} />
        <Route path="/messages" element={<MessageInbox />} />
      </Routes>
    </div>
  );
}

export default App;
