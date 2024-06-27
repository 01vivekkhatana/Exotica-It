import React from 'react';
import $ from "jquery";
import { Link } from 'react-router-dom';
function Sidebar() {
  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();
  return (
    <>
      {/* Spinner Start */}
      <div
        id="spinner"
        class="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div
          class="spinner-border text-primary"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      {/* Spinner End */}

      {/* Sidebar Start */}
      <div class="sidebar pe-4 pb-3">
          <nav class="navbar  navbar-dark">
            <a href="" class="navbar-brand mx-4 mb-3">
              <h3 class="text-primary"><img src="/new_exotica_logo.png" alt="" id="logo" /></h3>
            </a>
            <div class="navbar-nav w-100">
              <Link to="/admin/dashboard" class="nav-item nav-link active">
                <i class="fa fa-tachometer-alt me-2"></i>Dashboard</Link>
              {/* <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  <i class="fa fa-laptop me-2"></i>Side Setting</a>
                <div class="dropdown-menu bg-transparent border-0">
                  <a href="" class="dropdown-item">Buttons</a>
                  <a href="" class="dropdown-item">Typography </a>
                  <a href="" class="dropdown-item"> Other Elements</a>
                </div>
              </div> */}
              <Link to="/admin/dashboard/nav-bar" class="nav-item nav-link">
                <i class="fa fa-th me-2"></i>NavBar-Footer</Link>
              {/* <Link href="" class="nav-item nav-link">
                <i class="fa fa-keyboard me-2"></i>Footer</Link> */}
              <Link to="/admin/dashboard/banner" class="nav-item nav-link">
                <i class="fa fa-table me-2"></i>Banner</Link>
              <a href="" class="nav-item nav-link">
                <i class="fa fa-chart-bar me-2"></i>Charts</a>
              <div class="nav-item dropdown">
                <Link href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  <i class="far fa-file-alt me-2"></i>Pages</Link>
                <div class="dropdown-menu bg-transparent border-0">
                  <Link to="" class="dropdown-item">Home</Link>
                  <Link to="" class="dropdown-item">About</Link>
                  <Link to="" class="dropdown-item">Contact</Link>
                  <Link to="" class="dropdown-item">Blog</Link>
                  <Link to="" class="dropdown-item">Portfolio</Link>
                  <Link to="" class="dropdown-item">Testimonial</Link>
                  
                </div>
              </div>
            </div>
          </nav>
        </div>
        {/* Sidebar end */}

    </>
  );
}

export default Sidebar;