import React, { useState } from "react";
import Input from "../main/Input";

function CreateSubject() {
  const [Create, setCeate] = useState("All fields must be filled");
  const [InputVal, setInputVal] = useState("");

  async function SubmitCeate() {
    try {
      const URL = "/subject";
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: InputVal,
        }),
      });
      const data = await response.json();
      setCeate(data);
    } catch (error) {
      setCeate("One or more of the fields are invalid");
    }
  }

  return (
    <>
      <form className="response">
        <Input
          label="New Subject"
          type="text"
          handleValue={(val) => setInputVal(val)}
        />
        <p>{Create.message}</p>
        <button
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            SubmitCeate();
          }}
        >
          <b>Create</b>
        </button>
      </form>
    </>
  );
}

export default CreateSubject;
