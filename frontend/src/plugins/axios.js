import axios from "axios";

const axiosPlugin = axios.create({
  baseURL: "http://localhost:3335",
  headers: {
    Authorization: localStorage.getItem("token") ?? "",
  },
});

export { axiosPlugin };
