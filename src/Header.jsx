import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {

    return (
        <Navbar bg="light" expand="lg" className="Navbar">
            <Container>
                <img className="header-logo" src={'/src/assets/logo.png'} alt={'Stage Oracle'}/>
                <Navbar.Brand id={"navbar-h1"} href="/">Stage Oracle</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/loginPerformer">Performer login</Nav.Link>
                        <Nav.Link href="/loginProduction">Production User login</Nav.Link>
                        <Nav.Link href="/">Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}