import { useState } from "react";
import AppContainer from "../AppContainer/AppContainer";
// import ControledForm from "../ControledForm/ControledForm";
import UserForm from "../UserForm/UserForm";

import MyForm from "../MyForm/MyForm";
import css from "./App.module.css";

const initialUser = { userName: "", userEmail: "", role: "user" };
const initialProduct = { size: "small", color: "red" };

function App() {
  const [user, setUser] = useState(initialUser);
  const [product, setProduct] = useState(initialProduct);

  const savedUser = (user) => {
    setUser(user);
    console.log("User:", user);
  };

  const savedProduct = (product) => {
    setProduct(product);
    console.log("Product:", product);
  };

  return (
    <AppContainer>
      <div className={css.controlsContainer}>
        <h2>Forms with Formik</h2>
        <MyForm initialValues={initialUser} onFormSubmit={savedUser} />
        {user && (
          <div>
            <p className={css.testControls}>Name: {user.userName}</p>
            <p className={css.testControls}>Email: {user.userEmail}</p>
            <p className={css.testControls}>Role: {user.role}</p>
          </div>
        )}
        <UserForm initialValues={initialProduct} onFormSubmit={savedProduct} />
        {product && (
          <div>
            <p className={css.testControls}>Size: {product.size}</p>
            <p className={css.testControls}>Color: {product.color}</p>
          </div>
        )}
        {/* 
        <ControledForm onSubmit={savedUser}>
          Controled Form in React
        </ControledForm>
       */}
      </div>
    </AppContainer>
  );
}
export default App;
