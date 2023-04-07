import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import "../../styles/main.css";

import Home from "./Home";
import Admin from "./Admin";
import Author from "../author/Author";
import PrivateComponents from "./PrivateComponents";

function Main() {
  const stateGlobal = useSelector(state => state.Login.value);
  return (
    <div className="main">
      <Routes>
        <Route path="*" element={<Home />} />
        <Route element={<PrivateComponents />}>
          <Route element={stateGlobal.level === 'A' && <Admin />} path="/admin/*" exact />
          <Route element={<Author />} path="/author" exact/>
        </Route>
      </Routes>
    </div>
  );
}

export default Main;
