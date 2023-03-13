import React, {useState, useEffect} from "react"
import Nav from './web/Nav';
import Content from "./web/Content";
import { Routes, Route } from 'react-router-dom';


import Login from "./routes/login"

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
            <Routes>
                <Route path="/" element = {<Content />} />
                <Route path="/login" element = {<Login callback = {data} />} />
            </Routes>    
        </>
    )
}

export default Home;