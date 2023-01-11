import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import '../../styles/routesStyle/getUsers.css';

function GetProfessions({ isLogged }){
    const [Professions, setProfessions] = useState([{}]);
    
    useEffect(() => fetchProfessionsData, []);
    const colums = [
        {
            name: 'profession_id',
            selector: (row) => row.profession_id
        },
        {
            name: 'profession',
            selector: (row) => row.profession
        }
    ];
    

    async function fetchProfessionsData(){
        const URL = '/profession';
        const response = await fetch(URL);
        
        const prof = await response.json();
        setProfessions(prof);
    }

        if(!isLogged){
            
            return (
                <>
                    <p>Must be logged in to the system</p>
                </>
            )
        }else {
            return(
       
                <div id='ProfessionsTable'>
                <DataTable 
                title ='Professions'
                columns={colums}
                data ={Professions}
                />
                </div>       
        )
    }  
}

export default GetProfessions;