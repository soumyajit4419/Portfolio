import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            COMMENT ALLIER<span className="purple"> MES 2 </span> PASSIONS ? 
            </h1>
            <p className="home-about-body">
              D’une part ayant toujours été passionné par l’informatique et 
              d’autre part attiré par les marchés financiers depuis maintenant 3 ans. 
              <br></br>
              <br />
              La réponse a cette question m’a poussé à m’inscrire à un bachelor 
              en développement afin de tirer le meilleur parti des des deux côtés 
              sachant que plus de 80% des transactions sur les marchés financiers 
              se font via des algorithmes de nos jours. 
              J’aimerais me spécialiser en data sciences après ce bachelor.
              <br />
              <br />
              Je suis à l'aise avec 
              <i>
                <b className="purple">
                  {" "}
                  Github/Gitlab, Node.js, JavaScript, TypeScript , HTML/CSS,  et les API.{" "}
                </b>
              </i>
              Je développe des applications full-stack en m’appuyant sur des bases de données <b className="purple"> {" "}SQL et NoSQL.{" "} </b>
              <br />
              <br />
              J’accorde une importance particulière à la qualité du code
              grâce aux tests API
              <i>
                <b className="purple">
                  {" "}
                  (Postman) et (Cypress){" "}
                </b>
              </i>
              pour les tests end-to-end.
              <br />
              <br />
              Je gère également le déploiement d’applications web, notamment via Render. Je prends plaisir à créer des projets avec
              <b className="purple"> Node.js </b> ainsi qu’avec des frameworks modernes tels que{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">Next.js</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
