<script setup lang="ts">
import { useUserStore } from '@/store/features/user'
import { Dropdown } from 'ant-design-vue'
const { userInfo } = useUserStore()
console.log(userInfo)
</script>

<template>
  <Dropdown>
    <div>123</div>
    <template #overlay> 123 </template>
  </Dropdown>
</template>

<style lang="scss"></style>
