import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import AppContainer from "../AppContainer/AppContainer";
import AppTasksBar from "../AppTasksBar/AppTasksBar";
import AppRouter from "../AppRouter";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";
// import css from "./App.module.css";

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user... </b>
  ) : (
    <AppContainer>
      <AppTasksBar />
      <AppRouter />
    </AppContainer>
  );
};
export default App;
