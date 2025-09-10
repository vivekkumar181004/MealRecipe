import React from 'react';

const Footer = () => {
    return (
        <div className="footer container">
            <div className="footer-section">
                <p className="title">Foodora</p>
                <p>
                    Foodora is a place where you can satisfy both your taste buds and your soul with delicious recipes from every cuisine.
                    <br />
                    Discover, cook, and enjoy — all for free!
                </p>
                <p>&copy; 2025 | All Rights Reserved</p>
            </div>
            <div className="footer-section">
                <p className="title">Contact Us</p>
                <p>foodora@gmail.com</p>
                <p>+91 9999644446</p>
                <p>XYZ Faridabad, India</p>
            </div>
            <div className="footer-section">
                <p className="title">Socials</p>
                <p>GitHub</p>
                <p>LinkedIn</p>
                <p>Instagram</p>
            </div>
        </div>
    );
}

export default Footer;
