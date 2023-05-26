<template>
  <LayoutSider
    :collapsed="isMenuCollapse"
    collapsed-width="48px"
    style="background-color: #021529"
  >
    <AppLogo />
  </LayoutSider>
</template>

<script lang="ts" setup>
import { LayoutSider } from "ant-design-vue";
import AppLogo from "@/components/AppLogo.vue";
import useMenuSetting from "@/hooks/setting/useMenuSetting";
const { isMenuCollapse } = useMenuSetting();
</script>
