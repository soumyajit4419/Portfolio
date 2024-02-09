import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { CgEnter } from "react-icons/cg";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        My current year <strong className="purple">contribution</strong>
      </h1>
      <GitHubCalendar
        username="titi0267"
        blockSize={20}
        blockMargin={10}
        color="#c084f5"
        fontSize={16}
      />
      <h1
        className="project-heading"
        style={{ paddingBottom: "20px", marginTop: "40px" }}
      >
        My past year <strong className="purple">contributions</strong>
      </h1>
      <div
        style={{
          textWrap: "nowrap",
        }}
      >
        <GitHubCalendar
          username="titi0267"
          blockSize={0}
          blockMargin={0}
          color="#c084f5"
          fontSize={25}
          hideMonthLabels
          year={2022}
          hideColorLegend
        />
        <GitHubCalendar
          username="titi0267"
          blockSize={0}
          blockMargin={0}
          color="#c084f5"
          fontSize={25}
          hideMonthLabels
          year={2021}
          hideColorLegend
        />
        <GitHubCalendar
          username="titi0267"
          blockSize={0}
          blockMargin={0}
          color="#c084f5"
          fontSize={25}
          hideMonthLabels
          year={2020}
          hideColorLegend
        />
      </div>
    </Row>
  );
}

export default Github;
