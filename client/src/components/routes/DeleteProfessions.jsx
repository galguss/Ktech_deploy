import React, { useState } from 'react';
import '../../styles/routesStyle/login.css';

function DeleteProfession({isLogged}){
    const [Delete, setDelete] = useState('All fields must be filled');
    
    
    async function SubmitDelete(){

        const InputProfession = document.getElementById('professionId');

        try {
            if((!InputProfession.value)){
                setDelete("Who would you like to delete?");
            }else{
                const URL = '/profession';
                const response = await fetch(URL, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                      },
                    body: JSON.stringify({
                        professionId: InputProfession.value
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
                  <label><b>Profession Id:</b><input type="number" name='profession' id='professionId' required/></label>
                  <button id='submit' onClick={e => { e.preventDefault(); SubmitDelete()}}><b>submit</b></button>  
                </form>
    
                <p>{Delete.message}</p>
            </>
        )
    }
    
   
}

export default DeleteProfession;