import { useState } from "react";
import AppContainer from "../AppContainer/AppContainer";
// import ControledBar from "../../components/ControledBar/ControledBar";
// import LangSwitcher from "../LangSwitcher/LangSwitcher";
// import ControledForm from "../ControledForm/ControledForm";
// import UserForm from "../UserForm/UserForm";

import MyForm from "../MyForm/MyForm";
import css from "./App.module.css";

function App() {
  const [user, setUser] = useState(null);
  // const [message, setMessage] = useState("qwe");
  // const [lang, setLang] = useState("english");

  const savedUser = (user) => {
    setUser(user);
    console.log("User:", user);
  };

  return (
    <AppContainer>
      <div className={css.controlsContainer}>
        <MyForm onFormSubmit={savedUser}>Form with Formik</MyForm>
        {user && (
          <div>
            <p className={css.testControls}>Name: {user.userName}</p>
            <p className={css.testControls}>Email: {user.userEmail}</p>
            <p className={css.testControls}>Role: {user.role}</p>
          </div>
        )}
        {/* <h2>Controled Elements</h2>
        <ControledBar value={message} onChange={setMessage}></ControledBar>
        <p className={css.testControls}>Input: {message}</p>

        <LangSwitcher lang={lang} onSelect={setLang}></LangSwitcher>
        <p className={css.testControls}>Choose language: {lang}</p>

        <ControledForm onSubmit={savedUser}>
          Controled Form in React
        </ControledForm>

        <UserForm /> */}
      </div>
    </AppContainer>
  );
}
export default App;
