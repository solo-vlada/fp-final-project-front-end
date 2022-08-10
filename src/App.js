import React from "react";
import { Route, Routes } from "react-router-dom";
import { Nav } from "./Components";
import { HomePage, MyListings, Registration, MessageInbox, MessagePage } from "./Pages";
import Layout from "./Layout";
import "./App.css";


function App() {
  return (
    <div>
      {/* <h1 className="title"></h1> */}
      <Routes>
        <Route path="/" element={<Registration/>}/>
        <Route element={<Layout/>} >
          <Route path="/home" element={<HomePage />} />
          <Route path="/mylistings" element={<MyListings />} />
          <Route path="/messages" element={<MessageInbox />} >
            <Route path="/messages/:id" element={<MessagePage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
