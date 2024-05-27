import { useSelector } from "react-redux";
import Balance from "../Balance/Balance";
import LangSwitcher from "../LangSwitcher/LangSwitcher";
import { selectLang, selectUpdated } from "../redux/localeSlice";
// import css from "./App.module.css";

const App = () => {
  const lang = useSelector(selectLang);
  const lastUpdate = useSelector(selectUpdated);
  return (
    <>
      <Balance />
      <LangSwitcher />
      <p>Selected lang: {lang}</p>
      <p>Last update: {lastUpdate}</p>
    </>
  );
};
export default App;
