import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { UpdatePatient } from './UpdatePatient';
import userIcon from '../assets/images/userIcon.png';

interface PropsPatient {
    id: number;
    name: string;
    last_name: string;
    age: number;
    sex: string
}

export const CardPatient: React.FC<PropsPatient> = ({ id, name, last_name, age, sex }) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const deletePatient = async () => {
        try {
            const result = await Swal.fire({
                title: '¿Estás seguro de que quieres eliminar al paciente?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, eliminar'
            });

            if (result.isConfirmed) {
                const token = localStorage.getItem('token');
                const response = await axios.delete(`http://18.205.225.198:3000/patients/${id}`, {
                    headers: {
                        'Authorization': `${token}`
                    }
                });
                Swal.fire({
                    title: 'Paciente eliminado',
                    text: response.data.msg,
                    icon: 'success'
                });
            }
        } catch (error) {
            console.error('Error al eliminar el paciente:', error);
        }
    }

    return (
        <>
            <div className='col-lg-3'>
                <div className='cards p-2 m-1'>
                    {sex === 'masculino' && <img src={userIcon} className='gender masc' alt='' />}
                    {sex === 'femenino' && <img src={userIcon} className='gender fem' alt='' />}
                    <h6 className='mt-2'>{`${name} ${last_name}`}</h6>
                    <p className='mb-2'>{`Edad: ${age}`}</p>
                    <div className='d-flex justify-content-center'>
                        <button type='submit' className='btn btn-danger w-50 m-2' onClick={deletePatient}><FontAwesomeIcon icon={faTrashCan} /></button>
                        <button type='submit' className='btn btn-primary w-50 m-2' onClick={openModal}><FontAwesomeIcon icon={faPenToSquare} /></button>
                    </div>
                    <Link to={`/checkup/${name}`} className='btn btn-success w-100 p-2'>Monitorear</Link>
                </div>
            </div>
            <UpdatePatient
                id={id}
                name={name}
                last_name={last_name}
                age={age}
                sex={sex}
                show={showModal}
                close={closeModal}
            />
        </>
    );
};