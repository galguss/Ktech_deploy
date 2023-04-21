import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

function Tests({ item, handleCangeNav }) {
  const GlobalState = useSelector((state) => state.Login.value);
  const navigate = useNavigate();
  async function handleTest() {
    await fetch("/articles/test", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: item.article_id,
        user_id: GlobalState.user_id,
        userLevel: GlobalState.level
      }),
    });
  }
 
  return (
    <div className="SQN">
      <div className="containerPFD">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer fileUrl={item.file_to_solve} />
        </Worker>
      </div>

      {GlobalState.email !== item.the_solver && (
        <form className="response">
          <a
            className="btn downloadLink"
            href={item.file_to_solve}
            download={item.season_and_Question_numner}
            target="_blank"
            rel="noopener"
          >
            הורדה
          </a>
          <button
            className="btn"
            onClick={(e) => {
              e.preventDefault();
              handleTest();
              handleCangeNav();
              navigate("/author");
            }}
          >
            אישור בדיקה
          </button>
        </form>
      )}
    </div>
  );
}

export default Tests;
