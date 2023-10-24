import { MD5 } from 'crypto-js'
export const md5 = (input: string, salt?: string): string => {
  if (salt) {
    input += salt
  }
  return MD5(input).toString()
}
