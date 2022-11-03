import CommonButton from "../../components/button/commonButton/CommonButton";
import Navbar from "../../components/navbar/Navbar";
import "./Home.css";

import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="table-button-choice">
        <Link to="user">
          <CommonButton type="body-button" value="User" />
        </Link>
        <Link to="resource">
          <CommonButton type="body-button" value="Resources" />
        </Link>
        <Link to="occupancy">
          <CommonButton type="body-button" value="Occupancies" />
        </Link>
      </section>
      <Outlet />
    </>
  );
};

export default Home;
