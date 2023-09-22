<script lang="ts" setup>
import AppLogo from '@/components/AppLogo.vue'
import MenuFooter from '@/components/MenuFooter.vue'
import useMenuSetting from '@/hooks/setting/useMenuSetting'
import { LayoutSider } from 'ant-design-vue'
import Menu from './components/Menu.vue'
import { useUserStore } from '@/store/features/user'
const { isMenuCollapse } = useMenuSetting()
const { menuList } = useUserStore()
</script>

<template>
  <LayoutSider
    :collapsed="isMenuCollapse"
    width="256px"
    collapsed-width="96px"
    class="hidden md:block !bg-theme-light dark:!bg-theme-dark shadow-[1px_0_0_0] shadow-[#E4E4E4] dark:shadow-[rgba(228,228,228,0.10)]"
  >
    <div class="h-full flex flex-col justify-between">
      <div class="flex-1">
        <AppLogo />
        <Menu :menus="menuList"> </Menu>
      </div>

      <MenuFooter
        class="w-full h-[72px] px-[40px]"
        :is-menu-collapse="isMenuCollapse"
      />
    </div>
  </LayoutSider>
</template>
