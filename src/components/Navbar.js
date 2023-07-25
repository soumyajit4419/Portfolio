import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../Assets/logo.png";
import "./navbar.css"
function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColor, updateNavbar] = useState(false);

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
          fixed="top"
          expand="md"
          expanded={expand}
          className={navColor ? "sticky" : "navbar-dark"}
          style={{ padding: '20%' }}
      >
        <Container fluid>
          <Navbar.Brand href="/" className="d-flex">
            <img src={logo} className="img-fluid" alt="brand" style={{ maxWidth: '10%' }} />
          </Navbar.Brand>

          <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              onClick={() => {
                updateExpanded(!expand);
              }}
          />

          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav className="me-auto" defaultActiveKey="#home">
              <Nav.Item>
                <Nav.Link href="#home" onClick={() => updateExpanded(false)}>
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#features" onClick={() => updateExpanded(false)}>
                  About
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#pricing" onClick={() => updateExpanded(false)}>
                  Contact Us
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default NavBar;
