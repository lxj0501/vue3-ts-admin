<script setup lang="ts">
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons-vue";
import useMenuSetting from "@/hooks/setting/useMenuSetting";
const { isMenuCollapse, toggleMenu } = useMenuSetting();
</script>

<template>
  <div
    class="h-[48px] flex items-center cursor-pointer px-[10px]"
    @click="toggleMenu"
  >
    <MenuUnfoldOutlined v-if="isMenuCollapse" style="font-size: 16px" />
    <MenuFoldOutlined v-else style="font-size: 16px" />
  </div>
</template>

<style lang="scss"></style>
