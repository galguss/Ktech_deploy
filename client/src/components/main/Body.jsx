import React , { useState }from "react";
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
  const [User, setUser] = useState();
  const [SubjectId, setSubjectId] = useState();
  const [ProfessionId, setProfessionId] = useState();
  const [Article, setArticle] = useState();

  return (
    <div className="container">
      <Routes>
        <Route path="/getUsers" element={<GetUsers handleGetUserId = {(val) => setUser(val)}/>} />
        <Route path="/CreateUsers" element={<CreateUsers />} />
        <Route path="/PatchUsers" element={<PatchUsers User ={User} />} />
        <Route path="/" element={<GetArticles handleGetArticle ={(val) => setArticle(val)}/>} />
        <Route path="/CreateArticles" element={<CreateArticles/>} />
        <Route path="/PatchArticles" element={<PatchArticles Article={Article} />} />
        <Route path="/GetSubjects" element={<GetSubjects handleGetSubjectId ={(val) => setSubjectId(val)}/>} />
        <Route path="/CreateSubjects" element={<CreateSubjects  />} />
        <Route path="/PatchSubjects" element={<PatchSubjects SubjectId = {SubjectId}/>} />
        <Route path="/GetProfessions" element={<GetProfessions handleGetProfessionId = {(val) => setProfessionId(val)}/>} />
        <Route path="/CreateProfessions" element={<CreateProfessions />} />
        <Route path="/PatchProfessions" element={<PatchProfessions ProfessionId={ProfessionId} />} />
      </Routes>
    </div>
  );
}

export default Body;
