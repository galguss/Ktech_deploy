import React, { useState } from 'react';
import '../../styles/routesStyle/login.css';

import Menu from "../Menu";

function CreateArticles(){
    const [Create, setCeate] = useState('All fields must be filled');
    
    async function SubmitCeate(){
        const InputSubjectId = document.getElementById('subjectId');
        const InputProfessionId = document.getElementById('professionId');
        const InputSeasonAndQuestionNumner = document.getElementById('SQN');
        const InputLevel = document.getElementById('level');
         const InputUpLoadFile = document.getElementById('file').files[0];
        const formArticle = document.getElementById('articleForm');
        try {
            if((!InputSubjectId.value) || (!InputProfessionId.value) || (!InputSeasonAndQuestionNumner.value) || (!InputLevel.value)){
                setCeate("Please check the fields");
            }else{
                const formData = new FormData(formArticle);
                formData.append('page', InputUpLoadFile);

                const URL = '/articles';
                const response = await fetch(URL, 
                    {
                        method: 'POST',
                        body: formData
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
                <form id='articleForm'>
                  <label><b>subject:</b><input type="text" list='subject' name='subjectValue' id='subjectId' required/></label>
                  <Menu item = "subject" />
                  <label><b>profession:</b><input type="text" list='profession' name='professionValue' id='professionId' required/></label>
                  <Menu item = "profession" />
                  <label><b>Season <br /> And <br /> Question Numner:</b><input type="text" name='season_and_Question_numner' id='SQN' required/></label>
                  <label><b>Level:</b><input type="text" name='level' id='level' required/></label>
                  <label><b></b><input type="file" id='file' /></label>
                  <button id='submit' onClick={e => { e.preventDefault(); SubmitCeate()}} ><b>submit</b></button>  
                </form>

                <p>{Create.message}</p>
            </>
        )
    
    
   
}

export default CreateArticles;