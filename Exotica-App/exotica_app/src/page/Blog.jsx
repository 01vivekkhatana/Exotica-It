import React from 'react';
import Nav from '../components/Nav';
import Foter from '../components/Foter';
import { Link } from 'react-router-dom';
function Blog() {
    return (
        <>
            <Nav />
            {/* banner start */}
            <div class="container-fluid bg-primary py-5 bg-header" style={{ marginBottom: '90px', background: 'linear-gradient(rgba(9, 30, 62, .7), rgba(9, 30, 62, .7)), url("") center center no-repeat', backgroundSize: 'cover' }}>
                <div class="row py-5">
                    <div class="col-12 pt-lg-5 mt-lg-5 text-center">
                        <h1 class="display-4 text-white animated zoomIn">Blog</h1>
                        <Link to="/" class="h5 text-white">Home</Link>
                        <i class="far fa-circle text-white px-2"></i>
                        <Link to="/blog" class="h5 text-white">Blog</Link>
                    </div>
                </div>
            </div>
            {/* banner end */}
            <div class="container py-5">
                <div class="row g-5">
                    <div class="col-lg-4 wow slideInUp" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'slideInUp',}}>
                        <div class="blog-item bg-light rounded overflow-hidden">
                            <div class="blog-img position-relative overflow-hidden">
                                <img class="img-fluid" src="https://www.exoticaitsolutions.com/wp-content/uploads/2024/01/image_2024_01_06T10_04_01_694Z.png" alt=""/>
                            </div>
                            <div class="p-4">

                                <h4 class="mb-3">Leveraging Web Design Magic: Unraveling the Art and Science of Digital Excellence</h4>
                                <p>In the ever-evolving digital landscape, where online presence is paramount, web design stands as the cornerstone of digital excellence. As businesses strive to make a mark in the virtual realm, understanding the intricacies of web design becomes not just an option but a necessity. In this article, we delve deep</p>
                                <a class="text-uppercase" href="">Read More <i class="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 wow slideInUp" data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'slideInUp',}}>
                        <div class="blog-item bg-light rounded overflow-hidden">
                            <div class="blog-img position-relative overflow-hidden">
                                <img class="img-fluid" src="https://www.exoticaitsolutions.com/wp-content/uploads/2023/10/image_2023_10_16T10_24_41_007Z.png" alt=""/>
                            </div>
                            <div class="p-4">

                                <h4 class="mb-3">Streamlining Operations: E-commerce Store Solutions for Efficiency</h4>
                                <p>In today’s fast-paced digital marketplace, e-commerce businesses face increasing pressure to streamline their operations for optimal efficiency. With consumers expecting quick delivery, a seamless shopping experience, and top-notch customer service, e-commerce stores must find innovative ways to meet these demands. This article explores the various strategies and tools available to</p>
                                <a class="text-uppercase" href="">Read More <i class="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 wow slideInUp" data-wow-delay="0.9s" style={{ visibility: 'visible', animationDelay: '0.9s', animationName: 'slideInUp',}}>
                        <div class="blog-item bg-light rounded overflow-hidden">
                            <div class="blog-img position-relative overflow-hidden">
                                <img class="img-fluid" src="https://www.exoticaitsolutions.com/wp-content/uploads/2023/09/image_2023_09_22T11_50_08_884Z.png" alt=""/>
                            </div>
                            <div class="p-4">

                                <h4 class="mb-3">Top 5 Web Development Trends to Watch Out For in 2023</h4>
                                <p>In the ever-evolving world of web development, staying up-to-date with the latest trends is crucial to building cutting-edge websites and applications. As we step into 2023, the web development landscape continues to evolve rapidly, with new technologies and practices reshaping the industry. In this article, we’ll explore the top 5</p>
                                <a class="text-uppercase" href="">Read More <i class="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Foter />
        </>
    );
}

export default Blog;