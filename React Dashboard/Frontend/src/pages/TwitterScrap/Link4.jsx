import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "./../../components/navbar/Navbar";
import "./Link2.scss";
import Comments from "../hashtag/Comments";

const Link4 = () => {
  return (
    <div className="customers">
      <Sidebar />
      <div className="customersContainer">
        <Navbar />
        <Comments />
      </div>
    </div>
  );
};

export default Link4;
