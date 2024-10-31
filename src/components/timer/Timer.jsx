import React, { useState, useEffect } from 'react';
import './Timer.css';

const TiempoRestante = () => {
    const fechaObjetivo = new Date('2024-11-01T12:00:00');

    const calcularTiempoRestante = () => {
        const ahora = new Date();
        const diferencia = fechaObjetivo - ahora;

        if (diferencia <= 0) {
            return { dias: 0, horas: 0, minutos: 0, segundos: 0 };
        }

        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        return { dias, horas, minutos, segundos };
    };

    const [tiempoRestante, setTiempoRestante] = useState(calcularTiempoRestante);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setTiempoRestante(calcularTiempoRestante());
        }, 1000);
        return () => clearInterval(intervalo);
    }, []);

    return (
        <div className="timer-container">
            <h2 className="timer-header">Tiempo Restante:</h2>
            <div className="timer-value">
                <div className="timer-segment">
                    <p>{tiempoRestante.dias}</p>
                    <span className="timer-label">Días</span>
                </div>
                <div className="timer-segment">
                    <p>{tiempoRestante.horas}</p>
                    <span className="timer-label">Horas</span>
                </div>
                <div className="timer-segment">
                    <p>{tiempoRestante.minutos}</p>
                    <span className="timer-label">Minutos</span>
                </div>
                <div className="timer-segment">
                    <p>{tiempoRestante.segundos}</p>
                    <span className="timer-label">Segundos</span>
                </div>
            </div>
        </div>
    );
};

export default TiempoRestante;
