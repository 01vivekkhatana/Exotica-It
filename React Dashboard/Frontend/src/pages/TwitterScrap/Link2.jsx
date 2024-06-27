import React from "react";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "./../../components/navbar/Navbar";
import "./Link2.scss";

import TrendingHashtag from "../hashtag/TrendingHashtag";
const Link2 = () => {
  return (
    <div className="customers">
      <Sidebar />
      <div className="customersContainer">
        <Navbar />
        <TrendingHashtag />
      </div>
    </div>
  );
};

export default Link2;
