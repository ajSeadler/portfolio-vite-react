import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import ReactModal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import projectsData from "../projectsData";

const ProjectsSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const projectDescriptionStyle = {
    backdropFilter: "blur(10px)",
    color: "white",
    textAlign: "left",
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "5%",
    swipe: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
    customPaging: function (i) {
      return (
        <div className={`white-dot ${i === activeSlide ? "active" : ""}`}></div>
      );
    },
    beforeChange: (current, next) => setActiveSlide(next),
  };

  return (
    <div id="projects" className="">
      <div className="container port-title">
        <div className="coding-divider">
          <FontAwesomeIcon icon={faGithub} style={{ fontSize: "3rem" }} />
        </div>
        <h2 className="text-center" style={{ fontSize: "2.2rem" }}>
          FEATURED PROJECTS
        </h2>

        <Slider {...sliderSettings}>
          {projectsData.map((project) => (
            <div key={project.id}>
              <div className="col-md-12 mb-4 sty">
                <div
                  className="card"
                  style={{ background: "transparent", border: "none" }}
                >
                  <div className="d-flex justify-content-between align-items-center pro">
                    <motion.div>
                      <img
                        src={project.image}
                        className="card-img-top mx-auto clickable-image"
                        alt={project.name}
                        onClick={() => toggleModal(project.id)}
                        loading="lazy"
                        style={{ cursor: "pointer", maxWidth: "70%" }}
                      />
                    </motion.div>
                  </div>
                </div>
              </div>

              <ReactModal
                isOpen={showModal && activeSlide === project.id - 1}
                onRequestClose={toggleModal}
                contentLabel={`${project.name} Description Modal`}
                className="ReactModal__Content"
                overlayClassName="ReactModal__Overlay"
              >
                <div className="card-body des" style={projectDescriptionStyle}>
                  <h5 className="card-title" style={{color:'#fff'}}>
                    {project.name.map((item, index) => (
                      <span key={index}>
                        {typeof item === "string" ? (
                          item
                        ) : (
                          <item.icon
                            style={{ color: item.color, marginRight: "5px" }}
                          />
                        )}
                      </span>
                    ))}
                  </h5>

                  <p className="card-text">
                    {project.description}
                  </p>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i> GitHub Repository
                  </a>
                  {project.videoDemoLink && (
                    <a
                      href={project.videoDemoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ marginLeft: "5px" }}
                    >
                      <i className="fab fa-youtube"></i> Video Demo
                    </a>
                  )}
                  {project.websiteLink && (
                    <a
                      href={project.websiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ marginLeft: "10px" }}
                    >
                      <i className="fas fa-globe"></i> Website
                    </a>
                  )}
                  {project.liveDemoLink && (
                    <a
                      href={project.liveDemoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ marginLeft: "10px" }}
                    >
                      <i className="fas fa-globe"></i> Live Demo
                    </a>
                  )}
                </div>
                <button className="close-button" onClick={toggleModal}>
                  Close
                </button>
              </ReactModal>
            </div>
          ))}
        </Slider>
        {/* <div className="mobile-icon">
          <SwipeOutlinedIcon
            className="swipe-icon"
            style={{ fontSize: "2.5rem", color: "#b1916e" }}
          />
        </div> */}
      </div>
    </div>
  );
};

export default ProjectsSection;
