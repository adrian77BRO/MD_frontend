import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

interface User {
    username: string;
    email: string;
    password: string;
}

export const Register: React.FC = () => {
    const [user, setUser] = useState<User>({ username: '', email: '', password: '' });
    const [mensaje, setMensaje] = useState<string>('');

    const manejarCambio = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
        setMensaje('');
    };

    const registrar = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            if (user.username === '' || user.email === '' || user.password === '') {
                setMensaje('Todos los campos son requeridos');
                return;
            }
            const response = await axios.post('http://localhost:3000/users', user);
            Swal.fire({
                title: '¡Bienvenido!',
                text: response.data.msg,
                icon: 'success'
            });
            setMensaje('');
        } catch (error: any) {
            console.error('Error al registrar:', error);
            setMensaje(error.response.data.msg);
        }
    };

    return (
        <div className='container-fluid d-flex justify-content-center align-items-center min-vh-100 login-fondo'>
            <div className='col-xl-4'>
                <form onSubmit={registrar} className='login p-5 rounded-4'>
                    <h3 className='text-center mb-4'>Regístrate aquí</h3>
                    <div className='mb-2'>
                        <label htmlFor='username' className='form-label'>Nombre</label>
                        <input type='text' name='username' value={user.username} onChange={manejarCambio}
                            className='form-control' id='username' placeholder='Ingrese un nombre' />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='email' className='form-label'>Correo electrónico</label>
                        <input type='email' name='email' value={user.email} onChange={manejarCambio}
                            className='form-control' id='email' placeholder='Ingrese un correo eléctronico' />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='password' className='form-label'>Contraseña</label>
                        <input type='password' name='password' value={user.password} onChange={manejarCambio}
                            className='form-control' id='password' placeholder='Ingrese una contraseña (al menos 6 caracteres)' />
                    </div>
                    <button type='submit' className='rounded border-0 p-2 w-100 mt-3 boton'>Registrar</button>
                    <Link to='/' className='btn btn-link text-dark w-100 mt-2'>¿Ya tienes cuenta? Inicia sesión</Link>
                    {mensaje && <p className='bg-danger text-center text-white mt-2'>{mensaje}</p>}
                </form>
            </div>
        </div>
    );
};