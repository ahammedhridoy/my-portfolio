import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import FTRIMG from "../../Assets/ashikHridoy.png";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        <img src={FTRIMG} alt="footer logo" />
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonial">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com/ashikhridoyy" target="_blank">
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/ashik_ahammed_hridoy/"
          target="_blank"
        >
          {" "}
          <FiInstagram />{" "}
        </a>
        <a href="https://twitter.com/AhmedHridoy0" target="_blank">
          <FaTwitter />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; ASHIK AHAMMED HRIDOY. All Rights Reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
