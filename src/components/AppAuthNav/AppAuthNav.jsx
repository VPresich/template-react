import { NavLink } from "react-router-dom";
import css from "./AppAuthNav.module.css";

export default function AppAuthNav() {
  return (
    <div>
      <NavLink className={css.link} to="/register">
        Register
      </NavLink>
      <NavLink className={css.link} to="/login">
        Log In
      </NavLink>
    </div>
  );
}
