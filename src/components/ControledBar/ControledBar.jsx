import css from "./ControledBar.module.css";
function ControledBar({ value, onChange }) {
  return (
    <div>
      <input
        className={css.inputClass}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
export default ControledBar;
