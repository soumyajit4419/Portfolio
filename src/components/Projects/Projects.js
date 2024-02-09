import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import epitech from "../../Assets/Projects/epitech.png";
import area from "../../Assets/Projects/area.png";
import gasPrices from "../../Assets/Projects/gasPrices.png";
import gtc from "../../Assets/Projects/gtc.png";
import nozzleConfig from "../../Assets/Projects/kuhnNozzle.webp";
import cgr from "../../Assets/Projects/cgr.png";
import kitrek from "../../Assets/Projects/kitrek.png";
import bombitek from "../../Assets/Projects/bombitek.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My main <strong className="purple">projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gtc}
              isBlog={false}
              title="Grand Theft Covid"
              description="This is a Role-Play game developed in 2021 during my first year at Epitech. You have been recently promoted to sheriff of Los Hopkins. The Covid-19 has taken over the world and it makes people violent. You need to meet the Dr. Warren which has found the only working vaccine against Covid-19. Take the vaccine and protect and travel safely to the hospital to deliver it !"
              ghLink="https://github.com/titi0267/Grand-Theft-Covid"
              demoLink="https://www.youtube.com/watch?v=yY1vTll0O1w"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={area}
              isBlog={false}
              title="Area"
              description="AREA stands for Action REAction. AREA is a software suite that have the objective to create links between Actions and Reactions from different services with the use of triggers. Services includes Spotify, Google calendar, Discord, Google drive, Github, Gmail, Weather Api, Youtube."
              ghLink="https://github.com/titi0267/Area"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bombitek}
              isBlog={false}
              title="Bombitek"
              description="This CPP project is the final project of my second year at Epitech. Compete against 3 bots or against up to 3 of your freinds, Plant bombs to make your way to the other players on the map. Collect powers like larger bombs, speed powers or even stun powers and be the last one to survive to win the game, but be carefull not to commit suicide with your own bomb !"
              ghLink="https://github.com/titi0267/Bombitek"
              demoLink="https://www.youtube.com/watch?v=9O49n-4K7Bk"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gasPrices}
              title="Gas-Prices"
              description="A mobile app in React-Native linked to an Api that I've also created. You will be able to enter your itinerary in the app and you will see all the gas stations around your path along with their prices. Go the the cheapest one to save some money !"
              ghLink="https://github.com/titi0267/GasPrices"
              playstoreLink="https://play.google.com/store/apps/details?id=com.opticarbu&hl=en-MY"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nozzleConfig}
              isBlog={true}
              isPlaystore={true}
              title="Kuhn"
              description="Kuhn Group is an agricultural machinery manufacturer which has his headquartered in Saverne, France. I've worked there a few monthes on 3 of their apps. Kuhn Nozzle configurator which was updated in 2023. Kuhn Seedset and Kuhn ForageXpert which are still pending for the new release that I've worked on."
              playstoreLink="https://play.google.com/store/apps/details?id=com.kuhn.app.ReglageBuses&pcampaignid=web_share"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kitrek}
              isBlog={true}
              title="Kitrek"
              description=" This is my end of study project that started in september 2022 and that is still going. Kitrek is a community service allowing hikers to prepare and organize their trips. Several features will be available including ressource managment. More than a preparation, an assistant at your side ! "
              websiteLink="https://eip.epitech.eu/2025/kitrek/"
              demoLink="https://vimeo.com/794864410"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cgr}
              isBlog={true}
              title="CGR"
              description="
              The 'Comptoir Général du Ressort' (CGR International) is known for its diversified activities and for its leadership in the field of spring. I've worked there to maintain and refactor the program of industrial machinery that creates seat belt retractor springs. A very technical job in C programming."
              websiteLink="https://www.cgr-international.com/company/about-us/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={epitech}
              isBlog={false}
              title="My second school Year projects"
              description="This repository contains all of my projects made during my second year at Epitech. It is a mix between C and C++ projects."
              ghLink="https://github.com/titi0267/Tek2"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={epitech}
              isBlog={false}
              title="My first school Year projects"
              description="This repository contains all of my projects made during my first year at Epitech. Mainly C projects."
              ghLink="https://github.com/titi0267/Tek1"
            />
          </Col>
          <p style={{ color: "white", fontSize: 25 }}>
            Check my <strong className="purple">Github</strong> for more
            projects
          </p>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
