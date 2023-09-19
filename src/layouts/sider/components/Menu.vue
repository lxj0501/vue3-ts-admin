<script setup lang="ts">
import { Menu, SubMenu, MenuItem } from 'ant-design-vue'
import { Key } from 'ant-design-vue/lib/_util/type'
import { SelectEventHandler } from 'ant-design-vue/lib/menu/src/interface'
import { ref } from 'vue'

const props = defineProps<{
  items: {
    key: Key
    title: string
    activeIcon: any
    deactiveIcon: any
    subItems: { key: Key; title: string }[]
  }[]
}>()
const openKey = ref<Key>('')

const onOpenChange = (keys: Key[]) => {
  openKey.value = keys.length ? keys[keys.length - 1] : ''
}

const onSelect: SelectEventHandler = (value) => {
  console.log(value)
}
</script>

<template>
  <Menu
    mode="inline"
    @openChange="onOpenChange"
    @select="onSelect"
    :openKeys="[openKey]"
    class="sider !border-none"
  >
    <SubMenu
      v-for="item in props.items"
      :key="item.key"
      :class="{ active: openKey === item.key }"
    >
      <template #icon>
        <div>
          <component
            :is="openKey === item.key ? item.activeIcon : item.deactiveIcon"
          />
        </div>
      </template>
      <template #title>
        <span class="sub-menu"> {{ item.title }} </span>
      </template>
      <MenuItem v-for="subItem in item.subItems" :key="subItem.key">
        {{ subItem.title }}
      </MenuItem>
    </SubMenu>
  </Menu>
</template>

<style lang="scss" scoped>
@import '@/design/variables/colors.scss';

::v-deep(.ant-menu-title-content) {
  color: #808191;
  font-weight: bold;

  &:hover {
    color: $primary-color;
  }
}

.dark .sider ::v-deep(.ant-menu-title-content) {
  color: #66676a;
  font-weight: bold;
}

.active .sub-menu {
  color: $text-color;
}

.dark .active .sub-menu {
  color: $text-color-inverse;
}

.sider.ant-menu {
  background-color: $theme-light;
  transition: background-color 0.2s !important;
}

.dark .sider.ant-menu {
  background-color: $theme-dark;
}

.sider ::v-deep(.ant-menu-sub.ant-menu-inline) {
  background-color: $theme-light;
  transition: background-color 0.2s;
}

.dark .sider ::v-deep(.ant-menu-sub.ant-menu-inline) {
  background-color: $theme-dark;
}

::v-deep(.ant-menu-submenu-title) {
  background-color: transparent !important;
}

.ant-menu.ant-menu-inline-collapsed.sider ::v-deep(.ant-menu-submenu-title) {
  padding: 0 calc(50% - 10px);
}

::v-deep(.ant-menu-title-content) {
  margin-left: 20px !important;
}

::v-deep(.ant-menu-item .ant-menu-title-content) {
  margin-left: 32px !important;
}

::v-deep(.ant-menu-submenu-title) {
  margin: 0 !important;
  display: flex;
  align-items: center;
}

::v-deep(.ant-menu-item-selected) {
  background: transparent !important;
}

::v-deep(.ant-menu-item) {
  background: transparent !important;
}

::v-deep(.ant-menu-item-selected .ant-menu-title-content) {
  color: $primary-color;
}
</style>
