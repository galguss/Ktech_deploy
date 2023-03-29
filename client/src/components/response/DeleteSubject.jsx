import React, { useState } from 'react';
import '../../styles/routesStyle/login.css';
import Menu from '../main/Menu'

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
                        subjectData: InputSubjectId.value
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
                  <label><b>Subject:</b><input type="text" list='subject' name='subjectId' id='subjectId' required/></label>
                  <Menu item = "subject" />
                  <button id='submit' onClick={e => { e.preventDefault(); SubmitDelete()}}><b>submit</b></button>  
                </form>
    
                <p>{Delete.message}</p>
            </>
        )
    
    
   
}

export default DeleteSubject;