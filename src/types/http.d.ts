import { ResultCodeEnum } from '@/enums/httpEnum'

export type ErrorMsgType = 'message' | 'modal' | 'none' | undefined

export interface RequestOptions {
  useMock?: boolean
  withToken?: boolean
  useNativeResponse?: boolean
  useHandledData?: boolean
  errorMsgType?: ErrorMsgType
}

export interface Result<T = any> {
  code: ResultCodeEnum
  type: 'success' | 'error' | 'warning'
  message: string
  result: T
}
