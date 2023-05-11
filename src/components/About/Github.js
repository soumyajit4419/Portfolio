import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1
        className="project-heading mt-5 mb-4"
        style={{ paddingBottom: "20px" }}
      >
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="edilsonandrade"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
        year={2020}
      />
    </Row>
  );
}

export default Github;
