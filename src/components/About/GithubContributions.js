import React from 'react'
import { Row } from 'react-bootstrap'
import GitHubCalendar from 'react-github-calendar'

function GithubContributions() {
  /* Github username */
  const gitHubUsername = 'soumyajit4419'

  return (
    <Row
      style={{ justifyContent: 'center', paddingBottom: '10px' }}
      data-testid="githubcontributions-component"
    >
      {/* Title */}
      <h1 className="project-heading" style={{ paddingBottom: '20px' }}>
        Days I <strong className="purple" children="Code" />
      </h1>

      {/* Github Calendar */}
      <GitHubCalendar
        username={gitHubUsername}
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
  )
}

export default GithubContributions
