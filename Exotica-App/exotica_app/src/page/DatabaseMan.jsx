import React from 'react';
import Nav from '../components/Nav';
import Foter from '../components/Foter';
import { Link } from 'react-router-dom';
function DatabaseMan() {
    return (
        <>
        <Nav />
        {/* banner start */}

        <div class="container-fluid bg-primary py-5 bg-header" style={{ marginBottom: '90px', background: 'linear-gradient(rgba(9, 30, 62, .7), rgba(9, 30, 62, .7)), url("") center center no-repeat', backgroundSize: 'cover' }}>
            <div class="row py-5">
                <div class="col-12 pt-lg-5 mt-lg-5 text-center">
                    <h1 class="display-4 text-white animated zoomIn">Database Management</h1>
                    <Link to="/" class="h5 text-white">Home</Link>
                    <i class="far fa-circle text-white px-2"></i>
                    <Link to="/database_management" class="h5 text-white">Database Management</Link>
                </div>
            </div>
        </div>
        {/* banner end */}

        <div class="container-fluid py-4 wow fadeInUp" data-wow-delay="0.1s">
            <div class="container py-4">
                <div class="row g-5">
                    <div class="col-lg-7">
                        <div class="section-title position-relative pb-3 mb-5">
                            <h1 class="mb-0">Custom Development Services for Your Unique Business Needs</h1>
                        </div>
                        <p class="mb-4 para_about">Our custom development services are designed to provide tailored solutions catering to your business requirements. From custom web development to plugin development, Exotica can help you achieve your goals with high-quality, efficient, and cost-effective solutions.</p>
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
                                src="/profe_web_design.jpg" style={{ objectFit: 'cover' }} />
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="section-title position-relative pb-3 mb-5">
                            <h1 class="mb-0">Custom Web Development in Ontario</h1>
                        </div>
                        <p class="mb-4 para_about">At Exotica, our custom web development solutions are designed to cater to your unique business needs and provide you with a website that looks great and performs well. Our team of experts has extensive experience in building custom websites for a wide range of industries, from e-commerce to real estate to healthcare. We follow a comprehensive development process that includes website design, backend development, content creation, and ongoing maintenance and support. Our solutions are optimized for speed, user experience, and search engine visibility, ensuring that your website is not only attractive but also easy to use and find online.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div class="container py-5">
                <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                    <h1 class="mb-0">What Our Web Design Service Include</h1>
                </div>
                <div class="row g-5">
                    <div class="col-lg-4">
                        <div class="row g-5">
                            <div class="col-12 wow zoomIn" data-wow-delay="0.2s">
                                <h4>Custom design:</h4>
                                <p class="mb-0">We create unique designs that align with the client’s brand and appeal to
                                    their target audience.</p>
                            </div>
                            <div class="col-12 wow zoomIn" data-wow-delay="0.6s">
                                <h4>Responsive design: </h4>
                                <p class="mb-0">Our websites are designed to be responsive and adapt to any screen size,
                                    ensuring optimal viewing experience on all devices.</p>
                            </div>
                            <div class="col-12 wow zoomIn" data-wow-delay="0.6s">
                                <h4>Maintenance and support: </h4>
                                <p class="mb-0">We provide ongoing maintenance and support to ensure the website is up to
                                    date, secure, and functioning properly.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4  wow zoomIn" data-wow-delay="0.9s" style={{ minHeight: '350px' }}>
                        <div class="position-relative h-100">
                            <img class="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.1s"
                                src="/phone.jpg" style={{ objectFit: 'cover' }} />
                        </div>
                        <a href="quote.html" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                            id="theme-btn">View Portfolio</a>
                    </div>
                    <div class="col-lg-4">
                        <div class="row g-5">
                            <div class="col-12 wow zoomIn" data-wow-delay="0.4s">
                                <h4>User experience (UX) design:</h4>
                                <p class="mb-0"> We design websites that are intuitive and easy to navigate, providing an
                                    enjoyable experience for the user.</p>
                            </div>
                            <div class="col-12 wow zoomIn" data-wow-delay="0.8s">
                                <h4>User Interface (UI) design: </h4>
                                <p class="mb-0">Our websites are designed with a user-centric approach, ensuring that the
                                    user interface is visually appealing, functional, and easy to use, resulting in an
                                    optimal user experience.</p>
                            </div>
                            <div class="col-12 wow zoomIn" data-wow-delay="0.8s">
                                <h4>Search engine optimization (SEO):</h4>
                                <p class="mb-0"> Our websites are optimized for search engines, ensuring they rank high in
                                    search results and drive traffic to the website</p>
                            </div>
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
                            <h1 class="mb-0">Our Custom Development Process</h1>
                        </div>
                        <p>At Exotica, we pride ourselves on delivering high-quality custom software solutions that are tailored to our client's unique needs. Here's an overview of our custom development process:</p>
                        <strong>Discovery Phase:</strong>
                        <p class="mb-4 para_about">Our custom development process starts with a discovery phase where we work closely with our clients to understand their business goals, target audience, and specific requirements.</p>
                        <strong>Planning and Design</strong>
                        <p class="mb-4 para_about">During this phase, we create wireframes, mockups, and prototypes that provide our clients with a clear visual representation of their software's structure and layout.</p>
                        <strong>Development:</strong>
                        <p class="mb-4 para_about">Our team of experienced developers uses the latest technology and coding standards to build a custom software solution that is secure, scalable, and easy to use.</p>
                        <strong>Quality Assurance</strong>
                        <p class="mb-4 para_about">Our testing process includes functional testing, integration testing, and performance testing.</p>
                        <strong>Launch and Support</strong>
                        <p class="mb-4 para_about">Once the software is launched, we provide ongoing support to ensure that it remains secure, up-to-date, and fully functional.</p>
                    </div>
                    <div class="col-lg-5" style={{ minHeight: '500px' }}>
                        <div class="position-relative h-100">
                            <img class="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s"
                                src="/Our-Custom-Development.jpg" style={{ objectFit: 'cover' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid py-4 wow fadeInUp" data-wow-delay="0.1s">
            <div class="container py-4">
                <div class="d-flex align-items-center mt-2 wow zoomIn" data-wow-delay="0.6s">
                    <div class="our_services_card">
                        <div class="our_services_cntnt">
                            <h5>Don't wait, contact us now to get started!</h5>
                            <p>Ready to elevate your business to the next level? Contact us today to discuss your project and learn how our custom development services can help you achieve your goals. Our experienced team is ready to provide you with a tailored software solution that is secure, scalable, and easy to use.</p>
                            
                        </div>
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

export default DatabaseMan;