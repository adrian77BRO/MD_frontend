import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';

interface Patient {
    name: string;
    last_name: string;
    age: number;
    sex: string
}

interface PropsModal {
    id: number;
    name: string;
    last_name: string;
    age: number;
    sex: string;
    show: boolean;
    close(): void;
}

export const UpdatePatient: React.FC<PropsModal> = ({ id, name, last_name, age, sex, show, close }) => {
    const [patient, setPatient] = useState<Patient>({
        name: name, last_name: last_name, age: age, sex: sex
    });
    const [message, setMessage] = useState<string>('');
    const token = localStorage.getItem('token');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setPatient({ ...patient, [name]: value });
        setMessage('');
    };
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        setPatient({ ...patient, [name]: value });
        setMessage('');
    };

    const updatePatient = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            if (patient.name === '' || patient.last_name === '' || patient.age.toString() === '' || patient.sex === '') {
                setMessage('Todos los campos son requeridos');
                return;
            }
            if (patient.age < 0) {
                setMessage('Edad inválida');
                return;
            }
            const response = await axios.put(`http://localhost:3000/patients/${id}`, patient, {
                headers: {
                    'Authorization': `${token}`
                }
            });
            Swal.fire({
                title: 'Paciente actualizado',
                text: response.data.msg,
                icon: 'success'
            });
            setMessage('');
        } catch (error: any) {
            console.error('Error al editar el paciente:', error);
            setMessage(error.response.data.msg);
        }
    }

    return (
        <Modal show={show} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>Editar paciente</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='mb-3 p-3'>
                    <label htmlFor='name' className='form-label'>Nombre</label>
                    <input className='form-control' id='name'
                        type='text' name='name' value={patient.name} onChange={handleChange} />
                </div>
                <div className='mb-3 p-3'>
                    <label htmlFor='last_name' className='form-label'>Apellidos</label>
                    <input className='form-control' id='last_name'
                        type='text' name='last_name' value={patient.last_name} onChange={handleChange} />
                </div>
                <div className='mb-3 p-3'>
                    <label htmlFor='age' className='form-label'>Edad</label>
                    <input className='form-control' id='age'
                        type='number' name='age' value={patient.age} onChange={handleChange} />
                </div>
                <select className='form-select' name='sex' onChange={handleSelectChange}>
                    <option value=''>--- Sexo ---</option>
                    <option value='masculino'>Masculino</option>
                    <option value='femenino'>Femenino</option>
                </select>
            </Modal.Body>
            <Modal.Footer>
                <div className='d-flex justify-content-around'>
                    {message !== '' && <div className='bg-danger text-center text-white m-2 p-2' role='alert'>{message}</div>}
                    <button className='btn btn-success border-0 rounded-3 m-2 p-2' type='submit'
                        onClick={updatePatient}>Guardar</button>
                </div>
            </Modal.Footer>
        </Modal>
    );
};