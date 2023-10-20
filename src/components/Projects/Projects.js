import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import elementselectors from "../../Assets/Projects/elementselectors.png";
import testgen from "../../Assets/Projects/testgen.png";

function Projects() {
	return (
		<Container fluid className="project-section">
			<Particle />
			<Container>
				<h1 className="project-heading">
					My <strong className="purple">Work </strong>
				</h1>
				<p style={{ color: "white" }}>
					Here are a few projects I've worked on.
				</p>
				<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={elementselectors}
							isBlog={false}
							title="Element Selectors"
							description="Chrome Extension to Generate Xpath, CSS and Playwright Locators"
							ghLink="https://github.com/gurvinder-dhillon/element-selectors-chrome-extension"
							demoLink="https://chrome.google.com/webstore/detail/element-selectors/fjgebdmbjiahfjcjaemkmifpdjaldfcc"
						/>
					</Col>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={testgen}
							isBlog={false}
							title="Test Gen"
							description="Test Gen generates test cases that are more effective than manually generated tests"
							ghLink="https://github.com/gurvinder-dhillon/testcase-generator"
							demoLink="https://testgen.dhillon.guru/"
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
