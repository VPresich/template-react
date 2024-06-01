import AppTasksNav from "../AppTasksNav/AppTasksNav";
import AppUserMenu from "../AppUserMenu/AppUserMenu";
import AppAuthNav from "../AppAuthNav/AppAuthNav";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./AppTasksBar.module.css";

export default function AppTasksBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <AppTasksNav />
      {isLoggedIn ? <AppUserMenu /> : <AppAuthNav />}
    </header>
  );
}
