import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import driver from "../../Assets/Projects/driver.png";
import attendance from "../../Assets/Projects/attendance.png";
import disaster from "../../Assets/Projects/disaster.png";
import valo from "../../Assets/Projects/valo.png";
import crime from "../../Assets/Projects/crime.png";
import irrigation from "../../Assets/Projects/irrigation.png";

function Projects() {
	return (
		<Container fluid className="project-section">
			<Particle />
			<Container>
				<h1 className="project-heading">
					My Recent <strong className="purple">Works </strong>
				</h1>
				<p style={{ color: "white" }}>
					Here are a few projects I've worked on recently.
				</p>
				<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
					{/* Improved Disaster Response */}
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={disaster}
							isBlog={false}
							title="Improved Disaster Response"
							description="A cloud based webapp which is used to help people stuck in natural calamities. It uses geolocation to track users location and alert the nearest help and resource providers with all the necessary information."
							ghLink="https://github.com/Zephyrus02/Disaster-Support"
						/>
					</Col>

					{/* Driver Drowsiness Detection System */}
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={driver}
							isBlog={false}
							title="Driver Drowsiness Detection System"
							description="An alerting system in cars to detect drowsiness of the driver using OpenCV and Dlib library. The system uses the live feed from the camera mounted on the dashboard of the car to detect the facial landmarks of the driver and then predict the drowsiness of the driver. The system alerts the driver with a sound alarm if the driver is found to be drowsy."
							ghLink="https://github.com/Zephyrus02/Drowsiness-Detection-using-OpenCV"
						/>
					</Col>

					{/* Smart attendance monitoring */}
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={attendance}
							isBlog={false}
							title="Smart attendance monitoring"
							description="An autonomous attendance marking system based on fingerprint recognition and geolocation. The system uses the fingerprint of the student to mark the attendance and also monitors the students location while marking the attendance."
							ghLink="https://github.com/Zephyrus02/IOT-Project"
						/>
					</Col>

					{/* Leaf Disease */}
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={leaf}
							isBlog={false}
							title="Potato Leaf Disease Classifier"
							description="Used the potaot disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN 3 classes of leaf disease state. The model was successfully able to detect diseased and healthy leaves. This was a collaboration project and we were able to achieve an accuracy of 89% by using developed pretrained model."
							ghLink="https://github.com/ParthDedhia02/Leaf-Disease-Detection"
						/>
					</Col>

					{/* ValoSpike */}
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={valo}
							isBlog={false}
							title="ValoSpike"
							description="A valorant agent profile website made for fun with main focus on UI/UX. The website showcases all valorant agents with their agent category, agent description, utilities, utility description and their signature voicelines. This was a collaboration project and we were able to achieve a very attractive UI/UX design."
							ghLink="https://github.com/SujayGh0sh/valorant-agents"
							demoLink="https://valospike.vercel.app/"
						/>
					</Col>

					{/* Crime Detection */}
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={crime}
							isBlog={false}
							title="Face Recognition and Emotion Detection"
							description="An anomaly detection system which uses the live feed from the camera to detect the real-time occurances of criminal activity. The system uses the OpenCV and Keras library to detect the criminal activity. The system alerts the respected authorities with a proper analysis of the occurances of the crime."
							ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
							// demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
						/>
					</Col>

					{/* Smart Irrigation */}
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={irrigation}
							isBlog={false}
							title="Energy Efficient Smart Irrigation System"
							description="An IoT based smart irrigation system which uses parameters such as soil moisture, humidity and environment temperature and also take crop type as user input then accordingly water the plants as predicted by the AI model. The system uses the decision tree model which takes in all parameters as input and provides a decision on watering the field. The system also uses the solar panel to charge the battery of the system and make it energy efficient.This was a collaborative project and the decision tree model was trained using a self generated dataset and it was able to achieve an accuracy of 98%."
							ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
							// demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
