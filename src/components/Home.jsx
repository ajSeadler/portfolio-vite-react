// Inside the Home component

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import ProjectsSection from "./ProjectsSection";
// import Skills from "./Skills";
// import Locations from "./Locations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { FaJsSquare, FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiPostgresql, SiPython } from 'react-icons/si';

const Home = () => {
  const controls = useAnimation();

  const homeVariants = {
    hidden: { opacity: 0, y: -50, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.5, ease: "easeOut" } },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  useEffect(() => {
    // Start animation controls when component mounts
    controls.start("visible");
  }, [controls]);

  return (
    <div id="home">
      <motion.div
        className="container text-center hero2"
        variants={homeVariants}
        initial="hidden"
        animate={controls}
      >
        <div className="blob-container">
          <div className="blob"></div>
        </div>
        <motion.h1
          className="mt-0"
          style={{ color: "white", fontFamily: 'Bebas Neue', fontSize: '3rem', marginTop: '15px' }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 1, duration: 0.8, ease: "easeOut" } }}
        >
          ANTHONY SEADLER
        </motion.h1>

        <motion.div
          className="coding-divider1"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, transition: { delay: 1.5, duration: 0.8, ease: "easeOut" } }}
        >
          <FontAwesomeIcon icon={faLaptopCode} style={{ fontSize: '3rem' }} />
        </motion.div>
        <motion.h2
          className="text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 2, duration: 0.8, ease: "easeOut" } }}
        >
          Full Stack Web Developer
        </motion.h2>
      </motion.div>

      <motion.div
        className="icon-wrapper"
        variants={iconVariants}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 2, duration: 0.8, ease: "easeOut" } }}
      >
        <FaJsSquare className="icon-js" />
        <FaReact className="icon-react" />
        <FaHtml5 className="icon-html" />
        <FaCss3Alt className="icon-css" />
        <SiPostgresql className="icon-postgres" />
        <SiPython className="icon-python" />
      </motion.div>

      <div className="proj-home">
        <ProjectsSection />
      </div>
      {/* <Skills />
      <Locations /> */}
    </div>
  );
};

export default Home;
