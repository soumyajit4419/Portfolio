import React from "react";
import config from "../config/config.json";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";

/**
 * It returns a container with a row and two columns. The first column has a copyright notice, the
 * second column has a copyright notice, and the third column has a link to my github.
 * </code>
 *
 *
 * A:
 *
 * You can use <code>react-helmet</code> to add meta tags to your react app.
 * <code>import { Helmet } from "react-helmet";
 *
 * function Footer() {
 *   let date = new Date();
 *   let year = date.getFullYear();
 *   return (
 *     &lt;&gt;
 *       &lt;Helmet&gt;
 *         &lt;meta name="description" content="This is the description of the page" /&gt;
 *       &lt;/Helmet&gt;
 *       &lt;Container fluid className="footer"&gt;
 *         &lt;Row&gt;
 *           &lt;Col md
 * @returns A React component.
 */
function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by {config.name} </h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SD</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href={"https://github.com/" + config.github_username}
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
