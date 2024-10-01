import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { ImPointRight } from 'react-icons/im'
import laptopImg from '../../assets/about.png'
import sideActivities from '../../data/sideActivities'

function AboutMe() {
  return (
    <Row
      style={{ justifyContent: 'center', padding: '10px' }}
      data-testid="aboutme-component"
    >
      <Col
        md={7}
        style={{
          justifyContent: 'center',
          paddingTop: '30px',
          paddingBottom: '50px'
        }}
      >
        {/* Title */}
        <h1
          style={{ fontSize: '2.1em', paddingBottom: '20px' }}
          data-testid="about-title"
        >
          Know Who <strong className="purple" children="I AM" />
        </h1>

        <Card className="quote-card-view">
          <Card.Body>
            {/* Body */}
            <blockquote className="blockquote mb-0" data-testid="about-body">
              <p style={{ textAlign: 'justify' }}>
                Hi Everyone, I am{' '}
                <span className="purple">Soumyajit Behera </span>
                from <span className="purple"> Bhubaneswar, India.</span>
                <br />
                I am currently employed as a software developer at Juspay.
                <br />
                I have completed Integrated MSc (IMSc) in Maths and Computing at
                BIT Mesra.
                <br />
                <br />
                Apart from coding, some other activities that I love to do!
              </p>

              {/* Activities list */}
              <ul data-testid="about-activities">
                {sideActivities.map((activity, i) => (
                  <li
                    key={i}
                    className="about-activity"
                    data-testid={`activity-${i}`}
                  >
                    <ImPointRight /> {activity}
                  </li>
                ))}
              </ul>

              {/* Quote */}
              <p
                style={{ color: 'rgb(155 126 172)' }}
                data-testid="about-quote"
              >
                "Strive to build things that make a difference!"{' '}
              </p>
              <footer className="blockquote-footer" data-testid="about-footer">
                Soumyajit
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      </Col>

      {/* About Me Image */}
      <Col
        md={5}
        style={{ paddingTop: '120px', paddingBottom: '50px' }}
        className="about-img"
        data-testid="about-image-container"
      >
        <img
          src={laptopImg}
          alt="about"
          className="img-fluid"
          data-testid="about-image"
        />
      </Col>
    </Row>
  )
}

export default AboutMe
