
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";


import Nav from "react-bootstrap/Nav";

import { Link } from "react-router-dom";

function Home2() {

    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            ABOUT <span className="purple"> ME</span>
                        </h1>
                        <p className="home-about-body">

                        As a seasoned Data Engineer, my forte lies in 
                            developing, managing, and optimizing modern data platforms and infrastructure with engineering best practices.
                            <br />
                            <br />
                            I have built and sustained production-level stream and batch data ingestion/integration pipelines, and have performed extensive data transformations and modeling. 
                            <br />
                            <br />
                            I excel in crafting utilities for data teams, such as multi-system integration tools, VSCode extensions, dbt macros, etc
                            <br />
                            <br />
                            As a diligent and solution-oriented professional, I eagerly anticipate making valuable contributions to upcoming data projects.
                        
                            <br />
                            <br />
                        
                            <Nav.Link
                                as={Link}
                                to="/about"
                                className="purple"
                                >
                                Check out my skills
                                </Nav.Link>        


                            <Nav.Link
                                as={Link}
                                to="/project"
                                className="purple"
              
                            >
                             Check out my projects
                            </Nav.Link>

                            <Nav.Link
                                as={Link}
                                to="/resume"
                                className="purple"
                                >
                                Check out my resume
                                </Nav.Link>


                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img src={myImg} className="img-fluid" alt="avatar" />
                        </Tilt>
                    </Col>
                </Row>
                
            </Container>
        </Container>
    );
}
export default Home2;
