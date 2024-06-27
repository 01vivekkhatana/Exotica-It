import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./UserProfile.scss";
import GetProfile from "../hashtag/GetProfile";
function UserProfile() {
  return (
    <div className="customers">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="customersContainer">
        <Navbar />

        <GetProfile />
      </div>
    </div>
  );
}

export default UserProfile;
