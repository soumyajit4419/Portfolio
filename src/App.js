import React, { useState, useEffect, Suspense , json  } from "react";

const preLoader = React.lazy(()=>import ("../src/components/Pre") );
const Navbar = React.lazy( () =>import("./components/Navbar"));
const  Home = React.lazy( ()=> import("./components/Home/Home"));
const  About= React.lazy( ()=> import("./components/About/About"));
const  Projects = React.lazy( ()=> import("./components/Projects/Projects"));
const Footer = React.lazy( ()=> import("./components/Footer"));
const  Resume = React.lazy( ()=> import("./components/Resume/ResumeNew"));
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
      <Suspense fallback={<div>Loading...</div>}>
      <preLoader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects /> } />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        
        <Footer />
      </div>
      </Suspense>
    </Router>
  );
}

export default App;
