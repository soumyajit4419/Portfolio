import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Tilt from 'react-parallax-tilt'
import myImg from '../../assets/avatar.svg'
import socialIcons from '../../data/socialIcons.js'

function Introduction() {
  return (
    <Container
      fluid
      className="introduction"
      data-testid="introduction-component"
    >
      <Row>
        {/* Text section */}
        <Col md={8} className="introduction-description">
          {/* Title */}
          <h1 style={{ fontSize: '2.6em' }} data-testid="intro-title">
            LET ME <span className="purple" children="INTRODUCE" /> MYSELF
          </h1>

          {/* Body */}
          <p className="introduction-body" data-testid="intro-body">
            I fell in love with programming and I have at least learnt
            something, I think… 🤷‍♂️
            <br />
            <br />
            I am fluent in classics like
            <i
              children={
                <b className="purple" children=" C++, Javascript and Go." />
              }
            />
            <br />
            <br />
            My field of Interest's are building new &nbsp;
            <i>
              <b className="purple" children="Web Technologies and Products" />{' '}
              and also in areas related to
              <b className="purple" children=" Blockchain." />
            </i>
            <br />
            <br />
            Whenever possible, I also apply my passion for developing products
            with
            <b className="purple" children=" Node.js" /> and
            <i>
              <b
                className="purple"
                children=" Modern Javascript Library and Frameworks"
              />
            </i>
            &nbsp; like
            <i>
              <b className="purple" children=" React.js and Next.js" />
            </i>
          </p>
        </Col>

        {/* Image section */}
        <Col md={4} className="myAvtar" data-testid="avatar-container">
          <Tilt>
            <img
              src={myImg}
              className="img-fluid"
              alt="avatar"
              data-testid="intro-avatar"
            />
          </Tilt>
        </Col>
      </Row>

      {/* Social links */}
      <Row>
        <Col md="12" className="introduction-social">
          {/* Title */}
          <h1 children="FIND ME ON" data-testid="find-me-on" />

          {/* Caption */}
          <p>
            Feel free to <span className="purple" children="connect" /> with me
          </p>

          {/* Social icons */}
          <ul className="introduction-social-links" data-testid="social-links">
            {socialIcons.map((socialIcon, index) => (
              <li className="social-icons" key={index}>
                <a
                  href={socialIcon.link}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  data-testid={`social-link-${index}`}
                >
                  {socialIcon.icon}
                </a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default Introduction
