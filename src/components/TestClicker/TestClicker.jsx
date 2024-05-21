import { useEffect, useState } from "react";

import Button from "../Button/Button";
import css from "./TestClicker.module.css";

const getInitClicks = () => {
  const savedClicks = window.localStorage.getItem("my-clicks");
  if (savedClicks !== null) {
    return JSON.parse(savedClicks);
  }
  return 0;
};

const TestClicker = () => {
  const [clicks, setClicks] = useState(getInitClicks);
  const [date, setDate] = useState(Date.now);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  const handleDate = () => {
    setDate(Date.now);
  };

  useEffect(() => {
    window.localStorage.setItem("my-clicks", clicks);
  }, [clicks]);

  // useEffect(() => {
  //   console.log("Use effect", date);
  // }, [date]);

  return (
    <div className={css.container}>
      <Button onClick={handleClick}>Clicks: {clicks}</Button>
      <Button onClick={handleDate}>Date: {date} </Button>
    </div>
  );
};

export default TestClicker;
