import React, { useState } from "react";
import { useSelector } from "react-redux";

import Input from "../main/Input";

function Profile() {
  const stateGlobal = useSelector((state) => state.Login.value);

  const [Message, setMessage] = useState("");
  const [isEquals, setIsEquals] = useState(false);
  const [InputP1, setInputP1] = useState("");
  const [InputP2, setInputP2] = useState("");
  const [InputFile, setInputFile] = useState("");
  const [InputGH, setInputGH] = useState("");

  async function submitPass() {
    try {
      const formData = new FormData();
      if (InputP1 !== "" && InputP2 !== "") {
        if (InputP1 === InputP2) {
          formData.append("newValue", InputP1);
          setMessage("סיסמה שונתה בהצלחה");
          setIsEquals(true);
        } else {
          setMessage("השדות לא זהים");
          setIsEquals(false);
        }
      }

      if (typeof InputFile !== "undefined" && InputFile !== "") {
        formData.append("image", InputFile);
      }

      if (InputGH !== "") {
        formData.append("github", InputGH);
      }

      const URL = "/admin";
      const response = await fetch(URL, {
        method: "PATCH",
        body: formData,
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="contprofile">
      <div className="profileImg">
        <div className="imageP">
          <img className="profileImg" src={stateGlobal.image} />
        </div>
        <Input label="" type="file" handleValue={(val) => setInputFile(val)} />
      </div>

      <form className="response">
        <h3 className="title">עריכת פרופיל</h3>
        <Input
          label="סיסמה חדשה"
          type="password"
          handleValue={(val) => setInputP1(val)}
        />
        <Input
          label="אישור סיסמה"
          type="password"
          handleValue={(val) => setInputP2(val)}
        />
        <Input
          label="Github"
          type="text"
          handleValue={(val) => setInputGH(val)}
        />
        <p
          className={isEquals ? "chatBox messageSuccess" : "chatBox messageErr"}
        >
          {Message}
        </p>
        <button
          className="btn"
          onClick={(e) => {
            submitPass();
            e.preventDefault();
          }}
        >
          <b>שלח</b>
        </button>
      </form>
    </div>
  );
}

export default Profile;
