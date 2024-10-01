import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { BsGithub } from 'react-icons/bs'
import { CgWebsite } from 'react-icons/cg'

function ProjectCard(props) {
  return (
    <Card className="project-card-view" data-testid="project-card">
      {/* Project image */}
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        data-testid={`project-img-${props.index}`}
      />

      {/* Project details */}
      <Card.Body className="project-card-body">
        {/* Project title */}
        <Card.Title data-testid={`project-title-${props.index}`}>
          {props.title}
        </Card.Title>

        {/* Project description */}
        <Card.Text
          style={{ textAlign: 'justify' }}
          data-testid={`project-description-${props.index}`}
        >
          {props.description}
        </Card.Text>

        <div className="button-container">
          {/* GitHub button */}
          {props.ghLink && (
            <Button
              variant="primary"
              href={props.ghLink}
              target="_blank"
              data-testid={`github-link-${props.index}`}
            >
              <BsGithub /> &nbsp; GitHub
            </Button>
          )}

          {/* Demo button */}
          {props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: '10px' }}
              data-testid={`demo-link-${props.index}`}
            >
              <CgWebsite /> &nbsp; Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}

export default ProjectCard
