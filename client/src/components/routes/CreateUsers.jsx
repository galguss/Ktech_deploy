import React, { useState } from 'react';
import '../../styles/routesStyle/login.css';

function CreateUser({isLogged}){
    const [Create, setCeate] = useState('All fields must be filled');
    
    
    async function SubmitCeate(){

        const InputEmail = document.getElementById('email');
        const InputPassword = document.getElementById('password');
        const InputGithub = document.getElementById('gitgub');
        const InputFullName = document.getElementById('fullName');
        const InputLevel = document.getElementById('level');

        try {
            if((!InputEmail.value) || (!InputPassword.value) || (!InputFullName.value) || (!InputLevel.value)){
                setCeate("Please check the fields");
            }else{
                const URL = '/admin';
                const response = await fetch(URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                      },
                    body: JSON.stringify({
                        email: InputEmail.value,
                        password: InputPassword.value,
                        github: InputGithub.value,
                        fullName: InputFullName.value,
                        level: InputLevel.value
                    })  
                });
                const data = await response.json();
                setCeate(data);
                
            }
        } catch (error) {
            setCeate("One or more of the fields are invalid");
        }

    }

    if(!isLogged){
        return (<>
            <p>Must be logged in to the system</p>
        </>)
    }else{
        return (
            <>
                <form>
                  <label><b>email:</b><input type="email" name='email' id='email' required/></label>
                  <label><b>password:</b><input type="password" name='password' id='password' required/></label>
                  <label><b>github:</b><input type="text" name='gitgub' id='gitgub' required/></label>
                  <label><b>fullName:</b><input type="text" name='fullName' id='fullName' required/></label>
                  <label><b>level A or B:</b><input type="text" name='level' id='level' required/></label>
                  <button id='submit' onClick={e => { e.preventDefault(); SubmitCeate()}}><b>submit</b></button>  
                </form>
    
                <p>{Create.message}</p>
            </>
        )
    }
    
   
}

export default CreateUser;