import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import { data } from "../Constants";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const links = [{
    'url': '/about',
    'name': 'About',
    'outline': <AiOutlineUser style={{ marginBottom: "2px" }} />
  },
  {
    'url': '/project',
    'name': 'Projects',
    'outline': <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />
  },
  {
    'url': '/resume',
    'name': 'Resume',
    'outline': <CgFileDocument style={{ marginBottom: "2px" }} />
  },
  {
    'href': 'https://soumyajitblogs.vercel.app/',
    'name': 'Blogs',
    'outline': <ImBlog style={{ marginBottom: "2px" }} />
  }];

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
          <img src={data.logo} className="img-fluid logo" alt="brand" />
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
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            {links.map((link, index) => {
              return (
                <Nav.Item key={index}>
                  {link.href ? <Nav.Link href={link.href}
                    target="_blank"
                    rel="noreferror"
                    onClick={() => updateExpanded(false)}
                  >
                    {link.outline} {link.name}
                  </Nav.Link> :
                    <Nav.Link as={Link}
                      to={link.url}
                      onClick={() => updateExpanded(false)}
                    >
                      {link.outline} {link.name}
                    </Nav.Link>}
                </Nav.Item>
              );
            })}

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/soumyajit4419/Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
