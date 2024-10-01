import React, { useEffect, useState } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { AiFillStar } from 'react-icons/ai'
import { CgGitFork } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import navBarItems from '../data/navBarItems.js'
import '../styles/NavBar.css'

function NavBar() {
  const [expand, updateExpanded] = useState(false)
  const [navColour, updateNavbar] = useState(false)

  /* Scroll handler to update the navbar when user scrolls */
  function scrollHandler() {
    updateNavbar(window.scrollY >= 20)
  }

  /* Add scroll event listener */
  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? 'sticky' : 'navbar'}
      data-testid="navbar"
    >
      <Container>
        {/* Home icon */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="d-flex"
          children={<img src={logo} className="img-fluid logo" alt="brand" />}
          data-testid="navbar-brand"
        />

        {/* Toggle for mobile view */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(!expand)
          }}
          data-testid="navbar-toggle"
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse
          id="responsive-navbar-nav"
          data-testid="navbar-collapse"
        >
          <Nav className="ms-auto" defaultActiveKey="#home">
            {/* Navbar items */}
            {navBarItems.map((item, index) => (
              <Nav.Item key={index}>
                <Nav.Link
                  as={item.isExternalLink ? 'a' : Link}
                  to={item.to}
                  href={item.to}
                  target={item.isExternalLink ? '_blank' : ''}
                  onClick={() => updateExpanded(false)}
                  data-testid={`navbar-link-${item.text}`}
                >
                  {item.icon} {item.text}
                </Nav.Link>
              </Nav.Item>
            ))}

            {/* Fork button */}
            <Nav.Item className="fork-btn">
              <Button
                href="https://saad-bhatti.github.io/soumyajit4419Portfolio/"
                target="_blank"
                className="fork-btn-inner"
                data-testid="fork-link"
              >
                <CgGitFork style={{ fontSize: '1.2em' }} />{' '}
                <AiFillStar style={{ fontSize: '1.1em' }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
