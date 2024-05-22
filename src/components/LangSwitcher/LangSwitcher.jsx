import css from "./LangSwitcher.module.css";
function LangSwitcher({ lang, onSelect }) {
  return (
    <div>
      <select
        className={css.combobox}
        value={lang}
        onChange={(e) => {
          onSelect(e.target.value);
        }}
      >
        <option value="English">English</option>
        <option value="Ukrainian">Ukrainian</option>
        <option value="Polish">Polish</option>
      </select>
    </div>
  );
}
export default LangSwitcher;
