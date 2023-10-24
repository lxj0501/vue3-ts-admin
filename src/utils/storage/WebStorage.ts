import { Nullable } from '@/types/global'

interface CreateWebStorageOptions {
  storage: Storage
  prefix: string
  cacheTime: number
}

interface IWebStorage extends CreateWebStorageOptions {
  get: <T>(key: string) => Nullable<T>
  set: (key: string, value: string) => void
  remove: (key: string) => void
}

export class WebStorage implements IWebStorage {
  storage: Storage
  prefix: string
  cacheTime: number

  constructor({ storage, prefix, cacheTime }: CreateWebStorageOptions) {
    this.storage = storage
    this.prefix = prefix
    this.cacheTime = cacheTime
  }

  private mergeKey(key: string) {
    return (this.prefix + key).toUpperCase()
  }

  get<T = any>(key: string, def: any = null): Nullable<T> {
    const value = this.storage.getItem(this.mergeKey(key))
    if (value) {
      try {
        const { data, expireAt } = JSON.parse(value)
        if (expireAt === null || expireAt >= Date.now()) {
          return data
        }
        this.remove(key)
      } catch (error) {
        return def
      }
    }

    return def
  }

  set(key: string, value: any, cacheTime: number | null = this.cacheTime) {
    const stringifyData = JSON.stringify({
      data: value,
      expireAt:
        cacheTime === null ? null : new Date().getTime() + cacheTime * 1000
    })
    this.storage.setItem(this.mergeKey(key), stringifyData)
  }

  remove(key: string) {
    this.storage.removeItem(this.mergeKey(key))
  }
}
