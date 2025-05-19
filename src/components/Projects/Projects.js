import React, { useState, useEffect } from "react";
import { Container, Row, Col, Modal, Button, Carousel } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import bmo from "../../Assets/Projects/bmo.png";
import sousTraiter from "../../Assets/Projects/soustraiter.png";
import appliScan from "../../Assets/Projects/appli_scan.png";
import apiPoste from "../../Assets/Projects/apiposte.png";
import asSarceaux from "../../Assets/Projects/as_sarceaux.png";

function Projects() {
  const [show, setShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (project) => {
    setSelectedProject(project);
    setShow(true);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Détecte si l'écran est mobile
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projects = [
    {
      imgPath: asSarceaux,
      title: "AS Sarceaux",
      subTitle: "Site web",
      description:
        "Conception et développement du site vitrine officiel de l’AS Sarceaux, association sportive locale.",
      demoLink: "https://as-sarceaux.vercel.app",
      type: "web",
      langage: "React, HTML, CSS, JS",
    },
    {
      imgPath: apiPoste,
      title: "API Poste",
      subTitle: "Site web",
      description:
        "Projet réalisé dans le cadre d'un test de recrutement. Le site permet de consulter le statut de l'envoie d'un colis via l'API de La Poste.",
      demoLink: "http://apiposte.fwh.is",
      type: "web",
      langage: "HTML, CSS, PHP",
    },
    {
      imgPath: bmo,
      title: "La Bourse de la Machine Outil",
      subTitle: "Site web",
      description:
        "Refonte totale du site de la Bourse de la Machine-Outil. Le site permet aux utilisateurs de créer un compte et de s'y connecter afin de mettre en vente des machines industrielles. Il offre également la possibilité de consulter les revues de l'entreprise. Réalisé en 2024 dans le cadre de mon alternance de troisième année de BUT Informatique. Le site dispose d’un back office (CMS), réservé aux employés, centralisant toutes les fonctions d’administration.",
      demoLink: "https://www.bourse-machine-outil.com",
      type: "web",
      langage: "HTML, CSS, PHP, JS, JQuery, SQL",
    },
    {
      imgPath: appliScan,
      title: "Application de scan de code barre",
      subTitle: "Application Android",
      description:
        "Création de deux applications Android en 2023, dans le cadre de mon stage de deuxième année de BUT Informatique, pour un salon d’exposition de machines industrielles. La première application est destinée aux employés, afin de gérer les entrées et sorties des visiteurs via un système de scan de codes-barres. La seconde s’adresse aux visiteurs et leur permet de scanner les badges d'autres participants afin de faciliter la prise de contact.",
      type: "mobile",
      langage: "Kotlin",
    },
    {
      imgPath: sousTraiter,
      title: "Sous-Traiter",
      subTitle: "Fonctionnalité web",
      description:
        "Ajout d'une fonctionnalité de mise en ligne d'offres d'emploi dans le domaine de l'industrie. En plus de la publication d'offres d'emploi, celles-ci peuvent être consultées par des candidats, qui ont également la possibilité de déposer leur candidature. Développée en 2023 dans le cadre de mon stage de deuxième année de BUT Informatique.",
      demoLink: "https://www.sous-traiter.com/offre_emploi/liste_emploi.php",
      type: "web",
      langage: "HTML, CSS, PHP, JS, JQuery, SQL",
    },
  ];

  return (
    <Container fluid className="project-section" id="projects">
      <Container>
        <h1 className="project-heading">
          Mes précédents <strong className="purple">projets </strong>
        </h1>
        <p style={{ color: "white" }}>
          Vous trouverez ici mes projets personnels et professionnels
        </p>

        {/* Affichage conditionnel : Carousel sur mobile, Row sur desktop */}
        {isMobile ? (
          <Carousel style={{ paddingBottom: "50px" }}>
            {projects.map((project, index) => (
              <Carousel.Item key={index}>
                <div
                  onClick={() => handleShow(project)}
                  style={{ cursor: "pointer" }}
                >
                  <ProjectCard
                    imgPath={project.imgPath}
                    isBlog={false}
                    title={project.title}
                    subTitle={project.subTitle}
                  />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {projects.map((project, index) => (
              <Col
                md={4}
                className={`project-card ${project.type === "mobile" ? "appli-card" : ""} ${project.type === "web" ? "web-card" : ""}`}
                key={index}
                onClick={() => handleShow(project)}
              >
                <ProjectCard
                  imgPath={project.imgPath}
                  isBlog={false}
                  title={project.title}
                  subTitle={project.subTitle}
                />
              </Col>
            ))}
          </Row>
        )}
      </Container>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered dialogClassName="custom-modal" size="xl">
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={6} className="project-card">
              <img
                src={selectedProject?.imgPath}
                alt={selectedProject?.title}
                className="project-img-modal mb-3"
              />
            </Col>
            <Col md={6}>
              <p><strong>Description</strong> <br />{selectedProject?.description}</p>
              <p><strong>Technologies utilisées</strong> <br />{selectedProject?.langage}</p>
            </Col>
          </Row>
          {selectedProject?.demoLink && (
            <Button
              variant="primary"
              href={selectedProject.demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir le projet
            </Button>
          )}
          <Button variant="secondary" style={{ float: "right" }} onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Projects;
