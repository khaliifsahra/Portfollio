import React from "react";
import "./Footar.css";
import Arrow_icon from "../../assets/Imgs/Arrow_icon.svg";
import user from "../../assets/Imgs/user.svg";
import { Facebook, Instagram, Youtube } from "lucide-react";
import pp from "../../assets/Imgs/pp.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
        
          <h1>Parham</h1>
            <img src={pp} alt="" />
          <p>
            I am a frontend developer from Somalia with 2 years of experience
            in companies like Microsoft and others.
          </p>
        </div>

        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-sub">
            <p>Subscribe</p>
             </div>
          
          <div className="footer-icons">
            <Facebook className="icon" />
            <Instagram className="icon" />
            <Youtube className="icon" />
         
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>© 2024 Parliin. All rights reserved.</p>
        </div>
        <div className="footer-links">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
