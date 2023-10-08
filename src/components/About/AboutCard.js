import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
		<Card className="quote-card-view">
			<Card.Body>
				<blockquote className="blockquote mb-0">
					<p style={{ textAlign: "justify" }}>
						Hi Everyone, I am <span className="purple">Gurvinder Dhillon </span>
						from <span className="purple"> Sunnyvale, CA</span>
						<br /> I work at GroupM as Senior Automation Engineer
						<br />
						Additionally, I do Test Automation Consulting and Training.
						<br />
						<br />
						Apart from coding, some other activities that I love to do!
					</p>
					<ul>
						<li className="about-activity">
							<ImPointRight /> Running
						</li>
						<li className="about-activity">
							<ImPointRight /> Writing Tech Blogs
						</li>
						<li className="about-activity">
							<ImPointRight /> Travelling
						</li>
					</ul>

					<p style={{ color: "rgb(155 126 172)" }}>
						"Strive to be a Good Human!"{" "}
					</p>
					<footer className="blockquote-footer">Guru</footer>
				</blockquote>
			</Card.Body>
		</Card>
	);
}

export default AboutCard;
