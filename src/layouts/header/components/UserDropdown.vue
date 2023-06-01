<script setup lang="ts">
import { useAppStore } from '@/store/features/app'
import { useUserStore } from '@/store/features/user'
import { Dropdown, Menu, MenuItem } from 'ant-design-vue'
import { MenuClickEventHandler } from 'ant-design-vue/lib/menu/src/interface'
const { userInfo, logout } = useUserStore()
const {
  projectSetting: {
    userSetting: { defaultAvatar }
  }
} = useAppStore()

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
    <div class="flex items-center cursor-pointer">
      <img
        class="w-[40px] h-[40px]"
        :src="userInfo?.avatar ? userInfo?.avatar : defaultAvatar"
        alt=""
        srcset=""
      />
    </div>
    <template #overlay>
      <Menu @click="handleMenuClick">
        <MenuItem key="logout"> 退出 </MenuItem>
      </Menu>
    </template>
  </Dropdown>
</template>

<style lang="scss"></style>
