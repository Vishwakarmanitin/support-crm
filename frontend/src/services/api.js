import axios from "axios";

const api = axios.create({
  baseURL: "https://support-crm-production-00dc.up.railway.app",
});

export default api;