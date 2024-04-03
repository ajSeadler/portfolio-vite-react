import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDesktop, faServer, faTools, } from "@fortawesome/free-solid-svg-icons";
const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');
// lets change the tabs to Languages, frameworks/libraries, and tools 
  const skillsData = {
    frontend: ["JavaScript", "React.js", "HTML5", "CSS", "Bootstrap", "Material UI"],
    backend: ["Node.js", "Express.js", "Python", "Flask", "MongoDB", "SQL", "PostgreSQL"],
    tools: ["Git", "GitHub", "VS Code", "Insomnia", "Postico"],
  };

  const listItemStyle = {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#fff",
    marginBottom: "10px",
    textAlign: "center",
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div id="skills" className="container-fluid">
      <div className="container p-5 rounded">
        <div className="coding-divider">
          <FontAwesomeIcon icon={faCode} style={{ fontSize: "3rem", color: "#fff" }} />
        </div>
        <motion.h2
          className="text-center"
          style={{ color: "#fff", fontSize: "2rem", marginBottom: "1.5rem", marginTop: "0%" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          SKILLS
        </motion.h2>
        <div style={buttonContainerStyle} className="button-container">
          {Object.keys(skillsData).map((tab, index) => (
            <div key={index} style={{ position: "relative", margin: "5px", }}>
              <motion.button
                style={{
                  background: "#0d1117",
                  display:'flex',
                  border: `2px solid ${activeTab === tab ? "#fff" : "transparent"}`,
                  color: "#fff",
                  fontSize: "1rem",
                  width:'150px',
                  alignItems:'center',
                  textAlign:'center',
                  margin:'5px',
                  fontWeight: "bold",
                  padding: "15px 20px",
                  cursor: "pointer",
                  borderRadius: "8px",
                  transform: activeTab === tab ? "scale(1.05)" : "scale(1)",
                }}
                whileHover={{ scale: 1.1, backgroundColor: "#0d1117" }}
                onClick={() => handleTabClick(tab)}
                className="skills-buttons"
              >
                <FontAwesomeIcon
                  icon={tab === "frontend" ? faDesktop : tab === "backend" ? faServer : faTools}
                  style={{ marginRight: "0px", color:'#EDDEA4', fontSize:'1rem', margin:'5px' }} //hey dumy thid si ehere you problem was
                />
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </motion.button>
            </div>
          ))}
        </div>
        <motion.div className="list-group" style={{ ...listItemStyle, textAlign: "center" }}>
          {activeTab && skillsData[activeTab].map((skill, index) => (
            <motion.div
              key={index}
              style={listItemStyle}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
