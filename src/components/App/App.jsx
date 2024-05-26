import { useSelector } from "react-redux";
import Balance from "../Balance/Balance";
import LangSwitcher from "../LangSwitcher/LangSwitcher";
import { selectLang } from "../redux/localeSlice";
// import css from "./App.module.css";

const App = () => {
  const lang = useSelector(selectLang);
  return (
    <>
      <Balance />
      <LangSwitcher />
      <p>Selected lang: {lang}</p>
    </>
  );
};
export default App;
