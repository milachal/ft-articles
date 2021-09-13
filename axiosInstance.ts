import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.ft.com/",
  timeout: 1000,
  headers: { "Access-Control-Allow-Origin": "true" }
});

export default instance;
