import { useState, useEffect } from "react";
import "./index.css";

import { Description } from "./components/description/description.jsx";
import { Options } from "./components/options/options.jsx";
import { Feedback } from "./components/feedback/feedback.jsx";
import { Notification } from "./components/notification/notification.jsx";

function App() {
  const [value, setValue] = useState(() => {
    const saveStats = window.localStorage.getItem("stats");
    if (saveStats !== null) {
      return JSON.parse(saveStats);
    } else {
      return { good: 0, neutral: 0, bad: 0 };
    }
  });

  useEffect(() => {
    window.localStorage.setItem("stats", JSON.stringify(value));
  }, [value]);

  const updateFeedback = (valueType) => {
    if (valueType === "reset") {
      setValue({ good: 0, neutral: 0, bad: 0 });
    } else {
      setValue((prevValue) => ({
        ...prevValue,
        [valueType]: prevValue[valueType] + 1,
      }));
    }
  };

  const totalFeedback = value.good + value.neutral + value.bad;
  const totalResult = Math.round((value.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? (
        <Feedback
          value={value}
          totalFeedback={totalFeedback}
          totalResult={totalResult}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
