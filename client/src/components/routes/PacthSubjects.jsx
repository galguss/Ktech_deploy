import React, { useState } from 'react';
import '../../styles/routesStyle/login.css';
import Menu from "../Menu"

function PacthSubject({isLogged}){
    const [Patch, setPatch] = useState('All fields must be filled');
    
    
    async function SubmitPatch(){

        
        const InputSubjectId = document.getElementById('subjectId');
        const InputNewValue = document.getElementById('newValue');

        try {
            if((!InputSubjectId.value) || (!InputNewValue.value)){
                setPatch("Please check the fields");
            }else{
                const URL = '/subject';
                const response = await fetch(URL, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                      },
                    body: JSON.stringify({
                        subjectData: InputSubjectId.value,
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
                  <label><b>Subject:</b><input type="text" list='subject' name='subjectId' id='subjectId' required/></label>
                  <Menu item = "subject"/>
                  <label><b>New Value:</b><input type="text" name='newValue' id='newValue' required/></label>
                  <button id='submit' onClick={e => { e.preventDefault(); SubmitPatch()}}><b>submit</b></button>  
                </form>
    
                <p>{Patch.message}</p>
            </>
        )
    
    
   
}

export default PacthSubject;