import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../contexts/UserContext";
import Logo from "../../assets/Logo.jpeg";
import CommonButton from "../button/commonButton/CommonButton";
import "./Navbar.css";


function Navbar() {
  const { setCurrentUser } = useAuth();
  const [isLoggedIn, setIsLoogedIn] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    setCurrentUser({});
    localStorage.removeItem("accessToken");
    navigate("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setIsLoogedIn(true);
    }
  }, []);

  return (
    <div className="styled-navbar">
      <div className="nav-items">
        <img src={Logo} />
      </div>
      <div className="nav-items">
        {isLoggedIn == false ? (
          <>
            <Link to="/">
              <CommonButton type="nav-button" value="Login" />
            </Link>
            <Link to="/signup">
              <CommonButton type="nav-button" value="Signup" />
            </Link>
          </>
        ) : (
          <CommonButton
            onClick={handleClick}
            type="nav-button"
            value="Logout"
          />
        )}
      </div>
    </div>
  );
}

export default Navbar;
