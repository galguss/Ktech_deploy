import React from "react";
import Image from "../../images/ktechedge.jpeg";
import '../../styles/header.css';

function Header(){
    return (
        <header>
            <img src={Image} />
        </header>
    )
}

export default Header;