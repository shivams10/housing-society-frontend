import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/Logo.jpeg";
import CommonBtn from "../button/commonButton/CommonButton";

function Navbar() {
  return (
    <div className="styled-navbar">
      <div className="nav-items">
        <img src={Logo} />
      </div>
      <div className="nav-items">
        <Link to="/">
        <CommonBtn type="nav-button" value="Login" />
        </Link>
        <Link to="/signup">
        <CommonBtn type="nav-button" value="Signup" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
