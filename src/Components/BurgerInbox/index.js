import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { Link } from "react-router-dom";

export default function BurgerInbox() {

  const SidebarData = [
    {
      title: "Home",
      path: "/home",
      icon: <AiIcons.AiFillHome />,
      cName: "nav-text",
    },
    {
      title: "My Listings",
      path: "/mylistings",
      icon: <IoIcons.IoIosPaper />,
      cName: "nav-text",
    },
    {
      title: "Messages",
      path: "/messages",
      icon: <IoIcons.IoIosChatbubbles />,
      cName: "nav-text",
    },
    {
      title: "Settings",
      path: "/settings",
      icon: <IoIcons.IoIosSettings />,
      cName: "nav-text",
    },
  ];

  return (
    <div>
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
    </div>
  )
}
