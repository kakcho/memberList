import {useState} from 'react';
import '../../styles/login.css'

const Form = ({title, handleClick}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        <div>
            <div className='input-form'>
            <p>Электронная почта</p>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@mail.ru"
                
            />
            </div>
            <div className='input-form'>
            <p>Пароль</p>
            <input
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="*****"
            />
            </div>
            <br/>
            <button
                onClick={() => handleClick(email, pass)}
                className='but-form'
            >
                {title}
            </button>
        </div>
    )
}

export {Form}