import React, { useState } from "react";

import Input from "../main/Input";

function PacthUsers({userId}) {
  const [Patch, setPatch] = useState("All fields must be filled");
  const [InputCol, setInputCol] = useState("");
  const [InputNV, setInputNV] = useState("");

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
          user_id: userId,
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
          handleValue={(val) => setInputCol(val)}
        />
        <Input
          label="New Value"
          type="text"
          handleValue={(val) => setInputNV(val)}
        />

        <p className="chatBox">{Patch.message}</p>
        <button
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            SubmitPatch();
          }}
        >
          <b>Pacth</b>
        </button>
      </form>
    </>
  );
}

export default PacthUsers;
