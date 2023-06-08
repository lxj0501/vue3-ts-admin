<script setup lang="ts">
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons-vue'
import { Menu, MenuItem, SubMenu } from 'ant-design-vue'
import { Key } from 'ant-design-vue/lib/_util/type'
import { ref } from 'vue'

const openKey = ref<Key>('')

const onOpenChange = (keys: Key[]) => {
  openKey.value = keys.length ? keys[keys.length - 1] : ''
}
</script>

<template>
  <Menu
    mode="inline"
    @openChange="onOpenChange"
    :openKeys="[openKey]"
    class="sider"
  >
    <SubMenu key="sub1">
      <template #icon>
        <MailOutlined />
      </template>
      <template #title> Navigation One </template>

      <MenuItem key="1">Option 1</MenuItem>
      <MenuItem key="2">Option 2</MenuItem>
    </SubMenu>
    <SubMenu key="sub2">
      <template #icon>
        <AppstoreOutlined />
      </template>
      <template #title>Navigation Two</template>
      <MenuItem key="5">Option 5</MenuItem>
      <MenuItem key="6">Option 6</MenuItem>
    </SubMenu>
  </Menu>
</template>

<style lang="scss" scoped>
::v-deep(.ant-menu-title-content) {
  color: #808191;
  font-weight: bold;
}

.dark .sider ::v-deep(.ant-menu-title-content) {
  color: #66676a;
  font-weight: bold;
}
</style>
