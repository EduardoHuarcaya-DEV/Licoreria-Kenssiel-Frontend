import axios from "axios";

const URL_BASE = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
  baseURL: URL_BASE,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
