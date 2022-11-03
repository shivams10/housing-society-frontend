import "./Navbar.css";
import Logo from "../../assets/Logo.jpeg";
import CommonButton from "../button/commonButton/CommonButton";
import { useAuth } from "../../contexts/UserContext";

import React, { useEffect } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const { currentUser, setCurrentUser } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    setCurrentUser({});
    localStorage.removeItem("accessToken");
    navigate("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    token &&
      Axios.get(`${process.env.REACT_APP_BASE_URL}/user`, config)
        .then((response) => {
          setCurrentUser({ ...response.data });
        })
        .catch((error) => console.log(error));
  }, []);

  return (
    <div className="styled-navbar">
      <div className="nav-items">
        <img src={Logo} />
      </div>
      <div className="nav-items">
        {Object.keys(currentUser).length === 0 ? (
          <Link to="/">
            <CommonButton type="nav-button" value="Login" />
          </Link>
        ) : (
          <CommonButton
            onClick={handleClick}
            type="nav-button"
            value="Logout"
          />
        )}
        <Link to="/signup">
          <CommonButton type="nav-button" value="Signup" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
