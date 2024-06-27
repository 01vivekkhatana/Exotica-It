import React, { useEffect, useRef } from "react";
import "../css/style.css";
import Typed from "typed.js";
import ScrollReveal from "scrollreveal";

function Home() {
  /*==================== toggle icon navbar ====================*/
  let menuIcon = document.querySelector("#menu-icon");
  let navbar = document.querySelector(".navbar");

  const options = {
    strings: ["MERN STACK   Developer", "Problem Solver "],
    typeSpeed: 200,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  };

  const typedRef = useRef(null);

  useEffect(() => {
    // Initialize Typed.js when the component mounts
    typedRef.current = new Typed(".multiple-text", options);

    ScrollReveal({
      // reset: true,
      distance: "80px",
      duration: 2000,
      delay: 200,
    });

    // ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
    // ScrollReveal().reveal(
    //   ".home-img, .services-container, .portfolio-box, .contact form",
    //   { origin: "bottom" }
    // );
    // ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
    // ScrollReveal().reveal(".home-content p, .about-content", {
    //   origin: "right",
    // });

    return () => {
      // Clean up Typed.js when the component unmounts
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, []);

  const handleDownload = () => {
    const fileUrl = "CV (3).pdf"; // Specify the correct path to your PDF file

    // Create a new anchor element
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "Vivek CV.pdf"); // Specify the filename to be downloaded

    // Trigger the click event to start the download
    document.body.appendChild(link);
    link.click();

    // Clean up after the download is initiated
    document.body.removeChild(link);
  };

  return (
    <div className="bg">
      <div className="container">
        <section className="home" id="home">
          <div className="home-content">
            <div className="flex">
              <div className="con">
                <h3>Hello, It's Me</h3>
                <h1>Vivek Khatana</h1>
                <h3>
                  And I'm a -<span className=" multiple-text"></span>
                </h3>
              </div>
              <div className="home-img">
                <img src="vk.jpg" alt="vivek" />
              </div>
            </div>

            <br />
            <div className="social-media">
              <a href="https://www.facebook.com/" target="blank">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="">
                <i className="bx bxl-instagram-alt"></i>
              </a>
              <a href="https://www.linkedin.com/in/vivek-kumar-khatana-97b766238/">
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
            <button className="btn" onClick={handleDownload}>
              Download cv
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
