import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

interface User {
    email: string;
    password: string;
}

const Login: React.FC = () => {
    const [user, setUser] = useState<User>({ email: '', password: '' });
    const [mensaje, setMensaje] = useState<string>('');
    const navegar = useNavigate();

    const manejarCambio = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
        setMensaje('');
    };

    const iniciarSesion = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            if (user.email === '' || user.password === '') {
                setMensaje('Todos los campos son requeridos');
                return;
            }
            const response = await axios.post('http://localhost:3000/auth', user);
            Swal.fire({
                title: '¡Bienvenido!',
                text: response.data.msg,
                icon: 'success'
            });
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', response.data.email);
            console.log(response.data.email)
            navegar('/home');
            setMensaje('');
        } catch (error: any) {
            console.error('Error al iniciar sesión:', error);
            setMensaje(error.response.data.msg);
        }
    };

    return (
        <div className='container-fluid d-flex justify-content-center align-items-center min-vh-100 login-fondo'>
            <div className='col-xl-4'>
                <form onSubmit={iniciarSesion} className='p-5 rounded-4 login'>
                    <h3 className='text-center mb-5'>Iniciar sesión</h3>
                    <div className='mb-2'>
                        <label htmlFor='email' className='form-label'>Correo electrónico</label>
                        <input type='email' name='email' value={user.email} onChange={manejarCambio}
                            className='form-control' id='email' placeholder='Ingrese su correo electrónico' />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='password' className='form-label'>Contraseña</label>
                        <input type='password' name='password' value={user.password} onChange={manejarCambio}
                            className='form-control' id='password' placeholder='Ingrese su contraseña' />
                    </div>
                    <button type='submit' className='rounded border-0 p-2 w-100 mt-3 boton'>Ingresar</button>
                    <Link to='/signup' className='btn btn-link text-dark w-100 mt-2'>¿No tienes cuenta? Regístrate aquí</Link>
                    {mensaje && <p className='bg-danger text-center text-white mt-2'>{mensaje}</p>}
                </form>
            </div>
        </div>
    );
};

export default Login;