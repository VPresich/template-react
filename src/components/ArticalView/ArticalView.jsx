// import css from "./ArticalView.module.css";

const ArticalView = ({ children }) => {
  return (
    <article>
      <h2>{children.title}</h2>
      <p>{children.text}</p>
    </article>
  );
};

export default ArticalView;
