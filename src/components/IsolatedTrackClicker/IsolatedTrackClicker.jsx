import { useState } from "react";

const IsolatedTrackClicker = ({ children }) => {
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    setClicks(clicks + 1);
  };
  return (
    <button onClick={handleClick}>
      {children}: {clicks}
    </button>
  );
};

export default IsolatedTrackClicker;
