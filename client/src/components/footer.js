import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
// import { Facebook } from 'react-social-icons';
import { FiYoutube, FiTwitter, FiInstagram } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import FooterMessege from "./MessageFooter";

import "./css/footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p> BLACK LIVES MATTER</p>
        <p className="footer-subscription-heading">
          Join the Adventure newsletter to receive our best places and our
          guides{" "}
        </p>
        <p className="footer-subscription-text">
          Contact the webmaster and more questions.{" "}
        </p>
        {/* <a href="mailto:hege@example.com">hege@example.com</a> */}
        <div>
          <FooterMessege />
        </div>
      </section>

      <p className="footer-subscription-text A">Contact Us</p>
      <div className="SocialMedia">
        {/* <h3>Contact Us</h3> */}
        <Link className="social-Link" to="#">
          <FiInstagram />
        </Link>
        <Link className="social-Link" to="#">
          {" "}
          <FaFacebook />
        </Link>
        <Link className="social-Link" to="#">
          <FiYoutube />
        </Link>
        <Link className="social-Link" to="#">
          <FiTwitter />
        </Link>
      </div>
    </div>
  );
}
export default Footer;
