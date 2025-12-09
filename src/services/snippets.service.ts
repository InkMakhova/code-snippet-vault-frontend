import axios from "axios";

export const api = axios.create({
  baseURL: "https://snippet-api-ulwt.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const SNIPPETS_PATH = "/snippets";
