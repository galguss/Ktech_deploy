import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Image from "../../images/Ktech-EDGE.jpeg";
import "../../styles/header.css";

function Header() {
  const GlobalState = useSelector((state) => state.Login.value);
  return (
    <header>
      <img src={Image} />
      <ul className="Amborger">
        <li className="top">
          <div></div>
          <div></div>
          <div></div>
        </li>
        <li className="item">
          <Link className="linkH" to="/">
            עמוד הבית
          </Link>
        </li>
        <li className="item">
          <Link className="linkH" to="/users">
            נבחרת הפותרים
          </Link>
        </li>
        <li className="item">
          <Link
            className="linkH"
            to={
              !GlobalState.isLogged
                ? "/login"
                : GlobalState.level === "A"
                ? "/admin"
                : "/author"
            }
          >
            כניסה למורשים
          </Link>
        </li>
        <li className="item">
          <Link className="linkH" to="/questions">
            שאלות ופתרונות
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
