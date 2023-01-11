import React, { useState } from 'react';
import '../../styles/routesStyle/login.css';

function CreateSubject({isLogged}){
    const [Create, setCeate] = useState('All fields must be filled');
    
    
    async function SubmitCeate(){

        const InputSubject = document.getElementById('subject');

        try {
            if((!InputSubject.value)){
                setCeate("Please check the fields");
            }else{
                const URL = '/subject';
                const response = await fetch(URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                      },
                    body: JSON.stringify({
                        subject: InputSubject.value
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
                  <label><b>New Subject:</b><input type="text" name='subject' id='subject' required/></label>
                  <button id='submit' onClick={e => { e.preventDefault(); SubmitCeate()}}><b>submit</b></button>  
                </form>
    
                <p>{Create.message}</p>
            </>
        )
    }
    
   
}

export default CreateSubject;