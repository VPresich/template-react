import { useState } from "react";
import TrackClicker from "../TrackClicker/TrackClicker";
import css from "./App.module.css";
const data = [1, 2, 3, 4, 5];
function App() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className={css.maplist}>
      {data.map((item, index) => (
        <TrackClicker key={index} value={clicks} onClicker={handleClick}>
          Button{item}
        </TrackClicker>
      ))}
    </div>
  );
}
export default App;
