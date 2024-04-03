import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";


function Locations() {
  
  return ( 
    <div id="locations" className="py-5" style={{ backgroundColor: 'transparent', color: '#fff' }}>
      <div className="container text-center">
        <div className="coding-divider">
            <FontAwesomeIcon icon={faUser} size="2x" style={{ color: '#fff'}}/>
        </div>
        <h2 className="display-7 mb-4">CONTACT</h2>
        <div className="row">
          <div className="col-md-12 mb-4">
            <h2 className="h4">
              <FontAwesomeIcon icon={faEnvelope} size="1x" style={{ color: '#EDDEA4' }} /> Email
            </h2>
            <p>anthonyseadler@gmail.com</p>
          </div>
          <div className="col-md-12 mb-4">
            <h2 className="h4">
              <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" style={{ color: '#EDDEA4' }} /> Location
            </h2>
            <p>Oklahoma City, OK</p>
          </div>
          <div className="col-md-12 mb-4">
            <h2 className="h4">Connect With Me</h2>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/anthony-seadler"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ marginRight: '15px', color: '#EDDEA4' }} />
              </a>
              <a
                href="https://github.com/ajSeadler"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FontAwesomeIcon icon={faGithubSquare} size="2x" style={{ color: '#EDDEA4'}} />
              </a>
            </div>
          
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default Locations;
