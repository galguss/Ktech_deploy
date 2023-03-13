import React from "react"
import { Routes, Route } from 'react-router-dom';

import Profile from "./Profile"
import Questions from "./Questions"

function Author({userData})
{
    
    return(
        <>
            <Questions />
            <Profile item = {userData}/>
        </>
    )
}

export default Author;