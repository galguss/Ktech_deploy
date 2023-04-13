import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/reducers/userReducers";
import { Link, useNavigate } from "react-router-dom";

function Questions({items = []}) {
  const Dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <nav>
      <ul id="solution">
        <li className="top">שאלות לפיתרון</li>
        {items.map(
          (item, index) =>
            item.there_is_a_solution === "false" && (
              <li className="item" key={"solution"+item.article_id}>
                <Link to={"/author/SQN"+ index}>
                  {item.season_and_Question_numner}
                </Link>
              </li>
            )
        )}
      </ul>
      <ul id="test">
        <li className="top">שאלות לבדיקה</li>
        {items.map(
          (item) =>
            item.there_is_a_solution === "true" &&
            item.inspection_confirmaction === "false" && (
              <li className="item" key={"test"+item.article_id}>
                <Link to={item.season_and_Question_numner}>
                  {item.season_and_Question_numner}
                </Link>
              </li>
            )
        )}
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

export default Questions;
