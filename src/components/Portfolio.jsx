import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import projectsData from '../projectsData';
import { FaReact, FaPython, FaCss3Alt, FaJsSquare, FaHandPointer } from "react-icons/fa";
import { SiHtml5, SiPostgresql } from "react-icons/si";

const Portfolio = React.memo(() => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleShowModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setShowModal(false);
  };

  return (
    <div className="container py-4">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {projectsData.map((project) => (
          <div className="col" key={project.id}>
            <Card
              className="bg-transparent border-0 p-3"
              style={{ position: 'relative', overflow: 'hidden' }}
              onClick={() => handleShowModal(project)}
            >
              <div
                className="position-relative"
                style={{ overflow: 'hidden', cursor: 'pointer' }}
                onMouseEnter={() => setHoveredImage(project.id)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <Card.Img
                  variant="top"
                  src={project.image}
                  style={{ 
                    maxHeight: '200px', 
                    objectFit: 'cover',
                    filter: hoveredImage === project.id ? 'brightness(1.5)' : 'brightness(1)',
                    transition: 'filter 0.3s ease-in-out'
                  }}
                />
                {hoveredImage === project.id && (
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center" style={{ background: 'rgba(0, 0, 0, 0.5)' }}>
                    <FaHandPointer className="text-white" style={{ fontSize: '2rem' }} />
                  </div>
                )}
              </div>
              <Card.Body className="text-center">
                <Card.Title className="mb-3">
                  {project.name.map((item, index) => (
                    typeof item === 'string' ? (
                      <span key={index} style={{ color: '#fff' }}>{item}</span>
                    ) : (
                      <span key={index} className="me-1">
                        {item.icon === FaReact && <FaReact style={{ color: item.color }} />}
                        {item.icon === FaPython && <FaPython style={{ color: item.color }} />}
                        {item.icon === FaCss3Alt && <FaCss3Alt style={{ color: item.color }} />}
                        {item.icon === FaJsSquare && <FaJsSquare style={{ color: item.color }} />}
                        {item.icon === SiHtml5 && <SiHtml5 style={{ color: item.color }} />}
                        {item.icon === SiPostgresql && <SiPostgresql style={{ color: item.color }} />}
                      </span>
                    )
                  ))}
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      {/* Styled Bootstrap Modal */}
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        centered
        dialogClassName="custom-modal-dialog"
        contentClassName="custom-modal-content"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedProject && selectedProject.name.map((item, index) => (
              typeof item === 'string' ? (
                <span key={index}>{item}</span>
              ) : (
                <item.icon key={index} style={{ color: item.color, marginRight: '5px' }} />
              )
            ))}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{selectedProject && selectedProject.description}</p>
          <div>
            {selectedProject && selectedProject.githubLink && (
              <Button variant="primary" href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                GitHub Repository
              </Button>
            )}
            {selectedProject && selectedProject.videoDemoLink && (
              <Button variant="secondary" href={selectedProject.videoDemoLink} target="_blank" rel="noopener noreferrer" style={{margin:'5px'}}>
                Video Demo
              </Button>
            )}
            {selectedProject && selectedProject.websiteLink && (
              <Button variant="secondary" href={selectedProject.websiteLink} target="_blank" rel="noopener noreferrer" style={{margin: '5px'}}>
                Website
              </Button>
            )}
            {selectedProject && selectedProject.liveDemoLink && (
              <Button variant="secondary" href={selectedProject.liveDemoLink} target="_blank" rel="noopener noreferrer" style={{margin:'5px'}}>
                Website
              </Button>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
});

export default Portfolio;
