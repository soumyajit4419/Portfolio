import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

import YouTube from 'react-youtube';



function VidCards(props) {
    const opts = {
        height: '95%',
        width: '95%',
        playerVars: {
            //https://developers.google.com/youtube/player_parameters,
            autoplay: 0,
        },
    }
    return (

        <section>
            <Card className="project-card-view">
                {/*<Card.Img variant="top" src={props.imgPath} alt="card-img" />*/}
                <br />
                <YouTube videoId={props.vidId} opts={opts} />
                <Card.Body>

                    <Card.Title>{props.title}</Card.Title>
                    <br />
                    <Card.Text style={{ textAlign: "justify" }}>
                        {props.description}
                    </Card.Text>

                </Card.Body>
            </Card>
            <Card.Footer className="green" style={{ textAlign: "left" }}>
                <span className="grey"> Used Skillset:</span>
                <br />
                {props.footor_skillset}
                {/*<br /> asdfas*/}
            </Card.Footer>
        </section>
    );
}
export default VidCards;
