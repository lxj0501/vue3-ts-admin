import { TOKEN_KEY } from '@/constants/storageKey'
import WebStorage from './cache'

export const getToken = () => {
  return WebStorage.get(TOKEN_KEY)
}

export const setToken = (token: string) => {
  return WebStorage.set(TOKEN_KEY, token)
}