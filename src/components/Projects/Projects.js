import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sco from "../../Assets/Projects/Self checkout-amico.svg";
import buyback from "../../Assets/Projects/buyback.svg";
import omnibooking from "../../Assets/Projects/omnibooking.svg";
import aristi from "../../Assets/Projects/aristi.svg";
import creditNote from "../../Assets/Projects/creditNote.svg";
import appSheet from "../../Assets/Projects/appSheet.svg";
import god from "../../Assets/Projects/god.svg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently..
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sco}
              title="Self Check Out - V2"
              platform="Angular"
              description="This (Self Check Out) SCO_V2 is an application which is integrated with the current ERP & POS (Openbravo) system of the client. As the existing Openbravo core POS feature of the screen is not able to customize due to ERP product limitation, this requirement was came from client to migrate it from Openbravo base to Angular base as an independent application, but, however we have developed and made it to work for them with the new UI in angular environment and also integrated with the same ERP system as well."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={buyback}
              title="Buyback"
              platform="React"
              description="This buyback application integrated with the current ERP system(Openbravo). This application was developed in React library to handle the buyback business process which is basically to handle the Store purchases of old/scrap/non used items from the end user which they bought earlier from the store as the Decathlon business will be used it for the recycling purpose and other use case purposes. Also we handled ON & OFF lines business scenarios."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={omnibooking}
              title="OMNIBooking"
              platform="Angular"
              description="This project is to handle the adaptability of the webpage content along with the design in any form of screen size. This was achieved by using the Media Query and CSS tools primarily and other supportive technologies."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aristi}
              title="Aristi"
              platform="React"
              description="Aristi Web is an online platform implemented by Decathlon stores to manage maintenance contracts with external service providers. The platform simplifies the process of assigning specific maintenance tasks (e.g., equipment repairs, routine checks) to different contractors based on their expertise. Contractors also have secure access to the website with varying levels of functionality depending on their role (e.g., technicians can view assigned tasks and submit reports, while supervisors can manage schedules and track progress)."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sco}
              title="Self Check Out - V3"
              platform="React"
              description="Since, SCO (Self Check out) is used by the retail customer, there was a requirement to change the UI from SCO_V2 to SCO_V3 where we have modified and implemented the UI of the SCO application in Reactjs platform and made it to support for the existing functionality of the SCO-V2."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={creditNote}
              title="Credit Note"
              platform="React"
              description="The Credit Note is a standalone application which is linked with their current ERP system (Openbravo) where we implemented the retail customers' return process in both ON & OFF lines business scenarios."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={appSheet}
              title="Cost Benchmarking Tool"
              platform="App Sheet"
              description="The Cost Benchmarking Tool is a project developed using AppSheet to transform a static database into an interactive and user-friendly application. The tool simplifies data management and enhances efficiency by providing a secure interface to display and manage cost benchmarking data with role-based access. Custom schedulers were implemented using AppSheet’s Bots feature and App Script to automate repetitive tasks, such as sending reminders, updates, and approvals via email.This tool significantly improved workflow automation and operational efficiency."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={god}
              title="Guardians of Dreams (GOD)"
              platform="Vue-3"
              description="In the Guardians of Dreams (GOD) project, I am working as a technical lead to develop a mobile app that integrates with ERPNext to streamline initiative tracking and approvals for this NGO. The app facilitates a comprehensive management system for initiatives proposed by Executive Members (EMs) on behalf of Child Care Institutions (CCIs), covering both cost and non-cost elements. EMs can raise initiatives, which undergo a two-stage approval process—estimation and expense approvals—by Guardians of Dreams before funds are disbursed. Approved funds are transferred to the CCI accounts, enabling them to pay vendors directly. Additionally, the app allows for the uploading of invoices and images as proof of expenses, leading to final reconciliation based on the approved and actual amounts spent. This initiative aims to bring efficiency, accountability, and transparency to the process, ensuring that resources are utilized effectively for the benefit of CCIs."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
