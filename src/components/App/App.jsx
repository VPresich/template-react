import { useState } from "react";
import AppContainer from "../AppContainer/AppContainer";
import ControledBar from "../../components/ControledBar/ControledBar";

import Form from "../Form/Form";
// import css from "./App.module.css";

function App() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("qwe");

  const savedUser = (user) => {
    setUser(user);
    console.log(user);
  };

  return (
    <AppContainer>
      <Form onSubmit={savedUser}>Not controled Form in React</Form>
      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Role: {user.role}</p>
        </div>
      )}

      <ControledBar value={message} onChange={setMessage}></ControledBar>
      <p>{message}</p>
    </AppContainer>
  );
}
export default App;
