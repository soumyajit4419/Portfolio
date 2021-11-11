import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#063883",
    grade3: "#09569e",
    grade2: "#1e75b8",
    grade1: "#3a95cf",
    grade0: "#ecd9fc",
  };

  //  background-image: linear-gradient(to right, #063883, #09569e, #1e75b8, #3a95cf, #5ab5e5);
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="site-color">Code</strong>
      </h1>
      <GitHubCalendar
        username="cmosley"
        blockSize={15}
        blockMargin={5}
        theme={colourTheme}
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
