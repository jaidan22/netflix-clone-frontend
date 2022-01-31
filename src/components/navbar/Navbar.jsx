import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import React, { useState } from "react";
import "./navbar.scss";
import profile from "../../images/profile.jpg";
import logo from "../../images/icon.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => {
      window.onscroll = null;
    };
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src={logo} alt="netflix logo" />
          <span>Home</span>
          <span>TV Shows</span>
          <span>Movies</span>
          <span>Recently Added</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>Kids</span>
          <Notifications className="icon" />
          <img src={profile} alt="user" />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
