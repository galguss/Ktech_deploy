import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Input from "../main/Input";
// ---------- Editor -----------
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const modules = {
  toolbar: [
    [{ font: [] }, { size: ["small", false, "large", "huge"] }], // custom options
    ["bold", "italic", "underline", "strike"], // default options
    [{ header: 1 }, { header: 2 }], // custom options
    [{ list: "ordered" }, { list: "bullet" }], // default options
    [{ align: [] }], // custom options
    ["link", "image", "video"], // default options
    [{ color: [] }, { background: [] }], // custom options
    ["clean"], // default options
  ],
};

function Solution({ item, handleCangeNav }) {
  const [Alert, setAlert] = useState(false);
  const [isCsFile, setIsCsFile] = useState(false);
  const GlobalState = useSelector((state) => state.Login.value);
  const navigate = useNavigate();
  const [solution, setSolution] = useState("");
  const [CsFile, setCsFile] = useState("");
  const [content, setContent] = useState("");
  const [IsLoading, setIsLoading] = useState(false);

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

  async function uploadCsFile() {
    const formData = new FormData();
    if (CsFile !== "") {
      formData.append("page", CsFile);
      formData.append("id", item.article_id);
    }

    await fetch("/articles/solution", {
      method: "PATCH",
      body: formData,
    });
  }

  return (
    <div className="SQN">
      {Alert && (
        <div
          className={ "popup-message relative" }
        >
          {!isCsFile ? (
            <>
              <h3>האם תרצה לעלות את הקובץ CS של הקוד?</h3>
              <button
                onClick={() => {
                  uploadSolution();
                  handleCangeNav();
                  setAlert(false);
                  navigate(GlobalState.level !== "A" ? "/author" : "/admin");
                }}
                className="btnTable alertMargin red"
              >
                לא
              </button>
              <button
                onClick={() => {
                  setIsCsFile(true);
                }}
                className="btnTable alertMargin green"
              >
                כן
              </button>
            </>
          ) : (
            <>
              <h3>
                נא לצרף בבקשה קובץ של סי שארפ (שם הקובץ חייב להיות באנגלית)
              </h3>
              <form>
                <input
                  type="file"
                  onChange={(e) => {
                    setCsFile(e.target.files[0]);
                  }}
                />
                <button
                  className="btnTable alertMargin red"
                  onClick={(e) => {
                    e.preventDefault();
                    uploadSolution();
                    handleCangeNav();
                    setAlert(false);
                    navigate(GlobalState.level !== "A" ? "/author" : "/admin");
                  }}
                >
                  ביטול
                </button>
                <button
                  className="btnTable alertMargin green"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsLoading(true);
                    uploadCsFile();
                    setTimeout(() => {
                      uploadSolution();
                      handleCangeNav();
                      setIsLoading(false);
                      navigate(
                        GlobalState.level !== "A" ? "/author" : "/admin"
                      );
                    }, 1000);
                  }}
                >
                  המשך
                </button>
              </form>
                {IsLoading && (
                  <div className="loading-line-container">
                    <div className="loading-line"></div>
                  </div>
                )}
            </>
          )}
        </div>
      )}
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
            setAlert(true);
          }}
        >
          העלה תשובתך
        </button>
      </form>
    </div>
  );
}

export default Solution;
