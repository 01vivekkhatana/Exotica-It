import React from "react";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "./../../components/navbar/Navbar";
import "./Link2.scss";
import Hashtag from "../hashtag/Hashtag";

const Linkk2 = () => {
  return (
    <div className="customers">
      <Sidebar />
      <div className="customersContainer">
        <Navbar />
        <Hashtag />
      </div>
    </div>
  );
};

export default Linkk2;
