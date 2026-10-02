import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaTelegramPlane,
    FaWhatsapp,
} from "react-icons/fa";

import logo2 from "../assets/logo2.png";
import "../styles/tempfooter.css";

function Tempfooter() {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Footer Top */}
                <div className="footer-top">

                    {/* Brand */}
                    <div className="footer-brand">
                        <img src={logo2} alt="P.H Exchange Logo" />

                        <p>
                            Trade smarter. Live better.
                        </p>

                        <p className="footer-description">
                            Fast, secure and reliable crypto exchange services
                            designed to make digital trading simple.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-links">
                        <h3>Quick Links</h3>

                        <a href="/home">Home</a>
                        <a href="/about">About Us</a>
                        <a href="/rates">Rates</a>
                        <a href="/faq">FAQs</a>
                        <a href="/contact">Contact</a>
                    </div>

                    {/* Services */}
                    <div className="footer-links">
                        <h3>Services</h3>

                        <a href="/buy">Buy Crypto</a>
                        <a href="/sell">Sell Crypto</a>
                        <a href="/crypto">Crypto to Crypto</a>
                        <a href="/fiat">Fiat to Crypto</a>
                        <a href="/wallet">Wallet</a>
                    </div>

                    {/* Support */}
                    <div className="footer-links">
                        <h3>Support</h3>

                        <a href="/help">Help Center</a>
                        <a href="/terms">Terms of Service</a>
                        <a href="/privacy">Privacy Policy</a>
                        <a href="/kyc">KYC Policy</a>
                    </div>

                    {/* Social */}
                    <div className="footer-social">
                        <h3>Follow Us</h3>

                        <div className="social-icons">
                            <a href="/facebook" aria-label="Facebook">
                                <FaFacebookF />
                            </a>

                            <a href="/twitter" aria-label="Twitter">
                                <FaTwitter />
                            </a>

                            <a href="/instagram" aria-label="Instagram">
                                <FaInstagram />
                            </a>

                            <a href="/youtube" aria-label="YouTube">
                                <FaYoutube />
                            </a>

                            <a href="/telegram" aria-label="Telegram">
                                <FaTelegramPlane />
                            </a>

                            <a href="/whatsapp" aria-label="WhatsApp">
                                <FaWhatsapp />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">

                    <p>
                        &copy; 2026 P.H EXCHANGE. All rights reserved.
                    </p>

                    <span>
                        Secure. Fast. Reliable.
                    </span>

                </div>

            </div>
        </footer>
    );
}

export default Tempfooter;
