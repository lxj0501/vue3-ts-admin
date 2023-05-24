import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  CreateAxiosDefaults,
} from 'axios';
import { ServiceHooks } from './ServiceHooks';

interface CreateServiceConfig extends CreateAxiosDefaults {
  serviceHooks: ServiceHooks;
  requestOptions?: RequestOptions;
}

export class RequestService {
  private axiosInstance: AxiosInstance;
  private readonly config: CreateServiceConfig;

  constructor(config: CreateServiceConfig) {
    this.config = config;
    this.axiosInstance = axios.create(config);
    this.setupInterceptors();
  }

  setupInterceptors() {
    const {
      serviceHooks: {
        requestInterceptor,
        requestInterceptorErrorCatch,
        responseInterceptor,
        responseInterceptorErrorCatch,
      },
    } = this.config;
    this.axiosInstance.interceptors.request.use(
      requestInterceptor,
      requestInterceptorErrorCatch
    );

    this.axiosInstance.interceptors.response.use(
      responseInterceptor,
      responseInterceptorErrorCatch
    );
  }

  get<T = any>(
    config: AxiosRequestConfig,
    options: RequestOptions
  ): Promise<T> {
    return this.request({ ...config, method: 'GET' }, options);
  }

  request<T = any>(
    config: AxiosRequestConfig,
    options: RequestOptions
  ): Promise<T> {
    console.log(options);
    return this.axiosInstance.request(config);
  }
}
