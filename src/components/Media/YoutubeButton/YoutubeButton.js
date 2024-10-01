import React from "react";
import Button from "react-bootstrap/Button";
import { FaYoutube } from "react-icons/fa";

import "./YoutubeButton.css";

function YoutubeButton(props) {
  return (
    <Button
      variant="youtube"
      href={props.href}
      target="_blank"
      style={{ marginLeft: "10px" }}
    >
      <FaYoutube /> &nbsp;
      {"Youtube"}
    </Button>
  );
}
export default YoutubeButton;
