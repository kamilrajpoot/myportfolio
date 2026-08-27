import axios from "axios";
export const getCertifications = () => api.get("/certifications");

const API_URL = import.meta.env.VITE_API_URL || "/api";

const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

export const submitContact = (payload) => api.post("/contact", payload);
export default api;
