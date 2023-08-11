import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../Assets/logo.png";

function NavBar() {
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


        <Navbar expand="lg" className={navColor ? "sticky navbar-dark" : "navbar-dark g-body-tertiary"}>
            <Container fluid>
                <Navbar.Brand href="#home"><img src={logo} alt="brand" height={'46px'} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='hamburger-icon' style={{ background: "#ee2c5b" }} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Item>
                            <Nav.Link href="#home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#about">How it works</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#footer">Contact </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
