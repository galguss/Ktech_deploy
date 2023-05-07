import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import Input from "../main/Input";

function PacthSubject({SubjectId}) {
  const [Patch, setPatch] = useState("All fields must be filled");
  const [newVal, SetNewVal] = useState("");
  const navigate = useNavigate();

  async function SubmitPatch() {
    try {
      const URL = "/subject";
      const response = await fetch(URL, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          SubjectId: SubjectId,
          newValue: newVal,
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
          label="New Subject"
          type="text"
          handleValue={(val) => SetNewVal(val)}
        />
        <p className="chatBox">{Patch.message}</p>
        <button
          className="btn"
          onClick={(e) => {
            SubmitPatch();
            e.preventDefault();
            navigate('/admin/GetSubjects');
          }}
        >
          <b>Pacth</b>
        </button>
      </form>
    </>
  );
}

export default PacthSubject;
