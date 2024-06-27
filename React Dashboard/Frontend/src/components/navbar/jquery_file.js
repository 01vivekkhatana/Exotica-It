import { useEffect } from "react";
import $ from "jquery";

function Jquery_file() {
  useEffect(() => {
    // Sticky Navbar
    $(window).scroll(() => {
      if ($(window).scrollTop() > 45) {
        $(".navbar").addClass("sticky-top shadow-sm");
      } else {
        $(".navbar").removeClass("sticky-top shadow-sm");
      }
    });
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  return null; // This component doesn't render any JSX
}

export default Jquery_file;
