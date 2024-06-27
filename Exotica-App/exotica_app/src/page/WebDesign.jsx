import React from 'react';
import Nav from '../components/Nav';
import Foter from '../components/Foter';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function WebDesign() {
    let settsings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,        
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024, 
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480, 
                settings: {
                    slidesToShow: 1
                }
            }
        ]
         
    };
    return (
        <>
            <Nav />
            {/* banner start */}

            <div class="container-fluid bg-primary py-5 bg-header" style={{ marginBottom: '90px', background: 'linear-gradient(rgba(9, 30, 62, .7), rgba(9, 30, 62, .7)), url("https://www.exoticaitsolutions.com/wp-content/uploads/2023/03/webdesign.jpg") center center no-repeat', backgroundSize: 'cover' }}>
                <div class="row py-5">
                    <div class="col-12 pt-lg-5 mt-lg-5 text-center">
                        <h1 class="display-4 text-white animated zoomIn">Web Design</h1>
                        <Link to="/" class="h5 text-white">Home</Link>
                        <i class="far fa-circle text-white px-2"></i>
                        <Link to="/contact" class="h5 text-white">Web Design</Link>
                    </div>
                </div>
            </div>
            {/* banner end */}

            <div class="container-fluid py-4 wow fadeInUp" data-wow-delay="0.1s">
                <div class="container py-4">
                    <div class="row g-5">
                        <div class="col-lg-7">
                            <div class="section-title position-relative pb-3 mb-5">
                                <h1 class="mb-0">Work with a Local Web Design Agency in Ontario</h1>
                            </div>
                            <p class="mb-4 para_about">Are you tired with unprofessional web designers, boring UX/UI, missed
                                deadlines, and unresponsive sites that don’t perform? Our perfect blend of innovative
                                technologies, top-notch designers, result-oriented websites and exceptional customer service
                                help us design and deliver our client’s dream site.</p>
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
                    <div class="row g-5 align-items-center">
                        <div class="col-lg-5" style={{ minHeight: '500px' }}>
                            <div class="position-relative img_sec">
                                <img class="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s"
                                    src="/profe_web_design.jpg" style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <div class="section-title position-relative pb-3 mb-5">
                                <h1 class="mb-0">Professional Web Design Services For Engaging User Experiences</h1>
                            </div>
                            <p class="mb-4 para_about">If you search, “website design companies near me”, you’ll find hundreds
                                of websites claiming themselves to be the best one. But that’s not always true. But if you’re
                                searching for attractive, highly-converting, mission-critical websites for your business in
                                Ontario, your search ends here. Based in Edgevalley Road London, Ontario, we have the talent and
                                expertise to convert your dream website into reality. Whether you require a brand new website to
                                showcase your company's offerings or an optimized eCommerce platform to sell products, we have a
                                customized web design solution that's perfect for you. Our focus is not only on creating
                                visually appealing websites, but also on ensuring their functionality. As a highly respected
                                website design company, we have worked with a diverse range of businesses across various
                                sectors, from startups to small local companies to nationwide enterprises. Our Web Design
                                Process Discovery: We work with our clients to understand their needs, goals, and target
                                audience, and gather information about their brand, content, and desired functionality.
                                Wireframing: Based on the information gathered during the discovery phase, we create a rough
                                layout of the website's structure and content using wireframes to ensure proper flow and user
                                experience. Design: Our talented designers create a visually appealing design that aligns with
                                the client's branding, using the wireframes as a guide. Development: Our developers bring the
                                design to life by coding the website using the latest web development technologies and
                                standards. Testing: We conduct rigorous testing to ensure that the website is functioning
                                properly, is user-friendly, and meets the client's requirements before it goes live.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s slide-webdesign">
            <Slider {...settsings}>
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
                            <a href="" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
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
                <div class="container py-5">
                    <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                        <h1 class="mb-0">Our Web Design Process</h1>
                    </div>
                    <div class="row g-5">
                        <div class="col-lg-4">
                            <div class="row g-5">
                                <div class="col-12 wow zoomIn" data-wow-delay="0.2s">
                                    <h4>Discovery:</h4>
                                    <p class="mb-0">We create unique designs that align with the client’s brand and appeal to
                                        their target audience.</p>
                                </div>
                                <div class="col-12 wow zoomIn" data-wow-delay="0.6s">
                                    <h4>Wireframing:</h4>
                                    <p class="mb-0"> Based on the information gathered during the discovery phase, we create a rough layout of the website’s structure and content using wireframes to ensure proper flow and user experience</p>
                                </div>
                                <div class="col-12 wow zoomIn" data-wow-delay="0.6s">
                                    <h4>Design:</h4>
                                    <p class="mb-0"> Our talented designers create a visually appealing design that aligns with the client’s branding, using the wireframes as a guide.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4  wow zoomIn" data-wow-delay="0.9s" style={{ minHeight: '350px' }}>
                            <div class="position-relative h-100">
                                <img class="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.1s"
                                    src="/phone.jpg" style={{ objectFit: 'cover' }} />
                            </div>
                            <a href="" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                                id="theme-btn">View Portfolio</a>
                        </div>
                        <div class="col-lg-4">
                            <div class="row g-5">
                                <div class="col-12 wow zoomIn" data-wow-delay="0.4s">
                                    <h4>Development:</h4>
                                    <p class="mb-0"> Our developers bring the design to life by coding the website using the latest web development technologies and standards.</p>
                                </div>
                                <div class="col-12 wow zoomIn" data-wow-delay="0.8s">
                                    <h4>Testing:</h4>
                                    <p class="mb-0"> We conduct rigorous testing to ensure that the website is functioning properly, is user-friendly, and meets the client’s requirements before it goes live.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container py-5">
                    <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                        <h1 class="mb-0">Visually Appealing, User-Friendly Graphic Designs</h1>
                    </div>

                    <div class="row g-5">
                        <div class="col-lg-4">
                            <div class="row g-5">
                                <div class="col-12 wow zoomIn" data-wow-delay="0.2s">
                                <p class="mb-0">We believe that a website's design is just as important as its functionality, and that's why we offer a range of graphic design services to help make your website look great. Here are some of the ways we can help you with your website’s graphic design:</p>
                                    <h4>Logo Design:</h4>
                                    <p class="mb-0"> Your logo is often the first thing people see when they visit your website. It’s important that your logo is eye-catching, memorable, and reflective of your brand. Our graphic designers can create a custom logo that aligns with your brand identity and sets you apart from the competition..</p>
                                </div>
                                <div class="col-12 wow zoomIn" data-wow-delay="0.6s">
                                    <h4>Color Scheme: </h4>
                                    <p class="mb-0">The colors used on your website can have a significant impact on how visitors perceive your brand. We can help you choose a color scheme that reflects your brand’s personality and creates a cohesive look throughout your site.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4  wow zoomIn" data-wow-delay="0.9s" style={{ minHeight: '350px' }}>
                            <div class="position-relative h-100">
                                <img class="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.1s"
                                    src="/phone.jpg" style={{ objectFit: 'cover' }} />
                            </div>
                            <a href="" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                                id="theme-btn">View Portfolio</a>
                        </div>
                        <div class="col-lg-4">
                            <div class="row g-5">
                                <div class="col-12 wow zoomIn" data-wow-delay="0.4s">
                                    <h4>Images and Graphics:</h4>
                                    <p class="mb-0"> Images and graphics are essential elements of any website. We can help you choose images and graphics that are visually appealing and support your brand message.</p>
                                </div>
                                <div class="col-12 wow zoomIn" data-wow-delay="0.8s">
                                    <h4>User Interface Design:</h4>
                                    <p class="mb-0"> User interface design is all about creating an intuitive and user-friendly experience for visitors to your website. We can help you design a user interface that is easy to navigate and aligns with your brand’s personality.</p>
                                </div>
                                <div class="col-12 wow zoomIn" data-wow-delay="0.6s">
                                    <h4>Typography:</h4>
                                    <p class="mb-0"> The font you choose can also have an impact on how visitors perceive your brand. We can help you choose typography that is easy to read and aligns with your brand’s personality.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </Slider>
            </div>

            <div class="container-fluid py-4 wow fadeInUp" data-wow-delay="0.1s">
                <div class="container py-4">
                    <div class="row g-5">
                        <div class="col-lg-7">
                            <div class="section-title position-relative pb-3 mb-5">
                                <h1 class="mb-0">Mobile-Friendly and Responsive Website Design</h1>
                            </div>
                            <p class="mb-4 para_about">A mobile-friendly website is specifically designed to work well on small screens, such as those found on smartphones and tablets. By optimizing your website for mobile devices, we can ensure that your site is easy to use and looks great, even on smaller screens. This can help improve your website's user experience and increase engagement with your audience. Responsive website design takes things a step further by creating a website that can adapt to any screen size. This means that no matter what device someone is using to access your site, your site will look and function perfectly. This is achieved through the use of flexible grids, images, and other elements that can adjust based on the size of the screen.</p>
                        </div>
                        <div class="col-lg-5" style={{ minHeight: '500px' }}>
                            <div class="position-relative h-100">
                                {/* <img class="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s"
                                    src="/webDesign.jpg" style={{ objectFit: 'cover' }} /> */}
                                    <img class=" rounded wow zoomIn" data-wow-delay="0.9s"
                                    src="/webDesign.jpg" />
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
                                <h5>Interested in Designing Your Website with Exotica?
                                </h5>
                                <p>At our web design company in Ontario, we understand that creating a successful website requires collaboration and attention to detail. Our team works closely with clients to develop custom websites that are effective and unique, tailored to their specific needs and preferences.
                                    Our team of professional website designers has extensive experience with all major website development platforms, including WooCommerce, WordPress, OpenCart, Magento, and more. By utilizing our expertise in these platforms, we are able to create websites that are not only visually stunning but also highly functional and efficient.
                                </p>
                                <p>Do you also have a project in mind? Let us know! We’re always happy to help you.</p>
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

export default WebDesign;