import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
//import DataTable from "react-data-table-component";
import "../../styles/routesStyle/getUsers.css";

function GetArticles({handleGetArticle}) {
  const [Articles, setArticles] = useState([]);
  const [CountArticle, setCountArticle] = useState(0);
  const [Alert, setAlert] = useState(false);
  const [IdForDelete, setIdForDelete] = useState(-1);
  const GlobalState = useSelector((state) => state.Login.value);

  const navigate = useNavigate();

  async function handlePublication(id) {
    await fetch("/articles/public", {
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

  function handleDelete(id) {
    fetch("/articles", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    });
  }

  /*const colums = [
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
  ];*/

  //Maybe it can be deleted?

  /* <ul className="articlesPublic">
  <h3 className="title">שאלות שמחכות לפרסום</h3>
  {Articles.map(
    (item, index) =>
      item.inspection_confirmaction === "true" &&
      item.Approval_for_publication === "false" && (
        <li key={"Q" + index} className={"itemPublicArticle"}>
          <b>{item.season_and_Question_numner}</b>
          <a
            className="downloadLink"
            href={item.file_to_solve}
            download={item.season_and_Question_numner}
            target="_blank"
            rel="noopener"
          >
            הורד פתרון
          </a>
          <button className="btnPub"
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
</ul>*/

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
      {Alert && (
        <div className="popup-message">
          <h3>?אתה בטוח שאתה רוצה למחוק</h3>
          <button
            onClick={() => {
              handleDelete(IdForDelete);
              setCountArticle(CountArticle + 1);
              setAlert(false);
            }}
            className="btnTable alertMargin green"
          >
            מחק
          </button>
          <button
            onClick={() => setAlert(false)}
            className="btnTable alertMargin red"
          >
            ביטול
          </button>
        </div>
      )}
      <table>
        <thead>
          <tr>
            <td colSpan="10" className="right">
              <button
                className="btnTable"
                onClick={() => navigate("/admin/CreateArticles")}
              >
                הוספה+
              </button>
            </td>
          </tr>
          <tr>
            
            <th>subject</th>
            <th>profession</th>
            <th>season and Question numner</th>
            <th>level</th>
            <th>the solver</th>
            <th>there is a solution</th>
            <th>the tester</th>
            <th>inspection confirmaction</th>
            <th>Approval for publication</th>
            <th>Date of writing solution</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Articles.map((item, index) => (
            <tr key={item.article_id}>
              <td>{item.subject_id}</td>
              <td>{item.profession_id}</td>
              <td>{item.season_and_Question_numner}</td>
              <td>{item.level}</td>
              <td>{item.the_solver}</td>
              <td>
                <button
                  onClick={() => navigate("/author/SQN" + index)}
                  className={
                    item.there_is_a_solution === "true"
                      ? "btnTable green"
                      : "btnTable red"
                  }
                >
                  ליפתור
                </button>
              </td>
              <td>{item.the_tester}</td>
              <td>
                <button
                  onClick={() => navigate("/author/test" + index)}
                  className={
                    item.inspection_confirmaction === "true"
                      ? "btnTable green"
                      : "btnTable red"
                  }
                >
                  ליבדוק
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    handlePublication(item.article_id);
                    setCountArticle(CountArticle + 1);
                  }}
                  className={
                    item.Approval_for_publication === "true"
                      ? "btnTable green"
                      : "btnTable red"
                  }
                >
                  פרסם
                </button>
              </td>
              <td>{item.Date_of_writing_solution}</td>
              <td>
                <button
                  onClick={() => {handleGetArticle(item); navigate("/admin/PatchArticles");}}
                  className="btnTable"
                >
                  עריכה
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    setAlert(true);
                    setIdForDelete(item.article_id);
                  }}
                  className="btnTable"
                >
                  מחיקה
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GetArticles;
