import css from "./AppContainer.module.css";
function AppContainer({ children }) {
  return <div className={css.container}>{children}</div>;
}

export default AppContainer;
