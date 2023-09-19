<script setup lang="ts">
import { Layout, LayoutContent } from 'ant-design-vue'
import LayoutSider from './sider/index.vue'
import LayoutHeader from './header/index.vue'
</script>

<template>
  <Layout class="h-full">
    <LayoutSider />
    <Layout>
      <LayoutHeader />
      <LayoutContent>
        <RouterView />
      </LayoutContent>
    </Layout>
  </Layout>
</template>

<style lang="scss" scoped></style>
