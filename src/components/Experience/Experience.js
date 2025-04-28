import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function Experience() {
  const [activeIndex, setActiveIndex] = useState(null);

  const experiences = [
    {
      title: "DevOps Intern",
      company: "ZeroSploit",
      duration: "March 2025 - Present",
      details: [
        "Focused on containerization and orchestration using Docker and Kubernetes (k8s).",
        "Designed and deployed the IRIS application on Kubernetes clusters for internal use.",
        "Created Helm charts to automate application deployments and managed Kubernetes networking and storage resources.",
        "Improved cluster monitoring and logging using Prometheus and Grafana.",
      ],
    },
    {
      title: "Cloud DevOps Engineer Intern",
      company: "iVolve Technologies",
      duration: "February 2025 - April 2025",
      details: [
        "Worked on multiple real-world cloud and DevOps projects involving AWS, CI/CD automation, and infrastructure deployment.",
        "Designed and deployed scalable cloud infrastructure on AWS using Terraform and CloudFormation.",
        "Built end-to-end CI/CD pipelines using Jenkins, GitHub Actions, and integrated Dockerized applications.",
        "Managed Kubernetes clusters (EKS) for application deployment, scaling, and high availability.",
        "Collaborated with cross-functional teams to implement monitoring solutions using CloudWatch and Prometheus.",
        "Applied DevOps security best practices including IAM hardening, secrets management, and VPC configurations.",
      ],
    },
    {
      title: "Cloud DevOps Accelerator Trainee",
      company: "National Telecommunications Institute (NTI)",
      duration: "December 2024 - February 2025",
      details: [
        "Completed intensive DevOps training covering AWS, Terraform, Kubernetes, Jenkins, Docker, and Linux system administration.",
        "Built and deployed cloud infrastructure using AWS services like EC2, S3, IAM, and VPC.",
        "Developed CI/CD pipelines to automate application deployment processes using Jenkins and GitHub Actions.",
        "Containerized and deployed applications with Docker and Kubernetes.",
        "Configured monitoring and alerting systems using CloudWatch, Prometheus, and Grafana.",
        "Learned Linux administration, Bash scripting, cloud security, networking basics, and OpenStack fundamentals.",
      ],
    },
  ];
  

  const toggleBubble = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Experience</strong>
        </h1>
        <p style={{ color: "white", textAlign: "center" }}>
          Professional milestones and achievements.
        </p>
        <p style={{ color: "white", textAlign: "center" }}>
        Click on the dots to view details about each experience.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={6} className="experience-timeline">
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div
                  className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
                  key={index}
                >
                  <div
                    className="timeline-dot"
                    onClick={() => toggleBubble(index)}
                  >
                    <div className="timeline-dot-inner" />
                  </div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">{exp.title}</h3>
                    <p className="timeline-company">{exp.company}</p>
                    <p className="timeline-duration">{exp.duration}</p>
                    {activeIndex === index && (
                      <div className="timeline-bubble">
                        <ul>
                          {exp.details.map((detail, i) => (
                            <li key={i}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;