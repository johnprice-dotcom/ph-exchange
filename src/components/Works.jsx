import React from "react";
import "../styles/works.css"

function Works() {
    return (
        <div className="work-container">
            <div className="work-text">
                <span>HOW IT WORKS</span>
                <h1>Get Started in 4 Simple Steps</h1>
            </div>

            <div className="work-features">
                <div className="feature">
                    <span>1</span>
                    <h4>Create Account</h4>
                    <p>Sign up in minute with
                        with your email and phone number.
                    </p>
                </div>

                <div className="feature">
                    <span>2</span>
                    <h4>Verify Identity</h4>
                    <p>Complete KYC for higher
                        limits and full access.
                    </p>
                </div>

                <div className="feature">
                    <span>3</span>
                    <h4>Fund Your Wallet</h4>
                    <p>Deposit funds via bank transfer,
                        card, or crypto.
                    </p>
                </div>

                <div className="feature">
                    <span>4</span>
                    <h4>Start Trading</h4>
                    <p>Buy, sell or exchange 
                        with ease
                    </p>
                </div>
            </div>

            <div className="simple-fast-secure">
                <p>Simple. <br />Fast. Secure.</p>
                <span className="curve-arrow">↩</span>
            </div>
        </div>
    
    )
}
export default Works;