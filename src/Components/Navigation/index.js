import React from "react";
import { Link } from "react-router-dom";
// import { HomePage, MyListings } from "../../Pages";

function Nav() {
  return (
    <div>
      Nav
      <h1>Borgir</h1>
      <nav>
        <Link to="home">Home</Link>
        <br />
        <Link to="mylistings">My Listings</Link>
      </nav>
    </div>
  );
}

export default Nav;
