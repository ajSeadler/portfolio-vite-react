import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills"
import ProjectsSection from "./components/ProjectsSection";
import "./index.css"
import Locations from "./components/Locations";

function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (init) {
      return;
    }

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, [init]);
  return (
    <>
    <div className="part-back">
            {init && <Particles options={particlesOptions} />}
          </div>
          <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/portfolio" element={<ProjectsSection />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Locations />} />
      </Routes>
    </>
  );
}

export default App;
