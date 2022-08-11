import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
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
    path: "/messages/inbox",
    icon: <IoIcons.IoIosChatbubbles />,
    cName: "nav-text",
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <IoIcons.IoIosSettings />,
    cName: "nav-text",
  },
  {
    title: "Logout",
    path: "/",
    icon: <IoIcons.IoIosLogOut />,
    cName: "nav-text",
  },
];
