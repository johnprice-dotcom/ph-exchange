import React, { useState }from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.png";
import '../styles/header.css'

function Header() {


 const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="header-container">
            <img
                className="header-logo"
                src={logo}
                alt="logo"
            />

            <nav className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
                <a href="" class>Home</a>
                <a href="">About</a>
                <a href="">Rates</a>
                <a href="">FAQs</a>
                <a href="">Contacts</a>

                <div className="mobile-buttons">
                    <button className="button-1">Log In</button>
                    <button className="button-2">Get Started</button>
                </div>
            </nav>



            <div className="mobile-hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
                >
                 {menuOpen ? (<FiX size={28} />) : (<FiMenu size={28} />)} 
                
            </div>

            <div className="button-container">
                <button className="button-1">Log In</button>
                <button className="button-2">Get Started</button>
            </div>
        </div>
    )
}

export default Header;