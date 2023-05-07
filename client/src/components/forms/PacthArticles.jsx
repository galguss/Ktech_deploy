import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import Input from "../main/Input";
import Menu from '../main/Menu';

function PacthArticles({Article}) {
  const [Patch, setPatch] = useState("All fields must be filled");
  const [valSub, setValSub] = useState(Article.subject_id);
  const [valProf, setValProf] = useState(Article.profession_id);
  const [valSAQ, setValSAQ] = useState(Article.season_and_Question_numner);

  const [lisetSub, setListSub] = useState([]);
  const [lisetProf, setListProf] = useState([]);
  const navigate = useNavigate();

  async function getSubjects() {
    const URL = "/subject";
    const res = await fetch(URL);
    setListSub(await res.json());
  }

  async function getProfession() {
    const URL = "/profession";
    const res = await fetch(URL);
    setListProf(await res.json());
  }

  useEffect(() => {
    getSubjects();
    getProfession();
  }, []);

  async function SubmitPatch() {
    try {
      const URL = "/articles";
      const response = await fetch(URL, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: Article.article_id,
          subjectValue: valSub,
          professionValue: valProf,
          season_and_Question_numner:valSAQ
        }),
      });
      const data = await response.json();
      setPatch(data);
    } catch (error) {
      setPatch("One or more of the fields are invalid");
    }
  }

  return (
    <>
      <form className="response">
      <Input
        label="Subject"
        type="text"
        list="subject"
        handleValue={(val) => setValSub(val)}
        value={valSub}
      />
      <Menu items={lisetSub} nameInput='subject' val="subject" />
      <Input
        label="Profession"
        type="text"
        list="profession"
        handleValue={(val) => setValProf(val)}
        value={valProf}
      />
      <Menu items={lisetProf} nameInput='profession' val="profession" />
      <Input
        label="Season And Question Numner"
        type="text"
        handleValue={(val) => setValSAQ(val)}
        value={valSAQ}
      />

        <p className="chatBox">{Patch.message}</p>
        <button
          className="btn"
          onClick={(e) => {
            SubmitPatch();
            e.preventDefault();
            navigate('/admin');
          }}
        >
          <b>Pacth</b>
        </button>
      </form>
    </>
  );
}

export default PacthArticles;
