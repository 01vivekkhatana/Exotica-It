
import Nav from '../components/Nav';
import Foter from '../components/Foter';
import Form from '../components/Form';
import { Link } from 'react-router-dom';
function Contact() {
    
    return (
        <>
            <Nav />
            {/* banner start */}

            <div class="container-fluid bg-primary py-5 bg-header" style={{ marginBottom: '90px', background: 'linear-gradient(rgba(9, 30, 62, .7), rgba(9, 30, 62, .7)), url("") center center no-repeat', backgroundSize: 'cover' }}>
                <div class="row py-5">
                    <div class="col-12 pt-lg-5 mt-lg-5 text-center">
                        <h1 class="display-4 text-white animated zoomIn">Contact Us</h1>
                        <Link to="/" class="h5 text-white">Home</Link>
                        <i class="far fa-circle text-white px-2"></i>
                        <Link to="/contact" class="h5 text-white">Contact</Link>
                    </div>
                </div>
            </div>
            {/* banner end */}
            {/* Contact Start */}
            <div class="container-fluid py-4 wow fadeInUp" data-wow-delay="0.1s">
                <div class="container py-4">
                    <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                        <h5 class="fw-bold text-primary text-uppercase">Get Excited Already?</h5>
                        <h1 class="mb-0">Quick Contact Us</h1>
                    </div>
                    <div class="row g-5 mb-5">
                        <div class="col-lg-4">
                            <div class="d-flex align-items-center wow fadeIn" data-wow-delay="0.1s">
                                <div class="bg-primary d-flex align-items-center justify-content-center rounded bg_hvchgds" style={{ width: '60px', height: '60px' }}>
                                    <i class="fa fa-phone-alt text-white"></i>
                                </div>
                                <div class="ps-4">
                                    <h5 class="mb-2">Call to ask any question</h5>
                                    <a href="tel: +91 7018 152390" className="cont_link"><h5 class="text-primary mb-0">+91 7018 152390</h5></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="d-flex align-items-center wow fadeIn" data-wow-delay="0.4s">
                                <div class="bg-primary d-flex align-items-center justify-content-center rounded bg_hvchgds" style={{ width: '60px', height: '60px' }}>
                                    <i class="fa fa-envelope-open text-white"></i>
                                </div>
                                <div class="ps-4">
                                    <h5 class="mb-2">Email to get free quote</h5>
                                    <a href="mailto:sales@exoticaitsolutions.com" class="cont-link"><h5 class="text-primary mb-0">info@exoticaitsolutions.com</h5></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="d-flex align-items-center wow fadeIn" data-wow-delay="0.8s">
                                <div class="bg-primary d-flex align-items-center justify-content-center rounded bg_hvchgds" style={{ width: '60px', height: '60px' }}>
                                    <i class="fa fa-map-marker-alt text-white "></i>
                                </div>
                                <div class="ps-4">
                                    <h5 class="mb-2">Visit our office</h5>
                                    <h5 class="text-primary mb-0">385 Edgevalley Road London, Ontario, N5v0c2</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row g-5">
                        <div class="col-lg-6 wow slideInUp" data-wow-delay="0.3s">
                            <Form/>
                        </div>
                        <div class="col-lg-6 wow slideInUp" data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'slideInUp' }}>
                            <iframe className="position-relative rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.3397779723773!2d76.69915047447073!3d30.708846986788608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef9d63bc66f1%3A0x321d9a798e5609f4!2sExotica%20IT%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1707735731389!5m2!1sen!2sin" width="400" height="300" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact End */}
            
            <Foter/> 
        </>
    );
}

export default Contact;