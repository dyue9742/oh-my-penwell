import axios from "axios";

export const inst = axios.create({
  baseURL: "http://localhost:9980/api/v1",
  headers: {
    "Cache-Control": "no-cache,no-store,max-age=0,must-revalidate",
    "X-Frame-Options": "SAMEORIGIN",
    "X-XSS-Protection": "1;mode=block",
  },
});
