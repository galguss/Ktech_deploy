import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';

import Login from './routes/login';
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
    const [Logged, setLogged] = useState(false);

    return (
      <div id="body">
        <Routes>
          <Route  path="/" element = {<Login cb={setLogged} />} />
          <Route path="/getUsers" element={<GetUsers isLogged={Logged} />} />
          <Route path="/CreateUsers" element={<CreateUsers isLogged={Logged} />} />
          <Route path="/PatchUsers" element={<PatchUsers isLogged={Logged} />} />
          <Route path="/DeleteUsers" element={<DeleteUsers isLogged={Logged} />} />
          <Route path="/GetArticles" element={<GetArticles isLogged={Logged} />} />
          <Route path="/CreateArticles" element={<CreateArticles isLogged={Logged} />} />
          <Route path="/PatchArticles" element={<PatchArticles isLogged={Logged} />} />
          <Route path="/DeleteArticles" element={<DeleteArticles isLogged={Logged} />} />
          <Route path="/GetSubjects" element={<GetSubjects isLogged={Logged} />} />
          <Route path="/CreateSubjects" element={<CreateSubjects isLogged={Logged} />} />
          <Route path="/PatchSubjects" element={<PatchSubjects isLogged={Logged} />} />
          <Route path="/DeleteSubjects" element={<DeleteSubjects isLogged={Logged} />} />
          <Route path="/GetProfessions" element={<GetProfessions isLogged={Logged} />} />
          <Route path="/CreateProfessions" element={<CreateProfessions isLogged={Logged} />} />
          <Route path="/PatchProfessions" element={<PatchProfessions isLogged={Logged} />} />
          <Route path="/DeleteProfessions" element={<DeleteProfessions isLogged={Logged} />} />
        </Routes>
      </div>
    )
}

export default Body;