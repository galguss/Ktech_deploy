import React, { useState } from "react";

import Input from "../main/Input";
function PacthArticles() {
  const [Patch, setPatch] = useState("All fields must be filled");
  const [InputId, setInputId] = useState("");
  const [InputCol, setInputCol] = useState("");
  const [InputNV, SetInputNV] = useState("");

  async function SubmitPatch() {
    try {
      const URL = "/articles";
      const response = await fetch(URL, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: InputId,
          column: InputCol,
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
      <div className="response">
        <Input
          label="ID"
          type="number"
          handleValue={(val) => setInputId(val)}
        />
        <Input
          label="Column"
          type="text"
          handleValue={(val) => setInputCol(val)}
        />
        <Input
          label="New Value"
          type="text"
          handleValue={(val) => SetInputNV(val)}
        />

        <p className="chatBox">{Patch.message}</p>
        <button className="btn" onClick={() => SubmitPatch()}>
          <b>Pacth</b>
        </button>
      </div>
    </>
  );
}

export default PacthArticles;
