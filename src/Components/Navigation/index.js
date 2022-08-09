import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { HomePage, MyListings } from "../../Pages";
import { slide as Menu } from "react-burger-menu";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import "./burger.css";
import { IconContext } from "react-icons";

function Nav() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div>
      <IconContext.Provider value={{ color: "#fff" }}>
        {/* <h1>Borgir</h1>
      <nav>
        <Link to="home">Home</Link>
        <br />
        <Link to="mylistings">My Listings</Link>
      </nav> */}
        {/* <Menu>
        <a className="menu-item" href="/">
          Home
        </a>
        <Link className="menu-item" to="home">
          Home
        </Link>
        <Link className="menu-item" to="mylistings">
          My Listings
        </Link>
      </Menu> */}

        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default Nav;
