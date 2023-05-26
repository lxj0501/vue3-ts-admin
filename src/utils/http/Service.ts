import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  CreateAxiosDefaults
} from 'axios'
import { ServiceHooks } from './ServiceHooks'

export interface ServiceConfig extends CreateAxiosDefaults {
  serviceHooks: ServiceHooks
  requestOptions?: RequestOptions
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
    this.axiosInstance.interceptors.request.use(
      requestInterceptor,
      requestInterceptorErrorCatch
    )

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

  request<T>(
    config: AxiosRequestConfig,
    options: RequestOptions = {}
  ): Promise<T> {
    const {
      serviceHooks: { beforeRequestHook }
    } = this.serviceConfig
    const serviceConfig = beforeRequestHook({
      ...this.serviceConfig,
      ...config,
      ...options
    })

    return this.axiosInstance.request(serviceConfig as any)
  }
}
