import React from "react";
import { Route, Routes } from "react-router-dom";
import { Nav } from "./Components";
import { HomePage, MyListings, Registration } from "./Pages";

function App() {
  return (
    <div>
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Registration/>}/>
        <Route path="/home" element={<HomePage />} />
        <Route path="/mylistings" element={<MyListings />} />
      </Routes>
    </div>
  );
}

export default App;
