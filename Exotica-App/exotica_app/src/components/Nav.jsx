import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { MegaMenu } from 'primereact/megamenu';
        
function Nav() {
    useEffect(() => {
        const spinner = () => {
            setTimeout(() => {
                if ($('#spinner').length > 0) {
                    $('#spinner').removeClass('show');
                }
            }, 1);
        };
        spinner();
        // Sticky Navbar
        $(window).scroll(() => {
            if ($(window).scrollTop() > 45) {
                $('.navbar').addClass('sticky-top shadow-sm');
            } else {
                $('.navbar').removeClass('sticky-top shadow-sm');
            }
        });

        // Dropdown on mouse hover
        const $dropdown = $(".dropdown");
        const $dropdownToggle = $(".dropdown-toggle");
        const $dropdownMenu = $(".dropdown-menu");
        const showClass = "show";

        $(window).on("load resize", function () {
            if (this.matchMedia("(min-width: 992px)").matches) {
                $dropdown.hover(
                    function () {
                        const $this = $(this);
                        $this.addClass(showClass);
                        $this.find($dropdownToggle).attr("aria-expanded", "true");
                        $this.find($dropdownMenu).addClass(showClass);
                    },
                    function () {
                        const $this = $(this);
                        $this.removeClass(showClass);
                        $this.find($dropdownToggle).attr("aria-expanded", "false");
                        $this.find($dropdownMenu).removeClass(showClass);
                    }
                );
            } else {
                $dropdown.off("mouseenter mouseleave");
            }
        });
    }, []);
    // mega menu create
    return (
        <>
            {/* Spinner Start */}
            <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div className="spinner"></div>
            </div>
            {/* Spinner end */}
            <div className="container-fluid bg-dark px-5 d-lg-block home-header">
                <div className="row gx-0">
                    <div className="col-lg-8 col-md-8 col-sm-9 col-9 text-lg-start mb-2 mb-lg-0">
                        <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
                            <small className="me-3 text-light"><a href="tel:  +1 4385238809" className="cont_link"><i
                                className="fa fa-phone-alt me-2"></i> +1 4385238809</a></small>
                            <small className="me-3 text-light"><a href="tel: +91 7018 152390" className="cont_link"><i
                                className="fa fa-phone-alt me-2"></i>+91 7018 152390</a></small>
                            <small className="text-light"><a href="mailto:sales@exoticaitsolutions.com" className="cont_link"><i
                                className="fa fa-envelope-open me-2"></i>sales@exoticaitsolutions.com</a></small>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-3 col-3 text-lg-end">
                        <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>

                            <Link className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" to="https://www.facebook.com/profile.php?id=100093443127454&mibextid=ZbWKwL" target='blank'><i
                                className="fab fa-facebook-f fw-normal"></i></Link>
                            <Link className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" to="https://www.linkedin.com/company/exotica-it-solutions/" target='blank' ><i
                                className="fab fa-linkedin-in fw-normal"></i></Link>
                            <Link className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" to="https://instagram.com/exotica.itsolutions?igshid=MzNlNGNkZWQ4Mg==" target='blank'><i
                                className="fab fa-instagram fw-normal"></i></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid position-relative p-0">
                <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
                    <Link to="/" className="navbar-brand p-0">
                        <img src="/new_exotica_logo.png" alt="Exotica Logo" className="logo-img" />

                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                            <Link to="/" className="nav-item nav-link active">Home</Link>
                            <Link to="/about" className="nav-item nav-link">About</Link>
                            <div className="nav-item dropdown">
                                <Link to="/service" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Services</Link>
                                <div className="dropdown-menu mega-menu menu-service">
                                    <div className="row">
                                        <div className="col">
                                            
                                            <ul className="mega-menu-list">
                                                <li><Link to="/services/webdesign"><i class="bi bi-arrow-right text-primary me-2"></i>Web Design</Link></li>
                                                <li><Link to="/services/webdevelop"><i class="bi bi-arrow-right text-primary me-2"></i>Web Development</Link></li>
                                                <li><Link to="/services/cms"><i class="bi bi-arrow-right text-primary me-2"></i>CMS Development</Link></li>
                                            </ul>
                                        </div>
                                        <div className="col">
                        
                                            <ul className="mega-menu-list">
                                                <li><Link to="/services/custom_developer"><i class="bi bi-arrow-right text-primary me-2"></i>Custom Development</Link></li>
                                                <li><Link to="/services/database_management"><i class="bi bi-arrow-right text-primary me-2"></i>Database Management</Link></li>
                                                <li><Link to="/services/maintenance_and_support_services"><i class="bi bi-arrow-right text-primary me-2"></i>Maintenance and Support</Link></li>
                                            </ul>
                                        </div>
                                        <div className="col">
                                           
                                            <ul className="mega-menu-list">
                                                <li><Link to="/services/ecommerce_store_development"><i class="bi bi-arrow-right text-primary me-2"></i>Ecommerce Store Development</Link></li>
                                                <li><Link to="/services/seo_search_engine_optimization"><i class="bi bi-arrow-right text-primary me-2"></i>SEO</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="nav-item dropdown">
                                <Link to="/service" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Industry</Link>
                                <div className="dropdown-menu mega-menu menu-industry">
                                    <div className="row mega-m">
                                        <div className="col">
                                            <ul className="mega-menu-list">
                                                <li><Link to="/industry/health" className="dropdown-item"><i class="bi bi-arrow-right text-primary me-2"></i>Health Care</Link></li>
                                                <li><Link to="/industry/logistics" className="dropdown-item"><i class="bi bi-arrow-right text-primary me-2"></i>Logistics</Link></li>
                                                <li><Link to="" className="dropdown-item"><i class="bi bi-arrow-right text-primary me-2"></i>Wellness & Fitness</Link></li>
                                            </ul>
                                        </div>
                                        <div className="col">
                                            <ul className="mega-menu-list">
                                                <li><Link to="" className="dropdown-item"><i class="bi bi-arrow-right text-primary me-2"></i>Real Estate</Link></li>
                                                <li><Link to="" className="dropdown-item"><i class="bi bi-arrow-right text-primary me-2"></i>Food & Restaurant</Link></li>
                                                <li><Link to="" className="dropdown-item"><i class="bi bi-arrow-right text-primary me-2"></i>E-Commerce</Link></li>
                                            </ul>
                                        </div>
                                        <div className="col">
                                            <ul className="mega-menu-list">
                                                <li><Link to="" className="dropdown-item"><i class="bi bi-arrow-right text-primary me-2"></i>Education</Link></li>
                                                <li><Link to="" className="dropdown-item"><i class="bi bi-arrow-right text-primary me-2"></i>On-Demand Solutions</Link></li>
                                                <li><Link to="" className="dropdown-item"><i class="bi bi-arrow-right text-primary me-2"></i>Finance</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link to="/testimonial" className="nav-item nav-link">Testimonial</Link>
                            <Link to="/portfolio" className="nav-item nav-link">Portfolio</Link>
                            <Link to="/blog" className="nav-item nav-link">Blog</Link>
                            <Link to="/contact" className="nav-item nav-link">Contact</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Nav;