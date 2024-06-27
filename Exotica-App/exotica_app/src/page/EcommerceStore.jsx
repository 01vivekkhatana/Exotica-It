import React from 'react';
import Nav from '../components/Nav';
import Foter from '../components/Foter';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function EcommerceStore() {
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

        <div class="container-fluid bg-primary py-5 bg-header" style={{ marginBottom: '90px', background: 'linear-gradient(rgba(9, 30, 62, .7), rgba(9, 30, 62, .7)), url("") center center no-repeat', backgroundSize: 'cover' }}>
            <div class="row py-5">
                <div class="col-12 pt-lg-5 mt-lg-5 text-center">
                    <h1 class="display-4 text-white animated zoomIn">Ecommerce Store Development</h1>
                    <Link to="/" class="h5 text-white">Home</Link>
                    <i class="far fa-circle text-white px-2"></i>
                    <Link to="/database_management" class="h5 text-white">Ecommerce Store Development</Link>
                </div>
            </div>
        </div>
        {/* banner end */}

        <div class="container-fluid py-4 wow fadeInUp" data-wow-delay="0.1s">
            <div class="container py-4">
                <div class="row g-5">
                    <div class="col-lg-7">
                        <div class="section-title position-relative pb-3 mb-5">
                            <h1 class="mb-0">Build Your Dream Online Store with Exotica!</h1>
                        </div>
                        <p class="mb-4 para_about">At Exotica, we provide top-notch eCommerce store development services that can help you build a stunning online store that drives sales and boosts revenue.</p>
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
                            <h1 class="mb-0">Ecommerce Store Development Company In Ontario</h1>
                        </div>
                        <p class="mb-4 para_about">Exotica is a leading eCommerce store development company based in Ontario. We specialize in building custom online stores for businesses of all sizes and industries. Our team of expert developers uses the latest technologies to build eCommerce stores that are user-friendly, mobile-responsive, and SEO-optimized. Whether you're looking to own and manage a single vendor marketplace or create a multi-vendor store with virtual storefronts under one brand name, our custom eCommerce development services can deliver a solution that meets all of your unique requirements. As a leading eCommerce website development agency in Ontario, our team of expert developers has extensive experience with a wide range of platforms, including but not limited to Core PHP, CodeIgniter, Laravel, Magento, Shopify, Drupal, WooCommerce, and BigCommerce. We have the expertise to build an online store that perfectly aligns with your business objectives and helps you achieve your goals.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s slide-webdesign">
            <Slider {...settsings}>
                <div class="container py-5">
                    <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                        <h1 class="mb-0">How Custom eCommerce Development Benefit Your Business</h1>
                    </div>
                    <div class="row g-5">
                        <div class="col-lg-4">
                            <div class="row g-5">
                                <div class="col-12 wow zoomIn" data-wow-delay="0.2s">
                                    <p class="mb-0">Want to take your online store business to the new height of success? Wondering how eCommerce development can help you? Custom eCommerce development can bring significant benefits to your business. Here are some of the ways that a custom eCommerce solution can benefit your business:</p>
                                    <h4>Tailored to Your Needs:</h4>
                                    <p class="mb-0"> With a custom eCommerce solution, you can create a unique online store that perfectly aligns with your business objectives and meets your specific needs.</p>
                                </div>
                                <div class="col-12 wow zoomIn" data-wow-delay="0.6s">
                                    <h4>Enhanced User Experience:</h4>
                                    <p class="mb-0"> By integrating personalized features and functionalities, you can create a user-friendly shopping experience that engages customers and increases conversions.</p>
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
                                <div class="col-12 wow zoomIn" data-wow-delay="0.6s">
                                    <h4>Improved Efficiency:</h4>
                                    <p class="mb-0"> Custom eCommerce development streamlines your business processes, automates tasks, and makes it easier to manage your online store, improving overall efficiency.</p>
                                </div>
                                <div class="col-12 wow zoomIn" data-wow-delay="0.4s">
                                    <h4> Scalability:</h4>
                                    <p class="mb-0"> With a customizable platform, you can easily add new features and expand your store’s capabilities as your business grows, adapting to changing market trends and customer demands.consectetur adipisicing elit.</p>
                                </div>
                                <div class="col-12 wow zoomIn" data-wow-delay="0.4s">
                                    <h4>Complete Control: </h4>
                                    <p class="mb-0">Custom eCommerce development provides you with complete control over your online store, including its design, layout, and functionality. This enables you to optimize your store’s performance, improve search engine rankings, and enhance overall user experience to increase customer satisfaction and retention.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container py-5">
                    <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                        <h1 class="mb-0">Driven More Sales with our eCommerce Website Development Services</h1>
                    </div>
                    <div class="row g-5">
                        <div class="col-lg-4">
                            <div class="row g-5">
                                <div class="col-12 wow zoomIn" data-wow-delay="0.2s">
                                    <p class="mb-0">At Exotica, we offer a range of eCommerce website development services that can help you drive more sales and grow your business. Our services include:</p>
                                    <h4>Custom eCommerce Development: </h4>
                                    <p class="mb-0">We build eCommerce stores that are tailored to your business needs and goals.</p>
                                </div>
                                <div class="col-12 wow zoomIn" data-wow-delay="0.4s">
                                    <h4>Mobile Commerce Development: </h4>
                                    <p class="mb-0">We make sure your store is optimized for mobile devices so that your customers can shop from anywhere.</p>
                                </div>
                                <div class="col-12 wow zoomIn" data-wow-delay="0.4s">
                                    <h4>UX Research and Design:</h4>
                                    <p class="mb-0"> We conduct user research and design a user-friendly interface that improves the overall shopping experience.</p>
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
                                    <h4>eCommerce Maintenance & Support: </h4>
                                    <p class="mb-0">We provide ongoing maintenance and support to ensure your store runs smoothly.</p>
                                </div>
                                <div class="col-12 wow zoomIn" data-wow-delay="0.8s">
                                    <h4>eCommerce API Integrations:</h4>
                                    <p class="mb-0"> We integrate your store with third-party APIs such as payment gateways, shipping carriers, and more.</p>
                                </div>
                                <div class="col-12 wow zoomIn" data-wow-delay="0.8s">
                                    <h4>Payment Gateway Integration:</h4>
                                    <p class="mb-0"> We integrate your store with popular payment gateways such as PayPal, Stripe, and more.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container py-5">
                    <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                        <h1 class="mb-0">Why Choose Exotica For Ecommerce Store Development?</h1>
                    </div>

                    <div class="row g-5">
                        <div class="col-lg-4">
                            <div class="row g-5">
                                <div class="col-12 wow zoomIn" data-wow-delay="0.2s">
                                    <p class="mb-0">Choosing the right partner for your eCommerce store development is essential to ensure the success of your online business. Here are some reasons why you should choose Exotica for your eCommerce store development needs:</p>
                                    <h4>Experienced Team:</h4>
                                    <p class="mb-0"> Our team consists of experienced developers and designers who have built numerous successful eCommerce stores.</p>
                                </div>
                                <div class="col-12 wow zoomIn" data-wow-delay="0.6s">
                                    <h4>Customized Solutions:</h4>
                                    <p class="mb-0"> We provide customized eCommerce solutions that are tailored to your business needs and goals.</p>
                                </div>
                                <div class="col-12 wow zoomIn" data-wow-delay="0.6s">
                                    <h4>Affordable Pricing:</h4>
                                    <p class="mb-0"> We offer competitive pricing without compromising on the quality of our services.</p>
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
                                    <h4>Timely Delivery:</h4>
                                    <p class="mb-0"> We understand the importance of deadlines and ensure that your project is delivered on time.</p>
                                </div>
                                <div class="col-12 wow zoomIn" data-wow-delay="0.8s">
                                    <h4>Excellent Support:</h4>
                                    <p class="mb-0"> We provide excellent support and maintenance services to ensure your eCommerce store runs smoothly.</p>
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
                            <h1 class="mb-0">Our Technology Stack</h1>
                        </div>
                        <p>At Exotica, we understand the importance of using the right technology stack to build a successful eCommerce store. Here are some strategically chosen technologies and platforms that we use to springboard your eCommerce ambitions:</p>
                        <strong>Magento:</strong>
                        <p class="mb-4 para_about"> It's highly customizable, scalable, and secure, making it a popular choice for businesses of all sizes.</p>
                        <strong>WooCommerce:</strong>
                        <p class="mb-4 para_about"> WooCommerce is an open-source eCommerce plugin for WordPress that enables businesses to create online stores quickly and easily.</p>
                        <strong>Shopify:</strong>
                        <p class="mb-4 para_about">Shopify is a cloud-based eCommerce platform that provides everything you need to create and run a successful online store.</p>
                        <strong>React.js:</strong>
                        <p class="mb-4 para_about">React.js is a popular JavaScript library that provides a fast and responsive user interface for eCommerce stores.</p>
                        <strong>Node.js:</strong>
                        <p class="mb-4 para_about"> Node.js is a powerful JavaScript runtime that enables businesses to build scalable and high-performance eCommerce applications.</p>
                        <strong>Laravel:</strong>
                        <p class="mb-4 para_about">Laravel is a popular PHP framework that provides a wide range of features and tools for building eCommerce applications.</p>
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
                <div class="d-flex align-items-center mt-2 wow zoomIn" data-wow-delay="0.6s">
                    <div class="our_services_card">
                        <div class="our_services_cntnt">
                            <h5>Get in Touch with Us Today</h5>
                            <p>Are you ready to take your eCommerce business to the next level? Contact us today to discuss your project and learn how our custom eCommerce development services can help you achieve your goals. With our expertise and the latest technology stacks, we can create a tailored eCommerce solution that is secure, scalable, and easy to use. Don’t wait, contact us now to get started!</p>
                            
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

export default EcommerceStore;