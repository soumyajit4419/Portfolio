import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <h3 className="project-title">{props.title}</h3>
        <h5 className="project-subtitle">{props.subTitle}</h5>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {"\n"}
        {"\n"}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
            rel="noopener noreferrer"
          >
            <CgWebsite /> &nbsp;
            {"Lien"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
