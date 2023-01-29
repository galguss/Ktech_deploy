import React, {useState, useEffect} from 'react';
import "../styles/menu.css";


function Menu(props){
    const [SendRes, setSendRes] = useState(false);
    
    useEffect(() => {
        if(!SendRes)
            responseList();
        setSendRes(true);
    },[]);

    const responseList = async () => {
        
        let parameter;
        let URL;
        switch(props.item){
            case "users":
                URL =`/admin`;
                parameter = "email";
                break;
            default:
                URL =`/${props.item}`;
                parameter = props.item;
                break;    
        }
        
        const response = await fetch(URL);
        const data = await response.json();
        const datalist = document.getElementById(`${props.item}`);

        for(let objectKey of data){
            const option = document.createElement('option');
            option.innerText = objectKey[parameter];
            datalist.appendChild(option);   
        }  
    }

    return (
        <datalist id={props.item}>
           
        </datalist>
    );
}

export default Menu;