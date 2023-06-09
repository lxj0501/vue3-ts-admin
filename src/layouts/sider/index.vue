<script lang="ts" setup>
import AppLogo from '@/components/AppLogo.vue'
import MenuFooter from '@/components/MenuFooter.vue'
import IconChart from '@/components/icons/IconChart.vue'
import IconChartFill from '@/components/icons/IconChartFill.vue'
import useMenuSetting from '@/hooks/setting/useMenuSetting'
import { LayoutSider } from 'ant-design-vue'
import Menu from './components/Menu.vue'
const { isMenuCollapse } = useMenuSetting()
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
        <Menu
          :items="[
            {
              key: 'sub1',
              title: 'Dashboard',
              activeIcon: IconChartFill,
              deactiveIcon: IconChart,
              subItems: [
                {
                  key: '1',
                  title: '选项一'
                },
                {
                  key: '2',
                  title: '选项二'
                }
              ]
            }
          ]"
        >
        </Menu>
      </div>

      <MenuFooter
        class="w-full h-[72px] px-[40px]"
        :is-menu-collapse="isMenuCollapse"
      />
    </div>
  </LayoutSider>
</template>
