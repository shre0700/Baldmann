import React, { useState } from "react";
import './Navbar.css';
import logo from './logo-yellow-final.png';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <nav className="main-nav">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                    <p className="company-name">BaldMann</p>
                </div>
                <div className={`menu-link ${isMobileMenuOpen ? "mobile-menu-link" : ""}`}>
                    <ul>
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#featured">Featured</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </div>
                <div className="hamburger-menu" onClick={toggleMobileMenu}>
                    <GiHamburgerMenu />
                </div>
            </nav>
        </>
    );
};

export default Navbar;
