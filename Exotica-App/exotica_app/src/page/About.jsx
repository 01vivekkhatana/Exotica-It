import React, { useEffect } from 'react';
import Nav from '../components/Nav';
import Foter from '../components/Foter';
import CountUp from 'react-countup';
import { Link,useParams } from 'react-router-dom';
function About() {
    const { serviceId } = useParams(); 
    useEffect(()=>{

        console.log("ggggg",serviceId);

    },[serviceId]);
    return (
        <>
            <Nav />
            {/* banner start */}
            <div id="header-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="w-100" src="carousel-1.jpg" alt="Image" />
                        <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div class="p-3" style={{ maxWidth: '900px' }}>
                                <h3 class="display-1 text-white mb-md-4 animated zoomIn ">Your Trusted Development and
                                    Digital Marketing Partner</h3>
                                <h5 class="text-white mb-3 animated slideInDown">Whether you’re a global enterprise, an SME
                                    or a startup, you can count on us for result-driven custom design, development and
                                    digital marketing services. We help your business thrive through the world-class web,
                                    CMS, and Ecommerce development.</h5>
                                <Link to="/service"
                                    class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft btn_service">Explore Services
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* banner end */}

            {/* Facts Start */}
            {/* <div className="container-fluid facts py-4 pt-lg-0">
                <div className="container py-4 pt-lg-0">
                    <div className="row gx-0">
                        <div className="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
                            <div className="bg-primary shadow d-flex align-items-center justify-content-center p-4"
                                style={{ height: '150px' }}>
                                <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2"
                                    style={{ width: '60px', height: '60px' }}>
                                    <i className="fa fa-users text-primary"></i>
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
                                <div className="bg-primary d-flex align-items-center justify-content-center rounded mb-2"
                                    style={{ width: '60px', height: '60px' }}>
                                    <i className="fa fa-check text-white"></i>
                                </div>
                                <div className="ps-4">
                                    <h5 className="text-primary mb-0">Completed Projects</h5>
                                    <h1 className="mb-0" data-toggle="counter-up"><CountUp start={0} end={1000} duration={2.75} /></h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
                            <div className="bg-primary shadow d-flex align-items-center justify-content-center p-4"
                                style={{ height: '150px' }}>
                                <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2"
                                    style={{ width: '60px', height: '60px' }}>
                                    <i className="fa fa-award text-primary"></i>
                                </div>
                                <div className="ps-4">
                                    <h5 className="text-white mb-0">On Going Projects</h5>
                                    <h1 className="text-white mb-0" data-toggle="counter-up"><CountUp start={0} end={250} duration={2.75} /></h1>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* Facts End */}
            {/* About start */}
            <div class="container-fluid py-4 wow fadeInUp" data-wow-delay="0.1s">
                <div class="container py-4">
                    <div class="row g-5">
                        <div class="col-lg-7">
                            <div class="section-title position-relative pb-3 mb-5">
                                <h1 class="mb-0">Who We Are</h1>
                            </div>
                            <p class="mb-4 para_about">Established in (Year), Exotica is a new age IT company based in
                                Edgevalley Road London, Ontario, Canada, offering world-class design, development and digital
                                marketing service to meet your business’ unique needs.<br />Regardless of your industry and
                                business size, our perfect blend of highly-qualified experts, one-of-a-kind approaches, and
                                new-age technology solutions will help your business reach new heights that you haven’t
                                imagined. <br />We use human intelligence, data, and state-of-the-art technology in a variety of
                                services we provide, from design to development, support and SEO. And we strive for ongoing
                                improvement by consistently refining the results as soon as they come in.</p>
                        </div>
                        <div class="col-lg-5" style={{ minHeight: '500px' }}>
                            <div class="position-relative h-100">
                                <img class="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s"
                                    src="About_page.jpg" style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About end */}
            {/* free- lan image   */}
            <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div class="container py-5">
                    <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                        <h1 class="mb-0">See How Much Clients Love Our Work!</h1>
                    </div>
                    <div class="row g-5">
                        <div class="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                            <div class="team-item bg-light rounded overflow-hidden">
                                <div class="team-img position-relative overflow-hidden">
                                    <img class="img-fluid w-100" src="up_work.png" alt="" />

                                </div>
                                <div class="text-center py-4">
                                    <h4 class="text-primary">4.8/5</h4>
                                    <p class="text-uppercase m-0">and 26 Reviews</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                            <div class="team-item bg-light rounded overflow-hidden">
                                <div class="team-img position-relative overflow-hidden">
                                    <img class="img-fluid w-100" src="google_img.webp" alt="" />

                                </div>
                                <div class="text-center py-4">
                                    <h4 class="text-primary">4.5/5</h4>
                                    <p class="text-uppercase m-0">and 260 Reviews</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                            <div class="team-item bg-light rounded overflow-hidden">
                                <div class="team-img position-relative overflow-hidden">
                                    <img class="img-fluid w-100" src="freelan_logo.jpg" alt="" />

                                </div>
                                <div class="text-center py-4">
                                    <h4 class="text-primary">4.7/5</h4>
                                    <p class="text-uppercase m-0">and 16 Reviews</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* free- lan image  */}
            {/*  */}
            <div class="container-fluid py-4 wow fadeInUp" data-wow-delay="0.1s">
                <div class="container py-4">
                    <div class="row g-5" style={{alignItems: 'center'}}>
                        <div class="col-lg-5">
                            <div class="mission-div">
                             <img className="rounded wow zoomIn" data-wow-delay="0.9s" src="Mission.png" alt="" />
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <div class="section-title position-relative pb-3 mb-5 ">
                                <h1 class="mb-0">Our Mission</h1>
                            </div>
                            <p class="grow_faster_cntnt">Our mission is to provide innovative and customized IT solutions that
                                meet the unique needs of our clients. We strive to exceed their expectations by delivering
                                high-quality products and services while maintaining a commitment to customer satisfaction and
                                excellence.</p>
                            <a href="/contact" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft btn-cont">Contact
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}

            <Foter />
        </>
    );
}

export default About;