import { useState, useEffect } from "react";
import Controls from "../Controls/Controls";
import Progress from "../Progress/Progress";
import articles from "../../data/articles.json";
import ArticleView from "../ArticleView/ArticleView";

const getSelectedIdx = () => {
  const savedIdx = window.localStorage.getItem("article-idx");
  if (savedIdx !== null) {
    return JSON.parse(savedIdx);
  }
  return 0;
};
const Reader = ({ children }) => {
  const [selectedIdx, setSelectedIdx] = useState(getSelectedIdx);

  useEffect(() => {
    window.localStorage.setItem("article-idx", selectedIdx);
  }, [selectedIdx]);

  const handlePrev = () => {
    // setSelectedIdx((prevIdx) => Math.max(prevIdx - 1, 0));
    setSelectedIdx(selectedIdx - 1);
  };

  const handleNext = () => {
    // setSelectedIdx((prevIdx) => Math.min(prevIdx + 1, articles.length - 1));
    setSelectedIdx(selectedIdx + 1);
  };

  const visibleArticle = articles[selectedIdx];
  const isPrevDisabled = selectedIdx === 0;
  const isNextDisabled = selectedIdx === articles.length - 1;

  return (
    <div>
      <h2>{children}</h2>
      <Controls
        prevDisabled={isPrevDisabled}
        nextDisabled={isNextDisabled}
        onPrev={handlePrev}
        onNext={handleNext}
      ></Controls>
      <Progress>
        {selectedIdx + 1}|{articles.length}
      </Progress>
      <ArticleView>{visibleArticle}</ArticleView>
    </div>
  );
};
export default Reader;
