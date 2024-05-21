// import css from "./ArticleView.module.css";

const ArticleView = ({ children }) => {
  return (
    <article>
      <h2>{children.title}</h2>
      <p>{children.text}</p>
    </article>
  );
};

export default ArticleView;
