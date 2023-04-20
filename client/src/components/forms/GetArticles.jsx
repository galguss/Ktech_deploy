import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DataTable from "react-data-table-component";
import "../../styles/routesStyle/getUsers.css";

function GetArticles() {
  const [ShowArticale, setShowArticles] = useState(false);
  const [Articles, setArticles] = useState([]);
  const [CountArticle, setCountArticle] = useState(0);
  const GlobalState = useSelector((state) => state.Login.value);

  async function handlePublication(id) {
    await fetch("/articles/test", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        userLevel: GlobalState.level,
      }),
    });
  }

  const colums = [
    {
      name: "article_id",
      selector: (row) => row.article_id,
    },
    {
      name: "subject_id",
      selector: (row) => row.subject_id,
    },
    {
      name: "profession_id",
      selector: (row) => row.profession_id,
    },
    {
      name: "page_id",
      selector: (row) => row.page_id,
    },
    {
      name: "season_and_Question_numner",
      selector: (row) => row.season_and_Question_numner,
    },
    {
      name: "level",
      selector: (row) => row.level,
    },
    {
      name: "the_solver",
      selector: (row) => row.the_solver,
    },
    {
      name: "there_is_a_solution",
      selector: (row) => row.there_is_a_solution,
    },
    {
      name: "the_tester",
      selector: (row) => row.the_tester,
    },
    {
      name: "inspection_confirmaction",
      selector: (row) => row.inspection_confirmaction,
    },
    {
      name: "Approval_for_publication",
      selector: (row) => row.Approval_for_publication,
    },
    {
      name: "Date_of_writing_solution",
      selector: (row) => row.Date_of_writing_solution,
    },
  ];

  useEffect(() => {
    fetchArticlesData();
  }, [CountArticle]);

  async function fetchArticlesData() {
    const URL = "/articles";
    const response = await fetch(URL);

    const Articles = await response.json();
    setArticles(Articles);
  }

  return (
    <div id="userTable">
      <DataTable
        title="Articles"
        columns={colums}
        data={ShowArticale && Articles}
      />
      <button
        onClick={() => {
          setShowArticles(true);
        }}
      >
        <b>Get Articles</b>
      </button>

      <ul className="articlesPublic">
        <h3 className="title">שאלות שמחכות לפרסום</h3>
        {Articles.map(
          (item, index) =>
            item.inspection_confirmaction === "true" &&
            item.Approval_for_publication === "false" && (
              <li key={"Q" + index} className={"itemPublicArticle"}>
                <b>{item.season_and_Question_numner}</b>
                <a
                  className="downloadLink"
                  href={"http://localhost:3050" + item.file_to_solve}
                  download={item.season_and_Question_numner}
                  target="_blank"
                  rel="noopener"
                >
                  הורד פתרון
                </a>
                <button
                  onClick={() => {
                    handlePublication(item.article_id);
                    setCountArticle(CountArticle + 1);
                  }}
                >
                  אישור
                </button>
              </li>
            )
        )}
      </ul>
    </div>
  );
}

export default GetArticles;
