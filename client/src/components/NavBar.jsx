import React from "react";
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

function NavBar(){
    return (
        <nav>
            <p><b> ניהול כותבים </b></p>
            <Link to="/getUsers">הצגת כותבים</Link>
            <Link to="/CreateUsers">יצירת כותבים</Link>
            <Link to="/PatchUsers">עריכת כותבים</Link>
            <Link to="/DeleteUsers">מחיקת כותבים</Link>

            <p><b> ניהול שאלות </b></p>
            <Link to="/GetArticles">הצגת שאלות</Link>
            <Link to="/CreateArticles">יצירת שאלות</Link>
            <Link to="/PatchArticles">עריכת שאלות</Link>
            <Link to="/DeleteArticles">מחיקת שאלות</Link>

            <p><b> ניהול נושאים </b></p>
            <Link to="/GetSubjects">הצגת נושאים</Link>
            <Link to="/CreateSubjects">יצירת נושאים</Link>
            <Link to="/PatchSubjects">עריכת נושאים</Link>
            <Link to="/DeleteSubjects">מחיקת נושאים</Link>

            <p><b> ניהול מקצועות </b></p>
            <Link to="/GetProfessions">הצגת מקצועות</Link>
            <Link to="/CreateProfessions">יצירת מקצועות</Link>
            <Link to="/PatchProfessions">עריכת מקצועות</Link>
            <Link to="/DeleteProfessions">מחיקת מקצועות</Link>
            
            <button>גישה לאתר</button>
        </nav>
    )
}

export default NavBar;