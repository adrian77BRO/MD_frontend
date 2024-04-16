import React, { useState, useEffect } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse, faDroplet, faTemperatureHalf } from '@fortawesome/free-solid-svg-icons';

interface Props {
    patient: string;
}

export const CheckupInfo: React.FC<Props> = ({ patient }) => {
    const socket = io('http://localhost:8080');
    interface Checkup {
        temperature: number;
        heartRate: number;
        spo2: number;
        patient: string;
    }

    const [checkup, setCheckup] = useState<Checkup>({
        temperature: 0, heartRate: 0, spo2: 0, patient: patient
    });

    useEffect(() => {
        socket.on('sendData', (data) => {
            console.log(data);
            const checkupReq: Checkup = { ...data, patient };
            setCheckup(data);
            const token = localStorage.getItem('token');

            axios.post('http://localhost:3000/checkup', checkupReq, {
                headers: {
                    'Authorization': `${token}`
                }
            })
                .then(response => console.log(response.data))
                .catch(error => console.error('Error al enviar datos al servidor API:', error));
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    return (
        <div className='container pt-5'>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='p-3 rounded-3 cards'>
                        <div className='row'>
                            <div className='col-1'>
                                <div><FontAwesomeIcon icon={faHeartPulse} /></div>
                            </div>
                            <div className='col-11'>
                                <h4>Ritmo cardiaco</h4>
                                <h6>{checkup.heartRate}</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='p-3 rounded-3 cards'>
                        <div className='row'>
                            <div className='col-1'>
                                <div><FontAwesomeIcon icon={faDroplet} /></div>
                            </div>
                            <div className='col-11'>
                                <h4>Saturación de oxígeno</h4>
                                <h6>{checkup.spo2}</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='p-3 rounded-3 cards'>
                        <div className='row'>
                            <div className='col-1'>
                                <div><FontAwesomeIcon icon={faTemperatureHalf} /></div>
                            </div>
                            <div className='col-11'>
                                <h4>Temperatura corporal</h4>
                                <h6>{checkup.temperature}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};