import React, { useEffect, useState } from "react";

import Input from "../main/Input";
import Menu from "../main/Menu";

function DeleteUsers() {
  const [Delete, setDelete] = useState("All fields must be filled");
  const [InputVal, setInputVal] = useState("");
  const [ListData, setListData] = useState([]);

  async function getSubjects() {
    const URL = "/admin";
    const res = await fetch(URL);
    setListData(await res.json());
  }

  useEffect(() => {
    getSubjects();
  }, []);

  async function SubmitDelete() {
    try {
      const URL = "/admin";
      const response = await fetch(URL, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail: InputVal,
        }),
      });
      const data = await response.json();
      setDelete(data);
    } catch (error) {
      setDelete("Something has gone wrong");
    }
  }

  return (
    <>
      <form className="response">
        <Input
          label="User"
          type="email"
          list="userEmail"
          handleValue={(val) => setInputVal(val)}
        />
        <Menu items={ListData} nameInput="userEmail" val="email" />

        <p className="chatBox">{Delete.message}</p>
        <button
          className="btn"
          onClick={(e) => {
            SubmitDelete();
            e.preventDefault();
          }}
        >
          <b>Delete</b>
        </button>
      </form>
    </>
  );
}

export default DeleteUsers;
