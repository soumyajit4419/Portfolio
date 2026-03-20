import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour Ã  tous ! Je suis{" "}
            <span className="purple">Dioman Diakite</span> originaire de{" "}
            <span className="purple">Bamako, Mali</span>.
            <br />
            J'Ã©tudie actuellement le{" "}
            <span className="purple">dÃ©veloppement logiciel (L3)</span> Ã {" "}
            <span className="purple">ESIIA</span>.
            <br />
            Je suis titulaire d'un{" "}
            <span className="purple">
              Master 1 en Informatique de Gestion
            </span>{" "}
            (ESGIC, Bamako) et d'un{" "}
            <span className="purple">
              Bachelor en Informatique RÃ©seaux et SÃ©curitÃ©
            </span>{" "}
            (Ã‰cole Racine, Marrakech).
            <br />
            <br />
            En dehors du code, j'ai dÃ©veloppÃ© une forte passion pour le{" "}
            <span className="purple">trading</span>, et je suis convaincu que
            les marchÃ©s financiers peuvent Ãªtre un levier pour bÃ¢tir une
            fortune.
            <br />
            <br />
            Mon parcours a longtemps Ã©vitÃ© le dÃ©veloppement. AprÃ¨s mon{" "}
            <span className="purple">
              bac en Sciences Exactes (2017, 13,78)
            </span>
            , je me suis orientÃ© vers des filiÃ¨res oÃ¹ l'on codait peu :{" "}
            <span className="purple">Informatique de Gestion</span>, puis{" "}
            <span className="purple">RÃ©seaux &amp; SÃ©curitÃ©</span>.
            <br />
            <br />
            Le trading m'a amenÃ© Ã  tester une stratÃ©gie manuelle avec un{" "}
            <span className="purple">win rate d'environ 70%</span>. En voulant
            automatiser, j'ai collectÃ© beaucoup de donnÃ©es et j'ai dÃ©couvert
            ma passion pour la <span className="purple">data</span> et le
            dÃ©veloppement.
            <br />
            <br />
            C'est dans cette optique que je me suis retrouvÃ© en{" "}
            <span className="purple">France</span> : je poursuis un{" "}
            <span className="purple">bachelor en dÃ©veloppement web</span> pour
            consolider mes bases avant un{" "}
            <span className="purple">master en Data</span>.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Parcours international :{" "}
              <span className="purple">Mali - Maroc - France</span>
            </li>
            <li className="about-activity">
              <ImPointRight /> Focus actuel :{" "}
              <span className="purple">DÃ©veloppement + Data</span>
            </li>
            <li className="about-activity">
              <ImPointRight /> Objectif :{" "}
              <span className="purple">
                Automatiser des stratÃ©gies de trading
              </span>
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Transformer la curiositÃ© en compÃ©tences, et les donnÃ©es en
            dÃ©cisions."
          </p>
          <footer className="blockquote-footer">Dioman</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
