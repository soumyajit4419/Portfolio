// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import {
//   SiVisualstudiocode,
//   SiPostman,
//   SiSlack,
//   SiVercel,
//   SiMacos,
// } from "react-icons/si";

// function Toolstack() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiMacos />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiVisualstudiocode />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiPostman />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiSlack />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiVercel />
//       </Col>
//     </Row>
//   );
// }

// export default Toolstack;

import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  // Function to open link in a new tab
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" onClick={() => openInNewTab("https://www.apple.com/macos/")}>
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => openInNewTab("https://code.visualstudio.com/")}>
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => openInNewTab("https://www.postman.com/")}>
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => openInNewTab("https://slack.com/")}>
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => openInNewTab("https://vercel.com/")}>
        <SiVercel />
      </Col>
    </Row>
  );
}

export default Toolstack;

