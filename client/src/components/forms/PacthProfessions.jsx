import React, { useState } from "react";

import Input from "../main/Input";

function PacthProfession({ProfessionId}) {
  const [Patch, setPatch] = useState("All fields must be filled");
  const [InputNV, setInputNV] = useState("");

  async function SubmitPatch() {
    try {
      const URL = "/profession";
      const response = await fetch(URL, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ProfessionId: ProfessionId,
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
          label="New Value"
          type="text"
          handleValue={(val) => setInputNV(val)}
        />

        <p className="chatBox">{Patch.message}</p>
        <button
          className="btn"
          onClick={(e) => {
            SubmitPatch();
            e.preventDefault();
          }}
        >
          <b>Patch</b>
        </button>
      </form>
    </>
  );
}

export default PacthProfession;
