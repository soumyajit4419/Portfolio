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
        <Navbar
            fixed="top"
            expand="md"
            className={navColor ? "sticky navbar-dark" : "navbar-dark"}
            style={{ padding: '20%' }}
        >
            <Container fluid>
                <Navbar.Brand href="/" className="d-flex">
                    <img src={logo} className="img-fluid" alt="brand" style={{ maxWidth: '10%' }} />
                </Navbar.Brand>
                <Nav className="navbar-nav" defaultActiveKey="#home">
                    <Nav.Item>
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#about">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#pricing">Contact Us</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;
