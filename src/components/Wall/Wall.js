import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import WallCard from "./WallCard";
import Particle from "../Particle";

// Images for the certifications
import cert1 from "../../Assets/Certificates/cert1.jpg";
import cert2 from "../../Assets/Certificates/cert2.jpg";
import cert3 from "../../Assets/Certificates/cert3.jpg";
import cert4 from "../../Assets/Certificates/cert4.jpg";
import cert5 from "../../Assets/Certificates/cert5.png";
import cert6 from "../../Assets/Certificates/cert6.jpg";
import cert7 from "../../Assets/Certificates/cert7.jpg";
import cert8 from "../../Assets/Certificates/cert8.jpg";
import cert9 from "../../Assets/Certificates/cert9.png";
// Image for the badge
import badge1 from "../../Assets/Badges/badge1.png";
import badge2 from "../../Assets/Badges/badge2.png";
import badge3 from "../../Assets/Badges/badge3.png";
import badge4 from "../../Assets/Badges/badge4.png";
import badge5 from "../../Assets/Badges/badge5.png";
import badge6 from "../../Assets/Badges/badge6.png";
import badge0 from "../../Assets/Badges/badge0.png";
function Wall() {
  // State to track which content to display (certificates or badges)
  const [displayType, setDisplayType] = useState("certificates");

  // Toggle function to switch between certificates and badges
  const toggleDisplay = (type) => {
    setDisplayType(type);
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Wall</strong>
        </h1>
        <p style={{ color: "white" }}>
          Showcase of my achievements and recognitions.
        </p>

        {/* Toggle buttons for certificates and badges */}
        <div
          className="toggle-container"
          style={{ marginBottom: "30px", textAlign: "right", zIndex: 1000 }}
        >
          <Button
            variant={displayType === "certificates" ? "primary" : "outline-primary"}
            onClick={() => toggleDisplay("certificates")}
            className="toggle-btn"
            style={{ marginRight: "10px", cursor: "pointer" }}
          >
            Certificates
          </Button>
          <Button
            variant={displayType === "badges" ? "primary" : "outline-primary"}
            onClick={() => toggleDisplay("badges")}
            className="toggle-btn"
            style={{ cursor: "pointer" }}
          >
            Badges
          </Button>
        </div>

        {/* Certificates Section */}
        {displayType === "certificates" && (
          <>
            <h2 className="project-heading" style={{ fontSize: "1.8em" }}>
              <strong className="purple">Certifications</strong>
            </h2>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              <Col md={4} className="project-card">
                <WallCard
                  imgPath={cert3}
                  certLink="https://www.udemy.com/certificate/UC-9c295a32-4f7e-47bb-9e0d-40a735863348/"
                />
              </Col>
              <Col md={4} className="project-card">
                <WallCard
                  imgPath={cert2}
                  certLink="https://coursera.org/share/cb827151f9c8db5e17f6745f5fe7dc85"
                />
              </Col>
              <Col md={4} className="project-card">
                <WallCard
                  imgPath={cert6}
                  certLink="https://learn.kodekloud.com/user/certificate/51500659-36c9-44ef-a5ac-78b451a57b5e"
                />
              </Col>
              <Col md={4} className="project-card">
                <WallCard
                  imgPath={cert9}
                  certLink="https://drive.google.com/file/d/1boMEiwRuwFp1rLSmPX4sNDv1Q1u4UDVj/view?usp=drive_link"
                />
              </Col>
              <Col md={4} className="project-card">
                <WallCard
                  imgPath={cert1}
                  certLink="https://coursera.org/share/67dda612c2228fa549adea349bccc0ea"
                />
              </Col>
              <Col md={4} className="project-card">
                <WallCard
                  imgPath={cert4}
                  certLink="https://maharatech.gov.eg/mod/customcert/view.php?id=12571&downloadown=1"
                />
              </Col>
              <Col md={4} className="project-card">
                <WallCard
                  imgPath={cert5}
                  certLink="https://intranet.alxswe.com/certificates/XnG28pCxc7"
                />
              </Col>
              <Col md={4} className="project-card">
                <WallCard
                  imgPath={cert7}
                  certLink="https://learn.kodekloud.com/user/certificate/e8507b78-5fc2-4096-b638-161ae9c6c7bb"
                />
              </Col>
              <Col md={4} className="project-card">
                <WallCard
                  imgPath={cert8}
                  certLink="https://maharatech.gov.eg/mod/customcert/view.php?id=16004&downloadown=1"
                />
              </Col>
            </Row>
          </>
        )}

        {/* Badges Section */}
        {displayType === "badges" && (
          <>
            <h2 className="project-heading" style={{ fontSize: "1.8em" }}>
              <strong className="purple">Badges</strong>
            </h2>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              <Col md={4} className="project-card">
                <WallCard
                  imgPath={badge1}
                  certLink="https://www.credly.com/badges/72cc7a75-289b-44ff-900a-a06062b82c80/public_url"
                />
              </Col>
              <Col md={4} className="project-card">
                <WallCard
                  imgPath={badge0}
                  certLink="https://www.credly.com/badges/57301233-2368-45dd-a9cd-4ab8ae5bc52f/public_url"
                />
              </Col>  
              <Col md={4} className="project-card">
                <WallCard
                  imgPath={badge2}
                  certLink="https://www.credly.com/badges/58dea23e-c0f6-45ad-b47c-4762ca5a011a/public_url"
                />
              </Col>
              <Col md={4} className="project-card">
                <WallCard
                  imgPath={badge3}
                  certLink="https://www.credly.com/badges/85b5ff5e-b1c8-446e-81e8-41646f9765ae/public_url"
                />
              </Col>
              <Col md={4} className="project-card">
                <WallCard
                  imgPath={badge4}
                  certLink="https://www.credly.com/badges/58dea23e-c0f6-45ad-b47c-4762ca5a011a/public_url"
                />
              </Col>
              <Col md={4} className="project-card">
                <WallCard
                  imgPath={badge5}
                  certLink="https://www.credly.com/badges/8334314a-21d0-4f0a-97b1-c18dc00f2ec8/public_url"
                />
              </Col>
              <Col md={4} className="project-card">
                <WallCard
                  imgPath={badge6}
                  certLink="https://catalog-education.oracle.com/pls/certview/sharebadge?id=3B1A68E925FA950EAA4B656B8D5F5065DBFA619519D2FF3B1CB9EE146C4FFE0D
"
                />
              </Col>
              {/* Add more badge cards here as needed */}
            </Row>
          </>
        )}
      </Container>
    </Container>
  );
}

export default Wall;