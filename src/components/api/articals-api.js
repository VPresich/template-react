import { algoliaAPI } from "./axiosInstances";

export const fetchArticles = async (strSearch, page) => {
  const response = await algoliaAPI.get("/search", {
    params: {
      query: strSearch,
      hitsPerPage: 10,
      page,
    },
  });

  return response.data.hits;
};
