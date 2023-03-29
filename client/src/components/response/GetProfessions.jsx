import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import '../../styles/routesStyle/getUsers.css';

function GetProfessions({ isLogged }){
    const [Professions, setProfessions] = useState([{}]);

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

        
            return(
       
                <div id='userTable'>
                <DataTable 
                title ='Professions'
                columns={colums}
                data ={Professions}
                />
                <button onClick={fetchProfessionsData}><b>Get Professions</b></button>
                </div>       
        )
      
}

export default GetProfessions;