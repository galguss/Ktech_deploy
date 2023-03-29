import React from 'react';
import "../../styles/menu.css";


function Menu({items, id = "", paramet}){
    /*const [SendRes, setSendRes] = useState(false);

    let parameter = useRef();   

    useEffect(() => {
        if(!SendRes)
            responseList();
        setSendRes(true);
    },[]);

    const responseList = async () => {
        let URL;
        switch(item){
            case "users":
                URL =`/admin`;
                parameter ='email';
                break;
            default:
                URL =`/${item}`;
                parameter = item;
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
    }*/

    return (
        <datalist id={id} >
            {items.length > 0 && items.map((obj, index) => <option key={`item${index}`}>{obj.paramet}</option>)}
        </datalist>
    );
}

export default Menu;