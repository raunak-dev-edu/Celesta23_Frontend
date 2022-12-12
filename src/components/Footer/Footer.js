import React from "react";
import "./Footer.css";
import { Button } from "../Button/Button";
import instagramLogo from "../../assets/footer/ic_instagram.png";
import facebookLogo from "../../assets/footer/ic_facebook.png";
import linkedInLogo from "../../assets/footer/ic_linkedin.png";
import twitterLogo from "../../assets/footer/ic_twitter.png";
import youtubeLogo from "../../assets/footer/ic_youtube.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container fade-in">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <Link to="/events">Events</Link>
          </div>
          <div className="footer-link-items">
            <Link to="/sign-up">Register</Link>
          </div>
          <div className="footer-link-items">
            <Link to="/">CA Programs</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="social-icons">
            <a
              className="social-icon-link instagram"
              href="https://instagram.com/"
              target="_blank"
              aria-label="Instagram"
            >
              <img src={instagramLogo}></img>
            </a>
            <a
              className="social-icon-link facebook"
              href="https://facebook.com/"
              target="_blank"
              aria-label="Facebook"
            >
              <img src={facebookLogo}></img>
            </a>
            <a
              className="social-icon-link linkedin"
              href="https://linkedin.com/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <img src={linkedInLogo}></img>
            </a>
            <a
              className="social-icon-link twitter"
              href="https://twitter.com/"
              target="_blank"
              aria-label="Twitter"
            >
              <img src={twitterLogo}></img>
            </a>
            <a
              className="social-icon-link youtube"
              href="https://youtube.com/"
              target="_blank"
              aria-label="Youtube"
            >
              <img src={youtubeLogo}></img>
            </a>
          </div>
          <a href="" className="website-rights">
            CELESTAEMAILID@IDK.COM
          </a>
        </div>
      </section>
    </div>
  );
}

export default Footer;