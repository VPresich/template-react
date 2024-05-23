// import css from "./ArticlesManager.module.css";
import { useEffect, useState } from "react";
import ArticleList from "../ArticleList/ArticleList";
import { fetchArticles } from "../api/articals-api";

const ArticlesManager = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    async function getArticles() {
      const response = await fetchArticles();
      setArticles(response.data.hits);
    }
    getArticles();
  }, []);

  return <>{articles.length !== 0 && <ArticleList items={articles} />}</>;
};

export default ArticlesManager;
