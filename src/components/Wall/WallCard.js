import React from "react";
import Card from "react-bootstrap/Card";

function WallCard(props) {
  return (
    <Card className="project-card-view">
      <a href={props.certLink} target="_blank" rel="noopener noreferrer">
        <Card.Img variant="top" src={props.imgPath} alt="certificate-img" />
      </a>
    </Card>
  );
}

export default WallCard;
