import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ai_900 from "../../Assets/Certifications/AI-900.png"
import dp_900 from "../../Assets/Certifications/dp-900.png"
import ML from "../../Assets/Certifications/Machine--Learning.jpg"
import DL from "../../Assets/Certifications/DL.jpg"
import python from "../../Assets/Certifications/python.png"
import web from "../../Assets/Certifications/web.png"

function Certifications() {
  return (
    <div className='container'>
    <div className="mt-5 pt-5">
    <h1> MY <strong className="purple"> CERTIFICATIONS</strong></h1>
    
    <div>
    <Row className="mt-5">
    <Col md ='4' className="cerfication_logo">
    <Card className='certification_card'>
    <a href="https://www.credly.com/badges/b95b4fdb-b5ee-4575-9915-afdcd216fc1c?source=linked_in_profile"> <Card.Img variant="top" className='certification_img'  src={ai_900}/></a>

      <Card.Body>
        <Card.Title className='purple'>Microsoft Certified: Azure AI Fundamentals</Card.Title>
        <p className='supporting_text'>Issued by Microsoft.</p>
        <Card.Text>
        Earners of the Azure AI Fundamentals certification have demonstrated foundational knowledge of machine learning (ML) and artificial intelligence (AI) concepts and related Microsoft Azure services.
        </Card.Text>
        <Button className="Cert_card_btns" href="https://www.credly.com/badges/b95b4fdb-b5ee-4575-9915-afdcd216fc1c?source=linked_in_profile">View Badge</Button>

        <Button className="Cert_card_btns" href="https://learn.microsoft.com/en-us/certifications/azure-ai-fundamentals/">About Certification</Button>
      </Card.Body>
    </Card>
    </Col>


    <Col md ='4' className="cerfication_logo">
    <Card className='certification_card '>
    <a href="https://www.credly.com/badges/b95b4fdb-b5ee-4575-9915-afdcd216fc1c?source=linked_in_profile"> <Card.Img variant="top" className='certification_img'  src={dp_900}/></a>

      <Card.Body>
        <Card.Title className='purple'>Microsoft Certified: Azure Data Fundamentals</Card.Title>
        <p className='supporting_text'>Issued by Microsoft.</p>
        <Card.Text>
        Earners of the Azure Data Fundamentals certification have demonstrated foundational knowledge of core data concepts and how they are implemented using Microsoft Azure data services.
        </Card.Text>
        <Button className="Cert_card_btns" href="https://www.credly.com/badges/20dfa432-f24c-4021-9c49-b006ad342861/public_url">View Badge</Button>

        <Button className="Cert_card_btns" href="https://learn.microsoft.com/en-us/certifications/azure-data-fundamentals/">About Certification</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col md ='4' className="cerfication_logo">
    <Card className='certification_card '>
    <a href="https://www.credly.com/badges/b95b4fdb-b5ee-4575-9915-afdcd216fc1c?source=linked_in_profile"> <Card.Img variant="top" className='certification_img'  src={ML}/></a>

      <Card.Body>
        <Card.Title className='purple'>Machine Learning A-Z : Python & R in Data Science </Card.Title>
        <p className='supporting_text'>Issued by Udemy on (06/2021) .</p>
        <Card.Text>
        <ul>
          <li>
          Mastered Machine Learning in Python
          </li>
          <li>
          Build Machine Learning models and know how to combine them to solve any problem.
          </li>
          <li>
          Reinforcement Learning, NLP and Deep Learning
          </li>
        </ul>
        </Card.Text>
        <Button className="Cert_card_btns" href="https://www.udemy.com/certificate/UC-501f8a89-94c7-4dea-92c6-da0e0a12bee2/">View Certification</Button>

        <Button className="Cert_card_btns" href="https://www.udemy.com/course/machinelearning/">About Certification</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>

    <Row className="mt-5">
    <Col md ='4' className="cerfication_logo">
    <Card className='certification_card '>
    <a href="https://www.credly.com/badges/b95b4fdb-b5ee-4575-9915-afdcd216fc1c?source=linked_in_profile"> <Card.Img variant="top" className='certification_img'  src={DL}/></a>

      <Card.Body>
        <Card.Title className='purple'>Deep Learning A-Z : Hands-on Artificial Neural Networks  </Card.Title>
        <p className='supporting_text'>Issued by Udemy on (08/2021) .</p>
        <Card.Text>
        <ul>
          <li>
          Gained hands on experience with Artificial, Convolutional and Recurrent Neural Networks by working on different datasets and projects.
          </li>
          <li>
          Self-Organizing Maps, Boltzmann Machines, AutoEncoders  in practice.
          </li>
        </ul>
        </Card.Text>
        <Button className="Cert_card_btns" href="https://www.udemy.com/certificate/UC-64e4a830-3991-42b9-ac5f-2adea6ba4aed/">View Certification</Button>

        <Button className="Cert_card_btns" href="https://www.udemy.com/course/deeplearning/">About Certification</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col md ='4' className="cerfication_logo">
    <Card className='certification_card '>
    <a href="https://www.credly.com/badges/b95b4fdb-b5ee-4575-9915-afdcd216fc1c?source=linked_in_profile"> <Card.Img variant="top" className='certification_img'  src={python}/></a>

      <Card.Body>
        <Card.Title className='purple pt-4'>Python - The complete python bootcamp</Card.Title>
        <p className='supporting_text'>Issued by Udemy on (03/2020) .</p>
        <Card.Text>
        <ul>
          <li>
          Python 3.
          </li>
          <li>
          Data Structures and algorithms in python.
          </li>
          <li>
          GUIs in the Jupyter Notebooks.
          </li>
          <li>
          Object Oriented Programming with classes.
          </li>
          <li>
          Jupyter Notebooks  and .py files
          </li>
          <li>
          Solving complex problems.
          </li>
        </ul>
        </Card.Text>
        <Button className="Cert_card_btns" href="https://www.udemy.com/certificate/UC-9d67e1f1-f4b1-4054-91df-7bcf9c6e3618/">View Certification</Button>

        <Button className="Cert_card_btns" href="https://www.udemy.com/course/complete-python-bootcamp/">About Certification</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col md ='4' className="cerfication_logo">
    <Card className='certification_card '>
    <a href="https://www.credly.com/badges/b95b4fdb-b5ee-4575-9915-afdcd216fc1c?source=linked_in_profile"> <Card.Img variant="top" className='certification_img'  src={web}/></a>

      <Card.Body>
        <Card.Title className='purple pt-4'>Web Development - The Complete web development bootcamp. </Card.Title>
        <p className='supporting_text'>Issued by Udemy on (08/2020) .</p>
        <Card.Text>
        <ul>
          <li>
          HTML, CSS, Javascript
          </li>
          <li>
          Bootstrap
          </li>
          <li>
          Node.js
          </li>
          <li>
          React.js (Redux and context API).
          </li>
          <li>
          Express.js
          </li>
          <li>Responsive Web Applications</li>
        </ul>
        </Card.Text>
        <Button className="Cert_card_btns" href="https://www.udemy.com/certificate/UC-ecac4449-0a77-470b-bd10-339e5cd7174f/">View Certification</Button>

        <Button className="Cert_card_btns" href="https://www.udemy.com/course/the-complete-web-development-bootcamp/">About Certification</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>

    
    </div>
    

  </div>
    </div>
  )
}

export default Certifications
