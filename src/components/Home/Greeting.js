import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Typewriter from 'typewriter-effect'
import homeLogo from '../../assets/home-main.svg'
import interestedRoles from '../../data/interestedRoles'

function Greeting() {
  /* Name to be displayed */
  const name = 'SOUMYAJIT BEHERA'

  return (
    <Row data-testid="greeting-component">
      <Col md={7} className="home-header">
        {/* Greeting */}
        <h1
          data-testid="greeting-text"
          style={{ paddingBottom: 15 }}
          className="heading"
        >
          Hi There!{' '}
          <span
            className="wave"
            role="img"
            aria-labelledby="wave"
            children="👋🏻"
            data-testid="wave-emoji"
          />
        </h1>

        {/* Name */}
        <h1 className="heading-name">
          I'M{' '}
          <strong
            className="main-name"
            children={name}
            data-testid="greeting-name"
          />
        </h1>

        {/* Roles */}
        <div
          style={{ padding: 50, textAlign: 'left' }}
          data-testid="greeting-roles"
        >
          <Typewriter
            options={{
              strings: interestedRoles,
              autoStart: true,
              loop: true,
              deleteSpeed: 50
            }}
          />
        </div>
      </Col>

      {/* Home Logo */}
      <Col md={5} style={{ paddingBottom: 20 }}>
        <img
          src={homeLogo}
          alt="home pic"
          className="img-fluid"
          style={{ maxHeight: '450px' }}
          data-testid="greeting-logo"
        />
      </Col>
    </Row>
  )
}

export default Greeting
