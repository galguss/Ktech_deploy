import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";


function Nav() {
  const GlobalState = useSelector((state) => state.Login.value);
  return (
    <nav>
      <Link className="linkN" to="/">
        עמוד הבית
      </Link>
      <Link className="linkN" to="/users">
        נבחרת הפותרים
      </Link>
      <Link
        className="linkN"
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
      <Link className="linkN" to="/questions">
        שאלות ופתרונות
      </Link>
    </nav>
  );
}

export default Nav;
