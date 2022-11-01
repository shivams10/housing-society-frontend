import React from "react";
import { Link, Outlet } from "react-router-dom";
import Commonbtn from "../../components/button/commonbtn/CommonBtn";
import Navbar from "../../components/navbar/Navbar";
import "./Home.css";
const Home = () => {
  return (
    <>
      <Navbar />
      <section className="">
        <div className="home-banner">
        </div>
        <div className="choice-btn">
        <Link to="user"><Commonbtn type="body-button" value="Users"/></Link>
        <Link to="resource"><Commonbtn type="body-button" value="Resources"/></Link>
        <Link to="occupancy"><Commonbtn type="body-button" value="Occupancies"/></Link>
        </div>
      </section>
    <Outlet/>
    </>
  );
};

export default Home;
