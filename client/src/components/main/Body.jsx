import React from "react";
import { Routes, Route } from "react-router-dom";

import GetUsers from "../response/GetUsers";
import CreateUsers from "../response/CreateUsers";
import PatchUsers from "../response/PacthUsers";
import DeleteUsers from "../response/DeleteUsers";
import GetArticles from "../response/GetArticles";
import CreateArticles from "../response/CreateArticles";
import PatchArticles from "../response/PacthArticles";
import DeleteArticles from "../response/DeleteArticles";
import GetSubjects from "../response/GetSubjects";
import CreateSubjects from "../response/CreateSubjects";
import PatchSubjects from "../response/PacthSubjects";
import DeleteSubjects from "../response/DeleteSubject";
import GetProfessions from "../response/GetProfessions";
import CreateProfessions from "../response/CreateProfessions";
import PatchProfessions from "../response/PacthProfessions";
import DeleteProfessions from "../response/DeleteProfessions";
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
