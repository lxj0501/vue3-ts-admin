export interface Permission {
  id: number | string
  name: string
  parentId: number | string
  route: string
}

export interface MenuItem {
  icon?: string
  name: string
  path: string
}
