import { ResultCodeEnum } from '@/enums/httpEnum'

export interface RequestOptions {
  useMock?: boolean
  withToken?: boolean
  useNativeResponse?: boolean
  useHandledData?: boolean
}

export interface Result<T = any> {
  code: ResultCodeEnum
  type: 'success' | 'error' | 'warning'
  message: string
  result: T
}
