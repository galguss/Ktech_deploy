import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/reducers/userReducers";

import Input from "../main/Input";

function Login() {
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
        level: data.level,
        image: data.image,
      };

      dispatch(userLogin(user));
      localStorage.setItem("isLogged", user.isLogged);
    } catch (error) {
      setLogin("Incorrect email or password");
    }
  }

  return (
    <>
      <div className="response">
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
          onClick={() => {
            SubmitLogin();
          }}
        >
          <b>login</b>
        </button>
      </div>
    </>
  );
}

export default Login;
