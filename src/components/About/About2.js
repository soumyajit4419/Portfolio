import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import Titre from "../Common/Titre";

function About2() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container fluid className="about-section-footer">
      <Container>
        <div className="about-footer">
          <h1 className="project-heading" style={{ textAlign: "center" }}>
            {isDesktop ? (
              <Titre>
                <strong className="home-text">Connaissances</strong> techniques
              </Titre>
            ) : (
                <span>
                <Titre>
                    <strong className="home-text">Connaissances</strong>
                    </Titre>
                    <Titre>
                    techniques
                </Titre>
              </span>
            )}
          </h1>
          <Techstack />

          <h1 className="project-heading" style={{ textAlign: "center" }}>
              <Titre>
                <strong className="home-text">Outils</strong>
              </Titre>
          </h1>
          <Toolstack />
        </div>
      </Container>
    </Container>
  );
}

export default About2;