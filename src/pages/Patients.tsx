import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavBar } from '../components/Navbar';
import { ListPatients } from '../components/ListPatients';

export const Patients: React.FC = () => {
    return (
        <>
            <NavBar />
            <Container fluid>
                <Row>
                    <Col className='p-3'>
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