import axiosInstance from "../../lib/axios.js"; 

axiosInstance
  .get("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    console.log("[De-patternized Axios] GET success:", response.data);
  })
  .catch((error) => {
    console.error("[De-patternized Axios] Error:", error.message);
  });

console.log(
  "CancelToken available:",
  typeof axiosInstance.CancelToken === "function"
);
