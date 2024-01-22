import axios from "axios";

const inst = axios.create({
	baseURL: "http://localhost:9980/api/v1",
  headers: {
		"Access-Control-Allow-Origin": "*",
    "X-Content-Type-Options": "nosniff",
    "X-XSS-Protection": "1;mode=block",
    "X-Frame-Options": "SAMEORIGIN",
    "Cache-Control": "no-cache,no-store,max-age=0,must-revalidate",
  },
  timeout: 1000,
  params: {},
});

export default inst;
