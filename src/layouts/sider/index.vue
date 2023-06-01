<script lang="ts" setup>
import { LayoutSider } from 'ant-design-vue'
import AppLogo from '@/components/AppLogo.vue'
import useMenuSetting from '@/hooks/setting/useMenuSetting'
import MenuFooter from '@/components/MenuFooter.vue'
const { isMenuCollapse } = useMenuSetting()
</script>

<template>
  <LayoutSider
    :collapsed="isMenuCollapse"
    width="256px"
    collapsed-width="96px"
    class="hidden md:block !bg-theme dark:!bg-theme-dark shadow-[1px_0_0_0] shadow-grey100 dark:shadow-grey10"
  >
    <div class="h-full flex flex-col justify-between">
      <AppLogo />
      <MenuFooter
        class="w-full h-[72px] px-[40px]"
        :is-menu-collapse="isMenuCollapse"
      />
    </div>
  </LayoutSider>
</template>
