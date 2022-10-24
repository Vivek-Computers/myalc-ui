import { useMutation } from "react-query";
import { Service } from "../../axios";

export const useLogin = (options = {}) => {
  return useMutation(
    async (data) => {
      return await Service.getToken(data);
    },
    {
      ...options,
    }
  );
};
