import React, { useState, useEffect } from "react";

function Questions() {
  const [Articles, setArticles] = useState([]);

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
          (item) =>
            item.Approval_for_publication === "true" && (
              <li key={item.article_id} className="itemPublicArticle marginTop">
                <a
                  className="downloadLink downLinkStyle"
                  href={item.page_id}
                  target="_blank"
                  rel="noopener"
                  download={item.season_and_Question_numner}
                >
                  {item.season_and_Question_numner}
                </a>
                <a
                  className="downloadLink downLinkStyle"
                  href={item.file_to_solve}
                  target="_blank"
                  rel="noopener"
                  download={"solution-" + item.season_and_Question_numner}
                >
                  פתרון
                </a>
              </li>
            )
        )}
      </ul>
    </div>
  );
}

export default Questions;
