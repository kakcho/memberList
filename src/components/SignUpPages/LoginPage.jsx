import React from 'react';
import {Login} from '../Login/Login';
import { Link } from 'react-router-dom';
import '../../styles/login.css'

function LoginPage() {
    return (
        <section className='section'>
            <div className='auth-form'>
                    <p className='h2'>Вход</p>
                    <Login />
                <p>
                    Или <Link to="/signup">зарегистрироваться</Link>
                </p>
            </div>
        </section>
    );
}

export default LoginPage;