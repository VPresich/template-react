import AppContainer from "../AppContainer/AppContainer";
import AppTasksBar from "../AppTasksBar/AppTasksBar";
import AppRouter from "../AppRouter";
// import css from "./App.module.css";

const App = () => {
  return (
    <AppContainer>
      <AppTasksBar />
      <AppRouter />
    </AppContainer>
  );
};
export default App;
