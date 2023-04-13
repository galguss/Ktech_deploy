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
      <ul>
        <li className="top">
          <b> ניהול כותבים </b>
        </li>
        <li className="item">
          <Link className="link" to="/admin/getUsers">
            הצגת כותבים
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/admin/CreateUsers">
            יצירת כותבים
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/admin/PatchUsers">
            עריכת כותבים
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/admin/DeleteUsers">
            מחיקת כותבים
          </Link>
        </li>
      </ul>
      <ul>
        <li className="top">
          <b> ניהול שאלות </b>
        </li>
        <li className="item">
          <Link className="link" to="/admin">
            הצגת שאלות
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/admin/CreateArticles">
            יצירת שאלות
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/admin/PatchArticles">
            עריכת שאלות
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/admin/DeleteArticles">
            מחיקת שאלות
          </Link>
        </li>
      </ul>
      <ul>
        <li className="top">
          <b> ניהול נושאים </b>
        </li>
        <li className="item">
          <Link className="link" to="/admin/GetSubjects">
            הצגת נושאים
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/admin/CreateSubjects">
            יצירת נושאים
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/admin/PatchSubjects">
            עריכת נושאים
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/admin/DeleteSubjects">
            מחיקת נושאים
          </Link>
        </li>
      </ul>
      <ul>
        <li className="top">
          <b> ניהול מקצועות </b>
        </li>
        <li className="item">
          <Link className="link" to="/admin/GetProfessions">
            הצגת מקצועות
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/admin/CreateProfessions">
            יצירת מקצועות
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/admin/PatchProfessions">
            עריכת מקצועות
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/admin/DeleteProfessions">
            מחיקת מקצועות
          </Link>
        </li>
      </ul>

      <Link className="BTN" to="/">
        גישה לאתר
      </Link>

      <button
        className="BTN"
        onClick={() => {
          localStorage.setItem("isLogged", false);
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
    </nav>
  );
}

export default NavBar;
