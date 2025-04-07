import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import bmo from "../../Assets/Projects/bmo.png";
import sousTraiter from "../../Assets/Projects/soustraiter.png";
import appliScan from "../../Assets/Projects/appli_scan.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Mes précédents <strong className="purple">projets </strong>
        </h1>
        <p style={{ color: "white" }}>
          Vous trouverez ici mes projets personnels et professionnels
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bmo}
              isBlog={false}
              title="La Bourse de la Machine Outil"
              description="Refonte totale du site de la Bourse de la Machine-Outil.
              Le site permet aux utilisateurs de créer un compte et de s'y connecter afin de mettre en vente des machines industrielles. Il offre également la possibilité de consulter les revues de l'entreprise.
              Réalisé en 2024 dans le cadre de mon alternance de troisième année de BUT Informatique."
              ghLink=""
              demoLink="https://www.bourse-machine-outil.com"
            />
          </Col>

          <Col md={4} className="appli-card project-card">
            <ProjectCard
              imgPath={appliScan}
              isBlog={false}
              title="Application Android de scan de code barre"
              description="Création d'une application Android permettant de scanner les codes-barres des visiteurs à l'entrée d'un salon d'exposition de machines industrielles.
              Réalisée en 2023 dans le cadre de mon stage de deuxième année de BUT Informatique. Application uniquement utilisée en interne."         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sousTraiter}
              isBlog={false}
              title="Sous-Traiter"
              description="Ajout d'une fonctionnalité de mise en ligne d'offres d'emploi dans le domaine de l'industrie.
              En plus de la publication d'offres d'emploi, celles-ci peuvent être consultées par des candidats, qui ont également la possibilité de déposer leur candidature.
              Développée en 2023 dans le cadre de mon stage de deuxième année de BUT Informatique."
              ghLink=""
              demoLink="https://www.sous-traiter.com/offre_emploi/liste_emploi.php"
            />
          </Col>

          

       
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
