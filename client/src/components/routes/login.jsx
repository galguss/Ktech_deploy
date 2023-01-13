import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/routesStyle/login.css';
function Login({cb}){
    const navigate = useNavigate();
    const [Login, setLogin] = useState('All fields must be filled');
    const [isLogged, setIsLogged] = useState(false);
    
    useEffect(() =>setIsLogged(true), []);

    async function SubmitLogin(){

        const InputEmail = document.getElementById('email');
        const InputPassword = document.getElementById('password');
        try {
            if((!InputEmail.value) && (!InputPassword.value)){
                setLogin("Please check the fields");
            }else{
                const URL = '/login';
                const response = await fetch(URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                      },
                    body: JSON.stringify({
                        email: InputEmail.value,
                        password: InputPassword.value
                    })  
                });
                const data = await response.json();
                setLogin(data);
                setIsLogged((typeof data.token !== 'undefined' && data.token !== ''));
                navigate('/GetArticles');
            }
        } catch (error) {
            setLogin("Incorrect email or password");
        }
    }
    
    return (
        <>
            <form>
              <label><b>email:</b><input type="email" name='email' id='email' required/></label>
              <label><b>password:</b><input type="password" name='password' id='password' required/></label>
              <button id='submit' onClick={e => { e.preventDefault(); SubmitLogin(); cb(() => isLogged)}}><b>login</b></button>  
            </form>

            <p>{Login.message}</p>
        </>
    )
}

export default Login;