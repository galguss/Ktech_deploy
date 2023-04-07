import React, { useEffect, useState } from "react";

import Menu from "../main/Menu";
import Input from "../main/Input";

function DeleteProfession() {
  const [Delete, setDelete] = useState("All fields must be filled");
  const [InputVal, setInputVal] = useState("");
  const [ListData, setListData] = useState([]);

  async function getProfession() {
    const URL = "/profession";
    const res = await fetch(URL);
    setListData(await res.json());
  }

  useEffect(() => {
    getProfession();
  }, []);

  async function SubmitDelete() {
    try {
      const URL = "/profession";
      const response = await fetch(URL, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          professionData: InputVal,
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
          label="Profession"
          list="profession"
          type="text"
          handleValue={(val) => setInputVal(val)}
        />
        <Menu items={ListData} nameInput="profession" val="profession" />
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

export default DeleteProfession;
