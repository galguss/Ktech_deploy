import React, { useState } from "react";
import DataTable from "react-data-table-component";
import "../../styles/routesStyle/getUsers.css";

function GetSubjects() {
  const [Subjects, setSubjects] = useState([{}]);
  const colums = [
    {
      name: "subject_id",
      selector: (row) => row.subject_id,
    },
    {
      name: "subject",
      selector: (row) => row.subject,
    },
  ];

  async function fetchSubjectsData() {
    const URL = "/subject";
    const response = await fetch(URL);

    const sub = await response.json();
    setSubjects(sub);
  }

  return (
    <div id="userTable">
      <DataTable title="Subjects" columns={colums} data={Subjects} />
      <button onClick={fetchSubjectsData}>
        <b>Get Subjects</b>
      </button>
    </div>
  );
}

export default GetSubjects;
