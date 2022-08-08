import React from "react";
import { Link } from "react-router-dom";
// import { HomePage, MyListings } from "../../Pages";
import { slide as Menu } from "react-burger-menu";
import "./burger.css";

function Nav() {
  return (
    <div>
      {/* <h1>Borgir</h1>
      <nav>
        <Link to="home">Home</Link>
        <br />
        <Link to="mylistings">My Listings</Link>
      </nav> */}
      <Menu>
        <a className="menu-item" href="/">
          Home
        </a>
        <Link className="menu-item" to="home">
          Home
        </Link>
        <Link className="menu-item" to="mylistings">
          My Listings
        </Link>
      </Menu>
    </div>
  );
}

export default Nav;
