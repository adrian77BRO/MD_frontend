import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { NavBar } from '../components/Navbar';
import { CheckupInfo } from '../components/CheckupInfo';

export const Checkup: React.FC = () => {
    let { name } = useParams<{ name: string }>();
    name = name || '';

    return (
        <>
            <NavBar />
            <Container fluid>
                <Row>
                    <Col className='p-3'>
                        <Row>
                            <Col>
                                <h1 className='text-center m-3'>Monitoreo del paciente {name}</h1>
                                <CheckupInfo patient={name} />
                                <div className='d-flex justify-content-center'>
                                    <Link to={`/historial/${name}`} className='btn btn-success w-25 m-5'>Ver historial</Link>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
};