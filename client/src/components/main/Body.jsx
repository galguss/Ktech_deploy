import React from "react";
import { Routes, Route } from "react-router-dom";

import GetUsers from "../forms/GetUsers";
import CreateUsers from "../forms/CreateUsers";
import PatchUsers from "../forms/PacthUsers";
import GetArticles from "../forms/GetArticles";
import CreateArticles from "../forms/CreateArticles";
import PatchArticles from "../forms/PacthArticles";
import GetSubjects from "../forms/GetSubjects";
import CreateSubjects from "../forms/CreateSubjects";
import PatchSubjects from "../forms/PacthSubjects";
import GetProfessions from "../forms/GetProfessions";
import CreateProfessions from "../forms/CreateProfessions";
import PatchProfessions from "../forms/PacthProfessions";
import "../../styles/body.css";

function Body() {
  return (
    <div className="container">
      <Routes>
        <Route path="/getUsers" element={<GetUsers />} />
        <Route path="/CreateUsers" element={<CreateUsers />} />
        <Route path="/PatchUsers" element={<PatchUsers />} />
        <Route path="/" element={<GetArticles />} />
        <Route path="/CreateArticles" element={<CreateArticles />} />
        <Route path="/PatchArticles" element={<PatchArticles />} />
        <Route path="/GetSubjects" element={<GetSubjects />} />
        <Route path="/CreateSubjects" element={<CreateSubjects />} />
        <Route path="/PatchSubjects" element={<PatchSubjects />} />
        <Route path="/GetProfessions" element={<GetProfessions />} />
        <Route path="/CreateProfessions" element={<CreateProfessions />} />
        <Route path="/PatchProfessions" element={<PatchProfessions />} />
      </Routes>
    </div>
  );
}

export default Body;
