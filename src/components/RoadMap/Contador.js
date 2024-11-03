import React, { useRef, useEffect, useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Container, Row, Col, Button } from "react-bootstrap";
import image from './thumbnail.png';
import './Roadmap.css';
import LogoMuertos from "../../Assets/logoDia.png";
import Type from "../Home/Type";

//section1
import papel from "../../Assets/Parallax/Section1/papel.png";

//section3
import qr from "../../Assets/Parallax/Section3/QR.svg";
import phone from "../../Assets/Parallax/Section3/phone.png";
import astronauta from "../../Assets/Parallax/Section3/astronauta.svg";
import saturno from "../../Assets/Parallax/Section3/Saturno.svg";

// Helper function to generate URLs
//<img src={url('bash')} style={{ width: '40%' }} alt="Bash" />
const url = (name, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;

function Roadmap() {
  


  const parallax = useRef(null);
  const [animate, setAnimate] = useState(false);

  const [showImage, setShowImage] = useState(false);
  const [timeLeft, setTimeLeft] = useState("");
  const [isAppearing, setisAppearing] = useState({ hours: false, minutes: false, seconds: false });

  const [deploy, setDeploy] = useState(true); // Variable de estado para deploy


  useEffect(() => {
       // Solo ejecutar si deploy es true
       if (!deploy) {
        setShowImage(true);
        return; // No ejecutar el temporizador si deploy es false
      }
    const targetDate = new Date("2024-11-01T12:00:00");
  
    const checkDateAndUpdateState = () => {
      const now = new Date();
      const difference = targetDate - now;
  
      // Verifica si la fecha actual es el 1 de noviembre a las 12 PM
      if (now >= targetDate && now < new Date(targetDate.getTime() + 1000 * 60 * 60)) {
        setShowImage(true);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 }); // Resetea el tiempo restante
      } else {
        if (difference > 0) {
          const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
          // Verifica y actualiza el estado de tiempo
          setTimeLeft(prev => {
            // Comprueba si hay cambios en las horas, minutos o segundos
            const newTimeLeft = { hours, minutes, seconds };
            const newisAppearing = {
              hours: prev.hours !== newTimeLeft.hours,
              minutes: prev.minutes !== newTimeLeft.minutes,
              seconds: prev.seconds !== newTimeLeft.seconds,
            };
            setisAppearing(newisAppearing);
            return newTimeLeft;
          });
        } else {
          setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
          setShowImage(false);
        }
      }
    };
  
    // Ejecuta la función inicialmente
    checkDateAndUpdateState();
  
    // Actualiza el contador cada segundo
    const timer = setInterval(() => {
      checkDateAndUpdateState();
    }, 1000);
  
    // Temporizador de animación
    const animationTimer = setTimeout(() => {
      setAnimate(true);
    }, 1000); // Retardo de 1000 ms antes de iniciar la animación
  
    return () => {
      clearInterval(timer); // Limpieza del temporizador del contador
      clearTimeout(animationTimer); // Limpieza del temporizador de animación
    };
  }, []);
  
  
  // Resetea el estado de disolución después de 0.5 segundos
  useEffect(() => {
    const resetDissolving = setTimeout(() => {
      setisAppearing({ hours: false, minutes: false, seconds: false });
    }, 500); // Cambiar a 500 ms para el efecto de disolución

    return () => {
      clearTimeout(resetDissolving); // Limpieza del temporizador de reinicio de disolución
    };
  }, [isAppearing]); // Se activa cuando `isAppearing` cambia


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

        <Col md={5} style={{ paddingBottom: 20, position: "relative" }}>
          {/* Mostrar la imagen solo si showImage es verdadero */}
          {showImage && (
            <img
              src={LogoMuertos}
              alt="home pic"
              className={`wave ${animate ? "animate" : ""}`} // Agregar clase de animación si animate es verdadero
              style={{ maxHeight: "350px" }}
            />
          )}
          {/* Mostrar el tiempo restante en el mismo lugar que la imagen */}
          {!showImage && (
           <div className="countdown-timer">
           <div className={`time-unit ${isAppearing.hours ? 'appear' : ''}`}>
             {timeLeft.hours}
             <span>Horas</span>
           </div>
           <div className={`time-unit ${isAppearing.minutes ? 'appear' : ''}`}>
             {timeLeft.minutes}
             <span>Minutos</span>
           </div>
           <div className={`time-unit ${isAppearing.seconds ? 'appear' : ''}`}>
             {timeLeft.seconds}
             <span>Segundos</span>
           </div>
         </div>
         
         
          
          )}
        </Col>
      </Row>
    </Container>
        </ParallaxLayer>

        {/* -------------------------------------------------------------------------  VISITANOS EN EL ALTAR*/}
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#021a2f' }} />
        
        {/* Capa de satélites para la página 1 */}
        <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} alt="Satellite" />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} alt="Cloud" />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} alt="Cloud" />
        </ParallaxLayer>
        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} alt="Cloud" />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} alt="Cloud" />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} alt="Cloud" />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} alt="Cloud" />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} alt="Cloud" />
          
          
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
        <ParallaxLayer offset={2.2} speed={-0.1} style={{ opacity: 0.7}}>
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
        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} alt="Cloud" />
          <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} alt="Cloud" />
        </ParallaxLayer>
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
