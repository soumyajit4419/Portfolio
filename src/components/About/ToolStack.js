import React from 'react'
import { Col, Row } from 'react-bootstrap'
import toolStackData from '../../data/toolStackData.js'

function ToolStack() {
  return (
    <Row className="stack-row" data-testid="toolstack-component">
      {/* Title */}
      <h1 className="project-heading" data-testid="toolstack-title">
        <strong className="purple" children="Tools" /> I use
      </h1>

      {/* Tool stack */}
      {toolStackData.map((tool, index) => (
        <Col
          xs={4}
          md={2}
          className="tech-icons"
          key={index}
          data-testid={`toolstack-item-${index}`}
        >
          {tool.icon}
          <div
            className="stack-text purple"
            data-testid={`toolstack-text-${index}`}
            children={tool.text}
          />
        </Col>
      ))}
    </Row>
  )
}

export default ToolStack
