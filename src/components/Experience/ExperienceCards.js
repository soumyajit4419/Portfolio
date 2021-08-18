import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import { Row, Col } from "react-bootstrap";

function ProjectCards(props) {
    return (
        <Card className="project-card-view">
            <Card.Body>
                <Card.Title style={{ textAlign: "justify" }}>{props.title}</Card.Title>
                <Card.Subtitle style={{ textAlign: "justify" }} className="mb-2 text-muted">Software Developer</Card.Subtitle>
                <Card.Subtitle style={{ textAlign: "justify" }} className="mb-2 text-muted">May 2018 - August 2018</Card.Subtitle>
                <Card.Text style={{ textAlign: "justify" }}>
                    <ul>
                        <li><p style={{ margin: 0 }}>{props.description1}</p></li>
                        <li><p style={{ margin: 0 }}>{props.description2}</p></li>
                        <li><p>{props.description3}</p></li></ul>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
export default ProjectCards;
