import React from "react";
import { Link, Outlet } from "react-router-dom";

import CommonButton from "../../components/button/commonButton/CommonButton";
import Navbar from "../../components/navbar/Navbar";
import "./Home.css";


const Home = () => {
  return (
    <>
      <Navbar />
      <section className="table-button-choice">
        <Link to="users">
          <CommonButton type="body-button" value="User" />
        </Link>
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
