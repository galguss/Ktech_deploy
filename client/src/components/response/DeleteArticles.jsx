import React, { useState } from "react";
import Input from "../main/Input";


function DeleteArticle() {
  const [Delete, setDelete] = useState("All fields must be filled");
  const [InputId, setInputId] = useState("");

  async function SubmitDelete() {
    try {
      const URL = "/articles";
      const response = await fetch(URL, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: InputId,
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
      <div className="response">
        <Input
          label="Article ID"
          type="number"
          handleValue={(val) => setInputId(val)}
        />
        <p className="chatBox">{Delete.message}</p>
        <button className="btn" onClick={() => SubmitDelete()}>
          <b>Delete</b>
        </button>
      </div>
    </>
  );
}

export default DeleteArticle;
