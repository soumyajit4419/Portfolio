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
    'href': 'https://androiabledroid.blogspot.com/',
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
      <Container style={{ paddingInline: "1.25rem" }}>
        <Navbar.Brand href="/" className="d-flex">
          <div id="logo-container" className="img-fluid">
          {data.logo}
          </div>
          {/* <img src={data.logo} className="img-fluid logo" alt="brand" /> */}
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

            {data.socialMedia.map((link, index) => {
              return (
                <Nav.Item className="social-icons-nav" key={index}>
                  <a href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="home-social-icons icon-colour">
                    {link.icon}
                  </a>
                </Nav.Item>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
