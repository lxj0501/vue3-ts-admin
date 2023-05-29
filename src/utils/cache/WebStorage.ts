interface CreateWebStorageOptions {
  storage: Storage
  prefix: string
}

interface IWebStorage extends CreateWebStorageOptions {
  get: (key: string) => string | null
  set: (key: string, value: string) => void
  remove: (key: string) => void
}

export class WebStorage implements IWebStorage {
  storage: Storage
  prefix: string

  constructor({ storage, prefix }: CreateWebStorageOptions) {
    this.storage = storage
    this.prefix = prefix
  }

  private mergeKey(key: string) {
    return (this.prefix + key).toUpperCase()
  }

  get(key: string) {
    key = this.mergeKey(key)
    return this.storage.getItem(key)
  }

  set(key: string, value: string, expire?: number) {
    key = this.mergeKey(key)
    this.storage.setItem(key, value)
  }

  remove(key: string) {
    this.storage.removeItem(key)
  }
}
