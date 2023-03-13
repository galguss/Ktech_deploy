import React, { useState } from 'react';
import '../../styles/routesStyle/login.css';

function PacthArticles({isLogged}){
    const [Patch, setPatch] = useState('All fields must be filled');
    
    
    async function SubmitPatch(){

        const InputColumn = document.getElementById('column');
        const InputArticleId = document.getElementById('articleId');
        const InputNewValue = document.getElementById('newValue');

        try {
            if((!InputColumn.value) || (!InputArticleId.value) || (!InputNewValue.value)){
                setPatch("Please check the fields");
            }else{
                const URL = '/articles';
                const response = await fetch(URL, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                      },
                    body: JSON.stringify({
                        id: InputArticleId.value,
                        column: InputColumn.value,
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
                  <label><b>Id:</b><input type="number" name='articleId' id='articleId' required/></label>
                  <label><b>column:</b><input type="text" name='column' id='column' required/></label>
                  <label><b>New Value:</b><input type="text" name='newValue' id='newValue' required/></label>
                  <button id='submit' onClick={e => { e.preventDefault(); SubmitPatch()}}><b>submit</b></button>  
                </form>
    
                <p>{Patch.message}</p>
            </>
        )
    
    
   
}

export default PacthArticles;