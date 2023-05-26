import { createErrorResult, createSuccessResult } from "mock/_util";
import { MockMethod } from "vite-plugin-mock";

const fakeUserList = [
  {
    username: "admin",
    password: "admin",
  },
  {
    username: "user1",
    password: "123456",
  },
];

export default [
  {
    url: "/mock-api/login",
    method: "post",
    response: ({ body }) => {
      const { username, password } = body;
      const user = fakeUserList.find(
        (item) => item.username === username && item.password === password
      );
      if (!user) {
        return createErrorResult("账号或密码错误！");
      }
      return createSuccessResult(user);
    },
  },
] as MockMethod[];
