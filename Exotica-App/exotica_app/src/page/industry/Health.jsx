import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav';
import Foter from '../../components/Foter';
function Health() {
    return (
        <>
        <Nav/>
        {/* banner start */}

        <div class="container-fluid bg-primary py-5 bg-header" style={{ marginBottom: '90px', background: 'linear-gradient(rgba(9, 30, 62, .7), rgba(9, 30, 62, .7)), url("") center center no-repeat', backgroundSize: 'cover' }}>
            <div class="row py-5">
                <div class="col-12 pt-lg-5 mt-lg-5 text-center">
                    <h1 class="display-4 text-white animated zoomIn">Health Care</h1>
                    <Link to="/" class="h5 text-white">Home</Link>
                    <i class="far fa-circle text-white px-2"></i>
                    <Link to="/health" class="h5 text-white">Health Care</Link>
                </div>
            </div>
        </div>
        {/* banner end */}

        <div class="container-fluid py-4 wow fadeInUp" data-wow-delay="0.1s">
            <div class="container py-4">
                <div class="d-flex align-items-center mt-2 wow zoomIn" data-wow-delay="0.6s">
                    <div class="our_services_card">
                        <div class="our_services_cntnt">
                            <h5>Custom IT Solutions for the Healthcare Industry in Ontario</h5>
                            <p>At Exotica, we offer a wide range of capabilities and services for the healthcare industry to help businesses streamline their operations, improve patient care, and stay competitive in a rapidly evolving landscape. Our team of experienced developers and designers work closely with healthcare professionals to create tailored solutions that enhance patient care, streamline workflows, and improve overall operational efficiency. We specialize in developing solutions that are user-friendly, scalable, and compliant with regulatory requirements.</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid py-4 wow fadeInUp" data-wow-delay="0.1s">
            <div class="container py-4">
                <div class="row g-5">
                    <div class="col-lg-7">
                        <div class="section-title position-relative pb-3 mb-5">
                            <h1 class="mb-0">Our Capabilities in the Healthcare Industry</h1>
                        </div>
                        <p class="mb-4 para_about">Our team of experts provides comprehensive web and mobile development services, including mobile healthcare app development, hospital management app development, website development and more, tailored to meet the unique needs of healthcare providers. We also provide robust database management services that ensure data accuracy, availability, and security. Additionally, our search engine optimization (SEO) services help healthcare organizations to improve their online visibility and attract more patients.</p>
                    </div>
                    <div class="col-lg-5" style={{ minHeight: '500px' }}>
                        <div class="position-relative h-100">
                            <img class="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s"
                                src="/webDesign.jpg" style={{ objectFit: 'cover' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid py-4 wow fadeInUp" data-wow-delay="0.1s">
            <div class="container py-4">
                <div class="row g-5">
                    <div class="col-lg-5" style={{ minHeight: '500px' }}>
                        <div class="position-relative h-100">
                            <img class="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s"
                                src="/partner_with_today.jpg" style={{ objectFit: 'cover' }} />
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="section-title position-relative pb-3 mb-5">
                            <h1 class="mb-0">Partner with Us Today</h1>
                        </div>
                        <p class="mb-4 para_about">If you are looking for customized IT solutions for your healthcare organization in Ontario, look no further than Exotica. Our team of experts can help you streamline your operations, improve patient care, and enhance your overall bottom line. Contact us today to learn more about how we can help your organization grow.</p>
                    </div>
                </div>
            </div>
        </div>
        {/* Contact Start */}
        {/* <div class="container-fluid py-4 wow fadeInUp" data-wow-delay="0.1s">
            <div class="container py-4">
                <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                    <h5 class="fw-bold text-primary text-uppercase">Get Excited Already?</h5>
                    <h1 class="mb-0">Quick Contact Us</h1>
                </div>
                <div class="row g-5">
                    <div class="col-lg-6 wow slideInUp" data-wow-delay="0.3s">
                        <form>
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <input type="text" class="form-control border-0 bg-light px-4" placeholder="Your Name" style={{ height: '55px' }} />
                                </div>
                                <div class="col-md-6">
                                    <input type="email" class="form-control border-0 bg-light px-4" placeholder="Your Email" style={{ height: '55px' }} />
                                </div>
                                <div class="col-12">
                                    <input type="text" class="form-control border-0 bg-light px-4" placeholder="Subject" style={{ height: '55px' }} />
                                </div>
                                <div class="col-12">
                                    <textarea class="form-control border-0 bg-light px-4 py-3" rows="4" placeholder="Message"></textarea>
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-lg-6 wow slideInUp" data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'slideInUp' }}>
                        <iframe className="position-relative rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.3397779723773!2d76.69915047447073!3d30.708846986788608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef9d63bc66f1%3A0x321d9a798e5609f4!2sExotica%20IT%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1707735731389!5m2!1sen!2sin" width="400" height="300" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div> */}
        {/* Contact End */}

        <Foter />
        </>
    );
}

export default Health;