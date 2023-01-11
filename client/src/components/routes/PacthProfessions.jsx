import React, { useState } from 'react';
import '../../styles/routesStyle/login.css';

function PacthProfession({isLogged}){
    const [Patch, setPatch] = useState('All fields must be filled');
    
    
    async function SubmitPatch(){

        
        const InputProfessionId = document.getElementById('professionId');
        const InputNewValue = document.getElementById('newValue');

        try {
            if((!InputProfessionId.value) || (!InputNewValue.value)){
                setPatch("Please check the fields");
            }else{
                const URL = '/profession';
                const response = await fetch(URL, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                      },
                    body: JSON.stringify({
                        professionId: InputProfessionId.value,
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

    if(!isLogged){
        return (<>
            <p>Must be logged in to the system</p>
        </>)
    }else{
        return (
            <>
                <form>
                  <label><b>Profession Id:</b><input type="Number" name='professionId' id='professionId' required/></label>
                  <label><b>New Value:</b><input type="text" name='newValue' id='newValue' required/></label>
                  <button id='submit' onClick={e => { e.preventDefault(); SubmitPatch()}}><b>submit</b></button>  
                </form>
    
                <p>{Patch.message}</p>
            </>
        )
    }
    
   
}

export default PacthProfession;