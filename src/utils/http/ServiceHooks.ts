import { ResultCodeEnum } from '@/enums/httpEnum'
import { message } from 'ant-design-vue'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { getToken } from '../auth'
import { getAppEnvConfig } from '../env'
import { ServiceConfig } from './Service'

export interface ServiceHooks {
  /**
   * @description: 请求之前调用
   */
  beforeRequestHook: (
    serviceConfig: ServiceConfig,
    config: AxiosRequestConfig,
    options: RequestOptions
  ) => ServiceConfig

  /**
   * @description: 请求拦截器
   */
  requestInterceptor: (config: ServiceConfig) => ServiceConfig

  /**
   * @description: 请求拦截器错误处理
   */
  requestInterceptorErrorCatch: (error: Error) => void

  /**
   * @description: 响应拦截器
   */
  responseInterceptor: (response: AxiosResponse) => AxiosResponse

  /**
   * @description: 响应拦截器错误处理
   */
  responseInterceptorErrorCatch: (error: Error) => void

  /**
   * @description: 响应之后处理
   */
  handleResponseHook: (
    response: AxiosResponse<Result>,
    mergeConfig: ServiceConfig
  ) => any
}

export const serviceHooks: ServiceHooks = {
  beforeRequestHook(
    serviceConfig: ServiceConfig,
    config: AxiosRequestConfig,
    options: RequestOptions
  ) {
    const mergeConfig = { ...serviceConfig, ...config, ...options }
    const { VITE_BASE_URL, VITE_MOCK_BASE } = getAppEnvConfig()
    const {
      requestOptions: { useMock }
    } = mergeConfig
    mergeConfig.url =
      (useMock ? VITE_MOCK_BASE : VITE_BASE_URL) + mergeConfig.url

    return mergeConfig
  },
  requestInterceptor(config) {
    const { withToken } = config.requestOptions
    const token = getToken()
    if (withToken && token) {
      ;(config.headers as Recordable).Authorization = token
    }
    return config
  },
  requestInterceptorErrorCatch(error) {
    return Promise.reject(error)
  },
  responseInterceptor(response) {
    return response
  },
  responseInterceptorErrorCatch(error) {
    console.error('请求失败:', error)
  },
  handleResponseHook(response, mergeConfig) {
    const { useNativeResponse, useHandledData } = mergeConfig.requestOptions
    if (useNativeResponse) {
      return response
    }

    if (!useHandledData) {
      return response.data
    }

    const { data } = response

    if (!data) {
      throw new Error('请求出错')
    }

    const { code, message: msg, result } = data
    const isSuccess = code === ResultCodeEnum.SUCCESS
    if (isSuccess) {
      return result
    }

    switch (code) {
      case ResultCodeEnum.ERROR:
        message.error(msg)
        break

      default:
        break
    }
  }
}
