import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import projectsData from "../projectsData";

const ProjectGrid = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll(".project-card");
      cards.forEach((card) => {
        const bounding = card.getBoundingClientRect();
        if (
          bounding.top >= 0 &&
          bounding.bottom <=
            (window.innerHeight || document.documentElement.clientHeight)
        ) {
          card.classList.add("bounce");
        } else {
          card.classList.remove("bounce");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleModal = (project) => {
    setSelectedProject(project);
    setShowModal(!showModal);
  };

  const projectDescriptionStyle = {
    backdropFilter: "blur(10px)",
    color: "white",
    textAlign: "left",
  };

  const cardStyle = {
    background: "rgba(100, 100, 100, 0.5)",
    border: "none",
    position: "relative",
    overflow: "hidden",
    borderRadius: "10px",
    width: "80%",
    margin: "auto",
    height: "auto",
    zIndex: showModal ? "0" : "1",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
  };

  const projectNameStyle = {
    position: "absolute",
    bottom: "0",
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: "1.2rem",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    zIndex: "1",
    background: "rgba(0, 0, 0, 0.7)",
    width: "100%",
    color: "white",
    padding: "10px 0",
    textAlign: "center",
  };

  const iconStyle = { fontSize: "3rem" };

  return (
    <div id="projects" className="container port2-title">
      <div className="coding-divider">
        <div style={iconStyle}>
          <FontAwesomeIcon icon={faGithub} />
        </div>
      </div>
      <h2 className="text-center" style={{ fontSize: "2.2rem" }}>
        PORTFOLIO
      </h2>

      <div className="row">
      {projectsData.map((project) => (
  <div key={project.id} className="col-md-6 mb-4">
    <div className="card project-card" style={cardStyle} onClick={() => toggleModal(project)}>
      <img
        src={project.image}
        className="card-img-top clickable-image"
        alt={project.name}
        style={imageStyle}
      />
      <div style={projectNameStyle}>
        {project.name}
      </div>
    </div>
  </div>
))}

      </div>

      {selectedProject && (
        <ReactModal
          isOpen={showModal}
          onRequestClose={() => toggleModal(null)}
          contentLabel={`${selectedProject.name} Description Modal`}
          className="ReactModal__Content"
          overlayClassName="ReactModal__Overlay"
        >
          <div className="card-body des" style={projectDescriptionStyle}>
            <h5 className="card-title">{selectedProject.name}</h5>
            <p className="card-text">{selectedProject.description}</p>
            <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} /> GitHub Repository
            </a>
            {selectedProject.videoDemoLink && (
              <a href={selectedProject.videoDemoLink} target="_blank" rel="noopener noreferrer" style={{ marginLeft: "5px" }}>
                <FontAwesomeIcon icon={faYoutube} /> Video Demo
              </a>
            )}
            {(selectedProject.websiteLink || selectedProject.liveDemoLink) && (
              <>
                <span style={{ marginLeft: "5px" }}>|</span>
                {selectedProject.websiteLink && (
                  <a href={selectedProject.websiteLink} target="_blank" rel="noopener noreferrer" style={{ marginLeft: "5px" }}>
                    <FontAwesomeIcon icon={faGlobe} /> Website
                  </a>
                )}
                {selectedProject.liveDemoLink && (
                  <a href={selectedProject.liveDemoLink} target="_blank" rel="noopener noreferrer" style={{ marginLeft: "5px" }}>
                    <FontAwesomeIcon icon={faGlobe} /> Live Demo
                  </a>
                )}
              </>
            )}
          </div>
          <button className="close-button" onClick={() => toggleModal(null)}>
            Close
          </button>
        </ReactModal>
      )}
    </div>
  );
};

export default ProjectGrid;
