import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { NavBar } from '../components/Navbar';
import { Table } from '../components/Table'

export const Historial: React.FC = () => {
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
                                <h1 className='text-center m-3'>Historial del paciente {name}</h1>
                                <Table />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
};