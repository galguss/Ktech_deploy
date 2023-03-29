import React from "react";
import { Routes, Route } from 'react-router-dom';

import GetUsers from '../response/GetUsers';
import CreateUsers from '../response/CreateUsers';
import PatchUsers from '../response/PacthUsers';
import DeleteUsers from '../response/DeleteUsers';
import GetArticles from '../response/GetArticles';
import CreateArticles from '../response/CreateArticles';
import PatchArticles from '../response/PacthArticles';
import DeleteArticles from '../response/DeleteArticles';
import GetSubjects from '../response/GetSubjects';
import CreateSubjects from '../response/CreateSubjects';
import PatchSubjects from '../response/PacthSubjects';
import DeleteSubjects from '../response/DeleteSubject';
import GetProfessions from '../response/GetProfessions';
import CreateProfessions from '../response/CreateProfessions';
import PatchProfessions from '../response/PacthProfessions';
import DeleteProfessions from '../response/DeleteProfessions';
import '../../styles/body.css';



function Body(){
    return (
      <div id="body">
        <Routes>
          <Route path="admin/getUsers" element={<GetUsers />} />
          <Route path="admin/CreateUsers" element={<CreateUsers  />} />
          <Route path="admin/PatchUsers" element={<PatchUsers  />} />
          <Route path="admin/DeleteUsers" element={<DeleteUsers />} />
          <Route path="/" element={<GetArticles />} />
          <Route path="admin/CreateArticles" element={<CreateArticles />} />
          <Route path="admin/PatchArticles" element={<PatchArticles />} />
          <Route path="admin/DeleteArticles" element={<DeleteArticles />} />
          <Route path="admin/GetSubjects" element={<GetSubjects />} />
          <Route path="admin/CreateSubjects" element={<CreateSubjects />} />
          <Route path="admin/PatchSubjects" element={<PatchSubjects />} />
          <Route path="admin/DeleteSubjects" element={<DeleteSubjects />} />
          <Route path="admin/GetProfessions" element={<GetProfessions />} />
          <Route path="admin/CreateProfessions" element={<CreateProfessions />} />
          <Route path="admin/PatchProfessions" element={<PatchProfessions />} />
          <Route path="admin/DeleteProfessions" element={<DeleteProfessions />} />
        </Routes>
      </div>
    )
}

export default Body;