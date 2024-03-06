import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
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
        <Link
          className="btn btn_primary"
          to={props.link}
          target={props.isBlog ? "_blank" : ""}
          >
            <BiLinkExternal /> &nbsp;
            {props.isBlog ? "View Blog" : "View Project"}
          </Link>
        </Card.Body>
      </Card>
    );
  }
  export default ProjectCards;
      
