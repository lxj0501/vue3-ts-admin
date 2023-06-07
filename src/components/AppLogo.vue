<script setup lang="ts">
import useMenuSetting from '@/hooks/setting/useMenuSetting'
import { useAppStore } from '@/store/features/app'

const {
  projectSetting: {
    appSetting: { title, logo }
  }
} = useAppStore()
const { isMenuCollapse } = useMenuSetting()
</script>

<template>
  <div class="h-[96px] md:h-[112px] p-[10px] flex items-center justify-center">
    <img :src="logo" alt="" class="w-[28px] h-[28px]" />
    <div
      class="ml-2 text-text-color dark:text-text-color-inverse text-[18px] font-[700] overflow-hidden text-ellipsis whitespace-nowrap"
      v-show="!isMenuCollapse"
    >
      {{ title }}
    </div>
  </div>
</template>

<style lang="scss"></style>
