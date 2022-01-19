import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills/Skills"
import Home from "./containers/Home"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "./components/ScrollToTop";

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
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Portfolio" exact component={Home} />
          <Route path="/project" component={Projects} />
          <Route path="/Experience" component={Experience} />
          <Route path="/skills" component={Skills} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
