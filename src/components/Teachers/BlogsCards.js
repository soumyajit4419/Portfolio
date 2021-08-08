import React from "react";
import Card from "react-bootstrap/Card";
import { BsLink } from "react-icons/bs";

function BlogsCards(props) {
  return (
    <a
      className="blog-link"
      href={props.link}
      target="_blank"
      rel="noreferrer"
      style={{ fontSize: "1.2em" }}
    >
      <Card className="blog-card-view">
        <Card.Img variant="top" src={props.imgPath} className="blog-img" />
        <Card.Footer>
          <BsLink />
          &nbsp;
          {props.title}
          <p style={{ marginBlockEnd: "0em" }}>{props.site}</p>
        </Card.Footer>
      </Card>
    </a>
  );
}

export default BlogsCards;
