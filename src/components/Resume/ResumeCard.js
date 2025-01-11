import React from "react";
import Card from "react-bootstrap/Card";

function ResumeCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title> <strong className="purple"> {props.title} </strong> </Card.Title>
        <Card.Subtitle className="mb-2">
            <strong> {props.date} </strong>
        </Card.Subtitle>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {"\n"}
        {"\n"}
      </Card.Body>
    </Card>
  );
}
export default ResumeCard;
