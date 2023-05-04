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
  const [Favorite, setFavorite]= useState('');
  const [Hobbies, setHobbies]= useState('');

  async function submitPass() {
    try {
      const formData = new FormData();
      if (InputP1 !== "" && InputP2 !== "") {
        if (InputP1 === InputP2) {
          formData.append("password", InputP1);
          setMessage("סיסמה שונתה בהצלחה");
          setIsEquals(true);
        } else {
          setMessage("השדות לא זהים");
          setIsEquals(false);
        }
      }

      if (typeof InputFile !== "undefined" && InputFile !== "") {
        formData.append("image", InputFile);
        formData.append("IsThereAFile", true);
      }

      if (InputGH !== "") {
        formData.append("github", InputGH);
      }

      if(Favorite !== '' || Favorite !== stateGlobal.favorite){
        formData.append("favorite", Favorite);
      }
      if(Hobbies !== '' || Hobbies !== stateGlobal.hobbies){
        formData.append("hobbies", Hobbies);
      }

      formData.append("user_id", stateGlobal.user_id);

      const URL = "/admin";
      const response = await fetch(URL, {
        method: "PATCH",
        body: formData,
      });
      const data = await response.json();
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
        <p className="message"># שם הקובץ חייב להיות באנגלית</p>
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
        <h3>תחומי תכנות אהובים ומועדים:</h3>
        <textarea className="TextBox" rows="5" cols="40" onChange={(e) => setFavorite(e.target.value)}></textarea>
        <h3>תחביבים:</h3>
        <textarea className="TextBox" rows="5" cols="40"onChange={(e) => setHobbies(e.target.value)}></textarea>

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
