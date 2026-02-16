import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "0px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "0px" }}>
        <strong className="purple"></strong>
      </h1>
      <GitHubCalendar
        username="saadkdd03"
        blockSize={0}
        blockMargin={0}
        color="#ffffff00"
        fontSize={0}
      />
    </Row>
  );
}

export default Github;
