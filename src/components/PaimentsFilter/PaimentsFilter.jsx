import { useSearchParams } from "react-router-dom";
import { useId } from "react";
import css from "./PaimentsFilter.module.css";

const PaimentsFilter = () => {
  const [params, setParams] = useSearchParams();
  const ownerValue = params.get("owner") ?? "";
  const searchId = useId();

  const changeOwnerFilter = (newFilter) => {
    params.set("owner", newFilter);
    setParams(params);
  };

  return (
    <div className={css.inputContainer}>
      <label htmlFor={searchId}>Filter by owner: </label>
      <input
        className={css.inputClass}
        type="text"
        value={ownerValue}
        onChange={(e) => changeOwnerFilter(e.target.value)}
        id={searchId}
      />
    </div>
  );
};

export default PaimentsFilter;
