import React from "react";
import FeaturedProjects from "./FeaturedProjects";
import MyGitHubWidget from "./MyGitHubWidget";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
    
      <section className="featured-projects-section">

        <FeaturedProjects />
        <MyGitHubWidget />
      </section>

      <section className="about-me-section">
        <h2 className="section-heading">About This Portfolio</h2>
        <p className="about-me-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit, dui nec maximus tempor, dui elit dictum odio, nec posuere odio nisi sit amet dui. Phasellus sit amet fermentum ex.
        </p>
        <p className="about-me-text">
          Fusce auctor quam nec tortor malesuada, vel pellentesque justo tempus. Quisque interdum arcu nec mauris bibendum, sit amet molestie felis euismod. Nulla vitae dictum odio.
        </p>
      </section>

      <section className="contact-section">
        <h2 className="section-heading">Contact Me</h2>
        <p className="contact-text">
          Let's connect and discuss potential collaborations. Feel free to reach out to me via email at example@example.com.
        </p>
      </section>

      {/* Add more sections as needed */}
    </div>
  );
};

export default Portfolio;
