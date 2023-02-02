import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/ashik-ahammed-hridoy/"
        target="_blank"
      >
        {" "}
        <BsLinkedin />{" "}
      </a>
      <a href="https://github.com/ahammedhridoy" target="_blank">
        {" "}
        <BsGithub></BsGithub>{" "}
      </a>
      <a href="https://facebook.com/ashikhridoyy" target="_blank">
        {" "}
        <FaFacebookSquare></FaFacebookSquare>{" "}
      </a>
    </div>
  );
};

export default HeaderSocials;
