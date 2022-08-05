import React from "react";
import { Route, Routes } from "react-router-dom";
import { Nav } from "./Components";
import { HomePage, MyListings } from "./Pages";

function App() {
  return (
    <div>
      <h1>Let's begin!</h1>
      <Nav />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/mylistings" element={<MyListings />} />
      </Routes>
    </div>
  );
}

export default App;
