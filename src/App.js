import React, { useState, useEffect } from "react";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import JavaScriptAppWrapper from './components/Projects/self-care-8-ball/JavaScriptAppWrapper';
import Ember from './components/Ember/Ember';
import Privacy from './components/Privacy';
import Accessibility from './components/Accessibility';

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
        {/* first thing a keyboard user hits — lets them jump the navbar */}
        <a href="#main" className="skip-link">Skip to content</a>
        <Navbar />
        <ScrollToTop />
        <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/self-care-8-ball" element={<JavaScriptAppWrapper />} />
          <Route path="/ember-2" element={<Ember />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
