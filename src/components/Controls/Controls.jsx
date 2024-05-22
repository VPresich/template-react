import Button from "../Button/Button";
import css from "./Controls.module.css";

const Controls = ({ onPrev, onNext, prevDisabled, nextDisabled }) => {
  return (
    <div className={css.container}>
      <Button variant="primary" onClick={onPrev} disabled={prevDisabled}>
        Prev
      </Button>
      <Button variant="secondary" onClick={onNext} disabled={nextDisabled}>
        Next
      </Button>
    </div>
  );
};
export default Controls;
