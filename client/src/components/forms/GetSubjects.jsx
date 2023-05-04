import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import DataTable from "react-data-table-component";
import "../../styles/routesStyle/getUsers.css";

function GetSubjects({handleGetSubjectId}) {
  const [Subjects, setSubjects] = useState([]);
  const [Countsubject, setCountsubject] = useState(0);
  const [Alert, setAlert] = useState(false);
  const [IdForDelete, setIdForDelete] = useState(-1);
  const navigate = useNavigate();
  /*const colums = [
    {
      name: "subject_id",
      selector: (row) => row.subject_id,
    },
    {
      name: "subject",
      selector: (row) => row.subject,
    },
  ];*/

  function handleDelete(id) {
    fetch("/subject", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    });
  }

  async function fetchSubjectsData() {
    const URL = "/subject";
    const response = await fetch(URL);
    setSubjects(await response.json());
  }

  useEffect(() => {
    fetchSubjectsData();
  }, [Countsubject]);

  return (
    <div id="userTable">
      {Alert && (
        <div className="popup-message">
          <h3>?אתה בטוח שאתה רוצה למחוק</h3>
          <button
            onClick={() => {
              handleDelete(IdForDelete);
              setCountsubject(Countsubject + 1);
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
            <td colSpan="1" colspan="100" className="right">
              <button
                className="btnTable"
                onClick={() => navigate("/admin/CreateSubjects")}
              >
                הוספה+
              </button>
            </td>
          </tr>
          <tr>
            <th colSpan="1">subject</th>
            <th colSpan="1"></th>
            <th colSpan="1"></th>
          </tr>
        </thead>
        <tbody>
          {Subjects.map((item) => (
            <tr key={item.subject_id}>
              <td>{item.subject}</td>
              <td>
                <button
                  onClick={() => {handleGetSubjectId(item.subject_id); navigate("/admin/PatchSubjects");}}
                  className="btnTable"
                >
                  עריכה
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    setIdForDelete(item.subject_id);
                    setAlert(true);
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

export default GetSubjects;
