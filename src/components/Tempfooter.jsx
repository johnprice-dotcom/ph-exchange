// import {
//     FaFacebookF,
//     FaTwitter,
//     FaInstagram,
//     FaYoutube,
//     FaTelegramPlane,
//     FaWhatsapp,
// } from "react-icons/fa";
// import logo2 from "../assets/logo2.png"
// import "../styles/tempfooter.css"

// function Tempfooter() {
//     return (
//         <div className="footer-container">
//             <div className="footer-top">
//                 <div className="footer-logo">
//                 <img src={logo2} alt="logo" />
//                 <p>Trade Smarter. Live Better</p>
//             </div>

//             <div className="footer-column">
//                 <h3>Quick Links</h3>
//                 <a href="#">Home</a>
//                 <a href="#">About Us</a>
//                 <a href="#">Rates</a>
//                 <a href="#">FAQs</a>
//                 <a href="#">Contact</a>
//             </div>

//             <div className="footer-column">
//                 <h3>Services</h3>
//                 <a href="#">Buy Crypto</a>
//                 <a href="#">Sell Crypto</a>
//                 <a href="#">Crypto to Crypto</a>
//                 <a href="#">Fiat to Crypto</a>
//                 <a href="#">Wallet</a>
//             </div>

//             <div className="footer-column">
//                 <h3>Support</h3>
//                 <a href="#">Help Center</a>
//                 <a href="#">Terms of Service</a>
//                 <a href="#">Privacy Policy</a>
//                 <a href="#">KYC Policy</a>
//             </div>

//             <div className="footer-social">
//                 <h3>Follow Us</h3>
//                 <div className="social-icons">
//                     <FaFacebookF />
//                     <FaTwitter />
//                     <FaInstagram />
//                     <FaYoutube />
//                     <FaTelegramPlane />
//                     <FaWhatsapp />
//                 </div>
//             </div>

//             </div>
            

//             <div className="footer-bottom">
//                 <p>&copy; 2026 P.H EXCHANGE. All rights reserved.</p>
//                 <span>Secure. Fast. Reliable</span>
//             </div>
//         </div>


//     )
// }

// export default Tempfooter;

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

                        <a href="#">Home</a>
                        <a href="#">About Us</a>
                        <a href="#">Rates</a>
                        <a href="#">FAQs</a>
                        <a href="#">Contact</a>
                    </div>

                    {/* Services */}
                    <div className="footer-links">
                        <h3>Services</h3>

                        <a href="#">Buy Crypto</a>
                        <a href="#">Sell Crypto</a>
                        <a href="#">Crypto to Crypto</a>
                        <a href="#">Fiat to Crypto</a>
                        <a href="#">Wallet</a>
                    </div>

                    {/* Support */}
                    <div className="footer-links">
                        <h3>Support</h3>

                        <a href="#">Help Center</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">KYC Policy</a>
                    </div>

                    {/* Social */}
                    <div className="footer-social">
                        <h3>Follow Us</h3>

                        <div className="social-icons">
                            <a href="#" aria-label="Facebook">
                                <FaFacebookF />
                            </a>

                            <a href="#" aria-label="Twitter">
                                <FaTwitter />
                            </a>

                            <a href="#" aria-label="Instagram">
                                <FaInstagram />
                            </a>

                            <a href="#" aria-label="YouTube">
                                <FaYoutube />
                            </a>

                            <a href="#" aria-label="Telegram">
                                <FaTelegramPlane />
                            </a>

                            <a href="#" aria-label="WhatsApp">
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
