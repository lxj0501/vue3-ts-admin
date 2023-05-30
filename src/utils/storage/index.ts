import projectSetting from '@/settings/projectSetting'
import pkg from '../../../package.json'
import { getStoragePrefix } from '../env'
import { WebStorage as Storage } from './WebStorage'

const { storage, defaultCacheTime } = projectSetting.storageSetting

const WebStorage = new Storage({
  storage,
  prefix: `${getStoragePrefix()}${pkg.version}__`,
  cacheTime: defaultCacheTime
})

export default WebStorage
