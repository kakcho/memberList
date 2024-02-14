import React from 'react';
import { SignUp } from '../Login/Signup';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    return (
        <section className='section'>
            <div className='auth-form'>
            <p className='h2'>Регистрация</p>
                <SignUp />
                <p>
                    Есть аккаунт? <Link to="/">Войти</Link>   
                </p>            
            </div>
        </section>
    )
}

export default RegisterPage