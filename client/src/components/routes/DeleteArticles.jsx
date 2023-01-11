import React, { useState } from 'react';
import '../../styles/routesStyle/login.css';

function DeleteArticle({isLogged}){
    const [Delete, setDelete] = useState('All fields must be filled');
    
    
    async function SubmitDelete(){

        const InputArticleId = document.getElementById('ArticleId');

        try {
            if((!InputArticleId.value)){
                setDelete("Who would you like to delete?");
            }else{
                const URL = '/articles';
                const response = await fetch(URL, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                      },
                    body: JSON.stringify({
                        id:InputArticleId.value
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
                  <label><b>Article Id:</b><input type="number" name='ArticleId' id='ArticleId' required/></label>
                  <button id='submit' onClick={e => { e.preventDefault(); SubmitDelete()}}><b>submit</b></button>  
                </form>
    
                <p>{Delete.message}</p>
            </>
        )
    }
    
   
}

export default DeleteArticle;