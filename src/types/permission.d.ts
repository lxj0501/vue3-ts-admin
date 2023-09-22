export interface PermInfo {
  menuList: MenuPerm[]
}

export interface MenuPerm {
  id: number | string
  name: string
  parentId: number | string | undefined
  path: string
}
