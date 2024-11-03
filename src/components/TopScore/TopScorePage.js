import React, { useEffect, useState } from "react";
import { Container, ListGroup } from "react-bootstrap";
import { FaMedal } from "react-icons/fa"; // Icono para las medallas
import { useNavigate } from "react-router-dom";
import { database } from '../Quiz/firebaseConfig';
import { ref, onValue } from 'firebase/database';
import './score.css';
import Particle from "../Particle";

function TopScorePage() {
  const navigate = useNavigate();
  const [topScores, setTopScores] = useState([]);

  // Función para obtener los mejores puntajes desde Firebase
  useEffect(() => {
    const scoresRef = ref(database, 'scores');

    onValue(scoresRef, (snapshot) => {
      const scoresData = snapshot.val();
      if (scoresData) {
        const scoresArray = Object.values(scoresData).sort((a, b) => b.score - a.score);
        setTopScores(scoresArray.slice(0, 5));
      }
    });
  }, []);

  const handlePlay = () => {
    navigate("/quiz/game");
  };

  // Función para mostrar el icono según la posición
  const getMedalIcon = (index) => {
    if (index === 0) return <FaMedal className="icon trophy-gold" />;
    if (index === 1) return <FaMedal className="icon trophy-silver" />;
    if (index === 2) return <FaMedal className="icon trophy-bronze" />;
    return null;
  };

  // Función para formatear el tiempo en minutos y segundos
  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes} min ${seconds} seg`;
  };

  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          ¿Sabes quienes son los 10 <strong className="purple">mejores</strong> jugadores?
        </h1>
        <p style={{ color: "white" }}>
          ¡Realiza el quiz y obtén el mayor puntaje!
        </p>
        
        <ListGroup>
          {topScores.map((player, index) => (
            <ListGroup.Item key={index} className="list-group-item">
              <div>
                {getMedalIcon(index)} 
                <span>{index + 1}. <strong>{player.name}</strong></span>
              </div>
              <span>{player.score} puntos</span>
              <br />
              {/* Mostrar el tiempo en formato minutos y segundos */}
              <span>{formatTime(player.totalTime)}</span>
            </ListGroup.Item>
          ))}
        </ListGroup>

      </Container>

      <Particle />
    </Container>
  );
}

export default TopScorePage;
