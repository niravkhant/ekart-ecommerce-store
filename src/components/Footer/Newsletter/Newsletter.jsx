import React from "react";
import "./Newsletter.scss";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
const Newsletter = () => {
    return (
        <div className="newsletter-main">
            <div className="newsletter-content">
                <span className="small-text">NewsLetter</span>
                <span className="big-text">Sign Up for Latest Updates and Offers</span>
                <div className="form">
                    <input type="email" placeholder="Enter your email address" />
                    <button>Subscribe</button>
                </div>
                <div className="text">Will be used in accordance with our Privacy Policy</div>
                <div className="social-icon">
                    <div className="icons">
                        <FaFacebookF size={14} />
                    </div>
                    <div className="icons">
                        <FaTwitter size={14} />
                    </div>
                    <div className="icons">
                        <FaInstagram size={14} />
                    </div>
                    <div className="icons">
                        <FaLinkedinIn size={14} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
