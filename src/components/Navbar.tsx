import React from 'react';
import { Container, Navbar, NavDropdown } from 'react-bootstrap';

export const NavBar: React.FC = () => {
    const nombre = localStorage.getItem('user');

    return (
        <Navbar className="navBar sticky-top">
            <Container>
                <Navbar.Brand href="#home">PulsePRO System</Navbar.Brand>
                <NavDropdown title={nombre} id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action4">
                        Ver perfil
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5">
                        Cerrar sesión
                    </NavDropdown.Item>
                </NavDropdown>
            </Container>
        </Navbar>
    );
};