interface ProjectSetting {
  appSetting: AppSetting
  userSetting: UserSetting
  storageSetting: StorageSetting
}

interface AppSetting {
  title: string
  logo: string
  github: string
}

interface UserSetting {
  defaultAvatar: string
}

interface StorageSetting {
  storage: Storage
  defaultCacheTime: number
}
