// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
// import {
//   DiJavascript1,
//   DiReact,
//   DiNodejs,
//   DiMongodb,
//   DiPython,
//   DiGit,
//   DiJava,
// } from "react-icons/di";
// import {
//   SiRedis,
//   SiFirebase,
//   SiNextdotjs,
//   SiSolidity,
//   SiPostgresql,
// } from "react-icons/si";
// import { TbBrandGolang } from "react-icons/tb";

// function Techstack() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//       <Col xs={4} md={2} className="tech-icons">
//         <CgCPlusPlus />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiJavascript1 />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <TbBrandGolang />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiNodejs />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiReact />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiSolidity />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiMongodb />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiNextdotjs />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiGit />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiFirebase />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiRedis />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiPostgresql />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiPython />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiJava />
//       </Col>
//     </Row>
//   );
// }

// export default Techstack;
import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  const openLink = (url) => () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" onClick={openLink("https://en.cppreference.com/w/")}>
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={openLink("https://developer.mozilla.org/en-US/docs/Web/JavaScript")}>
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={openLink("https://go.dev/")}>
        <TbBrandGolang />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={openLink("https://nodejs.org/")}>
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={openLink("https://reactjs.org/")}>
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={openLink("https://soliditylang.org/")}>
        <SiSolidity />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={openLink("https://www.mongodb.com/")}>
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={openLink("https://nextjs.org/")}>
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={openLink("https://git-scm.com/")}>
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={openLink("https://firebase.google.com/")}>
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={openLink("https://redis.io/")}>
        <SiRedis />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={openLink("https://www.postgresql.org/")}>
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={openLink("https://www.python.org/")}>
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={openLink("https://www.java.com/")}>
        <DiJava />
      </Col>
    </Row>
  );
}

export default Techstack;

