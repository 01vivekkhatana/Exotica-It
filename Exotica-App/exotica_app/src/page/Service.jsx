import React from 'react';
import Foter from '../components/Foter';
import Nav from '../components/Nav';
import { Link } from 'react-router-dom';
function Service() {
    return (
        <>
            <Nav />
            {/* banner start */}
            <div class="container-fluid bg-primary py-4 bg-header" style={{ marginBottom: '90px', background: 'linear-gradient(rgba(9, 30, 62, .7), rgba(9, 30, 62, .7)), url("") center center no-repeat', backgroundSize: 'cover' }}>
                <div class="row py-4">
                    <div class="col-12 pt-lg-5 mt-lg-5 text-center">
                        <h1 class="display-4 text-white animated zoomIn">Services</h1>
                        <Link to="/" class="h5 text-white">Home</Link>
                        <i class="far fa-circle text-white px-2"></i>
                        <Link to="/service" class="h5 text-white">Services</Link>
                    </div>
                </div>
            </div>
                {/* banner end */}
                {/* services start */}
                <div class="container-fluid py-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="container py-4">
                        <div class="row g-5">
                            <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                                <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                    <img src="seo-1.png" class="serv_img" alt="SEO" />
                                    <h4 class="mb-3">SEO</h4>
                                    <a class="btn btn-lg btn-primary rounded" href="">
                                        <i class="bi bi-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                                <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                    <img src="data_mange.png" class="serv_img" alt="SEO" />
                                    <h4 class="mb-3">Database Management</h4>
                                    <a class="btn btn-lg btn-primary rounded" href="">
                                        <i class="bi bi-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                                <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                    <img src="maintence-1.png" class="serv_img" alt="SEO" />
                                    <h4 class="mb-3">Maintenance and Support</h4>
                                    <a class="btn btn-lg btn-primary rounded" href="">
                                        <i class="bi bi-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                                <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                    <img src="custome_developemt-1.png" class="serv_img" alt="SEO" />
                                    <h4 class="mb-3">Custom Development</h4>
                                    <a class="btn btn-lg btn-primary rounded" href="">
                                        <i class="bi bi-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                                <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                    <img src="cms-1.png" class="serv_img" alt="SEO" />
                                    <h4 class="mb-3">CMS Development</h4>
                                    <a class="btn btn-lg btn-primary rounded" href="">
                                        <i class="bi bi-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                                <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                    <img src="ecommerce-1.png" class="serv_img" alt="SEO" />
                                    <h4 class="mb-3">Ecommerce Store Development</h4>
                                    <a class="btn btn-lg btn-primary rounded" href="">
                                        <i class="bi bi-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                                <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                    <img src="web_design-1.png" class="serv_img" alt="SEO" />
                                    <h4 class="mb-3">Web Design</h4>
                                    <a class="btn btn-lg btn-primary rounded" href="">
                                        <i class="bi bi-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                                <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                    <img src="development-1.png" class="serv_img" alt="SEO" />
                                    <h4 class="mb-3">Web Development</h4>
                                    <a class="btn btn-lg btn-primary rounded" href="">
                                        <i class="bi bi-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                                <div class="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
                                    <h3 class="text-white mb-3">Call Us For Quote</h3>
                                    <p class="text-white mb-3">Clita ipsum magna kasd rebum at ipsum amet dolor justo dolor est magna stet eirmod</p>
                                    <h2 class="text-white mb-0">+012 345 6789</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* servicer end */}
                <Foter />
            </>
            );
}

            export default Service;