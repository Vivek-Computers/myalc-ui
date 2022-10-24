import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `http://localhost:5000`,
});

export const http = (url, method, data = {}) => {
  switch (method) {
    case "get":
      return axiosInstance.get(url);

    case "post":
      return axiosInstance.post(url, data);
  }
};
