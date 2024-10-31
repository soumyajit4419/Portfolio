import React, { useRef, useEffect, useState} from 'react';
//importar useNavigate
import { useNavigate } from 'react-router-dom';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Container, Row, Col, Button } from "react-bootstrap";
import image from './thumbnail.png';
import './Roadmap.css';
import LogoMuertos from "../../Assets/logoDia.png";
import Type from "../Home/Type";

//section1
import papel from "../../Assets/Parallax/Section1/papel.png";

//section2
import camino from "../../Assets/Parallax/Section2/CaminoTec.svg";
import arbol1 from "../../Assets/Parallax/Section2/arbol1.svg";
import arbol2 from "../../Assets/Parallax/Section2/arbol2.svg";
import arbol3 from "../../Assets/Parallax/Section2/arbol3.svg";
import posgrado from "../../Assets/Parallax/Section2/tecSVG.svg";

//section3
import qr from "../../Assets/Parallax/Section3/QR.svg";
import phone from "../../Assets/Parallax/Section3/phone.png";
import astronauta from "../../Assets/Parallax/Section3/astronauta.svg";
import saturno from "../../Assets/Parallax/Section3/Saturno.svg";

//section4
import test from "../../Assets/Parallax/Section4/test.svg";
import fondoTest from "../../Assets/Parallax/Section4/fondoTest.svg";
import e1 from "../../Assets/Parallax/Section4/e1.svg";
import e2 from "../../Assets/Parallax/Section4/e2.svg";
import e3 from "../../Assets/Parallax/Section4/e3.svg";
import e4 from "../../Assets/Parallax/Section4/e4.svg";
import e5 from "../../Assets/Parallax/Section4/e5.svg";
import e6 from "../../Assets/Parallax/Section4/e6.svg";
import e7 from "../../Assets/Parallax/Section4/e7.svg";
import e8 from "../../Assets/Parallax/Section4/e8.svg";
import e9 from "../../Assets/Parallax/Section4/e9.svg";
import e10 from "../../Assets/Parallax/Section4/e10.svg";

