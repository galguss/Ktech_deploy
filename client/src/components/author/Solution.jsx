import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Input from "../main/Input";
// ---------- Editor -----------
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const modules = {
  toolbar: [
    [{ 'font': [] }, { 'size': ['small', false, 'large', 'huge'] }], // custom options
    ['bold', 'italic', 'underline', 'strike'], // default options
    [{ 'header': 1 }, { 'header': 2 }], // custom options
    [{ 'list': 'ordered' }, { 'list': 'bullet' }], // default options
    [{ 'align': [] }], // custom options
    ['link', 'image', 'video'], // default options
    [{ 'color': [] }, { 'background': [] }], // custom options
    ['clean'], // default options
  ],
  
};



function Solution({ item, handleCangeNav }) {
  const GlobalState = useSelector((state) => state.Login.value);
  const navigate = useNavigate();
  const [solution, setSolution] = useState("");
  const [content, setContent] = useState("");

  async function uploadSolution() {
    const formData = new FormData();
    if (solution !== "") {
      formData.append("id", item.article_id);
      formData.append("page", solution);
      formData.append("user_id", GlobalState.user_id);
      formData.append("Links", content);
    }

    await fetch("/articles/solution", {
      method: "PATCH",
      body: formData,
    });
  }

  return (
    <div className="SQN">
      <img src={item.page_id} className="image" />
      <p className="message"># שם הקובץ חייב להיות באנגלית</p>
      <form className="response">
        <Input
          label="העלאת פיתרון"
          type="file"
          handleValue={(val) => {
            setSolution(val);
          }}
        />
        <div className="editor">
        <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            className="editor-input"
            modules={modules}
          />
        </div>
        <button
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            uploadSolution();
            handleCangeNav();
            navigate(GlobalState.level !== "A" ? "/author" : "/admin");
          }}
        >
          העלה תשובתך
        </button>
      </form>
    </div>
  );
}

export default Solution;
