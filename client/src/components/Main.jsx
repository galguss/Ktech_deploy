import React from "react";
import { Routes, Route } from 'react-router-dom';
import '../styles/main.css';

import Home from "./Home"
import Admin from "./Admin"



function Main(){
    return (
      <div id="main">
        <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/admin/*" element = {<Admin/>}/>
            <Route path="/author" element = {<Home/>}/>
        </Routes>
      </div>   
    )
}

export default Main;