import { useState } from "react";
import LangContext from "./LangContext";

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("uk");

  return (
    <LangContext.Provider
      value={{
        lang,
        changeLang: setLang,
      }}
    >
      {children}
    </LangContext.Provider>
  );
};
