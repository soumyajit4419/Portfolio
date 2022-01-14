import React from "react";
import About from "../components/About/About"
import Experience from "../components/Experience/Experience"
import Projects from "../components/Projects/Projects"
import Skills from "../components/Skills/Skills"

function Home() {
  return (
    <section>
     <About />
     <Experience />
     <Projects />
     <Skills />
    </section>
  );
}

export default Home;
