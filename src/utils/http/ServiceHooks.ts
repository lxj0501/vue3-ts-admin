import { ResultCodeEnum } from '@/enums/httpEnum'
import { message } from 'ant-design-vue'
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { getToken } from '../auth'
import { getAppEnvConfig } from '../env'
import { ServiceConfig } from './Service'
import type { Recordable } from '@/types/global'
import type { ErrorMsgType, RequestOptions, Result } from '@/types/http'

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
  responseInterceptorErrorCatch: (error: AxiosError) => void

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
    const mergeConfig = {
      ...serviceConfig,
      requestOptions: { ...serviceConfig.requestOptions, ...options },
      ...config
    }
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
    const { code, message: msg, config } = error

    const errorMsgType = (config as any).requestOptions
      .errorMsgType as ErrorMsgType
    let errorMsg = ''
    if (code === 'ECONNABORTED' && msg.includes('timeout')) {
      errorMsg = '请求超时'
    }
    if (code === 'ERR_NETWORK') {
      errorMsg = '网络异常，请检查您的网络连接是否正常!'
    }

    if (!errorMsg) return Promise.reject(error)
    if (errorMsgType === 'message') {
      message.error(errorMsg)
    } else if (errorMsgType === 'modal') {
      console.log(123)
    }

    return Promise.reject(error)
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
