import { React, useEffect } from "react";
import { initializeSliders, handleNavbarScroll, initializeHoverEffect, initializeCounter, initScrollAnimations } from '../js/main';
import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Header from "../components/Header";
import heroBg from '../images/hero_bg.png';
import featued_bnr from '../images/featued_bnr.png';
import pinnacle_bnr from '../images/pinnacle_bnr.png';
import background_map from '../images/background_map.png';
import Footer from "../components/Footer";

function Home() {
    useEffect(() => {

        const cleanupScroll = handleNavbarScroll();
        initializeSliders();
        handleNavbarScroll();
        initializeHoverEffect();
        initializeCounter();
        initScrollAnimations();

        return () => {
            cleanupScroll();
        };
    }, []);

    const backgroundStyle = {
        backgroundImage: `url(${heroBg})`,
    };
    
    const divstylee = {
        backgroundImage: `url(${featued_bnr})`,
    };
    const stylee ={
        backgroundImage: `url(${pinnacle_bnr})`,
    }
    const styleee ={
        backgroundImage: `url(${background_map})`,
    }
    const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.1 });
    const images = [
        'thumnail_img1.png',
        'thumnail_img2.png',
        'thumnail_img3.png',
        'thumnail_img4.png',
        'thumnail_img5.png',
        'thumnail_img6.png',
        'main_image.png',
    ];
    return (
        <>
            <Header />
            <section className="hero_sec bg-style" style={backgroundStyle}>
                <div className="container">
                    <div className="row flex justify-between align-center">
                        <div className="col-5">
                            <div className="hero_content">
                                <h2>
                                    Accelerate your business's
                                    <span>
                                      cutting as digital solutions
                                    </span>
                                    <br />
                                    solutions.
                                </h2>
                                <div className="hero_btn">
                                    <Link to="#" className="theme_btn">Have An Project In Mind</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="hero_img">
                                <img className="circles" src="circles.png" alt="img" />
                                <div className="main_img">
                                    <motion.img
                                        src="main_image.png"
                                        alt="img"
                                        initial={{ scale: 1, rotateX: 0, rotateY: 0 }}
                                        whileHover={{ scale: 1.05, rotateX: 30, rotateY: 20 }}
                                        transition={{ duration: 0.5 }}
                                        style={{ cursor: 'pointer' }}
                                    />
                                    {images.map((src, index) => (
                                        <motion.img
                                            key={index}
                                            src={src}
                                            alt={`img-${index}`}
                                            className={`thumbnail_img thumbnail_img${index + 1}`}
                                            initial={{ x: '100vw', opacity: 0 }} // Start off-screen to the right
                                            animate={{
                                                x: 0, // Move to final X position
                                                y: [0, 5, -5, 5, -5, 0], // Smooth vertical bouncing effect
                                                opacity: 1, // Final opacity
                                            }} // Move to its final position and fade in
                                            transition={{
                                                x: {
                                                    duration: 2,
                                                    ease: 'easeOut',
                                                },
                                                y: {
                                                    type: 'tween',
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    repeatType: 'loop',
                                                    ease: 'easeInOut',
                                                },
                                                opacity: {
                                                    duration: 1,
                                                    ease: 'easeOut',
                                                },

                                            }}

                                            whileHover={{
                                                scale: [1, 1.5, 1],

                                                transition: {
                                                    scale: {
                                                        type: 'tween',
                                                        duration: 0.5,
                                                        ease: 'easeInOut',
                                                    },

                                                },
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="counter_sec py">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <div className="item">
                                <h1 className="count" data-number="10">10+</h1>
                                <h3 className="text">Years of Experience</h3>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="item">
                                <h1 className="count" data-number="12">12+</h1>
                                <h3 className="text">Countries Served</h3>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="item">
                                <h1 className="count" data-number="350">350+</h1>
                                <h3 className="text">Tech Enthusiast</h3>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="item">
                                <h1 className="count" data-number="1000">1000+</h1>
                                <h3 className="text">Projects Delivered</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="service_sec">
                <div className="container">
                    <div className="inner_services row justify-between align-center">
                        <motion.div
                            className="col-4"
                            ref={ref1}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 50 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="service_box">
                                <h3>Exclusive <span>Development Team</span></h3>
                                <p>Rapid team assembly, adaptable collaboration, and seasoned engineers to empower your project with enhanced capabilities.</p>
                            </div>
                        </motion.div>
                        <motion.div
                            className="col-4"
                            ref={ref2}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 50 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="service_box">
                                <h3>Comprehensive <span>Software Development</span></h3>
                                <p>Exceptional user-centric UI/UX, complete development lifecycle coverage, and bespoke solutions tailored to your needs.</p>
                            </div>
                        </motion.div>
                        <motion.div
                            className="col-4"
                            ref={ref3}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: inView3 ? 1 : 0, y: inView3 ? 0 : 50 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="service_box">
                                <h3>Boost <span>Website Traffic</span></h3>
                                <p>Improve your website visibility in search engine results pages and eventually get more clicks and visits.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section class="trusted_sec py reveal">
                <div class="container">
                    <div class="inner_trusted row flex justify-between align-center">
                        <div class="col-5">
                            <div class="trusted_title">
                                <h5>Trusted by</h5>
                                <h2><span>2000+ Successful</span> Brands, We Take Charge of <span />12+ Services in 9+ Industries
                                </h2>
                            </div>
                        </div>
                        <div class="col-7">
                            <div class="trusted_inner">
                                <div class="trusted_box">
                                    <div class="trusted_card">
                                        <h5>Five Star Rating on</h5>
                                        <img src="upwork.png" alt="img" />
                                    </div>
                                    <div class="trusted_card">
                                        <h5>Five Star Rating on</h5>
                                        <img src="bark.png" alt="img" />
                                    </div>
                                    <div class="trusted_card">
                                        <h5>Proud Member of</h5>
                                        <img src="chamber.png" alt="img" />
                                    </div>
                                </div>
                                <p>Work with a custom web application development company in Ontario and surrounding areas that
                                    design, develop and market in a way that elevates your customer’s experiences, earn their
                                    loyalty and grow your business. Amidst a world full of seemingly endless challenges, we see
                                    boundless opportunities. Our team of creative thinkers, designers, developers and digital
                                    experts is committed to designing and building the right digital products that can foster
                                    your growth. Our services help prepare your business for future success today.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="expertise_sec reveal">
                <div class="container">
                    <div class="heading-title">
                        <h2>Transforming businesses through<span>excellence and expertise.</span></h2>
                    </div>
                    <div class="expertise_inner row">
                        <div class="col-7">
                            <div class="expertise_img">
                                <img src="business.png" alt="img" />
                            </div>
                        </div>
                        <div class="col-5">
                            <div class="expertise_content">
                                <div class="expertise_box reveal">
                                    <h6>Tailored Solutions</h6>
                                    <p>Our software development expertise customizes solutions for businesses based on their
                                        specific needs.</p>
                                </div>
                                <div class="expertise_box reveal">
                                    <h6>Cutting-Edge Services</h6>
                                    <p>We offer a comprehensive range of services to help you leverage the full potential of
                                        digital technology.</p>
                                </div>
                                <div class="expertise_box reveal">
                                    <h6>Different Approach</h6>
                                    <p>Our solutions are highly adaptable to suit any business while enhancing their durability
                                        and reliability.</p>
                                </div>
                                <div class="expertise_box reveal">
                                    <h6>Bespoke Process</h6>
                                    <p>Our objective is to offer personalized solutions that aid in the success of your
                                        business.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="featured_section reveal " style={divstylee}>
                <div class="container">
                    <div class="inner_featured">
                        <div class="heading-title">
                            <h2>Featured <span>Projects</span></h2>
                        </div>
                        <div class="inner_projects">
                            <div class="featured_project_sec">
                                <div class="project_sec">
                                    <div class="left_images">
                                        <img src="featued_img.png" alt="" />
                                    </div>
                                    <div class="left_mobile_images">
                                        <img src="featured_mobile.png" alt="mobile" />
                                    </div>
                                </div>
                                <div class="right_content_sec">
                                    <div class="inner_right">
                                        <div class="right_logo">
                                            <img src="beer_logo.png" alt="beer" />
                                        </div>
                                        <div class="right_title">
                                            <h3>Online Beer Store</h3>
                                        </div>
                                    </div>
                                    <div class="link_sec">
                                        <Link to="">www.beerstore.com.au <img src="Arrow 1 (1).png" alt="arrow" /></Link>
                                        <p>The Beerstore is a family run business, dedicated to giving you the ultimate customer
                                            experience.</p>
                                    </div>
                                    <div class="content_sec">
                                        <ul>
                                            <li>
                                                <p>Platform</p>
                                                <h4>IOS+Window</h4>
                                            </li>
                                            <li>
                                                <p>Country</p>
                                                <h4>Australia</h4>
                                            </li>
                                            <li>
                                                <p>Online Buyers</p>
                                                <h4>10K</h4>
                                            </li>
                                            <li>
                                                <p>Technology</p>
                                                <h4>Shopify</h4>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="featured_project_sec">
                                <div class="project_sec">
                                    <div class="left_images">
                                        <img src="featued_img.png" alt="feature" />
                                    </div>
                                    <div class="left_mobile_images">
                                        <img src="featured_mobile.png" alt="mobile" />
                                    </div>
                                </div>
                                <div class="right_content_sec">
                                    <div class="inner_right">
                                        <div class="right_logo">
                                            <img src="beer_logo.png" alt="beer" />
                                        </div>
                                        <div class="right_title">
                                            <h3>Online Beer Store</h3>
                                        </div>
                                    </div>
                                    <div class="link_sec">
                                        <Link to="#">www.beerstore.com.au <img src="Arrow 1 (1).png" alt="arrow" /></Link>
                                        <p>The Beerstore is a family run business, dedicated to giving you the ultimate customer
                                            experience.</p>
                                    </div>
                                    <div class="content_sec">
                                        <ul>
                                            <li>
                                                <p>Platform</p>
                                                <h4>IOS+Window</h4>
                                            </li>
                                            <li>
                                                <p>Country</p>
                                                <h4>Australia</h4>
                                            </li>
                                            <li>
                                                <p>Online Buyers</p>
                                                <h4>10K</h4>
                                            </li>
                                            <li>
                                                <p>Technology</p>
                                                <h4>Shopify</h4>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="arrow_sec">
                            <div class="left_arrow">
                                <img src="angle_left.png" alt="teech" />
                            </div>
                            <div class="right_arrow">
                                <img src="angle_right.png" alt="teech" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="future_sec">
                <div class="container">
                    <div class="inner_future">
                        <div class="future_content">
                            <div class="heading-title">
                                <h2>Together, Let's Shape the <span>Future of Technology</span></h2>
                                <p>Allow our team to offer you a complimentary technical proposal for your upcoming enterprise
                                    custom project, with no obligations.</p>
                            </div>
                            <div class="hero_btn">
                                <Link to="#" class="theme_btn" alt="teech">Have An Project In Mind</Link>
                            </div>
                        </div>
                        <div class="share_img">
                            <img src="172457_down_arrow_icon 2.png" alt="teech" />
                        </div>
                        <div class="right_futre_img">
                            <img src="techhnology.png" alt="teech" />
                        </div>
                    </div>
                </div>
            </section>

            <section class="our_expertise_sec reveal">
                <div class="container">
                    <div class="inner_expertise">
                        <div class="heading-title">
                            <h2><span>Our Expertise</span></h2>
                        </div>
                        <div class="expertise_section">
                            <ul>
                                <li class="inner_expert_sec">
                                    <div class="inner_expert">
                                        <img src="expertise_1.png" alt=""/>
                                    </div>
                                    <div class="expertise_cont">
                                        <Link to="">Online Stores<img src="Arrow 4 (1).png" alt=""/></Link>
                                    </div>
                                </li>
                                <li class="inner_expert_sec">
                                    <div class="inner_expert">
                                        <img src="expertise_2.png" alt=""/>
                                    </div>
                                    <div class="expertise_cont">
                                        <Link to="">Online Stores<img src="Arrow 4 (1).png" alt=""/></Link>
                                    </div>
                                </li>
                                <li class="inner_expert_sec">
                                    <div class="inner_expert">
                                        <img src="expertise_3.png" alt=""/>
                                    </div>
                                    <div class="expertise_cont">
                                        <Link to="">Online Stores<img src="Arrow 4 (1).png" alt=""/></Link>
                                    </div>
                                </li>
                                <li class="inner_expert_sec">
                                    <div class="inner_expert">
                                        <img src="expertise_4.png" alt=""/>
                                    </div>
                                    <div class="expertise_cont">
                                        <Link to="">Online Stores<img src="Arrow 4 (1).png" alt=""/></Link>
                                    </div>
                                </li>
                                <li class="inner_expert_sec">
                                    <div class="inner_expert">
                                        <img src="expertise_5.png" alt=""/>
                                    </div>
                                    <div class="expertise_cont">
                                        <Link to="">Online Stores<img src="Arrow 4 (1).png" alt=""/></Link>
                                    </div>
                                </li>
                                <li class="inner_expert_sec">
                                    <div class="inner_expert">
                                        <img src="expertise_6.png" alt=""/>
                                    </div>
                                    <div class="expertise_cont">
                                        <Link to="">Online Stores<img src="Arrow 4 (1).png" alt=""/></Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section class="innovative_sec reveal">
                <div class="container">
                    <div class="inner_innovative_sec">
                        <div class="heading-title">
                            <h2><span>Create, Update and Market Your Digital Product
                                With Innovative Technologies
                            </span></h2>
                            <p>Partner with Exotica to launch, operate, and expand your business worldwide. Begin your digital journey now!</p>
                        </div>
                        <div class="map_sec" style={styleee}>
                            <img src="customer_img.png" alt=""/>
                        </div>
                    </div>
                </div>
            </section>

            <section class="technology_sec reveal">
                <div class="container">
                    <div class="inner_technology">
                        <div class="heading-title">
                            <h2><span>Technology</span></h2>
                            <p>Our engineers understand your business needs and assist in selecting the appropriate technology for your solution.</p>
                        </div>
                        <div class="technology_brand_logo">
                            <div class="tech_logo">
                                <img src="tech-1.png" alt=""/>
                            </div>
                            <div class="tech_logo">
                                <img src="tech-2.png" alt=""/>
                            </div>
                            <div class="tech_logo">
                                <img src="tech-3.png" alt=""/>
                            </div>
                            <div class="tech_logo">
                                <img src="tech-4.png" alt=""/>
                            </div>
                            <div class="tech_logo">
                                <img src="tech-5.png" alt=""/>
                            </div>
                            <div class="tech_logo">
                                <img src="tech-6.png" alt=""/>
                            </div>
                            <div class="tech_logo">
                                <img src="tech-7.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section></section>

            <section class="pinnacle_sec reveal">
                <div class="container">
                    <div class="inner_pinnacle_sec" style={stylee}>
                        <div class="heading-title">
                            <h2>Our resilient mobile and web app development <span>Solutions elevate your business to the pinnacle!</span></h2>
                            <p>Allow our team to offer you a complimentary technical proposal for your upcoming enterprise custom project, with no obligations.</p>
                            <div class="hero_btn">
                                <Link to="#" class="theme_btn">Have An Project In Mind</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="why_choose_sec expertise_sec reveal">
                <div class="container">
                    <div class="inner_why_choose">
                        <div class="heading-title">
                            <h2><span>Why Choose Us</span></h2>
                            <p>The longer we've been in the industry, the stronger our solutions have become! With over a decade of experience, we've partnered with numerous brands, offering our expertise along the way.</p>
                        </div>
                        <div class="expertise_inner row">
                            <div class="col-5">
                                <div class="expertise_content">
                                    <div class="expertise_box reveal active">
                                        <h6>Quality</h6>
                                        <p>We strive to deliver top-notch products, ensuring meticulous attention to every detail.</p>
                                    </div>
                                    <div class="expertise_box reveal active">
                                        <h6>Reliability</h6>
                                        <p>Our teams consist of highly skilled and certified engineers possessing specialized domain knowledge</p>
                                    </div>
                                    <div class="expertise_box reveal active">
                                        <h6>Flexibility</h6>
                                        <p>Our team prioritizes client requirements and maintains transparency throughout the development process.</p>
                                    </div>
                                    <div class="expertise_box reveal active">
                                        <h6>Competence</h6>
                                        <p>Our team comprises expert developers with domain expertise spanning across all industries.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-7">
                                <div class="expertise_img">
                                    <img src="business.png" alt="img"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
<Footer/>

        </>
    )
};
export default Home;