import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>MERN Stack Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list_icon" />
              <p>Full Mern Stack Web Application</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Front-End Development</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>PSD to Mern Stack</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>XD to Mern Stack</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Figma to Mern Stack</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Ai to Mern Stack</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>JPG / PNG to Mern Stack</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Bug Fix</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Responsive Web Design</p>
            </li>
            
          </ul>
        </article>
        {/* end of UI/UX */}

        <article className="service">
          <div className="service_head">
            <h3>Wordpress Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list_icon" />
              <p>Professional WordPress Design</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Full website creation from scratch.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Theme Customization</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Mobile Responsive Design</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Website Security</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Live Chat Integration</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Social Media Integrations</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>SEO Optimized Website</p>
            </li>

          </ul>
        </article>
        {/* end of web */}

        <article className="service">
          <div className="service_head">
            <h3>Ethical Hacking</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list_icon" />
              <p>Web Application Testing</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Kali Linux</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Website Security</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Penetration Testing</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Social Media Security</p>
            </li>
          </ul>
        </article>
        {/* end of Hacking */}
      </div>
    </section>
  );
};

export default Services;
