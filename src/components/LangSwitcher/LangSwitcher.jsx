import css from "./LangSwitcher.module.css";
function LangSwitcher({ lang, onChangeLang }) {
  return (
    <div>
      <select
        className={css.combobox}
        value={lang}
        onChange={(e) => {
          onChangeLang(e.target.value);
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
