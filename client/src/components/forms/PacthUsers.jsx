import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import Menu from '../main/Menu';
import Input from "../main/Input";

function PacthUsers({User}) {
  const [Column, setColumn] = useState(['email', 'password','github','full_name']);
  const [Patch, setPatch] = useState("All fields must be filled");
  const [InputCol, setInputCol] = useState("");
  const [InputNV, setInputNV] = useState("");
  const navigate = useNavigate();

  useEffect(() => {setInputNV(User[InputCol])}, [InputCol]);

  async function SubmitPatch() {
    try {
      const URL = "/admin";
      const response = await fetch(URL, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          column: InputCol,
          user_id: User.user_id,
          newValue: InputNV,
        }),
      });
      const data = await response.json();
      setPatch(data);
    } catch (error) {
      setPatch("One or more of the fields are invalid");
    }
  }

  return (
    <>
      <form className="response">
        <Input
          label="Column"
          type="text"
          list="Column"
          handleValue={(val) => setInputCol(val)}
        />
        <Menu items={Column} nameInput="Column"/>
        <Input
          label="New Value"
          type="text"
          handleValue={(val) => setInputNV(val)}
          value={InputNV}
        />

        <p className="chatBox">{Patch.message}</p>
        <button
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            SubmitPatch();
            navigate('/admin/getUsers');
          }}
        >
          <b>Pacth</b>
        </button>
      </form>
    </>
  );
}

export default PacthUsers;
