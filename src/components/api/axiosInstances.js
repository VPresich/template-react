import axios from "axios";

export const algoliaAPI = axios.create({
  baseURL: "http://hn.algolia.com/api/v1",
});
