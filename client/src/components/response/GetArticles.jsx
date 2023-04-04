import React, { useState } from "react";
import DataTable from "react-data-table-component";
import "../../styles/routesStyle/getUsers.css";

function GetArticles() {
  const [Articles, setArticles] = useState([{}]);

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

  async function fetchArticlesData() {
    const URL = "/articles";
    const response = await fetch(URL);

    const Articles = await response.json();
    setArticles(Articles);
  }

  return (
    <div id="userTable">
      <DataTable title="Articles" columns={colums} data={Articles} />
      <button onClick={fetchArticlesData}>
        <b>Get Articles</b>
      </button>
    </div>
  );
}

export default GetArticles;
