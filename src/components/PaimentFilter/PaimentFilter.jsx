import { useSearchParams } from "react-router-dom";
import { useId } from "react";
import css from "./PaimentFilter.module.css";

const PaimentFilter = () => {
  const [params, setParams] = useSearchParams();
  const value = params.get("owner") ?? "";
  const searchId = useId();

  const changeFilter = (newFilter) => {
    params.set("owner", newFilter);
    setParams(params);
  };

  return (
    <div className={css.inputContainer}>
      <label htmlFor={searchId}>Filter by owner: </label>
      <input
        type="text"
        value={value}
        onChange={(e) => changeFilter(e.target.value)}
        id={searchId}
      />
    </div>
  );
};

export default PaimentFilter;
