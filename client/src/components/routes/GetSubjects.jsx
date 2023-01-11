import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import '../../styles/routesStyle/getUsers.css';

function GetSubjects({ isLogged }){
    const [Subjects, setSubjects] = useState([{}]);
    
    useEffect(() => fetchSubjectsData, []);
    const colums = [
        {
            name: 'subject_id',
            selector: (row) => row.subject_id
        },
        {
            name: 'subject',
            selector: (row) => row.subject
        }
    ];
    

    async function fetchSubjectsData(){
        const URL = '/subject';
        const response = await fetch(URL);
        
        const sub = await response.json();
        setSubjects(sub);
    }

        if(!isLogged){
            
            return (
                <>
                    <p>Must be logged in to the system</p>
                </>
            )
        }else {
            return(
       
                <div id='subjectsTable'>
                <DataTable 
                title ='Subjects'
                columns={colums}
                data ={Subjects}
                />
                </div>       
        )
    }  
}

export default GetSubjects;