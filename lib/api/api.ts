import axios from "axios";

const API_TOKEN = process.env.NEXT_PUBLIC_API_URL;

export const api = axios.create({
  // baseURL: API_TOKEN + "/api",
  // baseURL: API_TOKEN || "",
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
