<script setup lang="ts">
import { LayoutHeader } from 'ant-design-vue'
import HeaderLeft from './HeaderLeft.vue'
import HeaderRight from './HeaderRight.vue'
</script>

<template>
  <LayoutHeader
    class="flex justify-between items-center"
    style="padding: 0; background-color: white; height: 48px"
  >
    <HeaderLeft />
    <HeaderRight />
  </LayoutHeader>
</template>

<style lang="scss"></style>
