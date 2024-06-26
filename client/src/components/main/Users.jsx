import React, { useState, useEffect } from "react";
import Image from "../../images/photo-99135_960_720.png";
function Users() {
  const [ShowUsers, setShowUsers] = useState([]);
  async function handleGetUsers() {
    const res = await fetch("/admin");
    setShowUsers(await res.json());
  }

  useEffect(() => {
    handleGetUsers();
  }, []);

  return (
    <div className="userContainer">
      <h1>נבחרת הפותרים</h1>
      {ShowUsers.map((item, index) => (
        <div className="user" key={"user" + index}>
          <a
            href={"https://" + item.github}
            className="UserName"
            target="_blank"
          >
            {item.full_name}
          </a>
          <div className="userBody">
          <img src={item.image !== null ? item.image : Image} width="250" />
          <p className="textbox">
            <spen>
              <span className="title">תחומי תכנות אהובים ומועדים:</span>
              <br />
              {item.favorite_languages}
            </spen>
            <br />
            <spen>
              <span className="title marginTop">תחביבים:</span>
              <br />
              {item.hobbies}
            </spen>
          </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Users;
