import React, { useState } from "react";
import "./Header.style.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">Jalol</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="#">Home</a>
        <a href="#about">About Me</a>
        <a href="#service">My Experience</a>
        <a href="#contact">Services</a>
        <a href="#contact">Portfolio</a>
        <a href="#contact">Testimonials</a>
        <a href="#contact">Contact Me</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
