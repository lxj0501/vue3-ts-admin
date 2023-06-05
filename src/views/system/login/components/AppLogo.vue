<script setup lang="ts">
import { useAppStore } from '@/store/features/app'
import MenuFooter from '@/components/MenuFooter.vue'

const {
  projectSetting: {
    appSetting: { title, logo }
  }
} = useAppStore()
</script>

<template>
  <div class="hidden lg:block">
    <div class="mr-[256px] flex flex-col items-center">
      <div class="h-[60px]">
        <img :src="logo" alt="" class="inline h-[60px] mr-[16px] align-top" />
        <span class="text-h3 text-text-color-inverse">
          {{ title }}
        </span>
      </div>

      <div class="text-title text-text-color-inverse mt-[28px]">
        一个开箱即用的 vue3 脚手架
      </div>

      <MenuFooter class="w-[240px] mt-[52px]" />
    </div>
  </div>
</template>

<style lang="scss"></style>
