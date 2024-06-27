import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  };

  return (
    <div>
      <h2>This is the Dashboard page and you can work </h2>
      <br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
