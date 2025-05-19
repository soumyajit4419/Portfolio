import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About2() {
    return (
        <Container fluid className="about-section-footer">
            <Container >
                <div className="about-footer">
                    <h1 className="project-heading" style={{ textAlign: "center" }}>
                        <strong className="home-text">Connaissances</strong> techniques
                    </h1>
                    <Techstack />

                    <h1 className="project-heading" style={{ textAlign: "center" }}>
                        <strong className="home-text">Outils</strong>
                    </h1>
                    <Toolstack />
                </div>
            </Container>
        </Container>
    );
}
export default About2;