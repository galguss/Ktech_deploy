import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Profile from "./Profile";
import Questions from "./Questions";
import Solution from "./Solution";
import Tests from "./Tests";

function Author() {
  const [Articles, setArticles] = useState([]);
  const [QuestionsCount, setQuestionsCount] = useState(0);

  async function getArticles() {
    const res = await fetch("/articles");
    setArticles(await res.json());
  }

  useEffect(() => {
    getArticles();
  }, [QuestionsCount]);

  return (
    <div className="body-web">
      <Questions items={Articles} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Profile />} />
          {Articles.map((item, index) => (
            <Route
              key={"/SQN" + index}
              path={"/SQN" + index}
              element={
                <Solution
                  item={item}
                  handleCangeNav={() => setQuestionsCount(QuestionsCount + 1)}
                />
              }
            />
          ))}
          {Articles.map((item, index) => (
            <Route
              key={"/test" + index}
              path={"/test" + index}
              element={
                <Tests
                  item={item}
                  handleCangeNav={() => setQuestionsCount(QuestionsCount + 1)}
                />
              }
            />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default Author;
