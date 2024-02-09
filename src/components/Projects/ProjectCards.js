import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite, CgYoutube } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        style={{ objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.ghLink ? (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub />
            &nbsp;
            {"Github"}
          </Button>
        ) : (
          <></>
        )}
        {"\n"}
        {props.playstoreLink ? (
          <Button variant="primary" href={props.playstoreLink} target="_blank">
            {"Playstore"}
          </Button>
        ) : (
          <></>
        )}
        {"\n"}

        {props.websiteLink ? (
          <Button variant="primary" href={props.websiteLink} target="_blank">
            <CgWebsite />
            &nbsp;
            {"Website"}
          </Button>
        ) : (
          <></>
        )}
        {"\n"}

        {props.demoLink ? (
          <Button variant="primary" href={props.demoLink} target="_blank">
            <CgYoutube />
            &nbsp;
            {"Demo"}
          </Button>
        ) : (
          <></>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
