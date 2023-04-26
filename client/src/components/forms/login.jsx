import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "../../redux/reducers/userReducers";

import Input from "../main/Input";

function Login() {
  const stateGlobal = useSelector((state) => state.Login.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Login, setLogin] = useState("All fields must be filled");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (typeof Login !== "string") {
      if (Login.level === "A") navigate("/admin");
      else navigate("/author");
    }
  }, [Login]);

  async function SubmitLogin() {
    try {
      const URL = "/login";
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const data = await response.json();
      setLogin(data);

      // Redux Hooks
      const user = {
        isLogged: typeof data.token !== "undefined" && data.token !== "",
        user_id: data.user_id,
        email: data.email,
        level: data.level,
        image: data.image,
        favorite: data.favorite,
        hobbies: data.hobbies,
      };

      localStorage.setItem("isLogged", user.isLogged);
      localStorage.setItem(
        "user_id",
        Math.floor(Math.random() * 9 + 1) * 10 +
          `${user.user_id}` +
          Math.floor(Math.random() * 9 + 1) * 10
      );

      dispatch(userLogin(user));
    } catch (error) {
      setLogin("Incorrect email or password");
    }
  }

  return (
    <>
      <form className="response">
        <Input
          label="Email"
          type="email"
          handleValue={(valueE) => setEmail(valueE)}
        />
        <Input
          label="Paswword"
          type="password"
          handleValue={(valueP) => setPassword(valueP)}
        />
        <p className="chatBox">{Login.message}</p>
        <button
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            SubmitLogin();
          }}
        >
          <b>login</b>
        </button>
      </form>
    </>
  );
}

export default Login;
