import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { NavBar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import { CheckupInfo } from '../components/CheckupInfo';

export const Checkup: React.FC = () => {
    let { name } = useParams<{ name: string }>();
    name = name || '';

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
                                <h1 className='text-center m-3'>Monitoreo del paciente {name}</h1>
                                <CheckupInfo patient={name}/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
};