import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import website1 from '../../Assets/Projects/website.png';
import website2 from '../../Assets/Projects/website2.png';
import website3 from '../../Assets/Projects/website3.png';
import wallet1 from '../../Assets/Projects/wallet1.jpg';
import wallet2 from '../../Assets/Projects/wallet2.jpg';
import wallet3 from '../../Assets/Projects/wallet3.jpg';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wallet1}
              isBlog={false}
              title="ox wallet android"
              description="a non custodial wallet build with flutter and python The wallet is able to create a new wallet, import a wallet using seed phrase and private key. The wallet is able to send and receive tokens from the wallet. The wallet is able to swap tokens using uniswap v2."
              ghLink="https://github.com/bobspange/OxWallet"
              demoLink="https://play.google.com/store/apps/details?id=app.oxwallet&hl=en"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wallet3}
              isBlog={false}
              title="ox wallet android"
              // description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/bobspange/OxWallet"
              demoLink="https://play.google.com/store/apps/details?id=app.oxwallet&hl=en"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={website2}
              isBlog={false}
              title="oxWallet web"
              description="a website build with Next.js and python which show charts and price of various tokens. The website is able to show the top trending tokens and the top gainers and losers. "
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://oxwallet.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={website3}
              isBlog={false}
              title="oxWallet web"
              // description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wallet2}
              isBlog={false}
              title="ox wallet android"
              // description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={website1}
              isBlog={false}
              title="oxWallet web"
              // description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              // Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
