import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";

function Timeline() {
  const [openItems, setOpenItems] = useState([]);

  const timelineData = [
    {
      year: "Novembre - Décembre 2024",
      title: "Employé polyvalent - Action",
      type: "CDI",
      details: "Travail sur des projets React et amélioration des performances front-end.",
    },
    {
      year: "Aout 2024",
      title: "Vendeur - Micromania",
      type: "CDD",
      details: "Création d'une application web pour la gestion des stocks.",
    },
    {
      year: "Septembre 2023 - Juin 2024",
      title: "Développeur web - Allnet",
      type: "Alternance",
      details: "Travail sur des projets React et amélioration des performances front-end.",
    },
    {
      year: "Mai 2023 - Juillet 2023",
      title: "Développeur web - Allnet",
      type: "Stage",
      details: "Création d'une application web pour la gestion des stocks.",
    },
   
  ];

  const handleClick = (index) => {
    if (openItems.includes(index)) {
      // Si l'élément est déjà ouvert, on le ferme
      setOpenItems(openItems.filter((item) => item !== index));
    } else {
      // Sinon, on l'ajoute à la liste des éléments ouverts
      setOpenItems([...openItems, index]);
    }
  };

  return (

    
    <div className="timeline-container">
      <h1 className="project-heading timeline-heading" >
        Mes <strong className="home-text">expériences professionnels</strong> 
      </h1>
      {timelineData.map((item, index) => (
        <div
          key={index}
          className={`timeline-item ${openItems.includes(index) ? "active" : ""}`}
          onClick={() => handleClick(index)}
        >
          {/* Première case : Titre et Année */}
          <div className="timeline-summary">
            <h3>{item.title}</h3>
            <h5>{item.type}</h5>
            <p>{item.year}</p>
          </div>

          {/* Deuxième case : Description (visible uniquement si sélectionnée) */}
          {openItems.includes(index) && (
            <div className="timeline-details">
              <p>{item.details}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Timeline;