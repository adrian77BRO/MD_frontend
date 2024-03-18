import React from 'react';
import { Nav } from 'react-bootstrap';

export const Sidebar: React.FC = () => {
    return (
        <Nav className="flex-column">
            <Nav.Link href="#action1">Dashboard</Nav.Link>
            <Nav.Link href="#action2">Medir</Nav.Link>
            <Nav.Link href="#action3">Contacto</Nav.Link>
        </Nav>
    );
};