import { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

export abstract class ServiceHooks {
  /**
   * @description: 请求之前调用
   */
  beforeRequestHook?: () => void;

  /**
   * @description: 请求拦截器
   */
  requestInterceptor?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig;

  /**
   * @description: 请求拦截器错误处理
   */
  requestInterceptorErrorCatch?: (error: Error) => void;

  /**
   * @description: 响应拦截器
   */
  responseInterceptor?: (response: AxiosResponse) => AxiosResponse;

  /**
   * @description: 响应拦截器错误处理
   */
  responseInterceptorErrorCatch?: (error: Error) => void;
}

export const serviceHooks: ServiceHooks = {
  beforeRequestHook() {
    console.log(123);
  },
  requestInterceptor(config) {
    return config;
  },
  requestInterceptorErrorCatch(error) {
    console.log(error);
  },
  responseInterceptor(response) {
    return response;
  },
  responseInterceptorErrorCatch(error) {
    console.log(error);
  },
};
