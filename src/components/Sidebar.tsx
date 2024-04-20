import React from 'react';
import { Nav } from 'react-bootstrap';

export const Sidebar: React.FC = () => {
    return (
        <Nav className="flex-column">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/patients">Pacientes</Nav.Link>
            <Nav.Link href="#action3">Contacto</Nav.Link>
        </Nav>
    );
};