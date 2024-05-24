import { useContext } from "react";
import LangContext from "../../LangContext";

export const LangSwitcher = () => {
  const ctxValue = useContext(LangContext);
  console.log(ctxValue);

  return (
    <select
      //   value={ctxValue.lang}
      onChange={(e) => ctxValue.changeLang(e.target.value)}
    >
      <option value="uk">UK</option>
      <option value="en">EN</option>
      <option value="pl">PL</option>
    </select>
  );
};
