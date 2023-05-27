import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  CreateAxiosDefaults,
  InternalAxiosRequestConfig
} from 'axios'
import { ServiceHooks } from './ServiceHooks'

export interface ServiceConfig extends CreateAxiosDefaults {
  serviceHooks: ServiceHooks
  requestOptions: RequestOptions
}

export class RequestService {
  private axiosInstance: AxiosInstance
  private readonly serviceConfig: ServiceConfig

  constructor(config: ServiceConfig) {
    this.serviceConfig = config
    this.axiosInstance = axios.create(config)
    this.setupInterceptors()
  }

  setupInterceptors() {
    const {
      serviceHooks: {
        requestInterceptor,
        requestInterceptorErrorCatch,
        responseInterceptor,
        responseInterceptorErrorCatch
      }
    } = this.serviceConfig

    this.axiosInstance.interceptors.request.use((config) => {
      return requestInterceptor(
        config as ServiceConfig
      ) as InternalAxiosRequestConfig
    }, requestInterceptorErrorCatch)

    this.axiosInstance.interceptors.response.use(
      responseInterceptor,
      responseInterceptorErrorCatch
    )
  }

  get<T>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' }, options)
  }

  post<T>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' }, options)
  }

  async request<T>(
    config: AxiosRequestConfig,
    options: RequestOptions = {}
  ): Promise<T> {
    const {
      serviceHooks: { beforeRequestHook, handleResponseHook }
    } = this.serviceConfig
    const mergeConfig = beforeRequestHook(this.serviceConfig, config, options)

    try {
      const res = await this.axiosInstance.request<any, AxiosResponse<Result>>(
        mergeConfig as any
      )
      return handleResponseHook(res, mergeConfig) as T
    } catch (error) {
      return Promise.reject(error)
    }
  }
}
