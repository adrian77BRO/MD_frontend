import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { NavBar } from '../components/Navbar';
import checkup1 from '../assets/images/checkup1.jpg'
import checkup2 from '../assets/images/checkup2.jpg'
import fondo from '../assets/images/fondo.jpg'

export const Home: React.FC = () => {
    return (
        <>
            <NavBar />
            <Container fluid>
                <Row>
                    <Col md={6} className='p-5 mt-5'>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={checkup1}
                                    alt=""
                                />
                                <Carousel.Caption>

                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={checkup2}
                                    alt=""
                                />
                                <Carousel.Caption>

                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={fondo}
                                    alt=""
                                />
                                <Carousel.Caption>

                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col md={6} className='p-5'>
                        <Row>
                            <Col>
                                <div className='card m-5'>
                                    <h3 className='text-center m-5'>
                                        Bienvenido a su sistema favorito, esta aplicación está diseñada para el
                                        monitoreo de signos vitales de los pacientes para determinar el estado de
                                        salud en el que se encuentran dependiendo de sus parámetros médicos.
                                    </h3>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
};