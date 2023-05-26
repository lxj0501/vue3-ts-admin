import { AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { getAppEnvConfig } from '../env'
import { ServiceConfig } from './Service'

export interface ServiceHooks {
  /**
   * @description: 请求之前调用
   */
  beforeRequestHook: (serviceConfig: ServiceConfig) => ServiceConfig

  /**
   * @description: 请求拦截器
   */
  requestInterceptor?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig

  /**
   * @description: 请求拦截器错误处理
   */
  requestInterceptorErrorCatch?: (error: Error) => void

  /**
   * @description: 响应拦截器
   */
  responseInterceptor?: (response: AxiosResponse) => AxiosResponse

  /**
   * @description: 响应拦截器错误处理
   */
  responseInterceptorErrorCatch?: (error: Error) => void
}

export const serviceHooks: ServiceHooks = {
  beforeRequestHook(serviceConfig: ServiceConfig) {
    const { VITE_BASE_URL, VITE_MOCK_BASE } = getAppEnvConfig()
    const { requestOptions: { useMock } = {} } = serviceConfig

    serviceConfig.url =
      (useMock ? VITE_MOCK_BASE : VITE_BASE_URL) + serviceConfig.url

    return serviceConfig
  },
  requestInterceptor(config) {
    return config
  },
  requestInterceptorErrorCatch(error) {
    console.log(error)
  },
  responseInterceptor(response) {
    return response
  },
  responseInterceptorErrorCatch(error) {
    console.log(error)
  }
}
