

// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import logo from './logo-yellow-final.png';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ scrollToSection }) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = (sectionId) => {
        // Scroll to the section and close mobile menu
        scrollToSection(sectionId);
        setMobileMenuOpen(false);
    };

    return (
        <nav className="main-nav">
            <div className="logo">
                <img src={logo} alt="BaldMann Logo" />
                <p className="company-name">BaldMann</p>
            </div>
            <div className={`menu-link ${isMobileMenuOpen ? "mobile-menu-link" : ""}`}>
                <ul>
                    <li><Link to="/" onClick={() => handleLinkClick('hero')}>Home</Link></li>
                    <li><Link to="/" onClick={() => handleLinkClick('featured')}>Featured</Link></li>
                    <li><Link to="/" onClick={() => handleLinkClick('about')}>About Us</Link></li>
                    <li><Link to="/" onClick={() => handleLinkClick('contact')}>Contact Us</Link></li>

                </ul>
            </div>
            <div className="hamburger-menu" onClick={toggleMobileMenu} aria-label="Toggle menu">
                <GiHamburgerMenu />
            </div>
        </nav>
    );
};

export default Navbar;
