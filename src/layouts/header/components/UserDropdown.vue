<script setup lang="ts">
import { useGlobalSetting } from '@/hooks/setting'
import { useUserStore } from '@/store/features/user'
import { Dropdown, Menu, MenuItem } from 'ant-design-vue'
import { MenuClickEventHandler } from 'ant-design-vue/lib/menu/src/interface'
const { userInfo, logout } = useUserStore()
const { defaultAvatar } = useGlobalSetting()

const handleMenuClick: MenuClickEventHandler = (e) => {
  switch (e.key) {
    case 'logout':
      handleLogout()
      break
    default:
      break
  }
}

const handleLogout = () => {
  logout()
}
</script>

<template>
  <Dropdown>
    <div class="flex items-center px-[10px] cursor-pointer hover:bg-[#f6f6f6]">
      <img
        class="w-[30px] h-[30px]"
        :src="userInfo?.avatar ? userInfo?.avatar : defaultAvatar"
        alt=""
        srcset=""
      />
      <div class="ml-[2px]">{{ userInfo?.username }}</div>
    </div>
    <template #overlay>
      <Menu @click="handleMenuClick">
        <MenuItem key="logout"> 退出 </MenuItem>
      </Menu>
    </template>
  </Dropdown>
</template>

<style lang="scss"></style>
