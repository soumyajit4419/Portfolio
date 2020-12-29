import React from "react";
import Card from "react-bootstrap/Card";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function BlogsCards(props) {
  return (
    <Card className="blog-card-view">
      <Card.Img variant="top" src={props.imgPath} className="blog-img" />
      <Card.Footer>
        <a
          className="blog-link"
          href={props.link}
          target="_blank"
          rel="noreferrer"
          style={{ textTransform: "uppercase", fontSize: "1.2em" }}
        >
          <i className="fas fa-external-link-square-alt">&nbsp;</i>
          {props.title}
        </a>
        <p style={{ marginBlockEnd: "0em" }}>{props.site}</p>
      </Card.Footer>
    </Card>
  );
}

export default BlogsCards;
