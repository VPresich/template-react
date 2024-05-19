import clsx from "clsx";
import css from "./Button.module.css";

const Button = ({ variant, children }) => {
  const style = clsx(
    css.btn,
    variant === "primary" ? css.primary : css.secondary
  );
  return <button className={style}>{children}</button>;
};

export default Button;
