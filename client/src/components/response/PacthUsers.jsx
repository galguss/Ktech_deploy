import React, { useState } from 'react';
import '../../styles/routesStyle/login.css';

function PacthUsers({isLogged}){
    const [Patch, setPatch] = useState('All fields must be filled');
    
    
    async function SubmitPatch(){

        const InputColumn = document.getElementById('column');
        const InputOldValue = document.getElementById('oldValue');
        const InputNewValue = document.getElementById('newValue');

        try {
            if((!InputColumn.value) || (!InputOldValue.value) || (!InputNewValue.value)){
                setPatch("Please check the fields");
            }else{
                const URL = '/admin';
                const response = await fetch(URL, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                      },
                    body: JSON.stringify({
                        column: InputColumn.value,
                        oldValue: InputOldValue.value,
                        newValue: InputNewValue.value
                    })  
                });
                const data = await response.json();
                setPatch(data);
                
            }
        } catch (error) {
            setPatch("One or more of the fields are invalid");
        }

    }

        return (
            <>
                <form>
                  <label><b>column:</b><input type="text" name='column' id='column' required/></label>
                  <label><b>Old Value:</b><input type="text" name='oldValue' id='oldValue' required/></label>
                  <label><b>New Value:</b><input type="text" name='newValue' id='newValue' required/></label>
                  <button id='submit' onClick={e => { e.preventDefault(); SubmitPatch()}}><b>submit</b></button>  
                </form>
    
                <p>{Patch.message}</p>
            </>
        )
    
    
   
}

export default PacthUsers;