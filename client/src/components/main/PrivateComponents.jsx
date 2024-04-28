import React, { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "../../redux/reducers/userReducers";

function PrivateComponents() {
  const [isLogged, setIsLogged] = useState(localStorage.getItem("isLogged"));

  const dispatch = useDispatch();
  const globalState = useSelector((state) => state.Login.value);

  // Save Global State if User is Logged
  async function handleGetUser(id) {
    const res = await fetch(`/admin/${id}`);
    const data = await res.json();

    const user = {
      isLogged: isLogged,
      user_id: data.user_id,
      email: data.email,
      level: data.level,
      image: data.image,
      favorite: data.favorite,
      hobbies: data.hobbies,
    };
    dispatch(userLogin(user));
  }

  useEffect(() => {
    if (isLogged === "true" && globalState.user_id === -1) {
      let id = localStorage.getItem("user_id");
      console.log("hii, ", id);
      let user_id = "";
      for (let k = 2; k < id.length - 2; k++) user_id += id[k];
      user_id = Number(user_id);
      handleGetUser(user_id);
    }
  }, []);

  return isLogged === "true" ? <Outlet /> : <Navigate to="login" />;
}

export default PrivateComponents;
