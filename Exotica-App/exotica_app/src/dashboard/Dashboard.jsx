import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Totalreviews from "./Totalreviews";
import Projectchartsheet from "./Projectchartsheet";
import Map from "./Map";
function Dashboard() {
 
  return (
    <>
      <div className="container-fluid position-relative d-flex p-0 tuhky">
        <Sidebar/>
        <div className="content">
        <Topbar/>
        <Totalreviews/>
        <Projectchartsheet/>
        <Map/>
        </div>
      </div>
      
    </>
  );
}
export default Dashboard;
