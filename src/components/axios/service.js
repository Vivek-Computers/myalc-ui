import { http } from "./axios";

export const Service = {
  getToken: async (data) => http("/getToken", "post", data),
};
