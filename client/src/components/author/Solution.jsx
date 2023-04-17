import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Input from "../main/Input";

function Solution({ item }) {
  const GlobalState = useSelector((state) => state.Login.value);
  const navigate = useNavigate();
  const [solution, setSolution] = useState("");

  async function uploadSolution() {
    const formData = new FormData();
    if (solution !== "") {
      formData.append("id", item.article_id);
      formData.append("page", solution);
      formData.append("user_id", GlobalState.user_id);
    }

    await fetch("/articles/solution", {
      method: "PATCH",
      body: formData,
    });
  }

  return (
    <div className="SQN">
      <img src={item.page_id} className="image"/>
      <p className="message"># שם הקובץ חייב להיות באנגלית</p>
      <form className="response">
        <Input
          label="העלאת פיתרון"
          type="file"
          handleValue={(val) => {
            setSolution(val);
          }}
        />
        <button
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            uploadSolution();
            navigate('/author');
          }}
        >
          העלה תשובתך
        </button>
      </form>
    </div>
  );
}

export default Solution;
