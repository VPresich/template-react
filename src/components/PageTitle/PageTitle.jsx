import css from "./PageTitle.module.css";
import clsx from "clsx";

const PageTitle = ({ primary, onSale, children }) => {
  const styleClasses = clsx(
    css.title,
    primary ? css.primary : css.secondary,
    onSale && css.onSale
  );
  return <h2 className={styleClasses}>{children}</h2>;
};

export default PageTitle;
