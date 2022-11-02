import React from "react";
import { Link, Outlet } from "react-router-dom";
import Commonbtn from "../../components/button/commonbtn/CommonBtn";
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../assets/Banner.png"
import "./Home.css";
const Home = () => {
  return (
    <>
      <Navbar />
      <section className="home">
        <div className="banner">
          <img src={Banner} />
        </div>
        <div className="choice-btn">
          <h2>Press Button to show data</h2>
          <Link to="user">
            <Commonbtn type="body-button" value="User" />
          </Link>
          <Link to="resource">
            <Commonbtn type="body-button" value="Resources" />
          </Link>
          <Link to="occupancy">
            <Commonbtn type="body-button" value="Occupancies" />
          </Link>
        </div>
      </section>
      <Outlet />
    </>
  );
};

export default Home;