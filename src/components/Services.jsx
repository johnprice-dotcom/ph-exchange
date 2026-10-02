import React from "react";
import {
    FaBitcoin,
    FaExchangeAlt,
    FaMoneyBillWave,
} from "react-icons/fa";

import "../styles/services.css"

function Services() {
    return (
        <div className="services-container">
            <div className="our-services">
                <span>OUR SERVICES</span>
                <h1>
                    More Than Just an Exchange
                </h1>
                <p>
                    PH EXCHANGE gives you the freedom to trade,convert,
                    and manage your digital assets with ease. We support
                    a wide range of crytocurrencies and fiat currencies,
                    with seamless and reliable services.
                </p>
            </div>

            <div className="services-grid">
                <div className="services">
                    <div className="service-icon-container">
                        <FaBitcoin />
                    </div>

                    <h4>
                        Buy Crypto
                    </h4>

                    <p>
                        Purchase your favorite cryptocurrencies with ease.
                    </p>
                </div>

                <div className="services">
                    <div className="service-icon-container">
                        <FaBitcoin />
                    </div>

                    <h4>
                        Sell Crypto
                    </h4>

                    <p>
                        Convert your crypto to fiat or other currencies.
                    </p>
                </div>

                <div className="services">
                    <div className="service-icon-container">
                        <FaExchangeAlt />
                    </div>

                    <h4>
                        Crypto to Crypto
                    </h4>

                    <p>
                        Swap between different cryptocurrencies instatntly.
                    </p>
                </div>

                <div className="services">
                    <div className="service-icon-container">
                        <FaMoneyBillWave />
                    </div>

                    <h4>
                        Fiat to Crypto
                    </h4>

                    <p>
                        Fund your accounts with local currencies.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Services;