import React from "react";
import "./About.css";
import ME from "../../Assets/pro.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={ME} alt="Me" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon"></FaAward>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon"></FiUsers>
              <h5>Clients</h5>
              <small>30+ Worldwide</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon"></VscFolderLibrary>
              <h5>Projects</h5>
              <small>50+ Completed</small>
            </article>
          </div>

          <p>
            Hello, This is Ashik Ahammed Hridoy. I am a MERN Stack Developer &
            Ethical Hacker. I have 3 years of experience. I study computer
            science and engineering. I am very passionate about what I do. I
            offer Front-End & Full Stack Mern Web Applications development using
            HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, React JS, Node JS,
            Express JS, MongoDB, Firebase, and JWT. I also provide fully
            responsive WordPress website design & development. I am also an
            expert in Ethical Hacking. I offer web application penetration
            testing and WordPress website security. Thanks for your valuable
            time
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
