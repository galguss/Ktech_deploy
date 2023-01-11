import React from "react";
import { Link } from 'react-router-dom';
import '../styles/header.css';

function Header(){
    return (
        <header>
            <h1>K-tech-edge</h1>
            <Link to='/'>Login</Link>
        </header>
    )
}

export default Header;