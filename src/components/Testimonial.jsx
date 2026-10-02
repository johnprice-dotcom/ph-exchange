import React from "react";

import portrait1 from "../assets/portrait-1.jpg"
import portrait2 from "../assets/portrait-2.jpg"
import portrait3 from "../assets/portrait-3.jpg"
import "../styles/testimonial.css"

function Testimonial() {
    return (
        <div className="testimonial-container">
            <span>WHAT OUR USERS SAY</span>
            <h1>Trusted by Our Community</h1>

            <div className="testimonies-container">
                <div className="testimonies-box">
                    <img src={portrait1} alt="" />

                    <div className="testimonies-text">
                        <h4>Emeka Okafor</h4>
                        <span>⭐⭐⭐⭐⭐</span>
                        <p>
                            "P.H EXCHANGE is fast, reliable and super easy to use. I've traded
                            multiple times and never had any issues. Highly Recommended!"
                        </p>
                    </div>
                </div>

                <div className="testimonies-box">
                    <img src={portrait2} alt="" />

                    <div className="testimonies-text">
                        <h4>Aisha Bello</h4>
                        <span>⭐⭐⭐⭐⭐</span>
                        <p>
                            "Great rates and excellent customer service.
                            The platform is simple and works perfectly on my phone"
                        </p>
                    </div>
                </div>

                <div className="testimonies-box">
                    <img src={portrait3} alt="" />

                    <div className="testimonies-text">
                        <h4>Tunde Adeyemi</h4>
                        <span>⭐⭐⭐⭐⭐</span>
                        <p>
                            "I love the security and speed. PH EXCHANGE makes crypto trading stress-free.
                            Keep up the good work!""
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial;