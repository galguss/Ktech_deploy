import React from "react";
import { Routes, Route } from "react-router-dom";

import Nav from "../main/Nav";
import Content from "../main/Content";
import Login from "../forms/login";

function Home() {
  return (
    <div className="body-web">
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default Home;
