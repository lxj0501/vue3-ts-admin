<script setup lang="ts">
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue'
import useMenuSetting from '@/hooks/setting/useMenuSetting'
const { isMenuCollapse, toggleMenu } = useMenuSetting()
</script>

<template>
  <div class="hidden md:block">
    <div
      class="h-[40px] w-[40px] flex items-center justify-center cursor-pointer hover:bg-[#f6f6f6] dark:hover:bg-[#808191] text-text-color dark:text-text-color-inverse rounded-[8px]"
      @click="toggleMenu"
    >
      <MenuUnfoldOutlined v-if="isMenuCollapse" style="font-size: 20px" />
      <MenuFoldOutlined v-else style="font-size: 20px" />
    </div>
  </div>
</template>

<style lang="scss"></style>
