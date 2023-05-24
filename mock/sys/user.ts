import { MockMethod } from 'vite-plugin-mock';

export default [
  {
    url: '/api/get',
    method: 'get',
    response: (_: any) => {
      return {
        code: 0,
      };
    },
  },
] as MockMethod[];
