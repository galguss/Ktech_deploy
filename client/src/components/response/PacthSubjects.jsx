import React, { useEffect, useState } from 'react';
import '../../styles/routesStyle/login.css';

import Input from '../main/Input'
import Menu from "../main/Menu"

function PacthSubject(){
    const [Patch, setPatch] = useState('All fields must be filled');
    const [DataList, setDataList] = useState([]);
    const [ValSub, SetValSub] = useState();
    const [newVal, SetNewVal] = useState();

    async function getSubject(){
        let res = await fetch("/subject");
        setDataList(await res.json());
    }

    useEffect(() => {getSubject()}, []);
    
    async function SubmitPatch(){
        try {
                const URL = '/subject';
                const response = await fetch(URL, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                      },
                    body: JSON.stringify({
                        subjectData: ValSub,
                        newValue: newVal
                    })  
                });
                const data = await response.json();
                setPatch(data);
                
            
        } catch (error) {
            setPatch("One or more of the fields are invalid");
        }
       
    }
        return (
            <>
                <div className='response'>
                  <Input label = "Subject" list = "subject" type = 'text' handleValue = {(val) => SetValSub(val)} />
                  <Menu items = {DataList} val="subject" nameInput = "subject"/>
                  <Input label = "New Subject" type = 'text' handleValue = {(val) => SetNewVal(val)} />
                  <p className='chatBox'>{Patch.message}</p>
                  <button className='btn' onClick={() => { SubmitPatch(); }}><b>submit</b></button>  
                </div>
            </>
        )
    
    
   
}

export default PacthSubject;