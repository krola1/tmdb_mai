import axios from "axios";
import { ENV } from "../config/env";

export const api_tmdb = axios.create({
  baseURL: ENV.URL,
  headers: {
    Authorization: `Bearer ${ENV.TOKEN}`,
    Accept: `application/json`,
  },
});
