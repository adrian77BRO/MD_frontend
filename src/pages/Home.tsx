import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS, Title, Tooltip, LineElement, Legend,
    CategoryScale, LinearScale, PointElement, Filler,
} from 'chart.js';
ChartJS.register(Title, Tooltip, LineElement, Legend,
    CategoryScale, LinearScale, PointElement, Filler);
import { UserData } from '../components/Data';
import { Cards } from '../components/Cards';
import { NavBar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';

export const Home: React.FC = () => {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.day),
        datasets: [
            {
                label: 'Historial',
                data: UserData.map((data) => data.avgRate),
                backgroundColor: [
                    'rgba(75,192,192,1)',
                    '#ecf0f1',
                    '#50AF95',
                    '#f3ba2f',
                    '#2a71d0',
                ],
                borderColor: 'rgba(20,160,20)',
                borderWidth: 5,
            },
        ],
    });

    return (
        <>
            <NavBar />
            <Container fluid>
                <Row>
                    <Col md={2} className='sidebar'>
                        <Sidebar />
                    </Col>
                    <Col md={10} className='p-5'>
                        <Cards />
                        <Row>
                            <Col>
                                <Line className='graphic mt-5 p-3 rounded-3' data={userData} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
};