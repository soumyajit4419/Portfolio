import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import { AiFillStar, AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

import logo from "../Assets/logo.png";

function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const [navColour, setNavColour] = useState(false);

  function scrollHandler() {
    setNavColour(window.scrollY >= 20);
  }

  window.addEventListener("scroll", scrollHandler);

  // Define an array of nav items
  const navItems = [
    { to: "/", label: "Home", icon: <AiOutlineHome /> },
    { to: "/about", label: "About", icon: <AiOutlineUser /> },
    { to: "/project", label: "Projects", icon: <AiOutlineFundProjectionScreen /> },
    { to: "/resume", label: "Resume", icon: <CgFileDocument /> },
    { externalLink: "https://soumyajitblogs.vercel.app/", label: "Blogs", icon: <ImBlog /> },
  ];

  return (
    <Navbar
      expanded={expanded}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            setExpanded(expanded ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            {navItems.map((item, index) => (
              <Nav.Item key={index}>
                {item.externalLink ? (
                  <Nav.Link
                    href={item.externalLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="d-flex justify-content-start align-items-center gap-1">
                      {item.icon} {item.label}
                    </div>
                  </Nav.Link>
                ) : (
                  <Nav.Link as={Link} to={item.to} onClick={() => setExpanded(false)}>
                    <div className="d-flex justify-content-start align-items-center gap-1">
                      {item.icon} {item.label}
                    </div>
                  </Nav.Link>
                )}
              </Nav.Item>
            ))}

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
