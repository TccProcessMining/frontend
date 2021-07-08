import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000", //link do backend
});

export default api;