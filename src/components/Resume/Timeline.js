import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import Titre from "../Common/Titre";


function Timeline() {
  const timelineData = [
    {
      year: "2025",
      date: "Mars 2025 - Aujourd'hui",
      title: "Développeur web Freelance",
      type: "Freelance",
      details: [
        "Réalisation de projets web personnels ou pour divers clients.",
        "Conception et développement de sites web et applications.",
      ],
      icon: <FaBriefcase />,
      color: "#5D5D81",
      entreprise : "",
      lieu : "Caen",
      bgColor : "#3B3355",
    },
    {
      year: "2024",
      date: "Novembre - Décembre 2024",
      title: "Employé polyvalent",
      type: "CDI",
      details: [
        "Accueil et orientation des clients pour garantir une expérience d’achat optimale.",
        "Gestion des stocks : réception des marchandises, mise en rayon et vérification des niveaux d’approvisionnement.",
        "Maintien de la propreté et de l’organisation des rayons.",
        "Participation aux opérations d’encaissement.",
        "Travail en équipe pour atteindre les objectifs de performance.",
      ],
      icon: <FaBriefcase />,
      color: "#5D5D81",
      entreprise : "Action",
      lieu : "Mondeville",
      bgColor : "#743c9c",
    },
    {
      year: "2024",
      date: "Août 2024",
      title: "Vendeur",
      type: "CDD",
      details: [
        "Accueil, conseil et accompagnement des clients.",
        "Gestion des ventes et des stocks.",
        "Mise en rayon et valorisation des produits.",
        "Participation aux opérations commerciales.",
      ],
      icon: <FaBriefcase />,
      color: "#5D5D81",
      entreprise : "Micromania",
      lieu : "Caen",
      bgColor : "#3B3355",
    },
    {
      year: "2024",
      date: "Septembre 2021 - Juin 2024",
      title: "BUT Informatique",
      type: "BAC +3",
      details: [
        "Obtention de mon BUT Informatique.",
      ],
      icon: <FaGraduationCap />,
      color: "#5D5D81",
      entreprise : "IUT Grand Ouest Normandie",
      lieu : "Ifs",
      bgColor : "#743c9c",
    },
    {
      year: "2023 - 2024",
      date: "Septembre 2023 - Juin 2024",
      title: "Développeur web",
      type: "Alternance",
      details: [
        "Conception et développement d'un site e-commerce industriel.",
        "Projet réalisé en PHP, MySQL, HTML/CSS, JavaScript.",
        "Création de profils utilisateurs, annonces, CRM back-office.",
        "Collaboration avec l'équipe pour garantir la qualité.",
      ],
      icon: <FaBriefcase />,
      color: "#5D5D81",
      entreprise : "Allnet",
      lieu : "Mondeville",
      bgColor : "#3B3355",
    },
    {
      year: "2023",
      date: "Mai - Juillet 2023",
      title: "Développeur web",
      type: "Stage",
      details: [
        "Développement d’une fonctionnalité d’annonces d’emploi.",
        "Participation à toutes les étapes du projet.",
        "Utilisation de PHP, JavaScript, SQL, HTML/CSS.",
        "Optimisation de la navigation sur le site.",
      ],
      icon: <FaBriefcase />,
      color: "#5D5D81",
      entreprise : "Allnet",
      lieu : "Mondeville",
      bgColor : "#743c9c",
    },
    {
      year: "2021",
      date: "Septembre 2018 - Juin 2021",
      title: "Baccalauréat Technologique STI2D",
      type: "BAC",
      details: [
        "Obtention de mon BUT Informatique spécialité système d'information et numérique.",
      ],
      icon: <FaGraduationCap />,
      color: "#5D5D81",
      entreprise : "Lycée Alexis de Tocqueville",
      lieu : "Cherbourg-Octeville",
      bgColor : "#3B3355",
    },
  ];

  return (
    <div className="timeline-section">
      <h1 className="project-heading timeline-heading" style={{ textAlign: "center" }}>
        <Titre>Mon <strong className="home-text">parcours</strong></Titre>
      </h1>
      <VerticalTimeline>
        {timelineData.map((item, idx) => (
          <VerticalTimelineElement
            key={idx}
            date={item.year}
            iconStyle={{ background: item.color, color: "#fff" }}
            icon={item.icon}
            contentStyle={{ background: item.bgColor, color: "#fff", opacity: 0.8 }}
            contentArrowStyle={{ borderRight: "7px solid #3B3355" }}
          >
            <h3 className="vertical-timeline-element-title">{item.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{item.entreprise} à {item.lieu}</h4>
            <h5 style={{ fontSize: "0.9em" }}>{item.date}</h5>
            <br />
            <h5 style={{ marginBottom: 10 }}>{item.type}</h5>
            <hr />
            <ul>
              {item.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;