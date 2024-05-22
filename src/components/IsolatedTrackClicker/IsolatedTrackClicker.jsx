import { useState } from "react";
import Button from "../Button/Button";

const IsolatedTrackClicker = ({ children }) => {
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    setClicks(clicks + 1);
  };
  return (
    <Button onClick={handleClick} variant="secondary">
      {children}: {clicks}
    </Button>
  );
};

export default IsolatedTrackClicker;
