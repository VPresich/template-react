import { useState } from "react";
import AppContainer from "../AppContainer/AppContainer";
import ControledBar from "../../components/ControledBar/ControledBar";
import LangSwitcher from "../LangSwitcher/LangSwitcher";
import ControledForm from "../ControledForm/ControledForm";
import UserForm from "../UserForm/UserForm";

import Form from "../Form/Form";
import css from "./App.module.css";

function App() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("qwe");
  const [lang, setLang] = useState("english");

  const savedUser = (user) => {
    setUser(user);
    console.log(user);
  };

  return (
    <AppContainer>
      <div className={css.controlsContainer}>
        <Form onSubmit={savedUser}>Not controled Form in React</Form>
        {user && (
          <div>
            <p className={css.testControls}>Name: {user.name}</p>
            <p className={css.testControls}>Role: {user.role}</p>
          </div>
        )}
        <h2>Controled Elements</h2>
        <ControledBar value={message} onChange={setMessage}></ControledBar>
        <p className={css.testControls}>Input: {message}</p>

        <LangSwitcher lang={lang} onSelect={setLang}></LangSwitcher>
        <p className={css.testControls}>Choose language: {lang}</p>

        <ControledForm onSubmit={savedUser}>
          Controled Form in React
        </ControledForm>

        <UserForm />
      </div>
    </AppContainer>
  );
}
export default App;
