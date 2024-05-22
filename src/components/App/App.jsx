import { useState } from "react";
import AppContainer from "../AppContainer/AppContainer";
import Form from "./Form/Form";
// import css from "./App.module.css";

function App() {
  const [user, setUser] = useState();
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
    </AppContainer>
  );
}
export default App;
