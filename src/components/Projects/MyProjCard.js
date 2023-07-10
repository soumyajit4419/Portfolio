import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function MyProjCard(props) {
    return (
        <section>
            {/*<MyYoutube />*/}

            <Card className="project-card-view">
                <Card.Img variant="top" src={props.imgPath} alt="card-img" />
                <Card.Body>

                    <Card.Title>{props.title}</Card.Title>
                    <br />
                    <Card.Text style={{ textAlign: "justify" }}>
                        {props.description}
                    </Card.Text>
                    <Button variant="primary" href={props.link} target="_blank">
                        <BiLinkExternal /> &nbsp;
                        {props.textBtn}
                    </Button>
                    {/*<br />*/}
                    {/*<br />*/}
                    {/*<Button variant="primary" href={props.link} target="_blank">*/}
                    {/*    <BiLinkExternal /> &nbsp;*/}
                    {/*    {props.textBtn}*/}
                    {/*</Button>*/}
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
export default MyProjCard;
