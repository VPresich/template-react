import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import ArticleList from "../ArticleList/ArticleList";
import { fetchArticles } from "../api/articals-api";
import ArticlesForm from "../ArticlesForm/ArticlesForm";
import Button from "../Button/Button";
// import css from "./ArticlesManager.module.css";

const ArticlesManager = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (query === "") return;
    async function getArticles() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchArticles(query, page);
        setArticles((prevArticles) => [...prevArticles, ...data]);
        toast.success("HTTP success!");
      } catch (error) {
        console.log(error.message);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getArticles();
  }, [query, page]);

  const heandleSearch = async (strQuery) => {
    setQuery(strQuery);
    setPage(1);
    setArticles([]);
  };

  const handleSearchMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <ArticlesForm onSearch={heandleSearch} />
      {error && <p>Error!!! Reload page!</p>}
      {articles.length > 0 && <ArticleList items={articles} />}
      {articles.length > 0 && !isLoading && (
        <Button onClick={handleSearchMore}>Load more...</Button>
      )}
      {isLoading && <p>Articles are loading ...</p>}
      <Toaster />
    </>
  );
};

export default ArticlesManager;