import {deploy} from '../../config';
import TiempoRestante from '../timer/Timer';
// Helper function to generate URLs
//<img src={url('bash')} style={{ width: '40%' }} alt="Bash" />
const url = (name, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;

function Roadmap() {

  //mostrar el timer si deploy es true

  const parallax = useRef(null);
  const [animate, setAnimate] = useState(false);

  const [showImage, setShowImage] = useState(false);
  const [timeLeft, setTimeLeft] = useState("");
  const navigate = useNavigate();

  const go_to_quiz = () => {
    navigate('/quiz');
  }
  // Activar la animación después de un breve retardo
  useEffect(() => {

    const timer = setTimeout(() => {
      setAnimate(true);
    }, 1000); // Retardo de 100 ms antes de iniciar la animación



    return () => clearTimeout(timer); // Limpieza del temporizador


  }, []);

  useEffect(() => {
    // Configuramos un intervalo para el desplazamiento automático cada 5 segundos
    const scrollInterval = setInterval(() => {
      // Verificamos que el parallax ref esté disponible
      if (parallax.current) {
        // Obtenemos la página actual y calculamos la siguiente
        const currentOffset = parallax.current.offset;
        const nextPage = (currentOffset + 1) % 4; // Cambia 4 por el número total de páginas
        parallax.current.scrollTo(nextPage);
      }
    }, 100000); // 5000 ms = 5 segundos
  
    // Limpieza del intervalo cuando el componente se desmonta
    return () => clearInterval(scrollInterval);
  }, []);


  const [styleEdificio, setStyleEdificio] = useState({
    width: '50%',
    marginLeft: '50%',
    marginTop: '8%',
    opacity: 1,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        // Oculta la imagen en pantallas menores a 480px
        setStyleEdificio({
          display: 'none',
        });
      } else if (window.innerWidth <= 1923 && window.innerWidth > 1200) {
        setStyleEdificio({
          width: '40%',
          marginLeft: '45%',
          marginTop: '10%',
          opacity: 1,
        });
      } else if (window.innerWidth <= 1200 && window.innerWidth > 768) {
        setStyleEdificio({
          width: '30%',
          marginLeft: '40%',
          marginTop: '12%',
          opacity: 1,
        });
      } else if (window.innerWidth <= 768) {
        setStyleEdificio({
          width: '80%',
          marginLeft: '10%',
          marginTop: '60%',
          opacity: 1,
        });
      } else {
        setStyleEdificio({
          width: '50%',
          marginLeft: '50%',
          marginTop: '8%',
          opacity: 1,
        });
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Ejecuta al montar el componente
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <div className='containerParallax'>
      <Parallax ref={parallax} pages={4}>
        {/* -------------------------------------------------------------------------  WELCOME AL ALTAR*/}
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#012b6d' }} />
        <ParallaxLayer offset={0} speed={-0.5} style={{ pointerEvents: 'none' }}>
          <img
            src={papel}
            className={animate ? 'img-slide-in' : ''} // Aplicar clase de animación
            style={{ width: '100%', marginTop: animate ? '-20%' : '-100%' }} // Ajustar el margin-top inicial
            alt="Satellite"
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
          }}
        />

        {/* Capa de servidor clickeable para la página 0 */}
        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >

          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 0 }} className="heading">
                  ¡Welcome!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    💀
                  </span>
                </h1>

                <h1 className="heading-name">
                  ALTAR DE
                  <strong className="main-name"> MUERTOS</strong>
                </h1>

                <div style={{ padding: 50, textAlign: "left" }}>
                  <Type />
                </div>
              </Col>

              <Col md={5} style={{ paddingBottom: 20 }}>
                <img
                  src={LogoMuertos}
                  alt="home pic"
                  className="wave"
                  style={{ width: "100%" }}
                />
              </Col>
            </Row>
            <div className='contador'> {deploy && (
                    <TiempoRestante />
            )}</div>
          </Container>
        </ParallaxLayer>

        {/* -------------------------------------------------------------------------  VISITANOS EN EL ALTAR*/}
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#021a2f' }} />

        {/* Capa de satélites para la página 1 */}
        

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} alt="Cloud" />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} alt="Cloud" />
        </ParallaxLayer>
        
        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} alt="Cloud" />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} alt="Cloud" />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 1 }}>
          <img src={camino} className='hide-on-mobile' style={{ width: '100vw', marginTop: '10vh' }} alt="Cloud" />
        </ParallaxLayer>
        {/** rreemplazar estas pr los arboles */}
        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 1 }}>
          <img src={arbol1} className='hide-on-mobile' style={{ width: '7%', marginLeft: '-70%', marginTop: '-3%', opacity: 0.65}} alt="Cloud" />
        </ParallaxLayer>
        <ParallaxLayer offset={1.1} speed={0.2} style={{ opacity: 0.9 }}>
          <img src={arbol3} className='hide-on-mobile' style={{width: '12%', marginLeft: '-90%', marginTop: '32%', opacity: 1}} alt="Cloud" />
        </ParallaxLayer>
        
        <ParallaxLayer offset={1} speed={0.6} style={{ opacity: 1 }}>
          <img src={arbol2} className='hide-on-mobile' style={{width: '14%', marginLeft: '-45%', marginTop: '29%', opacity: 1}} alt="Cloud" />
        </ParallaxLayer>


        <ParallaxLayer offset={1.3} speed={0.3} style={{ pointerEvents: 'none' }}>
          <img src={posgrado} className='edificio' style={styleEdificio} alt="Satellite" />
        </ParallaxLayer>

        {/* VISITA EL ALTAR */}
        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: 'flex',
            alignItems: 'flex-start',    // Alinea el contenido en la parte superior
            justifyContent: 'flex-start', // Alinea el contenido a la izquierda
            paddingTop: '50px',          // Espacio en la parte superior
            paddingLeft: '50px'          // Espacio a la izquierda
          }}
        >
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 0, textAlign: "left" }} className="heading">
                  ¡Visitanos!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    📍
                  </span>
                </h1>

                <h1 className="heading-name" style={{ textAlign: "left" }}>
                  Edificio de
                  <strong className="main-name"> Posgrado</strong>
                </h1>

                {/* Instrucciones */}
                <div style={{ paddingTop: '20px', textAlign: 'left', fontSize: '1.2rem' }}>
                  <p>
                    El altar se ubica en el edificio de posgrado del <strong>Tecnológico Nacional de México Campus León</strong>, en el laboratorio de GPRO.
                  </p>
                  <p>
                    Estaremos disponibles para recibir visitas el <strong>viernes 1 de noviembre</strong> de <strong>12pm a 2pm</strong>.
                  </p>
                </div>

              </Col>
            </Row>
          </Container>
        </ParallaxLayer>


        {/* -------------------------------------------------------------------------  EXPERIMENTA LA REALIDAD AUMENTADA*/}
        {/* Capa de nubes en la página 2 */}
        <ParallaxLayer
          offset={2}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
          }}
        />
        {/* Capa de la Tierra para la página 2 */}
        <ParallaxLayer offset={2} speed={0.8} style={{ opacity: 0.8 }}>

          <img src={astronauta} style={{ display: 'block', width: '13%', marginLeft: '15%', marginTop: '8%' }} alt="Cloud" />
        </ParallaxLayer>
        <ParallaxLayer offset={2.2} speed={-0.1} style={{ opacity: 0.7 }}>
          <img src={qr} style={{ display: 'block', width: '10%', marginLeft: '60%', marginTop: '4%' }} alt="Cloud" />
        </ParallaxLayer>
        <ParallaxLayer offset={2.1} speed={0.7} style={{ pointerEvents: 'none' }}>
          <img src={phone} style={{ width: '30%', marginLeft: '56%', marginTop: '17%', transform: 'rotate(23deg)' }} alt="Satellite" />
        </ParallaxLayer>
        <ParallaxLayer offset={2.4} speed={-0.4} style={{ pointerEvents: 'none' }}>
          <img src={saturno} style={{ width: '16%', marginLeft: '56%', marginTop: '7%', transform: 'rotate(23deg)' }} alt="Satellite" />
        </ParallaxLayer>


        {/* Capa de clientes principales clickeable para la página 2 */}
        <ParallaxLayer
          offset={2}
          speed={0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => parallax.current.scrollTo(3)}
        >

          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 0, textAlign: "left" }} className="heading">
                  ¡Experimenta la <strong className="main-name"> Realidad Aumentada</strong>!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    🚀
                  </span>
                </h1>

                {/* Descripción de la fase */}
                <div style={{ paddingTop: '20px', textAlign: 'left', fontSize: '1.2rem' }}>
                  <p>
                    Explora en una experiencia interactiva de <strong>Realidad Aumentada</strong>, donde descubrirás información y logros de científicos destacados en la historia.
                  </p>
                  <p>
                    Podrás conocer a científicos pioneros y explorar sus contribuciones en diferentes campos de la ciencia, de una manera inmersiva y divertida.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </ParallaxLayer>


        {/* Nueva sección de Responde el Quiz */}
        <ParallaxLayer offset={3} speed={1} style={{ backgroundColor: '#002053' }} />
        {/* TEST*/}
        <ParallaxLayer offset={3.6} speed={0.5} style={{ pointerEvents: 'none' }}>
          <img src={fondoTest} style={{ width: '20%', marginLeft: '55%', marginTop: '-10%', }} alt="Satellite" />
        </ParallaxLayer>
        <ParallaxLayer offset={3.4} speed={-0.2} style={{ pointerEvents: 'none' }}>
          <img src={test} style={{ width: '16%', marginLeft: '55%', marginTop: '-8%', }} alt="Satellite" />
        </ParallaxLayer>

        {/* ECUACIONES */}
        <ParallaxLayer offset={3.4} speed={0.5} style={{ pointerEvents: 'none' }}>
          <img src={e1} style={{ width: '6%', marginLeft: '-50%', marginTop: '-10%', opacity: 0.5}} alt="Satellite" />
          <img src={e2} style={{ width: '13%', marginLeft: '10%', marginTop: '-25%', opacity: 1 }} alt="Satellite" />
        </ParallaxLayer>
        <ParallaxLayer offset={3.6} speed={-0.2} style={{ pointerEvents: 'none' }}>
          <img src={e3} style={{ width: '10%', marginLeft: '10%', marginTop: '-25%', opacity: 0.4 }} alt="Satellite" />
        </ParallaxLayer>
        <ParallaxLayer offset={3.6} speed={-0.2} style={{ pointerEvents: 'none' }}>
          <img src={e3} style={{ width: '10%', marginLeft: '10%', marginTop: '-25%', opacity: 0.8 }} alt="Satellite" />
        </ParallaxLayer>
        <ParallaxLayer offset={3.3} speed={0.1} style={{ pointerEvents: 'none' }}>
          <img src={e4} style={{ width: '18%', marginLeft: '20%', marginTop: '-8%', opacity: 0.4 }} alt="Satellite" />
        </ParallaxLayer>
        <ParallaxLayer offset={3.4} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={e5} style={{ width: '10%', marginLeft: '20%', marginTop: '17%', opacity: 0.7 }} alt="Satellite" />
        </ParallaxLayer>
        <ParallaxLayer offset={3.6} speed={0.1} style={{ pointerEvents: 'none' }}>
          <img src={e6} style={{ width: '10%', marginLeft: '-40%', marginTop: '10%', opacity: 0.8}} alt="Satellite" />
        </ParallaxLayer>
        <ParallaxLayer offset={3.3} speed={0.7} style={{ pointerEvents: 'none' }}>
          <img src={e7} style={{ width: '12%', marginLeft: '30%', marginTop: '10%', opacity: 0.2 }} alt="Satellite" />
        </ParallaxLayer>
        <ParallaxLayer offset={3.4} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={e8} style={{ width: '12%', marginLeft: '-20%', marginTop: '-10%', opacity: 0.4 }} alt="Satellite" />
        </ParallaxLayer>
        <ParallaxLayer offset={3.6} speed={0.7} style={{ pointerEvents: 'none' }}>
          <img src={e9} style={{ width: '7%', marginLeft: '-10%', marginTop: '5%', opacity: 0.3}} alt="Satellite" />
        </ParallaxLayer>
       
        

        <ParallaxLayer
          offset={3}
          speed={0.3}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => parallax.current.scrollTo(0)}
        >



          <ParallaxLayer
            offset={0}
            speed={0}
            factor={3}
            style={{
              backgroundImage: url('stars', true),
              backgroundSize: 'cover',
            }}
          />




          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 0, textAlign: "left" }} className="heading">
                  ¡Responde el <strong className="main-name"> Quiz</strong>!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    🚀
                  </span>
                </h1>
                {/* Descripción de la fase */}
                <div style={{ paddingTop: '20px', textAlign: 'left', fontSize: '1.2rem' }}>
                  <p>
                    Responde el quiz que te preparamos y demuestra tus conocimientos sobre los científicos más destacados de la historia.
                  </p>
                  <p>
                    Podrás obtener un premio sorpresa si logras responder correctamente todas las preguntas.
                  </p>
                </div>
              </Col>
            </Row>
           
          </Container>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Roadmap;
