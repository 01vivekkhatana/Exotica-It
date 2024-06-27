import React from 'react';
import Nav from '../components/Nav';
import Foter from '../components/Foter';
import { Link } from 'react-router-dom';
function Cms() {
    return (
        <>
            <Nav />
            {/* banner start */}

            <div class="container-fluid bg-primary py-5 bg-header" style={{ marginBottom: '90px', background: 'linear-gradient(rgba(9, 30, 62, .7), rgba(9, 30, 62, .7)), url("") center center no-repeat', backgroundSize: 'cover' }}>
                <div class="row py-5">
                    <div class="col-12 pt-lg-5 mt-lg-5 text-center">
                        <h1 class="display-4 text-white animated zoomIn">CMS Development</h1>
                        <Link to="/" class="h5 text-white">Home</Link>
                        <i class="far fa-circle text-white px-2"></i>
                        <Link to="/cms" class="h5 text-white">CMS Development</Link>
                    </div>
                </div>
            </div>
            {/* banner end */}

            <div class="container-fluid py-4 wow fadeInUp" data-wow-delay="0.1s">
                <div class="container py-4">
                    <div class="row g-5">
                        <div class="col-lg-7">
                            <div class="section-title position-relative pb-3 mb-5">
                                <h1 class="mb-0">Custom CMS Development Agency in Ontario</h1>
                            </div>
                            <p class="mb-4 para_about">Say goodbye to the limitations of off-the-shelf CMS solutions and get the flexibility and control you need to manage your website effectively. Exotica’s CMS development services provide businesses with a personalized solution to manage their website content efficiently.</p>
                        </div>
                        <div class="col-lg-5" style={{ minHeight: '500px' }}>
                            <div class="position-relative h-100">
                                <img class="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s"
                                    src="/cms-img.jpg" style={{ objectFit: 'cover' }} />
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
                                    src="/own-content.jpg" style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <div class="section-title position-relative pb-3 mb-5">
                                <h1 class="mb-0">Create Your Own Content Management System</h1>
                            </div>
                            <p class="mb-4 para_about">Looking for a versatile content management solution that combines the best features of different frameworks? Look no further. Exotica is the top CMS development service company in Ontario. Our CMS development services are designed to provide businesses with a content management system that meets their specific needs. Whether you need a simple CMS for your blog or a complex system to manage your e-commerce website, our developers can build a CMS that is tailored to your requirements. We use the latest technologies and development practices to ensure that our CMS solutions are scalable, secure, and easy to use. Our expert team can integrate enterprise-level content management capabilities into your website, regardless of whether you're using WordPress, Drupal, JOOMLA, or any other CMS platform. With our custom CMS solutions, you can streamline your content creation and management processes, making it easy to utilize your content effectively and efficiently.</p>
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
                                <h1 class="mb-0">Technology Stack Behind Our CMS Development</h1>
                            </div>
                            <strong>Content Management Systems:</strong>
                            <p class="mb-4 para_about">We use popular CMS platforms like WordPress, Drupal, and Joomla as the base for our custom CMS solutions.</p>
                            <strong>Programming Languages:</strong>
                            <p class="mb-4 para_about">Our team of developers is proficient in programming languages like PHP, JavaScript, HTML, CSS, and more.</p>
                            <strong>Database Management:</strong>
                            <p class="mb-4 para_about"> We use databases like MySQL, MongoDB, and PostgreSQL to store and manage the content on our CMS platforms.</p>
                            <strong>Frameworks and Libraries:</strong>
                            <p class="mb-4 para_about"> Our team uses popular frameworks and libraries like Laravel, React, AngularJS, Vue.js, and more to develop robust and scalable CMS solutions.</p>
                            <strong>Cloud Infrastructure:</strong>
                            <p class="mb-4 para_about"> We use cloud-based infrastructure like AWS, Azure, and Google Cloud to host our CMS solutions.</p>
                        </div>
                        <div class="col-lg-5" style={{ minHeight: '500px' }}>
                            <div class="position-relative h-100">
                                <img class="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s"
                                    src="/Professional-CMS.jpg" style={{ objectFit: 'cover' }} />
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
                                <h5>Why Choose Exotica for CMS Development</h5>
                                <strong>Customized CMS Solutions –</strong><p> Our CMS solutions are customized to fit your specific business needs and requirements, providing a tailored solution that meets your unique goals.</p>
                                <strong>Expert Team of Developers –</strong><p>We have a team of expert CMS developers who are skilled in various CMS platforms and technologies, ensuring that you receive a high-quality, efficient, and effective CMS web development solution.</p>
                                <strong>High-Quality Delivery Standards –</strong><p>We follow strict quality delivery standards to ensure that your CMS web development project is completed on time, within budget, and to the highest standards.</p>
                                <strong>Competitive Pricing –</strong><p> Our CMS web development solutions are competitively priced, ensuring that you receive a high-quality, cost-effective solution that meets your budget requirements.</p>
                                <strong>Post-Development Support –</strong><p> We offer post-development support to ensure that your CMS web development project continues to function at its best, allowing you to focus on growing your business without worrying about technical issues.</p>
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

export default Cms;