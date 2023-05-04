import React from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/reducers/userReducers";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/navbar.css";

function NavBar() {
  const Dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <nav>
      <Link className="linkN" to="/admin/getUsers"><b> ניהול כותבים</b></Link>
      <Link className="linkN" to="/admin"><b>ניהול שאלות</b></Link>
      <Link className="linkN" to="/admin/GetSubjects"><b>ניהול נושאים</b></Link>
      <Link className="linkN" to="/admin/GetProfessions"><b>ניהול מקצועות</b></Link>

      <div className="containerBTN">
        <Link className="BTN" to="/">
          גישה לאתר
        </Link>
        <Link className="BTN" to="/author">
          עריכת פרופיל
        </Link>

        <button
          className="BTN"
          onClick={() => {
            localStorage.setItem("isLogged", false);
            localStorage.setItem("user_id", -1);
            Dispatch(
              userLogin({
                isLogged: false,
                user_id: -1,
                level: "",
                image: "",
                favorite: "",
                hobbies: "",
              })
            );
            navigate("/");
          }}
        >
          התנתק
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
