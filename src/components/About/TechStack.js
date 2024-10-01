import React from 'react'
import { Col, Row } from 'react-bootstrap'
import techStackData from '../../data/techStackData.js'

function TechStack() {
  return (
    <Row className="stack-row" data-testid="techstack-component">
      {/* Title */}
      <h1 className="project-heading" data-testid="techstack-title">
        Professional <strong className="purple" children="Skillset" />
      </h1>

      {/* Tech stack */}
      {techStackData.map((tech, index) => (
        <Col
          xs={4}
          md={2}
          className="tech-icons"
          key={index}
          data-testid={`techstack-item-${index}`}
        >
          {tech.icon}
          <div
            className="stack-text purple"
            children={tech.text}
            data-testid={`techstack-text-${index}`}
          />
        </Col>
      ))}
    </Row>
  )
}

export default TechStack
