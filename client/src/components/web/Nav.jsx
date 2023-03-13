import React from "react"
import { Link } from 'react-router-dom'
import "../../styles/navbar.css"


function Nav(){
    return (
        <nav>
            <Link className="linkN"  to="/">עמוד הבית</Link>
            <Link className="linkN" to="/">נבחרת הפותרים</Link>
            <Link className="linkN" to ="/login">כניסה למורשים</Link>
            <Link className="linkN" to = "/">שאלות ופתרונות</Link> 
        </nav>
    )
}

export default Nav;