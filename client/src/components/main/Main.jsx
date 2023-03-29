import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import '../../styles/main.css';

import Home from "./Home"
import Admin from "./Admin"
import Author from "../author/Author"



function Main(){
    const [Data, setData] = useState({});
    const data = (value) => {
      setData(value);
    }
    return (
      <div id="main">
        <Routes>
            <Route path="*" element = {<Home callback = {data}/>}/>
            <Route path="/admin/*" element = {<Admin/>}/>
            <Route path="/author" element = {<Author userData = {Data}/>}/>
        </Routes>
      </div>   
    )
}

export default Main;