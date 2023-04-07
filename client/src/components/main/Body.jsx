import React from "react";
import { Routes, Route } from "react-router-dom";

import GetUsers from "../forms/GetUsers";
import CreateUsers from "../forms/CreateUsers";
import PatchUsers from "../forms/PacthUsers";
import DeleteUsers from "../forms/DeleteUsers";
import GetArticles from "../forms/GetArticles";
import CreateArticles from "../forms/CreateArticles";
import PatchArticles from "../forms/PacthArticles";
import DeleteArticles from "../forms/DeleteArticles";
import GetSubjects from "../forms/GetSubjects";
import CreateSubjects from "../forms/CreateSubjects";
import PatchSubjects from "../forms/PacthSubjects";
import DeleteSubjects from "../forms/DeleteSubject";
import GetProfessions from "../forms/GetProfessions";
import CreateProfessions from "../forms/CreateProfessions";
import PatchProfessions from "../forms/PacthProfessions";
import DeleteProfessions from "../forms/DeleteProfessions";
import "../../styles/body.css";

function Body() {
  return (
    <div className="container">
      <Routes>
        <Route path="/getUsers" element={<GetUsers />} />
        <Route path="/CreateUsers" element={<CreateUsers />} />
        <Route path="/PatchUsers" element={<PatchUsers />} />
        <Route path="/DeleteUsers" element={<DeleteUsers />} />
        <Route path="/" element={<GetArticles />} />
        <Route path="/CreateArticles" element={<CreateArticles />} />
        <Route path="/PatchArticles" element={<PatchArticles />} />
        <Route path="/DeleteArticles" element={<DeleteArticles />} />
        <Route path="/GetSubjects" element={<GetSubjects />} />
        <Route path="/CreateSubjects" element={<CreateSubjects />} />
        <Route path="/PatchSubjects" element={<PatchSubjects />} />
        <Route path="/DeleteSubjects" element={<DeleteSubjects />} />
        <Route path="/GetProfessions" element={<GetProfessions />} />
        <Route path="/CreateProfessions" element={<CreateProfessions />} />
        <Route path="/PatchProfessions" element={<PatchProfessions />} />
        <Route path="/DeleteProfessions" element={<DeleteProfessions />} />
      </Routes>
    </div>
  );
}

export default Body;
