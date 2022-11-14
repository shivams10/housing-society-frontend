import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { useAuth } from "../../contexts/UserContext";
import CommonButton from "../../components/button/commonButton/CommonButton";
import Navbar from "../../components/navbar/Navbar";
import "./Home.css";

const Home = () => {
  const [isAdmin, setIsAdmin] = useState(0);

  const { currentUser } = useAuth();

  function parseJwt(token) {
    if (!token) {
      return;
    }
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
  }

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (currentUser) {
      if (token) {
        const decode = parseJwt(token);
        setIsAdmin(decode.result.is_admin);
      }
    }
  }, [isAdmin]);

  return (
    <>
      <Navbar />
      <section className="table-button-choice">
        {isAdmin ? (
          <>
            <Link to="users">
              <CommonButton type="body-button" value="User" />
            </Link>
            <Link  to="/signup">
            <CommonButton type="body-button" value="Add User" />
            </Link>
          </>
        ) : (
          <></>
        )}
        <Link to="resources">
          <CommonButton type="body-button" value="Resources" />
        </Link>
        <Link to="occupancies">
          <CommonButton type="body-button" value="Occupancies" />
        </Link>
      </section>
      <Outlet />
    </>
  );
};

export default Home;
