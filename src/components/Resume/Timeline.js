import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

function Timeline() {
  const [openItem, setOpenItem] = useState(null); // Stocke l'index de l'expérience ouverte
  const [isMobile, setIsMobile] = useState(false); // Détecte si l'utilisateur est sur mobile
  const [showModal, setShowModal] = useState(false); // Gère l'affichage du modal

  const timelineData = [
    {
      year: "Novembre - Décembre 2024",
      title: "Employé polyvalent - Action",
      type: "CDI",
      details: [
        "Accueil et orientation des clients pour garantir une expérience d’achat optimale.",
        "Gestion des stocks : réception des marchandises, mise en rayon et vérification des niveaux d’approvisionnement.",
        "Maintien de la propreté et de l’organisation des rayons pour assurer une présentation soignée des produits.",
        "Participation aux opérations d’encaissement avec rigueur et efficacité.",
        "Travail en équipe pour répondre aux besoins quotidiens du magasin et atteindre les objectifs de performance.",
      ],
    },
    {
      year: "Aout 2024",
      title: "Vendeur - Micromania",
      type: "CDD",
      details: [
        "Accueil, conseil et accompagnement des clients dans le choix de produits.",
        "Gestion des ventes : réalisation des encaissements, traitement des réservations et précommandes, et suivi des stocks.",
        "Mise en rayon et mise en valeur des produits pour optimiser l’attractivité du magasin.",
        "Participation aux opérations commerciales et promotionnelles pour atteindre les objectifs de vente.",
      ],
    },
    {
      year: "Septembre 2023 - Juin 2024",
      title: "Développeur web - Allnet",
      type: "Alternance",
      details: [
        "Conception et développement complet d'un site web e-commerce dédié à la vente de machines industrielles.",
        "Réalisation de A à Z du projet en utilisant PHP, MySQL, HTML/CSS, JavaScript.",
        "Implémentation des fonctionnalités clés : création et gestion de profil utilisateur, mise en ligne d'annonces avec fonctionnalités adaptées, CRM en back-office pour la gestion des données du site (utilisateurs, annonces et suivi des activités).",
        "Collaboration avec l'équipe pour répondre aux besoins métier et garantir la qualité du site livré.",
      ],
    },
    {
      year: "Mai 2023 - Juillet 2023",
      title: "Développeur web - Allnet",
      type: "Stage",
      details: [
        "Développement d’une nouvelle fonctionnalité pour un site web, dédiée à la mise en ligne d’annonces d’offres d’emploi dans le secteur industriel.",
        "Participation à toutes les étapes du projet : analyse des besoins, conception, développement et tests.",
        "Utilisation de technologies adaptées : PHP, JavaScript, SQL, HTML/CSS...",
        "Intégration et optimisation de la fonctionnalité pour assurer une navigation fluide et intuitive sur le site.",
      ],
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (index) => {
    if (isMobile) {
      setOpenItem(index);
      setShowModal(true); 
    } else {
      setOpenItem(openItem === index ? null : index); 
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setOpenItem(null);
  };

  return (
    <div className="timeline-container">
      <h1 className="project-heading timeline-heading">
        Mes <strong className="home-text">expériences professionnelles</strong>
      </h1>
      {timelineData.map((item, index) => (
        <div
          key={index}
          className={`timeline-item ${openItem !== null ? "shifted" : ""} ${
            openItem === index ? "active" : ""
          }`}
          onClick={() => handleClick(index)}
        >

          <div className="timeline-summary">
            <h3>{item.title}</h3>
            <h5>{item.type}</h5>
            <p>{item.year}</p>
          </div>

          {!isMobile && openItem === index && (
            <div className="timeline-details">
              <ul>
                {item.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}

      {isMobile && openItem !== null && (
        <Modal show={showModal} onHide={handleCloseModal} dialogClassName="custom-modal"centered>
          <Modal.Header closeButton>
            <Modal.Title>{timelineData[openItem].title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>{timelineData[openItem].type}</h5>
            <p>{timelineData[openItem].year}</p>
            <ul>
              {timelineData[openItem].details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Fermer
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default Timeline;