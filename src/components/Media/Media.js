import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import PodcastLeadershipt from "../../Assets/Media/PodcastLeadership.png";
import MediaCard from "./MediaCard";

function Media() {
  return (
    <Container fluid className="media-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          In the <strong className="highlighted-text">Media </strong>
        </h1>
        <p style={{ color: "white" }}>
          These are some of the places where I've shared my insights and ideas.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <MediaCard
              imgPath={PodcastLeadershipt}
              isBlog={false}
              title="Podcast: Team Leading in Product Engineering"
              youtubeLink="https://www.youtube.com/watch?v=4G_3dCKBe5E&ab_channel=epilotTech"
              spotifyLink="https://open.spotify.com/episode/7vE8eosRbUNZvigzZEWl1N?si=L1BTae4gRTaJhEsxUi0Ztw"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Media;
