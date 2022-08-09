import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as HiIcons from "react-icons/hi";
import BurgerInbox from "../BurgerInbox";
import InboxIcon from '@mui/icons-material/Inbox';
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import "./burger.css";

function Nav() {
  const [sidebar, setSidebar] = useState(false);
  const [inboxSidebar, setInboxSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const showInboxSidebar = () => {
    setInboxSidebar(!inboxSidebar);
  };

  return (
    <div>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            {/* <FaIcons.FaBars onClick={showSidebar} /> */}
            <img
              src="https://static1.personality-database.com/profile_images/90b97eb971164bc3a6fc41f63226a92a.png"
              alt="avatar"
              className="nav-avatar"
              onClick={showSidebar}
            />
          </Link>
          <div className="nav-inbox" onClick={showInboxSidebar}>
            <div className="active-filter">
            <InboxIcon className="nav-inbox-icon"/>
            </div>
          </div>
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
        <nav className={inboxSidebar ? "navbar-inbox active" : "navbar-inbox"}>
          <ul className="nav-menu-items" onClick={showInboxSidebar}>
            <li className="navbar-inbox-toggle">
              <Link to="#" className="nav-menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <BurgerInbox />
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default Nav;
