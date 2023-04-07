import React, { useEffect, useState } from "react";

import Menu from "../main/Menu";
import Input from "../main/Input";

function PacthProfession() {
  const [Patch, setPatch] = useState("All fields must be filled");
  const [InputP, setInputP] = useState("");
  const [InputNV, setInputNV] = useState("");
  const [ListData, setListData] = useState([]);

  async function getProfession() {
    const URL = "/profession";
    const res = await fetch(URL);
    setListData(await res.json());
  }

  useEffect(() => {
    getProfession();
  }, []);

  async function SubmitPatch() {
    try {
      const URL = "/profession";
      const response = await fetch(URL, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          professionData: InputP,
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
          label="Profession"
          type="text"
          list="profession"
          handleValue={(val) => setInputP(val)}
        />
        <Menu items={ListData} nameInput="profession" val="profession" />
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
