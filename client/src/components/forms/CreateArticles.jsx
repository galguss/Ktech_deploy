import React, { useState, useEffect } from "react";

import Menu from "../main/Menu";
import Input from "../main/Input";

function CreateArticles() {
  const [Create, setCeate] = useState("All fields must be filled");
  const [valSub, setValSub] = useState("");
  const [valProf, setValProf] = useState("");
  const [valSAQ, setValSAQ] = useState("");
  const [valLevel, setValLevel] = useState("");
  const [valFile, setValFile] = useState("");

  const [lisetSub, setListSub] = useState([]);
  const [lisetProf, setListProf] = useState([]);

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

  async function SubmitCeate() {
    try {
      const formData = new FormData();
      formData.append("subjectValue", valSub);
      formData.append("professionValue", valProf);
      formData.append("season_and_Question_numner", valSAQ);
      formData.append("level", valLevel);
      formData.append("page", valFile);

      const URL = "/articles";
      const response = await fetch(URL, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setCeate(data);
    } catch (error) {
      setCeate("One or more of the fields are invalid");
    }
  }

  return (
    <form className="response">
      <Input
        label="Subject"
        type="text"
        list="subject"
        handleValue={(val) => setValSub(val)}
      />
      <Menu items={lisetSub} nameInput="subject" val="subject" />
      <Input
        label="Profession"
        type="text"
        list="profession"
        handleValue={(val) => setValProf(val)}
      />
      <Menu items={lisetProf} nameInput="profession" val="profession" />
      <Input
        label="Season And Question Numner"
        type="text"
        handleValue={(val) => setValSAQ(val)}
      />
      <fieldset className="userLevel">
          <legend>
            <b>Question level</b>
          </legend>
          <label>
            <input 
              onChange={(e) => setValLevel(e.target.value)}
              name=" level"
              value="א"
              type="radio"
              />
              חלק א
          </label>
          <label>
            <input 
              onChange={(e) => setValLevel(e.target.value)}
              name=" level"
              value="ב"
              type="radio"
              />
              חלק ב
          </label>
          <label>
            <input 
              onChange={(e) => setValLevel(e.target.value)}
              name=" level"
              value="ג"
              type="radio"
              />
              חלק ג
          </label>
        </fieldset>
      <Input label="File" type="file" handleValue={(val) => setValFile(val)} />
      <p className="message"># שם הקובץ חייב להיות באנגלית</p>
      <p className="chatBox">{Create.message}</p>
      <button
        className="btn"
        onClick={(e) => {
          e.preventDefault();
          SubmitCeate();
        }}
      >
        <b>Create</b>
      </button>
    </form>
  );
}

export default CreateArticles;
