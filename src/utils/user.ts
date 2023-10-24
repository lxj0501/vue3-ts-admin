import { LoginFormState } from '@/types/user'
import WebStorage from './storage'
import { LOGIN_FORM_STATE_KEY } from '@/constants/storageKey'

export const getLoginFormState = (): LoginFormState =>
  WebStorage.get<LoginFormState>(LOGIN_FORM_STATE_KEY) ?? {
    username: '',
    password: '',
    rememberMe: false
  }

export const setLoginFormState = (e: LoginFormState) => {
  e.rememberMe
    ? WebStorage.set(LOGIN_FORM_STATE_KEY, e)
    : WebStorage.remove(LOGIN_FORM_STATE_KEY)
}
