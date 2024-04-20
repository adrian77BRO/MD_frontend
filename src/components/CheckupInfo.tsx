import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse, faDroplet, faTemperatureHalf } from '@fortawesome/free-solid-svg-icons';

interface Props {
    patient: string;
}

interface Checkup {
    heartRate: number;
    spo2: number;
    temperature: number;
}

export const CheckupInfo: React.FC<Props> = ({ patient }) => {
    const token = localStorage.getItem('token');
    const socket = io('http://localhost:8080', {
        auth: {
            token: token,
        },
    });

    const [checkup, setCheckup] = useState<Checkup>({
        heartRate: 0, spo2: 0, temperature: 0
    });

    useEffect(() => {
        socket.on('getData', (data) => {
            setCheckup(data);
        });
    });

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