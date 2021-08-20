import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        <div className="project-card-flex">
          {props.hasWebsite ?
            <Button variant="primary" href={props.link} target="_blank">
              <BiLinkExternal /> &nbsp;
                {props.isBlog ? "Website" : "Website"}
            </Button> : ""}
          <Button variant="primary" href={props.linkProject} target="_blank">
            <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Github" : "View Project"}
          </Button>
        </div>

      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
