import React from "react";
import { Routes, Route } from 'react-router-dom';

import GetUsers from './routes/GetUsers';
import CreateUsers from './routes/CreateUsers';
import PatchUsers from './routes/PacthUsers';
import DeleteUsers from './routes/DeleteUsers';
import GetArticles from './routes/GetArticles';
import CreateArticles from './routes/CreateArticles';
import PatchArticles from './routes/PacthArticles';
import DeleteArticles from './routes/DeleteArticles';
import GetSubjects from './routes/GetSubjects';
import CreateSubjects from './routes/CreateSubjects';
import PatchSubjects from './routes/PacthSubjects';
import DeleteSubjects from './routes/DeleteSubject';
import GetProfessions from './routes/GetProfessions';
import CreateProfessions from './routes/CreateProfessions';
import PatchProfessions from './routes/PacthProfessions';
import DeleteProfessions from './routes/DeleteProfessions';
import '../styles/body.css';



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