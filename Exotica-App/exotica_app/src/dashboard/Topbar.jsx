import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

function Topbar() {


    const toggleSidebar = () => {
        $('.sidebar, .content').toggleClass("open");
        return false;
    };

    const handleLogout = () => {
        localStorage.clear();
        // Reload the page
        window.location.reload();
    };
    return (
        <>
                {/* Navbar Start */}
                <nav class="navbar navbar-expand adfsc navbar-dark sticky-top px-4 py-0">
                    {/* <a href="" class="navbar-brand d-flex d-lg-none me-4">
                        <h2 class="text-primary mb-0">
                            <i class="fa fa-user-edit"></i>
                        </h2>
                    </a> */}

                    <a href="#" class="sidebar-toggler flex-shrink-0" onClick={toggleSidebar}>
                        <i class="fa fa-bars"></i>
                    </a>
                    <form class="d-none d-md-flex ms-4">
                        <input
                            class="form-control  border-0"
                            type="search"
                            placeholder="Search"
                        />
                    </form>
                    <div class="navbar-nav align-items-center ms-auto">
                        <div class="nav-item dropdown">
                            <a
                                href="#"
                                class="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                            >
                                <i class="fa fa-envelope me-lg-2"></i>
                                <span class="d-none d-lg-inline-flex">Message</span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                                <a href="#" class="dropdown-item">
                                    <div class="d-flex align-items-center">
                                        <img
                                            class="rounded-circle"
                                            src="img/user.jpg"
                                            alt=""
                                            style={{ width: "40px", height: " 40px" }}
                                        />
                                        <div class="ms-2">
                                            <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                                            <small>15 minutes ago</small>
                                        </div>
                                    </div>
                                </a>
                                <hr class="dropdown-divider" />
                                <a href="#" class="dropdown-item">
                                    <div class="d-flex align-items-center">
                                        <img
                                            class="rounded-circle"
                                            src="img/user.jpg"
                                            alt=""
                                            style={{ width: "40px", height: " 40px" }}
                                        />
                                        <div class="ms-2">
                                            <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                                            <small>15 minutes ago</small>
                                        </div>
                                    </div>
                                </a>
                                <hr class="dropdown-divider" />
                                <a href="#" class="dropdown-item">
                                    <div class="d-flex align-items-center">
                                        <img
                                            class="rounded-circle"
                                            src="user.png"
                                            alt=""
                                            style={{ width: "40px", height: " 40px" }}
                                        />
                                        <div class="ms-2">
                                            <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                                            <small>15 minutes ago</small>
                                        </div>
                                    </div>
                                </a>
                                <hr class="dropdown-divider" />
                                <a href="#" class="dropdown-item text-center">
                                    See all message
                                </a>
                            </div>
                        </div>
                        <div class="nav-item dropdown">
                            <a
                                href="#"
                                class="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                            >
                                <i class="fa fa-bell me-lg-2"></i>
                                <span class="d-none d-lg-inline-flex">Notificatin</span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                                <a href="#" class="dropdown-item">
                                    <h6 class="fw-normal mb-0">Profile updated</h6>
                                    <small>15 minutes ago</small>
                                </a>
                                <hr class="dropdown-divider" />
                                <a href="#" class="dropdown-item">
                                    <h6 class="fw-normal mb-0">New user added</h6>
                                    <small>15 minutes ago</small>
                                </a>
                                <hr class="dropdown-divider" />
                                <a href="#" class="dropdown-item">
                                    <h6 class="fw-normal mb-0">Password changed</h6>
                                    <small>15 minutes ago</small>
                                </a>
                                <hr class="dropdown-divider" />
                                <a href="#" class="dropdown-item text-center">
                                    See all notifications
                                </a>
                            </div>
                        </div>
                        <div class="nav-item dropdown">
                            <a
                                href="#"
                                class="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                            >
                                <img
                                    class="rounded-circle me-lg-2"
                                    src="/user.png"
                                    alt=""
                                    style={{ width: "40px", height: " 40px" }}
                                />
                                <span class="d-none d-lg-inline-flex">John Doe</span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                                <Link to="/admin/dashboard/profile-setting" class="dropdown-item">
                                    My Profile
                                </Link>
                                <a href="#" class="dropdown-item">
                                    Settings
                                </a>
                                <Link to="#" class="dropdown-item" onClick={handleLogout}>
                                    Log Out
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* Navbar end */}
        </>
    );
}

export default Topbar;