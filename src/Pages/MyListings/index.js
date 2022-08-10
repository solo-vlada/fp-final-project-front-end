import React from "react";
import { MyListingsComp, BottomNav } from "../../Components";

function MyListings() {
  return (
    <div>
      <h1>Your items</h1>
      <MyListingsComp />
      <BottomNav />
    </div>
  );
}

export default MyListings;
