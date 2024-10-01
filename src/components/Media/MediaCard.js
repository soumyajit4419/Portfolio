import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from "react-bootstrap/Button";
import { FaYoutube } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";

import YoutubeButton from "./YoutubeButton/YoutubeButton";
import SpotifyButton from "./SpotifyButton/SpotifyButton";

function MediaCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title><b>{props.title}</b></Card.Title>
      </Card.Body>
      <Card.Footer>
        <YoutubeButton href={props.youtubeLink}></YoutubeButton>
        <SpotifyButton href={props.spotifyLink}></SpotifyButton>
      </Card.Footer>
    </Card>
  );
}
export default MediaCard;
