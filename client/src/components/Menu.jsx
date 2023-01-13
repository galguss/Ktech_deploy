import React, { useEffect } from 'react';
import "../styles/menu.css";


function Menu(props){
    useEffect(() => responseList,[]);

    const responseList = async () => {
        const URL =`/${props.item}`;
        const response = await fetch(URL);
        const data = await response.json();
        
        const datalist = document.getElementById(`${props.item}`);

        for(let objectKey of data){
            const option = document.createElement('option');
            option.innerText = objectKey[props.item];
            datalist.appendChild(option);   
        }  
    }

    return (
        <datalist id={props.item}>
        
        </datalist>
    );
}

export default Menu;