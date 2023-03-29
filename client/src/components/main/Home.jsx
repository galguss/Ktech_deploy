import React, {useState, useEffect} from "react"
import Nav from '../main/Nav';
import Content from "../main/Content";
import { Routes, Route } from 'react-router-dom';


import Login from "../response/login"

function Home({callback}){
    const data = (value) => {
        callback(value);
    }
    /*const [ user, setUser] = useState({});
    console.log(`user = ${user}`);*/
    //useEffect(()=> back(() => user), [user]);
    //back(() => user);
    return (
        <>
            <Nav />
            <div className="container">
            <Routes>
                <Route path="/" element = {<Content />} />
                <Route path="/login" element = {<Login callback = {data} />} />
            </Routes>
            </div>    
        </>
    )
}

export default Home;