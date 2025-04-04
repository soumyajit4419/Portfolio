import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <Container fluid className="error-404-section">
      <Row>
        <Col>
          <h1 style={{ fontSize: "5rem", color: "var(--accent-color)" }}>404</h1>
          <h2 style={{ color: "var(--primary-color)" }}>Page non trouvée</h2>
          <p style={{ color: "var(--secondary-color)" }}>
            Oups ! La page que vous recherchez n'existe pas.
          </p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <button className="btn btn-primary">Retour à l'accueil</button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Error404;