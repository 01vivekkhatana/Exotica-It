import React from 'react';
import { Link } from 'react-router-dom';

function Foter() {
    const currentYear = new Date().getFullYear();
    return (
        <>
        {/* Footer Start */}
        <div class="container-fluid bg-dark text-light mt-5 wow fadeInUp" data-wow-delay="0.1s">
            <div class="container">
                <div class="row gx-5">
                    <div class="col-lg-4 col-md-6 footer-about">
                        <div
                            class="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-4">
                            <Link to="/" class="navbar-brand">
                                <img src="/new_exotica_logo.png" alt="Exotica Logo" class="logo-img"/>
                            </Link>
                            <div className="parager">
                            <p class="mt-3 mb-4">Our solutions are designed to enhance your business's efficiency,
                                profitability, and customer satisfaction. Let us help you elevate your business today.
                            </p>
                            </div>
                           
                            <form action="">
                                <div class="input-group">
                                    <input type="text" class="form-control border-white p-3" placeholder="Your Email"/>
                                    <button class="btn btn-dark">Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-8 col-md-6">
                        <div class="row gx-5">
                            <div class="col-lg-4 col-md-12 pt-5 mb-5">
                                <div class="section-title section-title-sm position-relative pb-3 mb-4">
                                    <h3 class="text-light mb-0">Get In Touch</h3>
                                </div>
                                <div class="d-flex mb-2">
                                    <i class="bi bi-geo-alt text-primary me-2"></i>
                                    <p class="mb-0">385 Edgevalley Road London, Ontario, N5v0c2</p>
                                </div>
                                <div class="d-flex mb-2">
                                    <i class="bi bi-envelope-open text-primary me-2"></i>
                                    <Link to="mailto:info@exoticaitsolutions.com">
                                        <p class="mb-0">info@exoticaitsolutions.com</p>
                                    </Link>
                                </div>
                                <div class="d-flex mb-2">
                                    <i class="bi bi-envelope-open text-primary me-2"></i>
                                    <Link to="mailto:sales@exoticaitsolutions.com">
                                        <p class="mb-0">sales@exoticaitsolutions.com</p>
                                    </Link>
                                </div>
                                <div class="d-flex mb-2">
                                    <i class="bi bi-telephone text-primary me-2"></i>
                                    <p class="mb-0"><a href="tel:  +1 4385238809" className="cont_link"> +1 4385238809</a></p>
                                </div>
                                <div class="d-flex mb-2">
                                    <i class="bi bi-telephone text-primary me-2"></i>
                                    <p class="mb-0"><a href="tel: +91 7018 152390" className="cont_link">+91 7018 152390</a></p>
                                </div>
                                <div class="d-flex mt-4">
                                
                                    <Link class="btn btn-primary btn-square me-2" to="https://www.facebook.com/profile.php?id=100093443127454&mibextid=ZbWKwL" target='black'><i
                                            class="fab fa-facebook-f fw-normal"></i></Link>
                                    <Link class="btn btn-primary btn-square me-2" to="https://www.linkedin.com/company/exotica-it-solutions/" target='black'><i
                                            class="fab fa-linkedin-in fw-normal"></i></Link>
                                    <Link class="btn btn-primary btn-square" to="https://instagram.com/exotica.itsolutions?igshid=MzNlNGNkZWQ4Mg==" target='black' ><i
                                            class="fab fa-instagram fw-normal"></i></Link>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                <div class="section-title section-title-sm position-relative pb-3 mb-4">
                                    <h3 class="text-light mb-0">Quick Links</h3>
                                </div>
                                <div class="link-animated d-flex flex-column justify-content-start">
                                
                                    <Link class="text-light mb-2" to="/about"><i
                                            class="bi bi-arrow-right text-primary me-2"></i>About</Link>
                                    <Link class="text-light mb-2" to="/service"><i
                                            class="bi bi-arrow-right text-primary me-2"></i>Services</Link>
                                    <Link class="text-light mb-2" to="/testimonial"><i
                                            class="bi bi-arrow-right text-primary me-2"></i>Testimonial</Link>
                                    <Link class="text-light mb-2" to="/portfolio"><i
                                            class="bi bi-arrow-right text-primary me-2"></i>Portfolio</Link>
                                    <Link class="text-light" to="/contact"><i
                                            class="bi bi-arrow-right text-primary me-2"></i>Contact</Link>
                                    <Link class="text-light" to="/blog"><i
                                            class="bi bi-arrow-right text-primary me-2"></i>Blog</Link>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                <div class="section-title section-title-sm position-relative pb-3 mb-4">
                                    <h3 class="text-light mb-0">Our Services</h3>
                                </div>
                                <div class="link-animated d-flex flex-column justify-content-start">
                                    <Link class="text-light mb-2" to="/services/webdesign"><i
                                            class="bi bi-arrow-right text-primary me-2"></i>Web Design</Link>
                                    <Link class="text-light mb-2" to="/services/webdevelop"><i
                                            class="bi bi-arrow-right text-primary me-2"></i>Web Development</Link>
                                    <Link class="text-light mb-2" to="/services/cms"><i
                                            class="bi bi-arrow-right text-primary me-2"></i>CMS Development</Link>
                                    <Link class="text-light mb-2" to="/services/custom_developer"><i
                                            class="bi bi-arrow-right text-primary me-2"></i>Custom Development</Link>
                                    <Link class="text-light mb-2" to="/services/database_management"><i
                                            class="bi bi-arrow-right text-primary me-2"></i>Database Management</Link>
                                    <Link class="text-light" to="/services/maintenance_and_support_services"><i
                                            class="bi bi-arrow-right text-primary me-2"></i>Maintenance and Support</Link>
                                    <Link class="text-light" to="/services/ecommerce_store_development"><i
                                            class="bi bi-arrow-right text-primary me-2"></i>Ecommerce Store
                                        Devlopment</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid text-white" style={{ background: '#061429' }}>
            <div class="container text-center">
                <div class="row justify-content-end">
                    <div class="col-lg-8 col-md-6">
                        <div class="d-flex align-items-center justify-content-center" style={{ height: '75px' }}>
                            © {currentYear} Exoticaitsolutions | All Right Reserved
                        </div>
                    </div>
                </div>
            </div>
        </div>
         {/* Footer End */}
        </>
    );
}

export default Foter;