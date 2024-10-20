import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import MemorialPage from "./components/About/Memorial";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import TestimonioCientificos from "./components/About/Cientificos/Cientificos";
import TestimonioSalud from "./components/About/Salud/PersonalSalud";
import TestimonioVoluntarios from "./components/About/Voluntarios/Voluntarios";
import TestimonioPacientes from "./components/About/Pacientes/Pacientes";
import TestimonioPlaneta from "./components/About/Planeta/Planeta";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/memorial" element={<MemorialPage />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />

          <Route path="/memorial/cientificos" element={<TestimonioCientificos />} />
          <Route path="/memorial/salud" element={<TestimonioSalud />} />
          <Route path="/memorial/voluntarios" element={<TestimonioVoluntarios />} />
          <Route path="/memorial/pacientes" element={<TestimonioPacientes />} />
          <Route path="/memorial/planeta" element={<TestimonioPlaneta />} />


        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
