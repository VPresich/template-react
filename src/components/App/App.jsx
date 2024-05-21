// import { useState } from "react";
import AppContainer from "../AppContainer/AppContainer";
import TestClicker from "../TestClicker/TestClicker";
import Reader from "../Reader/Reader";
// import Timer from "../Timer/Timer";
// import css from "./App.module.css";

function App() {
  // const [isVisible, setIsVisible] = useState(false);
  return (
    <AppContainer>
      <TestClicker />
      <Reader>Articles</Reader>
      {/* <button
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <Timer></Timer>} */}
    </AppContainer>
  );
}
export default App;
