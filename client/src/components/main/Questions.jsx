import React, { useState, useEffect } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

function Questions() {
  const [Articles, setArticles] = useState([]);
  const [IndexShow, setIndexShow] = useState(-1);
  const [TypeShow, setTypeShow] = useState("");

  async function handleShowArticles() {
    const res = await fetch("/articles");
    setArticles(await res.json());
  }

  useEffect(() => {
    handleShowArticles();
  }, []);

  return (
    <div className="userContainer">
      <h1 className="marginTop">שאלות ופתרונות</h1>
      <ul>
        {Articles.map(
          (item, index) =>
            item.Approval_for_publication === "true" && (
              <li key={item.article_id} className="itemPublicArticle marginTop">
                <div className="shows">
                  <button
                    onClick={() => {
                      setIndexShow(index);
                      setTypeShow("image");
                    }}
                    className="btnShow"
                  >
                    <b>{item.season_and_Question_numner}</b>
                  </button>
                  <button
                    onClick={() => {
                      {
                        setIndexShow(index);
                        setTypeShow("pdf");
                      }
                    }}
                    className="btnShow"
                  >
                    <b>פיתרון</b>
                  </button>
                </div>
                {IndexShow === index && (
                  <div className="Questions-show">
                    {TypeShow === "image" && (
                      <img
                        src={item.page_id}
                        width="100%"
                        alt={item.season_and_Question_numner}
                      />
                    )}
                    {TypeShow === "pdf" && (
                      <>
                        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                          <Viewer fileUrl={item.file_to_solve} />
                        </Worker>
                        <div
                          className="links-box"
                          dangerouslySetInnerHTML={{ __html: item.links }}
                        />
                      </>
                    )}
                    <button
                      className="btnPub"
                      onClick={() => {
                        setIndexShow(-1);
                        setTypeShow("");
                      }}
                    >
                      סגור
                    </button>
                  </div>
                )}
              </li>
            )
        )}
      </ul>
    </div>
  );
}

export default Questions;
