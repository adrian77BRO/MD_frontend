import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavBar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import { ListPatients } from '../components/ListPatients';

export const Patients: React.FC = () => {
    return (
        <>
            <NavBar />
            <Container fluid>
                <Row>
                    <Col md={2} className='sidebar'>
                        <Sidebar />
                    </Col>
                    <Col md={10} className='p-3'>
                        <Row>
                            <Col>
                                <h1 className='text-center m-3'>Pacientes</h1>
                                <ListPatients />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
};