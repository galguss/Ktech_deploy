import React, { useState } from 'react';
import '../../styles/routesStyle/login.css';

import Menu from "../main/Menu"

function DeleteUsers({isLogged}){
    const [Delete, setDelete] = useState('All fields must be filled');
    
    
    async function SubmitDelete(){

        const InputuserEmail = document.getElementById('userId');

        try {
            if((!InputuserEmail.value)){
                setDelete("Who would you like to delete?");
            }else{
                const URL = '/admin';
                const response = await fetch(URL, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                      },
                    body: JSON.stringify({
                        userEmail: InputuserEmail.value
                    })  
                });
                const data = await response.json();
                setDelete(data);
                
            }
        } catch (error) {
            setDelete("Something has gone wrong");
        }

    }

    
        return (
            <>
                <form>
                  <label><b>User:</b><input type="email" list='users' name='userEmail' id='userId' required/></label>
                  <Menu item ="users" />
                  <button id='submit' onClick={e => { e.preventDefault(); SubmitDelete()}}><b>submit</b></button>  
                </form>
    
                <p>{Delete.message}</p>
            </>
        )
    
    
   
}

export default DeleteUsers;