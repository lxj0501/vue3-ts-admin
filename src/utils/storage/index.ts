import projectSetting from '@/settings/projectSetting'
import pkg from '../../../package.json'
import { WebStorage as Storage } from './WebStorage'
import { useAppStoreOut } from '@/store/features/app'

const { storage, defaultCacheTime } = projectSetting.storageSetting

export function getStoragePrefix() {
  const {
    projectSetting: {
      appSetting: { title }
    },
    appEnvConfig: { MODE }
  } = useAppStoreOut()
  return `${title.replace(/\s/, '_')}__${MODE}__`
}

const WebStorage = new Storage({
  storage,
  prefix: `${getStoragePrefix()}${pkg.version}__`,
  cacheTime: defaultCacheTime
})

export default WebStorage
