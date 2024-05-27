import axios from "axios";

export const algoliaAPI = axios.create({
  baseURL: "http://hn.algolia.com/api/v1",
});

export const mockAPI = axios.create({
  baseURL: "https://65c23f3af7e6ea59682af8d1.mockapi.io",
});

export const tasksAPI = axios.create({
  baseURL: "https://62584f320c918296a49543e7.mockapi.io",
});
