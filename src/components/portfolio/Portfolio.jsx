import React from "react";
import "./Portfolio.css";
import IMG1 from "../../Assets/portfolio1.png";
import IMG2 from "../../Assets/portfolio2.jpg";
import IMG3 from "../../Assets/portfolio3.jpg";
import IMG4 from "../../Assets/portfolio4.jpg";
import IMG5 from "../../Assets/portfolio5.jpg";
import IMG6 from "../../Assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Multi-vendor E-Commerce Website",
    github: "#",
    demo: "https://etheke.com/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Real Estate Website",
    github: "#",
    demo: "https://9amrealty.com/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Investment Website",
    github: "#",
    demo: "https://ledbyreason.com/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Wordpress Agency",
    github: "#",
    demo: "https://motto.ca/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Event Website",
    github: "#",
    demo: "https://yorkpromotions.com/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Birds Shop",
    github: "#",
    demo: "https://macawbirdsfarm.com/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item_image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item_cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
