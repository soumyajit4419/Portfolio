import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiGoogleAnalytics,
  DiIllustrator,
  DiMailchimp,
  DiPhotoshop,
  DiSass,
  DiWordpress,
} from "react-icons/di";
import {
  SiTwitch,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col title="JavaScript" xs={4} md={2} className="tech-icons" alt="JavaScript">
        <DiJavascript1 />
      </Col>
      <Col title="Node" xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col title="JReact" xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col title="Adobe Illustrator" xs={4} md={2} className="tech-icons">
        <DiIllustrator />
      </Col>
      <Col title="Google Analytics" xs={4} md={2} className="tech-icons">
        <DiGoogleAnalytics />
      </Col>
      <Col title="MailChimp" xs={4} md={2} className="tech-icons">
        <DiMailchimp />
      </Col>
      <Col title="Photoshop" xs={4} md={2} className="tech-icons">
        <DiPhotoshop />
      </Col>
      <Col title="SASS" xs={4} md={2} className="tech-icons">
        <DiSass />
      </Col>
      <Col title="WordPress" xs={4} md={2} className="tech-icons">
        <DiWordpress />
      </Col>
      <Col title="Twitch" xs={4} md={2} className="tech-icons">
        <SiTwitch />
      </Col>
    </Row>
  );
}

export default Techstack;
