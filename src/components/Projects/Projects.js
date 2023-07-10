import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import VidCards from "./VidCards";
import MyProjCards from "./MyProjCards";
import Particle from "../Particle";

import pdfSeedFund from "../../Assets/Projects/SeedFundingMemo.pdf";
import img_RL from "../../Assets/Projects/RL.png";
import img_shoulderModel from "../../Assets/Projects/shoulder_model.png";
import img_VR from "../../Assets/Projects/vr.jpg";
//import img_RL from "../../Assets/Projects/giphy.gif";
import img_vscode_extension from "../../Assets/Projects/dbt-databricks-logos.png";
import img_data_ingestion from "../../Assets/Projects/data_ingestion.jpg";
import img_data_integration from "../../Assets/Projects/data_integrations.jpg";


//import emotion from "../../Assets/Projects/emotion.jpeg";
//import editor from "../../Assets/Projects/codeEditor.png";
//import chatify from "../../Assets/Projects/chatify.png";
//import suicide from "../../Assets/Projects/suicide.png";
////import bitsOfCode from "../../Assets/Projects/blog.png";
import MyYoutube from "./Youtube";
import MyProjCard from "./MyProjCard";



function Projects() {
    return (
        <section>
            {/*<MyYoutube />*/}
            <Container fluid className="project-section">
                <Particle />

                <Container>

                    <h1 className="project-heading">
                        My <strong className="purple">Data Engineering </strong> Projects
                    </h1>

                    
                    {/* <p style={{ color: "white" }}>
                       Here are a few projects I've worked on recently.
                    </p> */}

                    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                            <MyProjCard
                                imgPath={img_data_integration}

                                footor_skillset="Data Infrastructure, Ingestion, Modelling, and Integration"
                                title="Data Infrastructure, Ingestion, Modelling, and Integration"
                                description="
                                
                                An end-to-end system for data infrastructure, ingestion, modelling, and integration. 
                       
                                I maintain of the data infrastructure; I fully own the design and implementation the ingestion and integration services(i.e. blue boxes); 
                                and owns over 75% (by both commits and lines counts) of the data modelling using dbt (i.e. green boxes).

                                The system is highly scalable and has been in production for over 1 year with near-zero downtime.

                                "
                                textBtn="View the System Architecture in Full Size"
                                link={img_data_integration}
                            />
                        </Col>

                       <Col md={4} className="project-card">
                            <MyProjCard
                                imgPath={img_data_ingestion}

                                footor_skillset="AWS (Lambda, ECS Kinesis, S3, Glue, SNS, SQS, ECR, DynamoDB, etc.), Databricks, Terraform, CI/CD, Python, SQL"
                                title="Data Ingestion Example: Multi-region Sensitive Backend Data Stream/Batch Ingestion"
                                description="This is a detailed implementation of the backend data ingestion pipeline. 
                                It is a system designed to sanitize sensitive data within the source regions, 
                                and ingest globally into Databricks.
                                
                                Both real-time stream and backfilling batch ingestion are supported.
                                It fully incorporates both CI/CD and IaC principles."
                                textBtn="View Architect in Full Size"
                                link={img_data_ingestion}
                            />
                        </Col>

                        <Col md={4} className="project-card">
                            <MyProjCard
                                imgPath={img_vscode_extension}

                                footor_skillset="dbt, Databricks, TypeScript"
                                title="A VSCode extension: dbt Databricks Power User"
                                description="An open-sourced extension that makes VSCode work smoothly with dbt and Databricks.
                                It serves as a full replacement of dbt Cloud Development in a local environment with additional
                                features, and have 2000+ pubic downloads since release."
                                textBtn="View My VsCode Extension"
                                link="https://marketplace.visualstudio.com/items?itemName=mobiusww.vscode-dbt-databricks-power-user"
                            />
                        </Col>
 

                    </Row>





                    <h1 className="project-heading">
                        My <strong className="purple">Other </strong>Projects
                    </h1>
                    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

                        <Col md={4} className="project-card">

                            <VidCards
                                vidId="pwyVY6_ytLA"
                                footor_skillset="AWS (DynamoDB, Lambda, Cognito, GameLift, Polly), C#, Unity, JavaScript"
                                title="Run & Attack"
                                description="An online player-vs-player mobile game developed using Unity and deployed on AWS, which combines GPS-tracked running activity with board game, aiming to promote a healthier lifestyle through fun gaming"

                                link="https://youtu.be/pwyVY6_ytLA"
                            />

                        </Col>
                        <Col md={4} className="project-card">

                            <VidCards
                                vidId="l8hfi-9soHY"
                                footor_skillset="Machine learning, Computer vision, Python, Matlab"
                                title="3D Marker-less Motion Capturing System"
                                description="A marker-less multi-camera motion capturing system developed and validated using Python and Matlab, as an alternative to the conventional expensive and unportable system, making it perfect for many applications in clinics, sports, ergonomics, etc."

                                link="https://youtu.be/pwyVY6_ytLA"
                            />

                        </Col>
                        <Col md={4} className="project-card">
                            <MyProjCard
                                imgPath={img_shoulderModel}

                                footor_skillset="C++, Matlab"
                                title="Musculoskeletal Modelling Research"
                                description="I developed and used a series of computational musculoskeletal models to accurately predict internal muscle and joint force, with multiple research publications on this topic"
                                textBtn="View My Shoulder Model"
                                link="https://simtk.org/projects/wu-shoulder"
                            />
                        </Col>
                        <Col md={4} className="project-card">
                            <MyProjCard
                                imgPath={img_RL}

                                footor_skillset="Machine learning, Reinforcement learning, Python, C#, Unity, "
                                title="Applying Reinforcement Learning Technique to Biomechanical Modelling"
                                description="An alternative reinforcement-learning-based technique to conventional modelling approaches to predict joint moments based on either measured kinematics or surface electromyography"
                                textBtn="View Publication"
                                link="https://mobl.wordpress.ncsu.edu/files/2021/02/bio_143_04_044502.pdf"
                            />
                        </Col>



                        <Col md={4} className="project-card">

                            <VidCards
                                vidId="1ayHAtrIhRc"
                                footor_skillset="Matlab, Robotics, Sensors"
                                title="Human-Machine Interaction Research"
                                description="I conducted multiple research that involved human-machine interaction and wearable robotics. For example, 1) developed an optimised robotic prosthesis controller; 2) investigated the influence of the exoskeleton to human body."

                                link="https://youtu.be/pwyVY6_ytLA"
                            />

                        </Col>

                        <Col md={4} className="project-card">
                            <MyProjCard
                                imgPath={img_VR}

                                footor_skillset="Matlab, C#, Unity, Sensors, VR"
                                title="Real-Time Virtual Reality System for Self-Directed Upper Limb Rehabilitation"
                                description="I built a computational model for real-time limb dynamic simulation using Matlab and C#,  developed VR environment in Unity, and designed & prototyped input measurement hardware kit (e.g. inertial measurement unit, electromyography, wireless data acquisition system). I proposed and wrote all the technical and budget sections, and secured a $32,000 seed fund for the project
"
                                textBtn="View Seed Funding Memo"
                                link={pdfSeedFund}
                            />
                        </Col>

                    </Row>
                </Container>
            </Container>
        </section>

    );

}

export default Projects;
