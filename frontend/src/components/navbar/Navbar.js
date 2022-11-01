import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="styled-navbar">
      <Link className="navitem-link" to="/login">
        Login
      </Link>
      <Link className="navitem-link" to="/signup">
        Sign Up
      </Link>
    </div>
  );
}

export default Navbar;
