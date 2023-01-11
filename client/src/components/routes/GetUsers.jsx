import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import '../../styles/routesStyle/getUsers.css';

function GetUsers({ isLogged }){
    const [users, setUsers] = useState([{}]);

    const colums = [
        {
            name: 'user_id',
            selector: (row) => row.user_id
        },
        {
            name: 'email',
            selector: (row) => row.email
        },
        {
            name: 'password',
            selector: (row) => row.password
        },
        {
            name: 'github',
            selector: (row) => row.github
        },
        {
            name: 'full_name',
            selector: (row) => row.full_name
        },
        {
            name: 'image',
            selector: (row) => row.image
        },
        {
            name: 'level',
            selector: (row) => row.level
        }
    ];
    
    useEffect(() => fetchUsersData, []);

    async function fetchUsersData(){
        const URL = '/admin';
        const response = await fetch(URL);
        
        const users = await response.json();
        setUsers(users);
        
    }

        if(!isLogged){
            
            return (
                <>
                    <p>Must be logged in to the system</p>
                </>
            )
        }else {
            return(
       
                <div id='userTable'>
                <DataTable 
                title ='Users'
                columns={colums}
                data ={users}
                />
                </div>       
        )
    }  
}

export default GetUsers;