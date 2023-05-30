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
  <div class="h-[48px] p-[10px] flex items-center">
    <img :src="logo" alt="" class="w-[28px] h-[28px]" />
    <div
      class="ml-2 text-white text-[16px] font-[700] overflow-hidden text-ellipsis whitespace-nowrap"
      v-show="!isMenuCollapse"
    >
      {{ title }}
    </div>
  </div>
</template>

<style lang="scss"></style>
