import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.ft.com/",
  timeout: 2000, // fails with 1000, request is slow
  headers: { "Access-Control-Allow-Origin": "true" }
});

export default instance;
