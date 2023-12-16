import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Body from "../Body/Body";
import Activity from "../Activity/Activity";

const Home = () => {
  return (
    <div>
      <div className="flex">
        <div className="home-container bg-gray-100">
          <Header></Header>
          <Body></Body>
        </div>
        <div className="">
          <Activity></Activity>
        </div>
      </div>
    </div>
  );
};

export default Home;
