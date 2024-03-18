import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

export const Cards: React.FC = () => {
    return (
        <Row>
            <Col md={3}>
                <Card className='cards'>
                    <Card.Body>
                        <Card.Title>Frecuencia cardiaca</Card.Title>
                        <Card.Text>
                            75 BPM
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={3}>
                <Card className='cards'>
                    <Card.Body>
                        <Card.Title>Presión arterial</Card.Title>
                        <Card.Text>
                            55%
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={3}>
                <Card className='cards'>
                    <Card.Body>
                        <Card.Title>Temperatura corporal</Card.Title>
                        <Card.Text>
                            36°C
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={3}>
                <Card className='cards'>
                    <Card.Body>
                        <Card.Title>Saturación de oxígeno</Card.Title>
                        <Card.Text>
                            85%
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};