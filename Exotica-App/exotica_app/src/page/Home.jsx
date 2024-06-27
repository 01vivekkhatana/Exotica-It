// import React, { useEffect } from 'react';
import Nav from '../components/Nav';
import CountUp from 'react-countup';
import Foter from '../components/Foter';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';
import Form from '../components/Form';
import Foooter1 from '../components/Foooter1';
function Home() {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
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
    const [items, setItems] = useState([
        { id: 1, imageUrl: 'react_js.jpg', title: 'React JS' },
        { id: 2, imageUrl: 'php.jpg', title: 'PHP' },
        { id: 3, imageUrl: 'node_js.jpg', title: 'Node JS' },
        { id: 4, imageUrl: 'python.jpg', title: 'Python' },
        { id: 5, imageUrl: 'Django.jpg', title: 'Django' },
        { id: 6, imageUrl: 'flask-py.jpg', title: 'Flask' },
        { id: 7, imageUrl: 'laravel.jpg', title: 'laravel' },
        { id: 7, imageUrl: 'Docker.jpg', title: 'Docker' }
    ]);

    return (
        <>
            <div className="warpper-1">
                <Nav />
                {/* banner start */}

                <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src="carousel-1.jpg" alt="Image" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: '900px' }}>
                                    <h3 className="display-1 text-white mb-md-4 animated zoomIn">Crafting Digital Experience
                                        with Excellence</h3>
                                    <h5 className="text-white mb-3 animated slideInDown">Using a perfect blend of custom design,
                                        development, support & maintenance, SEO and other technology services, Exotica helps
                                        you keep ahead of the competition and scale without any technology hindrances.</h5>
                                    <Link to="/service"
                                        className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft btn_service">Explore Services
                                    </Link>
                                    <Link to="/contact" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight btn-contact">Contact
                                        Us</Link>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src="carousel-2.jpg" alt="Image" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: '900px' }}>
                                    <h3 className="display-1 text-white mb-md-4 animated zoomIn">Crafting Digital Experience
                                        with Excellence</h3>
                                    <h5 className="text-white mb-3 animated slideInDown">Using a perfect blend of custom design,
                                        development, support & maintenance, SEO and other technology services, Exotica helps
                                        you keep ahead of the competition and scale without any technology hindrances.</h5>
                                    <Link to="/service"
                                        className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft btn_service">Explore Services
                                    </Link>
                                    <Link to="/contact" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight btn-contact">Contact
                                        Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                {/* banner end */}

                {/* Facts Start */}
                <div className="container-fluid facts py-4 pt-lg-0">
                    <div className="container py-4 pt-lg-0">
                        <div className="row gx-0">
                            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
                                <div className="bg-primary shadow d-flex align-items-center justify-content-center p-4 htyu yyuuuyhujhhjh"
                                    style={{ height: '150px' }}>
                                    <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2"
                                        style={{ width: '60px', height: '60px' }}>
                                        <i className="fa fa-users text-primary  sdfrt"></i>
                                    </div>
                                    <div className="ps-4">
                                        <h5 className="text-white mb-0">Happy Clients</h5>
                                        <h1 className="text-white mb-0" data-toggle="counter-up"><CountUp start={0} end={1500} duration={2.75} /></h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
                                <div className="bg-light shadow d-flex align-items-center justify-content-center p-4"
                                    style={{ height: '150px' }}>
                                    <div className="bg-primary d-flex align-items-center justify-content-center rounded mb-2 assderf"
                                        style={{ width: '60px', height: '60px' }}>
                                        <i className="fa fa-check text-white"></i>
                                    </div>
                                    <div className="ps-4">
                                        <h5 className="text-primary mb-0 xcdfresddfv">Completed Projects</h5>
                                        <h1 className="mb-0" data-toggle="counter-up"><CountUp start={0} end={1000} duration={2.75} /></h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
                                <div className="bg-primary shadow d-flex align-items-center justify-content-center p-4 njhgggg"
                                    style={{ height: '150px' }}>
                                    <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2"
                                        style={{ width: '60px', height: '60px' }}>
                                        <i className="fa fa-award text-primary bfghd"></i>
                                    </div>
                                    <div className="ps-4">
                                        <h5 className="text-white mb-0">On Going Projects</h5>
                                        <h1 className="text-white mb-0" data-toggle="counter-up"><CountUp start={0} end={250} duration={2.75} /></h1>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Facts End */}

                {/*  About Start */}
                <div className="container-fluid py-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="container py-4">
                        <div className="row g-5">
                            <div className="col-lg-7">
                                <div className="section-title position-relative pb-3 mb-5">
                                    <h1 className="mb-0">Your Trusted Website Design and Development Company</h1>
                                </div>
                                <p className="mb-4">Work with a custom web application development company in Ontario and
                                    surrounding areas that design, develop and market in a way that elevates your customer’s
                                    experiences, earn their loyalty and grow your business. Amidst a world full of seemingly
                                    endless challenges, we see boundless opportunities. Our team of creative thinkers,
                                    designers, developers and digital experts is committed to designing and building the right
                                    digital products that can foster your growth. Our services help prepare your business for
                                    future success today. </p>
                                <div className="row g-0 mb-3">
                                    <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                                        <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Award Winning</h5>
                                        <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Professional Staff</h5>
                                    </div>
                                    <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                                        <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>24/7 Support</h5>
                                        <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Fair Prices</h5>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.6s">
                                    <div className="bg-primary d-flex align-items-center justify-content-center rounded btn-homecont"
                                        style={{ width: '60px', height: '60px' }}>
                                        <i className="fa fa-phone-alt text-white"></i>
                                    </div>
                                    <div className="ps-4">
                                        <h5 className="mb-2">Call to ask any question</h5>
                                        <h4 className="text-primary mb-0"><a href="tel: +91 7018 152390" className="cont-link number-color">+91 7018 152390</a></h4>
                                    </div>
                                </div>
                                <Link href="" className="btn btn-primary py-3 px-5 mt-3 wow zoomIn btn-dev_com btn-learn"
                                    data-wow-delay="0.9s">Learn More</Link>
                            </div>
                            <div className="col-lg-5" style={{ minHeight: '500px' }}>
                                <div className="position-relative h-100">
                                    <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s"
                                        src="about.jpg" style={{ objectFit: 'cover' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  About End  */}

                {/* Quote Start */}
                <div className="container-fluid py-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="container py-4">
                        <div className="row g-5">
                            <div className="col-lg-7">
                                <div className="section-title position-relative pb-3 mb-5">
                                    <h1 className="mb-0">Our Custom Website Development Services</h1>
                                </div>
                                <p className="mb-4">We assist clients worldwide in achieving their Digital Transformation objectives
                                    through intelligent web design, development, support and digital marketing services.</p>
                                <strong>We deliver ground-breaking solutions for:</strong>
                                <div className="d-flex align-items-center mt-2 wow zoomIn" data-wow-delay="0.6s">
                                </div>
                            </div>
                            <div className="col-lg-5" id="Background_image">
                                <div className="position-relative h-100">
                                    {/* <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s"
                                    src="medium-shot-woman-working-laptop (1).jpg" style={{ objectFit: 'cover' }} /> */}
                                    <img className="rounded wow zoomIn" data-wow-delay="0.9s" src="medium-shot-woman-working-laptop (1).jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Quote End  */}
                <section className='categiores'>
                    <div className="container">
                        <div className="categiores-menu-2">
                            <div className="row">
                                <div className="col-md-3 col-sm-12-col-12">
                                    <div className="our_services_card">
                                        <div className="our_services_img">
                                            <img src="https://www.exoticaitsolutions.com/wp-content/uploads/2023/03/s-2.png"
                                                alt="" />
                                        </div>
                                        <div className="our_services_cntnt">
                                            <h5>Ecommerce Store Development </h5>
                                            <p>Make your online store look amazing, extremely easy to use, super secure
                                                and
                                                fully functional. As a top Ecommerce web development in Ontario, we will
                                                be your
                                                perfect companion in taking the proper steps toward conquering the
                                                market. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-12-col-12">
                                    <div className="our_services_card">
                                        <div className="our_services_img">
                                            <img src="https://www.exoticaitsolutions.com/wp-content/uploads/2023/03/s-1.png"
                                                alt="" />
                                        </div>
                                        <div className="our_services_cntnt">
                                            <h5>Web Design and Development</h5>
                                            <p>Whether you’re looking to develop a website from scratch or revamp your
                                                old-school one, Our talented and dedicated development experts use
                                                cutting-edge technologies to meet your unique web design and development
                                                needs.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-12-col-12">

                                    <div className="our_services_card">
                                        <div className="our_services_img">
                                            <img src="https://www.exoticaitsolutions.com/wp-content/uploads/2023/03/s-4.png" alt="" />
                                        </div>
                                        <div className="our_services_cntnt">
                                            <h5>Maintenance and Support </h5>
                                            <p>Trust us to provide peace of mind and uninterrupted operations. Ensure your
                                                website or software stays up and running with optimized performance and reduced
                                                downtime or security breaches risks. </p>
                                        </div>

                                    </div>
                                </div>
                                <div className='col-md-3 col-sm-12-col-12'>

                                    <div className="our_services_card">
                                        <div className="our_services_img">
                                            <img src="https://www.exoticaitsolutions.com/wp-content/uploads/2023/03/s-5.png" alt="" />
                                        </div>
                                        <div className="our_services_cntnt">
                                            <h5>SEO </h5>
                                            <p>From SEO consulting to SEO audits, technical SEO, competitors &amp; keyword
                                                analysis, local SEO, SEO content, SEO for e-commerce websites and a lot more,
                                                Exotica is your one-stop SEO marketing company in Ontario and surrounding areas.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                {/*  Pricing Plan Start */}
                <div className="container-fluid py-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="container py-4">
                        <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>

                            <h2 className="mb-0">Create, Update and Market Your Digital Product With Innovative Technologies</h2>
                        </div>
                        <div className="techonology">
                            <div className="row g-0">
                                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                                    <div className="bg-light rounded">
                                        <div className="p-5 pt-0">
                                            <div className="grow_fast_card">
                                                <div className="grow_fast_img">
                                                    <img src="https://www.exoticaitsolutions.com/wp-content/uploads/2023/04/ratings-1.svg"
                                                        alt="" />
                                                </div>
                                                <div className="grow_fast_txt">
                                                    <h4>Get Full-Service Custom Development</h4>
                                                    <p>Develop custom web solutions that cater to the specific needs of your
                                                        business and
                                                        help you achieve your objectives more efficiently. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                                    <div className="bg-white rounded shadow position-relative" style={{ zIndex: 1 }}>
                                        <div className="p-5 pt-0">
                                            <div className="grow_fast_card">
                                                <div className="grow_fast_img">
                                                    <img src="https://www.exoticaitsolutions.com/wp-content/uploads/2023/04/sales-1.svg"
                                                        alt="" />
                                                </div>
                                                <div className="grow_fast_txt">
                                                    <h4>Boost Website Traffic</h4>
                                                    <p>Improve your website visibility in search engine results pages and eventually
                                                        get
                                                        more clicks and visits. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                                    <div className="bg-light rounded">
                                        <div className="p-5 pt-0">
                                            <div className="grow_fast_card">
                                                <div className="grow_fast_img">
                                                    <img src="https://www.exoticaitsolutions.com/wp-content/uploads/2023/04/customer-1.svg"
                                                        alt="" />
                                                </div>
                                                <div className="grow_fast_txt">
                                                    <h4>Improve User Experience</h4>
                                                    <p>Enhance the user experience by making your website more user-friendly,
                                                        visually
                                                        appealing, and easy to navigate.</p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Pricing Plan End */}

                <div className="container-fluid py-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="container py-4">
                        <div className="row g-5">
                            <div className="col-lg-7">
                                <div className="section-title position-relative pb-3 mb-5">
                                    <h1 className="mb-0">How We Work</h1>
                                </div>
                                <p className="grow_faster_cntnt">
                                    Our approach involves using a blend of data, expertise, content,
                                    cutting-edge technologies, and iterative processes to provide tangible outcomes that bring
                                    value to your audience through digital experiences.<br />

                                    <b>1. Understanding Your Business Needs:</b> We start by understanding your business needs
                                    and goals to develop a tailored strategy that suits your unique requirements.<br />

                                    <b>2. Comprehensive Web Design and Development Services:</b> We offer a comprehensive range
                                    of custom web design and development services to create an exceptional online experience for
                                    your customers.<br />

                                    <b>3. Ongoing Maintenance and Support:</b> We provide ongoing maintenance and support to
                                    ensure your website runs smoothly and efficiently, offering peace of mind for your business.<br />

                                    <b>4. SEO Strategies to Boost Your Online Presence:</b> Our SEO strategies are designed to
                                    boost your online presence, attract more organic traffic, and improve your search engine rankings.<br />

                                    <b>5. Transparent and Collaborative Process:</b> We pride ourselves on our transparent and
                                    collaborative process, keeping you informed and involved every step of the way to ensure your satisfaction.
                                </p>
                            </div>
                            <div className="col-lg-5" >
                                <div className="position-relative h-100">
                                    {/* <img className="position-absolute w-100 h-100 rounded wow zoomIn"
                                    id="img_how_we_work" data-wow-delay="0.9s"
                                    src="map.png" style={{ objectFit: 'cover' }} alt="How we work" /> */}
                                    <img src="map.png" data-wow-delay="0.9s" alt="" />
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
                                    <img class="position-absolute w-100 h-100 rounded wow zoomIn " data-wow-delay="0.9s"
                                        src="pexels-thisisengineering-3861959.jpg" style={{ objectFit: 'cover' }} />
                                </div>
                            </div>
                            <div class="col-lg-7">
                                <div class="section-title position-relative pb-3 mb-5 ">
                                    <h1 class="mb-0">Have a project In Mind?</h1>
                                </div>
                                <p class="grow_faster_cntnt">Let our technical experts understand your unique custom design,
                                    development or digital marketing needs so they can create a roadmap to convert your business
                                    dream into reality. Book a FREE consultation today!</p>
                                <Link href="/contact" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft btn-cont">Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Technology Stack */}
                <div className="container-fluid py-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="container py-4">
                        <div className="section-title text-center position-relative pb-3 mb-4 mx-auto" style={{ maxWidth: '600px' }}>
                            <h1 className="mb-0">Technology Stack</h1>
                        </div>
                        <Slider {...settings}>
                            {items && items.map(item => (
                                <div className="testimonial-item bg-light my-4" key={item.id}>
                                    <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                                        <img className="img-fluid rounded" src={item.imageUrl} alt={item.title} style={{ width: '80px', height: '80px' }} />
                                        <div className="ps-4">
                                            <h4 className="text-primary mb-1">{item.title}</h4>
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </Slider>
                    </div>
                </div>
                {/* Technology Stack end */}

                <div class="container py-5">
                    <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                        <h5 class="fw-bold text-primary text-uppercase">Get Excited Already?</h5>
                        <h1 class="mb-0">Quick Contact Us</h1>
                    </div>
                    <div class="row g-5">
                        <div class="col-lg-6 wow slideInUp" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'slideInUp' }}>
                            {/* <form>
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
                        </form> */}
                            <Form />
                        </div>
                        <div class="col-lg-6 wow slideInUp" data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'slideInUp' }}>
                            {/* <img src="./contus-img.jpg" alt="" style={{width: "510"}} /> */}
                            <img className="position-relative rounded w-100 h-100" src="./cont-us-2.jpg" width="400" height="300" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></img>
                        </div>
                    </div>
                </div>
                <Foter />
                {/* <Foooter1/> */}
            </div>
        </>
    );
}

export default Home;
