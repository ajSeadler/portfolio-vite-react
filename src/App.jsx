import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import "./index.css";
import Locations from "./components/Locations";
import LoadingSpinner from "./components/LoadingSpinner"; // Import LoadingSpinner component

function App() {
  const [loading, setLoading] = useState(false);
  const [particlesLoaded, setParticlesLoaded] = useState(false);

  useEffect(() => {
    if (!particlesLoaded) {
      initParticlesEngine(async (engine) => {
        await loadFull(engine);
        setParticlesLoaded(true);
        setLoading(false); // Once particles are loaded, set loading to false
      });
    }
  }, [particlesLoaded]);

  return (
    <>
      {loading ? (
        <LoadingSpinner /> // Render loading spinner when loading is true
      ) : (
        <div className="part-back">
          {particlesLoaded && <Particles options={particlesOptions} />}
        </div>
      )}

      {!loading && (
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Locations />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
