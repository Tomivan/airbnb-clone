import React from "react";
import "./footer.css";

const Footer = () => {
    return(
        <div className="footer">
            <div className="left">
                <p>2022 Airbnb, Inc.</p>
                <p>Privacy</p>
                <p>Terms</p>
                <p>Sitemap</p>
                <p>Destinations</p>
            </div>
            <div className="right">
                <div className="box">
                    <img src="" alt="" />
                    <p>English US</p>
                </div>
                <div className="box">
                    <img src="" alt="" />
                    <p>USD</p>
                </div>
                <div className="box">
                    <img src="" alt="" />
                    <p>Support & resources</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;