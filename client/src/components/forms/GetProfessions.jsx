import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
//import DataTable from "react-data-table-component";
import "../../styles/routesStyle/getUsers.css";

function GetProfessions({handleGetProfessionId}) {
  const [Professions, setProfessions] = useState([]);
  const [CountProfession, setCountProfession] = useState(0);
  const [Alert, setAlert] = useState(false);
  const [IdForDelete, setIdForDelete] = useState(-1);
  const navigate = useNavigate();

  /*const colums = [
    {
      name: "profession_id",
      selector: (row) => row.profession_id,
    },
    {
      name: "profession",
      selector: (row) => row.profession,
    },
  ];*/
  useEffect(() => {
    fetchProfessionsData();
  }, [CountProfession]);

  async function fetchProfessionsData() {
    const URL = "/profession";
    const response = await fetch(URL);
    setProfessions(await response.json());
  }

  function handleDelete(id) {
    fetch("/profession", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    });
  }

  return (
    <div id="userTable">
       {Alert && (
        <div className="popup-message">
          <h3>?אתה בטוח שאתה רוצה למחוק</h3>
          <button
            onClick={() => {
              handleDelete(IdForDelete);
              setCountProfession(CountProfession + 1);
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
                onClick={() => navigate("/admin/CreateProfessions")}
              >
                הוספה+
              </button>
            </td>
        </tr>
        <tr>
          <th colSpan="1">profession</th>
          <th colSpan="1"></th>
          <th colSpan="1"></th>
        </tr>
      </thead>
      <tbody>
        {Professions.map((item) => <tr key={item.profession_id}>
          <td>{item.profession}</td>
          <td><button onClick={() => {handleGetProfessionId(item.profession_id); navigate('/admin/PatchProfessions');}} className="btnTable">עריכה</button></td>
          <td><button onClick={() => {
            setIdForDelete(item.profession_id);
            setAlert(true);
          }} className="btnTable">מחיקה</button></td>
        </tr>)}
      </tbody>
     </table>
    </div>
  );
}

export default GetProfessions;
