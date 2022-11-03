import Commonbtn from "../../components/button/commonButton/CommonButton";
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
            <Commonbtn type="body-button" value="User" />
          </Link>
          <Link to="resource">
            <Commonbtn type="body-button" value="Resources" />
          </Link>
          <Link to="occupancy">
            <Commonbtn type="body-button" value="Occupancies" />
          </Link>
      </section>
      <Outlet />
    </>
  );
};

export default Home;