import React from 'react';
import Nav from '../components/Nav';
import Foter from '../components/Foter';
function Portfolio() {
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
                                <h3 class="display-1 text-white mb-md-4 animated zoomIn ">Our Portfolio</h3>
                                <h5 class="text-white mb-3 animated slideInDown">Take a look at our portfolio and see how Exotica has helped businesses in the diverse industry achieve their goals with our innovative solutions.</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* banner end */}
            {/*  */}
            <div class="container py-5">
                <div class="row g-5">
                    <div class="col-lg-4 wow slideInUp" data-wow-delay="0.3s"  style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'slideInUp',}}>
                        <div class="blog-item bg-light rounded overflow-hidden">
                            <div class="blog-img position-relative overflow-hidden">
                                <img class="img-fluid" src="blog-1.jpg" alt="" />
                               
                            </div>
                            <div class="p-4">

                                <h4 class="mb-3">Beerstore.com.au</h4>
                                <p>Beer Store partnered with us to develop a user-friendly e-commerce website, enabling customers to browse and purchase a wide variety of beers.</p>
                                <a class="text-uppercase" href="">Read More <i class="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 wow slideInUp" data-wow-delay="0.6s"  style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'slideInUp',}}>
                        <div class="blog-item bg-light rounded overflow-hidden">
                            <div class="blog-img position-relative overflow-hidden">
                                <img class="img-fluid" src="blog-2.jpg" alt="" />
                            </div>
                            <div class="p-4">

                                <h4 class="mb-3">Ainuoshi.com</h4>
                                <p>Ainuoshi Jewelry partnered with us to develop a visually stunning and user-friendly e-commerce website. The solution showcased their exquisite jewelry collection</p>
                                <a class="text-uppercase" href="">Read More <i class="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 wow slideInUp" data-wow-delay="0.9s"  style={{ visibility: 'visible', animationDelay: '0.9s', animationName: 'slideInUp',}}>
                        <div class="blog-item bg-light rounded overflow-hidden">
                            <div class="blog-img position-relative overflow-hidden">
                                <img class="img-fluid" src="blog-3.jpg" alt="" />
                            </div>
                            <div class="p-4">

                                <h4 class="mb-3">Galenleather.com</h4>
                                <p>Galen Leather partnered with us to develop a visually captivating e-commerce website. The solution showcased their premium leather goods,</p>
                                <a class="text-uppercase" href="">Read More <i class="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
            {/*  */}
            <div class="container py-5">
                <div class="row g-5">
                    <div class="col-lg-4 wow slideInUp" data-wow-delay="0.3s"  style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'slideInUp',}}>
                        <div class="blog-item bg-light rounded overflow-hidden">
                            <div class="blog-img position-relative overflow-hidden">
                                <img class="img-fluid" src="blog-1.jpg" alt="" />
                               
                            </div>
                            <div class="p-4">

                                <h4 class="mb-3">Beerstore.com.au</h4>
                                <p>Beer Store partnered with us to develop a user-friendly e-commerce website, enabling customers to browse and purchase a wide variety of beers.</p>
                                <a class="text-uppercase" href="">Read More <i class="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 wow slideInUp" data-wow-delay="0.6s"  style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'slideInUp',}}>
                        <div class="blog-item bg-light rounded overflow-hidden">
                            <div class="blog-img position-relative overflow-hidden">
                                <img class="img-fluid" src="blog-2.jpg" alt="" />
                            </div>
                            <div class="p-4">

                                <h4 class="mb-3">Ainuoshi.com</h4>
                                <p>Ainuoshi Jewelry partnered with us to develop a visually stunning and user-friendly e-commerce website. The solution showcased their exquisite jewelry collection</p>
                                <a class="text-uppercase" href="">Read More <i class="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 wow slideInUp" data-wow-delay="0.9s"  style={{ visibility: 'visible', animationDelay: '0.9s', animationName: 'slideInUp',}}>
                        <div class="blog-item bg-light rounded overflow-hidden">
                            <div class="blog-img position-relative overflow-hidden">
                                <img class="img-fluid" src="blog-3.jpg" alt="" />
                            </div>
                            <div class="p-4">

                                <h4 class="mb-3">Galenleather.com</h4>
                                <p>Galen Leather partnered with us to develop a visually captivating e-commerce website. The solution showcased their premium leather goods,</p>
                                <a class="text-uppercase" href="">Read More <i class="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
            <Foter />
        </>
    );
}

export default Portfolio;