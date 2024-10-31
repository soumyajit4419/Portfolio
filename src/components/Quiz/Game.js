import React, { useState, useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Confetti from 'react-confetti';
import data from './questions.json';
import { database } from './firebaseConfig';
import { ref, set } from 'firebase/database';
import { useNavigate } from "react-router-dom";

const Game = () => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState(''); // Estado para el correo electrónico
  const [isNicknameSet, setIsNicknameSet] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(10);
  const maxTime = 10;
  const [showConfetti, setShowConfetti] = useState(false);
  const [startTime, setStartTime] = useState(0); // Estado para el tiempo de inicio

  const navigate = useNavigate();

  // Control del temporizador
  useEffect(() => {
    if (isNicknameSet && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleNextQuestion();
    }
  }, [timeLeft, isNicknameSet]);

  useEffect(() => {
    // Reiniciar el temporizador al cambiar de pregunta
    setTimeLeft(maxTime);
  }, [currentQuestion]);

  const handleAnswerOptionClick = (answer) => {
    setSelectedAnswer(answer);
    handleNextQuestion(answer);
  };

  const handleNextQuestion = (answer) => {
    const current = data.questions[currentQuestion];

    if (answer === current.correct_answer) {
      setScore(score + current.score);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < data.questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);

      // Calcular el tiempo total (en milisegundos) y guardar el puntaje
      const totalTime = Date.now() - startTime; // Tiempo total en milisegundos
      saveScore(nickname, email, score, totalTime);
    }

    setSelectedAnswer(null);
  };

  // Función para guardar el puntaje en Firebase
  const saveScore = (name, email, score, totalTime) => {
    const scoresRef = ref(database, 'scores/' + name);

    set(scoresRef, {
      name: name,
      email: email, // Guardar el correo electrónico
      score: score,
      totalTime: totalTime, // Guardar el tiempo total en milisegundos
      timestamp: Date.now()
    }).then(() => {
      console.log('Puntaje guardado en Firebase');
    }).catch((error) => {
      console.error('Error al guardar el puntaje: ', error);
    });
  };

  const handleGoToTopScores = () => {
    navigate("/resume");
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setTimeLeft(maxTime);
    setStartTime(Date.now()); // Reiniciar el tiempo de inicio
  };

  const handleNicknameSubmit = (e) => {
    e.preventDefault();
    if (nickname.trim() !== '' && email.trim() !== '') {
      setIsNicknameSet(true);
      setStartTime(Date.now()); // Guardar el tiempo de inicio al empezar el cuestionario
    }
  };

  return (
    <div className="Container-game">
      <div className="quiz-container">
        {!isNicknameSet ? (
          <div className="nickname-section">
            <h2>Por favor, ingresa tu nombre o apodo y tu correo:</h2>
            <form onSubmit={handleNicknameSubmit}>
              <input
                type="text"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                placeholder="Tu nombre o apodo"
                required
              />
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                required
              />
              <br />
              <button className='btn-form' type="submit">Comenzar</button>
            </form>
          </div>
        ) : showScore ? (
          <div className="score-section">
            {showConfetti && <Confetti />}
            <h2>{nickname}, tu puntuación es {score} de {data.questions.reduce((acc, q) => acc + q.score, 0)}</h2>
            <button onClick={handleGoToTopScores}>Mejores puntuaciones</button>
          </div>
        ) : (
          <div className="question-section">
            <div style={{ marginBottom: '20px' }}>
              <LinearProgress
                variant="determinate"
                value={(timeLeft / maxTime) * 100}
                sx={{
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: '#d3d3d3',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: timeLeft <= 3 ? '#f44336' : '#3e98c7',
                  },
                }}
              />
            </div>
            <div className="question-count">
              <span>Pregunta {currentQuestion + 1}</span>/{data.questions.length}
            </div>
            <div className="question-text">
              <h3>{data.questions[currentQuestion].question}</h3>
            </div>
            <div className="answer-section">
              {data.questions[currentQuestion].options.map((option) => (
                <button
                  key={option}
                  className={`answer-button ${selectedAnswer === option ? 'selected' : ''}`}
                  onClick={() => handleAnswerOptionClick(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Game;
