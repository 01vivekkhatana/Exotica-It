import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import './css/main.css'
import './App.scss';
import './css/bootstrap.min.css'
import './css/mediq-query.css'
import Home from './page/Home';
import './lib/animate/animate.min.css'
import Contact from './page/Contact';
import React, { useEffect } from 'react';
import 'owl.carousel';
import WOW from 'wowjs';
import About from './page/About';
import Testimonial from './page/Testimonial';
import Portfolio from './page/Portfolio';
import Blog from './page/Blog';
import Service from './page/Service';
import WebDesign from './page/WebDesign';
import WebDevelop from './page/WebDevelop';
import Cms from './page/Cms';
import CustomDev from './page/CustomDev';
import DatabaseMan from './page/DatabaseMan';
import Maintenance from './page/Maintenance';
import EcommerceStore from './page/EcommerceStore';
import Seo from './page/Seo';
import Health from './page/industry/Health';
import Logistics from './page/industry/Logistics';
import Signin from './dashboard/dashboard/sign-in/Signin';
import PrivateRouter from './PrivateRoute'
import Dashboard from './dashboard/Dashboard';
import NavTab from './dashboard/NavTab';
import Banner from './dashboard/Banner';
import ProfileSetting from './dashboard/ProfileSetting';

function App() {

  useEffect(() => {
    // Initialize Wow.js
    const wow = new WOW.WOW();
    wow.init();

}, []);
  return (


    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />}/>

        <Route path="/services/webdesign" element={<WebDesign />} />
        <Route path="/services/webdevelop" element={<WebDevelop />} />
        <Route path="/services/cms" element={<Cms />} />
        <Route path="/services/custom_developer" element={<CustomDev/>}/>
        <Route path="/services/database_management" element={<DatabaseMan/>}/>
        <Route path="/services/maintenance_and_support_services" element={<Maintenance/>}/>
        <Route path="/services/ecommerce_store_development" element={<EcommerceStore/>}/>
        <Route path="/services/seo_search_engine_optimization" element={<Seo/>}/>


        <Route path="/industry/health" element={<Health/>}/>
        <Route path="/industry/logistics" element={<Logistics/>}/>


        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/admin" element={<Signin />} />
        {/* <Route exact path="/dashboard" element={<Dashboard />} /> */}
        <Route element={<PrivateRouter />}>
          <Route exact path="/admin/dashboard" element={<Dashboard />} />
          <Route exact path="/admin/dashboard/nav-bar" element={<NavTab />} />
          <Route exact path="/admin/dashboard/banner" element={<Banner />} />
          <Route exact path="/admin/dashboard/profile-setting" element={<ProfileSetting />} />
        </Route>
        </Routes>
    </Router>


  );
}

export default App;
