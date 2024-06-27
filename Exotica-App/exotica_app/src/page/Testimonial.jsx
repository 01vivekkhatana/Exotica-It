import React from 'react';
import Nav from '../components/Nav';
import Foter from '../components/Foter';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';
function Testimonial() {
    let settings = {
        dots: true,
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
        { id: 1, imageUrl: 'testimonial-1.jpg',  },
        { id: 2, imageUrl: 'testimonial-2.jpg',  },
        { id: 3, imageUrl: 'testimonial-3.jpg',  },
        { id: 4, imageUrl: 'testimonial-4.jpg', }
    ]);
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
                                <h3 class="display-1 text-white mb-md-4 animated zoomIn ">Our Happy Clients Speak for Us</h3>
                                <h5 class="text-white mb-3 animated slideInDown">We take pride in delivering top-notch services to our clients, and their satisfaction is our biggest achievement. Read what our happy clients have to say about their experience with Exotica.</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* banner end */}
            {/*  */}
            <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div class="container py-5">
                    <div class="section-title text-center position-relative pb-3 mb-4 mx-auto"  style={{maxWidth: '600px'}}>
                        <h1 class="mb-0">Our Google Reviews</h1>
                    </div>
                    <div class="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.6s">
                    <Slider {...settings}>
                    {items && items.map(item => (
                        <div class="testimonial-item bg-light my-4" key={item.id}>
                            <div class="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                                <img class="img-fluid rounded" src={item.imageUrl} style={{width: '60px', height: '60px'}} />
                                    <div class="ps-4">
                                        <h4 class="text-primary mb-1" id="tecn_font">Client Name</h4>
                                        <small class="text-uppercase">Profession</small>
                                    </div>
                            </div>
                            <div class="pt-4 pb-5 px-5">
                                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                            </div>
                        </div>
                         ))} 
                         </Slider>
                        {/* <div class="testimonial-item bg-light my-4">
                            <div class="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                                <img class="img-fluid rounded" src="testimonial-2.jpg" style={{width: '60px', height: '60px'}} />
                                    <div class="ps-4">
                                        <h4 class="text-primary mb-1">Client Name</h4>
                                        <small class="text-uppercase">Profession</small>
                                    </div>
                            </div>
                            <div class="pt-4 pb-5 px-5">
                                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                            </div>
                        </div>
                        <div class="testimonial-item bg-light my-4">
                            <div class="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                                <img class="img-fluid rounded" src="testimonial-3.jpg" style={{width: '60px', height: '60px'}} />
                                    <div class="ps-4">
                                        <h4 class="text-primary mb-1">Client Name</h4>
                                        <small class="text-uppercase">Profession</small>
                                    </div>
                            </div>
                            <div class="pt-4 pb-5 px-5">
                                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                            </div>
                        </div>
                        <div class="testimonial-item bg-light my-4">
                            <div class="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                                <img class="img-fluid rounded" src="testimonial-4.jpg"  style={{width: '60px', height: '60px'}} />
                                    <div class="ps-4">
                                        <h4 class="text-primary mb-1">Client Name</h4>
                                        <small class="text-uppercase">Profession</small>
                                    </div>
                            </div>
                            <div class="pt-4 pb-5 px-5">
                                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            {/*  */}

            <Foter />
        </>
    );
}

export default Testimonial;