import { useState } from "react";
import TrackClicker from "../TrackClicker/TrackClicker";
import IsolatedTrackClicker from "../IsolatedTrackClicker/IsolatedTrackClicker";
import css from "./Clickers.module.css";
const data = [1, 2, 3, 4, 5];

const Clickers = ({ children }) => {
  const [clicks, setClicks] = useState(0);
  const [objClicks, setObjClicks] = useState({ first: 0, second: 0 });

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  const handleObjClick = (key) => {
    setObjClicks({ ...objClicks, [key]: objClicks[key] + 1 });
  };

  return (
    <div className={css.list}>
      <h1>{children}</h1>
      <h2>1. Depended Track Clickers</h2>
      <div className={css.maplist}>
        {data.map((item, index) => (
          <TrackClicker key={index} value={clicks} onClicker={handleClick}>
            Button{item}
          </TrackClicker>
        ))}
      </div>
      <h2>2. Isolated Track Clickers</h2>
      <div className={css.isolatedClickers}>
        <IsolatedTrackClicker>izButton</IsolatedTrackClicker>
        <IsolatedTrackClicker>izButton</IsolatedTrackClicker>
      </div>
      <h2>3. InDepended Track Clickers with Sum</h2>
      <div className={css.sumClickers}>
        <TrackClicker
          value={objClicks.first}
          onClicker={() => {
            handleObjClick("first");
          }}
        >
          First
        </TrackClicker>
        <TrackClicker
          value={objClicks.second}
          onClicker={() => {
            handleObjClick("second");
          }}
        >
          Second
        </TrackClicker>
        <p>SUM: {objClicks.first + objClicks.second} </p>
      </div>
    </div>
  );
};
export default Clickers;
