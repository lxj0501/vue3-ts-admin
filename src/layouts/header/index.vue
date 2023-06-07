<script setup lang="ts">
import { LayoutHeader } from 'ant-design-vue'
import HeaderLeft from './HeaderLeft.vue'
import HeaderRight from './HeaderRight.vue'
</script>

<template>
  <LayoutHeader
    class="flex justify-between items-center !h-[96px] md:!h-[112px] !px-[32px] !bg-theme-light dark:!bg-theme-dark"
  >
    <HeaderLeft />
    <HeaderRight />
  </LayoutHeader>
</template>

<style lang="scss"></style>
