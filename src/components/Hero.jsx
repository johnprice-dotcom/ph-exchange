import heroMobile from "../assets/hero-mobile.png"
import '../styles/hero.css'

import {
    FaBitcoin,
    FaEthereum,
    FaGlobe
} from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";
import { SiTether } from "react-icons/si";
import { TbCurrencyNaira } from "react-icons/tb";
import { FiZap, FiShield, FiRepeat, FiHeadphones } from "react-icons/fi";

function Hero() {
    return (
        <section className="hero-container">
            <div className="hero-content">
                <div className="hero-text">
                    <p className="hero-small-text">
                        FAST / SECURE / RELIABLE
                    </p>
                    <h1>
                        P.H EXCHANGE
                        <span>Your Trusted Digital Exchange Platform</span>
                    </h1>
                    <p className="hero-description">
                        Buy and sell cryptocurrency, exchange between currencies,
                        and enjoy fast, secure transactions — all in one place.
                    </p>

                    <div className="hero-buttons">
                        <button className="hero-btn-primary">Get Started</button>
                        <button className="hero-btn-secondary">Learn More</button>
                    </div>
                </div>

                <div className="hero-image">
                    <div className="crypto-icon bitcoin">
                        <FaBitcoin />
                    </div>

                    <div className="crypto-icon ethereum">
                        <FaEthereum />
                    </div>

                    <div className="crypto-icon usdt">
                        <SiTether />
                    </div>

                    <img
                        src={heroMobile}
                        alt="P.H Exchange mobile app"
                        className="mobile-image"
                    />

                    <div className="crypto-icon dollar">
                        <FaDollarSign />
                    </div>

                    <div className="crypto-icon naira">
                        <TbCurrencyNaira />
                    </div>

                    <div className="crypto-icon globe">
                        <FaGlobe />
                    </div>
                </div>
            </div>

            <div className="hero-features">

                <div className="feature">
                    <div className="icon-container">
                        <FiZap />
                    </div>

                    <h4>Fast Transactions</h4>
                    <p>
                        Get your trades done quickly,
                        anytime, anywhere.
                    </p>
                </div>

                <div className="feature">
                    <div className="icon-container">
                        <FiShield />
                    </div>

                    <h4>
                        Top-Notch Security
                    </h4>
                    <p>
                        Your funds and data are
                        alaways protected.
                    </p>
                </div>

                <div className="feature">
                    <div className="icon-container">
                        <FiRepeat />
                    </div>

                    <h4> Competitive Rates</h4>
                    <p>
                        Enjoy the best rates
                        in the market.
                    </p>
                </div>

                <div className="feature">
                    <div className="icon-container">
                        <FiHeadphones />
                    </div>

                    <h4> 24/7 Support</h4>
                    <p>
                        We're here for you,
                        round the clock.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Hero;