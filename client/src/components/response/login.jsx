import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/routesStyle/login.css';

import Input from '../main/Input'

function Login({callback}){
    const navigate = useNavigate();
    const [Login, setLogin] = useState('All fields must be filled');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function SubmitLogin(){
        try {
                const URL = '/login';
                const response = await fetch(URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                      },
                    body: JSON.stringify({
                        email: email,
                        password: password
                    })  
                });
                const data = await response.json();
                setLogin(data);
                if((typeof data.token !== 'undefined' && data.token !== "")){
                    if(data.level === "A")
                    navigate('/admin');
                    else{
                        callback(data);
                        navigate('/author');
                    }

               }
            }
        catch (error) {
            setLogin("Incorrect email or password");
        }
    }
    
    return (
        <>
            <div className='response'>
              <Input label="Email" type="email" handleValue= {(valueE) => setEmail(valueE)} /> 
              <Input label="Paswword" type="password" handleValue= {(valueP) => setPassword(valueP)} />
                <p className='chatBox'>{Login.message}</p>
              <button className='btn' onClick={() => SubmitLogin()}><b>login</b></button>  
            </div>

        </>
    )
}

export default Login;