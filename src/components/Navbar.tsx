import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

export const NavBar: React.FC = () => {
    const nombre = localStorage.getItem('user');

    return (
        <Navbar expand="lg" className="navBar sticky-top">
            <Container>
                <Navbar.Brand href="#home">PulsePRO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/patients">Pacientes</Nav.Link>
                        <NavDropdown title="Más opciones" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.2">
                                Ver perfil
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">
                                Cerrar sesión
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};