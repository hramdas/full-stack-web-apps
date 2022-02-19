import axios from "axios";
export const records = axios.create({
  baseURL: "http://localhost:3001",
});
