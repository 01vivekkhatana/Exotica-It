import React, { useState } from "react";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <header className="header">
      <div className="logo">
        <img src="v.png" alt="Logo" />
      </div>
      <nav
        className={`nav-links ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}
      >
        <a href="/">Home</a>
        <a href="./About">About</a>
        <a href="./Contact">Contact</a>
      </nav>
      <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? "Close" : "Menu"}
      </button>
    </header>
  );
}

export default Header;
