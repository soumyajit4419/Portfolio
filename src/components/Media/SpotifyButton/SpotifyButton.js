import React from "react";
import Button from "react-bootstrap/Button";
import { FaSpotify } from "react-icons/fa";

import "./SpotifyButton.css";


function SpotifyButton(props) {
  return (
    <Button
      variant="spotify"
      href={props.href}
      target="_blank"
      style={{ marginLeft: "10px" }}
    >
      <FaSpotify /> &nbsp;
      {"Spotify"}
    </Button>
  );
}
export default SpotifyButton;
