import React from "react";
import { Route, Routes } from "react-router-dom";
import { Nav } from "./Components";
import { HomePage, MyListings, Registration, MessageInbox, MessagePage } from "./Pages";
import Layout from "./Layout";
import "./App.css";


function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Registration/>}/>
          <Route element={<Layout/>} >
            <Route path="/home" element={<HomePage />} />
            <Route path="/mylistings" element={<MyListings />} />
            <Route path="/messages" >
              <Route path="/messages/inbox" element={<MessageInbox />} />
              <Route path="/messages/:offer_id" element={<MessagePage />} />
            </Route>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
