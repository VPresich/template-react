import { useEffect, useState } from "react";

import Button from "../Button/Button";
import css from "./TestClicker.module.css";
const TestClicker = () => {
  const [clicks, setClicks] = useState(0);
  const [date, setDate] = useState(Date.now);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  const handleDate = () => {
    setDate(Date.now);
  };

  useEffect(() => {
    console.log("Use effect", clicks);
  }, [clicks]);

  useEffect(() => {
    console.log("Use effect", date);
  }, [date]);

  return (
    <div className={css.container}>
      <Button onClick={handleClick}>Clicks: {clicks}</Button>
      <Button onClick={handleDate}>Date: {date} </Button>
    </div>
  );
};

export default TestClicker;
