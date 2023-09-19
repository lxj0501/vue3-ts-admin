export interface ProjectSetting {
  appSetting: AppSetting
  userSetting: UserSetting
  storageSetting: StorageSetting
}

export interface AppSetting {
  title: string
  logo: string
  github: string
}

export interface UserSetting {
  defaultAvatar: string
}

export interface StorageSetting {
  storage: Storage
  defaultCacheTime: number
}
