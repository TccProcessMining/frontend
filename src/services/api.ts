import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080", //link do backend
});

export default api;