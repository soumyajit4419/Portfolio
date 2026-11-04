
import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Mi actividad en <strong className="purple">GitHub</strong>
      </h1>

      <GitHubCalendar
        username="pablo-dz"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={14}
      />
    </Row>
  );
}

export default Github;
