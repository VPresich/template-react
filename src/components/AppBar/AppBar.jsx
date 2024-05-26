import css from "./AppBar.module.css";
import AppContainer from "../AppContainer/AppContainer";
import AppNav from "../AppNav/AppNav";
const AppBar = () => {
  return (
    <header className={css.header}>
      <AppContainer>
        <AppNav />
      </AppContainer>
    </header>
  );
};
export default AppBar;
