import React from "react";
import '../styles/main.css';
import NavBar from './NavBar';
import Body from "./Body";

function Main(){
    return (
      <div id="main">
        <NavBar />
        <Body />
      </div>   
    )
}

export default Main;