import React, { useState} from 'react';
import '../../styles/routesStyle/login.css';

function CreateProfession({isLogged}){
    const [Create, setCeate] = useState('All fields must be filled');
    
    const InputProfession = document.getElementById('prof');

    async function SubmitCeate(){

        try {
            if((!InputProfession.value)){
                setCeate("Please check the fields");
            }else{
                const URL = '/profession';
                const response = await fetch(URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                      },
                    body: JSON.stringify({
                        profession: InputProfession.value
                    })  
                });
                const data = await response.json();
                setCeate(data);
                
                
            }
        } catch (error) {
            setCeate("One or more of the fields are invalid");
        }

    }

   
        return (
            <>
                <form>
                  <label><b>New Profession:</b><input type="text" name='profession' id='prof' required/></label>
                  <button id='submit' onClick={e => { e.preventDefault(); SubmitCeate()}}><b>submit</b></button>  
                </form>
    
                <p>{Create.message}</p>
            </>
        )
    
    
   
}

export default CreateProfession;