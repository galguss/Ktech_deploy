import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../../styles/webStyle/Content.css";
//------- Editor--------
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

function Content() {
  const [Content, setContent] = useState("");
  const [EditContent, setEditContent] = useState(false);
  const GlobalState = useSelector((state) => state.Login.value);

  async function handleGetContent() {
    const res = await fetch("/home");
    setContent(await res.json());
  }

  async function handleChangeContent() {
    const URL = "/home";
      const response = await fetch(URL, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          newValue: Content
        }),
      });
      const data = await response.json();
    console.log(data);
  }

  useEffect(() => {
    handleGetContent();
  }, []);

  return (
    <div id="content">
      {!EditContent ? (
        <div
          className="content-box"
          dangerouslySetInnerHTML={{ __html: Content }}
        />
      ) : (
        <div className="content-editor">
          <ReactQuill
            theme="snow"
            value={Content}
            onChange={(val) => setContent(val)}
            className="editor-input"
            modules={modules}
          />
          <div className="btns">
            <button className="editBtn red" onClick={() => setEditContent(false)}>בטל עריכה</button>
            <button 
              className="editBtn green"
              onClick={() => {
                handleChangeContent();
                setEditContent(false);
              }}
            >
              שמור שינוים
            </button>
          </div>
        </div>
      )}
      {GlobalState.level === "A" && !EditContent && (
        <button className="btnEditor" onClick={() => setEditContent(true)}>עריכת תוכן</button>
      )}
    </div>
  );
}

export default Content;
