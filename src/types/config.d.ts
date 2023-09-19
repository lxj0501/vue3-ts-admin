export interface GlobalEnvConfig extends ImportMetaEnv {
  VITE_APP_TITLE: string
  VITE_USE_MOCK: boolean
  VITE_BASE_URL: string
  VITE_MOCK_BASE: string
}

export interface MenuSetting {
  isCollapse: boolean
}

export interface A {
  a: string
}
