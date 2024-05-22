import clsx from "clsx";
import css from "./Button.module.css";

const Button = ({ variant = "primary", children, ...rest }) => {
  const style = clsx(
    css.btn,
    variant === "primary" ? css.primary : css.secondary
  );
  return (
    <button className={style} type="button" {...rest}>
      {children}
    </button>
  );
};

export default Button;
