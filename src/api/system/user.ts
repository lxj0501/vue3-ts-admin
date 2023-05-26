import { http } from "@/utils/http";

export const API_LOGIN = (loginParams: LoginParams) => {
  return http.post({
    url: "/login",
    data: loginParams,
  });
};
