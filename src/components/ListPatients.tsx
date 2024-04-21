import React, { useState, useEffect } from 'react';
import { CardPatient } from './CardPatient';
import { FormPatient } from './FormPatient';
import axios from 'axios';

interface Patient {
    id: number;
    name: string;
    last_name: string;
    age: number;
    sex: string
}

export const ListPatients: React.FC = () => {
    const [patients, setPatients] = useState<Patient[]>([]);
    const [showModal, setShowModal] = useState<boolean>(false);
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    useEffect(() => {
        getAllPatients()
    }, []);

    const getAllPatients = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://18.205.225.198:3000/patients', {
                headers: {
                    'Authorization': `${token}`
                }
            });
            setPatients(response.data.patients);
        } catch (error) {
            console.error('Error al obtener los pacientes:', error);
        }
    }

    return (
        <>
            {patients.length === 0 ? <h3 className='p-3 text-center border border-black rounded-3'>No se ha registrado ningún paciente</h3> :
                <div className='container p-3'>
                    <div className='row gy-3 row-cols-2'>
                        {patients.map(patient => (
                            <CardPatient
                                key={patient.id}
                                id={patient.id}
                                name={patient.name}
                                last_name={patient.last_name}
                                age={patient.age}
                                sex={patient.sex}
                            />
                        ))}
                    </div>
                </div>}
            <button type='submit' className='btn btn-success ms-5' onClick={openModal}>Agregar paciente</button>
            <FormPatient
                show={showModal}
                close={closeModal}
            />
        </>
    );
};