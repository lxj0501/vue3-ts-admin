import pkg from '../../../package.json'
import { getStoragePrefix } from '../env'
import { WebStorage as Storage } from './WebStorage'

const WebStorage = new Storage({
  storage: sessionStorage,
  prefix: `${getStoragePrefix()}${pkg.version}__`
})

export default WebStorage
