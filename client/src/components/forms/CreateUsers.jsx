import React, { useState } from "react";
import Input from "../main/Input";

function CreateUser() {
  const [Create, setCeate] = useState("All fields must be filled");
  const [InputE, setInputE] = useState("");
  const [InputP, setInputP] = useState("");
  const [InputG, setInputG] = useState("");
  const [InputFN, setInputFN] = useState("");
  const [InputL, setInputL] = useState("");

  async function SubmitCeate() {
    try {
      const URL = "/admin";
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: InputE,
          password: InputP,
          github: InputG,
          fullName: InputFN,
          level: InputL,
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
          label="Email"
          type="email"
          handleValue={(val) => setInputE(val)}
        />
        <Input
          label="Password"
          type="password"
          handleValue={(val) => setInputP(val)}
        />
        <Input
          label="Github"
          type="text"
          handleValue={(val) => setInputG(val)}
        />
        <Input
          label="Full Name"
          type="text"
          handleValue={(val) => setInputFN(val)}
        />
        <Input
          label="Level"
          type="text"
          handleValue={(val) => setInputL(val)}
        />
        <p className="chatBox">{Create.message}</p>
        <button
          className="btn"
          onClick={(e) => {
            SubmitCeate();
            e.preventDefault();
          }}
        >
          <b>Create</b>
        </button>
      </form>
    </>
  );
}

export default CreateUser;
