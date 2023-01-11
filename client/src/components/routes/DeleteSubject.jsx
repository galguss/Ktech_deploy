import React, { useState } from 'react';
import '../../styles/routesStyle/login.css';

function DeleteSubject({isLogged}){
    const [Delete, setDelete] = useState('All fields must be filled');
    
    
    async function SubmitDelete(){

        const InputSubjectId = document.getElementById('subjectId');

        try {
            if((!InputSubjectId.value)){
                setDelete("Who would you like to delete?");
            }else{
                const URL = '/subject';
                const response = await fetch(URL, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                      },
                    body: JSON.stringify({
                        subjectId: InputSubjectId.value
                    })  
                });
                const data = await response.json();
                setDelete(data);
                
            }
        } catch (error) {
            setDelete("Something has gone wrong");
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
                  <label><b>Subject Id:</b><input type="number" name='subjectId' id='subjectId' required/></label>
                  <button id='submit' onClick={e => { e.preventDefault(); SubmitDelete()}}><b>submit</b></button>  
                </form>
    
                <p>{Delete.message}</p>
            </>
        )
    }
    
   
}

export default DeleteSubject;