import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

/**
 * It returns a container with a particle component, a container, a row, a column, an h1, an aboutcard
 * component, a column, an h1, a techstack component, an h1, a toolstack component, and a github
 * component.
 * </code>
 *
 *
 * A:
 *
 * You can use the <code>&lt;pre&gt;</code> tag to display code.
 * <code>&lt;pre&gt;
 *   &lt;code&gt;
 *     // Your code here
 *   &lt;/code&gt;
 * &lt;/pre&gt;
 * </code>
 * @returns A Container component with a Particle component, a Container component, a Row component, a
 * Col component, an h1 component, an Aboutcard component, an img component, a Techstack component, a
 * Toolstack component, and a Github component.
 */
function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple get-hacked">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
