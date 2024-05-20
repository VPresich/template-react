import clsx from "clsx";
import css from "./Button.module.css";

const Button = ({ variant = "primary", children, onClick }) => {
  const style = clsx(
    css.btn,
    variant === "primary" ? css.primary : css.secondary
  );
  return (
    <button className={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
