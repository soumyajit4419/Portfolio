import React, { useState, useEffect, useRef } from "react";
import { Col, Row } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import {
  DiJavascript1,
  DiReact,
  DiMongodb,
  DiGit,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiPhp,
  DiSymfony,
  DiMysql,
} from "react-icons/di";
import {
  SiPostgresql,
  SiKotlin,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

function Techstack() {
  const [progress, setProgress] = useState({
    html: 0,
    css: 0,
    bootstrap: 0,
    php: 0,
    symfony: 0,
    javascript: 0,
    react: 0,
    mysql: 0,
    mongodb: 0,
    postgresql: 0,
    kotlin: 0,
    typescript: 0,
    tailwind: 0,
  });

  const progressRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setProgress({
              html: 85,
              css: 80,
              bootstrap: 75,
              php: 80,
              symfony: 60,
              javascript: 70,
              react: 70,
              mysql: 75,
              mongodb: 60,
              postgresql: 60,
              kotlin: 60,
              typescript: 60,
              tailwind: 60,
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, []);

  return (
    <Row
      style={{ justifyContent: "center", paddingBottom: "50px" }}
      ref={progressRef}
    >
      <Col xs={12} md={6}>
        <h3 style={{ textAlign: "center", marginBottom: 20 }}>Front-End</h3>
        <div className="d-flex flex-wrap justify-content-center">
          <div className="tech-icons con-tech-icons" title="HTML5">
            <DiHtml5 />
            <ProgressBar now={progress.html} />
          </div>
          <div className="tech-icons con-tech-icons" title="CSS3">
            <DiCss3 />
            <ProgressBar now={progress.css} />
          </div>
          <div className="tech-icons con-tech-icons" title="Bootstrap">
            <DiBootstrap />
            <ProgressBar now={progress.bootstrap} />
          </div>
          <div className="tech-icons con-tech-icons" title="Tailwind CSS">
            <SiTailwindcss />
            <ProgressBar now={progress.tailwind} />
          </div>
          <div className="tech-icons con-tech-icons" title="JavaScript">
            <DiJavascript1 />
            <ProgressBar now={progress.javascript} />
          </div>
          <div className="tech-icons con-tech-icons" title="TypeScript">
            <SiTypescript />
            <ProgressBar now={progress.typescript} />
          </div>
          <div className="tech-icons con-tech-icons" title="React">
            <DiReact />
            <ProgressBar now={progress.react} />
          </div>
        </div>
      </Col>
      <Col xs={12} md={6}>
        <h3 style={{ textAlign: "center", marginBottom: 20 }}>Back-End</h3>
        <div className="d-flex flex-wrap justify-content-center">
          <div className="tech-icons con-tech-icons" title="PHP">
            <DiPhp />
            <ProgressBar now={progress.php} />
          </div>
          <div className="tech-icons con-tech-icons" title="Symfony">
            <DiSymfony />
            <ProgressBar now={progress.symfony} />
          </div>
          <div className="tech-icons con-tech-icons" title="MySQL">
            <DiMysql />
            <ProgressBar now={progress.mysql} />
          </div>
          <div className="tech-icons con-tech-icons" title="MongoDB">
            <DiMongodb />
            <ProgressBar now={progress.mongodb} />
          </div>
          <div className="tech-icons con-tech-icons" title="PostgreSQL">
            <SiPostgresql />
            <ProgressBar now={progress.postgresql} />
          </div>
          <div className="tech-icons con-tech-icons" title="Kotlin">
            <SiKotlin />
            <ProgressBar now={progress.kotlin} />
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Techstack;
