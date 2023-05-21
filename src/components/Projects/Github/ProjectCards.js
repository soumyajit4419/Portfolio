import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { AiFillStar, AiOutlineFork } from "react-icons/ai";
import { Row, Col, Fade, Collapse } from "react-bootstrap";
import DialButton from "./Button";
/**
 * It renders a card with a title, description, GitHub link and Demo link
 * @param props -
 * @returns A React component.
 */
function ProjectCards(props) {
  const [open, setOpen] = useState (false);
  useEffect(() => {
   const t = setTimeout(() => console.debug(setOpen(true)), 1000)
    // return clearTimeout(t)
  }, [])
  return (
    <>
    {/* <Button
        onClick={() => setOpen(!open)}
        variant="primary"
      >
        Toggle text
      </Button> */}
       <div style={{ minHeight: '150px' }}>
    <Collapse in={open} dimension="width">

    <Card className="project-card-view">
      <Card.Body>
        <Card.Title className="get-hacked">{props.fork ? <AiOutlineFork /> : null} {props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }} className="get-hacked">
          {props.description}
        </Card.Text>
       <Col md={10}>
    
       {/* <Button variant="primary" href={props.link} target="_blank">
          <BsGithub /> &nbsp;
      Repo
        </Button>
        {"\n"}
        {"\n"} */}
        <DialButton info={props}/>
        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

    {/* {props.homepage ? <Button  style={{ margin: 5 }}
            variant="primary"
            href={props.homepage}
            target="_blank"
          >
            &nbsp;
            {"Homepage"}
          </Button> : null} */}
          {"\n"}
        {"\n"}
    {/* {props.allow_forking ? <Button  style={{ margin: 5 }}
            variant="primary"
            href={props.html_url + "/fork"}
            target="_blank"
          
          >
            <AiOutlineFork /> &nbsp;
    Fork Repo
          </Button> : null} */}
            {"\n"}

       </Col>
        
        
       <AiFillStar style={{ fontSize: "1.1em" }} /> {props.stargazers_count}

          {/* <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button> */}
        
      </Card.Body>
    </Card>
    </Collapse>
    </div>
    </>

  );
}
export default ProjectCards;
