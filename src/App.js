import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Home";
import SectionOne from "./components/SectionOne/Home2";

import Home from "./components/Home/Home";
import About from "./components/About/About";
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
import SectionTwo from "./SectionTwo/SectionTwo";
import SectionThree from "./components/SectionThree/SectionThree";
import Testimonial from "./components/Testimonial/Testimonial";


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

          <Route path="/" element={<Hero />} />

        </Routes>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <Testimonial />

        <Footer />

      </div>
    </Router>
  );
}

export default App;
