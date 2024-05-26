import { NavLink } from "react-router-dom";
import css from "./AppNav.module.css";
import clsx from "clsx";

const classItem = ({ isActive }) => {
  return clsx(css.item, isActive && css.activeItem);
};

const AppNav = () => {
  return (
    <nav className={css.nav}>
      <NavLink className={classItem} to="/">
        Home
      </NavLink>
      <NavLink className={classItem} to="/payments">
        Paymets
      </NavLink>
      {/* <NavLink className={classItem} to="/payments/:id">
        Details
      </NavLink> */}
    </nav>
  );
};
export default AppNav;
