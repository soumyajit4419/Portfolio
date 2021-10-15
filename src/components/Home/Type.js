import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "DevOps ",
          "Site Reliability",
          "Cloud Solutions Architecture",
          "Software Developments",
          "Infrastructure as a Code",
          "CI/CD",
          "Configuration Managements",
          "Automations",
          "Containers and Orchestrations",
          "ETL, Data Warehousing and Data Migrations",
          "API Managements",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
