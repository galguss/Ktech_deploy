import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Profile from "./Profile";
import Questions from "./Questions";
import Solution from "./Solution";
import Tests from "./Tests";

function Author() {
  const [Articles, setArticles] = useState([]);

  async function getArticles() {
    const res = await fetch("/articles");
    setArticles(await res.json());
  }

  useEffect(() => {
    getArticles();
  }, []);
  // <Route path="/SQN1" element={<Solution/>} />
  return (
    <>
      <Questions items={Articles} />
      <Routes>
        <Route path="/" element={<Profile />} />
        {Articles.map((item, index) => (
          <Route
            key={"/SQN" + index}
            path={"/SQN" + index}
            element={
              item.there_is_a_solution === "false" ? (
                <Solution item={item} />
              ) : (
                <Tests item={item} />
              )
            }
          />
        ))}
      </Routes>
    </>
  );
}

export default Author;
