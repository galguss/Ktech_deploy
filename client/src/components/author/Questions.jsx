import React from "react"
import { Link } from 'react-router-dom';

function Questions()
{
    return(
        <nav>
            <ul id="solution">
                <li className="top">שאלות לפיתרון</li>
            </ul>
            <ul id="test">
                <li className="top">שאלות לבדיקה</li>
            </ul>

        </nav>
    )
}

export default Questions;