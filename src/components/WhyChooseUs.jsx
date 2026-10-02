import React from "react";

import {
    FaUser,
    FaShieldAlt,
    FaExchangeAlt,
    FaHeadset,
} from "react-icons/fa";
import Laptop from "../assets/laptop.png"
import "../styles/why-choose.css"

function WhyChooseUs() {
    return (
        <div className="why-choose-us-container">
            <div className="image-container">
                <img src={Laptop} alt="laptop" />

                <div className="image-list-container">
                    <div className="list-container">
                        <FaUser />
                        <div className="list-text">
                            <h4>500k+</h4>
                            <p>Happy Users</p>
                        </div>
                    </div>

                    <div className="list-container">
                        <FaShieldAlt />
                        <div className="list-text">
                            <h4>100+</h4>
                            <p>Cryptocurrencies</p>
                        </div>
                    </div>

                    <div className="list-container">
                        <FaHeadset />
                        <div className="list-text">
                            <h4>24/7</h4>
                            <p>Customer Support</p>
                        </div>
                    </div>

                    <div className="list-container">
                        <FaExchangeAlt />
                        <div className="list-text">
                            <h4>99.9%</h4>
                            <p>Uptime</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="why-choose-container">
                <span>WHY CHOOSE US</span>
                <h1>Trusted By Millions Around the World</h1>
                <p>
                    We proritize your security, comfort and satisfaction, With a proven
                    track record and a growing global community. P.H Exchange is a reliable
                    partner in the crypto space.
                </p>
                <button>Join Us Today</button>
            </div>
        </div>
    )
}

export default WhyChooseUs;