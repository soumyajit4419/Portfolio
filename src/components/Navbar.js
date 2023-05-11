import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <strong className="text-purple-1000 text-3xl">Ed</strong>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto items-end" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to={"/"}
                onClick={() => updateExpanded(false)}
                className="nav-link"
              >
                <div className="flex mobile:justify-start tablet:justify-center items-center pt-3">
                  <AiOutlineHome style={{ marginBottom: "2px" }} />
                  <span className="ml-1"> Home</span>
                </div>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <div className="flex mobile:justify-start tablet:justify-center items-center pt-3">
                  <AiOutlineUser style={{ marginBottom: "2px" }} />
                  <span className="ml-1"> About</span>
                </div>
              </Nav.Link>
            </Nav.Item>
            {/* were  */}

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <div className="flex mobile:justify-start tablet:justify-center items-center pt-3">
                  <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
                </div>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
