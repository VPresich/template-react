import { useContext } from "react";
import AppContainer from "../AppContainer/AppContainer";
// import UseMemoExample from "../UseMemoExample/UseMemoExample";
// import RefExample from "../RefExample/RefExample";
// import Timer from "../Timer/Timer";
// import css from "./App.module.css";

import { LangSwitcher } from "../LangSwitcher/LangSwitcher";
import LangContex from "../../LangContext";

const App = () => {
  const ctxValue = useContext(LangContex);
  return (
    <AppContainer>
      <LangSwitcher />
      <p>Current Lang: {ctxValue.lang}</p>
    </AppContainer>
  );
};
export default App;
