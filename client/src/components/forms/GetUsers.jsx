import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
//import DataTable from "react-data-table-component";
import "../../styles/routesStyle/getUsers.css";

//Maybe it can be deleted?
/*<DataTable title="Users" columns={colums} data={users} />
    <button onClick={fetchUsersData}>
      <b>Get Users</b>
    </button>*/

function GetUsers() {
  const [users, setUsers] = useState([]);
  const [CountArticle, setCountArticle] = useState(0);
  const [Alert, setAlert] = useState(false);
  const [IdForDelete, setIdForDelete] = useState(-1);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsersData();
  }, [CountArticle]);

  function handleDelete(id) {
    fetch("/admin", {
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
      name: "user_id",
      selector: (row) => row.user_id,
    },
    {
      name: "email",
      selector: (row) => row.email,
    },
    {
      name: "password",
      selector: (row) => row.password,
    },
    {
      name: "github",
      selector: (row) => row.github,
    },
    {
      name: "full_name",
      selector: (row) => row.full_name,
    },
    {
      name: "image",
      selector: (row) => row.image,
    },
    {
      name: "level",
      selector: (row) => row.level,
    },
  ];*/

  async function fetchUsersData() {
    const URL = "/admin";
    const response = await fetch(URL);
    setUsers(await response.json());
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
            <td colSpan="1" colspan="100" className="right">
              <button
                className="btnTable"
                onClick={() => navigate("/admin/CreateUsers")}
              >
                הוספה+
              </button>
            </td>
          </tr>
          <tr>
            <th colSpan="1">user id</th>
            <th colSpan="1">email</th>
            <th colSpan="1">github</th>
            <th colSpan="1">full name</th>
            <th colSpan="1">image</th>
            <th colSpan="1">level</th>
            <th colSpan="1">favorite languages</th>
            <th colSpan="1">hobbies</th>
            <th colSpan="1"></th>
            <th colSpan="1"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => 
          <tr>
            <td>{item.user_id}</td>
            <td>{item.email}</td>
            <td>{item.github}</td>
            <td>{item.full_name}</td>
            <td>{item.image !== null && <img src={item.image} alt={item.full_name} width="100"/>}</td>
            <td>{item.level}</td>
            <td>{item.favorite_languages}</td>
            <td>{item.hobbies}</td>
            <td><button onClick={() => navigate("/admin/PatchUsers")} className="btnTable">עריכה</button></td>
            <td><button  onClick={() => {
                    setAlert(true);
                    setIdForDelete(item.user_id);
                  }} className="btnTable">מחיקה</button></td>
          </tr>)}
        </tbody>
      </table>
    </div>
  );
}

export default GetUsers;
