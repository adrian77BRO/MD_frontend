import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Checkup {
    heartRate: number;
    spo2: number;
    temperature: number;
}

export const Table: React.FC = () => {
    const [checkups, setCheckups] = useState<Checkup[]>([]);

    useEffect(() => {
        getCheckupsByPatient()
    }, []);

    const getCheckupsByPatient = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://18.205.225.198:3000/checkup', {
                headers: {
                    'Authorization': `${token}`
                }
            });
            setCheckups(response.data.checkups);
        } catch (error) {
            console.error('Error al obtener los pacientes:', error);
        }
    }

    return (
        <div style={{ overflowY: 'scroll', maxHeight: '400px' }} className='m-5 rounded-3'>
            <table className='table table-warning text-center'>
                <thead>
                    <tr>
                        <th scope='col'>Ritmo cardiaco</th>
                        <th scope='col'>Saturación de oxígeno</th>
                        <th scope='col'>Temperatura corporal</th>
                    </tr>
                </thead>
                <tbody>
                    {checkups.map((check, index) => (
                        <tr key={index}>
                            <td>{check.heartRate}</td>
                            <td>{check.spo2}</td>
                            <td>{check.temperature}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};