import React from "react";
import TweetbyPostId from "../hashtag/TweetbyPostId";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "./../../components/navbar/Navbar";
import "./Link2.scss";

const Link3 = () => {
  return (
    <div className="customers">
      <Sidebar />
      <div className="customersContainer">
        <Navbar />
        <TweetbyPostId />
      </div>
    </div>
  );
};

export default Link3;
