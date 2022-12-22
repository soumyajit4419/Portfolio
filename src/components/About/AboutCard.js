import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';


function AboutCard() {
  return (
    <div>
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Eshan Jairath </span>
            from New Delhi, India
            currenlty living in Newcastle Upon Tyne, United Kingdom.
            I did my Bachelors in Computer Science Engineering from <a className="purple about_links" href = 'https://www.srmist.edu.in/'> SRM University</a> Sonipat, Delhi NCR and Masters in Artificial Intelligence from <a className="purple about_links" href="https://www.northumbria.ac.uk/?ds_rl=1265464&ds_rl=1265464&gclid=Cj0KCQiA14WdBhD8ARIsANao07iBcxrMUyHnbQWp0sObtO2Am1MUU4jY61bw7TUvrxP3DKxldoi23S8aAvYpEALw_wcB&gclsrc=aw.ds"> Northumbria University, NewCastle,</a> United Kingdom .
            <br />
            

          </p>
          

          
          <p style={{ color: "rgb(155 126 172)" }}>
            "Life Only Make Sense When you force it to"{" "}
          </p>
          <footer className="blockquote-footer">Bruce Wayne</footer>
        </blockquote>
      </Card.Body>
    </Card>


    </div>
  );
}

export default AboutCard;
